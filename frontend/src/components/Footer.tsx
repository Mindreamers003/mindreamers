import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      Icon: FaLinkedinIn,
      href: "#",
      color: "hover:bg-[#0077b5] hover:border-[#0077b5]",
    },
    {
      Icon: FaTwitter,
      href: "#",
      color: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]",
    },
    {
      Icon: FaFacebookF,
      href: "#",
      color: "hover:bg-[#4267B2] hover:border-[#4267B2]",
    },
    {
      Icon: FaInstagram,
      href: "#",
      color: "hover:bg-[#E1306C] hover:border-[#E1306C]",
    },
  ];

  return (
    <footer className="bg-slate-100 text-gray-600 pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <img
                src="https://mindreamers.com/img/logo.png"
                alt="Mindreamers"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-sm leading-relaxed text-gray-500 font-body">
              Empowering businesses with top-tier talent and innovative
              technology solutions. Building the future, together.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  className={`w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-white transition-all shadow-sm ${color}`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-gray-900 mb-6 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                "Home",
                "About Us",
                "Services",
                "Find a Talent",
                "Find a Job",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-teal-600 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-bold text-gray-900 mb-6 text-lg">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                "Staffing Solutions",
                "Resume Building",
                "GCC As a Service",
                "Professional Training",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-teal-600 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans font-bold text-gray-900 mb-6 text-lg">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                  📍
                </span>
                <span className="mt-1">
                  <strong>USA:</strong> 2035 Sunset Lake Road, Suite B-2, Newark
                  DE 19702
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                  📍
                </span>
                <span className="mt-1">
                  <strong>Canada:</strong> 36 Lodgeway Dr, Maple, ON L6A 3S6
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                  📍
                </span>
                <span className="mt-1">
                  <strong>India:</strong> B-1214, Sector 04, Noida 201301
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                  📞
                </span>
                <span>0120 - 46554920</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                  ✉️
                </span>
                <span>first.step@mindreamers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>
            &copy; {new Date().getFullYear()} Mindreamers. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-teal-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
