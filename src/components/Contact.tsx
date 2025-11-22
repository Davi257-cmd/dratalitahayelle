import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-background/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em <span className="text-gradient-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou aqui para ajudar você a conquistar seus direitos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Localização
                </h3>
                <p className="text-muted-foreground">
                  Fortaleza, Ceará
                  <br />
                  Atendimento presencial e online
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Telefone
                </h3>
                <a
                  href="https://wa.me/5563984031161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent smooth-transition"
                >
                  (63) 9 8403-1161 (WhatsApp)
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Email
                </h3>
                <a
                  href="mailto:contato@deboramacedo.adv.br"
                  className="text-primary hover:text-accent smooth-transition"
                >
                  contato@deboramacedo.adv.br
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Horário de Atendimento
                </h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 09:00 - 18:00
                  <br />
                  Agendamento via WhatsApp
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg button-rose-premium"
                asChild
              >
                <a
                  href="https://wa.me/5563984031161"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp mr-2 text-lg"></i>
                  Entre em Contato via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2734!2d-38.5246!3d-3.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c3f464c783f%3A0x4661c60a0c6b37fa!2sFortaleza%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Localização Dra. Débora Macedo - Fortaleza, Ceará"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
