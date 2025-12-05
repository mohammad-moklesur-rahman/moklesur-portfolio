import Skills from "../components/Skills";
import Experience from "../components/Experience";
import MyContainer from "../components/MyContainer";

const About = () => {
  const personalInfos = [
    { label: "First Name", value: "Steve" },
    { label: "Last Name", value: "Milner" },
    { label: "Age", value: "27 Years" },
    { label: "Nationality", value: "Tunisian" },
    { label: "Freelance", value: "Available", isGreen: true },
    { label: "Address", value: "Tunis" },
    { label: "Phone", value: "+21621184010" },
    { label: "Email", value: "you@mail.com" },
    { label: "Skype", value: "steve.milner" },
    { label: "Languages", value: "French, English" },
  ];

  const stats = [
    { value: "12+", label: "Years of Experience" },
    { value: "97+", label: "Completed Projects" },
    { value: "81+", label: "Happy Customers" },
    { value: "53+", label: "Awards Won" },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark">
      <MyContainer>
        <div className="px-4 md:px-10 py-20 md:pt-12">
          <div className="relative text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              ABOUT <span className="text-primary">ME</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white uppercase">
                Personal Infos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-600 dark:text-gray-300 flex-grow">
                {personalInfos.map((info, index) => (
                  <p key={index}>
                    <span className="opacity-70">{info.label}: </span>
                    <span
                      className={`font-medium ${
                        info.isGreen
                          ? "text-green-500"
                          : "text-gray-800 dark:text-white"
                      }`}
                    >
                      {info.value}
                    </span>
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <button className="group relative inline-flex items-center justify-center px-6 py-3 border-2 border-primary rounded-full text-sm font-semibold uppercase tracking-wider overflow-hidden transition-all duration-300 ease-in-out text-gray-800 dark:text-white hover:text-gray-900">
                  <span className="absolute right-0 w-8 h-8 -mr-1.5 transition-all duration-300 ease-out bg-primary rounded-full group-hover:w-[calc(100%+0.75rem)] group-hover:h-[calc(100%+0.75rem)]"></span>
                  <span className="relative z-10 flex items-center">
                    Download CV
                    <span className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-primary transition-colors duration-300">
                      <span className="material-icons-outlined text-xl !text-white dark:!text-black">
                        file_download
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-300 dark:border-gray-700 rounded"
                >
                  <p className="text-5xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="w-8 h-px bg-gray-400 dark:bg-gray-600 mr-3"></div>
                    <p className="text-xs uppercase text-gray-500 dark:text-gray-400 tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <hr className="border-gray-300 dark:border-gray-700 my-12" />
            <Skills />
            <hr className="border-gray-300 dark:border-gray-700 my-12" />
            <Experience />
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default About;
