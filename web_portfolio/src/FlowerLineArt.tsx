import { motion } from "framer-motion"

/**
 * 5-petal flower line art: [LARGE]
 * - stroke color cycles between the colors in the palette
 * - flower slowly rotates left and right
 */
export function LargeFlowerLineArt({palette} : {palette: string[]}) {
  const angles = [0, 72, 144, 216, 288]

  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={200}
      height={200}
      xmlns="http://www.w3.org/2000/svg"
      style={{ originX: "100px", originY: "100px" }}
      animate={{ rotate: [-3, 3, -3] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      }}
    >
      {/* Petals */}
      {angles.map((angle, i) => (
        <motion.path
          key={angle}
          d="
            M 100 100
            C 120 60, 140 40, 100 10
            C 60 40, 80 60, 100 100
          "
          fill="none"
          strokeWidth={4}
          strokeLinecap="round"
          transform={`rotate(${angle} 100 100)`}
          animate={{ stroke: palette }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,  // tiny stagger for a shimmer effect
          }}
        />
      ))}
    </motion.svg>
  )
}

/**
 * 5-petal flower line art: [SMALL]
 * - stroke color cycles between the colors in the palette
 * - flower slowly rotates left and right around its own center
 */
export function SmallFlowerLineArt() {
  const angles = [0, 72, 144, 216, 288]
  const palette = ["#69896F"]  // same as the dark green in design system

  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={60}
      height={60}
      xmlns="http://www.w3.org/2000/svg"
      style={{ originX: "50%", originY: "50%" }}
      animate={{ rotate: [-6, 6, -6] }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      }}
    >
      {/* Petals */}
      {angles.map((angle, i) => (
        <motion.path
          key={angle}
          d="
            M 100 100
            C 120 60, 140 40, 100 10
            C 60 40, 80 60, 100 100
          "
          fill="none"
          strokeWidth={5}
          strokeLinecap="round"
          transform={`rotate(${angle} 100 100)`}
          animate={{ stroke: palette }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </motion.svg>
  )
}

/**
 * Smallest static 5-petal flower line art. (used for nav bar's menu options)
 */
export function SmallestFlowerLineArt() {
  const angles = [0, 72, 144, 216, 288]

  return (
    <svg
      viewBox="0 0 200 200"
      width="1.2em"
      height="1.2em"
      xmlns="http://www.w3.org/2000/svg"
    >
      {angles.map((angle) => (
        <path
          key={angle}
          d="
            M 100 100
            C 120 60, 140 40, 100 10
            C 60 40, 80 60, 100 100
          "
          fill="none"
          stroke="#69896F"  // same as the dark green in design system
          strokeWidth={16}
          strokeLinecap="round"
          transform={`rotate(${angle} 100 100)`}
        />
      ))}
    </svg>
  )
}
