
const Experience = () => {
  const experienceData = [
    {
      year: '2018 - PRESENT',
      title: 'WEB DEVELOPER — ENVATO',
      description:
        'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.',
      icon: 'work',
    },
    {
      year: '2013 - 2018',
      title: 'UI/UX DESIGNER — THEMEFOREST',
      description:
        'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt.',
      icon: 'work',
    },
    {
      year: '2005 - 2013',
      title: 'CONSULTANT — VIDEOHIVE',
      description:
        'Lorem ipsum dolor sit amet, laboreconsectetur elit, sed do eiusmod tempor duntt.',
      icon: 'work',
    },
  ];

  const educationData = [
    {
      year: '2015',
      title: 'ENGINEERING DEGREE — OXFORD UNIVERSITY',
      description:
        'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.',
      icon: 'school',
    },
    {
      year: '2012',
      title: 'MASTER DEGREE — KIEV UNIVERSITY',
      description:
        'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt.',
      icon: 'school',
    },
    {
      year: '2009',
      title: 'BACHELOR DEGREE — TUNIS HIGH SCHOOL',
      description:
        'Lorem ipsum dolor sit amet, laboreconsectetur elit, sed do eiusmod tempor duntt.',
      icon: 'school',
    },
  ];

  return (
    <div className="w-full">
      <header className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-widest text-gray-900 dark:text-white uppercase">
          Experience & Education
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Experience Column */}
        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-16">
              {/* Icon Circle */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 bg-primary rounded-full z-10">
                <span className="material-symbols-outlined text-gray-900">
                  {item.icon}
                </span>
              </div>
              {/* Vertical Line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-6 top-12 h-full border-l-2 border-gray-300 dark:border-gray-700"></div>
              )}
              
              <span className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
                {item.year}
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white uppercase">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Education Column */}
        <div className="space-y-12">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-16">
              {/* Icon Circle */}
              <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 bg-primary rounded-full z-10">
                <span className="material-symbols-outlined text-gray-900">
                  {item.icon}
                </span>
              </div>
              {/* Vertical Line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-6 top-12 h-full border-l-2 border-gray-300 dark:border-gray-700"></div>
              )}

              <span className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded">
                {item.year}
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white uppercase">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
