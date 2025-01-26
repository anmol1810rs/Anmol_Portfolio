import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, GraduationCap, Briefcase, Award, X } from 'lucide-react';
import ForceGraph2D from 'react-force-graph-2d';

interface Node {
  id: string;
  title: string;
  description: string;
  layer: number;
  icon: string;
  x?: number;
  y?: number;
}

interface Link {
  source: string;
  target: string;
}

const NeuralQuest = ({ onClose }) => {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [completedNodes, setCompletedNodes] = useState<string[]>([]);
  const [gameCompleted, setGameCompleted] = useState(false);

  const nodes: Node[] = [
    // Layer 0 (Input)
    {
      id: 'education-sfu',
      title: 'Master\'s at SFU',
      description: 'Achieved a remarkable 3.94/4.33 CGPA in Professional Computer Science with Big Data specialization.',
      layer: 0,
      icon: 'graduation'
    },
    {
      id: 'education-mit',
      title: 'BTech at MIT',
      description: 'Graduated with 9.29/10.00 CGPA in Information Technology with a Minor in Big Data.',
      layer: 0,
      icon: 'graduation'
    },
    
    // Layer 1 (Hidden Layer 1)
    {
      id: 'career-jll',
      title: 'Data Engineer Intern',
      description: 'Enhanced ETL pipelines and automated data workflows at JLL/T, improving efficiency by 56%.',
      layer: 1,
      icon: 'briefcase'
    },
    {
      id: 'career-onecup',
      title: 'AI Engineer',
      description: 'Generated 7M+ realistic animal images using Stable Diffusion and developed LLM-based tracking systems.',
      layer: 1,
      icon: 'brain'
    },
    
    // Layer 2 (Hidden Layer 2)
    {
      id: 'vision-sylvester',
      title: 'Vision Lead Engineer',
      description: 'Developed 3+ Vision Pipelines for cat pain detection using GCP and Vertex AI.',
      layer: 2,
      icon: 'brain'
    },
    {
      id: 'vision-generative',
      title: 'Generative AI Expert',
      description: 'Pioneered AI solutions using Visual Question Answering and RAGs for enhanced analysis.',
      layer: 2,
      icon: 'award'
    },
    
    // Layer 3 (Output)
    {
      id: 'current-role',
      title: 'Tech Visionary',
      description: 'Leading innovation in Computer Vision and AI, ready to tackle the next big challenge in artificial intelligence.',
      layer: 3,
      icon: 'award'
    }
  ];

  // Create links between layers
  const links: Link[] = [];
  for (let i = 0; i < nodes.length; i++) {
    const currentNode = nodes[i];
    const nextLayerNodes = nodes.filter(n => n.layer === currentNode.layer + 1);
    nextLayerNodes.forEach(nextNode => {
      links.push({
        source: currentNode.id,
        target: nextNode.id
      });
    });
  }

  const handleNodeClick = useCallback((node: Node) => {
    if (!completedNodes.includes(node.id)) {
      setSelectedNode(node);
    }
  }, [completedNodes]);

  const completeNode = (nodeId: string) => {
    setCompletedNodes(prev => {
      const newCompleted = [...prev, nodeId];
      // Check if all nodes are completed
      if (newCompleted.length === nodes.length) {
        setGameCompleted(true);
      }
      return newCompleted;
    });
    setSelectedNode(null);
  };

  const getNodeColor = (node: Node) => {
    if (completedNodes.includes(node.id)) {
      return '#8B5CF6'; // violet-600
    }
    return '#374151'; // gray-700
  };

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'graduation':
        return <GraduationCap className="w-4 h-4" />;
      case 'briefcase':
        return <Briefcase className="w-4 h-4" />;
      case 'brain':
        return <Brain className="w-4 h-4" />;
      case 'award':
        return <Award className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/95 z-50 flex items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gray-800 rounded-xl w-full max-w-6xl h-[80vh] relative overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded-lg z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="absolute top-4 left-4 right-4 text-center z-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Neural Path to Success
          </h2>
          <p className="text-gray-400 mt-2">
            Explore Anmol's journey through the neural network of achievements
          </p>
        </div>

        <div className="w-full h-full">
          <ForceGraph2D
            graphData={{ nodes, links }}
            nodeRelSize={8}
            nodeColor={getNodeColor}
            linkColor={() => '#4B5563'} // gray-600
            nodeCanvasObject={(node: Node, ctx, globalScale) => {
              const label = node.title;
              const fontSize = 12/globalScale;
              ctx.font = `${fontSize}px Sans-Serif`;
              const textWidth = ctx.measureText(label).width;
              const iconSize = 20/globalScale;
              
              // Draw node circle
              ctx.beginPath();
              ctx.arc(node.x!, node.y!, 8, 0, 2 * Math.PI);
              ctx.fillStyle = getNodeColor(node);
              ctx.fill();
              
              // Draw text below
              ctx.fillStyle = 'white';
              ctx.textAlign = 'center';
              ctx.fillText(label, node.x!, node.y! + 15);
            }}
            onNodeClick={handleNodeClick}
            d3VelocityDecay={0.3}
          />
        </div>

        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="absolute bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                {renderIcon(selectedNode.icon)}
                <h3 className="text-xl font-bold text-violet-400">
                  {selectedNode.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-4">{selectedNode.description}</p>
              <button
                onClick={() => completeNode(selectedNode.id)}
                className="px-4 py-2 bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
              >
                Unlock Achievement
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {gameCompleted && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="absolute inset-0 bg-gray-900/95 flex items-center justify-center"
            >
              <div className="text-center p-8">
                <Award className="w-16 h-16 text-violet-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-violet-400 mb-4">
                  Neural Network Complete!
                </h2>
                <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                  You've activated all nodes in Anmol's neural network of achievements!
                  Ready to connect and discuss more?
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://www.linkedin.com/in/anmol-1810rs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default NeuralQuest;