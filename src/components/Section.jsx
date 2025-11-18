
export default function Section({ title, id, children, subtitle }) {
  return (
    <section id={id} className="container-p py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        {subtitle && <p className="text-white/70 mt-2">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}
