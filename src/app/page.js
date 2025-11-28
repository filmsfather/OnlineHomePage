import Header from "@/components/Header";
import About from "@/components/About";
import GrowthAssets from "@/components/GrowthAssets";
import SocialProof from "@/components/SocialProof";
import LearningSystem from "@/components/LearningSystem";
import Roadmap from "@/components/Roadmap";
import Curriculum from "@/components/Curriculum";
import AnnualSchedule from "@/components/AnnualSchedule";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <GrowthAssets />
      <SocialProof />
      <LearningSystem />
      <Roadmap />
      <Curriculum />
      <AnnualSchedule />
      <Footer />
    </main>
  );
}
