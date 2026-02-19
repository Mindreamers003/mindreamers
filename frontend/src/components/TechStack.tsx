import {
  FaReact,
  FaAngular,
  FaPython,
  FaAws,
  FaNodeJs,
  FaDocker,
  FaJava,
  FaMicrosoft,
} from "react-icons/fa";
import { SiTypescript, SiKubernetes } from "react-icons/si";

const techs = [
  { icon: <FaReact />, name: "React", color: "text-blue-400" },
  { icon: <FaAngular />, name: "Angular", color: "text-red-500" },
  { icon: <FaPython />, name: "Python", color: "text-yellow-500" },
  { icon: <FaAws />, name: "AWS", color: "text-orange-500" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
  { icon: <FaDocker />, name: "Docker", color: "text-blue-500" },
  { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
  { icon: <SiKubernetes />, name: "Kubernetes", color: "text-blue-400" },
  { icon: <FaJava />, name: "Java", color: "text-red-600" },
  { icon: <FaMicrosoft />, name: ".NET", color: "text-purple-600" },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-white">
      {/* White background to contrast with tinted Features section */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-3">
            Top Tech Skills in Demand
          </h2>
          <p className="text-gray-500 text-lg">
            We specialize in connecting you with talent proficient in modern
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
            >
              <div
                className={`text-5xl mb-5 transition-transform duration-300 group-hover:scale-110 ${tech.color}`}
              >
                {tech.icon}
              </div>
              <span className="font-semibold text-gray-700 font-sans tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
