"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ChecklistSection() {
  const [checkedItems, setCheckedItems] = useState<number[]>([])

  const checklistItems = [
    "護照（有效期6個月以上）",
    "簽證申請文件",
    "換匯現金",
    "信用卡",
    "機票",
    "住宿憑證",
    "保險證明",
    "手機/充電器",
    "行動電源",
    "插頭轉接器",
    "輕便防水外套",
    "遮陽帽",
    "墨鏡",
    "防曬乳",
    "輕便好走鞋",
    "常用藥品",
    "口罩",
    "個人衛生用品",
  ]

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent mb-4">
          旅行攜帶檢查清單
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
      </motion.div>

      <Card className="max-w-4xl mx-auto shadow-2xl border-0 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-4">
            {checklistItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => toggleCheck(index)}
              >
                <motion.div
                  animate={{
                    scale: checkedItems.includes(index) ? [1, 1.2, 1] : 1,
                    rotate: checkedItems.includes(index) ? 360 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    checkedItems.includes(index) ? "bg-green-500 border-green-500 text-white" : "border-gray-300"
                  }`}
                >
                  {checkedItems.includes(index) && <CheckCircle className="w-4 h-4" />}
                </motion.div>
                <span
                  className={`${
                    checkedItems.includes(index) ? "line-through text-gray-500" : "text-gray-800"
                  } transition-all`}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4">
              <p className="text-lg font-semibold text-gray-700">
                完成進度: {checkedItems.length}/{checklistItems.length}(
                {Math.round((checkedItems.length / checklistItems.length) * 100)}%)
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(checkedItems.length / checklistItems.length) * 100}%` }}
                  className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-500"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  )
}
