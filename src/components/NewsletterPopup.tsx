import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("welvrave-newsletter-seen");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Thank you!",
      description: "You've been subscribed to our newsletter. Get ready for the latest music and exclusive content!",
    });

    localStorage.setItem("welvrave-newsletter-seen", "true");
    setIsOpen(false);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    localStorage.setItem("welvrave-newsletter-seen", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md bg-gradient-card border-border/50 text-foreground">
        <DialogHeader>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-primary/20 p-3 rounded-full">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold hero-text">
                Stay Connected
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Get the latest releases and exclusive content
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background/50 border-border/50 focus:border-primary"
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="border-border/50 text-muted-foreground hover:text-foreground"
            >
              Maybe Later
            </Button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground text-center">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </DialogContent>
    </Dialog>
  );
}