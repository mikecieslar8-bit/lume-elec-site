import { motion } from "framer-motion";
import { ShieldCheck, Clock, DollarSign, ThumbsUp, HardHat, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    description: "All work performed by state-licensed Master Electricians with full liability coverage.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description: "We respect your schedule. Arrive on time, finish on schedule, clean up when we're done.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees or surprise charges. You approve the price before any work begins.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll come back and make it right — no questions asked.",
  },
  {
    icon: HardHat,
    title: "Safety First",
    description: "Every installation meets or exceeds NEC code requirements. Your family's safety is our priority.",
  },
  {
    icon: FileCheck,
    title: "Permits & Inspections",
    description: "We pull all required permits and schedule inspections so everything is done by the book.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why LUME</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">Why Choose Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1 text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
