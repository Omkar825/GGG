import { motion } from 'framer-motion';
import { Recycle } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-green-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Recycle className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">GG²</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex space-x-6"
          >
            <a href="#problem" className="text-gray-600 hover:text-green-600">Problem</a>
            <a href="#solution" className="text-gray-600 hover:text-green-600">Solution</a>
            <a href="#workflow" className="text-gray-600 hover:text-green-600">Workflow</a>
            <a href="#prototype" className="text-gray-600 hover:text-green-600">Prototype</a>
            <a href="#team" className="text-gray-600 hover:text-green-600">Team</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}