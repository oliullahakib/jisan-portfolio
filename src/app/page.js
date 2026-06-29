import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <About />
      <Skill />
    </main>
  );
}
