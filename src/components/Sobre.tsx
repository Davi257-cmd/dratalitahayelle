import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Users, FileText, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "17+", label: "Anos de Atuação" },
  { icon: Users, value: "5.311+", label: "Seguidores" },
  { icon: FileText, value: "300+", label: "Posts Educativos" },
  { icon: TrendingUp, value: "100%", label: "Comprometimento" },
];

const Sobre = () => {
  return (
    <section id="sobre" className="py-12 md:py-20 lg:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src="/debora-adv/adv-debora-2-seção.jpg"
                  alt="Dra. Débora Macedo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="bg-card rounded-lg p-3 md:p-4 border border-border shadow-sm"
                  >
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-primary mb-1 md:mb-2" />
                    <p className="text-xl md:text-2xl font-bold font-mono-stats mb-1">
                      <span className="text-primary-rose-premium">{stat.value}</span>
                    </p>
                    <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                Quem é a{" "}
                <span className="text-gradient-primary">Dra. Débora?</span>
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Advogada previdenciária com <strong className="text-foreground">17 anos de atuação</strong>.
                Minha missão é simples: evidenciar a beleza da justiça,
                tornando direitos compreensíveis e acessíveis a quem
                realmente precisa.
              </p>

              <p>
                O direito previdenciário é complexo, mas não precisa ser caótico.
                Aqui, você recebe orientação clara, estratégica e humanizada.
              </p>

              <p>
                Sou casada com <a href="https://instagram.com/engdiogomoura" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent smooth-transition">@engdiogomoura</a>, 
                mãe da Laura e do Miguel. Acredito que <strong className="text-foreground">conhecimento é poder</strong> - 
                e estou aqui para empoderar você com informação jurídica de qualidade.
              </p>

              <p className="text-base md:text-lg font-semibold text-foreground pt-3 md:pt-4">
                Transformo injustiças em vitórias.
              </p>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg button-rose-premium"
                asChild
              >
                <a
                  href="https://wa.me/5563984031161"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp mr-2 text-lg"></i>
                  Fale Comigo
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
