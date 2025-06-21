"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  ChevronDown,
  Star,
  Shield,
  Brain,
  Bug,
  Quote,
  User,
  Sparkles,
  Database,
  Globe,
  Server,
  Heart,
  Calendar,
  Award,
  GraduationCap,
  Play,
  Pause,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  ImageIcon,
  Send,
  MessageCircle,
} from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [accentColor, setAccentColor] = useState("cyan")
  const [jobTitleIndex, setJobTitleIndex] = useState(0)
  const [activeProjectFilter, setActiveProjectFilter] = useState("All")
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("All")

  const accentColors = {
    cyan: "from-cyan-400 to-blue-500",
    purple: "from-purple-400 to-pink-500",
    green: "from-green-400 to-emerald-500",
    orange: "from-orange-400 to-red-500",
    blue: "from-blue-400 to-indigo-500",
  }

  const galleryImages = [
    {
      src: "/gallery/casual.jpg",
      title: "Casual Moments",
      description: "Relaxed and approachable",
      category: "lifestyle",
    },
    {
      src: "/gallery/formal.png",
      title: "Professional Setting",
      description: "In my element",
      category: "professional",
    },
    {
      src: "/gallery/college.png",
      title: "Academic Achievement",
      description: "College days and achievements",
      category: "academic",
    },
    {
      src: "/gallery/temple.png",
      title: "Cultural Heritage",
      description: "Embracing traditions",
      category: "cultural",
    },
    {
      src: "/gallery/artistic.png",
      title: "Artistic Vision",
      description: "Creative perspective",
      category: "artistic",
    },
    {
      src: "/gallery/teaching-session.png",
      title: "Teaching & Mentoring",
      description: "Leading coding sessions and mentoring juniors at Apollo University",
      category: "leadership",
    },
    {
      src: "/certificates/hackathon-certificate.png",
      title: "Hackathon Achievement",
      description: "Certificate from Sandharnia Vikas Hackathon 1.0 2023 - Qualified for finals",
      category: "achievements",
    },
  ]

  const galleryFilters = [
    "All",
    "Professional",
    "Academic",
    "Leadership",
    "Achievements",
    "Lifestyle",
    "Cultural",
    "Artistic",
  ]

  const filteredGalleryImages =
    activeGalleryFilter === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category.toLowerCase() === activeGalleryFilter.toLowerCase())

  const testimonials = [
    {
      quote:
        "Vishnu's AI prototype was a game-changer for our threat detection pipeline. His innovative approach to machine learning in cybersecurity is truly exceptional. Working with him was an absolute pleasure!",
      author: "sarah chen",
      position: "Senior AI Researcher",
      company: "Microsoft",
      avatar: "/clients/sarah-chen.png",
      rating: 5,
      color: "from-blue-500 to-cyan-500",
    },
    {
      quote:
        "His penetration testing skills uncovered critical vulnerabilities with precision. Vishnu's methodical approach to ethical hacking is impressive and his dedication to cybersecurity excellence is remarkable.",
      author: "Dr. Rajesh Kumar",
      position: "Cybersecurity Professor",
      company: "IIIT Allahabad",
      avatar: "/clients/rajesh-kumar.png",
      rating: 5,
      color: "from-purple-500 to-pink-500",
    },
    {
      quote:
        "Vishnu delivered a flawless web application with exceptional UI/UX. His full-stack development skills are top-notch and his attention to detail is outstanding. Highly recommended!",
      author: "Priya Sharma",
      position: "Project Manager",
      company: "Ripan Technologies",
      avatar: "/clients/priya-sharma.png",
      rating: 5,
      color: "from-green-500 to-emerald-500",
    },
    {
      quote:
        "Working with Vishnu on our security audit was enlightening. His deep understanding of both offensive and defensive security is remarkable. A true professional in every sense!",
      author: "Alex Thompson",
      position: "CISO",
      company: "TechCorp Solutions",
      avatar: "/clients/alex-thompson.png",
      rating: 5,
      color: "from-orange-500 to-red-500",
    },
  ]

  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      description: "Implementing secure systems and protecting digital assets from threats",
      skills: ["Network Security", "Secure Coding", "Penetration Testing", "CCSP", "CCNA"],
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "AI/ML",
      icon: <Brain className="w-8 h-8" />,
      description: "Building intelligent systems that learn and adapt to solve complex problems",
      skills: ["TensorFlow", "NLP", "Generative AI", "PyTorch"],
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      description: "Proficient in multiple programming languages for diverse application development",
      skills: ["JavaScript", "TypeScript", "Python", "Core Java", "R"],
      color: "from-green-500 to-green-700",
    },
    {
      title: "Web Development",
      icon: <Globe className="w-8 h-8" />,
      description: "Creating responsive, modern web applications with cutting-edge technologies",
      skills: ["React.js", "Node.js", "Next.js", "Django", "HTML/CSS"],
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "DevOps",
      icon: <Server className="w-8 h-8" />,
      description: "Streamlining development operations for efficient software delivery",
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Git"],
      color: "from-red-500 to-red-700",
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      description: "Designing and optimizing database systems for performance and reliability",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
      color: "from-indigo-500 to-indigo-700",
    },
  ]

  const projects = [
    {
      title: "Custom ERP System",
      description:
        "Developed a secure ERP system using Django, PostgreSQL and React.js with robust authentication and role-based access control. Implemented features for inventory management, HR, and financial tracking.",
      tech: ["Django", "PostgreSQL", "React.js", "+2"],
      image: "/projects/ai-threat-detection.png",
      github: "#",
      live: "#",
      category: "Web",
      status: "Featured",
      featured: true,
    },
    {
      title: "AI Attendance & Security System",
      description:
        "Created a facial recognition system with AI to boost attendance accuracy and strengthen security. Implemented real-time face detection and matching algorithms with anti-spoofing measures.",
      tech: ["AI", "Facial Recognition", "Python", "+2"],
      image: "/projects/web-platform.png",
      github: "#",
      live: "#",
      category: "AI",
      status: "Featured",
      featured: true,
    },
    {
      title: "Network Intrusion Detection System",
      description:
        "Designed & deployed a Network Intrusion Detection System (NIDS) using Python & ML algorithms for real-time threat detection and prevention.",
      tech: ["Python", "Machine Learning", "Network Security", "+2"],
      image: "/projects/devops-suite.png",
      github: "#",
      live: "#",
      category: "Security",
      status: "Production",
      featured: false,
    },
    {
      title: "Blockchain Voting System",
      description:
        "Secure and transparent voting platform built on blockchain technology ensuring immutable vote records and complete transparency in the electoral process.",
      tech: ["Blockchain", "Solidity", "Web3", "+2"],
      image: "/projects/penetration-testing.png",
      github: "#",
      live: "#",
      category: "Blockchain",
      status: "Development",
      featured: false,
    },
    {
      title: "Mobile Security Scanner",
      description:
        "Android application that scans for security vulnerabilities and provides real-time threat assessment with detailed security recommendations.",
      tech: ["Android", "Java", "Security", "+2"],
      image: "/projects/ai-threat-detection.png",
      github: "#",
      live: "#",
      category: "Mobile",
      status: "Beta",
      featured: false,
    },
    {
      title: "Full-Stack Game Platform",
      description:
        "Built interactive web games and platforms using React.js and Node.js with real-time scoring, user engagement features, and collaborative development.",
      tech: ["React.js", "Node.js", "Game Development", "+2"],
      image: "/projects/web-platform.png",
      github: "#",
      live: "#",
      category: "Web",
      status: "Production",
      featured: false,
    },
  ]

  const projectFilters = ["All", "Web", "AI", "Security", "Blockchain", "Mobile"]

  const filteredProjects =
    activeProjectFilter === "All" ? projects : projects.filter((project) => project.category === activeProjectFilter)

  // Updated experiences with enhanced Vice President role
  const experiences = [
    {
      title: "Vice President - Codex Society",
      company: "The Apollo University",
      period: "Oct 2023 – Present",
      duration: "1 year 9 months",
      description:
        "Leading the premier coding society at Apollo University with 200+ active members. Organized multiple hackathons, coding competitions, and technical workshops. Mentored juniors and peers in programming, development, and competitive coding. Successfully qualified for major hackathons including Sandharnia Vikas Hackathon 1.0 2023 finals.",
      achievements: [
        "Led coding society with 200+ active members across all departments",
        "Organized 15+ technical workshops, hackathons, and coding competitions",
        "Mentored 50+ students in programming, web development, and competitive coding",
        "Qualified for finals in Sandharnia Vikas Hackathon 1.0 2023 (PAN-India level)",
        "Increased society participation by 150% through innovative teaching methods",
        "Received multiple certifications for leadership and technical excellence",
        "Conducted regular coding sessions and doubt-clearing workshops for juniors",
        "Built strong coding community fostering collaboration and learning",
      ],
      icon: <GraduationCap className="w-8 h-8" />,
      technologies: [
        "Leadership",
        "Event Management",
        "Mentoring",
        "Community Building",
        "Competitive Programming",
        "Workshop Facilitation",
      ],
      type: "leadership",
      certifications: [
        "Hackathon Achievement Certificate - Sandharnia Vikas Hackathon 1.0 2023",
        "Leadership Excellence Certificate - Apollo University",
        "Technical Mentorship Recognition - Codex Society",
      ],
    },
    {
      title: "Artificial Intelligence Intern",
      company: "Microsoft",
      period: "Mar 2025 – May 2025",
      duration: "3 months",
      description:
        "Researched AI-driven threat detection systems and developed prototype models for intelligent defense applications using TensorFlow and real-world cybersecurity datasets.",
      achievements: [
        "Developed AI-driven threat detection prototypes with 95% accuracy",
        "Trained ML models with 10M+ cybersecurity data points",
        "Published research on intelligent defense applications",
        "Collaborated with senior researchers on cutting-edge AI projects",
      ],
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Azure ML"],
      type: "internship",
    },
    {
      title: "Full-Stack Developer",
      company: "Ripan Technologies",
      period: "Jan 2025 – Mar 2025",
      duration: "3 months",
      description:
        "Developed UI and backend systems, collaborated on game and web projects, and optimized development processes for enhanced performance.",
      achievements: [
        "Built 5+ full-stack applications with React.js & Node.js",
        "Optimized API performance by 60% through efficient data flow",
        "Collaborated on game and web projects with cross-functional teams",
        "Led agile development cycles with 100% on-time delivery",
      ],
      icon: <Code className="w-8 h-8" />,
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Game Development"],
      type: "internship",
    },
    {
      title: "Ethical Hacker",
      company: "IIIT Allahabad",
      period: "Oct 2024 – Mar 2025",
      duration: "6 months",
      description:
        "Assisted in cybersecurity tasks using ethical hacking and blockchain. Helped improve security measures in a collaborative remote environment.",
      achievements: [
        "Performed 100+ penetration tests on various systems",
        "Identified and reported 200+ security vulnerabilities",
        "Developed automated testing scripts reducing manual effort by 70%",
        "Improved security measures through collaborative remote work",
      ],
      icon: <Bug className="w-8 h-8" />,
      technologies: ["Metasploit", "Wireshark", "Nmap", "Burp Suite", "Blockchain"],
      type: "internship",
    },
  ]

  // Job titles array
  const jobTitles = [
    "Full-Stack Developer | AI in Cybersecurity | Coding & Math Tutor",
    "Freelancer | Nifty & Bank Stock Investor | Tech Innovator",
    "Vice President - Codex Society | Ethical Hacker | AI Researcher",
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredGalleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredGalleryImages.length) % filteredGalleryImages.length)
  }

  const openGallery = (index: number) => {
    setSelectedImage(index)
    setIsGalleryOpen(true)
    setCurrentImageIndex(index)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    setSelectedImage(null)
  }

  // Auto-play testimonials
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, testimonials.length])

  // Job title slideshow effect
  useEffect(() => {
    setIsVisible(true)

    // Continuous job title slideshow
    const interval = setInterval(() => {
      setJobTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [jobTitles.length])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-96 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Vishnu Vardhan
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-primary font-semibold text-base hover:scale-105 transition-all duration-300"
              >
                Home
              </a>
              <div className="relative group">
                <a
                  href="#about"
                  className="text-muted-foreground text-base hover:text-primary transition-all duration-300 flex items-center gap-1"
                >
                  About <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <div className="relative group">
                <a
                  href="#gallery"
                  className="text-muted-foreground text-base hover:text-primary transition-all duration-300 flex items-center gap-1"
                >
                  Gallery <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <div className="relative group">
                <a
                  href="#skills"
                  className="text-muted-foreground text-base hover:text-primary transition-all duration-300 flex items-center gap-1"
                >
                  Skills <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <div className="relative group">
                <a
                  href="#projects"
                  className="text-primary text-base hover:scale-105 transition-all duration-300 flex items-center gap-1"
                >
                  Projects <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <a
                href="#articles"
                className="text-muted-foreground text-base hover:text-primary transition-all duration-300"
              >
                Articles
              </a>
              <div className="relative group">
                <a
                  href="#contact"
                  className="text-muted-foreground text-base hover:text-primary transition-all duration-300 flex items-center gap-1"
                >
                  Contact <ChevronDown className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Button
                  onClick={() =>
                    window.open(
                      "mailto:vishnuvardhanburri19@gmail.com?subject=Resume Request&body=Hi Vishnu, I would like to request your resume.",
                      "_blank",
                    )
                  }
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-4">
              <p className="text-primary text-sm font-medium tracking-wide">
                B.Tech CSE (Cybersecurity) @ The Apollo University
              </p>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">Vishnu Vardhan Burri</h1>

              {/* Fixed Job Title Slideshow */}
              <div className="h-16 overflow-hidden relative">
                <div
                  className="transition-transform duration-1000 ease-in-out"
                  style={{
                    transform: `translateY(-${jobTitleIndex * 4}rem)`,
                  }}
                >
                  {jobTitles.map((title, index) => (
                    <div key={index} className="h-16 flex items-center">
                      <div className="text-lg lg:text-xl text-muted-foreground font-light">{title}</div>
                    </div>
                  ))}
                  {/* Duplicate first title for seamless loop */}
                  <div className="h-16 flex items-center">
                    <div className="text-lg lg:text-xl text-muted-foreground font-light">{jobTitles[0]}</div>
                  </div>
                </div>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                Building secure, intelligent, and scalable digital systems while sharing knowledge through tutoring and
                freelancing.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6">
              <Button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold transform hover:scale-105 transition-all duration-300 group"
              >
                View Projects
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "mailto:vishnuvardhanburri19@gmail.com?subject=Resume Request&body=Hi Vishnu, I would like to request your resume.",
                    "_blank",
                  )
                }
                variant="outline"
                className="border-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground px-6 py-2 rounded-lg text-sm font-semibold transform hover:scale-105 transition-all duration-300"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <Button
                onClick={() => window.open("https://github.com/vishnunaniinfo", "_blank")}
                variant="ghost"
                size="sm"
                className="p-3 hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open("https://www.linkedin.com/in/vishnu-vardhanburri/", "_blank")}
                variant="ghost"
                size="sm"
                className="p-3 hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open("mailto:vishnuvardhanburri19@gmail.com", "_blank")}
                variant="ghost"
                size="sm"
                className="p-3 hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>

            {/* Fun Fact */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-primary">Fun fact:</span> I blend analytical thinking across tech
                and finance, actively investing in Nifty & bank sectors!
              </p>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-primary animate-spin-slow opacity-75"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary/60 to-purple-500/60 animate-pulse"></div>

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-r from-primary to-purple-500 group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile-main.jpg"
                    alt="Vishnu Vardhan Burri"
                    className="w-full h-full rounded-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-purple-500 rounded-full p-3 animate-bounce shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-primary rounded-full p-3 animate-pulse shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="flex items-center gap-6 mb-12">
                <div className="p-6 bg-primary/20 rounded-2xl backdrop-blur-sm">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Who I Am</h3>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                I'm Vishnu Vardhan Burri, a B.Tech CSE (Cybersecurity) student at The Apollo University, passionate
                about building secure, intelligent, and scalable digital systems. With strong foundations in full-stack
                development and cybersecurity, I've completed several impactful internships and projects.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Alongside my tech journey, I actively work as a freelancer and tutor for coding and mathematics —
                simplifying concepts and sharing knowledge with others. Outside of development, I'm passionate about
                finance and actively invest in the Nifty & bank sectors, blending analytical thinking across tech and
                money.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-base text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-2">4</div>
                  <div className="text-base text-muted-foreground">Internships</div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-full h-[500px] bg-card/30 backdrop-blur-sm rounded-3xl border border-border flex items-center justify-center overflow-hidden group-hover:border-primary/50 transition-all duration-500">
                <img
                  src="/profile-main.jpg"
                  alt="Vishnu Vardhan Burri"
                  className="w-96 h-96 rounded-2xl object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-primary/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <Camera className="w-8 h-8 text-primary animate-pulse" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-primary bg-clip-text text-transparent">
                My Journey in Pictures
              </h2>
              <ImageIcon className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-primary mx-auto rounded-full mb-8 animate-pulse"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Capturing moments from my academic journey, leadership roles, achievements, and personal milestones ✨
            </p>
          </div>

          {/* Gallery Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 bg-card/50 backdrop-blur-sm rounded-2xl p-2 border border-border">
              {galleryFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveGalleryFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeGalleryFilter === filter
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGalleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openGallery(index)}
                className="group relative bg-card/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge
                      className={`${
                        image.category === "leadership"
                          ? "bg-green-500"
                          : image.category === "achievements"
                            ? "bg-yellow-500"
                            : image.category === "academic"
                              ? "bg-blue-500"
                              : image.category === "professional"
                                ? "bg-purple-500"
                                : "bg-pink-500"
                      } text-white px-2 py-1 text-xs font-semibold capitalize`}
                    >
                      {image.category}
                    </Badge>
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{image.description}</p>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-primary/90 rounded-full p-3 backdrop-blur-sm">
                      <ImageIcon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-purple-600 mb-2">{galleryImages.length}</div>
              <div className="text-sm text-muted-foreground">Total Memories</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-green-600 mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Leadership Roles</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-yellow-600 mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Events Organized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group relative bg-gradient-to-br ${category.color} rounded-3xl p-8 text-white hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">{category.icon}</div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <p className="text-white/90 mb-6 leading-relaxed">{category.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all cursor-pointer backdrop-blur-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              My Journey
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A timeline of my professional growth and achievements
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-purple-500 to-primary rounded-full opacity-30"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 -mt-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-background group-hover:scale-110 transition-all duration-500">
                      <div className="text-white text-sm">{exp.icon}</div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <div className={`w-full max-w-md ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                      <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 group">
                        {/* Header */}
                        <div className="mb-6">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge
                              className={`${
                                exp.type === "leadership"
                                  ? "bg-green-500/20 text-green-600 border-green-500/30"
                                  : "bg-blue-500/20 text-blue-600 border-blue-500/30"
                              } px-3 py-1 text-xs font-semibold`}
                            >
                              {exp.type === "leadership" ? "LEADERSHIP" : "INTERNSHIP"}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{exp.duration}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-primary text-base font-semibold mb-3">{exp.company}</p>
                          <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{exp.description}</p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="text-primary font-bold mb-4 text-sm flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            KEY ACHIEVEMENTS:
                          </h4>
                          <div className="space-y-2">
                            {exp.achievements.slice(0, 4).map((achievement, i) => (
                              <div key={i} className="flex items-start text-green-400">
                                <Star className="w-3 h-3 mr-3 mt-1 fill-current flex-shrink-0" />
                                <span className="text-xs leading-relaxed">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                          <h4 className="text-primary font-bold mb-3 text-sm">TECHNOLOGIES:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.slice(0, 4).map((tech) => (
                              <Badge
                                key={tech}
                                className="bg-muted/50 text-foreground border-border hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all cursor-pointer text-xs px-2 py-1"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Certifications (for leadership role) */}
                        {exp.certifications && (
                          <div>
                            <h4 className="text-primary font-bold mb-3 text-sm flex items-center gap-2">
                              <Award className="w-4 h-4" />
                              CERTIFICATIONS:
                            </h4>
                            <div className="space-y-1">
                              {exp.certifications.map((cert, i) => (
                                <div key={i} className="flex items-start text-yellow-400">
                                  <Award className="w-3 h-3 mr-3 mt-1 fill-current flex-shrink-0" />
                                  <span className="text-xs leading-relaxed">{cert}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>

          {/* Project Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-2 bg-card/50 backdrop-blur-sm rounded-2xl p-2 border border-border">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveProjectFilter(filter)}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeProjectFilter === filter
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-card/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">
                        Featured
                      </Badge>
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${
                        project.status === "Production"
                          ? "bg-green-500"
                          : project.status === "Beta"
                            ? "bg-yellow-500"
                            : project.status === "Featured"
                              ? "bg-purple-500"
                              : "bg-blue-500"
                      } text-white px-3 py-1 text-xs font-semibold`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-muted/50 text-foreground border-border hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all cursor-pointer text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm font-semibold transform hover:scale-105 transition-all duration-300 group/btn flex-1">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm font-semibold transform hover:scale-105 transition-all duration-300 group/btn flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Super Elegant & Beautiful */}
      <section id="testimonials" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-primary/5"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            >
              <Sparkles className="w-4 h-4 text-primary/20" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6">
              <Heart className="w-8 h-8 text-pink-500 animate-pulse fill-current" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-primary bg-clip-text text-transparent">
                What My Amazing Clients Say
              </h2>
              <Heart className="w-8 h-8 text-pink-500 animate-pulse fill-current" />
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-primary mx-auto rounded-full mb-8 animate-pulse"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real testimonials from incredible people I've had the pleasure to work with ✨
            </p>
          </div>

          {/* Main Testimonial Display */}
          <div className="max-w-6xl mx-auto mb-16">
            <div
              className={`relative bg-gradient-to-br ${testimonials[currentTestimonial].color} rounded-3xl p-1 shadow-2xl hover:shadow-3xl transition-all duration-500`}
            >
              <div className="bg-background/95 backdrop-blur-xl rounded-3xl p-12 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-3xl"></div>

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="text-center mb-8">
                    <Quote className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid lg:grid-cols-3 gap-12 items-center">
                    {/* Client Image - Large and Prominent */}
                    <div className="lg:col-span-1 flex justify-center">
                      <div className="relative group">
                        {/* Animated Border */}
                        <div
                          className={cn(
                            "relative w-48 h-48 rounded-full p-2 bg-gradient-to-r group-hover:scale-105 transition-transform duration-500",
                            testimonials[currentTestimonial].color, // ensures both `from-*` and `to-*` stay in className
                          )}
                        >
                          <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                            <img
                              src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                              alt={testimonials[currentTestimonial].author}
                              className="w-full h-full rounded-full object-cover transition-all duration-700 group-hover:scale-110"
                            />
                          </div>
                        </div>
                        {/* Floating Hearts */}
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full p-2 animate-bounce shadow-lg">
                          <Heart className="w-4 h-4 text-white fill-current" />
                        </div>
                        <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2 animate-pulse shadow-lg">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Stars */}
                      <div className="flex justify-center lg:justify-start gap-2 mb-6">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-8 h-8 text-yellow-400 fill-current animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed italic font-light text-center lg:text-left">
                        "{testimonials[currentTestimonial].quote}"
                      </blockquote>

                      {/* Client Info */}
                      <div className="text-center lg:text-left">
                        <h4 className="text-2xl font-bold text-primary mb-2">
                          {testimonials[currentTestimonial].author}
                        </h4>
                        <p className="text-lg text-muted-foreground mb-1">
                          {testimonials[currentTestimonial].position}
                        </p>
                        <p className="text-lg font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Thumbnails & Controls */}
          <div className="flex flex-col items-center space-y-8">
            {/* Client Thumbnails */}
            <div className="flex justify-center space-x-6">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`relative group transition-all duration-300 ${
                    index === currentTestimonial ? "scale-110" : "scale-90 opacity-60 hover:opacity-80 hover:scale-100"
                  }`}
                >
                  <div
                    className={cn(
                      "w-20 h-20 rounded-full p-1 bg-gradient-to-r",
                      testimonial.color, // e.g. "from-blue-500 to-cyan-500"
                      index === currentTestimonial && "shadow-2xl",
                    )}
                  >
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  {index === currentTestimonial && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Play/Pause Controls */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Play
                  </>
                )}
              </Button>

              {/* Navigation Dots */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-primary shadow-lg shadow-primary/50 scale-125"
                        : "bg-muted hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-green-600 mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-yellow-600 mb-2">5.0</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Super Cute & Beautiful */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-primary/10"></div>

        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <Heart className="w-4 h-4 text-pink-400/30 fill-current" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-primary bg-clip-text text-transparent">
                Let's Connect & Create Magic
              </h2>
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-primary mx-auto rounded-full mb-8 animate-pulse"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to turn your ideas into reality? Let's collaborate and build something amazing together! ✨
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Side - Contact Info */}
            <div className="space-y-12">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Get In Touch! 💫
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  I'm always excited to work on new projects, collaborate with amazing people, and share knowledge.
                  Whether it's freelance work, tutoring, or just a friendly chat about tech and finance - I'm here! 🚀
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-8">
                {/* Email */}
                <div className="group bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/20 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary mb-2">Email Me 💌</h4>
                      <p className="text-sm text-muted-foreground mb-1">vishnuvardhanburri19@gmail.com</p>
                      <p className="text-sm text-muted-foreground">vishnunani2129@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-8 border border-green-200/20 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-green-600 mb-2">Call Me 📞</h4>
                      <p className="text-sm text-muted-foreground">+91 9392338269</p>
                      <p className="text-xs text-muted-foreground">Available for calls & WhatsApp</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-600 mb-2">Find Me 📍</h4>
                      <p className="text-sm text-muted-foreground mb-1">Urmilanagar, Bhavanipuram</p>
                      <p className="text-sm text-muted-foreground mb-1">Church Road, Vijayawada, AP</p>
                      <p className="text-sm text-muted-foreground">The Apollo University, Saketa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-bold mb-6 text-primary">Let's Be Social! 🌟</h4>
                <div className="flex justify-center lg:justify-start space-x-6">
                  <Button
                    onClick={() => window.open("https://github.com/vishnunaniinfo", "_blank")}
                    className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white px-8 py-4 text-lg font-semibold transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500/25 group rounded-2xl"
                  >
                    <Github className="w-6 h-6 mr-3 group-hover:animate-spin" />
                    GitHub
                  </Button>
                  <Button
                    onClick={() => window.open("https://www.linkedin.com/in/vishnu-vardhanburri/", "_blank")}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 group rounded-2xl"
                  >
                    <Linkedin className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                    LinkedIn
                  </Button>
                  <Button
                    onClick={() => window.open("https://www.instagram.com/vishnunani___/", "_blank")}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-8 py-4 text-lg font-semibold transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 group rounded-2xl"
                  >
                    <Heart className="w-6 h-6 mr-3 group-hover:animate-bounce fill-current" />
                    Instagram
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full opacity-20 animate-bounce"></div>

              <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl rounded-3xl p-10 border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-2xl hover:shadow-primary/10 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-3xl"></div>

                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      Send Me a Message! 💬
                    </h3>
                    <p className="text-muted-foreground">I'll get back to you super fast! ⚡</p>
                  </div>

                  <form className="space-y-8">
                    <div className="group">
                      <label className="block text-foreground text-base font-medium mb-3 group-hover:text-primary transition-colors">
                        Your Name ✨
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-background/50 border-2 border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-base hover:border-primary/50"
                        placeholder="What should I call you? 😊"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-foreground text-base font-medium mb-3 group-hover:text-primary transition-colors">
                        Email Address 📧
                      </label>
                      <input
                        type="email"
                        className="w-full px-6 py-4 bg-background/50 border-2 border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-base hover:border-primary/50"
                        placeholder="your.awesome.email@example.com"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-foreground text-base font-medium mb-3 group-hover:text-primary transition-colors">
                        Your Message 💭
                      </label>
                      <textarea
                        rows={6}
                        className="w-full px-6 py-4 bg-background/50 border-2 border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 resize-none transition-all duration-300 text-base hover:border-primary/50"
                        placeholder="Tell me about your amazing project ideas, or just say hi! I love hearing from new people 🌟"
                      ></textarea>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:from-primary/90 hover:via-purple-500/90 hover:to-pink-500/90 text-white py-6 text-xl font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 rounded-2xl group">
                      <Send className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                      Send Message with Love 💖
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Open to Collaborations & Freelance Projects! 🤝
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether it's coding, tutoring, or discussing investment strategies - let's connect and grow together! 🚀
              </p>
              <div className="flex justify-center space-x-4">
                <Badge className="bg-green-500/20 text-green-600 border-green-500/30 px-4 py-2 text-sm">
                  💼 Available for Freelance
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30 px-4 py-2 text-sm">
                  🎓 Tutoring Available
                </Badge>
                <Badge className="bg-purple-500/20 text-purple-600 border-purple-500/30 px-4 py-2 text-sm">
                  🤝 Open to Collaborate
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>

        {/* Floating Hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <Sparkles className="w-3 h-3 text-primary/20" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <p className="text-muted-foreground text-base">
            © 2025 Vishnu Vardhan Burri. Built with <span className="text-red-500">❤️</span> and lots of{" "}
            <span className="text-yellow-500">☕</span> | Let's connect, learn, and grow together! 🌟
          </p>
        </div>
      </footer>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <Button
              onClick={closeGallery}
              className="absolute -top-16 right-0 bg-card/80 backdrop-blur-sm hover:bg-card rounded-2xl p-4"
            >
              <X className="w-8 h-8" />
            </Button>

            <div className="relative">
              <img
                src={filteredGalleryImages[currentImageIndex]?.src || "/placeholder.svg"}
                alt={filteredGalleryImages[currentImageIndex]?.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />

              <Button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-2xl p-6"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-2xl p-6"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              <div className="absolute bottom-6 left-6 right-6 bg-black/70 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {filteredGalleryImages[currentImageIndex]?.title}
                </h3>
                <p className="text-gray-300 text-2xl">{filteredGalleryImages[currentImageIndex]?.description}</p>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              {filteredGalleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-6 h-6 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-primary" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
