import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const transformations = [
  {
    name: "Cristiane, 42",
    procedure: "Harmonização Facial Completa",
    testimonial: "O brilho no meu olhar, a leveza no meu sorriso, a postura mais confiante — tudo mudou. Mas o mais importante é que me vejo e me sinto ainda mais extraordinária. Técnica e sensibilidade em cada detalhe.",
    result: "Força, delicadeza e confiança reveladas",
    image: "/antes-depois/antes-depois-1.jpg",
  },
  {
    name: "Beatriz, 38",
    procedure: "Rejuvenescimento com Propósito",
    testimonial: "Não pareço diferente — pareço eu mesma, mas melhor. Minha pele ganhou vida, meu rosto ganhou harmonia. Cada resultado é tão natural que parece que sempre foi assim. Amei!",
    result: "Luminosidade restaurada, essência potencializada",
    image: "/antes-depois/antes-depois-2.jpg",
  },
  {
    name: "Marina, 45",
    procedure: "Harmonização de Olhar + Escultura Facial",
    testimonial: "Meu olhar ganhou luz, meu rosto ganhou proporção. Resultado extraordinário que reflete dentro pra fora. Me sinto poderosa todos os dias.",
    result: "Presença que transforma, confiança renovada",
    image: "/antes-depois/antes-depois-3.jpg",
  },
  {
    name: "Lucia, 40",
    procedure: "Harmonização Completa",
    testimonial: "Cada detalhe foi pensado com intenção. Sinto que a Dra. Talita não apenas transformou meu rosto — ela tocou minha alma. Resultado que é beleza + amor.",
    result: "Ciclo que floresce",
    image: "/antes-depois/antes-depois-4.jpg",
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
            Histórias de mulheres que permitiram que a melhor versão delas fosse revelada. Que decidiram se colocar em primeiro lugar.
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
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
                      {transformation.name}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-primary mb-2 font-semibold">
                      {transformation.procedure}
                    </p>
                    
                    <p className="text-xs text-muted-foreground bg-primary/5 px-2 py-1 rounded inline-block">
                      ✨ {transformation.result}
                    </p>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed flex-grow border-l-2 border-primary/30 pl-3">
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
            Sua jornada de revelação começa agora. Você merece se sentir bem ao se olhar no espelho todos os dias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg button-rose-premium"
              asChild
            >
                <a
                  href="https://wa.me/5585991262487?text=Olá! Gostaria de agendar uma consulta gratuita com a Dra. Talita Hayelle."
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

