const logos = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/6641dbaa451ce3100f6fbcf9/07947e29-f432-42e2-bf37-d47001475272/Ferocia.jpg?format=300w",
    alt: "Ferocia",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6641dbaa451ce3100f6fbcf9/1621bfb2-5496-442b-8527-b680c67e6a26/MonashUni.png?format=300w",
    alt: "Monash University",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6641dbaa451ce3100f6fbcf9/ba59650f-03fb-404e-bfe8-66afc4d072c1/Screenshot+2024-05-13+at+7.42.05%E2%80%AFPM.png?format=300w",
    alt: "Partner organisation",
  },
];

const LogoStrip = () => {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground text-center mb-10">
          Who Gretchen Works With
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-70">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
