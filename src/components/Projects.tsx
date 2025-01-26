import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Career-Acer: AI-Powered Interview Prep Tool',
      period: 'April 2024 - May 2024',
      description: 'AI-powered interview preparation platform using CrewAI, Langchain, RAGs, and LLMs.',
      technologies: ['OpenAI', 'Ollama', 'RAGs', 'Langchain', 'CrewAI'],
      achievements: [
        'Addressed interview preparation challenges with curated resources',
        'Implemented AI tools for data curation and delivery'
      ]
    },
    {
      title: 'GoConcert: Personalized Concert Recommendation System',
      period: 'Jan 2023 - April 2023',
      description: 'Web application for personalized concert recommendations using various APIs and ML techniques.',
      technologies: ['Ticketmaster API', 'Spotify API', 'PySpark', 'NLP', 'Random Forest'],
      achievements: [
        'Designed a Web-app solution for personalized concert experiences',
        'Developed using Data Science Pipeline and multiple APIs'
      ]
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-violet-400">{project.title}</h3>
              <span className="text-gray-400">{project.period}</span>
            </div>
            
            <p className="text-gray-300 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-violet-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;