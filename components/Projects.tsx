/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { projectData } from "./ProjectList";
import Image from "next/image";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Projects() {
  const [isLoading, setLoading] = useState(true);

  const RenderProjects = (
    ProjectData: {
      title: string;
      image: string;
      github: string;
      link: string;
    }[]
  ) => {
    return ProjectData.map((ProjectData) => {
      return (
        <>
          <div className="mx-3 font-semibold">
            <div className="inline-block overflow-hidden">
              <a target="_blank" rel="noreferrer" href={ProjectData.link}>
                <Image
                  src={`${ProjectData.image}.png`}
                  alt={ProjectData.title}
                  width={944}
                  height={550}
                  className={cn(
                    "shadow-sm duration-700 ease-in-out",
                    isLoading
                      ? "scale-110 blur-2xl grayscale"
                      : "scale-100 blur-0 grayscale-0"
                  )}
                  onLoadingComplete={() => setLoading(false)}
                />
              </a>
              <div className="py-4 pr-4">
                <div className="mb-2 text-3xl text-black">
                  {ProjectData.title}
                </div>
                <div className="flex text-xl text-[#1b1b1b] tracking-[-0.03rem]">
                  <a target="_blank" rel="noreferrer" href={ProjectData.link}>
                    Live Site
                  </a>
                  <span className="mx-3">/</span>
                  <a target="_blank" rel="noreferrer" href={ProjectData.github}>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  const RenderFinal = (
    ProjectData: {
      title: string;
      image: string;
      github: string;
      link: string;
    }[]
  ) => {
    return (
      <div>
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2">
          {RenderProjects(ProjectData)}
        </div>
      </div>
    );
  };

  return <>{RenderFinal(projectData)}</>;
}
