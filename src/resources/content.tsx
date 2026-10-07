import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "May",
  lastName: "Myat Mon",
  name: `May Myat Mon`,
  role: "DevOps Engineer",
  avatar: "/images/profile.jpg",
  email: "may@gravitas.my",
  location: "Asia/Bangkok", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Burmese"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about cloud infrastructure and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mmmon",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building reliable cloud infrastructure that ships products</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Matrix Concepts Holdings</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/matrix-concepts-holdings-website",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()} at{" "}
      <Text as="span" size="xl" weight="strong">Gravitas Digital</Text>, with 6+ years of experience <br /> launching 10+ projects for 20 customer companies.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Experienced technical leader with over 6 years of work experience, including 1 year as a
        Product Owner and 1 year as a DevOps Engineer. Successfully launched over 10 projects for 20
        customer companies. Hands-on experience with AWS cloud infrastructure, including server
        management, deployment, and maintenance of UAT and production environments. Proficient in
        DNS and domain management through Cloudflare and Namecheap, and experienced in collaborating
        with development teams to provision infrastructure and support deployments. Strong
        background in web development using Next.js and WordPress CMS, and skilled in project
        planning, technical architecture design, and optimizing system performance.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Gravitas Digital Company (Malaysia)",
        timeframe: "2024 - Present",
        role: "DevOps Engineer",
        achievements: [
          <>
            Manage AWS cloud infrastructure, including EC2 instances, server configuration, and
            maintenance of UAT and production environments. Monitor server performance and
            collaborate with development teams to support application deployments.
          </>,
          <>
            Configure and manage DNS and domain services through Cloudflare and Namecheap, ensuring
            optimal performance and reliability of web services.
          </>,
          <>
            Develop and maintain websites using Next.js and WordPress CMS. Design and develop a PMS
            (Property Management System) with a focus on technical architecture and scalable data
            design.
          </>,
          <>
            Implement backup strategies and security controls, and document infrastructure
            configurations and deployment procedures to protect critical systems.
          </>,
        ],
        images: [],
      },
      {
        company: "Myanmar Information Technology Company (Myanmar)",
        timeframe: "2022 - 2024",
        role: "Product Owner",
        achievements: [
          <>
            Supervised 3 team leads and 12 team members, overseeing the successful execution of 10
            projects.
          </>,
          <>
            Strategized and coordinated one-week sprints for 3 teams, consistently delivering live
            updates on progress each week.
          </>,
          <>
            Collaborated with stakeholders to identify and prioritize pain points in existing
            features, leading to a 40% reduction in customer-reported issues and enhanced product
            usability.
          </>,
          <>
            Led the successful launch of an e-learning platform at Yangon's largest universities,
            including UMFCCI and UFL.
          </>,
        ],
        images: [],
      },
      {
        company: "Myanmar Information Technology Company (Myanmar)",
        timeframe: "2020 - 2022",
        role: "Team Leader",
        achievements: [
          <>
            Piloted a team of 20 in the end-to-end development of a cloud-based HR solution with
            Flutter, achieving deployment to 20+ clients and boosting user satisfaction ratings by
            25%.
          </>,
          <>
            Deployed new features and configurations in collaboration with the development team,
            enhancing operational efficiency by 20% and cutting technical issue resolution by 40%.
          </>,
          <>
            Engineered project UI with UI/UX teams using Figma, integrating extensive customer
            feedback, resulting in a 25% increase in positive user reviews.
          </>,
          <>
            Tested and integrated facial recognition and fingerprint devices for attendance and
            temperature tracking.
          </>,
        ],
        images: [],
      },
      {
        company: "Myanmar Information Technology Company (Myanmar)",
        timeframe: "2018 - 2020",
        role: "Mobile Developer",
        achievements: [
          <>
            Developed a hospital booking application using the Ionic framework, reducing
            administrative tasks by 30% and improving patient onboarding efficiency by 50%, while
            integrating Zoom for video consultations.
          </>,
          <>
            Enhanced the mobile app's user experience by collaborating with UI/UX teams,
            implementing Google Maps for navigation, and optimizing frontend API integrations for a
            more responsive interface.
          </>,
          <>
            Designed and implemented HR training modules, boosting employee satisfaction by 30% and
            reducing turnover rates.
          </>,
          <>
            Successfully launched the app on the App Store and Play Store after rigorous UAT
            testing, ensuring seamless accessibility for end users.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Certificates",
    institutions: [
      {
        name: "TaungNgu Computer University",
        description: <>Bachelor of Computer Science, Myanmar, 2012.</>,
      },
      {
        name: "Advanced Computing Training School",
        description: <>Professional Diploma in Java Programming, 2018.</>,
      },
      {
        name: "PADC",
        description: <>Flutter Full-Term Course, 2021.</>,
      },
      {
        name: "IT Current",
        description: <>C# .NET Developer Course, 2018.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Cloud Platforms",
        description: (
          <>
            Managing AWS infrastructure (EC2, S3, DynamoDB) for UAT and production environments, with
            experience on Microsoft Azure.
          </>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "S3",
            icon: "s3",
          },
          {
            name: "DynamoDB",
            icon: "dynamodb",
          },
          {
            name: "Azure",
            icon: "microsoft",
          },
        ],
        images: [],
      },
      {
        title: "DevOps & Tools",
        description: (
          <>Version control, DNS and domain management for reliable web services.</>
        ),
        tags: [
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "Cloudflare",
            icon: "cloudflare",
          },
          {
            name: "Namecheap",
            icon: "namecheap",
          },
        ],
        images: [],
      },
      {
        title: "Programming & Frameworks",
        description: (
          <>Building web and mobile apps across frontend, backend APIs, and CMS platforms.</>
        ),
        tags: [
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "WordPress",
            icon: "wordpress",
          },
          {
            name: "Flutter",
            icon: "flutter",
          },
          {
            name: "Dart",
            icon: "dart",
          },
          {
            name: "Ionic",
            icon: "ionic",
          },
          {
            name: "Angular",
            icon: "angular",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "Databases",
        description: <>Designing scalable data models across SQL and NoSQL databases.</>,
        tags: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "MSSQL",
            icon: "microsoft",
          },
          {
            name: "DynamoDB",
            icon: "dynamodb",
          },
        ],
        images: [],
      },
      {
        title: "Soft Skills",
        description: <>Teamwork, Problem-Solving, Communication, and Leadership.</>,
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about DevOps and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `DevOps and development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
