import { Clock, Calendar, CheckCircle, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const OpeningHours = () => {
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

  return (
    <section className="py-8 md:py-16 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground">
              Öffnungszeiten
            </h2>
          </div>
          
          {/* Current Status */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 ${
            isOpen 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            {isOpen ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span className="font-semibold">Jetzt geöffnet</span>
              </>
            ) : (
              <>
                <X className="w-4 h-4" />
                <span className="font-semibold">Geschlossen</span>
              </>
            )}
          </div>
        </div>

        {/* Opening Hours Grid */}
        <Card className="border-border/50 bg-card/90 backdrop-blur-sm shadow-soft overflow-hidden">
          <CardContent className="p-6">
            <div className="space-y-4">
              {openingHours.map((item, index) => {
                const isToday = item.dayNumbers.includes(currentDay);
                
                return (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      isToday 
                        ? 'bg-primary/10 border-2 border-primary/30' 
                        : 'bg-muted/50 border border-border/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className={`w-4 h-4 ${isToday ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={`font-medium ${
                        isToday ? 'text-foreground font-semibold' : 'text-foreground'
                      }`}>
                        {item.days}
                      </span>
                      {isToday && (
                        <span className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded-full font-medium">
                          Heute
                        </span>
                      )}
                    </div>
                    
                    <span className={`font-mono text-sm ${
                      item.isClosed 
                        ? 'text-red-600 font-medium' 
                        : isToday 
                          ? 'text-primary font-semibold' 
                          : 'text-muted-foreground'
                    }`}>
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-accent mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Hinweis:</p>
                  <p>Letzte Bestellung 30 Minuten vor Schließung möglich.</p>
                  <p>Catering nach Vereinbarung auch außerhalb der Öffnungszeiten.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OpeningHours;