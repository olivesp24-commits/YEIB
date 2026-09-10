import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { FadeIn } from "@/components/ui/FadeIn";

const founders = [
  {
    id: 1,
    industry: "Fashion & Textiles",
    name: "Aisha Bello",
    location: "Lagos",
    image: "/asset/Carousel/aisha-bello-Image.png",
  },
  {
    id: 2,
    industry: "EdTech",
    name: "Chioma Nwosu",
    location: "Abuja",
    image: "/asset/Carousel/chioma-nwosu-image.png",
  },
  {
    id: 3,
    industry: "AgriTech",
    name: "Emeka Okafor",
    location: "Kano",
    image: "/asset/Carousel/emeka-okafor-Image.png",
  },
  {
    id: 4,
    industry: "Food Processing",
    name: "Fatima Al-Hassan",
    location: "Kaduna",
    image: "/asset/Carousel/fatima-al-hassan-Image.png",
  },
  {
    id: 5,
    industry: "Clean Energy",
    name: "Yusuf Ibrahim",
    location: "Port Harcourt",
    image: "/asset/Carousel/yusuf-ibrahim-Image.png",
  },
  {
    id: 6,
    industry: "Trade & Commerce",
    name: "Ngozi Adeyemi",
    location: "Lagos",
    image: "/asset/Carousel/ngozi-deyemi-Image.png",
  },
  {
    id: 7,
    industry: "ICT & Software",
    name: "Tunde Fashola",
    location: "Lagos",
    image: "/asset/Carousel/tunde-fashola-Image.png",
  },
  {
    id: 8,
    industry: "Agriculture",
    name: "Hadiza Musa",
    location: "Kaduna",
    image: "/asset/Carousel/hadiza-musa-Image.png",
  },
  {
    id: 9,
    industry: "Market Trade",
    name: "Babajide Adeoye",
    location: "Lagos",
    image: "/asset/Carousel/babajide-adeoye-Image.png",
  },
  {
    id: 10,
    industry: "Creative Industry",
    name: "Amaka Osei",
    location: "Enugu",
    image: "/asset/Carousel/amaka-osei-Image.png",
  }
];

export function FounderCarousel() {
  const duplicatedFounders = [...founders, ...founders];

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <p className="text-[var(--color-tiger-orange)] font-bold text-sm tracking-wider uppercase mb-12 ml-4">
            Our Target Audience
          </p>
        </FadeIn>
        
        <FadeIn delay={200} direction="up" className="relative w-full overflow-hidden mt-8">
          {/* Carousel Container */}
          <div className="flex animate-marquee gap-6 pb-8">
            {duplicatedFounders.map((founder, index) => (
              <div key={`${founder.id}-${index}`} className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px]">
                <Card className="h-[400px] flex flex-col justify-end relative overflow-hidden group border-0 shadow-lg cursor-pointer">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${founder.image})` }}
                  />
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-evergreen)]/90 via-[var(--color-evergreen)]/40 to-transparent" />
                  
                  <div className="relative z-10 p-6">
                    <Tag variant="default" className="mb-4 bg-white/20 text-white backdrop-blur-md border-white/30">
                      {founder.industry}
                    </Tag>
                    <h3 className="text-white text-2xl font-bold mb-1">{founder.name}</h3>
                    <p className="text-white/80">{founder.location}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
