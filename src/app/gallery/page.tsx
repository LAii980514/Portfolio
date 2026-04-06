import { Navigation } from "@/components/portfolio/navigation"
import { Gallery } from "@/components/portfolio/gallery"
import { Footer } from "@/components/portfolio/footer"

export default function GalleryPage() {
  return (
    <main 
      className="min-h-screen bg-[#0a0a0a] overflow-x-hidden flex flex-col items-center w-full"
      style={{ backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
    >
      <Navigation />
      
      {/* 
        Add enough top padding so the Gallery isn't hidden 
        under the fixed navigation bar
      */}
      <div className="w-full flex-1 pt-24 pb-12 flex flex-col items-center">
        <Gallery />
      </div>

      <Footer />
    </main>
  )
}
