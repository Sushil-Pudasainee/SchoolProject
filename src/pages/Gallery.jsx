

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import "./Gallery.css";

// Section Data with image dimensions
const sections = [
  {
    name: "Annual Program",
    images: [
      { src: "/assets/2.jpg", alt: "Annual Program 1", width: 1200, height: 800 },
      { src: "/assets/4.jpg", alt: "Annual Program 2", width: 800, height: 1200 },
      { src: "/assets/5.jpg", alt: "Annual Program 3", width: 1600, height: 900 },
      { src: "/assets/2.jpg", alt: "Annual Program 4", width: 1200, height: 800 },
      { src: "/assets/4.jpg", alt: "Annual Program 5", width: 800, height: 1200 },
      { src: "/assets/5.jpg", alt: "Annual Program 6", width: 1600, height: 900 },
      { src: "/assets/2.jpg", alt: "Annual Program 7", width: 1200, height: 800 },
      { src: "/assets/4.jpg", alt: "Annual Program 8", width: 800, height: 1200 },
      { src: "/assets/5.jpg", alt: "Annual Program 9", width: 1600, height: 900 },
      { src: "/assets/2.jpg", alt: "Annual Program 1", width: 1200, height: 800 },
      { src: "/assets/4.jpg", alt: "Annual Program 2", width: 800, height: 1200 },
      { src: "/assets/5.jpg", alt: "Annual Program 3", width: 1600, height: 900 },
      { src: "/assets/2.jpg", alt: "Annual Program 4", width: 1200, height: 800 },
      { src: "/assets/4.jpg", alt: "Annual Program 5", width: 800, height: 1200 },
      { src: "/assets/5.jpg", alt: "Annual Program 6", width: 1600, height: 900 },
      { src: "/assets/2.jpg", alt: "Annual Program 7", width: 1200, height: 800 },
      { src: "/assets/4.jpg", alt: "Annual Program 8", width: 800, height: 1200 },
      { src: "/assets/5.jpg", alt: "Annual Program 9", width: 1600, height: 900 },
      { src: "/assets/2.jpg", alt: "Annual Program 1", width: 1200, height: 800 },
      { src: "/assets/4.jpg", alt: "Annual Program 2", width: 800, height: 1200 },
      { src: "/assets/2.jpg", alt: "Annual Program 1", width: 1200, height: 800 },
      { src: "/assets/2.jpg", alt: "Annual Program 1", width: 1200, height: 800 },
      { src: "/assets/2.jpg", alt: "Annual Program 1", width: 1200, height: 800 },
      { src: "/assets/2.jpg", alt: "Annual Program 1", width: 1200, height: 800 },
      { src: "/assets/2.jpg", alt: "Annual Program 1", width: 1100, height: 700 },
     
    ],
  },
  {
    name: "School Program",
    images: [
      { src: "/assets/4.jpg", alt: "School Program 1", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "School Program 2", width: 800, height: 1200 },
      { src: "/assets/7.jpg", alt: "School Program 3", width: 1000, height: 700 },
      { src: "/assets/4.jpg", alt: "School Program 4", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "School Program 5", width: 800, height: 1200 },
      { src: "/assets/7.jpg", alt: "School Program 6", width: 1000, height: 700 },
      { src: "/assets/4.jpg", alt: "School Program 7", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "School Program 8", width: 800, height: 1200 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/4.jpg", alt: "School Program 1", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "School Program 2", width: 800, height: 1200 },
      { src: "/assets/7.jpg", alt: "School Program 3", width: 1000, height: 700 },
      { src: "/assets/4.jpg", alt: "School Program 4", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "School Program 5", width: 800, height: 1200 },
      { src: "/assets/7.jpg", alt: "School Program 6", width: 1000, height: 700 },
      { src: "/assets/4.jpg", alt: "School Program 7", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "School Program 8", width: 800, height: 1200 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
    ],
  },
  {
    name: "Picnic",
    images: [
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
      { src: "/assets/7.jpg", alt: "School Program 9", width: 1000, height: 700 },
    ],
  },
  {
    name: "Tour",
    images: [
      { src: "/assets/4.jpg", alt: "Tour 1", width: 1000, height: 700 },
      { src: "/assets/4.jpg", alt: "Tour 2", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "Tour 3", width: 1000, height: 700 },
      { src: "/assets/4.jpg", alt: "Tour 4", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "Tour 5", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "Tour 6", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "Tour 7", width: 1000, height: 700 },
      { src: "/assets/4.jpg", alt: "Tour 8", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "Tour 9", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "Tour 1", width: 1000, height: 700 },
      { src: "/assets/4.jpg", alt: "Tour 2", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "Tour 3", width: 1000, height: 700 },
      { src: "/assets/4.jpg", alt: "Tour 4", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "Tour 5", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "Tour 6", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "Tour 7", width: 1000, height: 700 },
      { src: "/assets/4.jpg", alt: "Tour 8", width: 800, height: 1200 },
      { src: "/assets/4.jpg", alt: "Tour 9", width: 800, height: 1200 },
    ],
  },
]

// Google-style Masonry Gallery Component
function MasonryGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [columns, setColumns] = useState([])
  const containerRef = useRef(null)

  // Calculate number of columns based on container width
  const getNumColumns = (containerWidth) => {
    if (containerWidth < 640) return 2 // sm
    if (containerWidth < 1024) return 3 // md
    return 4 // lg and above
  }

  // Distribute images among columns optimally
  const distributeImages = useCallback((containerWidth, numColumns) => {
    if (!containerWidth) return []

    const columnWidth = containerWidth / numColumns
    const columnHeights = new Array(numColumns).fill(0)
    const columns = Array.from({ length: numColumns }, () => [])

    images.forEach((image) => {
      // Calculate scaled height maintaining aspect ratio
      const aspectRatio = image.width / image.height
      const scaledHeight = columnWidth / aspectRatio

      // Find the shortest column
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights))

      // Add image to shortest column
      columns[shortestColumnIndex].push({
        ...image,
        scaledHeight,
        width: columnWidth,
        height: scaledHeight,
      })

      // Update column height
      columnHeights[shortestColumnIndex] += scaledHeight + 8 // 8px for gap
    })

    return columns
  }, [images])

  // Handle resize and initial layout
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const numColumns = getNumColumns(containerWidth)
        const newColumns = distributeImages(containerWidth, numColumns)
        setColumns(newColumns)
      }
    }

    handleResize()

    const resizeObserver = new ResizeObserver(handleResize)
    const currentContainer = containerRef.current;
  //   if (containerRef.current) {
  //     resizeObserver.observe(containerRef.current)
  //   }

  //   return () => {
  //     if (containerRef.current) {
  //       resizeObserver.unobserve(containerRef.current)
  //     }
  //   }
  // }, []) //Corrected dependency

  if (currentContainer) {
    resizeObserver.observe(currentContainer)
}

