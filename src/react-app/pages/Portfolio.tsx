import Navigation from '@/react-app/components/Navigation'
import Hero from '@/react-app/components/Hero'
import About from '@/react-app/components/About'
import Projects from '@/react-app/components/Projects'
import Skills from '@/react-app/components/Skills'
import Experience from '@/react-app/components/Experience'
import Contact from '@/react-app/components/Contact'
import Footer from '@/react-app/components/Footer'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* <Background3D /> */}
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}
