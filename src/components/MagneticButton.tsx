import { useRef } from "react";
import { gsap } from "gsap";

import "./MagneticButton.css";

export default function MagneticButton() {
    const ref = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { current } = ref;
        if (!current) return;

        const rect = current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(current, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;

        gsap.to(ref.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
        });
    };

    return (
        <button
            ref={ref}
            className="magnetic-button pill"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            Send Message
        </button>
    );
}