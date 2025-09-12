import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language === 'en' ? 'EN' : 'DE';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="h-9 w-9 p-0 hover:bg-primary/10 transition-colors"
          aria-label={t('common.language')}
        >
          <Globe className="h-4 w-4" />
          <span className="sr-only">{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="bg-card/95 backdrop-blur-sm border border-border/50 shadow-elegant min-w-[120px]"
      >
        <DropdownMenuItem
          onClick={() => changeLanguage('de')}
          className={`cursor-pointer hover:bg-primary/10 transition-colors ${
            i18n.language === 'de' ? 'bg-primary/5 font-medium' : ''
          }`}
        >
          <span className="mr-2">🇩🇪</span>
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLanguage('en')}
          className={`cursor-pointer hover:bg-primary/10 transition-colors ${
            i18n.language === 'en' ? 'bg-primary/5 font-medium' : ''
          }`}
        >
          <span className="mr-2">🇺🇸</span>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;