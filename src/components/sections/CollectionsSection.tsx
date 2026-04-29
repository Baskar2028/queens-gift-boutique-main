import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { products } from "@/data/products";

const CollectionsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="collections" className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-script text-primary text-3xl mb-2">our collections</p>
          <h2 className="text-4xl md:text-5xl mb-4">Treasures of the heart</h2>
          <p className="text-muted-foreground">
            Each piece is hand-picked to make moments melt into memories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <article
              key={p.id}
              className="group rounded-3xl bg-white border border-border overflow-hidden hover-lift shadow-[var(--shadow-card)] animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden bg-blush">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-primary-deep backdrop-blur">
                  {p.color}
                </span>
                <Heart
                  fill="currentColor"
                  className="absolute top-4 right-4 text-white/90 drop-shadow opacity-0 group-hover:opacity-100 transition-opacity"
                  size={24}
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl">{p.name}</h3>
                  <span className="text-primary-deep font-semibold">Rs.{p.price}</span>
                </div>
                <p className="text-sm text-muted-foreground italic mb-5 leading-relaxed">
                  {p.description}
                </p>
                <button
                  onClick={() => navigate(`/order/${p.id}`)}
                  className="w-full py-3 rounded-full bg-[image:var(--gradient-pink)] text-white font-medium shadow-[var(--shadow-soft)] hover:scale-[1.02] transition-transform"
                >
                  Buy Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
