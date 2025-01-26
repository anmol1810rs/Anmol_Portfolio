import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master's of Science in Professional Computer Science",
      specialization: "Spec. in Big Data",
      institution: "Simon Fraser University",
      location: "Burnaby, Canada",
      period: "Sept 2022 - April 2024",
      gpa: "3.94/4.33 CGPA"
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      specialization: "Minor Spec. in Big Data",
      institution: "Manipal Institute of Technology",
      location: "Karnataka, India",
      period: "July 2018 - July 2022",
      gpa: "9.29/10.00 CGPA"
    }
  ];

  const certifications = [
    {
      title: "Professional Machine Learning Engineer",
      issuer: "Google Cloud Certified - GCP",
      date: "Since Oct 2024"
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8">Education & Certifications</h2>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center">
                  <GraduationCap className="mr-2 text-violet-400" />
                  <h3 className="text-xl font-semibold text-violet-400">{edu.degree}</h3>
                </div>
                <p className="text-gray-400 mt-1">{edu.specialization}</p>
                <p className="text-gray-300 mt-2">{edu.institution}, {edu.location}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">{edu.period}</p>
                <p className="text-violet-400 font-semibold mt-2">{edu.gpa}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Certifications</h3>
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Award className="mr-2 text-violet-400" />
                  <div>
                    <h4 className="text-lg font-semibold text-violet-400">{cert.title}</h4>
                    <p className="text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-400">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;