import { useState } from "react";
import { Clock, Calendar, CheckCircle, X, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const OpeningHours = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCurrentDay = () => {
    return new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes(); // Time in minutes
  };

  const isCurrentlyOpen = () => {
    const currentDay = getCurrentDay();
    const currentTime = getCurrentTime();

    // Convert time to minutes (e.g., 17:00 = 17 * 60 = 1020)
    const timeRanges: { [key: number]: { start: number; end: number } | null } = {
      0: { start: 14 * 60, end: 22 * 60 }, // Sunday: 14:00-22:00
      1: { start: 17 * 60, end: 23 * 60 }, // Monday: 17:00-23:00
      2: { start: 17 * 60, end: 23 * 60 }, // Tuesday: 17:00-23:00
      3: { start: 17 * 60, end: 23 * 60 }, // Wednesday: 17:00-23:00
      4: null, // Thursday: Closed
      5: { start: 17 * 60, end: 23 * 60 }, // Friday: 17:00-23:00
      6: { start: 17 * 60, end: 22 * 60 }, // Saturday: 17:00-22:00
    };

    const todayRange = timeRanges[currentDay];
    if (!todayRange) return false;

    return currentTime >= todayRange.start && currentTime <= todayRange.end;
  };

  const openingHours = [
    {
      days: "Montag - Mittwoch",
      hours: "17:00 - 23:00",
      dayNumbers: [1, 2, 3]
    },
    {
      days: "Donnerstag",
      hours: "Ruhetag",
      dayNumbers: [4],
      isClosed: true
    },
    {
      days: "Freitag",
      hours: "17:00 - 23:00",
      dayNumbers: [5]
    },
    {
      days: "Samstag",
      hours: "17:00 - 22:00",
      dayNumbers: [6]
    },
    {
      days: "Sonntag",
      hours: "14:00 - 22:00",
      dayNumbers: [0]
    }
  ];

  const currentDay = getCurrentDay();
  const isOpen = isCurrentlyOpen();
  
  // Find today's entry
  const todayEntry = openingHours.find(item => item.dayNumbers.includes(currentDay));
  const otherDays = openingHours.filter(item => !item.dayNumbers.includes(currentDay));

  return (
    <section className="py-6 md:py-12 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-border/50 bg-card/90 backdrop-blur-sm shadow-soft overflow-hidden">
          <CardContent className="p-4 md:p-6">
            {/* Header with Status */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <h2 className="text-lg md:text-xl font-display font-bold text-foreground">
                  Öffnungszeiten
                </h2>
              </div>
              
              {/* Current Status */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                isOpen 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {isOpen ? (
                  <>
                    <CheckCircle className="w-3 h-3" />
                    <span>Geöffnet</span>
                  </>
                ) : (
                  <>
                    <X className="w-3 h-3" />
                    <span>Geschlossen</span>
                  </>
                )}
              </div>
            </div>

            {/* Today's Hours - Always Visible */}
            {todayEntry && (
              <div 
                className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border-2 border-primary/30 mb-3"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground">
                    Heute
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({todayEntry.days.includes('-') ? new Date().toLocaleDateString('de-DE', { weekday: 'long' }) : todayEntry.days})
                  </span>
                </div>
                
                <span className={`font-mono text-sm font-semibold ${
                  todayEntry.isClosed ? 'text-red-600' : 'text-primary'
                }`}>
                  {todayEntry.hours}
                </span>
              </div>
            )}

            {/* Collapsible Other Days */}
            <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-between text-muted-foreground hover:text-foreground"
                >
                  <span className="text-sm">Alle Öffnungszeiten anzeigen</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-2 mt-3 animate-accordion-down">
                {otherDays.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-muted/50 border border-border/30"
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-sm text-foreground">
                        {item.days}
                      </span>
                    </div>
                    
                    <span className={`font-mono text-xs ${
                      item.isClosed 
                        ? 'text-red-600 font-medium' 
                        : 'text-muted-foreground'
                    }`}>
                      {item.hours}
                    </span>
                  </div>
                ))}

                {/* Additional Info */}
                <div className="mt-3 p-3 bg-accent/10 rounded-lg border border-accent/20 text-xs text-muted-foreground">
                  <p>Letzte Bestellung 30 Min vor Schließung.</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OpeningHours;
