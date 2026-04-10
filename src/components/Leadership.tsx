import { TrendingUp, Users, Shield } from "lucide-react";

const focuses = [
  {
    icon: TrendingUp,
    text: "Strengthening engineering leadership pipelines from individual contributor to tech lead and engineering manager.",
  },
  {
    icon: Users,
    text: "Building leadership behaviours that support inclusion, collaboration, and psychological safety.",
  },
  {
    icon: Shield,
    text: "Creating leadership frameworks that are practical for fast‑moving tech teams.",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Services</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-6 leading-tight">
            Technical Leadership &amp; Team Coaching
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            At Kaleida and beyond, Gretchen partners with organisations to design and deliver technical‑leadership capability that is scalable, measurable, and aligned with business outcomes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {focuses.map((item, i) => (
            <div key={i} className="border border-border rounded-sm p-8 hover:border-accent transition-colors group">
              <item.icon className="w-6 h-6 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <p className="text-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
