"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function NotesSection() {
  const notes = [
    {
      icon: "🚗",
      title: "交通安全",
      content: "越南交通靠右行駛，摩托車眾多，過馬路時要格外注意安全。建議使用斑馬線，並確認兩邊都無來車再通過。",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: "🍽️",
      title: "用餐禮儀",
      content: "部分高級餐廳需要提前預約，並有服裝規定。建議攜帶長褲和有袖上衣，避免穿著過於隨便。",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🏔️",
      title: "山區氣候",
      content: "巴拿山海拔較高，氣溫比平地低5-10度，建議攜帶薄外套。雨季時山區容易起霧，影響視線。",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: "🏛️",
      title: "寺廟參觀",
      content: "參觀寺廟時請注意服裝，需穿著得體，遮蓋肩膀和膝蓋。進入寺廟前請脫鞋，保持安靜。",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: "💊",
      title: "健康提醒",
      content: "建議攜帶止瀉藥，以防水土不服。多喝瓶裝水，避免生食。防曬措施要做足，蚊蟲較多建議攜帶防蚊液。",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "📱",
      title: "通訊網路",
      content:
        "建議購買當地SIM卡或開通國際漫遊，主要電信商有Viettel、Mobifone、Vinaphone。WiFi在餐廳和咖啡店普遍提供。",
      color: "from-teal-500 to-blue-500",
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
          其他注意事項
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group"
          >
            <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${note.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl"
                  >
                    {note.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                    {note.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{note.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Final Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center mt-16"
      >
        <Card className="max-w-2xl mx-auto shadow-2xl border-0 overflow-hidden">
          <div className="h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
          <CardContent className="p-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-6xl mb-4"
            >
              🪷
            </motion.div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent mb-4">
              祝您在越南峴港有個愉快的旅程！
            </h3>
            <p className="text-lg text-gray-600 italic">Chúc bạn có một chuyến du lịch vui vẻ tại Đà Nẵng!</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  )
}
