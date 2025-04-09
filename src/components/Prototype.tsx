import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Prototype() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="prototype" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Our Prototype</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">Machine Design</h3>
              <img
                src="images/machine.jpg"
                alt="Recycling Machine Prototype"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-600">Our smart Reverse Vending Machine prototype featuring ML-powered sorting technology</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">Mobile App</h3>
              <img
                src="images/App_design.jpg"
                alt="Mobile App Interface"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-600">User-friendly mobile app interface for tracking recycling efforts and rewards</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
