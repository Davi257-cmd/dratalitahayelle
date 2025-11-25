import { motion } from "framer-motion";
import { 
  Sparkles, 
  Smile, 
  Gem, 
  Sun 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const procedures = [
  {
    icon: Sparkles,
    title: "Harmonização Facial Completa",
    subtitle: "Revelando sua essência natural",
    description: "Análise profunda de proporções, luz e movimento. Cada procedimento pensado para criar harmonia que reflete sua singularidade — você, só que mais radiante.",
  },
  {
    icon: Sun,
    title: "Rejuvenescimento com Propósito",
    subtitle: "Recuperando firmeza, luminosidade e autoestima",
    description: "Combinação de técnicas que trabalham em sinergia: estimuladores de colágeno, preenchimento estratégico e tratamentos que despertam a beleza que já existe. Resultados que evoluem e se sustentam naturalmente.",
  },
  {
    icon: Gem,
    title: "Harmonização de Olhar",
    subtitle: "Transformação que começa pelos olhos",
    description: "O olhar é a porta da alma. Procedimentos precisos que abrem, descansam e elevam seu olhar. Resultado: confiança que brilha e presença que transforma.",
  },
  {
    icon: Smile,
    title: "Escultura Facial Sensível",
    subtitle: "Proporções que respeitam sua história",
    description: "Trabalho preciso de contornos, definições e volumes. Cada milímetro pensado não apenas para beleza, mas para que você se reconheça — e se sinta — ainda mais extraordinária.",
  },
];

const Specialties = () => {
  return (
    <section id="procedimentos" className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
            Sua Beleza <span className="text-gradient-primary">Personalizada</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Procedimentos sofisticados que combinam conhecimento técnico com visão humanizada. Porque transformar um rosto significa tocar uma vida.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
          {procedures.map((procedure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-primary/20 hover:border-primary smooth-transition group">
                <CardContent className="p-4 md:p-6 flex flex-col">
                  <div className="mb-3 md:mb-4 p-3 md:p-4 bg-accent/10 group-hover:bg-primary/10 rounded-full w-fit smooth-transition">
                    <procedure.icon className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:text-primary" />
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">
                    {procedure.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-primary mb-2 md:mb-3 font-medium">
                    {procedure.subtitle}
                  </p>
                  
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 leading-relaxed flex-grow">
                    {procedure.description}
                  </p>
                  
                  <Button
                    variant="outline"
                    className="w-full border-primary/30 hover:bg-primary/5 group-hover:border-primary"
                    onClick={() => {
                      document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
