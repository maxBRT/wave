const features = [
  {
    num: "01",
    title: "Dead Simple",
    desc: "Add a subscription. See what you owe. That\u2019s the whole app.",
  },
  {
    num: "02",
    title: "One Dashboard",
    desc: "Every recurring charge on one screen.",
  },
  {
    num: "03",
    title: "Stay Ahead",
    desc: "Know before you\u2019re charged. Cancel what you don\u2019t use.",
  },
  {
    num: "04",
    title: "Your Data",
    desc: "No bank connections. No permissions.",
  },
];

export function LandingFeatures() {
  return (
    <section id="features" className="px-6 mt-10 pt-10 pb-20 scale-125">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-2xl font-black uppercase tracking-tight">
          What it does
        </h2>

        <div className="mt-10">
          {features.map((f) => (
            <div
              key={f.num}
              className="flex gap-5 border-b border-dashed border-rule py-6 first:pt-0"
            >
              <span className="font-mono text-3xl font-bold text-accent/80">
                {f.num}
              </span>
              <div>
                <h3 className="font-display text-base font-bold uppercase tracking-wide">
                  {f.title}
                </h3>
                <p className="mt-1 font-mono text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
