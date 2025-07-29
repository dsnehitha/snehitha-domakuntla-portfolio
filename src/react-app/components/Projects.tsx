import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Section from './Section'
import Button from './Button'

const projects = [
  {
    title: "Text-to-SQL Agent with Custom LangGraph Workflows",
    bulletPoints: [
      "Built custom agent workflow that converts natural language questions into SQL queries using LangGraph workflows and executes them against PostgreSQL db, reducing manual SQL writing time by 80%",
      "Developed SQLAlchemy data models with proper relationships and deployed mock dataset to AWS RDS PostgreSQL instance",
      "Integrated LangSmith observability for end-to-end tracing, debugging, and performance monitoring of multi-step agent flow"
    ],
    tech: ["Python", "LangGraph", "PostgreSQL", "SQLAlchemy", "LangSmith", "AWS"],
    github: "https://github.com/dsnehitha/Text2SQLAgent",
    demo: null
  },
  {
    title: "Intelligent Content Moderation System",
    bulletPoints: [
      "Engineered end-to-end content moderation ML pipeline to automatically classify and moderate user input text and images using scikit-learn, achieving 90%+ accuracy",
      "Designed serverless architecture with API Gateway, Lambda, StepFunctions, comprehensive monitoring via CloudWatch, and cost-optimized deployment, reducing operational overhead by 60%",
      "Enhanced AI decision-making using Amazon Bedrock (Claude Sonnet-4) for borderline cases"
    ],
    tech: ["Python", "scikit-learn", "AWS", "Linear Regression", "MLOps" ],
    github: "https://github.com/dsnehitha/content-moderation-system",
    demo: null
  },
  {
    title: "Beyond Themes: Topic-Agnostic AI Text Detection",
    bulletPoints: [
      "Created an AI-generated text detection system independent of content topics, improving accuracy by 12% compared to standard models across multiple domains.",
      "Utilized BERT embeddings and k-means clustering on curated datasets, resulting in measurable improvements in domain generalization.",
      "Implemented cross-domain validation techniques to ensure robustness across different text types and topics"
    ],
    tech: ["BERT", "k-means", "Python", "scikit-learn", "NLP"],
    github: null,
    demo: null
  }
]

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-orange-600/50 transition-all duration-300 group"
          >
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-orange-600 transition-colors">
              {project.title}
            </h3>
            
            <ul className="text-gray-300 mb-6 space-y-2">
              {project.bulletPoints.map((point, pointIndex) => (
                <motion.li
                  key={pointIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1 + pointIndex * 0.1 
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {project.github && (
                <Button 
                  variant="outline" 
                  className="text-sm py-2 px-4"
                  onClick={() => window.open(project.github!, '_blank')}
                >
                  <Github className="w-4 h-4" />
                  Code
                </Button>
              )}
              {project.demo && (
                <Button 
                  variant="secondary" 
                  className="text-sm py-2 px-4"
                  onClick={() => window.open(project.demo!, '_blank')}
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
