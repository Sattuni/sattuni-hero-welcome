import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { useFormAutoSave } from '@/hooks/useFormAutoSave';
import { useFormTracking } from '@/hooks/useFormTracking';
import { handleFormError, handleFormSuccess } from '@/services/utils/error-handling';
import { getBackendPublicConfig } from "@/config/backend-public.config";
import { 
  Send, Loader2, User, Mail, Phone, MapPin, Calendar, 
  ArrowRight, ArrowLeft, Users, Clock, Check, Utensils,
  ChefHat, Sparkles, Star, ChevronDown, Leaf, MessageCircle, Info
} from "lucide-react";
import React, { useState, useMemo } from 'react';
import { 
  CATERING_PACKAGES, 
  APPETIZERS, 
  MAIN_COURSES, 
  SIDE_DISHES,
  DESSERTS,
  CUSTOM_MENU_LIMITS,
  formatPrice,
  calculateTotalPrice,
  getAppetizerById,
  getMainCourseById,
  getSideDishById,
  getDessertById,
  type CateringPackage
} from '@/constants/catering-packages';

// Dish Info Popover - supports both click and hover
const DishInfoPopover = ({ description }: { description: string }) => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button 
          type="button" 
          className="shrink-0 mt-0.5"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Info className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
        </button>
      </PopoverTrigger>
      <PopoverContent 
        side="top" 
        className="max-w-xs p-3 z-50 bg-popover"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <p className="text-sm">{description}</p>
      </PopoverContent>
    </Popover>
  );
};

const MIN_GUESTS = 20;

// Event types for catering
const EVENT_TYPES = [
  { value: 'firmenevent', label: 'Firmenevent / Meeting' },
  { value: 'hochzeit', label: 'Hochzeit' },
  { value: 'geburtstag', label: 'Geburtstag' },
  { value: 'familienfeier', label: 'Familienfeier' },
  { value: 'jubilaeum', label: 'Jubiläum' },
  { value: 'trauerfeier', label: 'Trauerfeier' },
  { value: 'sonstiges', label: 'Sonstiges' },
] as const;

// Minimum days in advance for booking
const MIN_DAYS_ADVANCE = 3;

interface FormData {
  // Step 1: Basic Info
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  eventType: string;
  date: string;
  time: string;
  guestCount: number;
  // Step 2: Menu Selection
  menuType: 'package' | 'custom' | 'consultation' | '';
  selectedPackage: string;
  customAppetizers: string[];
  customMainCourses: string[];
  customSideDishes: string[];
  customDesserts: string[];
  // Equipment
  equipmentChafings: boolean;
  equipmentBesteck: boolean;
  equipmentTeller: boolean;
  equipmentSchalen: boolean;
  comment: string;
  // Privacy
  privacyAccepted: boolean;
}

const initialFormData: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  eventType: '',
  date: '',
  time: '',
  guestCount: MIN_GUESTS,
  menuType: '',
  selectedPackage: '',
  customAppetizers: [],
  customMainCourses: [],
  customSideDishes: [],
  customDesserts: [],
  equipmentChafings: false,
  equipmentBesteck: false,
  equipmentTeller: false,
  equipmentSchalen: false,
  comment: '',
  privacyAccepted: false,
};

// Calculate minimum date (today + MIN_DAYS_ADVANCE)
const getMinDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + MIN_DAYS_ADVANCE);
  return date.toISOString().split('T')[0];
};

const CateringBookingForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>('appetizers');
  const { toast } = useToast();

  // Enhanced form tracking
  const { trackFieldFocus, trackValidationError, trackSubmission } = useFormTracking({
    formName: 'catering-booking',
    formType: 'catering_booking',
  });

  // Auto-save functionality
  const { clearSavedData, hasSavedData } = useFormAutoSave({
    key: 'catering-booking-form',
    data: formData,
    enabled: true,
    onRestore: (restoredData) => {
      setFormData(prev => ({ 
        ...prev, 
        ...restoredData,
        // Ensure arrays are always initialized (for backwards compatibility)
        customAppetizers: restoredData.customAppetizers || [],
        customMainCourses: restoredData.customMainCourses || [],
        customSideDishes: restoredData.customSideDishes || [],
        customDesserts: restoredData.customDesserts || [],
        privacyAccepted: false, // Always require fresh consent
      }));
    }
  });

  // Calculate equipment costs
  const equipmentCosts = useMemo(() => {
    let costs = 0;
    if (formData.equipmentChafings && formData.guestCount < 30) costs += 20;
    if (formData.equipmentBesteck) costs += formData.guestCount * 1;
    if (formData.equipmentTeller) costs += formData.guestCount * 1;
    if (formData.equipmentSchalen) costs += 20;
    return costs;
  }, [formData.equipmentChafings, formData.equipmentBesteck, formData.equipmentTeller, formData.equipmentSchalen, formData.guestCount]);

  // Calculate total price
  const totalPrice = useMemo(() => {
    if (formData.menuType === 'package' && formData.selectedPackage) {
      const pkg = CATERING_PACKAGES.find(p => p.id === formData.selectedPackage);
      if (pkg) {
        return calculateTotalPrice(pkg.pricePerPerson, formData.guestCount);
      }
    }
    return null;
  }, [formData.selectedPackage, formData.guestCount, formData.menuType]);

  // Total with equipment
  const totalWithEquipment = useMemo(() => {
    if (totalPrice) {
      return totalPrice + equipmentCosts;
    }
    return null;
  }, [totalPrice, equipmentCosts]);

  // Check if custom menu is available
  const canUseCustomMenu = formData.guestCount >= CUSTOM_MENU_LIMITS.minGuests;

  // Validate Step 1
  const validateStep1 = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = "Name ist erforderlich";
    }
    if (!formData.email || !formData.email.includes('@') || !formData.email.includes('.')) {
      errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }
    if (!formData.phone || formData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = "Bitte geben Sie eine gültige Telefonnummer ein";
    }
    if (!formData.address || formData.address.trim().length < 5) {
      errors.address = "Adresse ist erforderlich";
    }
    if (!formData.eventType) {
      errors.eventType = "Bitte wählen Sie einen Anlass";
    }
    if (!formData.date) {
      errors.date = "Datum ist erforderlich";
    } else {
      const selectedDate = new Date(formData.date);
      const minDate = new Date(getMinDate());
      if (selectedDate < minDate) {
        errors.date = `Bitte wählen Sie ein Datum mindestens ${MIN_DAYS_ADVANCE} Tage im Voraus`;
      }
    }
    if (formData.guestCount < MIN_GUESTS) {
      errors.guestCount = `Mindestens ${MIN_GUESTS} Personen erforderlich`;
    }

    setValidationErrors(errors);
    Object.keys(errors).forEach(field => trackValidationError(field, errors[field]));
    return Object.keys(errors).length === 0;
  };

  // Validate Step 2
  const validateStep2 = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.menuType) {
      errors.menuType = "Bitte wählen Sie eine Menü-Option";
    }
    
    // Consultation mode doesn't require package/menu selection
    if (formData.menuType === 'package' && !formData.selectedPackage) {
      errors.selectedPackage = "Bitte wählen Sie ein Paket";
    }
    
    if (formData.menuType === 'custom') {
      if (formData.customAppetizers.length === 0) {
        errors.customAppetizers = "Bitte wählen Sie mindestens eine Vorspeise";
      }
      if (formData.customMainCourses.length === 0) {
        errors.customMainCourses = "Bitte wählen Sie mindestens eine Hauptspeise";
      }
    }

    if (!formData.privacyAccepted) {
      errors.privacyAccepted = "Bitte akzeptieren Sie die Datenschutzerklärung";
    }

    setValidationErrors(errors);
    Object.keys(errors).forEach(field => trackValidationError(field, errors[field]));
    return Object.keys(errors).length === 0;
  };

  // Get form progress
  const getFormProgress = () => {
    if (currentStep === 1) {
      const fields = ['name', 'email', 'phone', 'address', 'eventType', 'date', 'guestCount'];
      const filled = fields.filter(f => {
        const value = formData[f as keyof FormData];
        return value && (typeof value === 'string' ? value.trim() !== '' : true);
      });
      return Math.round((filled.length / fields.length) * 50);
    } else {
      let step2Progress = 0;
      if (formData.menuType) step2Progress += 25;
      if (formData.menuType === 'consultation') step2Progress += 25; // Consultation is complete selection
      if (formData.menuType === 'package' && formData.selectedPackage) step2Progress += 25;
      if (formData.menuType === 'custom') {
        if (formData.customAppetizers.length > 0) step2Progress += 10;
        if (formData.customMainCourses.length > 0) step2Progress += 10;
        if (formData.customDesserts.length > 0) step2Progress += 5;
      }
      return 50 + step2Progress;
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));
    
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle menu type selection
  const handleMenuTypeChange = (type: 'package' | 'custom' | 'consultation') => {
    setFormData(prev => ({
      ...prev,
      menuType: type,
      selectedPackage: type === 'custom' || type === 'consultation' ? '' : prev.selectedPackage,
      customAppetizers: type === 'package' || type === 'consultation' ? [] : prev.customAppetizers,
      customMainCourses: type === 'package' || type === 'consultation' ? [] : prev.customMainCourses,
      customSideDishes: type === 'package' || type === 'consultation' ? [] : prev.customSideDishes,
      customDesserts: type === 'package' || type === 'consultation' ? [] : prev.customDesserts,
    }));
  };

  // Handle package selection
  const handlePackageSelect = (packageId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedPackage: packageId,
    }));
    // Auto-expand the selected package details
    setExpandedPackage(packageId);
    if (validationErrors.selectedPackage) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.selectedPackage;
        return newErrors;
      });
    }
  };

  // Handle custom item toggle
  const handleCustomItemToggle = (
    category: 'customAppetizers' | 'customMainCourses' | 'customSideDishes' | 'customDesserts',
    itemId: string
  ) => {
    setFormData(prev => {
      const currentItems = prev[category];
      if (currentItems.includes(itemId)) {
        return { ...prev, [category]: currentItems.filter(id => id !== itemId) };
      } else {
        return { ...prev, [category]: [...currentItems, itemId] };
      }
    });
  };

  // Handle next step
  const handleNextStep = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    } else {
      toast({
        title: "Bitte fülle alle Pflichtfelder aus",
        description: "Überprüfe die markierten Felder.",
        variant: "destructive",
      });
    }
  };

  // Handle previous step
  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) {
      toast({
        variant: "destructive",
        title: "Validierungsfehler",
        description: "Bitte wähle ein Menü oder Paket aus.",
      });
      return;
    }

    setIsSubmitting(true);

    // Prepare submission data
    const selectedPackage = CATERING_PACKAGES.find(p => p.id === formData.selectedPackage);
    
    const submissionData = {
      // Basic info
      name: formData.name,
      company: formData.company || '-',
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      eventType: EVENT_TYPES.find(e => e.value === formData.eventType)?.label || formData.eventType,
      date: formData.date,
      time: formData.time || 'Nicht angegeben',
      guestCount: formData.guestCount,
      
      // Menu info
      menuType: formData.menuType === 'package' 
        ? 'Festes Paket' 
        : formData.menuType === 'consultation' 
          ? 'Beratung gewünscht' 
          : 'Individuell zusammengestellt',
      selectedPackageName: formData.menuType === 'consultation' 
        ? 'Beratung angefragt' 
        : (selectedPackage?.name || 'Individuell'),
      selectedPackagePrice: selectedPackage ? formatPrice(selectedPackage.pricePerPerson) : 'Auf Anfrage',
      totalPrice: totalWithEquipment ? formatPrice(totalWithEquipment) : (totalPrice ? formatPrice(totalPrice) : 'Auf Anfrage'),
      equipmentCosts: equipmentCosts > 0 ? formatPrice(equipmentCosts) : '-',
      
      // Custom menu items (if applicable)
      customAppetizers: formData.customAppetizers.map(id => getAppetizerById(id)?.name).filter(Boolean).join(', ') || '-',
      customMainCourses: formData.customMainCourses.map(id => getMainCourseById(id)?.name).filter(Boolean).join(', ') || '-',
      customSideDishes: formData.customSideDishes.map(id => getSideDishById(id)?.name).filter(Boolean).join(', ') || '-',
      customDesserts: formData.customDesserts.map(id => getDessertById(id)?.name).filter(Boolean).join(', ') || '-',
      
      // Equipment
      equipmentChafings: formData.equipmentChafings,
      equipmentBesteck: formData.equipmentBesteck,
      equipmentTeller: formData.equipmentTeller,
      equipmentSchalen: formData.equipmentSchalen,
      
      comment: formData.comment || 'Keine weiteren Anmerkungen',
    };

    try {
      const { url: backendUrl, anonKey: apiKey } = getBackendPublicConfig();

      const response = await fetch(`${backendUrl}/functions/v1/send-catering-inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: apiKey,
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(submissionData),
      });

      const responseJson = await response.json().catch(() => null);

      if (!response.ok) {
        const message =
          (responseJson && (responseJson.error || responseJson.message)) ||
          "Fehler beim Senden der Anfrage";
        throw new Error(message);
      }

      trackSubmission({
        ...submissionData,
        submissionMethod: 'web_form'
      });

      handleFormSuccess(
        "Deine Catering-Anfrage wurde erfolgreich gesendet! Wir melden uns innerhalb von 24 Stunden bei dir.",
        "Anfrage erfolgreich gesendet!"
      );

      // Reset form
      setFormData(initialFormData);
      setValidationErrors({});
      setCurrentStep(1);
      clearSavedData();

    } catch (error) {
      handleFormError(error, "Catering-Anfrage");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render compact accordion package card
  const renderPackageCard = (pkg: CateringPackage) => {
    const isSelected = formData.selectedPackage === pkg.id;
    const total = calculateTotalPrice(pkg.pricePerPerson, formData.guestCount);
    const isAvailable = formData.guestCount >= pkg.minGuests;
    const isExpanded = expandedPackage === pkg.id;

    // Price display
    const priceDisplay = pkg.pricePerPersonMax 
      ? `${formatPrice(pkg.pricePerPerson)} – ${formatPrice(pkg.pricePerPersonMax)}`
      : formatPrice(pkg.pricePerPerson);

    return (
      <div
        key={pkg.id}
        className={`relative rounded-lg border-2 transition-all overflow-hidden ${
          !isAvailable 
            ? 'border-muted bg-muted/20 opacity-60'
            : isSelected 
              ? 'border-primary bg-primary/5 shadow-md' 
              : 'border-muted hover:border-primary/50'
        }`}
      >
        {/* Compact Header Row - Always visible */}
        <div
          onClick={() => {
            if (isAvailable) {
              handlePackageSelect(pkg.id);
              // Toggle expansion
              setExpandedPackage(isExpanded ? null : pkg.id);
            }
          }}
          className={`flex items-center justify-between p-3 gap-3 ${isAvailable ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        >
          {/* Left: Selection circle + Name + Badges */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
              isSelected ? 'border-primary bg-primary' : 'border-muted'
            }`}>
              {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
            </div>
            <div className="flex items-center gap-2 min-w-0 flex-wrap">
              <span className="font-semibold text-sm truncate">{pkg.name}</span>
              {pkg.popular && (
                <Badge className="bg-primary text-[10px] px-1.5 py-0 h-5">
                  <Star className="w-2.5 h-2.5 mr-0.5" />
                  Beliebt
                </Badge>
              )}
              {pkg.isVegetarian && (
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-5">
                  <Leaf className="w-2.5 h-2.5 mr-0.5" />
                  Vegan
                </Badge>
              )}
            </div>
          </div>

          {/* Right: Price + Min Guests + Chevron */}
          <div className="flex items-center gap-3 flex-shrink-0 text-sm">
            <span className="font-semibold text-primary whitespace-nowrap">{priceDisplay}</span>
            <span className="text-muted-foreground text-xs whitespace-nowrap hidden sm:inline">ab {pkg.minGuests}</span>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {/* Expanded Details - Only for expanded package */}
        {isExpanded && (
          <div className="border-t animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Description + Badges Row */}
            <div className="px-3 py-3 space-y-2 bg-muted/20">
              <p className="text-sm text-muted-foreground">{pkg.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  ab {pkg.minGuests} Personen
                </Badge>
                {pkg.includesDessert && (
                  <Badge variant="outline" className="text-xs">
                    <Sparkles className="w-3 h-3 mr-1" />
                    inkl. Dessert
                  </Badge>
                )}
                {!isAvailable && (
                  <Badge variant="destructive" className="text-xs">
                    Mindestens {pkg.minGuests} Pers. erforderlich
                  </Badge>
                )}
              </div>
              
              {/* Price Summary */}
              {isAvailable && !pkg.pricePerPersonMax && (
                <div className="flex justify-between items-center pt-2 border-t border-muted">
                  <span className="text-sm text-muted-foreground">Gesamt ({formData.guestCount} Pers.)</span>
                  <span className="font-bold text-lg text-primary">{formatPrice(total)}</span>
                </div>
              )}
            </div>

            {/* Collapsible Dishes List */}
            <Collapsible>
              <CollapsibleTrigger asChild>
                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full px-3 py-2 border-t flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  <span>Speisen anzeigen</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-3 pb-3 pt-2 space-y-2 bg-muted/30">
                  {pkg.detailedItems.map((section, idx) => (
                    <div key={idx}>
                      {section.category && (
                        <h5 className="font-medium text-xs text-primary mb-1">{section.category}</h5>
                      )}
                      <div className="flex flex-wrap gap-x-1 gap-y-0.5 text-xs">
                        {section.items.map((item, itemIdx) => (
                          <span key={itemIdx} className="inline-flex items-center gap-1">
                            <span className="font-medium text-foreground">{item.name}</span>
                            {item.highlight && (
                              <span className={`text-[9px] px-1 py-0.5 rounded-full font-medium ${
                                item.highlight === 'neu' 
                                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                                  : item.highlight === 'upgrade' 
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                    : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                              }`}>
                                {item.highlight === 'neu' ? '+' : item.highlight === 'upgrade' ? '↑' : '★'}
                              </span>
                            )}
                            {item.description && (
                              <DishInfoPopover description={item.description} />
                            )}
                            {itemIdx < section.items.length - 1 && (
                              <span className="text-muted-foreground">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}
      </div>
    );
  };

  // Render compact menu chip
  const renderMenuChip = (
    item: { id: string; name: string; description: string },
    category: 'customAppetizers' | 'customMainCourses' | 'customSideDishes' | 'customDesserts'
  ) => {
    const isSelected = formData[category].includes(item.id);

    return (
      <button
        key={item.id}
        type="button"
        onClick={() => handleCustomItemToggle(category, item.id)}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm transition-all ${
          isSelected 
            ? 'bg-primary text-primary-foreground border-primary shadow-sm' 
            : 'bg-background border-muted hover:border-primary/50 hover:bg-muted/50'
        }`}
      >
        {isSelected && <Check className="w-3 h-3" />}
        <span className="font-medium">{item.name}</span>
        <span onClick={(e) => e.stopPropagation()}>
          <DishInfoPopover description={item.description} />
        </span>
      </button>
    );
  };

  // Render collapsible menu category
  const renderMenuCategory = (
    categoryKey: string,
    categoryName: string,
    icon: React.ReactNode,
    items: readonly { readonly id: string; readonly name: string; readonly description: string }[],
    formCategory: 'customAppetizers' | 'customMainCourses' | 'customSideDishes' | 'customDesserts',
    isOptional?: boolean
  ) => {
    const selectedCount = formData[formCategory].length;
    const isExpanded = expandedCategory === categoryKey;

    return (
      <Collapsible 
        open={isExpanded} 
        onOpenChange={() => setExpandedCategory(isExpanded ? null : categoryKey)}
      >
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
              isExpanded 
                ? 'border-primary bg-primary/5' 
                : selectedCount > 0 
                  ? 'border-primary/50 bg-primary/5' 
                  : 'border-muted hover:border-primary/50'
            }`}
          >
            <span className="flex items-center gap-2">
              {icon}
              <span className="font-semibold">{categoryName}</span>
              {isOptional && (
                <span className="text-xs font-normal text-muted-foreground">(optional)</span>
              )}
            </span>
            <span className="flex items-center gap-2">
              {selectedCount > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {selectedCount} ausgewählt
                </Badge>
              )}
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </span>
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3 pb-1">
          <div className="flex flex-wrap gap-2">
            {items.map(item => renderMenuChip(item, formCategory))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  };

  return (
    <section id="anfrage" className="py-12 md:py-20 px-4 bg-gradient-subtle scroll-mt-24">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Unverbindlich anfragen
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stelle dein perfektes Menü zusammen – wir melden uns mit einem individuellen Angebot
          </p>
          <p className="text-sm text-muted-foreground">
            Keine Buchung – einfach unverbindlich anfragen und Angebot erhalten
          </p>
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <Clock className="w-3 h-3" />
            Antwort innerhalb von 24 Stunden
          </p>
        </div>

        <Card className="w-full shadow-xl border-2 border-primary/10">
          <CardHeader className="space-y-3 pb-6">
            {/* Step Indicator */}
            <div className="flex items-center justify-center gap-2 pt-2">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                currentStep === 1 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'bg-primary/10 text-primary border-primary'
              }`}>
                <User className="w-5 h-5" />
              </div>
              <div className={`h-1 w-24 rounded transition-all ${
                currentStep === 2 ? 'bg-primary' : 'bg-muted'
              }`} />
              <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                currentStep === 2 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'bg-muted text-muted-foreground border-muted'
              }`}>
                <Utensils className="w-5 h-5" />
              </div>
            </div>
            
            {/* Step Title */}
            <CardTitle className="text-center text-xl">
              {currentStep === 1 ? 'Schritt 1: Deine Daten' : 'Schritt 2: Menü wählen'}
            </CardTitle>
            
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Fortschritt</span>
                <span>{getFormProgress()}%</span>
              </div>
              <Progress value={getFormProgress()} className="h-2" />
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Basic Info */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Max Mustermann"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => trackFieldFocus('name')}
                        className={validationErrors.name ? "border-destructive" : ""}
                      />
                      {validationErrors.name && (
                        <p className="text-sm text-destructive">{validationErrors.name}</p>
                      )}
                    </div>

                    {/* Company (optional) */}
                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Firma <span className="text-muted-foreground text-sm">(optional)</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Firma GmbH"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => trackFieldFocus('company')}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        E-Mail <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="max@beispiel.de"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => trackFieldFocus('email')}
                        className={validationErrors.email ? "border-destructive" : ""}
                      />
                      {validationErrors.email && (
                        <p className="text-sm text-destructive">{validationErrors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Telefon <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+49 211 1234567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => trackFieldFocus('phone')}
                        className={validationErrors.phone ? "border-destructive" : ""}
                      />
                      {validationErrors.phone && (
                        <p className="text-sm text-destructive">{validationErrors.phone}</p>
                      )}
                    </div>

                    {/* Guest Count */}
                    <div className="space-y-2">
                      <Label htmlFor="guestCount" className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Anzahl Personen <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        min={MIN_GUESTS}
                        placeholder={`Min. ${MIN_GUESTS}`}
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        onFocus={() => trackFieldFocus('guestCount')}
                        className={validationErrors.guestCount ? "border-destructive" : ""}
                      />
                      {validationErrors.guestCount && (
                        <p className="text-sm text-destructive">{validationErrors.guestCount}</p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Ab {CUSTOM_MENU_LIMITS.minGuests} Personen: Individuelles Menü verfügbar
                      </p>
                    </div>

                    {/* Event Type */}
                    <div className="space-y-2">
                      <Label htmlFor="eventType" className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Anlass <span className="text-destructive">*</span>
                      </Label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={(e) => setFormData(prev => ({ ...prev, eventType: e.target.value }))}
                        onFocus={() => trackFieldFocus('eventType')}
                        className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                          validationErrors.eventType ? "border-destructive" : "border-input"
                        }`}
                      >
                        <option value="">Bitte wählen...</option>
                        {EVENT_TYPES.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                      {validationErrors.eventType && (
                        <p className="text-sm text-destructive">{validationErrors.eventType}</p>
                      )}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address" className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Lieferadresse <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Straße, PLZ, Stadt"
                      value={formData.address}
                      onChange={handleInputChange}
                      onFocus={() => trackFieldFocus('address')}
                      className={validationErrors.address ? "border-destructive" : ""}
                    />
                    {validationErrors.address && (
                      <p className="text-sm text-destructive">{validationErrors.address}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Date */}
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Datum <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        onFocus={() => trackFieldFocus('date')}
                        min={getMinDate()}
                        className={validationErrors.date ? "border-destructive" : ""}
                      />
                      {validationErrors.date && (
                        <p className="text-sm text-destructive">{validationErrors.date}</p>
                      )}
                    </div>

                    {/* Time */}
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Uhrzeit <span className="text-muted-foreground text-sm">(optional)</span>
                      </Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        onFocus={() => trackFieldFocus('time')}
                      />
                    </div>
                  </div>

                  {/* Next Button */}
                  <Button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full gap-2"
                    size="lg"
                  >
                    Weiter zur Menüauswahl
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  {hasSavedData() && (
                    <p className="text-xs text-center text-muted-foreground">
                      Deine Daten werden automatisch gespeichert
                    </p>
                  )}
                </div>
              )}

              {/* Step 2: Menu Selection */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-left-5 duration-300">
                  {/* Menu Type Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => handleMenuTypeChange('package')}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${
                        formData.menuType === 'package'
                          ? 'border-primary bg-primary/5'
                          : 'border-muted hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          formData.menuType === 'package' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                          <Utensils className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-base">Feste Pakete</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Wähle aus 6 vordefinierten Menüs
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => canUseCustomMenu && handleMenuTypeChange('custom')}
                      disabled={!canUseCustomMenu}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${
                        !canUseCustomMenu 
                          ? 'border-muted bg-muted/20 opacity-60 cursor-not-allowed'
                          : formData.menuType === 'custom'
                            ? 'border-primary bg-primary/5'
                            : 'border-muted hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          formData.menuType === 'custom' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                          <ChefHat className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-base">Individuell</h3>
                        {!canUseCustomMenu && (
                          <Badge variant="secondary" className="text-xs">Ab {CUSTOM_MENU_LIMITS.minGuests}</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Stelle dein Menü selbst zusammen
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleMenuTypeChange('consultation')}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${
                        formData.menuType === 'consultation'
                          ? 'border-primary bg-primary/5'
                          : 'border-muted hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          formData.menuType === 'consultation' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                        }`}>
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-base">Beratung</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Ihr wisst noch nicht genau? Wir beraten euch gerne!
                      </p>
                    </button>
                  </div>

                  {/* Consultation Info */}
                  {formData.menuType === 'consultation' && (
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-sm text-muted-foreground text-center">
                        <strong className="text-foreground">Persönliche Beratung:</strong> Wir rufen euch zurück und besprechen gemeinsam eure Wünsche – völlig unverbindlich.
                      </p>
                    </div>
                  )}

                  {validationErrors.menuType && (
                    <p className="text-sm text-destructive text-center">{validationErrors.menuType}</p>
                  )}

                  {/* Package Selection */}
                  {formData.menuType === 'package' && (
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-primary" />
                        Wähle dein Paket
                      </h3>
                      <div className="space-y-2">
                        {CATERING_PACKAGES.map(renderPackageCard)}
                      </div>
                      {validationErrors.selectedPackage && (
                        <p className="text-sm text-destructive">{validationErrors.selectedPackage}</p>
                      )}
                    </div>
                  )}

                  {/* Custom Menu Selection - Compact Accordion + Chips Layout */}
                  {formData.menuType === 'custom' && (
                    <div className="space-y-4">
                      <div className="p-3 bg-muted/30 rounded-lg border">
                        <p className="text-sm text-muted-foreground text-center">
                          <strong>Preis auf Anfrage:</strong> Wir erstellen dir ein individuelles Angebot basierend auf deiner Auswahl.
                        </p>
                      </div>

                      {/* Appetizers */}
                      {renderMenuCategory(
                        'appetizers',
                        'Vorspeisen',
                        <Utensils className="w-4 h-4 text-primary" />,
                        APPETIZERS,
                        'customAppetizers'
                      )}
                      {validationErrors.customAppetizers && (
                        <p className="text-sm text-destructive">{validationErrors.customAppetizers}</p>
                      )}

                      {/* Main Courses */}
                      {renderMenuCategory(
                        'mainCourses',
                        'Hauptspeisen',
                        <ChefHat className="w-4 h-4 text-primary" />,
                        MAIN_COURSES,
                        'customMainCourses'
                      )}
                      {validationErrors.customMainCourses && (
                        <p className="text-sm text-destructive">{validationErrors.customMainCourses}</p>
                      )}

                      {/* Side Dishes */}
                      {renderMenuCategory(
                        'sideDishes',
                        'Beilagen',
                        <Utensils className="w-4 h-4 text-primary" />,
                        SIDE_DISHES,
                        'customSideDishes',
                        true
                      )}

                      {/* Desserts */}
                      {renderMenuCategory(
                        'desserts',
                        'Desserts',
                        <Sparkles className="w-4 h-4 text-primary" />,
                        DESSERTS,
                        'customDesserts',
                        true
                      )}

                      {/* Selection Summary */}
                      {(formData.customAppetizers.length > 0 || formData.customMainCourses.length > 0) && (
                        <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                          <p className="text-sm text-center">
                            <span className="font-medium text-primary">
                              {formData.customAppetizers.length + formData.customMainCourses.length + formData.customSideDishes.length + formData.customDesserts.length} Gerichte
                            </span>
                            <span className="text-muted-foreground"> ausgewählt</span>
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Comment */}
                  <div className="space-y-2">
                    <Label htmlFor="comment">
                      Anmerkungen <span className="text-muted-foreground text-sm">(optional)</span>
                    </Label>
                    <Textarea
                      id="comment"
                      name="comment"
                      placeholder="Allergien, besondere Wünsche, etc."
                      value={formData.comment}
                      onChange={handleInputChange}
                      rows={3}
                      className="resize-none"
                    />
                  </div>

                  {/* Equipment Section - Collapsible */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between p-4 rounded-lg border border-muted hover:border-primary/50 transition-all"
                      >
                        <Label className="text-base font-semibold cursor-pointer">
                          Equipment anfragen <span className="text-muted-foreground text-sm font-normal">(optional)</span>
                        </Label>
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="grid sm:grid-cols-2 gap-3 pt-3">
                        <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.equipmentChafings 
                            ? 'border-primary bg-primary/5' 
                            : 'border-muted hover:border-primary/50'
                        }`}>
                          <Checkbox
                            checked={formData.equipmentChafings}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, equipmentChafings: !!checked }))}
                            className="mt-0.5"
                          />
                          <div>
                            <span className="font-medium">Chafing Dishes</span>
                            <p className="text-xs text-muted-foreground">
                              +20€ {formData.guestCount >= 30 ? <span className="text-green-600 font-medium">(kostenlos ab 30 Pers.)</span> : '(ab 30 Pers. kostenlos)'}
                            </p>
                          </div>
                        </label>

                        <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.equipmentBesteck 
                            ? 'border-primary bg-primary/5' 
                            : 'border-muted hover:border-primary/50'
                        }`}>
                          <Checkbox
                            checked={formData.equipmentBesteck}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, equipmentBesteck: !!checked }))}
                            className="mt-0.5"
                          />
                          <div>
                            <span className="font-medium">Besteck</span>
                            <p className="text-xs text-muted-foreground">+1€ pro Person</p>
                          </div>
                        </label>

                        <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.equipmentTeller 
                            ? 'border-primary bg-primary/5' 
                            : 'border-muted hover:border-primary/50'
                        }`}>
                          <Checkbox
                            checked={formData.equipmentTeller}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, equipmentTeller: !!checked }))}
                            className="mt-0.5"
                          />
                          <div>
                            <span className="font-medium">Teller</span>
                            <p className="text-xs text-muted-foreground">+1€ pro Person</p>
                          </div>
                        </label>

                        <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          formData.equipmentSchalen 
                            ? 'border-primary bg-primary/5' 
                            : 'border-muted hover:border-primary/50'
                        }`}>
                          <Checkbox
                            checked={formData.equipmentSchalen}
                            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, equipmentSchalen: !!checked }))}
                            className="mt-0.5"
                          />
                          <div>
                            <span className="font-medium">Porzellanschalen</span>
                            <p className="text-xs text-muted-foreground">+20€</p>
                          </div>
                        </label>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>


                  {/* Privacy Checkbox */}
                  <div className="space-y-2">
                    <label className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                      formData.privacyAccepted 
                        ? 'border-primary bg-primary/5' 
                        : validationErrors.privacyAccepted 
                          ? 'border-destructive bg-destructive/5'
                          : 'border-muted hover:border-primary/50'
                    }`}>
                      <Checkbox
                        checked={formData.privacyAccepted}
                        onCheckedChange={(checked) => {
                          setFormData(prev => ({ ...prev, privacyAccepted: !!checked }));
                          if (validationErrors.privacyAccepted) {
                            setValidationErrors(prev => {
                              const newErrors = { ...prev };
                              delete newErrors.privacyAccepted;
                              return newErrors;
                            });
                          }
                        }}
                        className="mt-0.5"
                      />
                      <div>
                        <span className="font-medium">
                          Ich akzeptiere die <a href="/datenschutz" target="_blank" className="text-primary underline hover:no-underline">Datenschutzerklärung</a> <span className="text-destructive">*</span>
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">
                          Deine Daten werden nur zur Bearbeitung deiner Anfrage verwendet.
                        </p>
                      </div>
                    </label>
                    {validationErrors.privacyAccepted && (
                      <p className="text-sm text-destructive">{validationErrors.privacyAccepted}</p>
                    )}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePreviousStep}
                      className="flex-1 gap-2"
                      size="lg"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Zurück
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.menuType || !formData.privacyAccepted}
                      className="flex-1 gap-2"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Unverbindlich anfragen
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CateringBookingForm;
