import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Message {
  type: 'user' | 'bot';
  content: string;
  buttons?: string[];
}

const generateResponse = (message: string) => {
  const normalizedMessage = message.toLowerCase();
  
  // Technical Skills categories
  if (normalizedMessage.includes('ml') || normalizedMessage.includes('vision')) {
    return {
      content: "🧠 **ML & Vision Expertise**\n\n" +
        "• OpenCV, PyTorch, TensorFlow, Sci-Kit Learn\n" +
        "• Keras, HuggingFace, ONNX\n" +
        "• RAGs, Langchain, Diffusion\n" +
        "• ControlNet, DALLE, W&B\n" +
        "• GPT4.0+\n\n" +
        "Want to know more about other skills?",
      buttons: ['Programming', 'Cloud', 'Work Experience', 'Back to menu']
    };
  }

  if (normalizedMessage.includes('programming')) {
    return {
      content: "💻 **Programming Skills**\n\n" +
        "• Python, R, NumPy, Pandas\n" +
        "• PySpark, Hadoop\n" +
        "• Android Development\n" +
        "• C/C++, Java\n" +
        "• SQL, NoSQL\n" +
        "• Tableau, Seaborn, MatPlotlib, Plotly, Dash\n\n" +
        "Interested in other areas?",
      buttons: ['ML & Vision', 'Cloud', 'Work Experience', 'Back to menu']
    };
  }

  if (normalizedMessage.includes('cloud')) {
    return {
      content: "☁️ **Cloud & DevOps**\n\n" +
        "• Google Cloud Platform\n" +
        "• Azure AI\n" +
        "• AWS\n\n" +
        "Want to explore other skills or experiences?",
      buttons: ['ML & Vision', 'Programming', 'Work Experience', 'Back to menu']
    };
  }

  // Work Experience responses
  if (normalizedMessage.includes('work') || normalizedMessage.includes('experience')) {
    return {
      content: "🚀 **Professional Journey**\n\n" +
        "Choose a role to learn more:\n\n" +
        "• Computer Vision Lead Engineer at Sylvester AI\n" +
        "• AI Engineer at OneCup AI\n" +
        "• Data Engineer Intern at JLL/T",
      buttons: ['Sylvester AI', 'OneCup AI', 'JLL/T', 'Back to menu']
    };
  }

  if (normalizedMessage.includes('sylvester')) {
    return {
      content: "🔮 **Computer Vision Lead Engineer at Sylvester AI**\n\n" +
        "Leading groundbreaking developments in feline health monitoring:\n\n" +
        "• Developed and deployed 3+ Vision Pipelines on Google Cloud Platform (GCP) and Vertex AI\n" +
        "• Processed and analyzed video data for 150+ cats using MMPose for precise pose estimation\n" +
        "• Engineered a cutting-edge Generative AI solution leveraging Visual Question Answering and RAGs\n" +
        "• Implemented real-time video processing pipelines for immediate health analysis\n" +
        "• Optimized ML models for edge deployment, reducing inference time by 40%\n\n" +
        "Want to know more about other roles?",
      buttons: ['OneCup AI', 'JLL/T', 'Technical Skills', 'Back to menu']
    };
  }

  if (normalizedMessage.includes('onecup')) {
    return {
      content: "🤖 **AI Engineer at OneCup AI**\n\n" +
        "Pioneered innovative AI solutions for animal monitoring:\n\n" +
        "• Generated 7 Million+ realistic animal images using Stable Diffusion and ControlNet\n" +
        "• Utilized 11+ NVIDIA A100 GPUs using Google Cloud and Vertex AI for large-scale training\n" +
        "• Developed an automated, LLM-based real-time animal tracking alert system\n" +
        "• Implemented custom loss functions for improved model convergence\n" +
        "• Achieved 92% accuracy in animal behavior classification\n" +
        "• Reduced false positives by 65% through advanced data augmentation\n\n" +
        "Want to explore other experiences?",
      buttons: ['Sylvester AI', 'JLL/T', 'Technical Skills', 'Back to menu']
    };
  }

  if (normalizedMessage.includes('jll')) {
    return {
      content: "📊 **Data Engineer Intern at JLL/T**\n\n" +
        "Streamlined data operations and enhanced efficiency:\n\n" +
        "• Leveraged ETL tools including Azure, Red DW, GoAnywhere MFT, and Informatica\n" +
        "• Enhanced projects such as Client Data Trashing, improving data security\n" +
        "• Successfully automated daily Client Data Loads, reducing manual effort by 75%\n" +
        "• Implemented data validation checks, reducing errors by 40%\n" +
        "• Developed documentation for data pipelines and processes\n\n" +
        "Interested in other roles or projects?",
      buttons: ['Sylvester AI', 'OneCup AI', 'Projects', 'Back to menu']
    };
  }

  // Project responses
  if (normalizedMessage.includes('project')) {
    return {
      content: "🚀 **Notable Projects**\n\n" +
        "Choose a project to learn more about:\n\n" +
        "• Career-Acer: AI-Powered Interview Prep Tool\n" +
        "• GoConcert: Concert Recommendation System",
      buttons: ['Career-Acer', 'GoConcert', 'Work Experience', 'Back to menu']
    };
  }

  if (normalizedMessage.includes('career-acer')) {
    return {
      content: "🎯 **Career-Acer: AI-Powered Interview Prep Tool**\n\n" +
        "An innovative interview preparation platform:\n\n" +
        "• Leveraged CrewAI and Langchain for intelligent interview simulation\n" +
        "• Implemented RAGs for context-aware responses\n" +
        "• Integrated multiple LLMs for diverse feedback\n" +
        "• Created personalized learning paths\n" +
        "• Achieved 90% user satisfaction rate\n\n" +
        "Want to explore the other project?",
      buttons: ['GoConcert', 'Technical Skills', 'Back to menu']
    };
  }

  if (normalizedMessage.includes('goconcert')) {
    return {
      content: "🎵 **GoConcert: Concert Recommendation System**\n\n" +
        "A personalized concert discovery platform:\n\n" +
        "• Integrated Ticketmaster and Spotify APIs\n" +
        "• Used PySpark for large-scale data processing\n" +
        "• Implemented NLP for user preference analysis\n" +
        "• Built Random Forest model for recommendations\n" +
        "• Achieved 85% recommendation accuracy\n\n" +
        "Want to explore other areas?",
      buttons: ['Career-Acer', 'Work Experience', 'Back to menu']
    };
  }

  if (normalizedMessage.includes('education')) {
    return {
      content: "🎓 **Academic Excellence**\n\n" +
        "**Master's of Science in Professional Computer Science**\n" +
        "• Simon Fraser University\n" +
        "• Specialization in Big Data\n" +
        "• GPA: 3.94/4.33\n" +
        "• Period: Sept 2022 - April 2024\n\n" +
        "**Bachelor of Technology in Information Technology**\n" +
        "• Manipal Institute of Technology\n" +
        "• Minor Specialization in Big Data\n" +
        "• GPA: 9.29/10.00\n" +
        "• Period: July 2018 - July 2022\n\n" +
        "**Certifications**\n" +
        "• Google Cloud Certified - Professional Machine Learning Engineer",
      buttons: ['Technical Skills', 'Work Experience', 'Projects', 'Back to menu']
    };
  }

  if (normalizedMessage.includes('contact')) {
    return {
      content: "📫 **Let's Connect!**\n\n" +
        "• **LinkedIn:** [Anmol Malhotra](https://www.linkedin.com/in/anmol-1810rs/)\n" +
        "• **Email:** 96anmolmalhotra@gmail.com\n\n" +
        "Always excited to discuss tech, AI, and new opportunities!",
      buttons: ['Technical Skills', 'Work Experience', 'Back to menu']
    };
  }

  if (normalizedMessage.includes('joke')) {
    const jokes = [
      "Why do ML engineers prefer dark mode? Because light makes their models overfit! 😄",
      "What's an AI's favorite dance? The neural shuffle! 🕺",
      "Why did the computer vision model go to the doctor? It had too many artifacts! 👀",
      "What's a neural network's favorite snack? Byte-sized data! 🍪",
      "How does a computer vision engineer take a selfie? With a ConvNet-stick! 📸"
    ];
    return {
      content: jokes[Math.floor(Math.random() * jokes.length)],
      buttons: ['Another joke', 'Technical Skills', 'Work Experience', 'Back to menu']
    };
  }

  if (normalizedMessage.includes('menu') || normalizedMessage.includes('back')) {
    return {
      content: "What would you like to explore about Anmol?",
      buttons: ['Technical Skills', 'Work Experience', 'Projects', 'Education', 'Contact Info', 'Tell me a joke']
    };
  }

  return {
    content: "👋 I'm your AI guide to Anmol's tech journey! What would you like to explore?",
    buttons: ['Technical Skills', 'Work Experience', 'Projects', 'Education', 'Contact Info', 'Tell me a joke']
  };
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const response = generateResponse('');
      setMessages([{ type: 'bot', content: response.content, buttons: response.buttons }]);
    }
    scrollToBottom();
  }, [isOpen, messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInput('');

    // Simulate bot typing
    setTimeout(() => {
      const response = generateResponse(userMessage);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: response.content, 
        buttons: response.buttons 
      }]);
    }, 500);
  };

  const handleButtonClick = (button: string) => {
    setMessages(prev => [...prev, { type: 'user', content: button }]);
    
    // Simulate bot typing
    setTimeout(() => {
      const response = generateResponse(button);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: response.content, 
        buttons: response.buttons 
      }]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-violet-600 rounded-full shadow-lg hover:bg-violet-700 transition-colors chat-icon-bounce"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl w-full max-w-lg h-[600px] flex flex-col animate-fade-in">
            {/* Header */}
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6 text-violet-400" />
                <h2 className="font-semibold">AnmolBot</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    message.type === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' ? 'bg-violet-600' : 'bg-gray-700'
                    }`}
                  >
                    {message.type === 'user' ? (
                      <User className="w-5 h-5" />
                    ) : (
                      <Bot className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex flex-col gap-3 max-w-[80%]">
                    <div
                      className={`rounded-lg p-3 ${
                        message.type === 'user'
                          ? 'bg-violet-600'
                          : 'bg-gray-700'
                      }`}
                    >
                      <ReactMarkdown className="prose prose-invert prose-sm">
                        {message.content}
                      </ReactMarkdown>
                    </div>
                    {message.buttons && (
                      <div className="flex flex-wrap gap-2">
                        {message.buttons.map((button, i) => (
                          <button
                            key={i}
                            onClick={() => handleButtonClick(button)}
                            className="px-3 py-1 bg-gray-700 hover:bg-violet-600 rounded-full text-sm transition-colors"
                          >
                            {button}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button
                  type="submit"
                  className="p-2 bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;