import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MusicSection } from "@/components/MusicSection";
import { AuthModal } from "@/components/AuthModal";
import { ShoppingCart, type CartItem } from "@/components/ShoppingCart";
import { Footer } from "@/components/Footer";
import { NewsletterPopup } from "@/components/NewsletterPopup";
import { Checkout } from "./Checkout";
import { OrderConfirmation } from "./OrderConfirmation";
import { useToast } from "@/hooks/use-toast";

type AppState = "home" | "checkout" | "confirmation";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("home");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orderNumber] = useState(`WLV-${Date.now().toString().slice(-6)}`);
  const { toast } = useToast();

  const handleAddToCart = (release: any) => {
    const formats = [
      { name: "Digital", price: 9.99 },
      { name: "Vinyl", price: 24.99 },
      { name: "CD", price: 14.99 },
    ];

    // Add digital format by default
    const cartItem: CartItem = {
      id: release.id,
      title: release.title,
      artist: release.artist,
      price: formats[0].price,
      image: release.image,
      quantity: 1,
      format: "Digital" as const,
    };

    const existingItemIndex = cartItems.findIndex(
      item => item.id === cartItem.id && item.format === cartItem.format
    );

    if (existingItemIndex >= 0) {
      setCartItems(prev => 
        prev.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems(prev => [...prev, cartItem]);
    }

    toast({
      title: "Added to cart",
      description: `${release.title} - ${release.artist} (Digital)`,
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        `${item.id}-${item.format}` === id
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev =>
      prev.filter(item => `${item.id}-${item.format}` !== id)
    );
  };

  const handleCheckout = () => {
    setAppState("checkout");
    setIsCartOpen(false);
  };

  const handleOrderComplete = () => {
    setAppState("confirmation");
    setCartItems([]);
  };

  const handleContinueShopping = () => {
    setAppState("home");
  };

  const handleBackToCart = () => {
    setAppState("home");
    setIsCartOpen(true);
  };

  if (appState === "checkout") {
    return (
      <Checkout
        items={cartItems}
        onBack={handleBackToCart}
        onComplete={handleOrderComplete}
      />
    );
  }

  if (appState === "confirmation") {
    return (
      <OrderConfirmation
        orderNumber={orderNumber}
        onContinueShopping={handleContinueShopping}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header
        onLoginClick={() => setIsAuthModalOpen(true)}
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <main>
        <HeroSection />
        <MusicSection onAddToCart={handleAddToCart} />
      </main>

      <Footer />

      <NewsletterPopup />

      <AuthModal
        open={isAuthModalOpen}
        onOpenChange={setIsAuthModalOpen}
      />

      <ShoppingCart
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;
