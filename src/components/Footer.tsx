import { Instagram, Mail, Phone, MapPin, Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Dra. Débora Macedo</h3>
                <p className="text-sm text-primary-foreground/70">
                  Advocacia Previdenciária
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Especialista em direitos previdenciários.
              Transformando injustiças em justiça.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-primary-foreground/70 hover:text-primary smooth-transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-primary-foreground/70 hover:text-primary smooth-transition"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#especialidades"
                  className="text-primary-foreground/70 hover:text-primary smooth-transition"
                >
                  Especialidades
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-primary-foreground/70 hover:text-primary smooth-transition"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-primary-foreground/70 hover:text-primary smooth-transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/advdeboramacedo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary smooth-transition"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">@advdeboramacedo</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5563984031161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary smooth-transition"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">(63) 9 8403-1161</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@deboramacedo.adv.br"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary smooth-transition"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">Email</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Localização */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Localização</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>
                  Atendimento em Fortaleza, CE
                  <br />
                  Agendamentos via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © 2025 Dra. Débora Macedo - Advocacia Previdenciária. Todos os
              direitos reservados.
            </p>
            <p className="flex items-center gap-1">
              Desenvolvido com <Scale className="w-4 h-4 text-primary" /> e
              comprometimento com a justiça
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
