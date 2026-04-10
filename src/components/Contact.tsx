import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ctas = [
  { label: "Work with Gretchen on leadership programs", type: "leadership" },
  { label: "Book Gretchen as a speaker or MC", type: "speaking" },
  { label: "Join our community programs", type: "community" },
];

const Contact = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [state, handleSubmit] = useForm("xwvwdqqe");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-16 h-16 text-green-600" />
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground">
              Thank You!
            </h2>
            <p className="text-lg text-muted-foreground">
              Your message has been sent successfully. I'll get back to you soon!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4 leading-tight">
            Let's Build the Future of Tech Leadership Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Empower your technical teams to reach new heights with leadership that inspires, includes, and drives innovation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-muted/30 rounded-lg p-8 border border-border">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3 text-foreground">
              What are you interested in?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ctas.map((cta) => (
                <button
                  key={cta.type}
                  type="button"
                  onClick={() => setSelectedType(cta.type)}
                  className={`p-3 text-sm font-medium rounded-sm transition-all border ${
                    selectedType === cta.type
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-foreground hover:border-foreground bg-background"
                  }`}
                >
                  {cta.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-foreground">
              Your Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-foreground">
              Message
            </label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your leadership challenge..."
              rows={5}
              cl  name="inquiry_type"
                  value={cta.type}
                >
                  {cta.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
            />
            <ValidationError field="email" errors={state.errors} />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell me about your leadership challenge..."
              rows={5}
              className="w-full px-4 py-2 rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
            />
            <ValidationError field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-sm bg-foreground text-background hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {state.submitting ? "Sending..." : "Send Message"}
            {!state.submitt