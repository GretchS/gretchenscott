const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Gretchen Scott. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/gretchenscott/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="https://www.gretchenscott.com.au/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            Current Site
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
