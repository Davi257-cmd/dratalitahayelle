import { motion } from "framer-motion";
import { Shield, Sparkles, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Excelência Não é Acaso — É Escolha Diária",
    description:
      "Acredito que Deus concede a cada um de nós talentos únicos. Meu propósito é lapidar esses talentos todos os dias — com dedicação, disciplina e amor — para servir ao próximo com meu melhor. Excelência é constância.",
  },
  {
    icon: Sparkles,
    title: "Técnica + Sensibilidade = Transformação de Dentro para Fora",
    description:
      "Harmonizar não é apenas injetar produtos. É revelar — acolher histórias, resgatar essências e elevar a presença única de cada mulher. Cada ponto é pensado com intenção, cada traço é esculpido com sensibilidade e respeito por quem você é.",
  },
  {
    icon: Heart,
    title: "Rejuvenescimento que Valoriza, Não Que Muda",
    description:
      "A ciência estética evoluiu. Hoje, rejuvenescimento não significa \"mudar quem você é\", mas valorizar o que já existe de melhor em você. Resultados reais, equilíbrio, harmonia e confiança renovada.",
  },
];

const ProblemSolution = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
            Por Que Você Merece Realçar Sua Beleza com{" "}
            <span className="text-gradient-primary">Propósito</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Sua jornada começa com a escolha certa. Aqui está por que você está no lugar perfeito.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-border hover:border-primary smooth-transition group hover:shadow-lg">
                <CardContent className="p-5 md:p-6 lg:p-8 flex flex-col h-full">
                  <div className="mb-4 md:mb-6 inline-flex">
                    <div className="p-3 md:p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 smooth-transition">
                      <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary smooth-transition">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-muted-foreground flex-grow leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
