import { Button } from "@/components/ui/button";
interface HeroProps {
  onQuoteRequest: () => void;
}
export const Hero = ({
  onQuoteRequest
}: HeroProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="accueil" className="relative pt-16">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{
      backgroundImage: "url('/soleklean_hero.jpeg')",
      zIndex: 0
    }}>
        {/* Overlay with reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-white/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 flex flex-col items-center gap-4">
            <img 
              src="/logo.svg" 
              alt="SOLEKLEAN" 
              className="h-16 md:h-24 w-auto"
            />
            <span>Nettoyage Écologique de{" "}
            <span className="text-blue-600">Panneaux Solaires</span></span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">Expert en nettoyage professionnel et écologique de panneaux solaires, façades et vitrages. Boostez le rendement de vos installations photovoltaïques jusqu'à 30% avec nos solutions respectueuses de l'environnement. Intervention rapide partout , devis gratuit sous 24h.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" onClick={onQuoteRequest}>
              Demander un devis gratuit
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg" onClick={() => scrollToSection("services")}>
              Découvrir nos services
            </Button>
          </div>

          {/* Services rapides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Nettoyage Panneaux Solaires
              </h2>
              <p className="text-slate-600">Optimisation du rendement énergétique avec un nettoyage écologique professionnel sans produits chimiques nocifs</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Nettoyage Façades & Vitrages
              </h2>
              <p className="text-slate-600">
                Solutions de nettoyage respectueuses de l'environnement pour façades, baies vitrées et surfaces commerciales
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Intervention Rapide 48h
              </h2>
              <p className="text-slate-600">
                Service professionnel avec équipe qualifiée, matériel spécialisé et garantie qualité pour tous types d'installations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
