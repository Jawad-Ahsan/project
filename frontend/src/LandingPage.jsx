import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaShieldAlt,
  FaMedal,
  FaUserShield,
  FaGlobeAmericas,
} from "react-icons/fa";
import {
  GiMissileSwarm,
  GiJetFighter,
  GiRadarSweep,
  GiCompass,
  GiSatelliteCommunication,
} from "react-icons/gi";
import { MdSecurity, MdMilitaryTech } from "react-icons/md";
import { RiShieldUserLine } from "react-icons/ri";
import { IoMdRibbon } from "react-icons/io";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "backOut" },
  },
};

const LandingPage = () => {
  // Intersection observers with increased threshold and delay
  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [featureRef, featureInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [statsRef, statsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [newsRef, newsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Sample data
  const features = [
    {
      icon: <GiMissileSwarm className="text-4xl" />,
      title: "Advanced Weaponry",
      description:
        "Cutting-edge military technology for superior defense capabilities.",
    },
    {
      icon: <FaUserShield className="text-4xl" />,
      title: "Elite Training",
      description:
        "World-class training programs for our armed forces personnel.",
    },
    {
      icon: <GiRadarSweep className="text-4xl" />,
      title: "Surveillance Systems",
      description: "State-of-the-art surveillance for 24/7 threat detection.",
    },
    {
      icon: <GiSatelliteCommunication className="text-4xl" />,
      title: "Satellite Intelligence",
      description: "Global satellite network for real-time intelligence.",
    },
  ];

  const stats = [
    { number: "250K+", label: "Active Personnel", icon: <RiShieldUserLine /> },
    { number: "5K+", label: "Aircraft Fleet", icon: <GiJetFighter /> },
    { number: "85+", label: "Countries Served", icon: <FaGlobeAmericas /> },
    { number: "75+", label: "Years of Service", icon: <IoMdRibbon /> },
  ];

  const newsItems = [
    {
      title: "Joint Military Exercise Concludes Successfully",
      date: "May 15, 2023",
      excerpt:
        "The annual multinational military exercise demonstrated enhanced interoperability between allied forces.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTLGo4spA_5Ypfi-5IU_ASiGKdGd_nRpDYA&s",
    },
    {
      title: "New Defense System Deployment Announced",
      date: "April 28, 2023",
      excerpt:
        "The military has begun deploying the next-generation missile defense system across strategic locations.",
      image:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDvnj6cQ7seU/v1/-1x-1.webp",
    },
    {
      title: "Veterans Recognition Program Launched",
      date: "April 10, 2023",
      excerpt:
        "A new initiative to honor and support our retired military personnel has been announced.",
      image:
        "https://ubcmvp.org/wp-content/uploads/2022/01/UBC-Military-Veterans-Program.png",
    },
  ];
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80')",
        }}
      >
        <motion.div
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          className="text-center px-4 z-10"
        >
          <motion.h1
            variants={fadeInDown}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            DEFENDING OUR NATION'S{" "}
            <span className="text-yellow-400">FREEDOM</span>
          </motion.h1>

          <motion.p
            variants={fadeInLeft}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Committed to excellence in national defense with cutting-edge
            technology and highly trained personnel.
          </motion.p>

          <motion.div
            variants={fadeInRight}
            className="flex gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg"
            >
              Learn More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-gray-800 text-white font-bold py-3 px-6 border border-white rounded-lg"
            >
              Join Us
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent"
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
        />
      </section>

      {/* Features Section */}
      <section ref={featureRef} className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={featureInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInDown}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              OUR <span className="text-yellow-400">CAPABILITIES</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-3xl mx-auto">
              Leveraging advanced technology and strategic expertise to maintain
              national security.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={featureInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2, delayChildren: 0.3 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ y: -10 }}
                className="bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <motion.div
                  className="text-yellow-400 mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-8 rounded-lg text-center"
              >
                <motion.div
                  className="text-yellow-400 text-4xl mb-4 flex justify-center"
                  whileHover={{ rotate: 10 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.p
                  className="text-4xl font-bold mb-2"
                  initial={{ scale: 0.8 }}
                  animate={statsInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-xl">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section ref={newsRef} className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate={newsInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInDown}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              LATEST <span className="text-yellow-400">UPDATES</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl max-w-3xl mx-auto">
              Stay informed about our latest initiatives and operations.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={newsInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2, delayChildren: 0.3 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                whileHover={{ y: -10 }}
                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              >
                <motion.div
                  className="h-48 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </motion.div>
                <div className="p-6">
                  <p className="text-gray-400 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.excerpt}</p>
                  <button className="text-yellow-400 font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
            className="bg-gray-800 p-12 rounded-xl"
          >
            <motion.div whileHover={{ rotate: 15 }} className="inline-block">
              <GiCompass className="text-5xl text-yellow-400 mx-auto mb-6" />
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
            >
              READY TO <span className="text-yellow-400">SERVE</span> YOUR
              COUNTRY?
            </motion.h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our elite forces and be part of something greater than
              yourself.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(234, 179, 8, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg"
            >
              Enlist Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaShieldAlt className="mr-2 text-yellow-400" /> DEFENSE FORCE
              </h3>
              <p className="text-gray-400">
                Protecting our nation with honor, courage, and commitment since
                1947.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Branches</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    Army
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    Navy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    Air Force
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-400">
                    Marines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Defense Headquarters</li>
                <li className="text-gray-400">123 Military Way</li>
                <li className="text-gray-400">Washington, DC 20500</li>
                <li className="text-gray-400">info@defenseforce.mil</li>
              </ul>
            </div>
          </motion.div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} National Defense Force. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
