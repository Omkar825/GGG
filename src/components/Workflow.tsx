import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Workflow() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    "QR displays on Screen (or) OTP login",
    "User scans QR for machine to get User Info",
    "Deposition inlet opens for plastic deposit",
    "Machine learning model verifies and sorts plastic",
    "Database updates with Eco points",
    "User can choose reward with Eco points(Eg:- Coupons, Money & Eco Friendly Products)"
  ];

  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">How It Works</h2>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center mb-8"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <p className="text-lg text-gray-700">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
