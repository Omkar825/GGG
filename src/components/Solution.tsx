import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Recycle, Award, Smartphone, Building } from 'lucide-react';

export default function Solution() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Recycle className="h-8 w-8 text-green-600" />,
      title: "Smart RVMs",
      description: "Uses smart Reverse Vending Machines for plastic collection"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Reward System",
      description: "Provides reward-based collection, encouraging user participation"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "Mobile Integration",
      description: "Integrates with a mobile app for tracking recycling efforts"
    },
    {
      icon: <Building className="h-8 w-8 text-green-600" />,
      title: "Institutional Support",
      description: "Helps institutions improve sustainability goals"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Our Solution</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}