import { motion } from "framer-motion";
import { Marquee3D } from "@/components/Marquee3D";

const testimonials = [
  {
    name: "Cristiane",
    case: "42 anos",
    text: "O brilho no meu olhar, a leveza no meu sorriso, a postura mais confiante — tudo mudou. Mas o mais importante é que me vejo e me sinto ainda mais extraordinária. Técnica e sensibilidade em cada detalhe.",
    rating: 5,
  },
  {
    name: "Beatriz",
    case: "38 anos",
    text: "Não pareço diferente — pareço eu mesma, mas melhor. Minha pele ganhou vida, meu rosto ganhou harmonia. Cada resultado é tão natural que parece que sempre foi assim. Amei!",
    rating: 5,
  },
  {
    name: "Marina",
    case: "45 anos",
    text: "Meu olhar ganhou luz, meu rosto ganhou proporção. Resultado extraordinário que reflete dentro pra fora. Me sinto poderosa todos os dias.",
    rating: 5,
  },
  {
    name: "Lucia",
    case: "40 anos",
    text: "Cada detalhe foi pensado com intenção. Sinto que a Dra. Talita não apenas transformou meu rosto — ela tocou minha alma. Resultado que é beleza + amor.",
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
