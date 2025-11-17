import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import portfolioImage from './Images/Portfolio.png';
import aiImage from './Images/AI.png';
import teslaImage from './Images/Tesla.png';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "Developed a personal portfolio website showcasing my projects, skills, and experience.",
      image: portfolioImage,
      tags: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Gauravag6432/My_portfolio",
      live: "https://gauravagrawalportfolio.vercel.app/",
      category: "MERN Web App"
    },
    {
      id: 2,
      title: "AI vs Human Text Classifier",
      description: "Developed an ensemble model for classifying text as AI-generated or human-written using BERT & FFT.",
      image: aiImage,
      tags: ["AI", "ML", "NLP", "FFT", "BERT"],
      github: "https://github.com/Gauravag6432/AI_vs_Human_text_classifier",
      live: "https://ai-text-classifier.streamlit.app/",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Tesla Stock Price Prediction Model",
      description: "Trained a Tesla stock price prediction model using Vertex AI.",
      image: teslaImage,
      tags: ["Google Cloud Platform", "Vertex AI", "ML", "AI"],
      github: "https://github.com/Gauravag6432/Tesla_stock_price_prediction_model",
      live: "https://github.com/Gauravag6432/Tesla_stock_price_prediction_model/blob/main/Tesla%20stock%20price%20prediction%20model.pdf",
      category: "Prediction ML Model"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest work across web development, AI/ML, and more. Each project represents my passion for creating innovative solutions.
          </p>
        </div>

        {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-medium">
            All
          </button>
          <button className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white rounded-full text-sm font-medium transition-colors">
            Web App
          </button>
          <button className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white rounded-full text-sm font-medium transition-colors">
            AI/ML
          </button>
          <button className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white rounded-full text-sm font-medium transition-colors">
            Extension
          </button>
        </div> */}


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div>
                    <span className="text-white text-sm bg-blue-600/90 px-2 py-1 rounded-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                    <a
                      href={project.live}
                      className="bg-blue-600/50 p-2 rounded-full hover:bg-blue-600/80 transition-colors"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 7).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {/* {project.tags.length > 3 && (
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
                      +{project.tags.length - 3} more
                    </span>
                  )} */}
                </div>
                <a
                  href={project.live}
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Details
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300"
          >
            View All Projects
            <ChevronRight size={20} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedProjects;