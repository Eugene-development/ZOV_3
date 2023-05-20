"use client"
import { motion } from "framer-motion"
import Action from "./z-module/components/action";

export default function Actions () {
    return (
        <motion.main initial={{opacity:0}} animate= {{opacity:1}}>
            <Action/>
        </motion.main>

    )
}