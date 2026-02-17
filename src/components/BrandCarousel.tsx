

const brands = [
    { name: "Agrifirm", logo: "/logos/agrifirm.png" },
    { name: "Biscayart", logo: "/logos/biscayart.png" },
    { name: "Kersia", logo: "/logos/kersia.jpg" },
    { name: "Boehringer Ingelheim", logo: "/logos/boehringer.png" },
    { name: "Milk Bar", logo: "/logos/milkbar.jpg" },
    { name: "ATTO Sementes", logo: "/logos/atto.png" },
    { name: "Luxembourg", logo: "/logos/luxembourg.jpg" },
];

// Duplicate the array to create the infinite loop effect
const carouselBrands = [...brands, ...brands, ...brands, ...brands];

export default function BrandCarousel() {
    return (
        <div className="w-full bg-white py-12 border-b border-gray-100 overflow-hidden relative">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex animate-infinite-scroll w-max hover:[animation-play-state:paused] group">
                {carouselBrands.map((brand, index) => (
                    <div
                        key={`${brand.name}-${index}`}
                        className="flex items-center justify-center mx-12 shrink-0 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                    >
                        <Image
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            width={160}
                            height={64}
                            className="max-h-16 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
