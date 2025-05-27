export function SupplementsSection() {
  const products = [
    {
      id: 1,
      name: 'Omega - 3',
      description: 'Cognitive Health & Foundational Health',
      image: '/images/omega-3.png',
      subscriptionPrice: '$39.96',
      label: 'Bestseller',
      price: '$49.95',
      tags: ['GMO Free', 'Gluten Free'],
      rating: 5,
    },
    {
      id: 2,
      name: 'Magtein®',
      description: 'Enhances the quality of sleep.',
      image: '/images/magtein.png',
      price: '$49.95',
      tags: ['GMO Free', 'Gluten Free'],
      rating: 5,
    },
    {
      id: 3,
      name: 'Grass Fed Whey Protein Isolate Powder',
      description: 'Supports muscle mass and strength',
      image: '/images/protein.png',
      price: '$49.95',
      tags: ['GMO Free', 'Vegan', 'Dairy Free'],
      rating: 5,
    },
    {
      id: 4,
      name: 'Complete Sleep Bundle',
      description: 'Deepens sleep cycles for rejuvenated mornings',
      image: '/images/bundle.png',
      price: '$49.95',
      label: 'Bestseller',
      tags: ['Gluten Free', 'Vegan', 'Dairy Free'],
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Section Heading */}
      <div className="text-center mb-10 flex justify-center items-center">
        <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center"><img src="/images/arrow.png" className="-rotate-135"/></div>
        <div className="w-[400px]">
          <p className="">🌟 Trending</p>
          <div className="text-[40px] font-bold">Supplements</div>
          <a href="/collections/supplements" className="">
            View All
          </a>
        </div>
        <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center"><img src="/images/arrow.png" className="rotate-45"/></div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-[30px]">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col group overflow-hidden h-[470px]">
            {/* Label */}
            {product.label && (
              <span className="absolute text-xs font-semibold bg-yellow-300 text-gray-800 px-2 py-1 rounded mb-2 w-fit">
                {product.label}
              </span>
            )}

            {/* Image */}
            <img src={product.image} alt={product.name} className="w-full h-64 object-contain mb-4 group-hover:scale-110  transition-all duration-500 " />
            {/* Tags */}
            <div className="z-10 p-4 flex flex-col justify-end transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-[-10%]">
              {product.tags && (
              <div className="flex flex-wrap gap-2 mb-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-[10px] py-[5px] bg-[#F6F6F5] rounded-[10px] text-[10px]"
                  >
                   • {tag}
                  </span>
                ))}
              </div>
            )}
            {/* Name & Desc */}
            <h3 className="text-md font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>

            

            {/* Rating */}
            <div className="flex justify-between items-center mt-[20px]">
              {product.rating && (
              <div className="text-black-500 text-sm mb-2">★★★★★</div>
            )}

            {/* Pricing / Actions */}
              <button className="bg-black text-white text-sm font-medium py-2 rounded mt-auto px-[10px]">
                Add • {product.price}
              </button>
            </div>
            </div>

            <div className="-mt-[180px] z-20 p-4 opacity-1 translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              <div className="flex gap-2 w-full">
                <button className="flex-1 border border-gray-300 rounded-lg py-2 text-sm">○ One-Time Purchase<br /><strong>$49.95</strong></button>
                <button className="flex-1 border-2 border-black rounded-lg py-2 text-sm">
                  ● Subscribe & Save<br /><strong>$39.96</strong> <span className="text-red-500 text-xs">Save 10%</span>
                </button>
              </div>
              <button className="w-full mt-4 py-2 bg-black text-white rounded-lg font-semibold text-sm">Add to Cart - $49.95</button>
              
            </div>
            <button className="mt-0 text-xs text-gray-600 underline opacity-0 group-hover:opacity-100  transition-all duration-500">View Full Details</button>
            
          </div>
        ))}
      </div>
    </section>
  );
}