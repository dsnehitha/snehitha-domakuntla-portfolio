import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import Section from './Section'

const experiences = [
  {
    title: "AI Engineer - Instructional Asst.",
    company: "University of Houston",
    period: "November 2023 – May 2025",
    location: "Houston, TX",
    achievements: [
      "Developed multimodal RAG-based student Q&A system using Llama 3.2 vision, Llama 3.2, FAISS, Qdrant achieving 50% faster response time than GPT-4. ",
      "Reduced RAG processing time by 100% through multi-threading and multi-processing.",
      "Fine-tuned Financial Summarizer model with LoRA for enhanced accuracy in summarizing complex financial content using Gemini, Qwen, HuggingFace Transformers.",
      "Led AI workshops on transformers and deep learning for 15+ staff, boosting AI fluency among 15+ staff."
    ]
  },
  {
    title: "AI Researcher",
    company: "University of Houston",
    period: "January 2025 - May 2025",
    location: "Houston, TX", 
    achievements: [
     "Developed ITAGA, an iterative adversarial agentic framework for synthetic tattoo image generation.",
    "Utilized Stable Diffusion XL and VLM discriminators (Llama-3.2-vision, LLaVA v1.6) to enhance privacy in biometric data.",
    "Optimized framework, reducing image generation time by 3x on Lambda vector GPU machines.",
    "Achieved realistic images, scoring 30% higher than standard SDXL model.",
    "Researched and implemented advanced algorithms to improve image fidelity and image adherence."
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "State Street Corporation",
    period: "April 2023 - July 2023",
    location: "Hyderabad, India", 
    achievements: [
      "Architected, developed and deployed StateStreetGPT chatbot using OpenAI's GPT on Azure AKS using Python, FastAPI, TypeScript, PostgreSQL.",
      "Integrated Azure Text-to-Speech, Speech-to-Text and context switching, reducing mean response time 30 %.",
      "Mentored interns on full-stack & DevOps best practices, leading to full-time offers for all.",
      "Collaborated with cross-functional teams to enhance software solutions."
    ]
  },
  {
    title: "Software Engineer",
    company: "State Street Corporation",
    period: "July 2021 – March 2023",
    location: "Hyderabad, India", 
    achievements: [
      "Engineered automation tool to export data from launch notes to Excel in ReactJS, reducing manual processing time by 60%.",
      "Collaborated with cross-functional teams to enhance software performance and reliability.",
      "Developed GitHub Actions workflows with unit and integration tests, cutting the deployment time from 2 h to 15 min.",
      "Created high-speed annotation tool for OCR, NER datasets using Tesseract, accelerating dataset creation by 50% saving approximately $20,000 annually in operational costs.",
      "Delivered client-specific Incident Management dashboards with Apache ECharts and D3.js, providing real-time SLA breach updates for 6 client desks."
    ]
  },
  {
    title: "AI and Automation Intern",
    company: "State Street Corporation",
    period: "January 2021 – June 2021",
    location: "Hyderabad, India", 
    achievements: [
      "Refactored React codebase for Document Automation Tool, lowering Cognitive Complexity from 21 to 15.",
      "Enhanced file management efficiency by 35% through a daily file-delivery monitoring tool integrated using D3.js for anomaly detection.",
      "Developed documentation and user guides for improved tool usability.",
      "Conducted debugging and testing to ensure optimal performance."
    ]
  }
]

// Group experiences by company
const groupedExperiences = experiences.reduce((acc, exp) => {
  if (!acc[exp.company]) {
    acc[exp.company] = [];
  }
  acc[exp.company].push(exp);
  return acc;
}, {} as Record<string, typeof experiences>);

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-16">
        {Object.entries(groupedExperiences).map(([company, companyExps], companyIndex) => (
          <div key={company} className="relative">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-600/30" />
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: companyIndex * 0.3 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: companyIndex * 0.3 + 0.2 }}
                  viewport={{ once: true }}
                  className="absolute -left-2 top-0 w-4 h-4 bg-orange-600 rounded-full"
                />
                <h3 className="text-2xl font-semibold text-orange-600 mb-2">{company}</h3>
              </motion.div>
              
              <div className="space-y-8">
                {companyExps.map((exp, expIndex) => (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: companyIndex * 0.3 + expIndex * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >

                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: companyIndex * 0.3 + expIndex * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="absolute -left-2 top-0 w-3 h-3 bg-orange-600 rounded-full border-2 border-gray-900"
                    />
                    
                    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-1">
                            {exp.title}
                          </h4>
                        </div>
                        
                        <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: companyIndex * 0.3 + expIndex * 0.2 + achIndex * 0.1 + 0.4 
                            }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: companyIndex * 0.3 + companyExps.length * 0.2 + 0.5 }}
                viewport={{ once: true }}
                className="absolute -left-2 bottom-0 w-4 h-4 bg-orange-600 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
