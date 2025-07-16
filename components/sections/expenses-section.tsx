"use client"

import { motion } from "framer-motion"
import { DollarSign, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExpensesSection() {
  const expenses = [
    { category: "機票", item: "來回機票 (兩人份)", cost: "25,354" },
    { category: "住宿", item: "六天五夜住宿 (總費用)", cost: "22,189" },
    { category: "簽證", item: "落地簽證或電子簽證 (兩人份)", cost: "1,600 - 3,000" },
    { category: "交通", item: "機場接送 / Grab (總費用)", cost: "280" },
    { category: "門票", item: "巴拿山太陽世界 (門票+纜車，兩人份)", cost: "2,600" },
    { category: "餐飲", item: "高級餐廳 (La Maison 1888，兩人份)", cost: "10,000 - 16,000" },
    { category: "體驗", item: "Spa & 各種體驗活動", cost: "2,908" },
  ]

  const dailyCosts = [
    { day: 1, cost: "1,120" },
    { day: 2, cost: "1,340 - 1,480" },
    { day: 3, cost: "4,560" },
    { day: 4, cost: "3,468" },
    { day: 5, cost: "11,030 - 17,030" },
    { day: 6, cost: "840" },
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
          花費估算表
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Main Expenses */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Card className="shadow-2xl border-0 overflow-hidden h-full">
            <div className="h-3 bg-gradient-to-r from-green-500 to-blue-500"></div>
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardTitle className="text-xl text-center text-gray-800 flex items-center justify-center">
                <DollarSign className="w-6 h-6 mr-2" />
                主要花費項目
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">類別</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">項目</th>
                      <th className="px-4 py-3 text-right font-semibold text-gray-700">費用 (TWD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map((expense, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-3">
                          <Badge className="bg-red-100 text-red-800">{expense.category}</Badge>
                        </td>
                        <td className="px-4 py-3 text-sm">{expense.item}</td>
                        <td className="px-4 py-3 text-right font-semibold text-green-600">{expense.cost}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4">
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-800">總計預估花費: NT$ 66,787 - 78,187</p>
                  <p className="text-sm text-gray-600 mt-1">(不含伴手禮、購物、小費等個人消費)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Daily Costs */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="text-xl text-center text-gray-800 flex items-center justify-center">
                <Calendar className="w-6 h-6 mr-2" />
                每日花費估算
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {dailyCosts.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="font-semibold text-gray-700">第{day.day}天</span>
                    <span className="font-bold text-green-600">NT$ {day.cost}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Money Saving Tips */}
          <Card className="shadow-2xl border-0 overflow-hidden">
            <div className="h-3 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
              <CardTitle className="text-xl text-center text-gray-800 flex items-center justify-center">
                💡 省錢小貼士
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {[
                  "住宿選擇當地民宿或青年旅館可節省成本",
                  "多嘗試路邊攤美食，便宜又道地",
                  "使用Grab共享交通，比計程車便宜",
                  "景點門票可上網預訂，通常有折扣",
                  "購物時記得議價，特別是在市場",
                ].map((tip, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <span className="text-green-500 font-bold">•</span>
                    <span className="text-gray-700">{tip}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}
