import { Heart, Gift, Sparkles } from "lucide-react";
import aboutImg from "@/assets/about-gift.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 bg-[image:var(--gradient-soft)]">
    <div className="container grid md:grid-cols-2 gap-14 items-center">
      <div className="relative">
        <div className="absolute -inset-6 bg-blush rounded-[3rem] -rotate-3" />
        <img
          src={aboutImg}
          alt="Pink gift box with rose petals"
          loading="lazy"
          width={1024}
          height={1024}
          className="relative rounded-[2rem] shadow-[var(--shadow-rose)] w-full h-auto object-cover"
        />
      </div>
      <div>
        <p className="font-script text-primary text-3xl mb-2">our story</p>
        <h2 className="text-4xl md:text-5xl mb-6">Gifts that speak the language of love</h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          At Queen's Gifts, we believe every emotion deserves to be celebrated. Born from a
          quiet love for soft moments and meaningful memories, we craft gifts that feel like
          handwritten letters — gentle, sincere, and unforgettable.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          From the blush of first love to the warmth of forever, our curated collection is
          designed to turn ordinary days into stories your heart will cherish.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Heart, label: "Made with Love" },
            { icon: Gift, label: "Hand Curated" },
            { icon: Sparkles, label: "Premium Touch" },
          ].map((f) => (
            <div key={f.label} className="p-4 rounded-2xl bg-white border border-border hover-lift text-center">
              <f.icon className="mx-auto text-primary mb-2" size={22} />
              <p className="text-sm font-medium">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
