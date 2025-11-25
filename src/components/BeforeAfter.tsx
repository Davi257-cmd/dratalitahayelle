import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const transformations = [
  {
    name: "Marina, 41",
    procedure: "Harmonização Full Face",
    testimonial: "Sentia que tinha perdido minha essência. A Dra. Antônia não apenas transformou meu rosto — ela me devolveu a mulher que eu havia perdido. Hoje me reconheço e me amo.",
    result: "Propósito e confiança restaurados",
    image: "/antes-depois/antes-depois.jpg",
  },
  {
    name: "Jordana, 36",
    procedure: "Preenchimento Estratégico + Harmonização Orofacial",
    testimonial: "Resultado extraordinário. A Dra. Antônia vê além do óbvio. Transformou meu rosto inteiro com uma visão que eu não conseguia ter sozinha. Me sinto radiante e segura.",
    result: "Equilíbrio natural e luminoso",
    image: "/antes-depois/antes-depois-jordana.jpg",
  },
  {
    name: "Raquel, 44",
    procedure: "Rejuvenescimento Full Face",
    testimonial: "Não parecia que tinha feito procedimentos, mas quando me olhei, vi a diferença. A Dra. Antônia tem o talento de revelar beleza sem transformar a sua identidade. Perfeito.",
    result: "Leveza e elegância em cada traço",
    image: "/antes-depois/antes-depois-raquel.jpg",
  },
  {
    name: "Morgana, 38",
    procedure: "Harmonização de Sorriso",
    testimonial: "Meu sorriso é meu cartão de visitas. A Dra. Antônia entendeu isso e transformou não apenas meus dentes, mas meu rosto inteiro em harmonia. Resultado simplesmente excepcional.",
    result: "Confiança que brilha",
    image: "/antes-depois/antes-depois-morgana.jpg",
  },
];

const BeforeAfter = () => {
  return (
    <section id="transformacoes" className="py-12 md:py-20 lg:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
            Transformações <span className="text-gradient-primary">Reais</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Histórias de mulheres que foram resgatadas. Que tiveram sua autoestima devolvida. Que hoje se reconhecem no espelho com amor.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 mb-12">
          {transformations.map((transformation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-border hover:border-primary smooth-transition group hover:shadow-lg overflow-hidden">
                <CardContent className="p-5 md:p-6 flex flex-col">
                  <div className="aspect-[4/3] rounded-lg mb-4 relative overflow-hidden">
                    <img
                      src={transformation.image}
                      alt={`Transformação ${transformation.name} - ${transformation.procedure}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-2 left-2 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                      Antes / Depois
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {transformation.name}
                    </h3>
                    
                    <p className="text-sm text-primary mb-2 font-semibold">
                      {transformation.procedure}
                    </p>
                    
                    <p className="text-xs text-muted-foreground bg-primary/5 px-2 py-1 rounded inline-block">
                      ✨ {transformation.result}
                    </p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground italic leading-relaxed flex-grow border-l-2 border-primary/30 pl-3">
                    "{transformation.testimonial}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-foreground mb-6 font-semibold">
            Você Poderia Ser a Próxima Transformação
          </p>
          <p className="text-base text-muted-foreground mb-6">
            Sua jornada de reconhecimento começa agora. Não espere mais para se sentir confiante, poderosa e genuinamente linda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg button-rose-premium"
              asChild
            >
              <a
                href="https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma consulta gratuita com a Dra. Antônia Fernandes."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full"
              >
                Agendar Minha Consulta Gratuita
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary/30 hover:bg-primary/5"
              onClick={() => {
                document.getElementById("transformacoes")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver Transformações Reais
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;

