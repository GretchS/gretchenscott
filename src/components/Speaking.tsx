import { Mic, BookOpen, Users } from "lucide-react";

const offerings = [
  {
    icon: Mic,
    title: "Keynotes",
    desc: "Technical leadership, influence without authority, and inclusive leadership in tech.",
  },
  {
    icon: BookOpen,
    title: "Workshops",
    desc: "Workshop‑style sessions for engineering leaders and high‑potential individual contributors.",
  },
  {
    icon: Users,
    title: "MC & Moderation",
    desc: "MC and moderation services for multi‑track tech conferences and panels.",
  },
];

const Speaking = () => {
  return (
    <section id="speaking" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[3/2] overflow-hidden rounded-sm">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6641dbaa451ce3100f6fbcf9/a81c29de-1351-491b-8e6f-5a8b57c01334/53643763156_063dfce04c_o.jpeg"
              alt="Gretchen Scott speaking at a technology conference"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Events</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-6 leading-tight">
              Public Speaking &amp; Conference MC
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Gretchen is a sought‑after keynote speaker and conference MC across the Australian tech ecosystem.
              She regularly speaks and moderates at major technology events, including DDD Melbourne, DDD Adelaide, ADAConf,
              and other community‑driven conferences.
            </p>
            <div className="space-y-6">
              {offerings.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <item.icon className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground italic border-l-2 border-accent pl-4">
              If you're looking for a speaker or MC who understands both the technical landscape and the human side of leadership, Gretchen can help bring your event to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaking;
