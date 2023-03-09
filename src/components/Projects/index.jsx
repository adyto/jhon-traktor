import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { urlFor, client } from '../../client';
import ProductItem from './ProductItem';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Projects = ({ featuredProject }) => {
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  const sortedDates = filterProjects
    .map((obj) => {
      return { ...obj, date: new Date(obj._createAt) };
    })
    .sort((a, b) => b.date - a.date);

  const handleProjectsFilter = (item) => {
    setActiveFilter(item);
    setTimeout(() => {
      if (item === 'all') {
        setFilterProjects(projects);
      } else {
        setFilterProjects(
          projects.filter((project) => project.tags.includes(item)),
        );
      }
    }, 500);
  };

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, []);
  return (
    <>
      {featuredProject ? (
        <div className="bg-text-color-palette-1 pb-20 lg:py-20 flex flex-col">
          <div className="container mx-auto flex flex-col justify-between items-center gap-y-2 mb-4 lg:flex-row lg:px-4 2xl:mb-10 2xl:flex-row">
            <h1 className="text-black font-semibold text-2xl lg:text-3xl 2xl:text-6xl">
              Featured Projects
            </h1>
            <div className="flex flex-wrap justify-center lg:flex-row gap-x-4 ">
              {[
                'all',
                'construction',
                'architecture',
                'building',
                'renovations',
                'interior',
              ].map((item, index) => (
                <div
                  key={item + index}
                  onClick={() => handleProjectsFilter(item)}
                  className={`capitalize font-semibold cursor-pointer text-sm lg:text-base 2xl:text-xl ${
                    activeFilter === item
                      ? 'text-black border-b-2 border-black'
                      : 'text-white'
                  }`}
                >
                  {item === 'all' ? 'All Works' : item}
                </div>
              ))}
            </div>
          </div>
          {sortedDates.length > 0 ? (
            <>
              <ProductItem dataProduct={sortedDates} />
            </>
          ) : (
            <div className=" h-56 2xl:h-[640px] flex justify-center items-center">
              <p className=" text-black font-semibold 2xl:text-3xl">
                No Have Projects
              </p>
            </div>
          )}
          <div className="container mx-auto items-end flex flex-col  lg:mt-4 xl:mt-6 2xl:mt-7">
            <Link className="flex flex-row items-center font-semibold gap-x-2 xl:text-xl xl:gap-x-3">
              <p>Explore All Projects</p>
              <BsFillArrowRightCircleFill className="lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h1>projects</h1>
        </>
      )}
    </>
  );
};

export default Projects;
