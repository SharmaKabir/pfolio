"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/gen.png",
    title: "AI SaaS Web App",
    description:
    "Developed a multi-tool AI platform by integrating third-party APIs to power 6 distinct features. Utilised Clerk to implement secure user authentication and gating feature access",
    
    skills: [
      "JavaScript",
      "React",
      "Tailwind",
      "PostgreSQL (NeonDB + Prisma)",
      "Google Gemini",
      "Clerk"
    ],
    link: "https://gen-five-wheat.vercel.app/",
  },
  {
    imagePath: "/chatapp.png",
    title: "Realtime Chat App",
    description:
      "Built a full-stack real-time chat application using TypeScript, React, and Socket.io. Implemented user authentication with JWT, real-time messaging, and PostgreSQL database with Prisma ORM. Features include online status indicators, message history, and gender-based avatar generation. a multi-tool AI platform by integrating third-party APIs to power 6 distinct features. Utilised Clerk to implement secure user authentication and gating feature access",
      skills: [
      "TypeScript",
      "React",
      "Tailwind",
      "PostgreSQL (NeonDB + Prisma)",
      "Socket.io",
    ],
    link: "https://realtime-chat-mtes.onrender.com/signup",
  },

  {
    imagePath: "/ipl-win-prediction.png",
    title: "IPL Win Prediction",
    description:
      "Achieved an accurancy of 79.8% in predicting matches. Analyzed match features, team performance, and player statistics. The project incorporates robust data preprocessing, feature engineering, and a logistic regression model to ensure reliable predictions.",
    skills: [
      "Jupyter Notebook",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Logistical Regression",
    ],
    link: "https://ipl-win-probability-prediction.streamlit.app/",
  },
  {
    imagePath: "/coffee.png",
    title: "Caffien",
    description:
      "Developed a coffee tracking app using Firebase and React. Implemented features like logging coffee consumption, calculating caffeine levels, cost analysis, and responsive design. Created a custom hook for global state and data management.",
    skills: ["Firebase", "React", "FantaCSS"],
    link: "https://caffien.netlify.app/",
  },
  {
    imagePath: "/popularity_dist.png",
    title: "Spotify Analytics ETL (Ongoing)",
    description:
      "Building an ETL pipeline to extract, transform, and load Spotify data into a PostgreSQL database. The project aims to analyze user listening habits, track trends, and generate personalized recommendations.",
    skills: ["Python", "SQL"],
    link: "https://github.com/SharmaKabir/spotify-analytics-ETL",
  },

  {
    imagePath: "/tyrepitstop.png",
    title: "F1 Tyre Pit  Strategy Simulator",
    description:
      "Tool for optimizing tyre strategies in a racing simulation. Evaluates different tyre combinations and determines the best pit stop strategy to minimize total lap time over a given number of laps and also plots the lap times for visual comparision.",
    skills: ["Python", "NumPy", "Matplotlib"],
    link: "https://github.com/SharmaKabir/f1-tyre-pit-strategy",
  },
  {
    imagePath: "/sign-and-draw.png",
    title: "Sign and Draw",
    description: "Canvas Web App allowing users to draw and download quickly.",
    skills: ["HTML", "CSS", "JavaScipt"],
    link: "https://sharmakabir.github.io/sign-fast/",
  },

  {
    imagePath: "/quoteapp.png",
    title: "Quote Generator",
    description:
      "Fully Responsive Quote Generator built with HTML, CSS and vanilla JS and integrated Twitter API to help users share their favourite quotes",
    skills: ["HTML", "CSS", "JavaScipt"],
    link: "https://chimerical-brigadeiros-b12887.netlify.app/",
  },

  {
    imagePath: "/infinity-scroll.png",
    title: "Infinity Scroll",
    description:
      "Built an infinite scroll image gallery using Unsplash API. Implemented dynamic image loading on scroll.",
    skills: ["HTML", "CSS", "JavaScript", "Unsplash API"],
    link: "https://eclectic-bombolone-013fb5.netlify.app/",
  },
  // {
  //   imagePath: "/calculator.png",
  //   title: "Calculator",
  //   description:
  //     "Fully functional calculator web app built using Vanilla JavaScript, HTML and CSS.",
  //   skills: ["HTML", "CSS", "JavaScript"],
  //   link: "https://hilarious-jelly-32d7af.netlify.app/",
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
            {/* ////////////////////////// */}
          </a>
        ))}
      </>
    </section>
  );
}