return () => {
    if (currentContainer) {
        resizeObserver.unobserve(currentContainer)
    }
}
}, [distributeImages])
  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto px-4">
      <div className="flex gap-2">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 flex flex-col gap-2">
            {column.map((image, imageIndex) => (
              <motion.div
                key={`${image.src}-${imageIndex}`}
                className="relative overflow-hidden rounded-lg bg-gray-100"
                style={{
                  height: image.scaledHeight,
                  width: "100%",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: (columnIndex * column.length + imageIndex) * 0.05,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:opacity-95 transition-opacity cursor-pointer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
      </AnimatePresence>
    </div>
  )
}

// Enhanced Image Modal Component
function ImageModal({ image, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-contain" />
        <button
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
          onClick={onClose}
        >
          <X size={24} />
        </button>
      </motion.div>
    </motion.div>
  )
}

// Main Gallery Component
export default function Gallery() {
  const [selectedSection, setSelectedSection] = useState(sections[0])

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-200 to-sky-300">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Our Gallery</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {sections.map((section) => (
            <motion.button
              key={section.name}
              className={`px-4 py-2 rounded-full text-white transition-colors ${
                selectedSection.name === section.name ? "bg-sky-700 shadow-lg" : "bg-sky-800 hover:bg-sky-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSection(section)}
            >
              {section.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSection.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MasonryGallery images={selectedSection.images} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

