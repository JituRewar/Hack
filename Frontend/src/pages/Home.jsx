import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-800">

      {/* 🔷 NAVBAR */}
      <div className="flex justify-between items-center px-8 py-5 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <h1 className="text-xl font-semibold tracking-tight">
          Modular Commons
        </h1>

        <div className="space-x-6 flex items-center">
          <Link to="/login" className="text-gray-600 hover:text-black transition">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl transition shadow-sm"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* 🔷 HERO SECTION */}
      <section className="flex flex-col items-center text-center mt-24 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold max-w-3xl leading-tight"
        >
          The Smart Operating System for Your Community
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mt-6 max-w-xl text-lg"
        >
          Manage members, resources, and real-time collaboration —
          all in one unified, intelligent platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4"
        >
          <Link
            to="/signup"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl text-lg shadow-md transition"
          >
            Start for Free
          </Link>

          <button className="px-6 py-3 rounded-2xl border text-gray-700 hover:bg-gray-100 transition">
            Live Demo
          </button>
        </motion.div>
      </section>

      {/* 🔷 FEATURES SECTION */}
      <section className="mt-28 px-10 grid md:grid-cols-3 gap-6">

        {[
          {
            title: "Dynamic Membership",
            desc: "Manage roles, permissions, and lifecycle with full audit logs."
          },
          {
            title: "Smart Resource Booking",
            desc: "Avoid conflicts with intelligent scheduling and approvals."
          },
          {
            title: "Real-Time Collaboration",
            desc: "Live activity feeds, notifications, and updates instantly."
          }
        ].map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-gray-500 mt-2 text-sm">{feature.desc}</p>
          </motion.div>
        ))}

      </section>

      {/* 🔥 AI INSIGHTS SECTION (WINNER FEATURE) */}
      <section className="mt-28 px-10 text-center">

        <h2 className="text-3xl font-bold">
          Powered by Smart Insights ⚡
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Get intelligent recommendations on resource usage, booking patterns,
          and community engagement.
        </p>

        <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm max-w-2xl mx-auto text-left">
          <p className="text-sm text-gray-600">
            📊 “Projector usage peaks on Fridays — consider pre-booking.”
          </p>
          <p className="text-sm text-gray-600 mt-2">
            ⚠️ “Room A is overbooked — try shifting to Room B.”
          </p>
        </div>

      </section>

      {/* 🔷 FOOTER */}
      <footer className="mt-28 py-10 text-center text-gray-500 text-sm">
        © 2026 Modular Commons — Built for Hackathon 🚀
      </footer>

    </div>
  );
}

export default Home;