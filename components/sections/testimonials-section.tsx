"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const stats = [
  { value: "5+", label: "Anos de experiência" },
  { value: "30+", label: "Projetos desenvolvidos" },
  { value: "3", label: "Premiações nacionais" },
];

// Bio text — all paragraphs joined into a single animated block
const bioText =
  "Sou Lara Armangni, arquiteta e urbanista formada pela Universidade de São Paulo (USP), com especialização em arquitetura sustentável pelo IFEN, França. Cresci rodeada por livros de arte e canteiros de obras — e foi nesse encontro entre o sensível e o técnico que encontrei minha vocação. Meu trabalho parte da escuta: cada projeto começa com uma conversa profunda sobre quem vai habitá-lo, como vive, o que sente. Acredito que o espaço é capaz de transformar rotinas e cultivar bem-estar. Por isso, projeto com atenção ao detalhe construtivo, à luz natural, à materialidade e ao entorno. Atuo em projetos residenciais, culturais e de interiores, sempre aliando rigor técnico a uma estética contemporânea e próxima ao território brasileiro.";

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [descriptionProgress, setDescriptionProgress] = useState(0);

  const rafRef = useRef<number | null>(null);

  const updateAll = useCallback(() => {
    const windowHeight = window.innerHeight;

    // ── 1. Reveal photo + title when section enters viewport ──
    if (sectionRef.current && !isVisible) {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < windowHeight * 0.85) {
        setIsVisible(true);
      }
    }

    // ── 2. Word-by-word blur effect (same as PhilosophySection) ──
    if (bioRef.current) {
      const descRect = bioRef.current.getBoundingClientRect();
      const descTop = descRect.top;
      const descHeight = descRect.height;

      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.2;

      if (descTop < startTrigger && descTop > endTrigger - descHeight) {
        const progress = Math.max(
          0,
          Math.min(1, (startTrigger - descTop) / (startTrigger - endTrigger))
        );
        setDescriptionProgress(progress);
      }
    }
  }, [isVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateAll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateAll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateAll]);

  const bioWords = bioText.split(" ");

  return (
    <section id="about" className="bg-background py-24 md:py-36" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">

        {/* Header Label */}
        <p
          className={`mb-16 text-xs uppercase tracking-[0.25em] text-muted-foreground ${isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
        >
          Sobre mim
        </p>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* ── Foto ── */}
          <div
            className={`relative ${isVisible ? "animate-reveal-left" : "opacity-0"
              } animation-delay-200`}
          >
            <div className="absolute -inset-3 border border-border" />
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/lara-profile.png"
                alt="Lara Armangni — Arquiteta"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>

            {/* Floating name tag */}
            <div
              className={`absolute -bottom-6 right-6 bg-foreground px-5 py-3 text-background ${isVisible ? "animate-reveal-up" : "opacity-0"
                } animation-delay-500`}
            >
              <p className="text-xs uppercase tracking-[0.2em]">Lara Armangni</p>
              <p className="text-[10px] text-background/60 mt-0.5 uppercase tracking-widest">
                Arquiteta & Urbanista
              </p>
            </div>
          </div>

          {/* ── Texto ── */}
          <div className="flex flex-col gap-8 lg:pt-10">

            <h2
              className={`font-display text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl ${isVisible ? "animate-reveal-right" : "opacity-0"
                } animation-delay-200`}
            >
              Arquitetura que<br />
              <em className="not-italic text-muted-foreground">conta histórias</em>
            </h2>

            {/* ── Bio com efeito palavra a palavra (igual ao PhilosophySection) ── */}
            <div ref={bioRef} className="text-base leading-relaxed text-muted-foreground">
              {bioWords.map((word, index) => {
                const wordProgress = Math.max(
                  0,
                  Math.min(1, descriptionProgress * bioWords.length - index)
                );
                const opacity = wordProgress;
                const blur = (1 - wordProgress) * 40;

                return (
                  <span
                    key={index}
                    style={{
                      opacity,
                      filter: `blur(${blur}px)`,
                      transition: "opacity 0.3s ease, filter 0.3s ease",
                      display: "inline",
                    }}
                  >
                    {word}
                    {index < bioWords.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </div>

            {/* Divider */}
            <div
              className={`border-t border-border ${isVisible ? "animate-reveal-up" : "opacity-0"
                } animation-delay-400`}
            />

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 ${isVisible ? "animate-scale-in" : "opacity-0"
                } animation-delay-400`}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-display text-foreground md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`flex flex-wrap gap-4 pt-2 ${isVisible ? "animate-reveal-up" : "opacity-0"
                } animation-delay-500`}
            >
              <a
                href="mailto:lara@laraarmangni.com.br"
                className="inline-flex items-center gap-2 bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                Entrar em contato
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H13M7 1L13 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Baixar currículo
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
