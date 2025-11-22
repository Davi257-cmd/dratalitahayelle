import { motion } from "framer-motion";
import { Marquee3D } from "@/components/Marquee3D";

const testimonials = [
  {
    name: "Maria Silva",
    case: "Auxílio-Doença Corrigido",
    text: "A Dra. Débora me explicou que meu benefício tinha erro no cálculo. Em 3 meses recebi a diferença retroativa. Gratidão infinita!",
    rating: 5,
  },
  {
    name: "João Santos",
    case: "Aposentadoria Rural",
    text: "Trabalhei a vida toda no campo e não sabia dos meus direitos. Com a orientação da Dra. Débora, consegui minha aposentadoria.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    case: "BPC Aprovado",
    text: "Meu filho com deficiência precisava do BPC. Depois de duas negativas, a Dra. Débora conseguiu a aprovação. Mudou nossa vida!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    case: "Revisão de Aposentadoria",
    text: "Descobri que estava recebendo menos do que tinha direito há anos. A revisão feita pela Dra. aumentou meu benefício em 30%.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    case: "Salário-Maternidade",
    text: "Como MEI, não sabia que tinha direito ao salário-maternidade. A Dra. Débora me orientou e consegui receber todos os valores.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
            Histórias de{" "}
            <span className="text-gradient-primary">Transformação</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Vidas reais, resultados reais, justiça alcançada
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Marquee3D testimonials={testimonials} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Você também merece ter seus direitos reconhecidos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
