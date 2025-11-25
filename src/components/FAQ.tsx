import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "O que é Harmonização Full Face?",
    answer:
      "É a visão holística de todo o seu rosto. Não apenas um procedimento isolado, mas uma combinação estratégica que equilibra boca, queixo, maçã do rosto, contorno e olhar. Resultado: você, em perfeita harmonia.",
    cta: "Agende sua consulta",
  },
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "Conversamos sobre suas histórias, seus desejos, suas inseguranças. Sem pressão. Faço uma análise completa do seu rosto e apresento um plano personalizado que revela sua melhor versão.",
    cta: "Agende sua consulta gratuita",
  },
  {
    question: "Quanto tempo dura o resultado?",
    answer:
      "Depende do procedimento. A maioria dos resultados dura entre 3 a 12 meses. Podemos conversar sobre um plano de manutenção que se adequa ao seu estilo de vida.",
    cta: "Saiba mais",
  },
  {
    question: "Os procedimentos dão resultado natural?",
    answer:
      "Totalmente. O objetivo é revelar você — melhor, mais harmonizada, mais segura. Nunca transformar drasticamente ou criar artificialidade.",
    cta: "Veja transformações reais",
  },
  {
    question: "Qual procedimento escolher?",
    answer:
      "Por isso existe a consulta. Cada rosto é único. Durante a avaliação, vou te mostrar exatamente qual é o melhor caminho para a sua transformação.",
    cta: "Agende sua consulta gratuita",
  },
  {
    question: "É seguro?",
    answer:
      "Sim. Trabalho com técnicas avançadas, materiais premium e todo o cuidado que sua segurança merece. Sua confiança é minha prioridade absoluta.",
    cta: "Converse comigo",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Dúvidas{" "}
            <span className="text-gradient-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre harmonização full face. Estou aqui para guiá-la em cada passo da sua transformação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-primary/30 rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:border-primary smooth-transition"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  <p className="mb-4">{faq.answer}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={`https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma consulta gratuita com a Dra. Antônia Fernandes. Tenho uma dúvida sobre: ${faq.question}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {faq.cta}
                    </a>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Não encontrou sua dúvida? Estou aqui para te guiar.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg button-rose-premium"
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
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
