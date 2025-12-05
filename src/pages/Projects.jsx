import MyContainer from "../components/MyContainer";

const Projects = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      <MyContainer>
        <div className="px-4 md:px-10 py-20 md:pt-12">
          <div className="relative text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              MY <span className="text-primary">PROJECTS</span>
            </h2>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-12">
            Transforming Ideas into{" "}
            <span className="text-primary">Reality</span>
          </h1>
          <div className="flex flex-wrap items-center gap-2 mb-12">
            <button className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary">
              Full Stack
            </button>
            <button className="px-4 py-2 text-sm font-medium rounded-lg border-primary text-primary bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary">
              Frontend
            </button>
          </div>
          <div className="bg-white dark:bg-gray-900/50 p-6 sm:p-8 rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex items-center justify-center">
                <img
                  alt="Screenshot of the Cuisine Food website homepage"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBfvvmT4HWqZ-ApNv8uUl1PTCfchKJxipoaOFxszE-s7GkFXA1jTghqHqjtzw4mklxHvDMubuvLnL36xwkHzt5cqT8YHiO6FTTazhK0ZmWWzUw1b3NPqVPBos5i_sdHBFjTqk_GqkOO5KxT5w2kT0hlZ6PLy1c1xhBoAwJ7saKauUmq5NZH6EXkl-0Hi56JQYlqSsE9iJWWuL7ltV6JAZZGaNtSEa0lpHlWk2HMQSJO5T1nRfSfoLVix86JLC36390WnqIGWw314"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    alt="Cuisine Food logo"
                    className="h-8 w-auto"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMOYH_d_TgiZ-OC3J1JscB2pFtSJ0koA_DlnybMbmXfSmF_35fabt1fxltlb7iLjEzwZ17riVdi125eK4gCytZ_s1XCehzuuaq__LHlYLkQHxDarxfNuncsqTNJx9voF2tSDiDEGYPiKEBDYFJ01ZzocK0SzsbzIPMaz193RjlOl5qJYdzYklW8GsgIHrwaFErssMu2VqwIaLwAjG3rlPKgmEGslXOmqLoKhBd1nAWx7BM8cgj7tlQR3iO30cGBd3yCWVDkGldM0M"
                  />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Cuisine Food
                  </h2>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="material-icons-outlined text-primary text-xl">
                      code
                    </span>
                    <span>Frontend</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-icons-outlined text-primary text-xl">
                      person_outline
                    </span>
                    <span>Frontend Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-icons-outlined text-primary text-xl">
                      schedule
                    </span>
                    <span>Status: Completed</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300">
                    HTML
                  </span>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300">
                    CSS
                  </span>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-200 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300">
                    Swiper.js
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors"
                    href="#"
                  >
                    <span className="material-icons-outlined text-xl">
                      link
                    </span>
                    Live Link
                  </a>
                  <a
                    className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-colors"
                    href="#"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    Frontend Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Projects;
