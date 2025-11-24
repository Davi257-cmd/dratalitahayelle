import { motion } from "framer-motion";
import { Marquee3D } from "@/components/Marquee3D";

const testimonials = [
  {
    name: "Camila Silva",
    case: "Empresária",
    text: "Não me reconhecia no espelho... agora me amo. A Dra. Vitória transformou não só meu sorriso, mas minha vida inteira.",
    rating: 5,
  },
  {
    name: "Fernanda Costa",
    case: "Advogada",
    text: "Senti minha autoestima voltar à vida. Cada dia me olho no espelho e sorrio, de verdade.",
    rating: 5,
  },
  {
    name: "Beatriz Oliveira",
    case: "Influencer",
    text: "Que profissional sensacional e dedicada! Cuidado humanizado em cada detalhe.",
    rating: 5,
  },
  {
    name: "Larissa Martins",
    case: "Arquiteta",
    text: "O resultado é de deixar qualquer um de queixo caído. Investir em mim mesma foi a melhor decisão.",
    rating: 5,
  },
  {
    name: "Paula Mendes",
    case: "Médica",
    text: "Dra. Vitória me devolveu meu sorriso e minha confiança. Profissional excepcional!",
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
            Ouça Quem Já Se{" "}
            <span className="text-gradient-primary">Transformou</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Histórias reais de mulheres que recuperaram sua autoestima e confiança. Você também merece se sentir assim.
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

      </div>
    </section>
  );
};

export default Testimonials;
