const Community = () => {
  return (
    <section id="community" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Community & Inclusion</p>
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-8 leading-tight">
          Women Coders &amp; Tech Leading Ladies
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg text-left">
          <p>
            Gretchen built <a href="https://womencoders.com.au/" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-accent">Women Coders</a>,
            a community that helps women and allies do well in their tech careers. She has led the community since 2018, when
            it was Women Who Code Melbourne. When the global Women Who Code organisation shut down, she and the team rebuilt it
            as Women Coders. She is also involved with Tech Leading Ladies.
          </p>
          <p>
            Running these communities shapes how she trains and speaks. Inclusion has to be designed into how teams work
            from the start, not added later.
          </p>
          <p className="text-accent font-medium">
            Through these communities, Gretchen has supported hundreds of women and non‑binary people in tech to grow their skills,
            visibility and leadership.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
