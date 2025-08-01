import { motion } from 'framer-motion'
import Section from './Section'

const skillCategories = [
  {
    emoji: "💻",
    title: "Programming & Software Development",
    subcategories: [
      {
        subtitle: "Languages & Frameworks",
        skills: ["Python", "TypeScript", "JavaScript", "SQL", "Bash/Shell Scripting"]
      },
      {
        subtitle: "Frontend Development",
        skills: ["ReactJS", "Next.js", "HTML", "CSS", "D3.js", "Three.js"]
      },
      {
        subtitle: "Backend Development & APIs",
        skills: ["Node.js", "FastAPI", "GraphQL", "Supabase"]
      },
      {
        subtitle: "Databases",
        skills: ["PostgreSQL", "SQLAlchemy", "MySQL", "MongoDB", "SQLite"]
      }, 
      {
        subtitle: "Cloud Platforms",
        skills: ["AWS", "Azure(Basics)", "GCP (Basics)"]
      },
      {
        subtitle: "CI/CD & Project Tools",
        skills: ["Git", "Github", "Github Actions", "Docker", "Kubernetes", "Terraform", "Grafana", "Jenkins", "bun", "Vercel", "Jira"]
       }
    ]
  },
  {
    emoji: "📊",
    title: "Machine Learning & Data Science",
    subcategories: [
      {
        subtitle: "Machine Learning",
        skills: ["Regression", "Classification", "XGBoost", "Clustering", "Anomaly Detection", "TF-IDF", "BERT", "Keras"]
      },
      {
        subtitle: "Data Science & Analysis",
        skills: ["EDA", "Feature Engineering",  "Statistics", "Mathematics", "Pandas", "NumPy", "Scikit-learn", "NLTK", "Power BI", "Matplotlib"]
      }
    ]
  },
  {
    emoji: "🤖",
    title: "Deep Learning & Generative AI",
    subcategories: [
      {
        subtitle: "Deep Learning",
        skills: ["CNN", "RNN", "LSTM", "Transformers", "GAN"]
      },
      {
        subtitle: "Generative AI",
        skills: ["LLMs", "VLMs", "PyTorch", "CUDA", "HF Transformers", "LangChain", "LangGraph", "Ollama", "OpenAI API", "Vector DBs (Pinecone, FAISS, Qdrant)"]
      },
      {
        subtitle: "Advanced Techniques",
        skills: ["RAG", "Fine-Tuning (LoRA, QLoRA, PEFT)", "Prompt Engineering (CoT, ReAct)", "Agent Workflows (LangGraph, LangSmith, smolagents)", "Observability", "AI Ethics and Governance"]
      }
    ]
  },
  {
    emoji: "🛠️",
    title: "Tools & Development",
    subcategories: [
      {
        subtitle: "Monitoring & Analytics",
        skills: ["Datadog", "LangSmith", "Weights & Biases"]
      },
      {
        subtitle: "Developer Tools & UI/UX",
        skills: ["VSCode", "LaTeX", "Postman", "Notion", "Figma", "Balsamiq Wireframes", "Apache ECharts", "Blender"]
      },
      {
        subtitle: "OS",
        skills: ["Linux", "Ubuntu", "macOS", "Windows"]
      }
    ]
  },
  {
    emoji: "🧠",
    title: " Additional Skills",
    subcategories:[
      {
        subtitle: "Additional Skills & Leadership",
        skills: ["Agile Methodology", "Cross-Functional Collaboration", "Performance Optimization", "Mentoring and Leadership", "GPU Acceleration", "Multithreading", "Parallel Processing"]
      }
    ]
      
  }
]

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies" className="bg-gray-900/50">
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/30 rounded-xl p-8 border border-gray-800"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{category.emoji}</span>
              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.subcategories.map((subcategory, subIndex) => (
                <motion.div
                  key={subcategory.subtitle}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: categoryIndex * 0.1 + subIndex * 0.1 
                  }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-orange-600 mb-3">
                    {subcategory.subtitle}:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {subcategory.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + subIndex * 0.1 + skillIndex * 0.05 
                        }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium border border-gray-700/50 hover:border-orange-600/50 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
