import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import project01 from "@/assets/projects/project-01.jpg";
import project02 from "@/assets/projects/project-02.jpg";
import project03 from "@/assets/projects/project-03.jpg";
import project04 from "@/assets/projects/project-04.jpg";
import project05 from "@/assets/projects/project-05.jpg";
import project06 from "@/assets/projects/project-06.jpg";
import project07 from "@/assets/projects/project-07.jpg";
import project08 from "@/assets/projects/project-08.jpg";
import project09 from "@/assets/projects/project-09.jpg";
import project10 from "@/assets/projects/project-10.jpg";
import project11 from "@/assets/projects/project-11.jpg";
import project12 from "@/assets/projects/project-12.jpg";
import project13 from "@/assets/projects/project-13.jpg";
import project14 from "@/assets/projects/project-14.jpg";
import project15 from "@/assets/projects/project-15.jpg";
import project16 from "@/assets/projects/project-16.jpg";
import project17 from "@/assets/projects/project-17.jpg";
import project18 from "@/assets/projects/project-18.jpg";
import project19 from "@/assets/projects/project-19.jpg";

const projects = [
  { src: project01, alt: "Retail store lighting installation", category: "Commercial Retail" },
  { src: project02, alt: "Showroom lighting design", category: "Showroom" },
  { src: project03, alt: "Designer lighting showroom", category: "Showroom" },
  { src: project04, alt: "Foscarini showroom electrical", category: "Showroom" },
  { src: project05, alt: "Gallery hallway lighting", category: "Commercial" },
  { src: project06, alt: "Davide Groppi storefront lighting", category: "Storefront" },
  { src: project07, alt: "Office workspace lighting", category: "Office" },
  { src: project08, alt: "Retail interior with track lighting", category: "Commercial Retail" },
  { src: project09, alt: "Oula reception area lighting", category: "Commercial" },
  { src: project10, alt: "Hallway with warm ambient lighting", category: "Commercial" },
  { src: project11, alt: "Jewelry display case lighting", category: "Luxury Retail" },
  { src: project12, alt: "Grand Seiko showroom electrical", category: "Luxury Retail" },
  { src: project13, alt: "De Beers storefront lighting", category: "Luxury Retail" },
  { src: project14, alt: "Alison Lou boutique lighting", category: "Luxury Retail" },
  { src: project15, alt: "Jewelry display ambient lighting", category: "Luxury Retail" },
  { src: project16, alt: "Fashion retail store lighting", category: "Commercial Retail" },
  { src: project17, alt: "Lanvin storefront illumination", category: "Storefront" },
  { src: project18, alt: "Boutique interior lighting design", category: "Luxury Retail" },
  { src: project19, alt: "De Beers interior showcase lighting", category: "Luxury Retail" },
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
