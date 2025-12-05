import moklesurImg from "../assets/moklesur.jpg";
import { Link } from "react-router-dom";
import MyContainer from "../components/MyContainer";

const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      <div className="relative min-h-screen flex items-center justify-center p-4 lg:p-8 overflow-hidden bg-background-light dark:bg-background-dark transition-colors duration-300">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-1/4 h-full lg:bg-primary z-0"></div>
        <MyContainer>
          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="w-7/12 lg:w-2/5 mb-8 lg:mb-0 lg:mr-12">
              <div className="relative p-2 bg-green-500 rounded-3xl shadow-2xl">
                <img
                  alt="Portrait of Steve Milner, a web designer"
                  className="w-full h-auto rounded-2xl"
                  src={moklesurImg}
                />
              </div>
            </div>
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <h1 className="text-3xl md:text-4xl text-primary font-extrabold tracking-tight">
                  MOHAMMAD MOKLESUR RAHMAN
                </h1>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-4">
                Web Developer
              </p>
              <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
                I am a Web Developer specializing in React and modern web
                technologies. I'm interested in full-stack web development with
                both the MERN and PERN stacks, with a focus on building scalable
                and modern web applications.
              </p>
              <div className="mt-10 inline-block">
                <Link
                  to="/about"
                  className="group relative flex items-center justify-between bg-transparent border border-gray-500 dark:border-gray-700 rounded-full px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary transition-colors duration-300"
                >
                  <span className="pr-8 tracking-wider">MORE ABOUT ME</span>
                  <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-gray-900 transition-transform duration-300 group-hover:scale-110">
                    <span className="material-icons-outlined text-xl">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default Home;
