"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectImage } from "@/lib/projects-data";

interface ProjectGalleryProps {
    images: ProjectImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

    // Intersection observer for staggered reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute("data-index"));
                        setVisibleItems((prev) => new Set(prev).add(index));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "60px" }
        );

        const items = galleryRef.current?.querySelectorAll("[data-index]");
        items?.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, [images]);

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (lightboxIndex === null) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightboxIndex(null);
            if (e.key === "ArrowRight") setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
            if (e.key === "ArrowLeft") setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
        };

        // Prevent body scroll when lightbox is open
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKey);
        };
    }, [lightboxIndex, images.length]);

    const openLightbox = useCallback((index: number) => {
        setLightboxIndex(index);
    }, []);

    return (
        <>
            {/* Gallery Grid */}
            <div
                ref={galleryRef}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[240px] lg:auto-rows-[280px]"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        data-index={index}
                        className={`relative overflow-hidden cursor-pointer group rounded-sm ${image.span}`}
                        onClick={() => openLightbox(index)}
                        style={{
                            opacity: visibleItems.has(index) ? 1 : 0,
                            transform: visibleItems.has(index) ? "translateY(0) scale(1)" : "translateY(30px) scale(0.97)",
                            transition: `opacity 0.6s ease-out ${(index % 6) * 0.08}s, transform 0.6s ease-out ${(index % 6) * 0.08}s`,
                        }}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        {/* Hover icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 3h6v6" />
                                    <path d="M9 21H3v-6" />
                                    <path d="M21 3l-7 7" />
                                    <path d="M3 21l7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={() => setLightboxIndex(null)}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/95 backdrop-blur-md animate-[fadeIn_0.2s_ease-out]" />

                    {/* Image container */}
                    <div
                        className="relative z-10 w-[90vw] h-[85vh] flex items-center justify-center animate-[scaleIn_0.3s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[lightboxIndex].src}
                            alt={images[lightboxIndex].alt}
                            fill
                            className="object-contain"
                            sizes="90vw"
                            priority
                        />
                    </div>

                    {/* Close button */}
                    <button
                        className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        onClick={() => setLightboxIndex(null)}
                        aria-label="Fechar"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation buttons */}
                    <button
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
                        }}
                        aria-label="Imagem anterior"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex((lightboxIndex + 1) % images.length);
                        }}
                        aria-label="Próxima imagem"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/60 text-sm font-light tracking-wider">
                        {lightboxIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}
