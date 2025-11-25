import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            Você Poderia Ser a Próxima Transformação
          </h2>

          <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Sua jornada de revelação começa agora. Você merece se sentir bem ao se olhar no espelho todos os dias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 animate-glow-pulse border border-primary button-rose-premium flex items-center justify-center"
                asChild
              >
                <a
                  href="https://wa.me/5585991262487?text=Olá! Gostaria de agendar uma consulta gratuita com a Dra. Talita Hayelle."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full"
                >
                  <Heart className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  <span className="whitespace-nowrap">Agendar Minha Consulta Gratuita</span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById("transformacoes")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver Transformações Reais
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 space-y-2"
          >
            <p className="text-sm text-muted-foreground">
              ✨ Primeira consulta personalizada e sem compromisso
            </p>
            <p className="text-sm text-muted-foreground font-semibold">
              💎 Harmonização que toca vidas, desperta essências
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
