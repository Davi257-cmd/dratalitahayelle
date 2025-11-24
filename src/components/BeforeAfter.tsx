import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const transformations = [
  {
    name: "Ana, 34",
    procedure: "Harmonização Orofacial",
    testimonial: "Minha autoestima mudou completamente! A Dra. Vitória não só transformou meu rosto, mas me devolveu a confiança que eu havia perdido. Hoje me olho no espelho e me amo.",
    result: "Resultado natural e harmonioso",
    image: "/antes-depois/antes-depois.jpg",
  },
  {
    name: "Juliana, 28",
    procedure: "Facetas em Porcelana",
    testimonial: "Resultado além das minhas expectativas. Investir em mim mesma foi a melhor decisão. Cada sorriso agora é genuíno e cheio de confiança.",
    result: "Sorriso perfeito e duradouro",
    image: "/antes-depois/antes-depois-2.jpg",
  },
  {
    name: "Mariana, 42",
    procedure: "Clareamento Dental",
    testimonial: "Sorriso radiante e natural! A Dra. Vitória é uma profissional excepcional. O cuidado e atenção aos detalhes fazem toda a diferença.",
    result: "Dentes 8 tons mais brancos",
    image: "/antes-depois/antes-depois-3.jpg",
  },
  {
    name: "Patricia, 31",
    procedure: "Harmonização Orofacial",
    testimonial: "Transformação incrível! A Dra. Vitória entendeu exatamente o que eu precisava. Me sinto mais confiante e poderosa todos os dias.",
    result: "Beleza natural realçada",
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
            Veja o poder da transformação. Estas são histórias reais de mulheres que recuperaram sua confiança e amor próprio.
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
            Você poderia ser a próxima transformação
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg button-rose-premium"
            asChild
          >
            <a
              href="https://wa.me/5585989370159?text=Olá! Gostaria de agendar uma consulta gratuita com a Dra. Vitória Medeiros."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Minha Consulta Gratuita
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;

