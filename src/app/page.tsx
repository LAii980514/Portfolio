import { Navigation } from "@/components/portfolio/navigation"
import { Hero } from "@/components/portfolio/hero"
import { FeaturedProjects } from "@/components/portfolio/featured-projects"
import { ProjectsGrid } from "@/components/portfolio/projects-grid"
import { About } from "@/components/portfolio/about"
import { Illustrations } from "@/components/portfolio/illustrations"
import { Timeline } from "@/components/portfolio/timeline"
import { Gallery } from "@/components/portfolio/gallery"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main 
      className="min-h-screen bg-[#0a0a0a] overflow-x-hidden flex flex-col items-center w-full gap-24 md:gap-32"
      style={{ backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
    >
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <ProjectsGrid />
      <About />
      <Timeline />
      <Illustrations />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
