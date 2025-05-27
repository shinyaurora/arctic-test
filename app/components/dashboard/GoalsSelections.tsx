export function GoalsSection() {
  const goals = [
    {
      title: 'Sleep',
      description: 'Optimize your sleep patterns.',
      image: '/images/sleep.png',
    },
    {
      title: 'Cognitive Function',
      description: "Enhance your brain's performance and connectivity",
      image: '/images/cognitive.png',
    },
    {
      title: 'Foundational Health',
      description: 'Promoting healthy, natural deep sleep day to day',
      image: '/images/foundational.png',
    },
    {
      title: 'Athletic Performance',
      description: 'Increase your healthy tissue, muscle, and energy',
      image: '/images/athletic.png',
    },
    {
      title: 'Hormone Support',
      description: 'Boost your mood, libido, and vitality',
      image: '/images/hormone.png',
    },
  ];

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white text-center">
      <p className="uppercase">
        Comfortably Uncomfortable
      </p>
      <div className="text-[40px] font-semibold">
        Start with your Goals
      </div>
      <p className="text-[#1B1F23B2]">
        We cannot become what we want to be by<br/> remaining what we are.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-5">
        {goals.map((goal) => (
          <div
            key={goal.title}
            className="bg-white overflow-hidden rounded-lg cursor-pointer group border-0"
          ><div className="overflow-hidden w-full h-64">
            <img src={goal.image} alt={goal.title} className="w-full h-64 object-cover group-hover:scale-110  transition-transform duration-300" />
            </div>
            <div className="flex mt-[10px] justify-between">
              <div className="w-[80%]">
                <h2 className="text-left">{goal.title}</h2>
                <p className="text-sm text-gray-600 text-left">{goal.description}</p>
              </div>
              <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full border border-black">
                <img className="group-hover:rotate-45 transition-transform duration-300" src="/images/arrow.png"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}