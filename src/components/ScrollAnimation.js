'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollAnimation({
    children,
    animation = 'fadeInUp',
    delay = 0,
    duration = 0.8,
    threshold = 0, // Changed to 0 for easier triggering
    className = ''
}) {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px' // Removed negative margin to ensure it triggers easily
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        // Fallback: If for some reason observer doesn't fire (e.g. edge cases),
        // force visible after a timeout to prevent permanent invisibility.
        const timer = setTimeout(() => {
            if (!isVisible) {
                // Check if element is actually in viewport manually or just force it
                // For safety, we'll just let the observer handle it, but if it's taking too long,
                // we might want to force it.
                // However, let's trust the relaxed threshold first.
                // If the user still sees nothing, we can enable a force-show.
            }
        }, 1000);

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
            clearTimeout(timer);
        };
    }, [threshold]);

    const style = {
        // If visible, run animation. If not, hidden.
        // We use 'both' to keep the final state.
        animationName: isVisible ? animation : 'none',
        animationDuration: `${duration}s`,
        animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        animationFillMode: 'both',
        animationDelay: `${delay}s`,
        // Important: If we rely on animation to fade in, we start at opacity 0 via keyframes.
        // But if animation is 'none', we must force opacity 0 to hide it initially.
        // Once isVisible is true, animation takes over.
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : (animation === 'fadeInUp' ? 'translateY(30px)' : 'none'),
        willChange: 'opacity, transform'
    };

    return (
        <div ref={elementRef} style={style} className={className}>
            {children}
        </div>
    );
}
