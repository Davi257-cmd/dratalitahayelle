import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    procedure: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. Gostaria de agendar uma consulta sobre: ${formData.procedure || "Harmonização Facial"}. ${formData.message ? `Mensagem: ${formData.message}` : ""}`;
    const whatsappUrl = `https://wa.me/5585991262487?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

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
            Comece Sua <span className="text-gradient-primary">Transformação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende sua consulta gratuita e descubra como revelar sua melhor versão com harmonização facial sofisticada e natural. Você merece essa jornada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(61) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="procedure" className="block text-sm font-medium text-foreground mb-2">
                  Procedimento de Interesse
                </label>
                <Select
                  value={formData.procedure}
                  onValueChange={(value) => setFormData({ ...formData, procedure: value })}
                >
                  <SelectTrigger id="procedure">
                    <SelectValue placeholder="Selecione um procedimento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="harmonizacao-facial-completa">Harmonização Facial Completa</SelectItem>
                    <SelectItem value="rejuvenescimento-com-proposito">Rejuvenescimento com Propósito</SelectItem>
                    <SelectItem value="harmonizacao-olhar">Harmonização de Olhar</SelectItem>
                    <SelectItem value="escultura-facial-sensivel">Escultura Facial Sensível</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-me sobre seus objetivos..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg button-rose-premium"
              >
                Agendar Consulta Gratuita
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
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
                  Fortaleza / Baturité, CE
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
                  href="https://wa.me/5585991262487"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent smooth-transition"
                >
                  WhatsApp - Agendamentos & Dúvidas
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  E-mail
                </h3>
                <a
                  href="mailto:contato@drtalitahayelle.com"
                  className="text-primary hover:text-accent smooth-transition"
                >
                  contato@drtalitahayelle.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Instagram
                </h3>
                <div className="space-y-2">
                  <a
                    href="https://www.instagram.com/dra.talitahayelle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent smooth-transition block"
                  >
                    @dra.talitahayelle
                  </a>
                  <a
                    href="https://www.instagram.com/clinica_th.harmony/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent smooth-transition block"
                  >
                    @clinica_th.harmony
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.275!2d-38.5267!3d-3.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c3f464c783f%3A0x4661c60a0c6b37f2!2sFortaleza%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Localização Dra. Talita Hayelle - Fortaleza & Baturité, CE"
            ></iframe>
            <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-primary/20">
              <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Fortaleza & Baturité, CE
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
