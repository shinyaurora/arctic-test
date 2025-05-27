export function BlogSection (){
    const images = [
    '/images/insta-1.png',
    '/images/insta-2.png',
    '/images/insta-3.png',
    '/images/insta-4.png',
    '/images/insta-5.png',
    '/images/insta-6.png',
    '/images/insta-7.png',
    '/images/insta-8.png',
    '/images/insta-9.png',
    '/images/insta-10.png',
  ];
    return(
        <div className="px-[30px] py-[50px]">
            <section className="relative w-full h-[600px] rounded-xl overflow-hidden">
                {/* Background image */}
                <img
                    src="/images/Rectangle 478.png" // Replace with your local path
                    alt="Hero background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-center pl-10 sm:pl-20">
                    <div className="text-white">
                    <div className="text-[50px] sm:text-5xl font-bold mb-[10px]">
                        The Next Generation is Here
                    </div>
                    <div className="text-[16px] sm:text-base mb-6">
                        Innovative Engineering. Intelligent Design. Meet The Plunge All‑I.
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
                        Take The Plunge
                        </button>
                        <button className="border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
                        Dive Deeper
                        </button>
                    </div>
                    </div>
                </div>
            </section>
            <section className="px-6 py-12 lg:px-20">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                <p className="text-sm">✍️ Blogs</p>
                <div className="text-3xl font-bold text-[40px]">Latest Articles</div>
                </div>
                <a href="#" className="text-sm underline font-medium">
                View All
                </a>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left large card */}
                <div className="relative rounded-lg overflow-hidden h-[450px] lg:col-span-1">
                    <img
                        src="/images/blog-hero.png" // update path
                        alt="Featured blog"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 text-white p-6 lg:p-10 h-full flex flex-col justify-end">
                        <p className="text-sm mb-2">Balanced Diet</p>
                        <h3 className="text-xl font-semibold leading-snug">
                        Foundational Supplements: <br /> Build a Better You
                        </h3>
                        <p className="text-sm mt-3 opacity-90">
                        By Emily Thompson &nbsp; | &nbsp; August 31, 2023
                        </p>
                    </div>
                </div>

                {/* Right stacked cards */}
                <div className="flex flex-col gap-4 px-1">
                {[1, 2].map((_, idx) => (
                    <div key={idx} className="flex gap-4 items-start h-1/2">
                    <img
                        src={`/images/blog-${idx + 1}.png`} // update paths
                        alt="Blog preview"
                        className="w-[300px] h-[215px] object-cover rounded-md"
                    />
                    <div>
                        <div className="text-[16px] text-gray-500 mb-[40px]">Balanced Diet</div>
                        <div className="text-[18px] font-semibold leading-tight  mb-[40px]">
                        {idx === 0
                            ? 'Taming the Fire Within: Everything You Need to Know About Inflammation'
                            : 'Optimize Your Sleep with These 15 Strategies'}
                        </div>
                        <div className="text-[16px] text-gray-500">
                        By Emily Thompson &nbsp; | &nbsp; August 31, 2023
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </section>
            <div className="mt-[50px]">
                    {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    <div className="bg-white rounded-xl flex flex-col sm:flex-row items-center justify-between p-6 mb-6 col-span-2 bg-[#F6F6F5] flex flex-col h-full">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-full font-semibold">
                            Logo
                            </div>
                            <div className="text-lg font-bold">@uncmfrt.com</div>
                        </div>
                        <button className="mt-4 sm:mt-0 border border-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition bg-white">
                            Follow Us on Instagram
                        </button>
                    </div>
                {images.map((src, idx) => (
                    <img
                    key={idx}
                    src={src}
                    alt={`Insta ${idx}`}
                    className="w-full h-auto object-cover rounded-md"
                    />
                ))}
                </div>
            </div>
        </div>
    )
}