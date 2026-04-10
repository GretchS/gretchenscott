import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { sanitizeInput, validateEmail, validateMessage } from "@/lib/utils";

const ctas = [
  { label: "Work with Gretchen on leadership programs", type: "leadership" },
  { label: "Book Gretchen as a speaker or MC", type: "speaking" },
  { label: "Join our community programs", type: "community" },
];

const Contact = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<{email?: string; message?: string}>({});
  const [state, handleSubmit] = useForm("xwvwdqqe");

  const validateForm = (): boolean => {
    const errors: {email?: string; message?: string} = {};

    if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!validateMessage(message)) {
      errors.message = "Please enter a message between 10-5000 characters with valid content";
    }

    if (!selectedType) {
      errors.message = errors.message || "Please select what you're interested in";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Sanitize inputs before submission
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // Update form data with sanitized values
    const formData = new FormData();
    formData.set("email", sanitizedEmail);
    formData.set("message", sanitizedMessage);
    formData.set("inquiry_type", selectedType || "");

    // Create a synthetic event with sanitized data
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        email: { value: sanitizedEmail },
        message: { value: sanitizedMessage },
        inquiry_type: { value: selectedType }
      }
    } as any;

    await handleSubmit(syntheticEvent);
  };

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

        <form onSubmit={handleFormSubmit} className="bg-muted/30 rounded-lg p-8 border border-border">
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
            {validationErrors.message && !email && !message && (
              <p className="text-red-500 text-sm mt-2">{validationErrors.message}</p>
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
            <ValidationError field="email" errors={state.errors} />
            {validationErrors.email && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your leadership challenge..."
              rows={5}
              maxLength={5000}
              className="w-full px-4 py-2 rounded-sm border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
            />
            <ValidationError field="message" errors={state.errors} />
            {validationErrors.message && email && message && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-sm bg-foreground text-background hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {state.submitting ? "Sending..." : "Send Message"}
            {!state.submitting && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;