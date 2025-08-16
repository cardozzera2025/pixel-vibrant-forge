import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import loveMachineCover from "@/assets/love-machine-cover.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full border border-primary/30">
                LATEST RELEASE
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
              <span className="hero-text block">LOVE</span>
              <span className="hero-text block">MACHINE</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-medium">
              Hippie Mafia
            </p>
            
            <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">
              11/07/2025
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:scale-105 transition-all duration-300 text-lg px-8 py-6 glow"
              >
                <Play className="h-5 w-5 mr-2 fill-current" />
                LISTEN NOW
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              >
                ADD TO CART
              </Button>
            </div>

            {/* Music Visualizer */}
            <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
              <div className="music-bars">
                <div className="music-bar"></div>
                <div className="music-bar"></div>
                <div className="music-bar"></div>
                <div className="music-bar"></div>
                <div className="music-bar"></div>
              </div>
              <span className="text-sm text-muted-foreground">Now Playing</span>
            </div>
          </div>

          {/* Right Content - Album Art */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-accent opacity-50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src={loveMachineCover}
                alt="Love Machine - Hippie Mafia"
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-2xl shadow-card group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/10 transition-all duration-500" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Button
                  size="lg"
                  className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full w-16 h-16 p-0 glow"
                >
                  <Play className="h-6 w-6 fill-current ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}