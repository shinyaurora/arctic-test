export function SupplementsSection() {
  const products = [
    {
      id: 1,
      name: 'Omega - 3',
      description: 'Cognitive Health & Foundational Health',
      image: '/images/omega-3.png',
      price: '$49.95',
      subscriptionPrice: '$39.96',
      label: 'Bestseller',
      badgeStyle: ['One-Time Purchase', 'Subscribe & Save'],
      fullDetails: true,
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
      <div className="text-center mb-10">
        <p className="text-sm text-yellow-600 font-medium">🌟 Trending</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Supplements</h2>
        <a href="/collections/supplements" className="text-blue-600 text-sm underline">
          View All
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col justify-between">
            {/* Label */}
            {product.label && (
              <span className="text-xs font-semibold bg-yellow-300 text-gray-800 px-2 py-1 rounded mb-2 w-fit">
                {product.label}
              </span>
            )}

            {/* Image */}
            <img src={product.image} alt={product.name} className="w-full h-64 object-contain mb-4" />

            {/* Name & Desc */}
            <h3 className="text-md font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>

            {/* Tags */}
            {product.tags && (
              <div className="flex flex-wrap gap-2 mb-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Rating */}
            {product.rating && (
              <div className="text-yellow-500 text-sm mb-2">★★★★★</div>
            )}

            {/* Pricing / Actions */}
            {product.fullDetails ? (
              <>
                <div className="text-sm text-left space-y-1 mb-3">
                  <p>One-Time Purchase <span className="font-semibold">{product.price}</span></p>
                  <p>
                    <span className="font-semibold">Subscribe & Save</span>{' '}
                    <span className="text-green-600">{product.subscriptionPrice}</span>{' '}
                    <span className="text-xs text-red-500">Save 10%</span>
                  </p>
                </div>
                <button className="bg-black text-white text-sm font-medium py-2 rounded mb-2">
                  Add to Cart – {product.price}
                </button>
                <a href="#" className="text-center text-sm underline text-gray-700">
                  View Full Details
                </a>
              </>
            ) : (
              <button className="bg-black text-white text-sm font-medium py-2 rounded mt-auto">
                Add • {product.price}
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="relative bg-white rounded-lg shadow-md p-4 overflow-hidden group">
      {/* Badge */}
      <span className="absolute top-3 left-3 text-xs font-semibold bg-yellow-300 text-gray-800 px-2 py-1 rounded">
        Bestseller
      </span>

      {/* Image */}
      <img
        src="/images/omega-3.png"
        alt="Omega-3"
        className="w-full h-64 object-contain mb-4"
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded-full">GMO Free</span>
        <span className="bg-gray-100 px-2 py-1 rounded-full">Gluten Free</span>
        <span className="bg-gray-100 px-2 py-1 rounded-full">Vegan</span>
        <span className="bg-gray-100 px-2 py-1 rounded-full">Dairy Free</span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-900 mb-2">Omega-3</h3>

      {/* Hover Content (Slides Up) */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 bg-white px-4 pt-4 pb-6 rounded-t-lg transition-all duration-300 ease-in-out shadow-lg">
        <div className="flex items-center justify-between gap-2 text-sm border rounded overflow-hidden mb-3">
          <div className="flex-1 px-3 py-2 border-r">
            <p className="font-medium">One-Time Purchase</p>
            <p>$49.95</p>
          </div>
          <div className="flex-1 px-3 py-2 bg-gray-50">
            <p className="font-medium">Subscribe & Save</p>
            <p>
              $39.96 <span className="text-red-500 text-xs">Save 10%</span>
            </p>
          </div>
        </div>
        <button className="w-full bg-black text-white py-2 text-sm font-semibold rounded mb-2">
          Add to Cart – $49.95
        </button>
        <p className="text-center text-sm underline text-gray-600">View Full Details</p>
      </div>
    </div>
    </section>
  );
}