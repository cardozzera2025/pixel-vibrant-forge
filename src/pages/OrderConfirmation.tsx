import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Download, Mail, Home } from "lucide-react";

interface OrderConfirmationProps {
  orderNumber: string;
  onContinueShopping: () => void;
}

export function OrderConfirmation({ orderNumber, onContinueShopping }: OrderConfirmationProps) {
  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-xl text-muted-foreground">
              Thank you for your purchase from Welvrave
            </p>
          </div>

          {/* Order Details */}
          <Card className="bg-surface-dark border-border mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Order Number</div>
                <div className="text-lg font-mono font-bold text-primary">
                  {orderNumber}
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">Confirmation Email Sent</div>
                    <div className="text-sm text-muted-foreground">
                      Check your inbox for order details and download links
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                  <Download className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">Digital Downloads Ready</div>
                    <div className="text-sm text-muted-foreground">
                      Download links are available in your email
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  <strong>Need help?</strong> Contact our support team at{" "}
                  <a href="mailto:support@welvrave.com" className="text-primary hover:underline">
                    support@welvrave.com
                  </a>
                </p>
                <p>
                  Questions about your order? Reference order number{" "}
                  <span className="font-mono text-primary">{orderNumber}</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">What's Next?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-surface-dark border-border">
                <CardContent className="p-6 text-center">
                  <Download className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Download Your Music</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    High-quality files are ready for download
                  </p>
                  <Button variant="outline" className="w-full">
                    Download Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-surface-dark border-border">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Join Our Community</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get exclusive updates and early access to new releases
                  </p>
                  <Button variant="outline" className="w-full">
                    Follow Us
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="pt-6">
              <Button
                onClick={onContinueShopping}
                size="lg"
                className="bg-gradient-accent hover:scale-105 transition-all duration-300"
              >
                <Home className="h-5 w-5 mr-2" />
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}