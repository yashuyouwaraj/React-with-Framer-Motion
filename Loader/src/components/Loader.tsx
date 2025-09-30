import { motion } from "motion/react"

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <motion.div  transition={{duration:1,repeat:Infinity, ease:"linear"}} animate={{rotate:360}} className="relative w-16 h-16 border-4 border-blue-500 border-solid rounded-full">
            <motion.div animate={{opacity:[1,0.5,1]}} style={{borderTopColor:"transparent"}} transition={{duration:1,repeat:Infinity,ease:"easeInOut"}} className="absolute inset-0 border-4 border-blue-300 border-solid rounded-full">
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Loader