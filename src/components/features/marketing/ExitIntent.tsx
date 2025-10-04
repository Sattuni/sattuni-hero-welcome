import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Gift, X } from 'lucide-react';
import { useFOMO } from '@/contexts/FOMOContext';

const ExitIntent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [hasTriggered, setHasTriggered] = useState(false);
  const { canShowFOMO, setActiveFOMO, dismissFOMO } = useFOMO();

  useEffect(() => {
    // Check if exit intent was already dismissed
    const dismissed = localStorage.getItem('exit-intent-dismissed');
    if (dismissed) {
      setHasTriggered(true);
      return;
    }

    // Desktop only - detect mouse leaving viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered && canShowFOMO('exit-intent')) {
        setHasTriggered(true);
        setActiveFOMO('exit-intent');
        setIsOpen(true);
      }
    };

    window.addEventListener('mouseleave', handleMouseLeave);
    return () => window.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered, canShowFOMO, setActiveFOMO]);

  const handleClose = () => {
    setIsOpen(false);
    dismissFOMO('exit-intent');
    localStorage.setItem('exit-intent-dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track email submission (you can implement actual email capture here)
    console.log('Email captured:', email);
    
    // Redirect to catering page with discount code
    window.location.href = '/catering?code=NEUKUNDE10';
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Schließen</span>
        </button>
        
        <DialogHeader>
          <div className="flex items-center gap-2 justify-center mb-2">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl text-center">
            Warte kurz! 🎁
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Sichere dir <span className="font-bold text-primary">10% Rabatt</span> auf deine erste Catering-Bestellung!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Deine E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
          </div>

          <Button type="submit" className="w-full h-12 text-base font-semibold">
            <Gift className="w-4 h-4 mr-2" />
            Rabatt-Code erhalten
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Code: <span className="font-mono font-bold">NEUKUNDE10</span> – Gültig für Bestellungen ab 20 Personen
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntent;
