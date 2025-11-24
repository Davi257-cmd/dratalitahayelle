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
    question: "A harmonização orofacial é segura?",
    answer:
      "Absolutamente! A harmonização orrofacial é um procedimento seguro quando realizado por um profissional especializado e qualificado. Utilizo técnicas modernas, produtos de alta qualidade e sigo todos os protocolos de segurança. Cada procedimento é personalizado após uma avaliação detalhada do seu perfil facial, garantindo resultados naturais e harmoniosos. Sua segurança e bem-estar são minha prioridade número um.",
    cta: "Agende sua consulta",
  },
  {
    question: "Quanto tempo dura o resultado da harmonização orofacial?",
    answer:
      "Os resultados da harmonização orofacial variam conforme o procedimento realizado. Preenchimentos faciais podem durar de 12 a 18 meses, enquanto procedimentos como facetas em porcelana são permanentes. Durante a consulta gratuita, explico detalhadamente a durabilidade de cada procedimento e criamos um plano personalizado para manter seus resultados sempre impecáveis. O importante é que você se sinta confiante e radiante todos os dias.",
    cta: "Saiba mais",
  },
  {
    question: "Qual a diferença entre facetas em resina e porcelana?",
    answer:
      "As facetas em resina são ideais para transformações rápidas e eficazes, podendo ser feitas em uma ou poucas sessões. São mais acessíveis e oferecem resultados imediatos. Já as facetas em porcelana são a opção premium, com durabilidade excepcional de até 15 anos ou mais, resistência superior e aparência ainda mais natural. Durante nossa consulta, avaliamos qual opção é melhor para seus objetivos, orçamento e estilo de vida.",
    cta: "Veja qual é ideal para você",
  },
  {
    question: "O clareamento dental dói?",
    answer:
      "O clareamento dental profissional que realizo é seguro e confortável. Utilizo técnicas modernas que minimizam qualquer sensibilidade. Algumas pacientes podem sentir leve sensibilidade temporária, mas isso é completamente normal e passa rapidamente. Os resultados são impressionantes - dentes até 8 tons mais brancos, realçando seu sorriso naturalmente. Você terá um sorriso radiante que reflete toda sua energia e confiança.",
    cta: "Transforme seu sorriso",
  },
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "A primeira consulta é totalmente gratuita e sem compromisso! É um momento especial onde nos conhecemos, você compartilha seus objetivos e sonhos, e eu faço uma avaliação completa do seu perfil. Juntas, criamos um plano personalizado que realça sua beleza natural. Não há pressão - é um espaço acolhedor onde você pode tirar todas suas dúvidas e se sentir completamente à vontade. Sua jornada de transformação começa com confiança e segurança.",
    cta: "Agende sua consulta gratuita",
  },
  {
    question: "Os procedimentos são dolorosos?",
    answer:
      "Todos os procedimentos são realizados com anestesia local quando necessário, garantindo máximo conforto. Minha prioridade é que você se sinta relaxada e segura durante todo o processo. Muitas pacientes relatam que o procedimento é mais tranquilo do que imaginavam. O ambiente é acolhedor, e estou sempre ao seu lado para garantir que tudo seja feito com cuidado e atenção aos seus sentimentos.",
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
            Tire suas dúvidas sobre harmonização orofacial e procedimentos estéticos. Estou aqui para te ajudar em cada passo da sua transformação.
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
                      href={`https://wa.me/5585989370159?text=Olá! Gostaria de agendar uma consulta gratuita com a Dra. Vitória Medeiros. Tenho uma dúvida sobre: ${faq.question}`}
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
            Não encontrou sua dúvida? Estou aqui para te ajudar em cada passo da sua jornada de transformação.
          </p>
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
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
