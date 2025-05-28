export function IngredientSection() {
  const icons = ['🌿', '🌿', '🌿'];
  const features = ['Whey Based', 'Build Muscle', 'Clean Ingredients'];

  const ingredients = [
    {
      title: 'Whey Protein Isolate',
      desc: 'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Repair.',
    },
    {
      title: 'Whey Protein Isolate',
      desc: 'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Repair.',
    },
    {
      title: 'Whey Protein Isolate',
      desc: 'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Repair.',
    },
  ];

  return (
    <div className="bg-gray-50 py-[50px] px-[30px]">
      <div className="flex flex-col items-center">
        <div className="text-[16px]">Simple & Effective Ingredients</div>
        <div className="text-[40px] font-bold">Customized Protein Powder</div>
      </div>
      <div className="flex items-center">
        <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center">
          <img src="/images/arrow.png" className="-rotate-135" />
        </div>
        <section className="rounded-xl max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow">
            {/* Product Image */}
            <div className="flex-1 flex items-center justify-center p-6 border border-gray-300 p-4">
              <img
                src="/images/protein.png"
                alt="Whey Protein"
                className="max-h-[300px]"
              />
            </div>

            {/* Right Panel */}
            <div className="flex-1 border border-gray-300 p-4">
              {/* Feature Header */}
              <div className="bg-zinc-900 text-white text-center p-6">
                <h3 className="text-lg font-semibold mb-4">The Blend</h3>
                <div className="flex justify-center gap-8">
                  {features.map((text, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <div className="bg-zinc-800 w-10 h-10 flex items-center justify-center rounded-full text-xl">
                        {icons[i]}
                      </div>
                      <p className="text-sm">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ingredients List */}
              <div className="bg-white p-6 grid md:grid-cols-3 gap-4 text-center">
                <h4 className="col-span-full text-lg font-semibold mb-2">
                  Active Ingredients
                </h4>
                {ingredients.map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="w-10 h-10 bg-gray-100 rounded-full text-xl flex items-center justify-center">
                      🌿
                    </div>
                    <p className="font-semibold text-left">{item.title}</p>
                    <p className="text-sm text-gray-600 text-left">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6 pt-0 text-center">
                <button className="w-full bg-black text-white text-sm font-semibold py-3 rounded hover:bg-gray-800 transition">
                  Customize This Blend
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center">
          <img src="/images/arrow.png" className="rotate-45" />
        </div>
      </div>
    </div>
  );
}
