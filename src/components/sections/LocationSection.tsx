import { useEffect, useState } from "react";
import { MapPin, Navigation } from "lucide-react";

const areas = [
  { name: "Indiranagar, Bangalore", lat: 12.9716, lng: 77.6412 },
  { name: "Koramangala, Bangalore", lat: 12.9352, lng: 77.6245 },
  { name: "MG Road, Bangalore", lat: 12.9756, lng: 77.6050 },
  { name: "Jayanagar, Bangalore", lat: 12.9250, lng: 77.5938 },
  { name: "Whitefield, Bangalore", lat: 12.9698, lng: 77.7500 },
  { name: "HSR Layout, Bangalore", lat: 12.9116, lng: 77.6370 },
  { name: "Brigade Road, Bangalore", lat: 12.9719, lng: 77.6068 },
];

const LocationSection = () => {
  const [loc, setLoc] = useState(areas[0]);

  useEffect(() => {
    setLoc(areas[Math.floor(Math.random() * areas.length)]);
    const t = setInterval(() => {
      setLoc(areas[Math.floor(Math.random() * areas.length)]);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="location" className="py-24 bg-[image:var(--gradient-soft)]">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-script text-primary text-3xl mb-2">find us</p>
          <h2 className="text-4xl md:text-5xl mb-4">Where love lives</h2>
          <p className="text-muted-foreground">Delivering smiles across Bangalore, India.</p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[var(--shadow-rose)] border border-border bg-white">
          <div className="p-6 flex items-center justify-between bg-blush">
            <div className="flex items-center gap-3">
              <div className="relative">
                <MapPin className="text-primary-deep" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose rounded-full animate-ping" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose rounded-full" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Live location</p>
                <p key={loc.name} className="font-semibold text-primary-deep animate-fade-up">{loc.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Navigation size={14} />
              {loc.lat.toFixed(4)}°N, {loc.lng.toFixed(4)}°E
            </div>
          </div>
          <iframe
            key={loc.name}
            title="Queen's Gifts location"
            src={`https://www.google.com/maps?q=${loc.lat},${loc.lng}&z=14&output=embed`}
            className="w-full h-[360px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
