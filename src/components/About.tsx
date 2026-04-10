const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">About Gretchen</p>
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-8 leading-tight">
          Bridging Technical Expertise &amp; People‑Centred Leadership
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            Gretchen Scott is a technical leadership strategist and speaker who helps engineering leaders and teams bridge the gap between technical expertise and effective, people‑centred leadership.
          </p>
          <p>
            Drawing on her experience building and scaling leadership capability at Kaleida and leading community initiatives like Tech Leading Ladies and Women Coders, Gretchen equips leaders with practical tools to lead through change, influence without authority, and create inclusive environments where diverse teams thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
