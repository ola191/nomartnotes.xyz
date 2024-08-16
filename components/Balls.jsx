import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const balls = [
    { id: 1, gradient: 'bg-gradient-to-br from-[#C1BEB8] to-[#EEEAE4]', size: 200, right: 550, top: 125 },
    { id: 2, gradient: 'bg-gradient-to-br from-[#C1BEB8] to-[#EEEAE4]', size: 300, right: 300, top: 275 },
    { id: 3, gradient: 'bg-gradient-to-br from-[#C1BEB8] to-[#EEEAE4]', size: 180, right: 50, top: 300 },
    { id: 4, gradient: 'bg-gradient-to-br from-[#C1BEB8] to-[#EEEAE4]', size: 150, right: 450, top: 475 },
    { id: 5, gradient: 'bg-gradient-to-br from-[#C1BEB8] to-[#EEEAE4]', size: 250, right: 200, top: 550 },
];

export default function Balls() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [initialX, setInitialX] = useState(null);
    const [initialY, setInitialY] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (event) => {
            if (initialX === null && initialY === null) {
                setInitialX(event.clientX);
                setInitialY(event.clientY);
                return;
            }
            const deltaX = event.clientX - initialX;
            const deltaY = event.clientY - initialY;
            x.set(deltaX);
            y.set(deltaY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [initialX, initialY, x, y]);

    const ballX = useTransform(x, [-windowWidth / 1, windowWidth / 1], [windowWidth / 20, -windowWidth / 20]);
    const ballY = useTransform(y, [-windowHeight / 1, windowHeight / 1], [windowHeight / 20, -windowHeight / 20]);

    return (
        <div className="relative top-0 left-0 w-screen h-screen overflow-hidden">
            {balls.map((ball) => (
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
                        y: ballY
                    }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                />
            ))}
        </div>
    );
}