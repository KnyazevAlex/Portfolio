'use client';

import BlurFade from "@/components/magicui/blur-fade";
import TiltCard from "@/components/3d/tilt-card";
import {motion} from "motion/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {useEffect, useState} from "react";


const Education = ({fadeDelay} : {fadeDelay: number}) => {
    const { resolvedTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <motion.section id="education">
            <div className="flex items-center min-h-0 flex-col gap-y-6">
                <BlurFade delay={fadeDelay * 7}>
                    <h2 className="text-xl font-bold">Education</h2>
                </BlurFade>
                <div className="flex items-center flex-col gap-8">
                    <BlurFade delay={fadeDelay * 7}>
                    <p className=" font-bold">Concord High School, Class of 2029</p>
                    </BlurFade>
                    <motion.div
                     initial={{ rotateX: 0, rotateY: 0, z: 0 }}
                    whileHover={{ rotateX: 20, rotateY: 10, z: 90 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                    {isMounted && resolvedTheme &&
                    <BlurFade delay={fadeDelay * 8}>
                    <TiltCard>
                   
                    <Image
                        src={resolvedTheme === "dark" ? "/school-logo-dark.png" : "/school-logo.png"}
                        alt="Concord High School"
                        width={200}
                        height={200}
                        className="rounded-lg shadow-lg"
                    />
    
                    </TiltCard>
                    </BlurFade>
                    }
                
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Education;