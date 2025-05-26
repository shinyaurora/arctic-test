export default function GoalsSection() {
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
      <p className="text-sm font-medium uppercase text-gray-500 tracking-wide">
        Comfortably Uncomfortable
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2">
        Start with your Goals
      </h2>
      <p className="text-gray-600 mb-10">
        We cannot become what we want to be by remaining what we are.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {goals.map((goal) => (
          <div
            key={goal.title}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <img src={goal.image} alt={goal.title} className="w-full h-64 object-cover" />
            <div className="p-4 text-left">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm font-semibold text-gray-900">{goal.title}</h3>
                <span className="text-xl">↗</span>
              </div>
              <p className="text-sm text-gray-600">{goal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}