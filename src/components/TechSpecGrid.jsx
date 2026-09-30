const TechSpaceGrid = () => {
  const specs = [
    {
      category: "Backend Engine",
      title: "FastAPI & Async python",
      details:
        "High-performance non-blocking asyn endpoint utilizing Pydantic validation schemas.",
    },
    {
      category: "Presistence Layer",
      title: "SQLALchemy 2.0 & postgreSQL",
      details:
        "Fully asynchronous database sessions with automated schema migration pipelines powered by Alembic",
    },

    {
      category: "frontend Runtime",
      title: "React & Tailwind CSS",
      details:
        "Compositor-driven UI design biult with utility-first CSS and optimized production bundle splite.",
    },
  ];
  return (
    <section
      id="architecture"
      className="py-24 px-6 max-w-7xl mx-auto border-t dark-border"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3">
          Under The Hood
        </h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Modern technology stackarchitecture
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="bg-dark-card border border-dark-border rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">
              {spec.category}
            </div>
            <h3 className="text-x1 font-bold text-white mb-4">{spec.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {spec.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TechSpaceGrid;
