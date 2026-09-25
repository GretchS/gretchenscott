import { TrendingUp, Users, Siren, ArrowUpRight } from "lucide-react";

const focuses = [
  {
    icon: TrendingUp,
    title: "Launch into Leadership",
    href: "https://www.kaleida.team/courses/launch-into-leadership/",
    text: "A cohort‑based course for people about to step into their first leadership role, through to experienced leaders.",
  },
  {
    icon: Users,
    title: "Leading tech teams",
    href: "https://www.kaleida.team/",
    text: "Leadership habits that build inclusion, collaboration and psychological safety, so people speak up early.",
  },
  {
    icon: Siren,
    title: "Break Glass",
    href: "https://www.kaleida.team/break-glass/",
    text: "A live crisis and business continuity drill for senior technical leaders, executive teams and boards.",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Programs</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-6 leading-tight">
            Technical Leadership Training
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Through Kaleida, Gretchen works with organisations to develop leaders who can lead engineers and understand
            the systems they're responsible for. Kaleida has run leadership training for teams at Zendesk, Atlassian,
            Culture Amp, Xero, MYOB, Littlepay, Ferocia and others.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {focuses.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border rounded-sm p-8 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground transition-colors group"
            >
              <item.icon className="w-6 h-6 text-accent mb-6 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-foreground mb-2 flex items-center gap-1">
                {item.title}
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" aria-hidden="true" />
                <span className="sr-only">(opens Kaleida website in a new tab)</span>
              </p>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
