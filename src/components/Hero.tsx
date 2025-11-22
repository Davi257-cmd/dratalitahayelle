import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-[100px]">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                17 Anos de Experiência
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight break-words"
            >
              Enfrentando Injustiças do{" "}
              <span className="text-gradient-primary">INSS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed break-words"
            >
              Se o INSS errou, temos o caminho certo para corrigir.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm sm:text-base text-muted-foreground break-words"
            >
              Especialista em Direito Previdenciário com atuação comprovada em
              auxílio-doença, BPC, revisões de benefícios e aposentadorias.
              Soluções jurídicas que transformam vidas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-glow-primary smooth-transition group button-rose-premium"
                asChild
              >
                <a
                  href="https://wa.me/5563984031161"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp mr-2 text-lg"></i>
                  Agende uma Consulta
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/5"
                onClick={() => {
                  document.getElementById("depoimentos")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Conheça Meus Casos
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-border/50"
            >
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono-stats"><span className="text-primary-rose-premium">5.311+</span></p>
                <p className="text-xs sm:text-sm text-muted-foreground">Seguidores Confiantes</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono-stats"><span className="text-primary-rose-premium">300+</span></p>
                <p className="text-xs sm:text-sm text-muted-foreground">Posts Educativos</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold font-mono-stats"><span className="text-primary-rose-premium">100%</span></p>
                <p className="text-xs sm:text-sm text-muted-foreground">Comprometimento</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src="/debora-adv/adv-debora-1-seção.jpg"
                  alt="Dra. Débora Macedo - Advocacia Previdenciária"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full blur-2xl opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
