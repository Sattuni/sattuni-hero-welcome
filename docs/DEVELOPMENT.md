# 👨‍💻 Entwickler-Dokumentation

Umfassende Anleitung für Entwickler, die das Sattuni-Projekt weiterentwickeln möchten.

## 🏗️ Architektur-Übersicht

### 🎯 Design-Prinzipien

1. **Feature-Driven Architecture** - Code ist nach Business-Features organisiert
2. **Type-First Development** - TypeScript steht im Mittelpunkt
3. **Component Composition** - Kleine, wiederverwendbare Komponenten
4. **Service Layer Pattern** - Trennung von UI und Business Logic
5. **Configuration over Convention** - Explizite Konfiguration

### 📐 Code-Struktur

```
src/
├── components/         # UI-Komponenten (organisiert nach Features)
├── pages/             # Route-spezifische Komponenten  
├── services/          # Business Logic & API Calls
├── hooks/             # Wiederverwendbare React Logic
├── types/             # TypeScript Type Definitions
├── constants/         # Application Constants
├── config/            # Configuration Files
└── assets/            # Static Assets
```

## 🔧 Entwicklungsrichtlinien

### 📝 Code-Standards

#### TypeScript
- **Strict Mode** aktiviert
- **Explizite Types** für alle Props und Funktionen
- **Interface** statt Type Aliases für Objekte
- **Enums** für feste Wertelisten

```typescript
// ✅ Gut
interface UserProps {
  id: string;
  name: string;
  isActive: boolean;
}

// ❌ Vermeiden
type UserProps = {
  id: any;
  name: string;
  isActive?: boolean;
}
```

#### Komponenten-Struktur
```typescript
/**
 * Komponenten-Template für beste Practices
 */
import React from 'react';
import { cn } from '@/utils';
import type { ComponentProps } from '@/types';

interface Props extends ComponentProps {
  title: string;
  variant?: 'default' | 'primary';
}

const MyComponent: React.FC<Props> = ({ 
  title,
  variant = 'default',
  children,
  className,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        'base-classes',
        variant === 'primary' && 'primary-classes',
        className
      )} 
      {...props}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default MyComponent;
```

### 🎨 Styling-Richtlinien

#### Design System
Verwende **immer** das Design System aus `src/index.css`:

```css
/* ✅ Gut - Semantic Tokens */
.button {
  @apply bg-primary text-primary-foreground;
}

/* ❌ Vermeiden - Direkte Farben */
.button {
  @apply bg-blue-500 text-white;
}
```

#### Responsive Design
```typescript
// ✅ Mobile-First Approach
<div className="text-sm md:text-base lg:text-lg">
  Responsive Text
</div>

// ✅ Container Queries nutzen
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Cards
</div>
```

### 🔗 Import-Richtlinien

#### Import-Reihenfolge
```typescript
// 1. React & External Libraries
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// 2. Internal Services & Utils  
import { submitForm } from '@/services';
import { cn } from '@/utils';

// 3. Types
import type { FormData } from '@/types';

// 4. Assets
import heroImage from '@/assets/hero.jpg';
```

#### Pfad-Aliases
```typescript
// ✅ Verwende Aliases
import { Header } from '@/components/layout';
import { API_CONFIG } from '@/config';

// ❌ Relative Pfade vermeiden
import Header from '../../../components/layout/Header';
```

## 🧩 Komponenten-Entwicklung

### 🏗️ Komponenten-Hierarchie

```
1. Pages (Route-Level)
   └── Features (Business Logic)
       └── Layout (Structure)
           └── Common (Reusable)
               └── UI (Base Components)
```

### 📦 Feature-Komponenten

Jede Feature hat ihre eigene Ordnerstruktur:

```
features/contact/
├── Contact.tsx           # Haupt-Komponente
├── ContactForm.tsx       # Form-Logik
├── ContactInfo.tsx       # Statische Infos
├── hooks/
│   └── useContactForm.ts # Feature-spezifische Hooks
├── types/
│   └── contact.types.ts  # Feature-Types
└── index.ts             # Exports
```

### 🔄 State Management

#### Lokaler State
```typescript
// ✅ useState für einfachen State
const [isOpen, setIsOpen] = useState(false);

// ✅ useReducer für komplexen State
const [state, dispatch] = useReducer(formReducer, initialState);
```

