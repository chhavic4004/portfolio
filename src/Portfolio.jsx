import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100" style={{ fontFamily: 'Times New Roman, serif' }}>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="text-center z-10 max-w-4xl">
          <div className="mb-6">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <img
                 src="public\chhavi.jpg"
                 alt="Chhavi Choudhary"
                 className="w-full h-full rounded-full object-cover bg-slate-800"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-4 text-white">
            Hi, I'm Chhavi Choudhary
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-gray-300 leading-relaxed">
            I'm a Computer Science undergraduate at IGDTUW, passionate about solving problems through code.
          </p>
          
          <p className="text-lg mb-8 text-purple-300">
            Currently exploring AI/ML while strengthening my fundamentals in DSA and competitive programming.
          </p>
          
          <div className="flex gap-6 justify-center text-gray-400 mb-6">
            <a href="mailto:chhavic751@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail className="w-7 h-7" />
            </a>
            <a href="https://www.linkedin.com/in/chhavi-choudhary-62930431a/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="https://github.com/chhavic4004" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github className="w-7 h-7" />
            </a>
          </div>
          
          <a 
            href="https://drive.google.com/file/d/1YUTtdcQJ_ONhyvwDl1XhOGZRq5jK44Qi/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg transition-colors"
          >
            View My Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-8 text-white pb-3 border-b border-purple-500 border-opacity-30">
            About Me
          </h2>
          
          <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
            <p>
              I'm currently pursuing my Bachelor's degree in Computer Science at Indira Gandhi Delhi Technical University for Women. 
              My focus has been on building a strong foundation in programming and problem-solving.
            </p>
            
            <p>
              I spend a lot of my time working on Data Structures and Algorithms, primarily using C and C++. 
              I believe that understanding these fundamentals deeply is crucial, so I practice regularly to improve my logical thinking and coding efficiency.
            </p>
            
            <p>
              Recently, I've been expanding into Python and exploring exciting areas like machine learning, natural language processing, 
              and generative AI. I've also picked up some basics in NumPy, R programming, IoT concepts, and AI prompt engineering through 
              various internships and self-learning.
            </p>
            
            <p>
              Right now, I'm focused on hands-on learning and building meaningful projects. I'm always open to opportunities 
              that help me grow—whether that's internships, collaborative projects, or just learning something new.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-12">
            <h3 className="text-2xl mb-6 text-white">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {['C', 'C++', 'Python', 'Data Structures', 'Algorithms', 'Machine Learning', 'NLP', 
                'Generative AI', 'NumPy', 'R Programming', 'IoT', 'Prompt Engineering'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-slate-800 bg-opacity-60 border border-purple-500 border-opacity-30 rounded-md text-gray-300 hover:border-opacity-60 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Recognition */}
          <div className="mt-12">
            <h3 className="text-2xl mb-6 text-white">Recognition & Achievements</h3>
            <div className="space-y-4">
              {[
                { title: 'AlgoUniversity Technology Fellowship (ATF 2025)', detail: 'Qualified for Stage 1 (Top 8%)', cert: 'https://drive.google.com/file/d/1H5l7hEnTOcViLD4yK3L_oisG_2kpE9N9/view?usp=sharing' },
                { title: 'Katalyst Scholarship', detail: 'Recipient for academic excellence', cert: 'https://drive.google.com/file/d/1ULHvLUwkkOb5uEnoKbcGuec-PFDUI6yq/view?usp=sharing' },
                { title: 'Reliance Foundation Scholarship', detail: 'Selected as Foundation Scholar', cert: 'https://drive.google.com/file/d/1IXJQHvC2LfYPDFDVVTZFyEfcMtC9dndr/view?usp=sharing' },
                { title: 'Certificate of Outstanding Performance', detail: 'For research contributions at ACM', cert: 'https://drive.google.com/file/d/1LPfI9Cawq4IdRMv0mxaCeDu9vLZ1dO_Q/view?usp=sharing' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-slate-800 bg-opacity-40 border border-purple-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-colors group">
                  <Award className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.detail}</p>
                  </div>
                  <a 
                    href={item.cert} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    View <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-black bg-opacity-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-8 text-white pb-3 border-b border-purple-500 border-opacity-30">
            Experience
          </h2>

          <div className="space-y-8">
            <div className="border-l-2 border-purple-500 border-opacity-40 pl-6 pb-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-2xl text-white">Research Intern</h3>
                    <p className="text-purple-300 text-lg">ACM Student Chapter - IGDTUW</p>
                    <p className="text-gray-500 text-sm mt-1">September 2024 - April 2025</p>
                  </div>
                </div>
                <a 
                  href="https://drive.google.com/file/d/1LPfI9Cawq4IdRMv0mxaCeDu9vLZ1dO_Q/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1 flex-shrink-0"
                >
                  Certificate <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-gray-300 leading-relaxed mt-3">
                I worked on a research project analyzing sentiment in tweets before, during, and after COVID-19 using 
                machine learning and NLP techniques. My responsibilities included data preprocessing, exploratory analysis, 
                and comparing different sentiment analysis approaches. The project gave me hands-on experience with real-world 
                data and research methodology. I was awarded a Certificate of Outstanding Performance for my contributions.
              </p>
            </div>

            <div className="border-l-2 border-purple-500 border-opacity-40 pl-6 pb-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-start gap-4">
                  <Code2 className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-2xl text-white">Cybersecurity Intern</h3>
                    <p className="text-purple-300 text-lg">CDAC, Noida</p>
                    <p className="text-gray-500 text-sm mt-1">July 2025 - August 2025</p>
                  </div>
                </div>
                <a 
                  href="https://drive.google.com/file/d/1UYknlr1d31MVxbIgy7Yc-1Vb1DDjIlg5/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1 flex-shrink-0"
                >
                  Certificate <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-gray-300 leading-relaxed mt-3">
                During this internship, I gained practical exposure to cybersecurity fundamentals, tools, and best practices. 
                The structured training program helped me understand various security concepts and their real-world applications.
              </p>
            </div>

            <div className="border-l-2 border-purple-500 border-opacity-40 pl-6 pb-8">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-start gap-4">
                  <Code2 className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-2xl text-white">Summer Intern – Generative AI</h3>
                    <p className="text-purple-300 text-lg">IGDTUW in association with Sansoftech Services</p>
                    <p className="text-gray-500 text-sm mt-1">June 2025 - July 2025</p>
                  </div>
                </div>
                <a 
                  href="https://drive.google.com/file/d/1kSfkhMSg-SHA9gMfFr9Sr6jYYssTaSft/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1 flex-shrink-0"
                >
                  Certificate <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-gray-300 leading-relaxed mt-3">
                This six-week internship introduced me to the world of Generative AI and Prompt Engineering. 
                I learned about prompt design, experimented with different approaches, and worked on AI-assisted workflows. 
                It was fascinating to see how the right prompts can significantly improve AI outputs.
              </p>
            </div>

            <div className="border-l-2 border-purple-500 border-opacity-40 pl-6">
              <div className="flex items-start gap-4 mb-3">
                <GraduationCap className="w-5 h-5 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-2xl text-white">Reliance Foundation Scholar</h3>
                  <p className="text-purple-300 text-lg">Reliance Foundation</p>
                  <p className="text-gray-500 text-sm mt-1">December 2024 - Present</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mt-3">
                Selected as a scholar for the Reliance Foundation Scholarship program. This opportunity provides access 
                to mentorship, resources, and a network of like-minded students and professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-8 text-white pb-3 border-b border-purple-500 border-opacity-30">
            Projects & Work
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-slate-800 bg-opacity-40 border border-purple-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-colors">
              <h3 className="text-2xl text-white mb-3">COVID-19 Sentiment Analysis Research</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A comprehensive study analyzing public sentiment through tweets during different phases of the pandemic. 
                Used various machine learning models and NLP techniques to understand emotional patterns and public response.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">Python</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">NLP</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">Machine Learning</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">Data Analysis</span>
              </div>
            </div>

            <div className="p-6 bg-slate-800 bg-opacity-40 border border-purple-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-colors">
              <h3 className="text-2xl text-white mb-3">LawMate — AI Legal Assistance Platform</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Built an AI-powered legal assistance platform with a responsive HTML/CSS frontend,
integrating legal QA, FAQs, and document generation features.Implemented AI functionality using the Groq API with Gradio and Streamlit, enabling
interactive legal queries and automated document workflows.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">Python</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">NLP</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">Machine Learning</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">Data Analysis</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">HTML</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">CSS</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">JS</span>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/drishtisaini/lawmate-aid?tab=readme-ov-file" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                 <a 
                  href="https://chhavic4004.github.io/lawmate_new/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>

            <div className="p-6 bg-slate-800 bg-opacity-40 border border-purple-500 border-opacity-20 rounded-lg hover:border-opacity-40 transition-colors">
              <h3 className="text-2xl text-white mb-3">Fitu — Mood-Adaptive Fitness Platform</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Built a mood-adaptive fitness web application that personalizes workouts, tracks discipline, and
identifies behavioral blockers using a clean, user-focused interface.Developed the frontend using React, Vite, Tailwind CSS, JavaScript, and HTML,delivering a
fast, responsive UI that promotes habit consistency and user engagement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">React</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">Tailwind</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">Html</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">JS</span>
                <span className="px-3 py-1 bg-slate-900 text-sm text-purple-300 rounded">Vite</span>
              </div>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/chhavic4004/fitu-your-daily-mood-workout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a 
                  href="https://fitu-your-daily-mood-workout.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 bg-black bg-opacity-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-8 text-white pb-3 border-b border-purple-500 border-opacity-30">
            Education
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl text-white">Bachelor of Technology in Computer Science</h3>
                <p className="text-purple-300 text-lg">Indira Gandhi Delhi Technical University for Women (IGDTUW)</p>
                <p className="text-gray-400 mt-1">2024 - 2028</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <GraduationCap className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl text-white">Katalyst Program</h3>
                <p className="text-purple-300 text-lg">Katalyst India</p>
                <p className="text-gray-400 mt-1">December 2024 - August 2028</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6 text-white">
            Let's Connect
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new opportunities, collaborations, or just having a conversation 
            about technology and learning. Feel free to reach out!
          </p>

          <a 
            href="mailto:chhavic751@gmail.com"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Get In Touch
          </a>
          
          <div className="flex gap-8 justify-center mt-10 text-gray-400">
            <a href="mailto:chhavic751@gmail.com" className="hover:text-purple-400 transition-colors" title="Email">
              <Mail className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/chhavichoudhary-62930431a" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" title="LinkedIn">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" title="GitHub">
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-40 border-t border-purple-500 border-opacity-20 py-8 text-center">
        <p className="text-gray-500">
          © 2026 Chhavi Choudhary
        </p>
      </footer>
    </div>
  );
}