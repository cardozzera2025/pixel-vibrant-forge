import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";
import { ShoppingCart, type CartItem } from "@/components/ShoppingCart";

const artists = [
  {
    id: "blastoyz",
    name: "Blastoyz",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face",
    genre: "Psytrance",
    bio: "Israeli electronic music DJ and producer ranked on DJ Mag's Top 100 DJs list"
  },
  {
    id: "hippie-mafia",
    name: "Hippie Mafia",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face",
    genre: "Progressive House",
    bio: "Dynamic duo creating infectious electronic music"
  },
  {
    id: "spectra-sonics",
    name: "Spectra Sonics",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face",
    genre: "Tech House",
    bio: "Innovative producer pushing the boundaries of electronic music"
  },
  {
    id: "bruce-wayne",
    name: "Bruce Wayne",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    genre: "Deep House",
    bio: "Master of atmospheric deep house and melodic techno"
  },
];

interface ArtistsProps {
  onArtistSelect: (artistId: string) => void;
}

export function Artists({ onArtistSelect }: ArtistsProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems] = useState<CartItem[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <Header
        onLoginClick={() => setIsAuthModalOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-background to-surface-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                <span className="hero-text">ARTISTS</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Meet the talented artists that make Welvrave Records their home
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {artists.map((artist, index) => (
                <Card
                  key={artist.id}
                  className="card-hover bg-gradient-card border-border/50 overflow-hidden group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => onArtistSelect(artist.id)}
                >
                  <div className="relative">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* View Profile Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Button
                          size="lg"
                          className="bg-primary/90 hover:bg-primary text-primary-foreground glow"
                        >
                          View Profile
                        </Button>
                      </div>

                      {/* Genre Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          {artist.genre}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {artist.bio}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AuthModal
        open={isAuthModalOpen}
        onOpenChange={setIsAuthModalOpen}
      />

      <ShoppingCart
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        items={cartItems}
        onUpdateQuantity={() => {}}
        onRemoveItem={() => {}}
        onCheckout={() => {}}
      />
    </div>
  );
}