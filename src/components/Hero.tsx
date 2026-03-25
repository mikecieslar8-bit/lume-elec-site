import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full gradient-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Licensed & Insured Electricians</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Powering Your World with{" "}
            <span className="text-primary text-glow">Precision</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Professional electrical services for residential and commercial properties.
            Quality craftsmanship, reliable service, and safety you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity box-glow"
            >
              Get Free Estimate <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+15551234567"
              className="border border-border bg-card/50 text-foreground px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 hover:border-primary/50 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" /> (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
