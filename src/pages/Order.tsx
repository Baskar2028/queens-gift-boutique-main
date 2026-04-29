import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, CheckCircle2 } from "lucide-react";
import { findProduct } from "@/data/products";

type Payment = "gpay" | "upi" | "cod";

const Order = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = id ? findProduct(id) : undefined;
  const [payment, setPayment] = useState<Payment>("cod");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-muted-foreground">Product not found.</p>
        <Link to="/" className="text-primary underline">Go back home</Link>
      </div>
    );
  }

  const handleOrder = () => {
    if (payment === "cod") {
      alert("Order placed successfully!");
      navigate("/");
    } else {
      window.location.href = "https://divyeshpatro.github.io/cc-upi-generator/";
    }
  };

  const options: { id: Payment; label: string; desc: string }[] = [
    { id: "gpay", label: "GPay", desc: "Pay instantly via Google Pay" },
    { id: "upi", label: "UPI ID", desc: "Pay using any UPI app" },
    { id: "cod", label: "Cash on Delivery", desc: "Pay when your gift arrives" },
  ];

  return (
    <div className="min-h-screen bg-[image:var(--gradient-soft)]">
      <header className="container py-6 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-deep hover:text-primary transition-colors">
          <ArrowLeft size={18} /> Back to shop
        </Link>
        <div className="flex items-center gap-2">
          <Heart className="text-rose" fill="currentColor" size={18} />
          <span className="font-script text-2xl text-primary-deep">Queen's Gifts</span>
        </div>
      </header>

      <main className="container pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white rounded-3xl p-6 md:p-10 shadow-[var(--shadow-card)] border border-border animate-fade-up">
          <div className="rounded-2xl overflow-hidden bg-blush">
            <img
              src={product.image}
              alt={product.name}
              width={768}
              height={768}
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          <div className="flex flex-col">
            <p className="font-script text-primary text-2xl">complete your order</p>
            <h1 className="text-4xl md:text-5xl mb-3">{product.name}</h1>
            <p className="text-muted-foreground italic mb-4">{product.description}</p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-semibold text-primary-deep">Rs.{product.price}</span>
              <span className="px-3 py-1 rounded-full bg-blush text-xs text-primary-deep">{product.color}</span>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-2xl mb-4">Choose payment</h2>
              <div className="space-y-3">
                {options.map((o) => {
                  const active = payment === o.id;
                  return (
                    <label
                      key={o.id}
                      className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                        active
                          ? "border-primary bg-blush shadow-[var(--shadow-soft)]"
                          : "border-border hover:border-primary/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={o.id}
                        checked={active}
                        onChange={() => setPayment(o.id)}
                        className="sr-only"
                      />
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          active ? "border-primary" : "border-muted-foreground/40"
                        }`}
                      >
                        {active && <span className="w-2.5 h-2.5 rounded-full bg-primary" />}
                      </span>
                      <div className="flex-1">
                        <p className="font-medium">{o.label}</p>
                        <p className="text-xs text-muted-foreground">{o.desc}</p>
                      </div>
                      {active && <CheckCircle2 className="text-primary" size={20} />}
                    </label>
                  );
                })}
              </div>

              <button
                onClick={handleOrder}
                className="mt-7 w-full py-4 rounded-full bg-[image:var(--gradient-pink)] text-white font-medium shadow-[var(--shadow-rose)] hover:scale-[1.02] transition-transform"
              >
                Order Now
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Wrapped with love, delivered with peace 💕
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Order;
