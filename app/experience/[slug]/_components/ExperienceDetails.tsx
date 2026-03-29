'use client';
import TransitionLink from '@/components/TransitionLink';
import { IExperience } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';

interface Props {
    exp: IExperience;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ExperienceDetails = ({ exp }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.from('.fade-in-later', {
                opacity: 0,
                y: 30,
                stagger: 0.1,
                delay: 0.2,
                duration: 0.8,
                ease: "power2.out",
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pt-5 pb-14 min-h-screen">
            <div className="container" ref={containerRef}>
                <TransitionLink
                    back
                    href="/"
                    className="mb-16 inline-flex gap-2 items-center group h-12"
                >
                    <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
                    Back
                </TransitionLink>

                <div className="relative w-full">
                    <div className="flex flex-col items-start gap-4 mx-auto mb-16 max-w-[800px]">
                        <h1 className="fade-in-later text-4xl md:text-[60px] leading-none font-anton overflow-hidden text-primary">
                            <span className="inline-block">{exp.company}</span>
                        </h1>
                        <h2 className="fade-in-later text-2xl md:text-[40px] leading-none font-anton overflow-hidden text-muted-foreground">
                            {exp.title}
                        </h2>
                        <div className="fade-in-later text-xl font-medium mt-2 bg-black/5 dark:bg-white/10 px-6 py-2 rounded-full border border-black/10 dark:border-white/10">
                            {exp.duration}
                        </div>
                    </div>

                    <div className="max-w-[800px] space-y-6 pb-20 mx-auto">
                        <div className="fade-in-later">
                            <p className="text-muted-foreground font-anton mb-6 text-2xl uppercase tracking-widest border-b border-black/10 dark:border-white/10 pb-4">
                                Strategic Achievements
                            </p>
                            
                            <ul className="space-y-6">
                                {exp.description.map((bullet, idx) => (
                                    <li key={idx} className="fade-in-later flex items-start gap-4 px-2 py-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                        <CheckCircle2 className="shrink-0 text-primary mt-1 size-6" />
                                        <p className="text-xl leading-relaxed text-foreground/90">{bullet}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExperienceDetails;
