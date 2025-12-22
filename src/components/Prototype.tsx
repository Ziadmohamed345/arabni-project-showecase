import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Prototype = () => {
  const figmaUrl =
    "https://www.figma.com/proto/IS5GgZmgNT7F0jTtaUWYJZ/Arabni-Screens?node-id=0-1379&t=DD9uQZv9wQb9iY4V-1";
  const embedUrl =
    "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIS5GgZmgNT7F0jTtaUWYJZ%2FArabni-Screens%3Fnode-id%3D0-1379%26t%3DDD9uQZv9wQb9iY4V-1";

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Prototype
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A clickable model used to test our core user flows and gather
            feedback.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative aspect-[7.5/16] rounded-2xl overflow-hidden border border-border shadow-xl bg-background">
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
