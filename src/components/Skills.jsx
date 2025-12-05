

const Skills = () => {
  const skills = [
    { name: 'HTML', percentage: 25, strokeDashoffset: 212.25 },
    { name: 'Javascript', percentage: 89, strokeDashoffset: 31.13 },
    { name: 'CSS', percentage: 70, strokeDashoffset: 84.9 },
    { name: 'PHP', percentage: 66, strokeDashoffset: 96.22 },
    { name: 'WordPress', percentage: 95, strokeDashoffset: 14.15 },
    { name: 'Jquery', percentage: 50, strokeDashoffset: 141.5 },
    { name: 'Angular', percentage: 65, strokeDashoffset: 99.05 },
    { name: 'React', percentage: 45, strokeDashoffset: 155.65 },
  ];

  return (
    <div className="w-full mt-12">
       <h1 className="text-3xl font-bold uppercase tracking-widest mb-12 relative text-slate-800 dark:text-white text-center">
        My Skills
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary"></span>
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-12 sm:gap-x-16 gap-y-12">
        {skills.map((skill, index) => (
          <div key={index} className="text-center flex flex-col items-center space-y-4">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-slate-200 dark:text-slate-600"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="45"
                  stroke="currentColor"
                  strokeWidth="8"
                ></circle>
                <circle
                  className="text-primary transition-all duration-[350ms] ease-out origin-center -rotate-90"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="45"
                  stroke="currentColor"
                  strokeDasharray="283"
                  strokeDashoffset={skill.strokeDashoffset}
                  strokeWidth="8"
                ></circle>
              </svg>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-slate-700 dark:text-slate-200">
                {skill.percentage}%
              </span>
            </div>
            <p className="font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
