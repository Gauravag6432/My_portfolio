import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Hi, I'm  
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"> Gaurav Agrawal</span>
          </h1>
          
          <div className="h-10 mb-6">
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 flex items-center">
              <span className="mr-2">I'm a</span>
              <span className="text-blue-600 dark:text-blue-400 relative">
                Full Stack Developer
              </span>
            </h2>
          </div>
          
          <p className="text-gray-600 dark:text-green-600 text-lg mb-8 max-w-lg">
            Experienced in creating scalable applications with modern technologies. 
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
            //   href="#projects" 
              href="https://github.com/Gauravag6432" 
               target="_blank"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 hover:shadow-lg"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            
            <a 
            // href="/Resme.pdf"
              href="https://drive.google.com/file/d/1it0UQsAwrNcpBWoXWQic3Wr5RsgiO8ms/view?usp=sharing"
              target="_blank"
              download
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Gauravag6432" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/gauravagrawalll/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="mailto:gauravag6432@gmail.com" 
              className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} className="text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-center relative">
          <div className="absolute w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute w-60 h-60 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl -translate-x-20 translate-y-20"></div>
          
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-1 rounded-2xl shadow-xl w-full max-w-md">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
              <div className="h-6 bg-gray-100 dark:bg-gray-700 flex items-center gap-1 px-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                    GA
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Gaurav Agrawal</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Full Stack Developer</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">MERN Stack</p>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">Java Full Stack</p>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">AI & Machine Learning</p>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                    <div class="mt-5 grid grid-cols-3 gap-2">
                        <div class="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg flex flex-col items-center justify-center">
                        <span class="text-xl font-bold text-blue-600 dark:text-blue-400">7.93</span>
                        <span class="text-xs text-gray-600 dark:text-gray-400">CGPA</span>
                        </div>
                        <div class="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg flex flex-col items-center justify-center">
                        <span class="text-xl font-bold text-purple-600 dark:text-purple-400">6+</span>
                        <span class="text-xs text-gray-600 dark:text-gray-400">Projects</span>
                        </div>
                        <div class="bg-green-50 dark:bg-green-900/20 p-2 rounded-lg flex flex-col items-center justify-center">
                        <span class="text-xl font-bold text-green-600 dark:text-green-400">2+</span>
                        <span class="text-xs text-gray-600 dark:text-gray-400">Internships</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-1">Scroll Down</span>
        <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;