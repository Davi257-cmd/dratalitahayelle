import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

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
                  src="/talita-secoes/talita-secao2.png"
                  alt="Dra. Talita Hayelle"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-card rounded-lg p-3 md:p-4 border border-border shadow-sm col-span-2"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5 text-primary mb-1 md:mb-2" />
                <p className="text-xl md:text-2xl font-bold font-mono-stats mb-1">
                  <span className="text-primary-rose-premium">5.820</span>
                </p>
                <p className="text-xs text-muted-foreground leading-tight">Mulheres que Vivem Sua Melhor Versão</p>
              </motion.div>
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
                <span className="text-gradient-primary">Dra. Talita Hayelle</span>
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Founder da Clínica TH Harmony, Dra. Talita é mais que uma profissional — é uma visionária dedicada a revelar a beleza e o propósito em cada mulher.
              </p>

              <p>
                Minha jornada começou com a compreensão de um chamado simples: Deus me deu talentos, e meu propósito é desenvolvê-los para servir ao próximo.
              </p>

              <p>
                Cada dia, busco aprofundamento no conhecimento estético. Cada procedimento é uma oportunidade de fazer mais que mudar aparências — é tocar vidas, despertar essências, revelar a beleza que o Criador já plantou dentro de cada um.
              </p>

              <p>
                Criei a Clínica TH Harmony porque acredito que harmonização facial vai muito além de injetar produtos. É revelar — acolher histórias, resgatar essências e elevar a presença única de cada mulher.
              </p>

              <p>
                Quando técnica encontra sensibilidade, quando excelência encontra propósito, quando conhecimento encontra fé — é quando a verdadeira transformação acontece. De dentro para fora.
              </p>

              <p className="text-primary font-semibold">
                Meu compromisso é simples: em cada atendimento, cada conversa, cada transformação — entregar o melhor de mim. Com dedicação, disciplina, sensibilidade e amor.
              </p>
            </div>

            <div className="pt-4 space-y-2">
              <h3 className="text-lg font-semibold text-foreground mb-3">Qualificações:</h3>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Especialista em Harmonização Facial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Founder da Clínica TH Harmony</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Formação continuada em técnicas avançadas de rejuvenescimento</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Dedicação ao conhecimento profundo e excelência constante</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Abordagem humanizada que toca vidas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>5.820 mulheres que vivem sua melhor versão</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Missionária da beleza com propósito</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 flex justify-center items-center sm:justify-start">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg button-rose-premium mx-auto sm:mx-0"
                asChild
              >
                <a
                  href="https://wa.me/5585991262487?text=Olá! Gostaria de agendar uma consulta gratuita com a Dra. Talita Hayelle."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full"
                >
                  Agendar Consulta Gratuita
                </a>
              </Button>
            </div>
            
            {/* Floating Card */}
            <div className="mt-6 flex justify-center items-center sm:justify-start">
              <div className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-3 backdrop-blur-sm mx-auto sm:mx-0">
                <p className="text-sm font-semibold text-foreground text-center sm:text-left">
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
