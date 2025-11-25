import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      // Comportamento de mostrar/esconder no mobile
      if (isMobile) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scrolling down - hide header
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up - show header
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border border-primary/20"
          : "bg-transparent",
        "w-[95%] md:w-[80%] max-w-7xl mt-2 md:mt-5 rounded-[15px] md:rounded-[25px]",
        isMobile && !isVisible ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 w-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
              <span className="text-lg md:text-xl font-bold"><span className="text-primary-rose-premium">T</span></span>
            </div>
            <div className="hidden md:block">
              <p className="text-base font-bold text-foreground leading-tight">
                Dra. Talita Hayelle
              </p>
              <p className="text-xs text-muted-foreground">
                Harmonização Facial
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("procedimentos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Procedimentos
            </button>
            <button
              onClick={() => scrollToSection("transformacoes")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Transformações
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/50 button-rose-premium"
              asChild
            >
              <a
                href="https://wa.me/5585991262487?text=Olá! Gostaria de agendar uma consulta gratuita com a Dra. Talita Hayelle."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agende Sua Transformação
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary/20">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("procedimentos")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                Procedimentos
              </button>
              <button
                onClick={() => scrollToSection("transformacoes")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                Transformações
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left"
              >
                Depoimentos
              </button>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full button-rose-premium"
                asChild
              >
                <a
                  href="https://wa.me/5585991262487?text=Olá! Gostaria de agendar uma consulta gratuita com a Dra. Talita Hayelle."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agende Sua Transformação
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
