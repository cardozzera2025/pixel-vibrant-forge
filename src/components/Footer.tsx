import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Youtube, Facebook, Mail, MapPin, Phone } from "lucide-react";
import welvraveLogo from "@/assets/welvrave-logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/welvrave" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/welvrave" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/welvrave" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/welvrave" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Artists", href: "#artists" },
    { name: "Submit Demo", href: "#demo" },
    { name: "Press Kit", href: "#press" },
    { name: "Careers", href: "#careers" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#help" },
    { name: "Contact Support", href: "#support" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ];

  return (
    <footer className="bg-surface-darker border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <img src={welvraveLogo} alt="WELVRAVE" className="h-8 w-auto mb-6" />
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Welvrave is an independent electronic music label pushing the boundaries of 
              sound and creativity. We discover, develop, and promote innovative artists 
              from around the globe.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Stay Connected</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get the latest releases and news delivered to your inbox.
            </p>
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-background border-border"
              />
              <Button size="icon" className="bg-primary hover:bg-primary/90 shrink-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Los Angeles, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>hello@welvrave.com</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            <p>© {currentYear} Welvrave Music Label. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-xs">Made with ❤️ for music lovers</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs">All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Consent (Optional) */}
      <div className="bg-surface-dark border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
            <p className="text-muted-foreground mb-2 sm:mb-0">
              By using this website, you agree to our use of cookies.{" "}
              <a href="#cookies" className="text-primary hover:underline">
                Learn more
              </a>
            </p>
            <Button variant="outline" size="sm" className="border-primary text-primary">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}