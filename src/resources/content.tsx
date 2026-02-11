import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rudy",
  lastName: "Lee",
  name: `Lee Rudy`,
  role: "Software Engineer & UI/UX Designer & Spline 3D Designer",
  avatar: "/images/profil.png",
  email: "brunerleerudy@gmail.com",
  // location: "Indian/Mauritius",// Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Français", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Lee-Rudy/",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lee-rudy/",
    essential: true,
  },
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.behance.net/leerudy1",
    essential: true,
  },
  
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "+230 5733 1321",
    icon: "whatsapp",
    link: "https://wa.me/23057331321",
    essential: true,
  },
];


const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Le Bon outil pour le Bon service</>,

  featured: {
    display: true,
    title: (
      <a
        href="/cv/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="cv.pdf"
        style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
      >
        <Row gap="12" vertical="center">
          <strong className="ml-4">Télécharger</strong>{" "}
          <Line background="brand-alpha-strong" vert height="20" />
          <Text marginRight="4" onBackground="brand-medium">
            mon CV
          </Text>
        </Row>
      </a>
    ),
  },
  

  subline: (
    <>
      Hey ! mon nom est Lee Rudy, je suis un{" "}
      <Text as="span" size="xl" weight="strong">
        Software Engineer & UI/UX Designer & Spline 3D Designer
      </Text>
    </>
  ),
};


