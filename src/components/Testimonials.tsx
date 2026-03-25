import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    text: "LUME Electric rewired our 1960s home and installed a new 200-amp panel. Professional, clean, and on budget. Highly recommend!",
    stars: 5,
  },
  {
    name: "Mike T.",
    role: "Restaurant Owner",
    text: "They handled all the electrical for our new restaurant build-out. Passed inspection first try. These guys know their stuff.",
    stars: 5,
  },
  {
    name: "Jennifer L.",
    role: "Homeowner",
    text: "Called at 10pm with a sparking outlet — they were at our door in 30 minutes. Fixed the issue and made sure everything was safe. Lifesavers!",
    stars: 5,
  },
  {
    name: "David R.",
    role: "Property Manager",
    text: "We use LUME for all our rental properties. Consistent quality, fair pricing, and they always communicate clearly. Our go-to electricians.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Reviews</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">What Our Customers Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
