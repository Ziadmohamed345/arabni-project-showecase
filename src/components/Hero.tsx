import { Button } from "@/components/ui/button";
import { ChevronDown, Award, Trophy } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="opacity-0 animate-fade-up mb-8">
          <img 
            src={logo} 
            alt="Arabni Logo" 
            className="h-16 sm:h-20 mx-auto"
          />
        </div>
        
        {/* Badge */}
        <div className="opacity-0 animate-fade-up animate-delay-100 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary/30">
            <Trophy className="w-4 h-4 text-primary" />
            Top 10 Finalist
          </span>
        </div>
        
        {/* Headline */}
        <h1 className="opacity-0 animate-fade-up animate-delay-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Arabni Startup
          <span className="block text-gradient-coral">Top 10 in Tatweer Misr</span>
        </h1>
        
        {/* Subheadline */}
        <p className="opacity-0 animate-fade-up animate-delay-300 text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Proudly selected for the <span className="text-primary font-semibold">NilePreneurs Incubation Program</span>, 
          revolutionizing urban mobility across Egypt
        </p>
        
        {/* Achievement Stats */}
        <div className="opacity-0 animate-fade-up animate-delay-400 flex flex-wrap justify-center gap-8 mb-10">
          <div className="flex items-center gap-3 text-primary-foreground/90">
            <Award className="w-6 h-6 text-primary" />
            <span className="text-sm sm:text-base font-medium">Top 10 of 500+ Startups</span>
          </div>
          <div className="flex items-center gap-3 text-primary-foreground/90">
            <Award className="w-6 h-6 text-primary" />
            <span className="text-sm sm:text-base font-medium">NilePreneurs Incubated</span>
          </div>
        </div>
        
        {/* CTAs */}
        <div className="opacity-0 animate-fade-up animate-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToAbout}
          >
            Learn More
          </Button>
          <Button 
            variant="hero-outline" 
            size="xl"
            onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Gallery
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-pulse-soft"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
