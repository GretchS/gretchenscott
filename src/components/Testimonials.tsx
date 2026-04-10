const testimonials = [
  {
    tag: "University & education leadership",
    quote:
      "It was great to have Gretchen as a guest speaker at our 'New Venture Creation' Bachelor of Business Course. The audience was very appreciative of the informative content and were inspired by Gretchen's engaging and dynamic speaking style.",
    author: "Deepak Sardana",
    role: "Associate Professor, RMIT University",
  },
  {
    tag: "Executive women forum",
    quote:
      "Gretchen is an influential, energetic and engaging technology leader. She recently spoke at our Tech Executive Women Forum on the importance of diversity and inclusion in technical teams. She not only captivates her audience with her storytelling ability, she also challenges and motivates them.",
    author: "Samantha Davies & Leigh Gibson",
    role: "Founders",
  },
  {
    tag: "Tech conference panel",
    quote:
      "Gretchen brings a perspective that is informed by lived experience, data and the expertise that comes from working on addressing diversity issues for years. She understands the complexities in a way that most others only perceive superficially.",
    author: "Richard Miller",
    role: "CEO, emc.ventures",
  },
  {
    tag: "Media / podcast guest",
    quote:
      "Gretchen is a fantastic storyteller, and brings incredible insight, energy and professionalism. Her deep industry knowledge always keeps us hooked and we look forward to having her on in the future.",
    author: "Molly Paynter & Moana Hope",
    role: "Disrupt Media Limited",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground leading-tight">
            What People Are Saying
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-border bg-background rounded-sm p-8 flex flex-col">
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4">{t.tag}</span>
              <blockquote className="text-foreground leading-relaxed flex-1 mb-6 font-serif italic">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-medium text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
