import { FaArrowUp, FaCogs, FaFlask } from "react-icons/fa";

const features = [
  {
    icon: <FaArrowUp className="w-6 h-6 text-white" />,
    title: "SCALING",
    items: [
      "Workforce managed: 240+ associates including 20k+ women",
      "Clientele: 1000+",
      "Talent Acquisition capacity: 300+ professional recruiters",
      "National footprints: 10+ Offices across India",
    ],
    bgGradient: "bg-gradient-to-br from-teal-500 to-teal-600",
    hoverBorder: "hover:border-teal-200",
  },
  {
    icon: <FaCogs className="w-6 h-6 text-white" />,
    title: "TAT",
    items: [
      "Value proposition: Filling tech roles in a week's time, cutting time to hire by 60%",
      "Ability to recruit 20K+ associates in a record time",
      "44% professionals hired from Tier 2/3 cities",
      "Industries supporting: IT, BFSI, Healthcare, Manufacturing and many more",
    ],
    bgGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    hoverBorder: "hover:border-blue-200",
  },
  {
    icon: <FaFlask className="w-6 h-6 text-white" />,
    title: "TECHNOLOGY AND DATA / AI",
    items: [
      "AI powered Software to Identify bogus candidates",
      "Digitalized system for onboarding, payroll management and statutory compliance.",
      "AI Based Sourcing methods to automate speed, accuracy and impact.",
    ],
    bgGradient: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    hoverBorder: "hover:border-indigo-200",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-blue-50/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-3">
          <span className="text-teal-600 font-bold tracking-widest text-xs uppercase">
            KEY DIFFERENTIATORS
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We combine scale, speed, and technology to deliver exceptional
            results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)] hover:shadow-[0_20px_40px_-5px_rgba(59,130,246,0.25)] transition-all duration-300 border border-blue-50 ${feature.hoverBorder} hover:-translate-y-2`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${feature.bgGradient} group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-sans font-bold text-gray-900 tracking-wide">
                  {feature.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {feature.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed group-hover:text-gray-900 transition-colors"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0 group-hover:bg-teal-500 transition-colors" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
