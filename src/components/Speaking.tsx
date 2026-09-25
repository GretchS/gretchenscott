import { Mic, BookOpen, Users } from "lucide-react";

const offerings = [
  {
    icon: Users,
    title: "Conference MC",
    desc: "Whole conferences, from the opening welcome to the final wrap‑up, multi‑track days included. She keeps the program on time, the speakers looked after and the room with her.",
  },
  {
    icon: Mic,
    title: "Panel moderation",
    desc: "Panels that turn into real conversations. She does the research, draws out the quieter panellists and asks the follow‑up question the audience is thinking.",
  },
  {
    icon: BookOpen,
    title: "Keynotes & workshops",
    desc: "Leading through a crisis, technical leadership, building communities and running inclusive events.",
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
              Speaker, MC &amp; Panel Moderator
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Gretchen has been running events since 2002, first as an event manager and now on stage.
              She was MC for the whole of ADAConf 2025 (the Analysis, Design &amp; Architecture Conference), and has spoken
              and moderated panels at AI Engineer, NDC Melbourne, DDD Melbourne, DDD Adelaide and DDD Perth, and at Monash University.
              On national TV, she has explained the RAMageddon memory chip shortage on ABC News Breakfast.
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
              After ADAConf 2025, an attendee told the organisers that Gretchen was the best MC they'd seen, apart from the ones on TV who are paid and have their scripts written for them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaking;
