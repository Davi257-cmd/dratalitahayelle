import { motion } from "framer-motion";
import { HelpCircle, TrendingDown, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: HelpCircle,
    title: "Você Acha que é Só Auxílio-Doença",
    description:
      "Mas pode ser BPC, aposentadoria ou revisão. Cada caso tem um caminho diferente.",
    cta: "Entenda seu caso",
    link: "#faq",
  },
  {
    icon: TrendingDown,
    title: "Erros de Cálculo do INSS Custam Caro",
    description:
      "Salários não considerados, períodos ignorados. Você tem direito a diferenças retroativas.",
    cta: "Verifique seu benefício",
    link: "https://wa.me/5563984031161",
  },
  {
    icon: BookOpen,
    title: "Direitos Ignorados por Falta de Informação",
    description:
      "Trabalhadores rurais, autônomos, MEIs. Muitos têm direitos garantidos por lei que não usam.",
    cta: "Descubra seus direitos",
    link: "https://wa.me/5563984031161",
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
            Problemas Comuns que{" "}
            <span className="text-gradient-primary">Resolvemos</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça os erros mais frequentes e como podemos corrigir cada um deles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
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
                      <problem.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary smooth-transition">
                    {problem.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 flex-grow leading-relaxed">
                    {problem.description}
                  </p>
                  
                  <Button
                    variant="ghost"
                    className="w-full justify-between group/btn text-primary hover:text-accent hover:bg-primary/5"
                    asChild
                  >
                    <a href={problem.link}>
                      {problem.cta}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
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

export default ProblemSolution;
