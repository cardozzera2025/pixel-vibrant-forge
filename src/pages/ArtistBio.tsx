import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Share2, Mail, Globe, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";
import { ShoppingCart, type CartItem } from "@/components/ShoppingCart";

const artistsData = {
  "blastoyz": {
    name: "Blastoyz",
    realName: "Kobi Nigreker",
    coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=600&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=100&fit=crop",
    bio: `Kobi Nigreker, known professionally as Blastoyz, is an Israeli electronic music DJ and producer who was ranked two consecutive years on DJ Mag's Top 100 DJs list.

Blastoyz is one of the leading artists to combine Psytrance with multiple genres and breakthrough in to the biggest festivals of the electronic dance music in the world including Tomorrowland, EDC Vegas, Ultra, A State of Trance, Creamfields, Sziget just to name a few, along with gaining support from industry leaders in numerous sets and on top rated radio shows by Armin Van Buuren, Nervo, R3hab, Timmy Trumpet, Hardwell W&W and many more.

His unique sound and ability to blend different electronic music genres has made him one of the most sought-after artists in the industry, performing at the world's biggest festivals and collaborating with major labels and artists.`,
    contact: {
      bookings: {
        asia: "DAVID.GORDON@UNITEDTALENT.COM",
        management: "MGMT@BLASTOYZ.COM",
        general: "BOOKING@WELVRAVE.COM"
      }
    },
    socials: {
      instagram: "https://instagram.com/blastoyz",
      facebook: "https://facebook.com/blastoyz",
      website: "https://blastoyz.com"
    }
  },
  // Add other artists data here...
};

interface ArtistBioProps {
  artistId: string;
  onBack: () => void;
}

export function ArtistBio({ artistId, onBack }: ArtistBioProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems] = useState<CartItem[]>([]);
  
  const artist = artistsData[artistId as keyof typeof artistsData];
  
  if (!artist) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artist Not Found</h1>
          <Button onClick={onBack}>Back to Artists</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        onLoginClick={() => setIsAuthModalOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-surface-dark py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Button variant="ghost" size="sm" onClick={onBack} className="text-muted-foreground hover:text-foreground">
                  HOME
                </Button>
                <span>/</span>
                <Button variant="ghost" size="sm" onClick={onBack} className="text-muted-foreground hover:text-foreground">
                  ARTISTS
                </Button>
                <span>/</span>
                <span className="text-foreground font-semibold">{artist.name.toUpperCase()}</span>
              </div>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Share2 className="h-4 w-4 mr-2" />
                SHARE ON
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={artist.coverImage}
            alt={`${artist.name} cover`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          
          {/* Artist Profile */}
          <div className="absolute bottom-8 right-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20">
              <img
                src={artist.profileImage}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Artist Name */}
          <div className="absolute bottom-8 left-8">
            <h1 className="text-6xl md:text-8xl font-black text-white hero-text mb-4">
              {artist.name}
            </h1>
            {artist.logo && (
              <img
                src={artist.logo}
                alt={`${artist.name} logo`}
                className="h-12 opacity-80"
              />
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-gradient-to-b from-background to-surface-dark">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Bio */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-6 hero-text">BIO</h2>
                  <div className="prose prose-invert max-w-none">
                    {artist.bio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact & Booking */}
              <div className="lg:col-span-1">
                <Card className="bg-gradient-card border-border/50 p-6">
                  <h3 className="text-2xl font-bold mb-6 hero-text">CONTACT & BOOKING</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2">BOOKINGS IN ASIA, AUSTRALIA, NORTH & SOUTH AMERICA EX. BRAZIL & ARGENTINA</h4>
                      <a href={`mailto:${artist.contact.bookings.asia}`} className="text-primary hover:text-primary/80 text-sm">
                        {artist.contact.bookings.asia}
                      </a>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-2">MANAGEMENT</h4>
                      <a href={`mailto:${artist.contact.bookings.management}`} className="text-primary hover:text-primary/80 text-sm">
                        {artist.contact.bookings.management}
                      </a>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg mb-2">BOOKING</h4>
                      <a href={`mailto:${artist.contact.bookings.general}`} className="text-primary hover:text-primary/80 text-sm">
                        {artist.contact.bookings.general}
                      </a>
                    </div>

                    {/* Social Links */}
                    <div className="pt-4 border-t border-border/50">
                      <h4 className="font-bold text-lg mb-4">FOLLOW</h4>
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" className="border-border/50">
                          <Instagram className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-border/50">
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-border/50">
                          <Globe className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
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