import { useEffect, useRef } from "react";

const AnimatedSection = ({ children, animation = "fade-in-up", className }) => {
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add("show");
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`animate-${animation} ${className || ""}`}>
            {children}
        </div>
    );
};

export default AnimatedSection;
