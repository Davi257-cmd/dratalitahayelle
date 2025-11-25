import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const PersonalStory = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4 px-4">
              O Chamado de{" "}
              <span className="text-gradient-primary">Lapidar Talentos</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              De menina sonhadora a founder de clínica de excelência.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg"
          >
            <p>
              Encontrei um vídeo que mudou minha perspectiva. Um empresário ao qual tenho grande admiração refletindo sobre o que nos leva à excelência.
            </p>

            <p>
              E a resposta é clara: a busca constante pelo conhecimento.
            </p>

            <p>
              Dominar e aprofundar-se na sua área de atuação é o que conduz à entrega do extraordinário.
            </p>

            <p>
              Acredito que Deus concede a cada um talentos únicos. E nosso propósito é lapidar esses talentos todos os dias — com dedicação, disciplina e amor — para servir ao próximo com o nosso melhor.
            </p>

            <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-4 md:p-6 my-6">
              <p className="text-primary font-semibold text-base sm:text-lg md:text-xl flex items-start gap-2">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-1" />
                <span>Excelência não é acaso. É constância. É escolha diária. 🤍✨</span>
              </p>
            </div>

            <p>
              Nos últimos dias, vivi momentos que marcaram minha alma. Resultados sutis que transformam, olhares de confiança, palavras que renovam a fé e gestos que refletem o amor de Deus em cada detalhe.
            </p>

            <p>
              Porque harmonizar vai além da técnica — é tocar vidas, despertar essências e revelar a beleza que o Criador já plantou dentro de cada um.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalStory;

