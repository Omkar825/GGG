import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: "Omkara Anjaneya Kumar",
      role: "Founder",
      image: "/Omkar.png",
      github: "https://github.com/Omkar825",
      linkedin: "https://www.linkedin.com/in/omkar-anjaneya-kumar/",
      email: "mailto:omkarratnala2565@gmail.com",
    },
    {
      name: "Pavan Siva Kumar",
      role: "Founder",
      image: "/Pavan.png",
      github: "https://github.com/Pavan8114",
      linkedin: "https://www.linkedin.com/in/somana-pavan-siva-kumar/",
      email: "mailto:pavansivakumar27@gmail.com",
    },
    {
      name: "Jnapika Naga Deepthi",
      role: "Marketing Lead",
      image: "/Deepthi.png",
      github: "https://github.com/Jnapikapotturi?tab=repositories",
      linkedin: "https://www.linkedin.com/in/jnapika-naga-deepthi-potturi-53aa42268/",
      email: "mailto:pdeepthi.1902@gmail.com",
    },
    {
      name: "Yuva Rami Reddy",
      role: "Logistics Lead",
      image: "/Yuva.png",
      github: "https://github.com/Yuva9848",
      linkedin: "https://www.linkedin.com/in/yuva-rami-reddy/",
      email: "mailto:gorakayuvaramireddy@gmail.com",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.email} className="text-gray-600 hover:text-green-600">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
