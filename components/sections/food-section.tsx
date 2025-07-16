"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FoodSection() {
  const restaurants = [
    {
      name: "Bếp Cuốn Đà Nẵng",
      specialty: "越式生春捲、炸餛飩",
      description: "地道越南料理，新鮮食材搭配傳統做法，價格親民，當地人也愛吃。",
      price: "$$",
      rating: 4.5,
    },
    {
      name: "Mì Quảng Ếch Bếp Trang",
      specialty: "廣南麵（米其林推薦）",
      description: "峴港最著名的廣南麵店，湯頭濃郁，配菜豐富，是必嚐的地方特色。",
      price: "$$",
      rating: 4.8,
    },
    {
      name: "Pizza 4P's",
      specialty: "義式手工披薩",
      description: "日式管理的義式餐廳，使用當地食材製作，環境優雅，適合約會。",
      price: "$$$",
      rating: 4.6,
    },
    {
      name: "Morning Glory",
      specialty: "越式傳統料理",
      description: "會安知名餐廳，提供多樣化越南菜，食材新鮮，烹調精緻。",
      price: "$$$",
      rating: 4.7,
    },
  ]

  const streetFood = [
    { name: "椰子冰", price: "30,000 VND", icon: "🥥" },
    { name: "越式咖啡", price: "25,000 VND", icon: "☕" },
    { name: "烤肉串", price: "15,000 VND/串", icon: "🍢" },
    { name: "越式法國麵包", price: "20,000 VND", icon: "🥖" },
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
          美食推薦
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Restaurants */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {restaurants.map((restaurant, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-red-500 to-yellow-500"></div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600 font-bold">{restaurant.price}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{restaurant.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                  {restaurant.specialty}
                </div>
                <p className="text-gray-600 leading-relaxed">{restaurant.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Street Food */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <Card className="shadow-2xl border-0 overflow-hidden">
          <div className="h-3 bg-gradient-to-r from-orange-500 to-red-500"></div>
          <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
            <CardTitle className="text-2xl text-center text-gray-800 flex items-center justify-center">
              <span className="text-3xl mr-3">🍃</span>
              路邊攤小吃推薦
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {streetFood.map((food, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-3">{food.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{food.name}</h4>
                  <p className="text-green-600 font-semibold">{food.price}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  )
}
