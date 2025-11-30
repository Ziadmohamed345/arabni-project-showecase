import { MapPin, Zap, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Smart Routing",
    description: "Integrated multi-modal transportation routing combining bus, metro, train, and taxi options.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Live tracking and schedule updates for seamless urban navigation.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Making public transportation accessible and easy to use for everyone.",
  },
  {
    icon: TrendingUp,
    title: "Reducing Congestion",
    description: "Helping reduce the 72 hours annually wasted in traffic congestion.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            About Arabni
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Enhancing Urban Mobility
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Arabni is a Mobility-as-a-Service (MaaS) platform revolutionizing how people navigate urban transportation in Egypt. 
            Our integrated solution combines all transportation modes into one seamless experience, reducing congestion and 
            improving accessibility for millions of commuters.
          </p>
        </div>
        
        {/* Achievement Highlight */}
        <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 md:p-12 mb-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            The Achievement
          </h3>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            Arabni was selected as one of the <span className="text-primary font-semibold">Top 10 startups</span> in the 
            prestigious Tatweer Misr Innovation Competition, competing against over 500 innovative startups from across Egypt.
          </p>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
            This achievement led to our acceptance into the <span className="text-primary font-semibold">NilePreneurs Incubation Program</span>, 
            providing invaluable mentorship, resources, and networking opportunities to accelerate our mission.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
