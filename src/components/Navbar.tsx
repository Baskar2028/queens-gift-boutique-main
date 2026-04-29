import { useEffect, useState } from "react";
import { Menu, X, Heart } from "lucide-react";

const sections = ["home", "about", "collections", "location", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(s);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-[var(--shadow-soft)] py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-2 group">
          <Heart fill="currentColor" className="text-rose group-hover:scale-110 transition-transform" size={22} />
          <span className="font-script text-2xl text-primary-deep">Queen's Gifts</span>
        </button>

        <ul className="hidden md:flex items-center gap-9 text-sm font-medium capitalize">
          {sections.map((s) => (
            <li key={s}>
              <button onClick={() => go(s)} className={`nav-link ${active === s ? "active text-primary" : ""}`}>
                {s}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-deep" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-3 mx-4 glass rounded-2xl p-5 animate-fade-up">
          <ul className="flex flex-col gap-4 capitalize">
            {sections.map((s) => (
              <li key={s}>
                <button onClick={() => go(s)} className={`nav-link ${active === s ? "active text-primary" : ""}`}>
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
