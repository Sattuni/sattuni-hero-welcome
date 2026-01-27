#!/usr/bin/env node
/**
 * Build Quality Gate: Verify Pre-rendered HTML
 * 
 * This script validates that all pre-rendered pages meet SEO requirements:
 * - Contains exactly one <h1> tag
 * - Has minimum word count (150 for pages, 400 for blog posts)
 * - Has required meta tags in <head>
 * - Has prerender-ready marker
 * 
 * Run after build: node scripts/verify-prerender.mjs
 * Exit code 1 on failure (fails CI/CD pipeline)
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative } from 'path';

const DIST_DIR = 'dist';
const MIN_WORDS_DEFAULT = 150;
const MIN_WORDS_BLOG = 400;

// Required meta tags that must be present
const REQUIRED_META = [
  { selector: 'title', name: '<title>' },
  { selector: 'meta[name="description"]', name: 'meta description' },
  { selector: 'meta[property="og:title"]', name: 'og:title' },
  { selector: 'meta[property="og:description"]', name: 'og:description' },
  { selector: 'meta[property="og:image"]', name: 'og:image' },
  { selector: 'meta[name="prerender-ready"][content="true"]', name: 'prerender-ready marker (content=true)' },
];

// Track results
const results = {
  passed: 0,
  failed: 0,
  errors: [],
};

/**
 * Find all index.html files recursively
 */
function findHtmlFiles(dir, files = []) {
  if (!existsSync(dir)) {
    return files;
  }
  
  const entries = readdirSync(dir);
  
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip assets directory
      if (entry !== 'assets') {
        findHtmlFiles(fullPath, files);
      }
    } else if (entry === 'index.html') {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Extract text content from HTML (strip tags)
 */
function extractTextContent(html) {
  // Remove script and style content
  let text = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  text = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  // Remove all HTML tags
  text = text.replace(/<[^>]+>/g, ' ');
  // Normalize whitespace
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

/**
 * Count words in text
 */
function countWords(text) {
  if (!text) return 0;
  return text.split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Check if HTML contains a selector pattern
 */
function hasSelector(html, selector) {
  if (selector === 'title') {
    return /<title[^>]*>[^<]+<\/title>/i.test(html);
  }
  
  // Handle attribute selectors like meta[name="x"][content="y"]
  // Parse selector for multiple attributes
  const tagMatch = selector.match(/^(\w+)/);
  if (!tagMatch) return false;
  
  const tag = tagMatch[1];
  const attrMatches = [...selector.matchAll(/\[([^\]]+)\]/g)];
  
  if (attrMatches.length === 0) return false;
  
  // Build regex pattern that matches all attributes
  // Find all tags of that type and check if they have all required attributes
  const tagPattern = new RegExp(`<${tag}[^>]*>`, 'gi');
  const tags = html.match(tagPattern) || [];
  
  return tags.some(tagStr => {
    return attrMatches.every(match => {
      const attrPart = match[1];
      const attrMatch = attrPart.match(/^([^=]+)="([^"]+)"$/);
      if (attrMatch) {
        const [, attrName, attrValue] = attrMatch;
        const attrPattern = new RegExp(`${attrName}=["']${attrValue}["']`, 'i');
        return attrPattern.test(tagStr);
      }
      return false;
    });
  });
}

/**
 * Count h1 tags
 */
function countH1Tags(html) {
  const matches = html.match(/<h1[^>]*>/gi);
  return matches ? matches.length : 0;
}

/**
 * Get route from file path
 */
function getRoute(filePath) {
  const relativePath = relative(DIST_DIR, filePath);
  const route = '/' + relativePath.replace(/[\/\\]index\.html$/, '').replace(/\\/g, '/');
  return route === '/.' ? '/' : route;
}

/**
 * Validate a single HTML file
 */
function validateHtmlFile(filePath) {
  const route = getRoute(filePath);
  const isBlogPost = route.startsWith('/catering/blog/') && route !== '/catering/blog';
  const minWords = isBlogPost ? MIN_WORDS_BLOG : MIN_WORDS_DEFAULT;
  
  let html;
  try {
    html = readFileSync(filePath, 'utf-8');
  } catch (err) {
    results.errors.push(`${route}: Failed to read file - ${err.message}`);
    results.failed++;
    return;
  }
  
  const errors = [];
  
  // Check 1: H1 tag exists
  const h1Count = countH1Tags(html);
  if (h1Count === 0) {
    errors.push('Missing <h1> tag');
  } else if (h1Count > 1) {
    errors.push(`Multiple <h1> tags found (${h1Count})`);
  }
  
  // Check 2: Word count
  const textContent = extractTextContent(html);
  const wordCount = countWords(textContent);
  if (wordCount < minWords) {
    errors.push(`Insufficient word count: ${wordCount} (min: ${minWords})`);
  }
  
  // Check 3: Required meta tags
  for (const meta of REQUIRED_META) {
    if (!hasSelector(html, meta.selector)) {
      errors.push(`Missing ${meta.name}`);
    }
  }
  
  // Record results
  if (errors.length > 0) {
    results.failed++;
    for (const error of errors) {
      results.errors.push(`${route}: ${error}`);
    }
  } else {
    results.passed++;
    console.log(`✓ ${route} (${wordCount} words)`);
  }
}

/**
 * Main execution
 */
function main() {
  console.log('\n========================================');
  console.log('🔍 Pre-render Quality Gate');
  console.log('========================================\n');
  
  // Check if dist exists
  if (!existsSync(DIST_DIR)) {
    console.error(`❌ Error: ${DIST_DIR} directory not found. Run build first.`);
    process.exit(1);
  }
  
  // Find all HTML files
  const htmlFiles = findHtmlFiles(DIST_DIR);
  
  if (htmlFiles.length === 0) {
    console.error('❌ Error: No index.html files found in dist/');
    process.exit(1);
  }
  
  console.log(`Found ${htmlFiles.length} pre-rendered pages:\n`);
  
  // Validate each file
  for (const file of htmlFiles) {
    validateHtmlFile(file);
  }
  
  // Print summary
  console.log('\n========================================');
  console.log('📊 Results Summary');
  console.log('========================================');
  console.log(`✓ Passed: ${results.passed}`);
  console.log(`✗ Failed: ${results.failed}`);
  
  // Print errors
  if (results.errors.length > 0) {
    console.log('\n❌ Errors:\n');
    for (const error of results.errors) {
      console.error(`  • ${error}`);
    }
  }
  
  // Exit with error if any failures
  if (results.failed > 0) {
    console.log('\n🚫 BUILD FAILED: Pre-render quality check did not pass.\n');
    process.exit(1);
  }
  
  console.log('\n✅ BUILD PASSED: All pages meet SEO requirements.\n');
  process.exit(0);
}

main();
