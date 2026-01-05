

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Briefcase, Code2, User } from "lucide-react";
import Container from "@/components/Container";

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];

const tabContent = {
  experience: {
    title: "Projects & Experience",
    items: [
      {
        role: "Full Stack Developer (Project)",
        company: "PawMart - Pet Adoption Platform",
        period: "Nov 2025",
        description: "Designed and developed a full-stack MERN application for managing pet adoption listings and orders. Built with React.js and Tailwind CSS frontend, Node.js/Express.js backend with JWT authentication, and MongoDB database. Implemented user dashboards, PDF exports, and Firebase Authentication.",
        highlights: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Firebase"],
      },
      {
        role: "Full Stack Developer (Project)",
        company: "My Daily Blog",
        period: "Nov 2025 - Dec 2025",
        description: "Developed a modern, full-stack blogging platform with Next.js frontend and Express.js backend. Implemented NextAuth authentication, role-based access control (Admin/User), CRUD operations for posts, and responsive design with optimized API calls.",
        highlights: ["Next.js", "Express.js", "MongoDB", "Mongoose", "NextAuth", "Role-Based Access"],
      },
    ],
  },
  education: {
    title: "Education & Certification",
    items: [
      {
        degree: "Web Development Course (6 Months)",
        institution: "Programming Hero",
        period: "2024",
        description: "Completed intensive web development course covering MERN stack, modern development practices, and full-stack project building. Gained hands-on experience with React, Node.js, MongoDB, and deployment.",
        achievements: ["MERN Stack Certification", "Multiple Project Builds", "Live Deployment Experience"],
      },
      {
        degree: "Bachelor of Arts (Political Science) - 1st Year",
        institution: "Sahid Moshuir Rahman College",
        period: "2024 - Present",
        description: "Currently pursuing degree in Political Science while continuing to develop technical skills through self-study and project work.",
        achievements: ["Active Student", "Balancing Tech Studies with Formal Education"],
      },
      {
        degree: "HSC (Higher Secondary Certificate)",
        institution: "Dr. Abdur Razzak Municipal College, Jashore",
        period: "2020",
        description: "Completed higher secondary education with focus on science stream.",
        achievements: ["Completed Secondary Education"],
      },
    ],
  },
  skills: {
    title: "Technical & Soft Skills",
    categories: [
      {
        name: "Frontend Development",
        description: "Proficient in building responsive, interactive user interfaces with modern React ecosystem. Experience with state management, component architecture, and performance optimization.",
        skills: [
          "React.js",
          "Next.js",
          "Redux Toolkit",
          "React Query",
          "Tailwind CSS",
          "Material UI",
          "HTML5",
          "CSS3",
          "Vite",
        ],
      },
      {
        name: "Backend & Database",
        description: "Skilled in building RESTful APIs, authentication systems, and database architecture using Node.js and Express. Experience with both SQL and NoSQL databases.",
        skills: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "JWT Authentication",
          "MongoDB (Mongoose)",
          "PostgreSQL (Sequelize)",
          "Firebase Admin",
          "Firebase Firestore",
        ],
      },
      {
        name: "Tools & DevOps",
        description: "Familiar with version control, API testing, deployment platforms, and basic DevOps concepts. Strong soft skills in problem-solving and collaboration.",
        skills: [
          "Git/GitHub",
          "Postman",
          "Vercel",
          "Netlify",
          "Docker (Basic)",
          "AWS (Basic)",
          "Full-stack Problem Solving",
          "System Design",
          "Agile Workflows",
          "Collaboration",
          "Mentoring",
        ],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "Passionate MERN Stack Developer with 2+ years of self-directed learning and project experience. Strong foundation in full-stack development with focus on React.js, Node.js, and modern databases. Seeking opportunities to contribute to innovative projects and grow as a professional developer. Committed to writing clean, maintainable code and creating exceptional user experiences.",
    interests: [
      "Open Source Projects",
      "Technical Blogging",
      "UI/UX Design",
      "Learning New Technologies",
      "Mentoring Junior Developers",
    ],
    languages: ["Bangla (Native)", "English (Fluent)", "Hindi (Conversational)"],
  },
};



const ResumePage = () => {
  return (
    <section className="flex flex-col justify-center text-white py-10">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="w-full"
        >
          <Tabs
            defaultValue="experience"
            className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
          >
            <TabsList className="flex md:flex-col h-full bg-transparent md:w-64 gap-4">
              {tabMenu.map((item) => (
                <TabsTrigger
                  key={item.value}
                  value={item.value}
                  className="bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-1.5 md:w-[50%] md:gap-3">
                    <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                    {item.title}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex-1 min-h-[400px]">
              <TabsContent value="experience">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.experience.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.experience.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{item.role}</h3>
                          <p className="text-muted-foreground">
                            {item.company}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, i) => (
                          <Badge key={i} variant="secondary">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.education.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.degree}
                          </h3>
                          <p className="text-muted-foreground">
                            {item.institution}
                          </p>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {item.period}
                        </div>
                      </div>
                      <p className="mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, i) => (
                          <Badge key={i} variant="secondary">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.skills.title}
                </motion.h2>
                <div className="space-y-6">
                  {tabContent.skills.categories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg border-lightSky/20 p-6"
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/60 mb-4 font-normal leading-7">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="about">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-6 text-lightSky"
                >
                  {tabContent.about.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <p className="mb-6 text-lg">{tabContent.about.bio}</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.interests.map((interest, i) => (
                          <Badge key={i} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </Container>
    </section>
  )
}


export default ResumePage




