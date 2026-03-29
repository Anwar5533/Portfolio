'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

import TransitionLink from '@/components/TransitionLink';

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo('.experience-item', 
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 95%',
                    },
                }
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="grid gap-14">
                    {MY_EXPERIENCE.map((item) => (
                        <TransitionLink
                            key={item.title}
                            href={`/experience/${item.slug}`}
                            className="experience-item block hover:bg-black/5 dark:hover:bg-white/5 p-6 -mx-6 rounded-2xl transition-all cursor-none group"
                        >
                            <p className="text-xl text-muted-foreground group-hover:text-primary transition-colors">
                                {item.company}
                            </p>
                            <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5 transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                                {item.title}
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {item.duration}
                            </p>
                        </TransitionLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
