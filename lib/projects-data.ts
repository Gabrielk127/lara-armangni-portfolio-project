export interface ProjectImage {
    src: string;
    alt: string;
    span: string; // tailwind grid span classes
}

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    year: string;
    location: string;
    area: string;
    category: string;
    description: string;
    details: string;
    coverImage: string;
    images: ProjectImage[];
}

export const projects: Project[] = [
    {
        slug: "residencia-cacique",
        title: "Residência Cacique",
        subtitle: "Arquitetura contemporânea com integração à natureza",
        year: "2025",
        location: "Londrina, PR",
        area: "320 m²",
        category: "Residencial",
        description:
            "A Residência Cacique é um projeto que explora a relação entre espaços internos e a paisagem natural ao redor. Com linhas retas e materiais naturais, a casa cria uma transição suave entre o ambiente construído e o jardim.",
        details:
            "O projeto foi desenvolvido com foco na sustentabilidade e no conforto térmico, utilizando ventilação cruzada e iluminação natural em todos os ambientes. A volumetria escalonada permite que cada espaço tenha uma vista única para o exterior, enquanto os materiais como concreto aparente, madeira e aço corten conferem uma estética contemporânea e atemporal.",
        coverImage: "/images/projects/render-cacique/cacique-01.png",
        images: [
            { src: "/images/projects/render-cacique/cacique-01.png", alt: "Vista frontal da Residência Cacique", span: "col-span-2 row-span-2" },
            { src: "/images/projects/render-cacique/cacique-02.png", alt: "Detalhe da fachada lateral", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-03.png", alt: "Entrada principal com paisagismo", span: "col-span-1 row-span-2" },
            { src: "/images/projects/render-cacique/cacique-04.png", alt: "Vista aérea da cobertura", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-05.png", alt: "Área de lazer externa", span: "col-span-2 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-06.png", alt: "Sala de estar integrada", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-07.png", alt: "Cozinha gourmet", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-08.png", alt: "Vista noturna da residência", span: "col-span-2 row-span-2" },
            { src: "/images/projects/render-cacique/cacique-09.png", alt: "Detalhe do pergolado", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-10.png", alt: "Suíte master com vista", span: "col-span-1 row-span-2" },
            { src: "/images/projects/render-cacique/cacique-11.png", alt: "Banheiro da suíte", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-12.png", alt: "Escritório com iluminação natural", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-13.png", alt: "Corredor com jardim interno", span: "col-span-2 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-14.png", alt: "Vista do deck posterior", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-15.png", alt: "Garagem e acesso lateral", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-16.png", alt: "Área de churrasqueira", span: "col-span-2 row-span-2" },
            { src: "/images/projects/render-cacique/cacique-17.png", alt: "Detalhe do revestimento", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-18.png", alt: "Piscina com borda infinita", span: "col-span-1 row-span-2" },
            { src: "/images/projects/render-cacique/cacique-19.png", alt: "Jardim frontal ao entardecer", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-20.png", alt: "Sala de jantar", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-21.png", alt: "Hall de entrada", span: "col-span-2 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-22.png", alt: "Escada com iluminação embutida", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-23.png", alt: "Lavabo social", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-24.png", alt: "Perspectiva geral do projeto", span: "col-span-2 row-span-2" },
            { src: "/images/projects/render-cacique/cacique-25.png", alt: "Detalhe da varanda", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-26.png", alt: "Área técnica", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-27.png", alt: "Quarto de hóspedes", span: "col-span-1 row-span-2" },
            { src: "/images/projects/render-cacique/cacique-28.png", alt: "Closet planejado", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-29.png", alt: "Vista lateral ao pôr do sol", span: "col-span-2 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-30.png", alt: "Detalhe do muro verde", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-31.png", alt: "Terraço superior", span: "col-span-1 row-span-1" },
            { src: "/images/projects/render-cacique/cacique-32.png", alt: "Vista final do conjunto", span: "col-span-2 row-span-2" },
        ],
    },
    {
        slug: "residencia-paola-oliveira",
        title: "Residência Paola Oliveira",
        subtitle: "Elegância e funcionalidade em harmonia",
        year: "2025",
        location: "Londrina, PR",
        area: "280 m²",
        category: "Residencial",
        description:
            "A Residência Paola Oliveira é um projeto que traduz sofisticação e conforto em cada detalhe. Com uma paleta de cores neutras e materiais nobres, a casa foi pensada para oferecer ambientes amplos e acolhedores.",
        details:
            "O projeto prioriza a fluidez entre os espaços, com amplas aberturas em vidro que conectam o interior ao exterior. O uso de pé-direito duplo na sala principal cria uma sensação de grandiosidade, enquanto os recuos e varandas proporcionam áreas de sombra naturais. A fachada combina elementos horizontais e verticais que conferem ritmo e elegância ao volume.",
        coverImage: "/images/projects/renders-paola-oliveira/paola-01.png",
        images: [
            { src: "/images/projects/renders-paola-oliveira/paola-01.png", alt: "Fachada principal da Residência Paola", span: "col-span-2 row-span-2" },
            { src: "/images/projects/renders-paola-oliveira/paola-02.png", alt: "Vista lateral com jardim", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-03.png", alt: "Entrada com pé-direito duplo", span: "col-span-1 row-span-2" },
            { src: "/images/projects/renders-paola-oliveira/paola-04.png", alt: "Sala de estar ampla", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-05.png", alt: "Área gourmet integrada", span: "col-span-2 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-06.png", alt: "Suíte master sofisticada", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-07.png", alt: "Banheiro com revestimento", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-08.png", alt: "Vista noturna da fachada", span: "col-span-2 row-span-2" },
            { src: "/images/projects/renders-paola-oliveira/paola-09.png", alt: "Cozinha planejada", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-10.png", alt: "Varanda com pergolado", span: "col-span-1 row-span-2" },
            { src: "/images/projects/renders-paola-oliveira/paola-11.png", alt: "Home office integrado", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-12.png", alt: "Detalhe da escada", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-13.png", alt: "Vista aérea do telhado", span: "col-span-2 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-14.png", alt: "Sala de jantar com lustre", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-15.png", alt: "Paisagismo frontal", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-16.png", alt: "Área de lazer com piscina", span: "col-span-2 row-span-2" },
            { src: "/images/projects/renders-paola-oliveira/paola-17.png", alt: "Quarto infantil", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-18.png", alt: "Garagem coberta", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-19.png", alt: "Lavanderia planejada", span: "col-span-1 row-span-2" },
            { src: "/images/projects/renders-paola-oliveira/paola-20.png", alt: "Vista do jardim interno", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-21.png", alt: "Corredor iluminado", span: "col-span-2 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-22.png", alt: "Fachada ao entardecer", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-23.png", alt: "Detalhe do revestimento", span: "col-span-1 row-span-1" },
            { src: "/images/projects/renders-paola-oliveira/paola-24.png", alt: "Perspectiva geral noturna", span: "col-span-2 row-span-2" },
            { src: "/images/projects/renders-paola-oliveira/paola-25.png", alt: "Vista panorâmica final", span: "col-span-2 row-span-1" },
        ],
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map((p) => p.slug);
}
