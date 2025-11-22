import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Banknote, 
  Shield, 
  RefreshCw, 
  Sprout, 
  Baby 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const specialties = [
  {
    icon: HeartPulse,
    title: "Auxílio-Doença",
    description: "Afastamento temporário com direito assegurado",
  },
  {
    icon: Shield,
    title: "Aposentadoria por Invalidez",
    description: "Quando a incapacidade é permanente",
  },
  {
    icon: Banknote,
    title: "BPC - Benefício de Prestação Continuada",
    description: "Para idosos e pessoas com deficiência",
  },
  {
    icon: RefreshCw,
    title: "Revisão de Benefícios",
    description: "Corrigindo erros no cálculo do INSS",
  },
  {
    icon: Sprout,
    title: "Aposentadoria Rural",
    description: "Regras especiais para trabalhadores do campo",
  },
  {
    icon: Baby,
    title: "Salário-Maternidade",
    description: "Direito para autônomas, MEIs e desempregadas",
  },
];

const Specialties = () => {
  return (
    <section id="especialidades" className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
            Áreas de <span className="text-gradient-primary">Atuação</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Especialização em todas as vertentes do Direito Previdenciário
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground smooth-transition group cursor-pointer">
                <CardContent className="p-4 md:p-6 text-center flex flex-col items-center">
                  <div className="mb-3 md:mb-4 p-3 md:p-4 bg-accent/10 group-hover:bg-primary-foreground/20 rounded-full smooth-transition">
                    <specialty.icon className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3 group-hover:text-primary-foreground">
                    {specialty.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed">
                    {specialty.description}
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Não encontrou o que procura? Cada caso é único e merece atenção especializada.
          </p>
          <a
            href="https://wa.me/5563984031161"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-accent-foreground bg-accent rounded-lg hover:bg-accent/90 smooth-transition shadow-md hover:shadow-lg"
          >
            Consulte Seu Caso Específico
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Specialties;
