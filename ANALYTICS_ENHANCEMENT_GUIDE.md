# 📊 Enhanced Google Analytics Implementation Guide

## Overview

This guide covers the comprehensive Google Analytics implementation for the Sattuni website, including advanced event tracking, user engagement metrics, and business intelligence features.

## 🚀 What's New

### Enhanced Event Tracking
- **Scroll Depth Tracking**: Monitors user engagement through page scrolling (25%, 50%, 75%, 90%, 100%)
- **Form Interaction Tracking**: Tracks field focus, validation errors, and submission completion
- **Menu Item Tracking**: Monitors which menu items users view and interact with
- **Image Interaction Tracking**: Tracks when users view or interact with images
- **Navigation Tracking**: Monitors user journey between pages
- **Business Action Tracking**: Tracks specific business events (promo views, special offers)

### E-commerce Integration
- **Enhanced Catering Inquiries**: Tracks estimated value, guest count, and event type
- **Conversion Tracking**: Monitors form submissions as conversion events
- **Value Estimation**: Automatically calculates potential revenue from inquiries

### User Engagement Scoring
- **Engagement Score**: Calculates user engagement based on multiple factors
- **Time on Page**: Tracks how long users spend on each page
- **Interaction Depth**: Measures how deeply users engage with content

## 📈 Tracked Events

### Page-Level Events
```javascript
// Automatic page view tracking
trackPageView('/catering', 'Catering Page')

// Scroll depth milestones
trackScrollDepth(25)  // 25% scroll
trackScrollDepth(50)  // 50% scroll
trackScrollDepth(75)  // 75% scroll
trackScrollDepth(90)  // 90% scroll
trackScrollDepth(100) // 100% scroll

// Time on page
trackTimeOnPage(180, '/catering') // 3 minutes on catering page
```

### Form Events
```javascript
// Form interaction tracking
trackFormStart('catering-contact', 'catering_inquiry')
trackFormFieldFocus('catering-contact', 'email')
trackFormValidationError('catering-contact', 'email', 'invalid_format')
trackFormSubmissionEnhanced('catering-contact', {
  estimatedValue: 750,
  guestCount: 30,
  eventType: 'Hochzeit',
  timeToComplete: 120
})
```

### Business Events
```javascript
// Enhanced catering inquiry tracking
trackCateringInquiryEnhanced('hero-section', {
  estimatedValue: 500,
  guestCount: 20,
  pricePerPerson: 25,
  eventType: 'general_inquiry'
})

// Business action tracking
trackBusinessAction('christmas_promo_view', {
  promo_code: 'SATT25',
  discount_percentage: 10,
  event_type: 'christmas_catering'
})
```

### Content Interaction
```javascript
// Menu item tracking
trackMenuItemView('Hummus', 'Vorspeisen', 'dips-section')
trackMenuItemClick('Falafel Teller', 'Hauptgerichte', 'falafel-section')

// Image interaction tracking
trackImageInteraction('hero-catering', 'view', 'catering-hero-section')
```

## 🎯 Key Metrics to Monitor

### Conversion Metrics
- **Catering Inquiry Rate**: Percentage of visitors who submit catering inquiries
- **Form Completion Rate**: Percentage of users who complete forms
- **Order Button Click Rate**: Percentage of users who click order buttons
- **Engagement Score**: Overall user engagement measurement

### Engagement Metrics
- **Scroll Depth**: How far users scroll on each page
- **Time on Page**: Average time spent on each page
- **Bounce Rate**: Percentage of single-page sessions
- **Page Views per Session**: Average pages viewed per session

### Business Metrics
- **Estimated Revenue**: Calculated from catering inquiries
- **Event Type Distribution**: Types of events users are interested in
- **Geographic Distribution**: Where your customers are located
- **Device/Browser Analytics**: Technical preferences of your users

## 📊 Google Analytics 4 Reports

### Custom Reports to Create

1. **Catering Performance Report**
   - Dimensions: Page, Event Type, Source
   - Metrics: Catering Inquiries, Estimated Value, Conversion Rate

2. **User Engagement Report**
   - Dimensions: Page, Scroll Depth, Engagement Score
   - Metrics: Sessions, Average Engagement Score, Time on Page

3. **Form Performance Report**
   - Dimensions: Form Name, Field Name, Error Type
   - Metrics: Form Starts, Completions, Validation Errors

4. **Content Interaction Report**
   - Dimensions: Menu Item, Category, Section
   - Metrics: Views, Clicks, Engagement Rate

