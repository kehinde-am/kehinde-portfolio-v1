import React from 'react';
import { SiReact, SiRedux, SiNextdotjs, SiVuedotjs, SiPhp, SiJavascript, SiJquery, SiTailwindcss, SiThreedotjs, SiSass, SiPostgresql, SiMysql, SiMongodb, SiExpress, SiNodedotjs, SiCypress, SiJest, SiPostman, SiFlutter, SiFirebase, SiDart, SiGraphql, SiGatsby, SiDocker, SiLaravel, SiCodeigniter, SiPython, SiVite, SiWebpack, SiBabel } from 'react-icons/si';

const toolsAndTech = [
  {
    category: 'Frontend',
    tools: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Vue.js', icon: <SiVuedotjs /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'jQuery', icon: <SiJquery /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      { name: 'Three.js', icon: <SiThreedotjs /> },
      { name: 'Sass', icon: <SiSass /> }
    ]
  },
  {
    category: 'Backend',
    tools: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'ExpressJS', icon: <SiExpress /> },
      { name: 'NodeJS', icon: <SiNodedotjs /> },
      { name: 'PHP', icon: <SiPhp /> }
    ]
  },
  {
    category: 'Testing',
    tools: [
      { name: 'Cypress', icon: <SiCypress /> },
      { name: 'Jest', icon: <SiJest /> },
      { name: 'Postman', icon: <SiPostman /> }
    ]
  },
  {
    category: 'Familiar',
    tools: [
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Dart', icon: <SiDart /> },
      { name: 'GraphQL', icon: <SiGraphql /> },
      { name: 'Gatsby', icon: <SiGatsby /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Laravel', icon: <SiLaravel /> },
      { name: 'Codeigniter', icon: <SiCodeigniter /> },
      { name: 'Python', icon: <SiPython /> }
    ]
  },
  {
    category: 'Bundlers',
    tools: [
      { name: 'Vite', icon: <SiVite /> },
      { name: 'Webpack', icon: <SiWebpack /> },
      { name: 'Babel', icon: <SiBabel /> }
    ]
  }
];

const ToolsAndTechnologies = () => {
  return (
    <div className="container mx-auto p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Tools & Technologies</h2>
      {toolsAndTech.map(category => (
        <div key={category.category}>
          <h3 className="text-xl font-bold text-white mt-4 mb-2">{category.category}</h3>
          <div className="flex flex-wrap justify-start items-center gap-4">
            {category.tools.map(tool => (
              <div key={tool.name} className="flex flex-col items-center bg-black p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="text-blue-500 text-3xl mb-2">{tool.icon}</div>
                <span className="text-sm text-white">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsAndTechnologies;
