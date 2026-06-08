import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import lighting01 from "@/assets/projects/custom-lighting/lighting-01.jpg";
import lighting02 from "@/assets/projects/custom-lighting/lighting-02.jpg";
import lighting03 from "@/assets/projects/custom-lighting/lighting-03.jpg";
import lighting04 from "@/assets/projects/custom-lighting/lighting-04.jpg";
import lighting05 from "@/assets/projects/custom-lighting/lighting-05.jpg";
import lighting06 from "@/assets/projects/custom-lighting/lighting-06.jpg";
import lighting07 from "@/assets/projects/custom-lighting/lighting-07.jpg";
import lighting08 from "@/assets/projects/custom-lighting/lighting-08.jpg";
import lighting09 from "@/assets/projects/custom-lighting/lighting-09.jpg";
import lighting10 from "@/assets/projects/custom-lighting/lighting-10.jpg";
import lighting11 from "@/assets/projects/custom-lighting/lighting-11.jpg";
import lighting12 from "@/assets/projects/custom-lighting/lighting-12.jpg";
import lighting13 from "@/assets/projects/custom-lighting/lighting-13.jpg";
import lighting14 from "@/assets/projects/custom-lighting/lighting-14.jpg";
import lighting15 from "@/assets/projects/custom-lighting/lighting-15.jpg";

import retail01 from "@/assets/projects/retail/retail-01.png";
import retail02 from "@/assets/projects/retail/retail-02.png";
import retail03 from "@/assets/projects/retail/retail-03.png";
import retail04 from "@/assets/projects/retail/retail-04.png";
import retail05 from "@/assets/projects/retail/retail-05.png";
import retail06 from "@/assets/projects/retail/retail-06.png";
import retail07 from "@/assets/projects/retail/retail-07.png";
import retail08 from "@/assets/projects/retail/retail-08.png";
import retail09 from "@/assets/projects/retail/retail-09.png";
import retail10 from "@/assets/projects/retail/retail-10.png";
import retail11 from "@/assets/projects/retail/retail-11.png";
import retail12 from "@/assets/projects/retail/retail-12.png";
import retail13 from "@/assets/projects/retail/retail-13.png";
import retail14 from "@/assets/projects/retail/retail-14.png";
import retail15 from "@/assets/projects/retail/retail-15.png";

type Slide = { src: string; alt: string };
type CategoryGroup = { category: string; slides: Slide[] };

const customLightingSlides: Slide[] = [
  lighting01, lighting02, lighting03, lighting04, lighting05,
  lighting06, lighting07, lighting08, lighting09, lighting10,
  lighting11, lighting12, lighting13, lighting14, lighting15,
].map((src, i) => ({
  src,
  alt: `Custom lighting fixture installation ${i + 1}`,
}));

const retailSlides: Slide[] = [
  retail01, retail02, retail03, retail04, retail05,
  retail06, retail07, retail08, retail09, retail10,
  retail11, retail12, retail13, retail14, retail15,
].map((src, i) => ({
  src,
  alt: `High end retail store project ${i + 1}`,
}));

// Add additional categories here with the same shape — each renders as its own slideshow.
const categories: CategoryGroup[] = [
  { category: "Custom Lighting Fixtures", slides: customLightingSlides },
  { category: "High End Retail Stores", slides: retailSlides },
];

const CategorySlideshow = ({ group }: { group: CategoryGroup }) => {
  const [index, setIndex] = useState(0);
  const total = group.slides.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const current = group.slides[index];
  const safeCurrent = current ?? group.slides[0];

  // Auto-advance every 3 seconds; resets whenever the index changes (manual nav too).
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 3000);
    return () => clearInterval(id);
  }, [index, total]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16 last:mb-0"
    >
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
          {group.category}
        </h3>
        <span className="text-sm text-muted-foreground font-medium">
          {index + 1} / {total}
        </span>
      </div>

      <div
        className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-lg bg-background cursor-pointer group select-none"
        onClick={next}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={safeCurrent.src}
            src={safeCurrent.src}
            alt={safeCurrent.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full object-contain"
            loading="lazy"
          />
        </AnimatePresence>

        {/* Prev / Next controls */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 text-foreground hover:bg-background transition-opacity opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 text-foreground hover:bg-background transition-opacity opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {group.slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our work by category. Click an image — or use the arrows — to flip through the slideshow.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {categories.map((group) => (
            <CategorySlideshow key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
