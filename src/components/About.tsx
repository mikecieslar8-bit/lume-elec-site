import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "2,000+", label: "Projects Completed" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "8:00 am-5:00 pm", label: "Service" },
];

const values = [
  "Transparent pricing with no hidden fees",
  "Clean, respectful work at every job site",
  "Code-compliant installations guaranteed",
  "Satisfaction guaranteed on every project",
];

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">About LUME</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Trusted Electrical Experts in Your Community
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At LUME Electric, we believe great electrical work starts with great people.
              Our team of certified electricians brings expertise, integrity, and a commitment
              to safety to every project.
            </p>
            <ul className="space-y-4">
              {values.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-secondary-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-xl bg-card border border-border text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary text-glow mb-2 font-display">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
