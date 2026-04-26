import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
import lighting16 from "@/assets/projects/custom-lighting/lighting-16.jpg";
import lighting17 from "@/assets/projects/custom-lighting/lighting-17.jpg";
import lighting18 from "@/assets/projects/custom-lighting/lighting-18.jpg";
import lighting19 from "@/assets/projects/custom-lighting/lighting-19.jpg";
import lighting20 from "@/assets/projects/custom-lighting/lighting-20.jpg";
import lighting21 from "@/assets/projects/custom-lighting/lighting-21.jpg";
import lighting22 from "@/assets/projects/custom-lighting/lighting-22.jpg";
import lighting23 from "@/assets/projects/custom-lighting/lighting-23.jpg";
import lighting24 from "@/assets/projects/custom-lighting/lighting-24.jpg";
import lighting25 from "@/assets/projects/custom-lighting/lighting-25.jpg";
import lighting26 from "@/assets/projects/custom-lighting/lighting-26.jpg";
import lighting27 from "@/assets/projects/custom-lighting/lighting-27.jpg";
import lighting28 from "@/assets/projects/custom-lighting/lighting-28.jpg";
import lighting29 from "@/assets/projects/custom-lighting/lighting-29.jpg";
import lighting30 from "@/assets/projects/custom-lighting/lighting-30.jpg";

type Project = { src: string; alt: string; category: string };

const customLightingFixtures: Project[] = [
  lighting01, lighting02, lighting03, lighting04, lighting05,
  lighting06, lighting07, lighting08, lighting09, lighting10,
  lighting11, lighting12, lighting13, lighting14, lighting15,
  lighting16, lighting17, lighting18, lighting19, lighting20,
  lighting21, lighting22, lighting23, lighting24, lighting25,
  lighting26, lighting27, lighting28, lighting29, lighting30,
].map((src, i) => ({
  src,
  alt: `Custom lighting fixture installation ${i + 1}`,
  category: "Custom Lighting Fixtures",
}));

// Additional categories can be appended here with the same shape.
const projects: Project[] = [
  ...customLightingFixtures,
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
            Take a look at some of the commercial and luxury retail spaces we've wired, lit, and powered — from high-end showrooms to flagship storefronts.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground font-medium">
                {project.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white z-50"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={projects[selectedImage].src}
              alt={projects[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
