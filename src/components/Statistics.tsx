import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    type: "number",
    value: 16.7,
    suffix: " mil",
    label: "Mulheres que confiam em minha transformação",
    sublabel: "",
  },
  {
    type: "text",
    text: "Referência em Harmonização Full Face",
    label: "",
    sublabel: "Brasil",
  },
  {
    type: "number",
    value: 9751,
    suffix: "",
    label: "CRO-DF",
    sublabel: "Cirurgiã-Dentista especializada",
  },
  {
    type: "number",
    value: 10,
    suffix: "+",
    label: "Dedicada ao reconhecimento feminino com propósito",
    sublabel: "anos",
  },
];

const CountUpAnimation = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
};

const Statistics = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Números que Representam Comprometimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados que falam por si. Transformações que mudaram vidas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                {stat.type === "number" ? (
                  <>
                    <p className="text-5xl md:text-6xl font-bold font-mono-stats mb-2">
                      <span className="text-primary-rose-premium">
                        {stat.value === 16.7 ? (
                          <>
                            {stat.value} mil
                          </>
                        ) : stat.value < 100 ? (
                          <CountUpAnimation end={stat.value} suffix={stat.suffix || ""} />
                        ) : (
                          <>
                            {stat.value.toLocaleString('pt-BR')}{stat.suffix}
                          </>
                        )}
                      </span>
                    </p>
                    {stat.label && (
                      <p className="text-xl font-semibold text-foreground">
                        {stat.label}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-2xl md:text-3xl font-bold text-primary-rose-premium mb-2">
                      {stat.text}
                    </p>
                    {stat.label && (
                      <p className="text-xl font-semibold text-foreground">
                        {stat.label}
                      </p>
                    )}
                  </>
                )}
              </div>
              {stat.sublabel && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.sublabel}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
