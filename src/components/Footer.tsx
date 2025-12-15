import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Arabni" className="h-10" />
          </div>
          
          {/* Partners */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/60 text-sm mb-2">
              Proudly supported by
            </p>
            <p className="text-primary-foreground/80 font-medium">
              Tatweer Misr • NilePreneurs • Central Bank of Egypt
            </p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-primary-foreground/10 my-8" />
        
        {/* Bottom */}
        <div className="text-center sm:text-left text-sm">
          <p className="text-primary-foreground/50">
            © {new Date().getFullYear()} Arabni. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
