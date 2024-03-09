"use client";

import React, { Fragment, useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import ModalKit from "@components/kit/Modal/Project";

import { PROJECTS } from "@utils/constants";

import { FaChevronRight as ChevronRightIcon } from "react-icons/fa";
import Image from "next/image";

const ProjectsScreen = () => {
  const [isOpen, setIsOpen] = useState<number | undefined>(undefined);
  const [dragging, setDragging] = useState<boolean>(false);

  const handleToggle = (index: number) => {
    setIsOpen(isOpen === undefined ? index : undefined);
  };

  return (
    <motion.div
      initial={{ scale: 0.4, opacity: 0.5 }}
      animate={{ scale: [0.4, 1.2, 1], opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full md:px-8 px-2 lg:px-32 xl:px-48 py-6 flex flex-col items-center gap-y-10 justify-center"
    >
      <h1 className="text-3xl md:text-5xl text-center font-sans mb-8 tracking-[0.4rem] md:tracking-[0.5rem] font-extrabold text-stroke-sm shadow-indigo-400">
        Projects
      </h1>
      <motion.div
        initial={{ scale: 0.5, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0.5 }}
        transition={{ duration: 1, ease: "backInOut" }}
        className="container grid gap-6 px-4 md:grid-cols-2 md:gap-8 lg:gap-10 xl:grid-cols-3 xl:max-w-6xl xl:mx-auto"
      >
        {PROJECTS.map((item, index) => (
          <div
            className="relative group cursor-pointer"
            key={index}
            onClick={() => handleToggle(index)}
          >
            <Image
              alt="Project"
              className="rounded-lg blur-[1px] object-cover w-full aspect-[4/3] group-hover:brightness-75 transition-all"
              height="400"
              width="600"
              src={item.imageSrc}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-black/40 rounded-lg group-hover:opacity-0 transition-opacity">
              <h3 className="text-2xl font-bold tracking-widest text-gray-50 dark:text-white">
                {item.title}
              </h3>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center opacity-0 rounded-lg group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-medium select-none line-clamp-4">
                {item.description}
              </p>
              <div className="inline-flex items-center underline hover:text-gray-900 dark:hover:text-indigo-600 cursor-pointer">
                View Project
                <ChevronRightIcon className="w-4 h-4 ml-1 inline-block text-indigo-600" />
              </div>
              <ModalKit
                key={index}
                onClose={() => handleToggle(index)}
                isOpen={isOpen === index}
                data={item}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsScreen;
