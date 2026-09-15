import { About, Blog, Gallery, Hobbies, Home, Newsletter, Person, Social, Work } from "@/types";
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
    href: "/cv/cv.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    download: "cv.pdf",
    title: (
      <a 
  href="/path/to/mon-cv.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ textDecoration: 'none', color: 'inherit' }}
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
        company: "LANTORIAN ENGINE",
        timeframe: "juin 2025 - juillet 2026",
        role: "UI/UX Designer - Freelance Remote",
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
        <>
          Les types de projets réalisés : Sites vitrines, Landing page,  BTP, BPO, agences technologiques, e-commerce, ONG, hôtellerie, restauration, plateformes SaaS, tourisme
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
        company: "So Talent",
        timeframe: "Juin 2024 - Février 2026",
        role: "Software Engineer",
        outils : "Outils et technologies : PHP (Laravel), PostgreSQL, BootStrap, GitHub ",

        achievements: [
          <>
          <strong>Projet : Conception et architecture d'applications SaaS, web, mobiles, intégration DevSecOps et optimisation des architectures distribuées.</strong>
          </>,
          <>
            <strong>SaaS Helpdesk & Ticketing System (Laravel, React, TanStack Query, MySQL) :</strong>
          </>,
          <>
            Architecture de la plateforme avec API REST Laravel et frontend React (caching avancé via TanStack Query).
          </>,
          <>
            Traitement asynchrone des flux d'emails via un pipeline IMAP bidirectionnel automatisé.
          </>,
          <>
            Sécurisation granulaire (JWT / RBAC) au niveau contrôleur et intégration de notifications temps réel.
          </>,
          <>
            Optimisation SQL (résolution des requêtes N+1) et mise en place de tests automatisés (TDD) avec CI/CD complète (GitHub Actions, SonarCloud, Snyk).
          </>,
          <>
            <strong>Video Message Secure (Java Spring Boot, FastAPI Python, PostgreSQL, Docker) :</strong>
          </>,
          <>
            Conception d'une architecture microservices en adoptant la mise en place d'une Architecture Hexagonale dédiée à la sécurisation des validations de transactions financières internes.
          </>,
          <>
            Implémentation d'une authentification forte (OAuth2, MFA, HashiCorp Vault) et vérification d'ordres financiers par signatures asymétriques RSA.
          </>,
          <>
            Automatisation d'un pipeline CI/CD DevSecOps garantissant la couverture de tests et l'analyse continue des vulnérabilités.
          </>,
          <>
            <strong>Widget Desktop Natif & Productivité (Tauri / Rust, React, SQLite) :</strong>
          </>,
          <>
            Développement d'un widget OS léger sous Tauri (Rust) intégrant une "All Inbox" multi-comptes (Gmail, Outlook) et un module Calendar/To-Do.
          </>,
          <>
            Réduction drastique de l'empreinte mémoire RAM par rapport à Electron grâce aux bindings natifs Rust et au stockage local SQLite.
          </>,
          <>
            <strong>Digitalisation d'une plateforme de formation et coaching (B2B / B2C) (Laravel, PostgreSQL) :</strong>
          </>,
          <>
            Développement des parcours B2C (réservations, suivi) et B2B (comptes entreprise, gestion d'équipes et demandes).
          </>,
          <>
            Analytics : tableau de bord temps réel pour le pilotage des performances, de la fréquentation et de l'administration.
          </>,
          <>
            <strong>Résultat :</strong> centralisation et optimisation du traitement des demandes, supprimant les tâches manuelles.
          </>,
        ],
        images: [],
      },


      {
        company: "Ravinala Airports",
        timeframe: "Août 2024 - Novembre 2024",
        role: "Software Enginner (Freelance - hybride)",
        outils : "Outils et technologies : C# (ASP.NET), React.JS, SQL Server, Flutter, SQLite, Postman, Agile Scrum, GitHub, API REST, Ngrok ",
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
          Synchronisation & Cartographie : Conception d'un moteur de synchronisation bidirectionnelle (offline-first) pour le suivi en temps réel, la géolocalisation et le tracé cartographique.
          </>,
          <>
        <strong>Résultats :</strong> amélioration de la prise de décision opérationnelle, réduction des retards et des erreurs de pointage, et renforcement du suivi et de la traçabilité des déplacements, des coûts de consommation et du kilométrage des véhicules, sécurités et persistances des données des applications.
          </>,
        ],
        images: [],
      },

      {
        company: "So Talent",
        timeframe: "Mai 2023 - Juin 2024",
        role: "UI/UX Designer - Freelance Remote",
        outils : "Outils et technologies : Figma, FigJam, Notion, JIRA",
        achievements: [
          <>
            <strong>Approche :</strong> orientée accessibilité, clarté, performance et objectifs business.
          </>,
          <>
            Conception de maquettes UI et prototypes interactifs
          </>,
          <>
          Définition des parcours utilisateurs (UX) et des interactions
          </>,
        <>
        Réalisation de projets :
        Sites vitrines, Landing page, plateformes mobiles 
        </>,
        ],

        images:[],
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
        description: <>2021 - 2024</>,
      },
      {
        name: "Certificat en ReactJS et PostgreSQL",
        description: <>2024</>,
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
          {
            name: "React.js",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Spring Boot",
            icon: "spring",
          },
          {
            name: "FastAPI",
            icon: "fastapi",
          },
          {
            name: "ASP.NET",
            icon: "aspnet",
          },
          {
            name: "Laravel",
            icon: "laravel",
          },
          {
            name: "Tauri",
            icon: "tauri",
          },
        ],
        images: [],
      },
      {
        title: "Langage de programmation",
        tags: [
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Rust",
            icon: "rust",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "C#",
            icon: "csharp",
          },
        ],
        images: [],
      },
      {
        title: "SQL",
        tags: [
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
        ],
        images: [],
      },
      {
        title: "Mobile",
        tags: [
          {
            name: "Flutter",
            icon: "flutter",
          },
        ],
        images: [],
      },
      {
        title: "Outils et méthodologies",
        tags: [
          {
            name: "GitHub",
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
            icon: "owasp",
          },
          {
            name: "Sonar Cloud",
            icon: "sonarqube",
          },
          {
            name: "SNYK",
            icon: "snyk",
          },
          {
            name: "Vault",
            icon: "vault",
          },
          {
            name: "Kafka",
            icon: "kafka",
          },
          {
            name: "Diagramme UML (Use Case, Class, Séquence, D'activité, Composant, Déploiement)",
            icon: "document",
          },
          {
            name: "Architecture (Monolithique, micro services, évènementiels, hexagonale, n-tiers)",
            icon: "architecture",
          },
          {
            name: "TDD",
            icon: "document",
          },
          {
            name: "DDD",
            icon: "document",
          },
          {
            name: "Pipeline CI/CD",
            icon: "cicd",
          },
        ],
        images: [],
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

const hobbies: Hobbies = {
  path: "/hobbies",
  label: "Mes hobbies",
  title: `Mes hobbies – ${person.name}`,
  description: `Discover what ${person.name} enjoys doing outside of work`,
  items: [
  {
    name: "Chess",
    image: "/images/hobbies/chess.jpg",
    alt: "Chess",
    why: (
      <>
        Pourquoi ? Un jeu de stratégie, de risque, de réflexion et de décision.
        Chaque coup peut être fatal, sans point de non-retour.
      </>
    ),
  },
  {
    name: "Dessin",
    image: "/images/hobbies/drawing.jpg",
    alt: "Dessin, croquis, illustration et bande dessinée",
    why: (
      <>
        Pourquoi ? En adorateur du croquis et de la bande dessinée, mon langage
        visuel favori. La patience est une vertu, les bonnes choses viennent avec
        l'apprentissage et la persévérance. On ne vend pas un tableau parce que
        c'est Picasso qui l'a fait, mais parce que cela lui a pris des années pour
        tracer un seul trait : la valeur réside dans le temps.
      </>
    ),
  },
  {
    name: "Lecture",
    image: "/images/hobbies/reading.jpg",
    alt: "Lecture",
    why: (
      <>
        Pourquoi ? Une porte vers le savoir. La maturité et la sagesse se gagne à travers la connaissance
        et l'expérience.
      </>
    ),
  },
  {
    name: "Guitare",
    image: "/images/hobbies/guitare.jpg",
    alt: "Guitare",
    why: (
      <>
        Pourquoi ? Mon espace de liberté pour m'évader et jouer par pur plaisir, tout en
        nourrissant et libérant mes émotions.
      </>
    ),
  },
  {
    name: "Tennis",
    image: "/images/hobbies/tennis.jpg",
    alt: "Tennis",
    why: (
      <>
        Pourquoi ? Une confrontation avec soi-même. Je le pratique pour mon corps et mon
        esprit.
      </>
    ),
  },
  {
    name: "Basket Ball",
    image: "/images/hobbies/basketball.jpg",
    alt: "Basket Ball",
    why: (
      <>
        Pourquoi ? J'ai pour philosophie : seul je suis fort, mais ensemble je deviens meilleur.
        Travailler le corps et l'esprit seul ne suffit pas ; savoir travailler en
        équipe est aussi un atout précieux pour le développement de soi.
      </>
    ),
  },
],
};

export { person, social, newsletter, home, about, blog, work, gallery, hobbies };
