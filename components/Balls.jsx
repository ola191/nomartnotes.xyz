import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const balls = [
    { id: 1, gradient: 'bg-gradient-to-br from-[#C1BEB8] to-[#EEEAE4]', size: 200, right: 340, top: 0, opacity: 0.9 },
    { id: 2, gradient: 'bg-gradient-to-br from-[#C1BEB8] to-[#EEEAE4]', size: 300, right: 190, top: 80, opacity: 0.8 },
    { id: 3, gradient: 'bg-gradient-to-br from-[#C1BEB8] to-[#EEEAE4]', size: 180, right: 0, top: 110, opacity: 0.4 },
    { id: 4, gradient: 'bg-gradient-to-br from-[#C1BEB8] to-[#EEEAE4]', size: 150, right: 300, top: 235, opacity: 0.6 },
    { id: 5, gradient: 'bg-gradient-to-br from-[#C1BEB8] to-[#EEEAE4]', size: 250, right: 110, top: 290, opacity: 0.9 },
];

export default function Balls() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 100, damping: 15 });
    const springY = useSpring(y, { stiffness: 100, damping: 15 });

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (event) => {
            x.set(event.clientX - windowWidth / 2);
            y.set(event.clientY - windowHeight / 2);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [windowWidth, windowHeight, x, y]);

    const ballX = useTransform(springX, [-windowWidth / 2, windowWidth / 2], [windowWidth / 20, -windowWidth / 20]);
    const ballY = useTransform(springY, [-windowHeight / 2, windowHeight / 2], [windowHeight / 20, -windowHeight / 20]);

    return (
        <>
            {balls.map((ball, index) => (
                <motion.div
                    key={ball.id}
                    className={`ball ${ball.gradient}`}
                    style={{
                        position: 'absolute',
                        width: `${ball.size}px`,
                        height: `${ball.size}px`,
                        borderRadius: '50%',
                        right: `${ball.right}px`,
                        top: `${ball.top}px`,
                        x: ballX,
                        y: ballY,
                        zIndex: -100,
                        opacity: ball.opacity,
                        scale: 1.2,
                        rotate: 0,
                        filter: 'drop-shadow(0 0 10px rgba(100, 50, 0, 0.25))',
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 50,
                        damping: 10,
                        delay: index * 0.2,
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 360, 0],
                        transition: {
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 5,
                        },
                    }}
                />
            ))}
        </>
    );
}
