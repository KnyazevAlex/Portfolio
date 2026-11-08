'use client'

import {useTransform, useMotionValue, useSpring, motion} from "framer-motion";

const TiltCard = ({children, className} : {children: React.ReactNode, className?: string}) => {

    const x = useMotionValue(0); // ranges from -0.5 to 0.5
    const y = useMotionValue(0); // ranges from -0.5 to 0.5

    const motionX = useSpring(x, { stiffness: 300, damping: 20 });
    const motionY = useSpring(y, { stiffness: 300, damping: 20 });

    const rotateX = useTransform(motionY, [-0.5, 0.5], [-15, 15])
    const rotateY = useTransform(motionX, [-0.5, 0.5], [15, -15])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        const rect = e.currentTarget.getBoundingClientRect();
        const formaattedX = (e.clientX - rect.left) / rect.width - 0.5
        const formaattedY = (e.clientY - rect.top) / rect.height - 0.5
        
        x.set(formaattedX);
        y.set(formaattedY);
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    }

    return(
        <div className="persepective: 1000px">
        <motion.div className={className} style={{rotateX, rotateY}} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            <div className="translate-z-20">
                {children}
            </div>
        </motion.div>
        </div>
    )
}

export default TiltCard;