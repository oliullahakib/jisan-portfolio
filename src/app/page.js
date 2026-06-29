import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full md:pl-24 pt-16 md:pt-0">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skill /></div>
      <div id="education"><Education /></div>
      <div id="certifications"><Certifications /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </main>
  );
}
