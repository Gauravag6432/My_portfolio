import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Voya India",
      location: "Bengaluru",
      description: [
        "Built an internal travel management system that simplified and automated company-wide travel requests and approvals.",
        "Implemented end-to-end solution using technologies like Oracle APEX, JavaScript, HTML, CSS, PL/SQL and Oracle Database.",
        "Developed 10+ pages including the home page, login page, interactive report page, and forms page with extensive functionality.",
        "Designed a structured request and multi-level approval workflow, enhancing operational efficiency and user satisfaction.",
        "Collaborated with senior developers to implement new features and improve functionality",
        "Participated in code reviews and contributed to team discussions",
        "Worked on optimizing database queries and improving application performance"
      ],
      technologies: ["Oracle APEX", "CSS", "JavaScript", "Oracle Database"]
    },
    {
    title: "AI & ML Research Intern",
    company: "Centre for Artificial Intelligence and Robotics (CAIR) DRDO",
    location: "Bangalore",
    description: [
        "Conducted extensive research and experimentation with various model architectures and hyperparameter tuning to optimize performance.",
      "Developed and trained an Ensemble model to classify AI-generated vs. human-written text achieving 79% classification accuracy.",
      "Leveraged Python, NLP techniques, Deep Learning, FFT and BERT to extract meaningful textual features for model robustness.",
      "Processed 10k+ labeled datasets with Kaggle API and Random Forest Classifier for efficient and scalable AI text classification."
    ],
    technologies: ["Python", "NLP", "Deep Learning", "FFT", "BERT", "Random Forest"]
  }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My journey in software development through various roles and responsibilities.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-1" />
                      {exp.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.duration}
                    </div>
                  </div>
                </div>
              </div>

              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 dark:text-gray-400">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="pl-2">{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;