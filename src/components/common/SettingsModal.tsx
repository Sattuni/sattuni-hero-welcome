import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { useLanguage, useTheme } from '@/contexts';
import { Globe, Moon, Settings, Sun } from 'lucide-react';
import React from 'react';

interface SettingsModalProps {
  children: React.ReactNode;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            {t('settings.title')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Theme Setting */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                {theme === 'light' ? (
                  <Sun className="h-4 w-4 text-yellow-500" />
                ) : (
                  <Moon className="h-4 w-4 text-blue-500" />
                )}
                <span className="text-sm font-medium">{t('settings.theme')}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {theme === 'light' ? t('settings.light_mode') : t('settings.dark_mode')}
              </p>
            </div>
            <Switch
              checked={theme === 'dark'}
              onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            />
          </div>

          {/* Language Setting */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">{t('settings.language')}</span>
            </div>
            <Select value={language} onValueChange={(value: 'en' | 'de') => setLanguage(value)}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="de">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🇩🇪</span>
                    <span>{t('settings.german')}</span>
                  </div>
                </SelectItem>
                <SelectItem value="en">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🇺🇸</span>
                    <span>{t('settings.english')}</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;
