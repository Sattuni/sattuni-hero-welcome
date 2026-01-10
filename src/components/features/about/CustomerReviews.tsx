import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, Star, Quote } from "lucide-react";
import { useState } from "react";

interface Review {
  name: string;
  company: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Linda A.",
    company: "WHU",
    text: "Die Zusammenarbeit ist jedes Mal eine große Freude. Die Kommunikation ist stets unkompliziert, klar und verlässlich. Das Essen ist durchgehend hervorragend und kommt bei allen Teilnehmenden sehr gut an. Besonders schätzen wir die hohe Flexibilität und absolute Zuverlässigkeit – auch bei kurzfristigen Änderungen. Das Team bringt immer tolle Ideen und passende Lösungen ein und ist offen dafür, Neues auszuprobieren. Ein Catering-Partner, auf den man sich jederzeit verlassen kann."
  },
  {
    name: "Natalie S.",
    company: "Ranger",
    text: "Hamudi hat uns bei unserem letzten Gesundheitstag mit drei leckeren Smoothies und einem orientalischen Catering unterstützt. Schon die Vorbereitung auf den Tag war total angenehm, Hamudi war super freundlich und kundenorientiert und ging auf all unsere Wünsche sofort ein. Am Tag selbst war er zuverlässig, schnell und hat sich um alles gekümmert – wir mussten uns um nichts sorgen. Hamudi hat alles aufgebaut, abgeräumt und währenddessen die Mitarbeitenden hervorragend betreut. Er war auf einer Wellenlänge mit unseren Kollegen und hat eine tolle Atmosphäre geschaffen. Ich kann die Zusammenarbeit nur wärmstens empfehlen."
  },
  {
    name: "Sylvia G.",
    company: "BCG",
    text: "Die Zusammenarbeit mit Hamudi und seiner Crew im Rahmen unseres Team-Events war ein echtes Highlight! Das Essen war hervorragend - es blieben keine Wünsche offen und es wurde an jedes Detail gedacht. Der Service war herzlich, zuvorkommend und durchweg professionell. Schon in der Vorbesprechung hat Hamudi viele kreative Ideen eingebracht, die weit über klassisches Catering hinausgingen - und wir wurden nicht enttäuscht. Im Gegenteil: Wir haben sehr begeistertes Feedback vom gesamten Team erhalten! Hamudi steht für Qualität, Begeisterung und die berühmte Extrameile - absolut empfehlenswert und jederzeit wieder!"
  },
  {
    name: "Valerie T.",
    company: "BCG",
    text: "Wir haben schon mehrfach Essen für unsere Events bei Hamudi bestellt und jedes Mal war der Service SUPER. Von der Planung bis zur Anlieferung verlief alles reibungslos. Hamudi ist unglaublich zuverlässig und als uns bei einem Event der Barkeeper kurzfristig abgesprungen ist, hat sein Team spontan ausgeholfen. Das Essen ist großartig und die Kommunikation immer schnell, unkompliziert und sehr freundlich. Vielen Dank an Hammudi und sein Team! Ich kann ihn nur wärmstens empfehlen!"
  },
  {
    name: "Elham N.",
    company: "WHU",
    text: "Pretty sure that he is one of the best catering providers in Dusseldorf. A super delicious food, friendliness, communicative and politeness are the some of his service. The best Arabic cuisine I have ever seen. I really recommend him for everyone."
  },
  {
    name: "Silke B.",
    company: "BCG",
    text: "Sehr professionell und absolut zuverlässig. Die Gerichte sind köstlich und qualitativ sehr hochwertig. Die Zusammenarbeit ist äußerst angenehm"
  },
  {
    name: "Silke E.",
    company: "Leonardo",
    text: "Unsere Firma hat nun schon mehrmals bei Hamudi Essen für Gäste unseres Unternehmens bestellt. Die Anlieferung erfolgte immer pünktlich und das Essen ist immer frisch und sehr appetitlich angerichtet. Sowohl die Gäste, als auch unsere eigenen Mitarbeiter(inklusive mir) sind begeistert. Es macht Spaß mit ihm zusammenzuarbeiten und ich empfehle ihn zu 100% weiter. Wer auf gutes Essen UND guten, freundlichen, zuverlässigen Service Wert legt, ist hier richtig."
  }
];

const ReviewCard = ({ review }: { review: Review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewLength = 120;
  const needsExpansion = review.text.length > previewLength;
  const displayText = isExpanded || !needsExpansion 
    ? review.text 
    : review.text.slice(0, previewLength) + "...";

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-warm transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <Quote className="w-8 h-8 text-primary/40 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-foreground">{review.name}</h3>
            <p className="text-sm text-muted-foreground">von {review.company}</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          "{displayText}"
        </p>
        
        {needsExpansion && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 mt-4 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            {isExpanded ? (
              <>
                Weniger anzeigen <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Mehr lesen <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </CardContent>
    </Card>
  );
};

const CustomerReviews = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Das sagen unsere Kunden
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Echte Bewertungen von Unternehmen, die uns ihr Vertrauen schenken.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
