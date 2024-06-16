"use client";

import Image from "next/image";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Linkedin } from "lucide-react";
import Link from "next/link";

// Array of team members
const persons = [
  {
    name: "Abdoulaye DIALLO",
    role: "CEO & Founder",
    imageUrl: "/team/abdoulaye_diallo.png",
    linkeinUrl: "https://ca.linkedin.com/in/sohail-farooq-mqf-msc-mba-05b4403",
  },
  {
    name: "Jonathan ALLARASSEM",
    role: "Head of R&D & Co-Founder",
    imageUrl: "/team/Jonathan.jpg",
    linkeinUrl: "https://ca.linkedin.com/in/andrew-mcgregor-2a353a1",
  },
  {
    name: "Saliou DIOUF",
    role: "CTO & Co-Founder",
    imageUrl: "/team/Saliou_Diouf.jpg",
    linkeinUrl: "https://ca.linkedin.com/in/andypoprawa",
  },
  {
    name: "Aliou WADE",
    role: "Senior Software Engineer & Architect",
    imageUrl: "/team/Aliou.png",
    linkeinUrl: "https://ca.linkedin.com/in/aliou-wade-35a435196",
  },
  {
    name: "Babacar SOW",
    role: "Hardware Team Lead",
    imageUrl: "/team/Babacar_Sow.jpg",
    linkeinUrl: "https://ca.linkedin.com/in/paolasaad",
  },
  {
    name: "Mouhamad GUEYE",
    role: "Software Engineer",
    imageUrl: "/team/mouhamad_gueye.jpg",
    linkeinUrl: "https://ca.linkedin.com/in/andrew-mcgregor-2a353a1",
  },
];

export function Team() {
  const [activeItem, setActiveItem] = useState(0);
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const timeoutRef = useRef<number | any | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  return (
    <div className="h-full w-full overflow-scroll flex items-center justify-start my-8">
      <div className="w-full">
        <ul
          ref={wrapperRef}
          className="group flex flex-col gap-3 md:h-[500px] md:flex-row md:justify-between w-screen"
        >
          {persons.map((person, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "relative md:hover:[&[aria-current='false']]:cursor-zoom-in md:w-[18%] md:[&[aria-current='true']]:w-[500px]",
                "md:[transition:width_var(--transition,200ms_ease-in)]",
                "md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-background",
                "md:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%] md:hover:w-[22%]"
              )}
              key={person.name}
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg border md:border-none">
                <Image
                  className="absolute right-0 top-1/2 h-auto w-24 max-w-none -translate-y-1/2 object-cover grayscale md:left-1/2 md:h-[500px] md:w-full md:-translate-x-1/2"
                  src={person.imageUrl}
                  alt={person.name}
                  width={300}
                  height={500}
                  quality={100}
                />
                <div
                  className={classNames(
                    "max-md:hidden inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:md:bg-gradient-to-tl from-transparent to-accent to-60% after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-gradient-to-tl md:absolute md:transition-opacity",
                    activeItem === index ? "md:opacity-50" : "md:opacity-0"
                  )}
                />
                <div
                  className={classNames(
                    "max-md:hidden top-0 left-0 w-full p-4 transition-[transform,opacity] md:absolute",
                    activeItem === index
                      ? "md:translate-x-0 md:opacity-100"
                      : "md:translate-x-4 md:opacity-0"
                  )}
                >
                  <div className="w-full flex items-center justify-between">
                    <p className="text-sm uppercase w-[200px] md:text-background dark:text-foreground xl:text-lg">
                      {person.role}
                    </p>
                    <Link href={person.linkeinUrl} target="_blank">
                      <Linkedin
                        className="h-6 w-6 max-md:hidden"
                        strokeWidth={1}
                      />
                    </Link>
                  </div>
                  <p className="text-lg font-black md:w-[200px] text-wrap md:text-background dark:text-foreground xl:text-2xl">
                    {person.name}
                  </p>

                </div>
                <div className="w-full p-2">
                    <p className="text-sm uppercase w-[200px] md:text-background dark:text-foreground md:text-lg">
                      {person.role}
                    </p>

                  <p className="text-lg font-black md:w-[200px] text-wrap md:text-background dark:text-foreground md:text-2xl">
                    {person.name}
                  </p>
                  <Link
                    href={person.linkeinUrl}
                    target="_blank"
                    className="md:hidden"
                  >
                    <Linkedin className="h-4 w-4" strokeWidth={1} />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
