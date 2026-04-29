import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-10 bg-blush">
    <div className="container text-center">
      <div className="inline-flex items-center gap-2 mb-3">
        <Heart className="text-rose" fill="currentColor" size={18} />
        <span className="font-script text-2xl text-primary-deep">Queen's Gifts</span>
        <Heart className="text-rose" fill="currentColor" size={18} />
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Queen's Gifts — Crafted with love, wrapped with peace.
      </p>
    </div>
  </footer>
);

export default Footer;
