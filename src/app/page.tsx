import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Consulting from "@/components/Consulting";
import Project from "@/components/Project";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Creative from "@/components/Creative";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Consulting />
      <Project />
      <Experience />
      <About />
      <Creative />
      <Contact />
      <Footer />
    </main>
  );
}
