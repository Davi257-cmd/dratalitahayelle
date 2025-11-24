import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, Users, FileText, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: "5+", label: "Anos de Experiência" },
  { icon: Users, value: "500+", label: "Pacientes" },
  { icon: TrendingUp, value: "98%", label: "Satisfação" },
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
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-2xl overflow-hidden">
                <img
                  src="/vitoria-d/foto-vitoria-secao2.jpg"
                  alt="Dra. Vitória Medeiros"
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
                Conheça a{" "}
                <span className="text-gradient-primary">Dra. Vitória</span>
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Minha missão vai além de transformar sorrisos — é sobre devolver a confiança que cada mulher merece sentir. Acredito que a beleza começa quando você se ama, e meu trabalho é ajudá-la a encontrar essa versão mais segura e poderosa de si mesma.
              </p>

              <p>
                Com especialização em harmonização orofacial e anos dedicados ao empoderamento feminino, criei um espaço acolhedor onde cada procedimento é personalizado para realçar sua singularidade natural.
              </p>
            </div>

            <div className="pt-4 space-y-2">
              <h3 className="text-lg font-semibold text-foreground mb-3">Qualificações:</h3>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Especialista em Harmonização Orofacial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Formação continuada em estética dental avançada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Dedicada ao empoderamento feminino</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mais de 500 pacientes transformadas</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg button-rose-premium"
                asChild
              >
                <a
                  href="https://wa.me/5585989370159?text=Olá! Gostaria de agendar uma consulta gratuita com a Dra. Vitória Medeiros."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta Gratuita
                </a>
              </Button>
            </div>
            
            {/* Floating Card */}
            <div className="mt-6 inline-block">
              <div className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-3 backdrop-blur-sm">
                <p className="text-sm font-semibold text-foreground">
                  98% Pacientes Satisfeitas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
