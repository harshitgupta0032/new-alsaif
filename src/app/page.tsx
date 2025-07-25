import About from "@/component/About(us)";
import Dashboard from "@/component/Hero";
import FAQ from "@/component/FAQ";
import Fleet from "@/component/Fleet";
import Quotes from "@/component/Quotes";
import Services from "@/component/Services";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 ">
      <Dashboard />
        <Services />
        <Fleet />
        <About />
        <Quotes />
        <FAQ />
    </div>
  );
}
