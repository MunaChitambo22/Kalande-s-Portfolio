"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Strategic Sourcing",
    desc: "Discover smarter, scalable sourcing strategies that align with your goals, delivering the right solutions at the right price.",
  },
  {
    img: "/image/blog2.svg",
    title: "Supplier Management",
    desc: "From vetting to quality control, we ensure you work with trusted, reliable partners every time.",
  },
  {
    img: "/image/blog3.svg",
    title: "Contract Negotiation",
    desc: "Protect your interests with expertly negotiated contracts, maximizing value and minimizing risk.",
  },
  {
    img: "/image/blog4.svg",
    title: "Logistics Coordination",
    desc: "A streamlined approach to logistics management, from start to finish.",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-2">
        {PROJECTS.map((props, idx) => (
          <div key={idx} className="flex justify-center">
            <div className="w-64 h-64">
              <ProjectCard {...props} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