const about: About = {
  path: "/about",
  label: "À propos de moi",
  title: `À propos de moi – ${person.name}`,
  // description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,

  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      <strong className="ml-4">"Le bon outil pour le bon service "</strong>
      Fervent de technologie, de design et de l'art, je conçois des solutions numériques orientées résultats et valeur métier. Chaque service ou application créée vise une valeur ajoutée concrète, une amélioration de la qualité des services et une contribution à la performance business.J'interviens sur l'ensemble du cycle de développement : analyse des besoins, choix de l'architecture, sécurité dès la conception, tests, maintenance et documentation technique dans une démarche d'apprentissage continu, adaptation et de veille technologique active.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Mes expériences",
    experiences: [
      {
        company: "Blue Valoris Tech - Mauritius",
        timeframe: "Janvier 2026 - Aujourd'hui",
        role: "UI/UX Designer",
        outils : "Outils et technologies : Figma, FigJam,Spline 3D, Notion, JIRA",
        achievements: [
          <>
            <strong>Approche :</strong> orientée accessibilité, clarté, performance et objectifs business.
          </>,
          <>
            Architecture de l'information : organisation du contenu et de la navigation pour une compréhension logique et simple
          </>,
          <>
          Wireframing & prototypage : création de maquettes filaires et interactives pour tester les parcours utilisateurs
          </>,
        <>
        Défense des utilisateurs : s'assurer que les produits répondent réellement aux besoins et problématiques des utilisateurs
        </>,
        <>
        Identité visuelle : définition des couleurs, typographies, icônes et du style graphique global
        </>,
        <>
        Design visuel : conception des écrans finaux en garantissant cohérence, esthétique et attractivité
        </>,
        <>
        Cohérence et ergonomie : garantie d'interfaces intuitives et accessibles sur tous les supports et responsive design.
        </>,
        ],

        images:[],
        // images: [
        //   // optional: leave the array empty if you don't want to display images
        //   {
        //     src: "/images/projects/project-01/cover-01.jpg",
        //     alt: "Once UI Project",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },

      {
        company: "LANTORIAN ENGINE - Madagascar",
        timeframe: "Juin 2025 - Décembre 2025",
        role: "UI/UX Designer (Freelance)",
        outils : "Outils et technologies : Figma, FigJam,Spline 3D, Notion, Slack, JIRA",
        achievements: [
          <>
            <strong>Approche :</strong> orientée accessibilité, clarté, performance et objectifs business.
          </>,
          <>
            Chez LANTORIAN ENGINE, j'ai participé à la conception de produits digitaux pour des applications web et mobiles.
          </>,
          <>
          Les types de projets réalisés : - Sites vitrines et landing pages
          - Plateformes BTP, BPO et agences technologiques
          - E-commerce
          - Projets pour ONG
          - Hôtellerie, restauration
          - Immobilier et l'architecture (La Réunion et Dubaï)
          - Plateformes SaaS
          - Tourisme et recrutement international (Canada).
        </>,
        ],
        images: [],
        tools: "Figma, FigJam, Spline 3D, Notion, Slack, JIRA",
      },

      {
        company: "Ravinala Airports - Madagascar",
        timeframe: "Août 2024 - Décembre 2024",
        role: "Software Developer Developer (Freelance - hybride)",
        outils : "Outils et technologies : C# (ASP.NET), React.JS, SQL Server, Flutter, SQLite, Postman Agile Scrum, GitHub, Notion, API REST, Ngrok ",
        achievements: [
          <><strong>Projet : RaviCheck</strong></>,
          <>
           Conception et développement d'une application web trois tiers & mobile de gestion des flottes de transport du personnel, incluant un dashboard administrateur (statistiques, traçabilité, historiques, retards, coûts, kilométrage et visualisation des itinéraires via cartographie).
          </>,
          <>
            Développement d'une application mobile embarquée pour le pointage et le suivi terrain.
          </>,
          <>
          Synchronisation bidirectionnelle web/mobile assurant l'analyse des données et la mise à jour en temps réel des informations sur l'application mobile.
          </>,
          <>
        <strong>Résultats :</strong> amélioration de la prise de décision opérationnelle, réduction des retards et des erreurs de pointage, et renforcement du suivi et de la traçabilité des déplacements, des coûts de consommation et du kilométrage des véhicules, sécurités et persistances des données des applications.
          </>,
        ],
        images: [],
      },

      {
        company: "So Talent - Madagascar",
        timeframe: "Août 2021 - Décembre 2022",
        role: "Software Developer (Freelance)",
        outils : "Outils et technologies : PHP (Laravel), PostgreSQL, BootStrap, GitHub ",

        achievements: [
          <>
          <strong>Projet : Imano Tech</strong>
          </>,
          <>
            Conception d'une application de gestion des formations et du coaching.
          </>,
          <>
            Publication des formations disponibles avec statut et dates associées.
          </>,
          <>
          Mise en place d'un formulaire de réservation de modules de formation et de coaching.
        </>,
        <>
        Développement d'un tableau de bord (Dashboard) permettant le suivi des membres inscrits et des statistiques (nombre de formations réalisées et nombre d'inscrits).
      </>,
      <>
      <strong>Résultats :</strong> Meilleure organisation et visibilité de l'offre de formation, processus d'inscription simplifié et digitalisé pour les utilisateurs, pilotage facilité grâce à des indicateurs clés en temps réel, gain de temps dans le suivi administratif et décisionnel.
    </>,
        ],
        images: [],
      },

      
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Éducations & Formations",
    institutions: [
      {
        name: "Master – Expert en Architecture et Développement Logiciel à MCCI Business School (Mauritius)",
        description: <>2025 - Aujourd'hui</>,
      },
      {
        name: "Licence en Informatique & Design à l'IT University (Madagascar)",
        description: <>2021 - 2025</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Stacks & Services",
    skills: [
      {
        title: "UI/UX Design",
        description: (
          <>En tant que UI/UX Designer, j’adopte une approche centrée sur l’accessibilité des produits web et mobiles.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "FigJam",
            icon: "figma",
          },
          {
            name: "Spline 3D",
            icon: "box",
          },
          {
            name: "Notion",
            icon: "notion",
          },
          {
            name: "JIRA",
            icon: "jira",
          },
        ],
        images:[],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/project-01/cover-03.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
        
      },
      {
        title: "Software Engineering",
        description: (
          <>En tant que Software Engineer, j’adopte une approche orientée client et utilisateur afin de répondre aux besoins fonctionnels et de générer une réelle valeur ajoutée sur le plan business, tout en concevant des architectures robustes, évolutives, performantes et sécurisées.</>
        ),
        tags: [
          // {
          //   name: "JavaScript",
          //   icon: "javascript",
          // },
          {
            name: "React.js",
            icon: "react",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Spring Boot",
            icon: "spring",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Django",
            icon: "django",
          },
          {
            name: "Flutter",
            icon: "flutter",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "SQL Server",
            icon: "sqlserver",
          },
          {
            name: "SQLite",
            icon: "sqlite",
          },
          // {
          //   name: "Oracle",
          //   icon: "oracle",
          // },
          {
            name: "API REST",
            icon: "api",
          },
          {
            name: "Git/GitHub",
            icon: "git",
          },
          {
            name: "Postman",
            icon: "postman",
          },
          {
            name: "SCRUM",
            icon: "rocket",
          },
          {
            name: "Notion",
            icon: "notion",
          },
          {
            name: "JIRA",
            icon: "jira",
          },
          {
            name: "Slack",
            icon: "slack",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "OWASP",
            icon: "security",
          },
          {
            name: "Sonar Cloud",
            icon: "security",
          },
          {
            name: "SNYK",
            icon: "security",
          },
          {
            name: "Burp Suite",
            icon: "security",
          },
          {
            name: "Vault",
            icon: "security",
          },
          {
            name: "UML Diagram",
            icon: "document",
          },
          {
            name: "ArchitectureMVC",
            icon: "architecture",
          },
          {
            name: "Architecture Hexagonale",
            icon: "architecture",
          },
          {
            name: "Architecture Microservices",
            icon: "microservices",
          },
          {
            name: "Architecture 3-tiers",
            icon: "architecture",
          },
        ],
        images:[],
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Mes réalisations",
  // title: `Je vous présente mes projets – ${person.name}`,
  title: `Je vous présente mes projets`,

  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galerie",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/personal/g1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/personal/g2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/personal/dessin.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/personal/g3.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/personal/g4.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/personal/g5.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/personal/g6.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/personal/g7.png",
      alt: "image",
      orientation: "horizontal",
    },

  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
