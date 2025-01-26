import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'ML & Vision',
      skills: ['OpenCV', 'PyTorch', 'TensorFlow', 'Sci-Kit Learn', 'Keras', 'HuggingFace', 'ONNX', 'RAGs', 'Langchain', 'Diffusion', 'ConrolNet', 'DALLE', 'W&B', 'GPT4.0+']
    },
    {
      title: 'Programming',
      skills: ['Python', 'R', 'NumPy', 'Pandas', 'PySpark', 'Hadoop', 'Android Development', 'C/C++', 'Java', 'SQL', 'NoSQL', 'Tableau', 'Seaborn', 'MatPlotlib', 'Plotly', 'Dash']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Google Cloud', 'Azure AI', 'AWS']
    },
    {
      title: 'Interpersonal',
      skills: ['Leadership', 'Adaptive', 'Public Speaking']
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map(category => (
          <div key={category.title} className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-violet-400">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-violet-600 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;