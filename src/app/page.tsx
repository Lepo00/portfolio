import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

function Divider() {
  return <div className="section-divider my-0" />;
}

export default function Home() {
  return (
    <>
      <Header />

      {/* Global background blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-200 dark:bg-blue-950 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-[30%] -right-[5%] w-[400px] h-[400px] bg-purple-200 dark:bg-purple-950 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-[55%] left-[10%] w-[450px] h-[450px] bg-indigo-200 dark:bg-indigo-950 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute top-[75%] right-[15%] w-[350px] h-[350px] bg-cyan-200 dark:bg-cyan-950 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-[90%] -left-[5%] w-[400px] h-[400px] bg-violet-200 dark:bg-violet-950 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-4000" />
      </div>

      <main className="max-w-4xl mx-auto px-6 md:px-8 relative">
        <Hero />
        <Divider />
        <FadeIn><About /></FadeIn>
        <Divider />
        <FadeIn><Experience /></FadeIn>
        <Divider />
        <FadeIn><Skills /></FadeIn>
        <Divider />
        <FadeIn><Projects /></FadeIn>
        <Divider />
        <FadeIn><Education /></FadeIn>
        <Divider />
        <FadeIn><Contact /></FadeIn>
      </main>
    </>
  );
}
