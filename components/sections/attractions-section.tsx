"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AttractionsSection() {
  const attractions = [
    {
      name: "山茶半島",
      image:
        "https://images.unsplash.com/photo-1620200422752-a6c8b8b8b8b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Updated image
      description: "島上有一座知名的靈應寺，地理位置優越，不管從寺廟哪個角度都可以眺望到大海。",
      rating: 4.8,
    },
    {
      name: "巴拿山黃金橋",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "由巨大石手托起的金色橋樑，Instagram熱門打卡景點。",
      rating: 4.9,
    },
    {
      name: "會安古鎮",
      image:
        "https://images.unsplash.com/photo-1593693397690-ed401d816ae8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Updated image
      description: "世界文化遺產，保存完好的古老貿易港口，夜晚燈籠璀璨。",
      rating: 4.7,
    },
    {
      name: "美溪沙灘",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "綿延30公里的白沙灘，被美國《富比世》評為世界最美海灘之一。",
      rating: 4.6,
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent mb-4">
          主要景點概覽
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {attractions.map((attraction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group"
          >
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
              <div className="relative overflow-hidden">
                <img
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{attraction.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                  {attraction.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">{attraction.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
