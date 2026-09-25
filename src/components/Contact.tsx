import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { sanitizeInput, validateEmail, validateMessage } from "@/lib/utils";

const ctas = [
  { label: "Break Glass crisis simulation", type: "crisis" },
  { label: "Work with Gretchen on leadership programs", type: "leadership" },
  { label: "Book Gretchen as a speaker or MC", type: "speaking" },
  { label: "Join our community programs", type: "community" },
];

const Contact = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<{email?: string; message?: string; type?: string}>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const errors: {email?: string; message?: string; type?: string} = {};

    if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!validateMessage(message)) {
      errors.message = "Please write a message of at least 10 characters.";
    }

    if (!selectedType) {
      errors.type = "Please choose what you're interested in.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("email", sanitizeInput(email));
    formData.append("message", sanitizeInput(message));
    formData.append("inquiry_type", selectedType ?? "");

    try {
      const response = await fetch("https://formspree.io/f/xwvwdqqe", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        window.location.href = "https://www.gretchenscott.com.au/";
        return;
      }

      const data = await response.json().catch(() => ({}));
      setSubmitError(data.error || "Submission failed. Please try again.");
    } catch (error) {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-4 leading-tight">
            Let's talk
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you want to run a Break Glass simulation, develop your technical leaders, or book a speaker or MC, get in touch.
          </p>
        </div>

        <form
          onSubmit={handleFormSubmit}
          className="bg-muted/30 rounded-lg p-8 border border-border"
        >
          <input type="hidden" name="inquiry_type" value={selectedType ?? ""} />
          <div className="mb-6">
            <label className="block text-sm font-medium mb-3 text-foreground">
              What are you interested in?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            {validationErrors.type && (
              <p className="text-red-500 text-sm mt-2">{validationErrors.type}</p>
            )}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
              maxLength={254}
            />
            {validationErrors.email && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell Gretchen a bit about what you have in mind: your organisation, the event or program, and any dates."
              className="w-full px-4 py-2 rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground resize-y"
              maxLength={5000}
            />
            {validationErrors.message && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.message}</p>
            )}
          </div>

          {submitError && (
            <p className="text-red-500 text-sm mb-4">{submitError}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-sm bg-foreground text-background hover:opacity-90 transition-all disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending…" : "Send Message"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;