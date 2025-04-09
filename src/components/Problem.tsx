import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Problem() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">The Problem</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Plastic waste pollution is one of the leading environmental crises worldwide.
              Improper disposal leads to land and water pollution, harming ecosystems and
              human health.
            </p>
            <p className="text-lg text-gray-700">
              Existing recycling efforts are inefficient and lack user incentives, resulting
              in low participation rates and continued environmental degradation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}