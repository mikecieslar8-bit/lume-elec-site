import { motion } from "framer-motion";
import { Home, Building2, Zap, Shield, Lightbulb, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential",
    description: "Complete home electrical solutions from wiring to smart home installations.",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Scalable electrical systems for offices, retail spaces, and industrial facilities.",
  },
  {
    icon: Zap,
    title: "Emergency Repairs",
    description: "24/7 emergency electrical service when you need it most. Fast response guaranteed.",
  },
  {
    icon: Shield,
    title: "Panel Upgrades",
    description: "Modernize your electrical panel to handle today's energy demands safely.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Custom lighting solutions that transform your space and reduce energy costs.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Preventive maintenance programs to keep your electrical systems running smoothly.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 gradient-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Our Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:box-glow"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
