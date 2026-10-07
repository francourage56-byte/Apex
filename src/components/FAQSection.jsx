const FAQSection = () => {
  const faqs = [
    {
      q: "Can I deploy Apex Engine on custom cloud servers?",
      a: "Yes Apex engine provides docker container specs and helm charts for instant develoyment across AWSC GCP Azure or bare metal servers",
    },

    {
      q: " how does it handle asynchronous data concurrency?",
      a: " by leveraging async driver engine s (such as sycng and SQLAlchemy 2.0 AsyncSession), database connecetions are pooled without blocking the main event loop,",
    },
    {
      q: "Is there built-in support for frontent CORS and authentication? ",
      a: "Yes CORS  middleware , JWT decoding, and OAuth2 security dependences are included in standaerd router  configuration. ",
    },
    {
      q: "What is the typical deployment time for a new project?",
      a: "Using our pre-configured vite and FastAPI template, new micoservices can be spun up and deploy in under 10 minutes",
    },
  ];
  return (
    <section
      id="faq"
      className="py-24 px-6 bg-[#0d1322] border-t border-gray-800 "
    >
      <div className="max-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
            Knowledge Base
          </h2>
          <p className="text-3xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#151c2e border  border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-base font-bold white mb-3 flex items-start gap-2">
                <span className="text-indigo-400"> Q: </span> {faq.q}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
