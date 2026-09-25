import { Map as MapIcon, SearchCheck, ListChecks, Scale } from "lucide-react";

const scenarios = [
  "AI service failure",
  "Supplier outage",
  "Data breach",
  "Executive fraud",
  "Rogue customer‑facing AI",
];

const steps = [
  { n: "01", title: "Design", desc: "We tailor the scenario, stakes and roles to your risk surface." },
  { n: "02", title: "Simulate", desc: "Your leadership team responds as the situation develops and new information arrives." },
  { n: "03", title: "Debrief", desc: "A just culture review of what held, what broke and what needs to change before the real incident." },
];

const takeaways = [
  {
    icon: MapIcon,
    title: "An escalation map",
    desc: "Showing where your response held and where it broke.",
  },
  {
    icon: SearchCheck,
    title: "Gaps you can see",
    desc: "Decision‑making, communication and process gaps, found in a simulation rather than on the day.",
  },
  {
    icon: ListChecks,
    title: "Three actions to take",
    desc: "Every simulation ends with three priority actions from the just culture review, each with an owner and a date, plus a written report.",
  },
  {
    icon: Scale,
    title: "Evidence, not blame",
    desc: "The focus is on how the team and the system performed, not on individual fault.",
  },
];

const Crisis = () => {
  return (
    <section id="crisis" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">Break Glass</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-8 leading-tight">
            A tabletop exercise tests the plan. Break Glass tests the room.
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg mb-12">
            <p>
              Plans are calm. Incidents are not. Most crises aren't purely technical or purely human. A system goes down,
              and then a rushed decision, a missed message or a key person who can't be reached makes it worse.
              Few leadership teams have tested their plan with the facts incomplete, the clock running and customers watching.
            </p>
            <p>
              Break Glass is Kaleida's executive crisis and business continuity drill for senior technical leaders, executive teams
              and boards. It runs in‑house over a half or full day, with a scenario tailored to your organisation and live facilitation.
              The pressure is deliberate. Decisions have consequences, and the technical hiccup and the people problem land at the same time,
              just like the real thing.
            </p>
            <p>
              It's for any organisation where a technology, AI, cyber or supplier incident could quickly become a customer,
              regulatory or reputational crisis, not just tech companies.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="font-medium text-foreground mb-4">How it works</p>
            <ol className="space-y-5">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="font-serif text-accent font-semibold">{s.n}</span>
                  <div>
                    <p className="font-medium text-foreground">{s.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="font-medium text-foreground mt-10 mb-3">Example scenarios</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {scenarios.join(" · ")}, or one built around what worries your leaders most.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-medium text-foreground mb-4">What you take away</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {takeaways.map((item, i) => (
                <div key={i} className="border border-border rounded-sm p-6 hover:border-accent transition-colors group">
                  <item.icon className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-medium text-foreground mb-2">{item.title}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-3xl space-y-6 mb-12">
          <p className="text-muted-foreground leading-relaxed border-l-2 border-accent pl-4">
            Break Glass is built by people who have led technical organisations through real change, not people who only facilitate
            generic crisis exercises. Gretchen has also run events where things go wrong live and in front of people. Before tech,
            she led the team that ran NZ National Fieldays, the largest agricultural trade show in the Southern Hemisphere, with more
            than 1,000 exhibitors, 120,000 visitors, and health and safety on her desk.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you're APRA‑regulated, Prudential Standard CPS 230 requires annual business continuity exercises across
            critical operations, using severe but plausible scenarios. Break Glass is built on that kind of scenario.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Start with a free 45‑minute scoping conversation to map your risk surface and confirm who needs to be in the room.
            Break Glass runs as a one‑off simulation, or as a standing readiness program with quarterly simulations and scenarios
            that escalate over time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-foreground text-background text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
          >
            Book a scoping conversation
          </a>
          <a
            href="https://www.kaleida.team/break-glass/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-accent"
          >
            More about Break Glass at Kaleida
          </a>
        </div>
      </div>
    </section>
  );
};

export default Crisis;
