import teddy from "@/assets/product-teddy.jpg";
import bracelet from "@/assets/product-bracelet.jpg";
import giftbox from "@/assets/product-giftbox.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  color: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "red-teddy",
    name: "Red Teddy Bear",
    price: 599,
    color: "Red",
    image: teddy,
    description: "A cuddly companion holding a tiny heart — soft hugs that say everything words cannot.",
  },
  {
    id: "couple-bracelet",
    name: "Couple Bracelet",
    price: 299,
    color: "Silver",
    image: bracelet,
    description: "Two hearts entwined in silver — a delicate symbol of bonds that never break.",
  },
  {
    id: "valentine-box",
    name: "Valentine Surprise Gift Box",
    price: 1500,
    color: "Pink & Red",
    image: giftbox,
    description: "An enchanting box of roses, chocolates and whispers — the ultimate love letter unwrapped.",
  },
];

export const findProduct = (id: string) => products.find((p) => p.id === id);
