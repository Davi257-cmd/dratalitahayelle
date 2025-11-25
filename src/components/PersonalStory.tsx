import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const PersonalStory = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
              Por Que Você Merece Olhar-se com{" "}
              <span className="text-gradient-primary">Mais Amor</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg"
          >
            <p>
              Minha jornada começou diferente. Trabalhava muito, atendia dezenas de pacientes por dia, mas ainda sentia que faltava algo. Era cansativo, e mesmo com tanto esforço, o reconhecimento não vinha como eu esperava.
            </p>

            <p>
              Até que eu descobri a Harmonização Facial — e tudo fez sentido.
            </p>

            <p>
              Entendi que meu propósito não era apenas transformar rostos, mas resgatar histórias, devolver autoestima e revelar a melhor versão que existe em cada pessoa.
            </p>

            <p>
              Hoje, quando olho pra trás, vejo que cada decisão, cada aprendizado e cada paciente foram parte da minha construção. E aquela mulher que rodava com uma mala cheia de sonhos agora vive o que tanto desejava:
            </p>

            <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6 my-6">
              <p className="text-primary font-semibold text-lg md:text-xl flex items-start gap-2">
                <Sparkles className="w-6 h-6 flex-shrink-0 mt-1" />
                <span>cuidar de pessoas, com propósito, amor e elegância.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalStory;

