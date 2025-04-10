import { motion } from 'framer-motion';
import { Recycle } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingBottles = {
    animate: {
      y: [-20, 20],
      rotate: [-5, 5],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  const scrollToProblem = () => {
    const problemSection = document.getElementById('problem');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen bg-gradient-to-b from-green-50 to-green-100 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${i * 25}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-500, 500],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * -3,
            }}
          >
            <Recycle className="text-green-200 w-16 h-16 opacity-20" />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10"
      >
        {/* Floating bottles decoration */}
        <motion.div
          variants={floatingBottles}
          animate="animate"
          className="absolute -left-20 top-0"
        >
          <Recycle className="text-green-600 w-24 h-24 opacity-20" />
        </motion.div>
        <motion.div
          variants={floatingBottles}
          animate="animate"
          className="absolute -right-20 bottom-0"
        >
          <Recycle className="text-green-600 w-24 h-24 opacity-20" />
        </motion.div>

        {/* Glowing background effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-radial from-green-200 to-transparent rounded-full blur-3xl opacity-20"
        />

        <div className="text-center relative">
          <motion.h1
            variants={itemVariants}
            className="text-7xl font-bold text-green-800 mb-8"
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          >
            Green Guardian GO
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="relative inline-block"
          >
            <p className="text-3xl text-gray-600 mb-12">
              Turn your plastic in, watch the nature win
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute bottom-0 left-0 h-0.5 bg-green-500 opacity-50"
            />
          </motion.div>

          <motion.button
            onClick={scrollToProblem}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1.2
            }}
            className="w-16 h-16 bg-green-600 rounded-full mx-auto mt-16 flex items-center justify-center cursor-pointer hover:bg-green-700 transition-all"
          >
            <motion.div
              animate={{ 
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-white text-3xl"
            >
              ↓
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
