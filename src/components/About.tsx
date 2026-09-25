const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">About Gretchen</p>
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-8 leading-tight">
          A technical path into leadership
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            Gretchen Scott is CEO of Kaleida, which trains leaders who understand both the technology and the people.
            Kaleida's work includes Launch into Leadership, a cohort‑based leadership course, and Break Glass, a crisis and business continuity drill for leadership teams and boards.
          </p>
          <p>
            She came to leadership through tech. She trained as a web developer at Coder Academy, then taught the Diploma of IT there.
            She went on to be Head of Product and then COO at the startup Linc. At Cloudflare she built developer community programs,
            including its first Developer Challenges series. She has also coached founders through Startmate.
          </p>
          <p>
            That mix of code, product, operations and people is what she brings to the leaders she trains.
            She has written the code, shipped the product and been in the room when things broke.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
