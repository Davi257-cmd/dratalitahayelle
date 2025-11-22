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
    question: "Posso ter direito a revisão do meu benefício?",
    answer:
      "Sim! Muitos benefícios do INSS contêm erros de cálculo. Se você recebe aposentadoria, auxílio-doença ou outro benefício há mais de um ano, pode haver direito a revisão. Verificamos períodos não computados, salários de contribuição incorretos e aplicação de regras antigas que podem aumentar seu benefício. A revisão pode gerar diferenças retroativas de até 10 anos.",
    cta: "Verifique seu caso",
  },
  {
    question: "Qual a diferença entre auxílio-doença e aposentadoria por invalidez?",
    answer:
      "O auxílio-doença é concedido quando você está temporariamente incapaz de trabalhar, com previsão de retorno. Já a aposentadoria por invalidez é para incapacidade permanente, sem possibilidade de reabilitação. Ambos exigem perícia médica do INSS, mas os critérios de avaliação são diferentes. É fundamental apresentar documentação médica completa para aumentar as chances de aprovação.",
    cta: "Entenda melhor",
  },
  {
    question: "Trabalhadores rurais têm direitos diferentes?",
    answer:
      "Sim! Trabalhadores rurais têm regras especiais e mais favoráveis. A comprovação da atividade rural pode ser feita por documentos como contratos de arrendamento, notas fiscais de venda de produção, declarações de sindicato, entre outros. Não é necessário ter contribuído formalmente ao INSS durante todo o período - a comprovação da atividade rural já garante o direito. Muitos trabalhadores rurais não sabem desses direitos e ficam sem benefícios que lhes são devidos.",
    cta: "Verifique sua situação",
  },
  {
    question: "Como funciona o salário-maternidade para autônomas?",
    answer:
      "Trabalhadoras autônomas, MEIs e contribuintes individuais têm direito ao salário-maternidade, desde que estejam contribuindo para o INSS. O benefício é de 120 dias e o valor depende da média das contribuições. Mesmo desempregadas podem ter direito, se estiverem no período de graça (mantendo a qualidade de segurado). O pedido deve ser feito após o parto ou adoção, diretamente no INSS ou com auxílio jurídico para evitar negativas indevidas.",
    cta: "Consulte-me",
  },
  {
    question: "O INSS pode cometer erros nos cálculos?",
    answer:
      "Sim, e é muito comum! Os erros incluem: não considerar todos os salários de contribuição, aplicar regras incorretas de transição, ignorar períodos especiais (insalubridade, periculosidade), calcular incorretamente tempo rural, não aplicar direito adquirido a regras antigas mais favoráveis. Estima-se que mais de 30% dos benefícios previdenciários contenham algum tipo de erro. Por isso a revisão é tão importante - pode aumentar seu benefício significativamente e gerar valores retroativos.",
    cta: "Analise seu benefício",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "É muito simples! Você pode entrar em contato comigo pelo WhatsApp (63) 9 8403-1161 ou por email. Na primeira consulta, vou entender seu caso, analisar sua documentação e apresentar as melhores estratégias jurídicas para resolver sua situação. O atendimento é personalizado e toda comunicação é mantida em sigilo profissional. Respondo a todos os contatos em até 24 horas.",
    cta: "Agende agora",
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
            Perguntas{" "}
            <span className="text-gradient-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre direitos previdenciários
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
                      href="https://wa.me/5563984031161"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-whatsapp mr-2 text-base"></i>
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
            Não encontrou sua dúvida? Fale diretamente comigo.
          </p>
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
              Entre em Contato
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
