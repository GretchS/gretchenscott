import { ArrowRight } from "lucide-react";

const ctas = [
  { label: "Work with Gretchen on leadership programs", href: "mailto:hello@gretchenscott.com.au?subject=Leadership%20Programs" },
  { label: "Book Gretchen as a speaker or MC", href: "mailto:hello@gretchenscott.com.au?subject=Speaking%20Enquiry" },
  { label: "Join our community programs", href: "mailto:hello@gretchenscott.com.au?subject=Community%20Programs" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4 leading-tight">
          Let's Build the Future of Tech Leadership Together
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Empower your technical teams to reach new heights with leadership that inspires, includes, and drives innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {ctas.map((cta, i) => (
            <a
              key={i}
              href={cta.href}
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm transition-all ${
                i === 0
                  ? "bg-foreground text-background hover:opacity-90"
                  : "border border-border text-foreground hover:border-foreground"
              }`}
            >
              {cta.label}
              <ArrowRight className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
