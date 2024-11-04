'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Mail, Sun, Github, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
  const [darkMode, setDarkMode] = useState(true)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<number, number>>({})

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted', { email, message })
    setEmail('')
    setMessage('')
  }

  const tiktokVideos = [
    'https://www.tiktok.com/embed/v2/1234567890123456789',
    'https://www.tiktok.com/embed/v2/9876543210987654321',
    // Add more TikTok video URLs here
  ]

  const projects = [
    { 
      title: "Metaverse UX Project", 
      description: "Um projeto NextJs Mostrando o Metaverso, atráves de uma experiencia de inteface interativa | UI Design.",
      link: "https://metaverseuxproject.vercel.app/",
      technologies: ["Next.js", "React", "TailwindCSS"],
      images: ["/Meta.png"],
      video: "https://www.youtube.com/watch?v=HSuCwobhe1g"
    },
    { 
      title: "Automações De Intefaces, Automação de Tarefas", 
      description: "Automação de tarefas de cadastros em interface grafica de ERP, usando Python e PyAutoGUI",
      link: "https://github.com/Moost999/AutomacaoERPMegaGUI",
      technologies: ["Python", "PyAutoGUI"],
      images: ["/Sem.png"],
      video: "/video.mp4"
    },
    { 
      title: "Sistema De Brindes Corporativos (Ingressos) ", 
      description: "Sistema de Apostas de Cortesias, Ingressos Para Eventos",
      link: "#",
      technologies: ["Next", "React", "Node.js", "SQLite"],
      images: ["/Bid2.png", "/bid3.png", "/placeholder.svg?height=200&width=300"],
      video: "/bid.mp4"
    },  
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % tiktokVideos.length)
    }, 10000) // Change video every 10 seconds

    return () => clearInterval(interval)
  }, [tiktokVideos.length])

  const handlePrevImage = (index: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [index]: (((prev[index] || 0) - 1) + projects[index].images.length) % projects[index].images.length
    }))
  }

  const handleNextImage = (index: number) => {
    setCurrentImageIndices((prev) => ({
      ...prev,
      [index]: ((prev[index] || 0) + 1) % projects[index].images.length
    }))
  }

  const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    )
  }

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold">João Vitor Gionda</span>
            <div className="flex items-center space-x-4">
              <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
              <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
              <Sun className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-yellow-500'}`} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="z-10 text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold mb-4"
          >
            João Vitor Gionda
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className='text-xl mb-8'
          >
            Desenvolvedor Full-Stack | React | Node | Express | API | NextJS | UI | Tailwind CSS | Estudante de Sistemas De Informação | Engenharia De Software | Software Engineer Student |
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center space-x-4"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className='bg-blue-600'>
              Contact Me
            </Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-100 to-purple-100'} opacity-50`}></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatType: "loop"
            }}
            className={`absolute inset-0 ${darkMode ? 'bg-blue-500' : 'bg-blue-300'} opacity-30`}
          />
        </div>
      </section>

      {/* About Section */}
      <FadeInSection>
        <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Resumo (CV)</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="/perfil.jpeg" alt="João Vitor Gionda" width={300} height={300} className="rounded-full" />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  Desenvolvedor Full-Stack | React | Node | Express | API | NextJS | UI | Tailwind CSS | Estudante de Sistemas De Informação | Engenharia De Software | Software Engineer Student |
                </p>
                <p className="text-lg mb-4">
                  Olá, Me chamo João Vitor Gionda, tenho 19 anos e estou ingressando no meu Primeiro Ano de Faculdade de Sistemas de Informação. Estou em busca de novas oportunidades para continuar a desenvolver minhas habilidades e conhecimentos na programação e na área da Tecnologia.
                </p>
                <p className="text-lg mb-4">
                  Atualmente tenho conhecimentos em algumas linguagens de programação como C#, Python, e JavaScript e estou buscando expandir meus conhecimentos em marketing, Gestão de Projetos, design de expêriencia do usuário (UX/UI) para aprimorar meus projetos em desenvolvimento e outros projetos futuros. Para mim, programar é arte.
                </p>
                <p className="text-lg mb-4">
                  Tenho projetos realizados em diversas tecnologias, incluindo C#, JavaScript, HTML, CSS, React, Node.js, TypeScript e SQL, Arduino com ESP32
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.linkedin.com/in/joaovitorgionda/" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="icon" className='bg-blue-800'>
                      <Linkedin className="h-4 w-4 bg-transparent" />
                    </Button>
                  </a>
                  <a href="https://github.com/Moost999" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className='bg-black'>
                      <Github className="h-4 w-4 bg-transparent" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Skills Section */}
      <FadeInSection>
        <section id="skills" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { skill: "JavaScript", level: 80 },
                { skill: "React", level: 75 },
                { skill: "Node.js", level: 70 },
                { skill: "Python", level: 65 },
                { skill: "TypeScript", level: 80 },
                { skill: "C#", level: 60 },
                { skill: "SQL", level: 70 },
                { skill: "HTML/CSS", level: 85 },
                { skill: "Git", level: 75 },
              ].map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.skill}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className={`w-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full`}>
                    <motion.div
                      className="h-full bg-blue-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Projects Section */}
      <FadeInSection>
        <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={animationVariants}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="mb-4 relative aspect-video">
                    <Image
                      src={project.images[currentImageIndices[index] || 0]}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      
                      className="rounded-md"
                    />
                    <button
                      onClick={() => handlePrevImage(index)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => handleNextImage(index)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-blue-500 text-white text-sm rounded">{tech}</span>
                    ))}
                  </div>
                  <div className="mb-3">
                    <video
                      width="100%"
                      height="200"
                      controls
                      className="rounded-md"
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-2">
                    View Project
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    GitHub
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* TikTok Showcase */}
      <FadeInSection>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">My TikTok Content</h2>
            <div className="relative h-[600px] overflow-hidden rounded-lg shadow-lg">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={currentVideoIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  src={tiktokVideos[currentVideoIndex]}
                  className="w-full h-full"
                  allowFullScreen
                />
              </AnimatePresence>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection>
        <section id="contact" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can I help you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className={`w-full ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <footer className={`py-8 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">João Vitor Gionda</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Building the future, one line of code at a time</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Moost999" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/joaovitorgionda/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:joao.gionda@example.com" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}