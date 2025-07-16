"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function CoverSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-yellow-400 flex items-center justify-center text-white relative overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            🪷
          </motion.div>
        ))}
      </div>

      <div className="text-center z-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-8 drop-shadow-2xl mt-14"
        >
          越南-峴港 
        </motion.h1>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="relative mb-8"
        >
          <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-red-500 p-2 shadow-2xl">
            <div
              className="w-full h-full rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://media.istockphoto.com/id/1451115820/zh/%E5%90%91%E9%87%8F/vietnam-travel-landmark-vector-illustrations-set.jpg?s=1024x1024&w=is&k=20&c=2cGE_w7lrrWriRHy5Ieh4LX7dfsWmAqmYojMBRwWurw=')",
              }}
            />
          </div>
        </motion.div>

        {/* Animated Lanterns */}
        <div className="flex justify-center space-x-8 mb-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="w-16 h-20 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full border-4 border-yellow-300 shadow-lg">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-red-400 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl mb-8 drop-shadow-lg"
        >
          探索越南中部的魅力古城
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg opacity-90"
        >
          六天五夜完整攻略 • 美食景點全收錄
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/70" />
      </motion.div>
    </motion.section>
  )
}
