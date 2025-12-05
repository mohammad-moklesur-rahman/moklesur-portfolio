import MyContainer from "../components/MyContainer";

const Contact = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      <MyContainer>
        <div className="px-4 md:px-10 py-20 md:pt-12">
          <div className="relative text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
              CONTACT <span className="text-primary">ME</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <h2 className="text-2xl font-semibold uppercase text-gray-900 dark:text-white">
                Don't be shy!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-primary text-4xl">
                    <span className="material-icons-outlined">map</span>
                  </div>
                  <div>
                    <h3 className="uppercase text-gray-500 dark:text-gray-500 font-medium">
                      Address Point
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300 font-semibold">
                      123 Stree New York City, United States Of America 750065.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-primary text-4xl">
                    <span className="material-icons-outlined">mail</span>
                  </div>
                  <div>
                    <h3 className="uppercase text-gray-500 dark:text-gray-500 font-medium">
                      Mail Me
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300 font-semibold">
                      steve@mail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-primary text-4xl">
                    <span className="material-icons-outlined">call</span>
                  </div>
                  <div>
                    <h3 className="uppercase text-gray-500 dark:text-gray-500 font-medium">
                      Call Me
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300 font-semibold">
                      +216 21 184 010
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                {["facebook", "twitter", "youtube", "dribbble"].map(
                  (social) => (
                    <a
                      key={social}
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary dark:hover:bg-primary text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-white flex items-center justify-center transition-colors duration-300"
                      href="#"
                    >
                      <i aria-hidden="true" className={`fab fa-${social}`}></i>
                      <span className="sr-only">{social}</span>
                    </a>
                  )
                )}
              </div>
            </div>
            <form className="lg:col-span-2 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  className="w-full bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-primary focus:border-primary rounded-full py-3 px-6 placeholder-gray-500 dark:placeholder-gray-500 text-gray-900 dark:text-gray-200"
                  placeholder="YOUR NAME"
                  type="text"
                />
                <input
                  className="w-full bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-primary focus:border-primary rounded-full py-3 px-6 placeholder-gray-500 dark:placeholder-gray-500 text-gray-900 dark:text-gray-200"
                  placeholder="YOUR EMAIL"
                  type="email"
                />
              </div>
              <input
                className="w-full bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-primary focus:border-primary rounded-full py-3 px-6 placeholder-gray-500 dark:placeholder-gray-500 text-gray-900 dark:text-gray-200"
                placeholder="YOUR SUBJECT"
                type="text"
              />
              <textarea
                className="w-full bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-primary focus:border-primary rounded-3xl py-3 px-6 placeholder-gray-500 dark:placeholder-gray-500 text-gray-900 dark:text-gray-200"
                placeholder="YOUR MESSAGE"
                rows="6"
              ></textarea>
              <div>
                <button
                  className="group inline-flex items-center gap-3 border-2 border-primary rounded-full px-8 py-3 text-gray-900 dark:text-white font-semibold uppercase tracking-wider hover:bg-primary transition-colors duration-300"
                  type="submit"
                >
                  Send Message
                  <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center -mr-6 text-white group-hover:bg-white dark:group-hover:bg-black group-hover:text-primary transition-colors duration-300">
                    <span className="material-icons-outlined -rotate-45">
                      send
                    </span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Contact;
