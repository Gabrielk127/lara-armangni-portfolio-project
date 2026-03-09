"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/projects-data";
import { ProjectGallery } from "@/components/project-gallery";

interface ProjectDetailClientProps {
    project: Project;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);
    const [descVisible, setDescVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Trigger hero animation on mount
        const heroTimer = setTimeout(() => setHeaderVisible(true), 100);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === infoRef.current) setInfoVisible(true);
                        if (entry.target === descRef.current) setDescVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (infoRef.current) observer.observe(infoRef.current);
        if (descRef.current) observer.observe(descRef.current);

        return () => {
            clearTimeout(heroTimer);
            observer.disconnect();
        };
    }, []);

    return (
        <main className="min-h-screen bg-background">
            {/* Back button - fixed */}
            <Link
                href="/"
                className="fixed top-6 left-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md text-foreground text-sm font-medium hover:bg-background transition-colors"
                style={{
                    boxShadow:
                        "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px",
                }}
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                </svg>
                Voltar
            </Link>

            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
                <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Hero content */}
                <div
                    className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24"
                    style={{
                        opacity: headerVisible ? 1 : 0,
                        transform: headerVisible ? "translateY(0)" : "translateY(40px)",
                        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                >
                    <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-3 font-light">
                        {project.category} — {project.year}
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-4">
                        {project.title}
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl font-light max-w-xl">
                        {project.subtitle}
                    </p>
                </div>
            </section>

            {/* Project Info Bar */}
            <section
                ref={infoRef}
                className="border-b border-border"
                style={{
                    opacity: infoVisible ? 1 : 0,
                    transform: infoVisible ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.6s ease-out",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                                Localização
                            </p>
                            <p className="text-foreground font-medium">{project.location}</p>
                        </div>
                        <div>
                            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                                Ano
                            </p>
                            <p className="text-foreground font-medium">{project.year}</p>
                        </div>
                        <div>
                            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                                Área
                            </p>
                            <p className="text-foreground font-medium">{project.area}</p>
                        </div>
                        <div>
                            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                                Categoria
                            </p>
                            <p className="text-foreground font-medium">{project.category}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section
                ref={descRef}
                className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24"
                style={{
                    opacity: descVisible ? 1 : 0,
                    transform: descVisible ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.7s ease-out 0.1s",
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    <div>
                        <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                            Sobre o Projeto
                        </h2>
                        <p className="text-foreground text-lg md:text-xl leading-relaxed font-light">
                            {project.description}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                            Detalhes
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.details}
                        </p>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="h-px bg-border" />
            </div>

            {/* Gallery Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-16 md:py-24">
                <div className="mb-12">
                    <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                        Galeria
                    </h2>
                    <p className="text-foreground text-2xl md:text-3xl font-light">
                        Explore o projeto em detalhes
                    </p>
                </div>

                <ProjectGallery images={project.images} />
            </section>

            {/* Footer with nav to other projects */}
            <section className="border-t border-border">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
                    <div className="text-center">
                        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                            Continue Explorando
                        </p>
                        <Link
                            href="/#technology"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity"
                        >
                            Ver todos os projetos
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
