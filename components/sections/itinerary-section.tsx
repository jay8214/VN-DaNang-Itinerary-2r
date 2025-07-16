"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ItinerarySection() {
  const [selectedDay, setSelectedDay] = useState(1)

  const itinerary = [
    {
      day: 1,
      date: "8/3",
      title: "抵達峴港",
      color: "from-red-500 to-pink-500",
      activities: [
        { time: "09:45-11:35", activity: "抵達峴港國際機場 (DAD)", transport: "飛機", cost: "機票費用" },
        { time: "12:00-13:00", activity: "機場接送前往飯店", transport: "預約接送/Grab", cost: "-" },
        { time: "13:00-14:00", activity: "午餐：Bếp Cuốn Đà Nẵng", transport: "Grab", cost: "-" },
        { time: "14:00-14:30", activity: "Check-in Radisson RED Danang", transport: "Grab", cost: "-" },
        { time: "16:00-17:30", activity: "Babylon Spa Massage", transport: "Grab", cost: "-" },
        { time: "18:30-20:00", activity: "晚餐：Thìa Gỗ 峴港餐廳", transport: "Grab", cost: "-" },
        { time: "21:00~", activity: "龍橋噴火", transport: "Grab", cost: "-" },
      ],
      mapSrc: `https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d21275.655322354145!2d108.21194963003869!3d16.057326597308695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x314219bab9b63451%3A0xd7a9441e697a048c!2zRGFuYW5nIEludGVybmF0aW9uYWwgQWlycG9ydCwgxJAuIE5ndXnhu4VuIFbEg24gTGluaCwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMOi2iuWNlw!3m2!1d16.0569804!2d108.2025372!4m5!1s0x314217f4632748f9%3A0xdc14dcdba4c73425!2zQuG6v3AgQ3Xhu5VuIMSQw6AgTuG6tW5nLCAzMS0zMyBUcuG6p24gQuG6oWNoIMSQ4bqxbmcsIFBoxrDhu5tjIE3hu7ksIFPGoW4gVHLDoCwgxJDDoCBO4bq1bmcgNTUwMDAw6LaK5Y2X!3m2!1d16.0579628!2d108.2451505!4m5!1s0x314217e1390921bb%3A0x8484559f28963b1c!2zUmFkaXNzb24gUkVEIERhbmFuZywgOTAgVsO0IE5ndXnDqm4gR2nDoXAsIE3Dom4gVGjDoWksIFPGoW4gVHLDoCwgxJDDoCBO4bq1bmcgNTUwMDAw6LaK5Y2X!3m2!1d16.0808382!2d108.24687229999999!4m5!1s0x31421783eff8331f%3A0x6fcd8714b403a1e!2zQmFieWxvbiBTcGEgTWFzc2FnZSwgMzAgSMOgIELhu5VuZywgUGjGsOG7m2MgTeG7uSwgU8ahbiBUcsOgLCDEkMOgIE7hurVuZyA1NTAwMDDotorljZc!3m2!1d16.0672167!2d108.2441068!4m5!1s0x314219c3b54c18d7%3A0x5028941bdf1ab5f5!2zVGjDrGEgR-G7lyDls7TmuK_ppJDlu7MgNTUwMDAw6LaK5Y2XIMSQw6AgTuG6tW5nLCBOZ8WpIEjDoG5oIFPGoW4sIE3hu7kgQW4sIFBoYW4gVGjDumMgRHV54buHbg!3m2!1d16.052986699999998!2d108.2415777!4m5!1s0x31421996588a512f%3A0x493b652aa06b12e!2zRHJhZ29uIEJyaWRnZSwgxJAuIE5ndXnhu4VuIFbEg24gTGluaCwgUGjGsOG7m2MgTmluaCwgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMOi2iuWNlw!3m2!1d16.0612215!2d108.2296818!5e0!3m2!1szh-TW!2stw!4v1752574022141!5m2!1szh-TW!2stw`,
    },
    {
      day: 2,
      date: "8/4",
      title: "城市漫遊",
      color: "from-blue-500 to-cyan-500",
      activities: [
        {
          time: "09:00-12:00",
          activity: "五行山 (Marble Mountains)/靈應寺",
          transport: "Grab",
          cost: "門票+電梯約 $150",
        },
        {
          time: "12:30-14:00",
          activity: "午餐：Mì Quảng Ếch Bếp Trang (米其林推薦)",
          transport: "Grab",
          cost: "人均約 $250-$400",
        },
        { time: "14:00-14:30", activity: "岘港粉紅教堂", transport: "步行 ~5分鐘", cost: "-" },
        { time: "14:30-15:00", activity: "Han Market", transport: "步行 ~5分鐘", cost: "-" },
        { time: "15:00-16:00", activity: "Cộng Cà Phê 越共咖啡", transport: "步行 ~5分鐘", cost: "-" },
        { time: "18:00-19:30", activity: "晚餐：Pizza 4P's Indochina Da Nang", transport: "步行 ~5分鐘", cost: "-" },
        { time: "21:00~", activity: "山茶夜市", transport: "Grab", cost: "-" },
      ],
      mapSrc: `https://www.google.com/maps/embed?pb=!1m64!1m12!1m3!1d61348.709189048255!2d108.20060089060868!3d16.050209516824964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m49!3e0!4m5!1s0x314217e1390921bb%3A0x8484559f28963b1c!2sRadisson%20RED%20Danang!3m2!1d16.0808382!2d108.24687229999999!4m5!1s0x31420dd4e14b2edb%3A0xbc6e1faf738be4c5!2zTWFyYmxlIE1vdW50YWlucywgSHV54buBbiBUcsOibiBDw7RuZyBDaMO6YSwgSG9hIEhhaSwg5LqU6KGM5bGx6YOh5bO05riv6LaK5Y2X!3m2!1d16.0037104!2d108.2631605!4m5!1s0x314219caeead191d%3A0x7bf5a315d7a2e786!2zTcOsIFF14bqjbmcg4bq-Y2ggQuG6v3AgVHJhbmc!3m2!1d16.062014899999998!2d108.21637039999999!4m5!1s0x314219004ea50851%3A0xba9992412516aa7c!2z5bKY5riv57KJ57SF5pWZ5aCC!3m2!1d16.066682699999998!2d108.2226877!4m5!1s0x31421832397ecc0d%3A0x90b24f8b8cb2873f!2sHan%20Market!3m2!1d16.0681959!2d108.2242217!4m5!1s0x314219ed47ca6e31%3A0x36d8d96f4c838dd2!2zY2FmZSAyMjIgTmd1eeG7hW4gQ8O0bmcgdHLhu6ktIMSQw6AgTuG6tW5n!3m2!1d16.0664379!2d108.2364807!4m5!1s0x3142193cf50bef09%3A0x6f1b1de8e432c22e!2sPizza%204P's%20Indochina%20Da%20Nang!3m2!1d16.0700193!2d108.2249075!4m5!1s0x3142195a335892bd%3A0x8f53976f3c0fe60!2z5bGx6Iy25aSc5biC!3m2!1d16.0616329!2d108.2319775!5e0!3m2!1szh-TW!2stw!4v1752574255629!5m2!1szh-TW!2stw`,
    },
    {
      day: 3,
      date: "8/5",
      title: "巴拿山與黃金佛手橋",
      color: "from-yellow-500 to-orange-500",
      activities: [
        {
          time: "08:00-17:00",
          activity: "巴拿山太陽世界 (Sun World Ba Na Hills)",
          transport: "Grab",
          cost: "門票+纜車約 $1,300/人",
        },
        { time: "-", activity: "中層：歐式花園、小火車、黃金佛手橋", transport: "纜車", cost: "-" },
        { time: "12:00-14:00", activity: "午餐：La Lavande/Aparang/Brasserie", transport: "-", cost: "-" },
        { time: "14:00-17:00", activity: "上層：法國村、幻奇多樂園、旋轉飛天鞦韆", transport: "纜車", cost: "-" },
        { time: "18:30-20:00", activity: "晚餐：Veteran Restaurant or Bé Ni 2", transport: "Grab", cost: "-" },
        { time: "20:00~", activity: "酒吧：Esco Beach Bar 或 Maia beach bar", transport: "步行", cost: "-" },
      ],
      mapSrc: `https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d122699.97831118635!2d108.05751343015294!3d16.046053859140105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x314217e1390921bb%3A0x8484559f28963b1c!2sRadisson%20RED%20Danang!3m2!1d16.0808382!2d108.24687229999999!4m5!1s0x3141f60e6b3844c9%3A0x5c53b85f61797909!2z5be05ou_5bGx5aSq6Zm95LiW55WMIOi2iuWNlyDEkMOgIE7hurVuZywgSMOyYSBWYW5nLCBIw7JhIE5pbmg!3m2!1d16.0265144!2d108.03279719999999!4m5!1s0x314217c82ec7b181%3A0xe9367e38bc69120c!2zVmV0ZXJhbiBSZXN0YXVyYW50LCBExrDGoW5nIMSQw6xuaCBOZ2jhu4csIEFuIEjhuqNpLCBBbiBI4bqjaSBC4bqvYywg5bGx6Iy26YOh5bO05riv6LaK5Y2X!3m2!1d16.0689576!2d108.2425892!4m5!1s0x314217a3b04f5fbb%3A0x2b366b654ca8ffc4!2zRXNjbyBCZWFjaCBCYXIgTG91bmdlICYgUmVzdGF1cmFudCwgVsO0IE5ndXnhu4VuIEdpw6FwLCBQaMaw4bujYyBN4bu5LCB5bGx6Iy26YOh5bO05riv6LaK5Y2X!3m2!1d16.0658995!2d108.246011!5e0!3m2!1szh-TW!2stw!4v1752574423896!5m2!1szh-TW!2stw`,
    },
    {
      day: 4,
      date: "8/6",
      title: "會安古鎮的浪漫",
      color: "from-purple-500 to-indigo-500",
      activities: [
        { time: "10:00-11:00", activity: "前往會安古鎮 (Hoi An Ancient Town)", transport: "Grab", cost: "-" },
        { time: "11:00-12:00", activity: "漫步會安古鎮", transport: "步行", cost: "門票約 $150/人" },
        { time: "12:30-13:30", activity: "午餐：Pho Xua or Madam Khanh", transport: "步行", cost: "-" },
        { time: "14:00-14:30", activity: "Tiệm Chè Xíu (椰子冰)", transport: "步行", cost: "-" },
        { time: "14:30-16:00", activity: "下午茶：Poison Cafe", transport: "Grab", cost: "-" },
        { time: "16:00-17:30", activity: "椰子船", transport: "Grab", cost: "$272/人" },
        {
          time: "18:00-19:30",
          activity: "晚餐：Morning Glory Signature",
          transport: "步行",
          cost: "人均約 $600-$1,000",
        },
        { time: "19:30-20:30", activity: "會安懷河乘船 & 放水燈體驗", transport: "步行", cost: "$292/人" },
      ],
      mapSrc: `https://www.google.com/maps/embed?pb=!1m64!1m12!1m3!1d122742.00153916243!2d108.22727455453484!3d15.97768516953521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m49!3e0!4m5!1s0x314217e1390921bb%3A0x8484559f28963b1c!2sRadisson%20RED%20Danang!3m2!1d16.0808382!2d108.24687229999999!4m5!1s0x31420dd4e1353a7b%3A0xae336435edfcca3!2z5pyD5a6J5biCIOi2iuWNl-W7o-WNl-ecgQ!3m2!1d15.879924099999998!2d108.3267487!4m5!1s0x31420f87b42221e9%3A0xab09886d8af8b19b!2zVGnhu4dtIENow6ggWMOtdSAtIENow6ggTmdvbiBI4buZaSBBbiwgMTU3IFRy4bqnbiBIxrBuZyDEkOG6oW8sIFBoxrDhu51uZyBD4bqpbSBQaOG7lSwgSOG7mWkgQW4sIFF14bqjbmcgTmFtLCDotorljZc!3m2!1d15.8795328!2d108.32393859999999!4m5!1s0x31420f93b1f1a92f%3A0x3f4aea60f62b03ff!2zUE9JU09OIENBRkXMgSAtIFRoZSBPcmlnaW5hbCBIZXJiYWwgQ29mZmVlIExvdW5nZSwgNyBOZ3V54buFbiBUaOG7iyBNaW5oIEtoYWksIFBoxrDhu51uZyBNaW5oIEFuLCBI4buZaSBBbiwgUXXhuqNuZyBOYW0sIOi2iuWNlw!3m2!1d15.8769984!2d108.32570059999999!4m5!1s0x31420d5f3d4b6d37%3A0x1c80488d0ed570db!2zVHJhbmcgY29jb251dCBiYXNrZXQgYm9hdCB0b3VyICggVHJhbmcgQ2FCaSApIOC4peC5iOC4reC4h-C5gOC4o-C4t-C4reC4geC4o-C4sOC4iOC4suC4lOC4oeC4sOC4nuC4o-C5ieC4suC4pyAvIOuwlOq1rOuLiOuwsCDtiKzslrQv44OQ44K544Kx44OD44OI44Oc44O844OILCBWOUdGK0NNMiwgVGjDtG4gVuG6oW4gTMSDbmcsIFThu5UgNCwgVHAuIEjhu5lpIEFuLCBRdeG6o25nIE5hbSwg6LaK5Y2X!3m2!1d15.875928799999999!2d108.374172!4m5!1s0x31420f5defa3fd4f%3A0xd19268473e0395c5!2zTW9ybmluZyBHbG9yeSBTaWduYXR1cmUsIDQxIE5ndXnhu4VuIFBow7pjIENodSwgQW4gSOG7mWksIEjhu5lpIEFuLCBRdeG6o25nIE5hbSA1NjAwMDDotorljZc!3m2!1d15.875921799999999!2d108.3262099!4m5!1s0x31420f27502b3edd%3A0x4f1793b0af2c58ce!2zSG9haSByaXZlciBib2F0LCAzMSBOZ3V54buFbiBQaMO6YyBDaHUsIFBoxrDhu51uZyBNaW5oIEFuLCBI4buZaSBBbiwgUXXhuqNuZyBOYW0sIOi2iuWNlw!3m2!1d15.875740899999998!2d108.3268263!4m5!1s0x314217e1390921bb%3A0x8484559f28963b1c!2zUmFkaXNzb24gUkVEIERhbmFuZywgOTAgVsO0IE5ndXnhu4VuIEdpw6FwLCBNw6BuIFRow6FpLCBTw6FuIFRyw6AsIMSQw6AgTuG6tW5nIDU1MDAwMOi2iuWNlw!3m2!1d16.0808382!2d108.24687229999999!5e0!3m2!1szh-TW!2stw!4v1752574476263!5m2!1szh-TW!2stw`,
    },
    {
      day: 5,
      date: "8/7",
      title: "奢華享受與米其林饗宴",
      color: "from-green-500 to-emerald-500",
      activities: [
        { time: "10:30-12:00", activity: "美溪沙灘", transport: "步行", cost: "-" },
        { time: "12:30-13:30", activity: "午餐：The Temptation", transport: "步行", cost: "-" },
        { time: "14:00-15:30", activity: "Nguon Spa Da Nang", transport: "Grab", cost: "$445" },
        { time: "16:00-17:00", activity: "下午茶：Sơn Trà Marina", transport: "Grab", cost: "-" },
        { time: "17:00-17:30", activity: "山茶半島靈應寺 (Linh Ung Pagoda)", transport: "Grab", cost: "免費" },
        { time: "18:30-20:30", activity: "晚餐：La Maison 1888", transport: "Grab", cost: "套餐人均約 $5,000-$8,000" },
      ],
      mapSrc: `https://www.google.com/maps/embed?pb=!1m64!1m12!1m3!1d122690.28733693082!2d108.19216368059877!3d16.061780145363556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m49!3e0!4m5!1s0x314217e1390921bb%3A0x8484559f28963b1c!2sRadisson%20RED%20Danang!3m2!1d16.0808382!2d108.24687229999999!4m5!1s0x31421782f7fa0ee3%3A0xeafb8ba272ee55ac!2zTXkgS2hlIEJlYWNoLCDls7TmuK8gNTUwMDAw6LaK5Y2X!3m2!1d16.0616944!2d108.24693459999999!4m5!1s0x3142175a37ec6177%3A0xe5b70d45f6bbd6d7!2sThe%20Temptation!3m2!1d16.0734565!2d108.2431275!4m5!1s0x314219f0f5d947c9%3A0x4a4e64ac0562cb20!2zTmd1b24gU3BhIERhIE5hbmcgLSBOZ3Xhu5NuIEhvw6FuZyBL4bq_IFZpw6pt!3m2!1d16.0489688!2d108.2440955!4m5!1s0x314217fb2504d755%3A0x8d1e9493227bb9ef!2zU8ahbiBUcsOgIE1hcmluYQ!3m2!1d16.0968369!2d108.2669597!4m5!1s0x314210c62c63037d%3A0xb168fc4503bf59a3!2z6Z2I5oeJ5a-6!3m2!1d16.00275!2d108.2645895!4m5!1s0x31423d9513ec9199%3A0x5ade8a2bd4daad0d!2z5bO05riv5rSy6Zqb6Zm95YWJ5Y2K5bO25bqm5YGH6YWS5bqX!3m2!1d16.1208274!2d108.3062154!4m5!1s0x314217e1390921bb%3A0x8484559f28963b1c!2zUmFkaXNzb24gUkVEIERhbmFuZywgOTAgVsO0IE5ndXnhu4VuIEdpw6FwLCBNw6BuIFRow6FpLCBTw6FuIFRyw6AsIMSQw6AgTuG6tW5nIDU1MDAwMOi2iuWNlw!3m2!1d16.0808382!2d108.24687229999999!5e0!3m2!1szh-TW!2stw`,
    },
    {
      day: 6,
      date: "8/8",
      title: "最後巡禮與告別",
      color: "from-teal-500 to-cyan-500",
      activities: [
        { time: "09:30-11:00", activity: "Check out / 伴手禮 GO! Đà Nẵng", transport: "Grab", cost: "-" },
        { time: "11:00-11:30", activity: "前往機場", transport: "Grab", cost: "-" },
        { time: "12:55-16:45", activity: "VN → TW BR384", transport: "飛機", cost: "機票費用" },
        { time: "17:00-18:00", activity: "返回溫暖的家!", transport: "計程車", cost: "-" },
      ],
      mapSrc: `https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d30672.139034667947!2d108.20402574155172!3d16.0645879152811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x314217e1390921bb%3A0x8484559f28963b1c!2sRadisson%20RED%20Danang!3m2!1d16.0808382!2d108.24687229999999!4m5!1s0x314219bab9b63451%3A0xd7a9441e697a048c!2zRGFuYW5nIEludGVybmF0aW9uYWwgQWlycG9ydCwgxJDGsOG7nW5nIE5ndXnhu4VuIFbEg24gTGluaCwg5rW35bee6YOh5rW35rSy6YOh5bO05riv6LaK5Y2X!3m2!1d16.0569804!2d108.2025372!5e0!3m2!1szh-TW!2stw!4v1752574761450!5m2!1szh-TW!2stw`,
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
          六天完整行程表
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Day Selector */}
      <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2">
        {itinerary.map((day) => (
          <motion.button
            key={day.day}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedDay(day.day)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedDay === day.day
                ? `bg-gradient-to-r ${day.color} text-white shadow-lg`
                : "bg-white text-gray-600 hover:bg-gray-50 shadow"
            }`}
          >
            第{day.day}天 ({day.date})
          </motion.button>
        ))}
      </div>

      {/* Selected Day Content */}
      <AnimatePresence mode="wait">
        {itinerary.map(
          (day) =>
            selectedDay === day.day && (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="shadow-2xl border-0 overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${day.color}`}></div>
                  <CardHeader className={`bg-gradient-to-r ${day.color} text-white`}>
                    <CardTitle className="text-2xl text-center">
                      第{day.day}天 ({day.date}) - {day.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left font-semibold text-gray-700">時間</th>
                            <th className="px-6 py-4 text-left font-semibold text-gray-700">景點/活動</th>
                            <th className="px-6 py-4 text-left font-semibold text-gray-700">交通</th>
                            <th className="px-6 py-4 text-left font-semibold text-gray-700">費用</th>
                          </tr>
                        </thead>
                        <tbody>
                          {day.activities.map((activity, index) => (
                            <motion.tr
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="border-b hover:bg-gray-50 transition-colors"
                            >
                              <td className="px-6 py-4">
                                <Badge variant="outline" className="font-mono">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {activity.time}
                                </Badge>
                              </td>
                              <td className="px-6 py-4 font-medium">{activity.activity}</td>
                              <td className="px-6 py-4">
                                <Badge className="bg-blue-100 text-blue-800">{activity.transport}</Badge>
                              </td>
                              <td className="px-6 py-4 text-green-600 font-semibold">{activity.cost}</td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
                {day.mapSrc && (
                  <div className="p-6 mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">🗺️ 第{day.day}天主要路線</h3>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={day.mapSrc}
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg shadow-md"
                      ></iframe>
                    </div>
                  </div>
                )}
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </motion.section>
  )
}
