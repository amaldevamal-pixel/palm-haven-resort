import Hero from "@/components/Home/Hero";
import ExperienceGallery from "@/components/Home/ExperienceGallery";
import Rooms from "@/components/Home/Rooms";
import Packages from "@/components/Home/Packages";
import DiningExperience from "@/components/Home/DiningExperience";
import HomeLocation from "@/components/Home/HomeLocation";
import Amenities from "@/components/Home/Amenities";
import Reviews from "@/components/Home/Reviews";
import Faq from "@/components/Home/Faq";
import FinalCTA from "@/components/Home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExperienceGallery />
      <Rooms />
      <Packages />
      <DiningExperience />
      <Amenities />
      <HomeLocation />
      <Reviews />
      <FinalCTA />
      <Faq /> 
    </main>
  );
}