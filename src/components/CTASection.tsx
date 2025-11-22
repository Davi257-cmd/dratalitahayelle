import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Shield } from "lucide-react";

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            Não Deixe Seus Direitos Para Depois
          </h2>

          <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Cada dia de espera pode significar direitos perdidos.
            Receba orientação jurídica especializada AGORA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl text-lg px-8 py-6 animate-glow-pulse border border-primary button-rose-premium"
                asChild
              >
                <a
                  href="https://wa.me/5563984031161"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp mr-2 text-xl"></i>
                  Agende Uma Consulta
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
                asChild
              >
                <a href="mailto:contato@deboramacedo.adv.br">
                  <Mail className="mr-2 h-6 w-6" />
                  Envie um Email
                </a>
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
              Primeira consulta inclui orientação estratégica sobre seu caso específico.
            </p>
            <p className="text-sm text-muted-foreground font-semibold">
              Discrição garantida. Resposta em até 24h.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
