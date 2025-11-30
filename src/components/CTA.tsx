import { Button } from "@/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-light to-navy p-8 md:p-16 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform
              <span className="block text-gradient-coral">Urban Mobility?</span>
            </h2>
            
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Join us on our mission to revolutionize transportation in Egypt. 
              Whether you're an investor, partner, or potential user, we'd love to connect with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
