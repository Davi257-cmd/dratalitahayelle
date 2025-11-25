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
                  src="/antonia-secoes/Antoniafernades-secao2.png"
                  alt="Dra. Antônia Fernandes"
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
                  <span className="text-primary-rose-premium">16,7 mil</span>
                </p>
                <p className="text-xs text-muted-foreground leading-tight">Mulheres que confiam em minha transformação</p>
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
                <span className="text-gradient-primary">Dra. Antônia Fernandes</span>
              </h2>
            </div>

            <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                De menina sonhadora à mulher que transformou propósito em reconhecimento.
              </p>

              <p>
                Hoje, entre as harmonizadoras mais bem pagas do país com o mesmo amor de quando comecei.
              </p>

              <p>
                Minha jornada não foi fácil. Trabalhei muito, atendi dezenas de pacientes por dia, mas sentia que faltava algo. Era cansativo, e mesmo com tanto esforço, o reconhecimento não vinha.
              </p>

              <p>
                Até que descobri que meu propósito real não era apenas transformar rostos — era resgatar histórias, devolver autoestima e revelar a melhor versão que existe em cada pessoa.
              </p>

              <p>
                Cada clínica, cada viagem, cada paciente foram parte da minha construção. E aquela mulher que rodava com uma mala cheia de sonhos hoje vive o que tanto desejava:
              </p>

              <p className="text-primary font-semibold">
                ✨ Cuidar de pessoas, com propósito, amor e elegância.
              </p>

              <p>
                Hoje, quando você chega ao meu consultório, não vem apenas buscar um procedimento estético. Você vem buscar reconhecimento, confiança e a melhor versão de si mesma.
              </p>

              <p>
                E é com todo meu amor e experiência que vou te entregar exatamente isso.
              </p>
            </div>

            <div className="pt-4 space-y-2">
              <h3 className="text-lg font-semibold text-foreground mb-3">Qualificações:</h3>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cirurgiã-Dentista | CRO-DF 9751</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Especialista em Harmonização Full Face</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Referência em harmonização orofacial no Brasil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Formação continuada em técnicas avançadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Dedicada ao empoderamento feminino com propósito</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>16,7 mil mulheres que tiveram sua melhor versão revelada</span>
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
                  href="https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma consulta gratuita com a Dra. Antônia Fernandes."
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
