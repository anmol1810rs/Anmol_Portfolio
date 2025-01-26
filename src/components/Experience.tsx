import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Computer Vision Lead Engineer',
      company: 'Sylvester AI',
      location: 'Calgary, Canada',
      period: 'July 2024 - Present',
      achievements: [
        'Developed and deployed 3+ Vision Pipelines on Google Cloud Platform (GCP) and Vertex AI',
        'Processed and analyzed video data for 150+ cats using MMPose',
        'Engineered a Generative AI solution leveraging Visual Question Answering and RAGs'
      ]
    },
    {
      title: 'AI Engineer',
      company: 'OneCup AI',
      location: 'Vancouver, Canada',
      period: 'May 2023 - June 2024',
      achievements: [
        'Generated 7 Million+ realistic animal images using Stable Diffusion',
        'Utilized 11+ NVIDIA A100 GPUs using Google Cloud and Vertex AI',
        'Developed and Deployed an automated, LLM-based real-time animal tracking alert system'
      ]
    },
    {
      title: 'Data Engineer Intern',
      company: 'Jones Lang LaSalle (JLL/T)',
      location: 'Bengaluru, India',
      period: 'Jan 2022 - July 2022',
      achievements: [
        'Used ETL tools such as Azure, Red DW, GoAnywhere MFT, Informatica',
        'Introduced Enhancements in projects such as Client Data Trashing',
        'Successful in automating the daily Client Data Loads'
      ]
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8">Technical Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-violet-400">{exp.title}</h3>
                <div className="flex items-center text-gray-400 mt-1">
                  <Building2 size={16} className="mr-2" />
                  <span>{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-400">
                <Calendar size={16} className="mr-2" />
                <span>{exp.period}</span>
              </div>
            </div>
            
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;