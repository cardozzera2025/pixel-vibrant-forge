import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";
import loveMachineCover from "@/assets/love-machine-cover.jpg";
import blueprintCover from "@/assets/blueprint-legacy-cover.jpg";
import gokurakuCover from "@/assets/gokuraku-cover.jpg";
import feelsGoodCover from "@/assets/feels-so-good-cover.jpg";

interface Release {
  id: string;
  title: string;
  artist: string;
  date: string;
  image: string;
  featured?: boolean;
}

const releases: Release[] = [
  {
    id: "1",
    title: "Love Machine",
    artist: "Hippie Mafia",
    date: "11/07/2025",
    image: loveMachineCover,
    featured: true,
  },
  {
    id: "2",
    title: "Blueprint.Legacy. (Album)",
    artist: "Blastoyz",
    date: "26/06/2025",
    image: blueprintCover,
  },
  {
    id: "3",
    title: "Gokuraku",
    artist: "Spectra Sonics x PARTYMONSTER",
    date: "31/05/2025",
    image: gokurakuCover,
  },
  {
    id: "4",
    title: "Feels So Good",
    artist: "Bruce Wayne",
    date: "16/05/2025",
    image: feelsGoodCover,
  },
];

interface MusicSectionProps {
  onAddToCart: (release: Release) => void;
}

export function MusicSection({ onAddToCart }: MusicSectionProps) {
  return (
    <section id="music" className="py-20 bg-gradient-to-b from-background to-surface-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="hero-text">MUSIC</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest electronic music releases from our talented artists
          </p>
          <Button 
            variant="link" 
            className="text-primary hover:text-primary/80 mt-4 text-lg"
          >
            See all releases
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {releases.map((release, index) => (
            <Card
              key={release.id}
              className={`card-hover bg-gradient-card border-border/50 overflow-hidden ${
                release.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative group">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={release.image}
                    alt={`${release.title} - ${release.artist}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button
                      size="lg"
                      className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full w-14 h-14 p-0 glow"
                    >
                      <Play className="h-5 w-5 fill-current ml-1" />
                    </Button>
                  </div>

                  {/* Listen Now Badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Listen Now
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg mb-1 truncate group-hover:text-primary transition-colors">
                        {release.title}
                      </h3>
                      <p className="text-muted-foreground mb-2 truncate">
                        {release.artist}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {release.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Play
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onAddToCart(release)}
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}