import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Play, ShoppingCart, User } from "lucide-react";
import welvraveLogo from "@/assets/welvrave-logo.png";

interface HeaderProps {
  onLoginClick: () => void;
  onCartClick: () => void;
  cartItemCount?: number;
}

export function Header({ onLoginClick, onCartClick, cartItemCount = 0 }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "MUSIC", href: "#music" },
    { name: "ARTISTS", href: "/artists" },
    { name: "SHOP", href: "#shop" },
    { name: "RADIO", href: "#radio" },
    { name: "PLAYLIST", href: "#playlist" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={welvraveLogo} alt="WELVRAVE" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartClick}
              className="relative hover:bg-primary/10"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center animate-glow-pulse">
                  {cartItemCount}
                </span>
              )}
            </Button>

            {/* Login */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onLoginClick}
              className="hidden sm:flex hover:bg-primary/10"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-6 border-t border-border">
                    <Button
                      variant="outline"
                      onClick={() => {
                        onLoginClick();
                        setIsMenuOpen(false);
                      }}
                      className="w-full"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}