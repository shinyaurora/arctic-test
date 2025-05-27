export function ScienceSection() {

const products = [
  {
    id: 1,
    video: "/images/man1.png",
    title: "Magnesium L-Threonate",
    price: "$49.95",
  },
   {
    id: 1,
    video: "/images/man2.png",
    title: "Magnesium L-Threonate",
    price: "$49.95",
  },
   {
    id: 1,
    video: "/images/man3.png",
    title: "Magnesium L-Threonate",
    price: "$49.95",
  },
   {
    id: 1,
    video: "/images/man4.png",
    title: "Magnesium L-Threonate",
    price: "$49.95",
  },
   {
    id: 1,
    video: "/images/man5.png",
    title: "Magnesium L-Threonate",
    price: "$49.95",
  },
  // Add more objects with video/image paths as needed
];

  return (
    <div className="px-6 py-12 bg-gray-50">
      <div className="text-center mb-10 flex justify-center items-center">
        <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center"><img src="/images/arrow.png" className="-rotate-135"/></div>
        <div className="px-[100px]">
          <p className="">Trusted & Proven by Science</p>
          <div className="text-[40px] font-bold">Real People. Real Results.</div>
          <a href="/collections/supplements" className="">
            View All
          </a>
        </div>
        <div className="w-[50px] h-[50px] border border-gray-300 rounded-[10px] flex justify-center items-center"><img src="/images/arrow.png" className="rotate-45"/></div>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-4 justify-center">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col min-w-[250px] w-[350px]">
            {/* Video or Image */}
            <div className="w-full h-[400px] overflow-hidden rounded-xl bg-black">
              <img
                src={product.video}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="mt-3 p-1 bg-white rounded-xl shadow-sm flex items-center justify-between">
              <div className="flex w-[85%]">
                <div className="w-[60px] h-[60px] bg-gray-300 rounded-[5px] p-[5px] mr-[10px] flex justify-center items-center">
                    <img src="/images/omega-3.png" alt="Product" className="w-10 mb-1" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="text-[13px] font-medium">{product.title}</div>
                    <div className="text-[13px] font-semibold">{product.price}</div>
                </div>
              </div>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white text-lg">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}