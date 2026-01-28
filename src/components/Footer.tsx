const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl font-bold text-foreground">
            Firstrule<span className="text-gradient">.fx</span>
          </p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground font-body">
            <span>Terms & Support</span>
            <span>Privacy Policy</span>
          </div>
          
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} FirstRule.FX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
