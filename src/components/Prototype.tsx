import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Prototype = () => {
  const figmaUrl = "https://www.figma.com/proto/IS5GgZmgNT7F0jTtaUWYJZ/Arabni-Screens?page-id=0%3A1&node-id=0-1453&p=f&viewport=373%2C290%2C0.23&t=JmCCopeelFOKnUEu-1&scaling=min-zoom&content-scaling=fixed";
  const embedUrl = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIS5GgZmgNT7F0jTtaUWYJZ%2FArabni-Screens%3Fpage-id%3D0%253A1%26node-id%3D0-1453%26p%3Df%26viewport%3D373%252C290%252C0.23%26t%3DJmCCopeelFOKnUEu-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed";

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Prototype
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A clickable model used to test our core user flows and gather feedback.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border shadow-xl bg-background">
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>
          
          <div className="mt-6 text-center">
            <Button asChild variant="outline" className="gap-2">
              <a href={figmaUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Open in Figma
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prototype;
