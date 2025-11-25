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
    question: "O que diferencia a harmonização da simples aplicação de produtos?",
    answer:
      "Harmonização é visão. É entender seu rosto como um todo, respeitar sua história, revelar sua essência. Não é apenas injetar — é esculpir com sensibilidade e intenção.",
    cta: "Agende sua consulta",
  },
  {
    question: "A idade dita minha aparência?",
    answer:
      "Não. Com os cuidados certos, é possível realçar sua beleza natural, recuperar firmeza, luminosidade e autoestima. Você controla como quer se sentir e se ver.",
    cta: "Agende sua consulta gratuita",
  },
  {
    question: "Como escolher os procedimentos?",
    answer:
      "Na consulta, conversamos profundamente sobre seus objetivos, suas histórias, suas expectativas. Recomendo exatamente o que vai revelar sua melhor versão mantendo sua autenticidade.",
    cta: "Saiba mais",
  },
  {
    question: "Os resultados são naturais?",
    answer:
      "Totalmente. Meu objetivo é valorizar o que já existe de melhor em você — não mudar quem você é. Resultados sutis que transformam, equilíbrio que harmoniza.",
    cta: "Veja transformações reais",
  },
  {
    question: "Quanto tempo duram os resultados?",
    answer:
      "Depende do procedimento. Conversamos sobre um plano de manutenção personalizado que se adequa ao seu estilo de vida e seus objetivos.",
    cta: "Agende sua consulta gratuita",
  },
  {
    question: "É seguro?",
    answer:
      "Sim. Trabalho com técnicas avançadas, materiais premium e dedicação total à sua segurança. Sua confiança é minha prioridade absoluta.",
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
            Tire suas dúvidas sobre harmonização facial. Estou aqui para guiá-la nesta jornada de revelação.
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
                      href={`https://wa.me/5585991262487?text=Olá! Gostaria de agendar uma consulta gratuita com a Dra. Talita Hayelle. Tenho uma dúvida sobre: ${faq.question}`}
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
            Não encontrou sua dúvida? Estou aqui para te guiar com amor e excelência.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg button-rose-premium"
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
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
