"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PreparationSection() {
  const preparations = [
    {
      icon: "📋",
      title: "簽證資訊",
      content: "台灣護照可申請落地簽證或電子簽證，建議事先申請電子簽證以節省時間。",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "💰",
      title: "匯率與換匯",
      content: "匯率約 1:890 (台幣:越南盾)，建議預備小額越南盾現金。",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "📱",
      title: "必備APP",
      content: "Grab (叫車外送)、Google Maps (導航)、Google翻譯 (溝通)",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "🔌",
      title: "電器資訊",
      content: "電壓220V，兩腳圓型或扁型插頭皆可使用",
      color: "from-orange-500 to-orange-600",
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
          事前準備
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {preparations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group"
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl"
                  >
                    {item.icon}
                  </motion.div>
                  <CardTitle className="text-xl text-gray-800 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
