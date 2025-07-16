"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DollarSign, Utensils, Camera, Calendar, CheckCircle, Heart, Navigation } from "lucide-react"

// Import individual section components
import { CoverSection } from "@/components/sections/cover-section"
import { PreparationSection } from "@/components/sections/preparation-section"
import { ChecklistSection } from "@/components/sections/checklist-section"
import { ItinerarySection } from "@/components/sections/itinerary-section"
import { AttractionsSection } from "@/components/sections/attractions-section"
import { FoodSection } from "@/components/sections/food-section"
import { ExpensesSection } from "@/components/sections/expenses-section"
import { NotesSection } from "@/components/sections/notes-section"

export default function VietnamTravelGuide() {
  const [currentSection, setCurrentSection] = useState("cover")
  const [isLoading, setIsLoading] = useState(true)
  const [showFloatingElements, setShowFloatingElements] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setShowFloatingElements(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const sections = [
    { id: "cover", title: "封面", icon: Heart },
    { id: "preparation", title: "事前準備", icon: CheckCircle },
    { id: "checklist", title: "攜帶清單", icon: CheckCircle },
    { id: "itinerary", title: "行程表", icon: Calendar },
    { id: "attractions", title: "景點概覽", icon: Camera },
    { id: "food", title: "美食推薦", icon: Utensils },
    { id: "expenses", title: "花費估算", icon: DollarSign },
    { id: "notes", title: "注意事項", icon: Navigation },
  ]

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-yellow-400 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-white text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="text-6xl mb-4"
          >
            🪷
          </motion.div>
          <h2 className="text-2xl font-bold">載入中...</h2>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      {/* Floating Background Elements */}
      <AnimatePresence>
        {showFloatingElements && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 0.1,
                  y: 0,
                  ...floatingAnimation,
                }}
                className="fixed text-6xl text-red-500 pointer-events-none z-0"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                🪷
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50 border-b-4 border-red-500"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent"
            >
              越南峴港自由行
            </motion.h1>
            <div className="flex space-x-2 overflow-x-auto">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentSection(section.id)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                    currentSection === section.id
                      ? "bg-red-500 text-white shadow-lg"
                      : "bg-white text-red-600 hover:bg-red-50"
                  }`}
                >
                  <section.icon className="w-4 h-4 inline mr-1" />
                  {section.title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-20">
        <AnimatePresence mode="wait">
          {currentSection === "cover" && <CoverSection key="cover" />}
          {currentSection === "preparation" && <PreparationSection key="preparation" />}
          {currentSection === "checklist" && <ChecklistSection key="checklist" />}
          {currentSection === "itinerary" && <ItinerarySection key="itinerary" />}
          {currentSection === "attractions" && <AttractionsSection key="attractions" />}
          {currentSection === "food" && <FoodSection key="food" />}
          {currentSection === "expenses" && <ExpensesSection key="expenses" />}
          {currentSection === "notes" && <NotesSection key="notes" />}
        </AnimatePresence>
      </div>

      {/* Floating Action Button */}
      
    </div>
  )
}
