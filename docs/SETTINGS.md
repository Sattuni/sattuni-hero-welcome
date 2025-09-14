# Settings Feature Documentation

## Overview
The settings feature allows users to customize their experience with dark/light mode and language selection (English/German).

## Components

### ThemeContext
- **Location**: `src/contexts/ThemeContext.tsx`
- **Purpose**: Manages dark/light mode state
- **Features**:
  - Automatic system preference detection
  - Local storage persistence
  - Theme switching with smooth transitions
  - Meta theme-color updates for mobile browsers

### LanguageContext
- **Location**: `src/contexts/LanguageContext.tsx`
- **Purpose**: Manages language state and translations
- **Features**:
  - English/German language switching
  - Translation function (`t()`)
  - Local storage persistence
  - Comprehensive translation keys

### SettingsModal
- **Location**: `src/components/common/SettingsModal.tsx`
- **Purpose**: Modal interface for settings
- **Features**:
  - Theme toggle switch with visual indicators
  - Language dropdown with flag icons
  - Responsive design
  - Accessible controls

## Usage

### Adding Translations
Add new translation keys to the `translations` object in `LanguageContext.tsx`:

```typescript
const translations = {
  'your.key': { de: 'German Text', en: 'English Text' },
  // ... existing translations
};
```

### Using Translations
Import and use the `useLanguage` hook:

```typescript
import { useLanguage } from '@/contexts';

const MyComponent = () => {
  const { t } = useLanguage();
  
  return <div>{t('your.key')}</div>;
};
```

### Using Theme
Import and use the `useTheme` hook:

```typescript
import { useTheme } from '@/contexts';

const MyComponent = () => {
  const { theme, setTheme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
};
```

## Local Storage Keys
- `sattuni-theme`: Stores theme preference ('light' | 'dark')
- `sattuni-language`: Stores language preference ('en' | 'de')

## Integration
The settings button is automatically added to both desktop and mobile navigation. The contexts are provided at the app level in `App.tsx`.

