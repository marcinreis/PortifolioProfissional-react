import { motion } from "motion/react"

function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1>Meu Portfolio</h1>
        </motion.div>
    );
}
