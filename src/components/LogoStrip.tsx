// To show a logo instead of the name, add the file to public/logos/
// and set `logo` on that entry, e.g. logo: "/logos/zendesk.svg".
type Org = { name: string; logo?: string };

const groups: { label: string; orgs: Org[] }[] = [
  {
    label: "Leadership training with teams at",
    orgs: [
      { name: "Zendesk" },
      { name: "Atlassian" },
      { name: "Culture Amp" },
      { name: "Xero" },
      { name: "MYOB" },
      { name: "Littlepay" },
      { name: "Ferocia" },
    ],
  },
  {
    label: "Speaking, MC, panels and media",
    orgs: [
      { name: "ABC News Breakfast" },
      { name: "Monash University" },
      { name: "ADAConf" },
      { name: "AI Engineer" },
      { name: "NDC Melbourne" },
      { name: "DDD Melbourne" },
      { name: "DDD Adelaide" },
      { name: "DDD Perth" },
    ],
  },
];

const LogoStrip = () => {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground text-center mb-6">
              {group.label}
            </p>
            <ul className="flex items-center justify-center gap-x-10 gap-y-4 flex-wrap">
              {group.orgs.map((org) => (
                <li key={org.name}>
                  {org.logo ? (
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-serif text-lg sm:text-xl font-semibold text-foreground/60 whitespace-nowrap">
                      {org.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoStrip;
