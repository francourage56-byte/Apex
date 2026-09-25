const SystemMetrics = () => {
  const metrics = [
    {
      label: "Request Throughput",
      value: "2.4M+",
      sub: "Resquest per minute",
    },

    {
      label: "Average latency",
      value: "<18ms",
      sub: "Global API response time",
    },

    {
      label: "Uptime SLA",
      value: "99.99%",
      sub: "Guaranted availiability",
    },

    {
      label: "Ative Deployments",
      value: "14,000+",
      sub: "Production microservices",
    },
  ];

  console.log("Metrics Data", metrics);
  console.log("Metrics Data Array:", metrics[1]);
  console.log("Metric Data object elements", metrics[0].label);
  return (
    <section
      id="metrics"
      className="py-20 bg-dark-card-50 border-y border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((item, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-4xl sm:text-5xl font-black texttracking-tight mb-2">
                {item.value}
              </div>
              <div className="text-sm font-bold text-brand-accent mb-1">
                {item.label}
              </div>

              <div className="text-xs te4xt-gray-500">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SystemMetrics;
