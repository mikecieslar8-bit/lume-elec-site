import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Clock, Award, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const badges = [
  { icon: ShieldCheck, text: "Licensed & Insured" },
  { icon: Clock, text: "24/7 Emergency" },
  { icon: Award, text: "5-Star Rated" },
];

const electricArc = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: [0, 1, 1, 0.6],
    transition: { duration: 2, ease: "easeInOut" as const, repeat: Infinity, repeatDelay: 3 },
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
      </div>

      {/* Animated electric particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 10, -20, 0],
              x: [0, 10, -10, 5, 0],
              opacity: [0, 1, 0.5, 1, 0],
              scale: [0, 1.5, 0.8, 1.2, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Electric arc SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M100 200 L150 180 L130 250 L200 220 L170 300 L250 260 L220 350"
          stroke="hsl(52 100% 50% / 0.3)"
          strokeWidth="2"
          strokeLinecap="round"
          variants={electricArc}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M900 100 L950 130 L920 180 L980 160 L940 230 L1000 200"
          stroke="hsl(210 100% 62% / 0.2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          variants={electricArc}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl flex-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-accent font-semibold">Professional Electricians You Can Trust</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-6 tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="block text-foreground"
              >
                LUME
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="block"
              >
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  ELECTRIC
                </span>{" "}
                <motion.span
                  className="text-primary text-glow inline-block"
                  animate={{
                    opacity: [1, 0.6, 1],
                    textShadow: [
                      "0 0 20px hsl(52 100% 50% / 0.4)",
                      "0 0 40px hsl(52 100% 50% / 0.7)",
                      "0 0 20px hsl(52 100% 50% / 0.4)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  INC
                </motion.span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed"
            >
              From panel upgrades to full rewiring — professional electrical services for
              residential and commercial properties. Quality craftsmanship and safety you can trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="#contact"
                className="gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 hover:opacity-90 transition-all box-glow"
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px hsl(52 100% 50% / 0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                Get Free Estimate <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                className="border border-border bg-card text-foreground px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 hover:border-accent/50 transition-colors shadow-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5 text-accent" /> (555) 123-4567
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-6"
            >
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.text}
                  className="flex items-center gap-2 text-muted-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + i * 0.15 }}
                >
                  <badge.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Animated logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex flex-1 items-center justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <motion.div
                className="absolute -inset-8 rounded-full"
                style={{
                  background: "radial-gradient(circle, hsl(52 100% 50% / 0.15) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Orbiting bolt */}
              <motion.div
                className="absolute w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 text-primary drop-shadow-[0_0_8px_hsl(52_100%_50%/0.6)]" />
              </motion.div>
              <img
                src={logo}
                alt="Lume Electric"
                className="w-72 h-72 object-contain drop-shadow-[0_0_40px_hsl(52_100%_50%/0.3)] relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
