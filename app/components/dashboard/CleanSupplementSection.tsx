export function SupplementsIntro() {
  const features = [
    {
      icon: '👍',
      title: 'We Make It Easy',
      description:
        'Personalized Solutions & Guidance Mean You Get Just What You Need Nothing More',
    },
    {
      icon: '🌿',
      title: 'Clean & Effective',
      description:
        'Proven Ingredients, not Artificial, Crafted By Experts For Optimal Effectiveness',
    },
    {
      icon: '👩‍⚕️',
      title: 'Your Free Dietitian',
      description:
        'Every Gainful Subscriber Gets Free, 1:1 Access Their Own Registered Dietitian.',
    },
    {
      icon: '📋',
      title: 'Made For You',
      description:
        'Performance is Personal. Personalized & Customizable Products For Your Needs, Body & Goals',
    },
  ];
  return (
    <div className="px-[40px] py-[50px]">
      {/* Heading */}
      <div className="text-center md:text-left mb-10">
        <p className="text-sm">🥱 Why Health & Fitness</p>
        <div className="text-3xl md:text-4xl font-bold mt-2">
          Clean Supplements –<br className="hidden md:block" />
          Made For You
        </div>
      </div>

      {/* Feature List */}
      <div className="grid gap-8 md:grid-cols-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xl mb-4">
              {item.icon}
            </div>
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