#### Globaler State
```typescript
// ✅ Context für geteilten State
const ThemeContext = createContext<ThemeContextType>();

// ✅ Custom Hook für Context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
```

## 🛠 Service Layer

### 📡 API Services

Alle API-Calls sind in Services abstrahiert:

```typescript
// services/api/user.service.ts
export const userService = {
  async getUser(id: string): Promise<ApiResponse<User>> {
    try {
      const response = await fetch(`/api/users/${id}`);
      return await response.json();
    } catch (error) {
      return handleApiError(error);
    }
  },
  
  async createUser(data: CreateUserData): Promise<ApiResponse<User>> {
    // Implementation...
  }
};
```

### ✅ Validierung

Zod Schemas für alle Formulare:

```typescript
// services/validation/schemas.ts
export const userSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  age: z.number().min(18, 'Muss mindestens 18 Jahre alt sein')
});

export type UserFormData = z.infer<typeof userSchema>;

// Verwendung in Komponenten
const validateUser = (data: unknown) => {
  return userSchema.safeParse(data);
};
```

### 🎯 Error Handling

Konsistente Fehlerbehandlung:

```typescript
// services/utils/error-handling.ts
export const handleFormSubmission = async (
  submitFn: () => Promise<ApiResponse>,
  onSuccess: (data: any) => void
) => {
  try {
    const result = await submitFn();
    
    if (result.success) {
      onSuccess(result.data);
      showSuccessToast('Erfolgreich gespeichert!');
    } else {
      showErrorToast(result.error || 'Ein Fehler ist aufgetreten');
    }
  } catch (error) {
    console.error('Submission error:', error);
    showErrorToast('Netzwerkfehler aufgetreten');
  }
};
```

## 🎨 Styling & Design

### 🌈 Design Tokens

Verwende semantische Design-Tokens:

```css
/* index.css */
:root {
  /* Primary Colors */
  --primary: 210 40% 60%;
  --primary-foreground: 0 0% 98%;
  
  /* Semantic Colors */
  --success: 142 76% 36%;
  --warning: 38 92% 50%;
  --error: 0 84% 60%;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-glow)));
}
```

### 🎭 Animationen

Nutze das Animations-System:

```typescript
// ✅ Tailwind Animation Classes
<div className="animate-fade-in hover:animate-scale-in">
  Content
</div>

// ✅ Custom Animation mit CSS Variables
<div 
  className="transition-all duration-300"
  style={{ 
    transform: `translateY(${isVisible ? 0 : 20}px)`,
    opacity: isVisible ? 1 : 0
  }}
>
  Content
</div>
```

## 🧪 Testing-Strategien

### 🔧 Unit Tests (geplant)

```typescript
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });
  
  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### 🎯 Integration Tests

```typescript
// __tests__/features/ContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '@/components/features/contact';

describe('ContactForm Integration', () => {
  test('submits form with valid data', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    // Fill out form
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');
    
    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /senden/i }));
    
    // Verify success
    await waitFor(() => {
      expect(screen.getByText(/erfolgreich gesendet/i)).toBeInTheDocument();
    });
  });
});
```

## 📊 Performance-Optimierung

### ⚡ Code-Splitting

```typescript
// ✅ Lazy Loading für Routes
import { lazy, Suspense } from 'react';

const CateringPage = lazy(() => import('@/pages/Catering'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/catering" element={<CateringPage />} />
      </Routes>
    </Suspense>
  );
}
```

### 🖼️ Image Optimierung

```typescript
// ✅ LazyImage Komponente nutzen
import { LazyImage } from '@/components/common';

<LazyImage
  src="/images/hero.jpg"
  alt="Hero Image"
  className="w-full h-auto"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### 🎣 React Hooks Optimierung

```typescript
// ✅ useMemo für teure Berechnungen
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// ✅ useCallback für Event Handlers
const handleSubmit = useCallback(async (formData: FormData) => {
  await submitForm(formData);
}, [submitForm]);

// ✅ Custom Hook für wiederverwendbare Logik
const useFormValidation = (schema: ZodSchema) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validate = useCallback((data: unknown) => {
    const result = schema.safeParse(data);
    if (!result.success) {
      const newErrors = {};
      result.error.issues.forEach(issue => {
        const field = issue.path[0] as string;
        newErrors[field] = issue.message;
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  }, [schema]);
  
  return { errors, validate };
};
```

