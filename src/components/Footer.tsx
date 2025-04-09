import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">About GG²</h3>
            <p className="text-green-100">
              Green Guardian GO is revolutionizing plastic recycling through smart technology
              and user incentives, making environmental conservation accessible and rewarding.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#problem" className="text-green-100 hover:text-white">Problem</a></li>
              <li><a href="#solution" className="text-green-100 hover:text-white">Solution</a></li>
              <li><a href="#workflow" className="text-green-100 hover:text-white">Workflow</a></li>
              <li><a href="#team" className="text-green-100 hover:text-white">Team</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+918328669439" className="text-green-100 hover:text-white">+91 8328669439</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:omkarratnala2565@gmail.com" className="text-green-100 hover:text-white">omkarratnala2565@gmail.com</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-green-100">India</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-100">© 2024 Green Guardian GO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}