### Conversion Goals Setup

1. **Primary Goal**: Catering Inquiry Submission
   - Event: `catering_inquiry`
   - Value: Estimated value from form data

2. **Secondary Goal**: Order Button Clicks
   - Event: `order_button_click`
   - Value: Average order value

3. **Engagement Goal**: High Engagement Score
   - Event: `engagement_score`
   - Condition: Score > 70

## 🔧 Implementation Details

### Hooks Available

#### `useScrollTracking()`
```javascript
const { addEngagementFactor } = useScrollTracking();

// Add custom engagement factors
addEngagementFactor('catering_cta_hero');
addEngagementFactor('christmas_promo_interaction');
```

#### `useFormTracking(options)`
```javascript
const { trackFieldFocus, trackValidationError, trackSubmission } = useFormTracking({
  formName: 'catering-contact',
  formType: 'catering_inquiry',
  onSubmission: (formData) => {
    console.log('Form submitted:', formData);
  }
});
```

#### `useMenuTracking()`
```javascript
const { trackItemView, trackItemClick, trackVisibleItems } = useMenuTracking();

// Auto-track visible menu items
useEffect(() => {
  const menuItems = document.querySelectorAll('[data-item-name]');
  trackVisibleItems(Array.from(menuItems));
}, []);
```

### Analytics Context Usage

```javascript
import { useAnalytics } from '@/contexts';

const { 
  trackCateringInquiryEnhanced,
  trackBusinessAction,
  trackImageInteraction,
  trackEngagementScore
} = useAnalytics();

// Track enhanced events
trackCateringInquiryEnhanced('hero-section', {
  estimatedValue: 500,
  guestCount: 20,
  pricePerPerson: 25
});
```

## 📱 Real-Time Monitoring

### Google Analytics Real-Time Reports
- **Active Users**: Currently browsing your site
- **Top Pages**: Most viewed pages right now
- **Top Events**: Most triggered events in real-time
- **Traffic Sources**: Where current users came from

### Custom Dashboards
Access the built-in analytics dashboard at `/analytics` (if implemented) to see:
- Key performance indicators
- Top performing pages
- User engagement metrics
- Conversion funnel analysis

## 🎯 Actionable Insights

### High-Value Pages
Monitor these pages for optimization opportunities:
- `/catering` - Primary conversion page
- `/spezialitaeten` - Menu exploration
- `/` - Landing page performance

### Conversion Optimization
- **Form Abandonment**: Track where users drop off in forms
- **Button Performance**: A/B test different CTA buttons
- **Content Engagement**: Optimize low-engagement content

### User Experience Improvements
- **Scroll Depth**: Improve content for low-scroll pages
- **Time on Page**: Enhance engaging content
- **Bounce Rate**: Optimize landing pages

## 🔍 Debugging and Testing

### Testing Events
```javascript
// Enable debug mode in development
if (process.env.NODE_ENV === 'development') {
  window.gtag('config', GA_TRACKING_ID, {
    debug_mode: true
  });
}
```

### Event Verification
1. Open Google Analytics Real-Time reports
2. Perform actions on your site
3. Verify events appear in real-time
4. Check event parameters and values

### Common Issues
- **Events not firing**: Check if GA_TRACKING_ID is set
- **Missing parameters**: Verify event data structure
- **Duplicate events**: Ensure proper event deduplication

## 📈 Performance Impact

### Optimization Features
- **Lazy Loading**: Analytics scripts load asynchronously
- **Event Batching**: Multiple events batched for efficiency
- **Conditional Tracking**: Only track in production environment
- **Minimal Bundle Impact**: Analytics code is tree-shaken

### Privacy Compliance
- **GDPR Compliance**: IP anonymization enabled
- **Cookie Consent**: Respects user privacy preferences
- **Data Minimization**: Only collect necessary data

## 🚀 Next Steps

1. **Set up Google Analytics 4** with your tracking ID
2. **Configure custom events** in GA4 interface
3. **Create custom reports** for business insights
4. **Set up conversion goals** for key actions
5. **Monitor performance** and optimize based on data

## 📞 Support

For questions about the analytics implementation:
- Check the browser console for error messages
- Verify your GA_TRACKING_ID is correctly set
- Test events in Google Analytics Real-Time reports
- Review the analytics configuration files

---

**Note**: This implementation provides comprehensive tracking while maintaining user privacy and site performance. All tracking is GDPR-compliant and optimized for minimal impact on site speed.