## 🔒 Sicherheit

### 🛡️ Input Validation

```typescript
// ✅ Server-side Validation auch im Frontend
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove HTML tags
    .trim()
    .substring(0, 1000); // Limit length
};

// ✅ XSS Protection
const SafeHTML: React.FC<{ content: string }> = ({ content }) => {
  const sanitized = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
};
```

### 🔑 Environment Variables

```typescript
// ✅ Type-safe Environment Variables
interface EnvVars {
  VITE_API_URL: string;
  VITE_SUPABASE_URL: string;
  VITE_SUPABASE_ANON_KEY: string;
}

const env: EnvVars = {
  VITE_API_URL: import.meta.env.VITE_API_URL || '',
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || '',
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
};

// Validation
Object.entries(env).forEach(([key, value]) => {
  if (!value) {
    console.warn(`Environment variable ${key} is not set`);
  }
});
```

## 🚀 Deployment & CI/CD

### 📦 Build-Optimierung

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-select'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
```

### 🔄 Environment Setup

```bash
# .env.local (Development)
VITE_API_URL=http://localhost:3000/api
VITE_SUPABASE_URL=your-dev-supabase-url
VITE_SUPABASE_ANON_KEY=your-dev-key

# .env.production (Production)  
VITE_API_URL=https://api.sattuni.de
VITE_SUPABASE_URL=your-prod-supabase-url
VITE_SUPABASE_ANON_KEY=your-prod-key
```

## 🛠 Debugging & Troubleshooting

### 🔍 Development Tools

```typescript
// ✅ React Developer Tools
// Installiere die Browser Extension

// ✅ Redux DevTools (falls Redux genutzt wird)
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// ✅ Console Debugging
const debug = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`🐛 ${message}`, data);
  }
};
```

### 🚨 Error Monitoring

```typescript
// ✅ Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Send to error reporting service
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

## 📚 Best Practices Checkliste

### ✅ Code Quality
- [ ] TypeScript Strict Mode aktiviert
- [ ] ESLint Rules befolgt  
- [ ] Prettier für Code-Formatierung
- [ ] Konsistente Naming Conventions
- [ ] JSDoc für komplexe Funktionen

### ✅ Performance
- [ ] Code Splitting implementiert
- [ ] Images optimiert (WebP, Lazy Loading)
- [ ] Bundle Size überwacht
- [ ] React DevTools Profiler genutzt

### ✅ Accessibility
- [ ] ARIA Labels verwendet
- [ ] Keyboard Navigation funktioniert
- [ ] Color Contrast erfüllt WCAG
- [ ] Screen Reader getestet

### ✅ SEO
- [ ] Meta Tags implementiert
- [ ] Structured Data hinzugefügt  
- [ ] sitemap.xml erstellt
- [ ] robots.txt konfiguriert

### ✅ Security
- [ ] Input Validation durchgeführt
- [ ] XSS Protection implementiert
- [ ] HTTPS nur für Production
- [ ] Environment Variables sicher gesetzt

## 🤝 Collaboration

### 📋 Code Review Checklist

#### Reviewer
- [ ] Code folgt Style Guide
- [ ] Tests sind vorhanden
- [ ] Performance Impact betrachtet
- [ ] Security Aspekte überprüft
- [ ] Documentation aktualisiert

#### Author  
- [ ] Self Review durchgeführt
- [ ] Tests geschrieben
- [ ] Documentation aktualisiert
- [ ] Breaking Changes dokumentiert

### 🔄 Git Workflow

```bash
# Feature Development
git checkout develop
git pull origin develop
git checkout -b feature/new-feature

# Development...
git add .
git commit -m "feat: add new feature"

# Before Push
npm run lint
npm run type-check
npm run test

# Push & PR
git push origin feature/new-feature
# Create Pull Request on GitHub
```

---

**🎯 Ziel: Sauberer, wartbarer und performanter Code für ein erfolgreiches Restaurant-Business!**