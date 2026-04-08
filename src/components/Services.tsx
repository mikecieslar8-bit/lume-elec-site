import { motion } from "framer-motion";
import { Home, Building2, Shield, Lightbulb, Wrench, Cable, BatteryCharging, Plug } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Wiring",
    description: "Complete home electrical solutions — new construction wiring, rewiring older homes, and smart home installations.",
  },
  {
    icon: Building2,
    title: "Commercial Systems",
    description: "Scalable electrical systems for offices, retail, restaurants, and industrial facilities. Code-compliant guaranteed.",
  },
  {
    icon: Shield,
    title: "Panel Upgrades",
    description: "Upgrade from outdated fuse boxes to modern breaker panels. Handle today's energy demands safely.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design & Install",
    description: "Recessed lighting, landscape lighting, chandeliers, LED retrofits — transform your space beautifully.",
  },
  {
    icon: Cable,
    title: "Whole-Home Rewiring",
    description: "Replace old knob-and-tube or aluminum wiring with safe, modern copper wiring throughout your home.",
  },
  {
    icon: BatteryCharging,
    title: "EV Charger Installation",
    description: "Level 2 electric vehicle charger installation for your garage or business parking lot.",
  },
  {
    icon: Plug,
    title: "Outlet & Switch Work",
    description: "GFCI outlets, USB outlets, dimmer switches, 240V outlets for appliances — all installed to code.",
  },
  {
    icon: Wrench,
    title: "Inspections & Maintenance",
    description: "Electrical safety inspections, preventive maintenance, and code violation corrections.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 gradient-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">Our Electrical Services</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            From simple repairs to complex installations, our licensed electricians handle it all.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:box-glow hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
