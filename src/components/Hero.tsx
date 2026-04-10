const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1] tracking-tight">
              Elevate Technical Leadership for the Modern Era
            </h1>
            <p className="text-lg font-serif italic text-accent">
              Technical Leadership Strategist, Speaker &amp; MC
            </p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            In today's fast‑paced tech world, effective leadership is the engine of innovation and team performance.
            Gretchen helps engineers and tech teams become influential leaders through strategy, coaching, and high‑impact speaking.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
            >
              Book Gretchen to speak or MC
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-foreground text-foreground text-sm font-medium rounded-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Discuss technical leadership programs
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6641dbaa451ce3100f6fbcf9/c1368e6b-570c-45c3-a0ac-4e9228e99609/GScottProfile.jpg"
              alt="Gretchen Scott - Technical Leadership Strategist"
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
