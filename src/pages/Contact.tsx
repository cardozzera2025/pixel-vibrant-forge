import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Music } from "lucide-react";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";
import { ShoppingCart, type CartItem } from "@/components/ShoppingCart";
import { useToast } from "@/hooks/use-toast";
import welvraveLogoWhite from "@/assets/welvrave-logo.png";

export function Contact() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onLoginClick={() => setIsAuthModalOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <main className="pt-20">
        {/* Contact Section */}
        <section className="py-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side - Large Logo */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <div className="mb-8">
                  <h1 className="text-8xl md:text-9xl font-black mb-4 tracking-tighter">
                    <span className="hero-text block">WELVRAVE</span>
                    <span className="hero-text block text-6xl md:text-7xl">RECORDS</span>
                  </h1>
                  <div className="flex justify-center lg:justify-start">
                    <img 
                      src={welvraveLogoWhite} 
                      alt="Welvrave Records" 
                      className="h-16 md:h-20 opacity-80"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="order-1 lg:order-2">
                <Card className="bg-gradient-card border-border/50 p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold mb-4 hero-text">CONTACT US</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2 text-muted-foreground">EMAIL US</h3>
                      <a 
                        href="mailto:info@welvrave.com" 
                        className="text-xl text-primary hover:text-primary/80 transition-colors"
                      >
                        info@welvrave.com
                      </a>
                    </div>

                    {/* Demo Submit Section */}
                    <div className="mb-8 p-6 bg-background/50 rounded-lg border border-border/50">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="bg-primary/20 p-3 rounded-full">
                          <Music className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">Want to send us your tunes?</h3>
                        </div>
                      </div>
                      <Button 
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8"
                      >
                        DEMO SUBMIT
                      </Button>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-background/50 border-border/50 focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
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