const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1] tracking-tight">
              Leaders who are ready for the bad day
            </h1>
            <p className="text-lg font-serif italic text-accent">
              Technical Leadership Trainer, Speaker &amp; MC · CEO of Kaleida
            </p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Every organisation has a bad day eventually. Sometimes it's technical: an outage, a breach, or a release that takes everything down.
            Sometimes it isn't: a safety incident, a supplier that fails, or a story in the press.
            Gretchen runs Break Glass, Kaleida's live crisis simulation, so leadership teams practise that day before it happens.
            She also trains the everyday technical leadership that stops small problems from becoming big ones.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              Book a Break Glass simulation
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-foreground text-foreground text-sm font-medium rounded-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Book Gretchen to speak or MC
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6641dbaa451ce3100f6fbcf9/c1368e6b-570c-45c3-a0ac-4e9228e99609/GScottProfile.jpg"
              alt="Gretchen Scott, technical leadership trainer and CEO of Kaleida"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-accent rounded-sm" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
