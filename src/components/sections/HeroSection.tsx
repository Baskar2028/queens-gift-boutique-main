import { Heart, Sparkles } from "lucide-react";
import roses from "@/assets/hero-roses.jpg";
import wallpaper from "@/assets/valentine-wallpaper.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: "600px" }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />

      <div className="container relative grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush text-primary-deep text-xs font-medium mb-6">
            <Sparkles size={14} /> Romantic Gifting Boutique
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground">
            <span className="font-script text-primary block text-6xl md:text-8xl lg:text-9xl mb-2">Queen's</span>
            Gifts of Love
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
            Where every gift whispers a love story. Curated with grace, wrapped with peace,
            delivered straight from the heart. <Heart className="inline text-rose" size={16} fill="currentColor" />
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("collections")}
              className="px-8 py-3.5 rounded-full bg-[image:var(--gradient-pink)] text-white font-medium shadow-[var(--shadow-rose)] hover:scale-105 transition-transform"
            >
              Explore Collections
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="px-8 py-3.5 rounded-full border border-primary/40 text-primary-deep font-medium hover:bg-blush transition-colors"
            >
              Our Story
            </button>
          </div>
        </div>

        <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-8 bg-[image:var(--gradient-blush)] rounded-[3rem] blur-3xl opacity-60" />
          <div className="relative float-soft rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-rose)]">
            <img
              src={roses}
              alt="Red roses bouquet on a gray wooden table"
              width={1024}
              height={1024}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-3 shadow-[var(--shadow-soft)] flex items-center gap-3">
            <Heart className="text-rose" fill="currentColor" size={20} />
            <div>
              <p className="text-xs text-muted-foreground">Trusted by</p>
              <p className="text-sm font-semibold">10,000+ Hearts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
