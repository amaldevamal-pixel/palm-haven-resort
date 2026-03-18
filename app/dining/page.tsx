import DiningHero from "@/components/dining/DiningHero";
import DiningIntro from "@/components/dining/DiningIntro";
import DiningHighlights from "@/components/dining/DiningHilights";
import DiningAtmosphere from "@/components/dining/DiningAtmosphere";
import DiningCTA from "@/components/dining/DiningCTA";

export default function Dining() {
  return (
    <main>
      <DiningHero />
      <DiningIntro />
      <DiningHighlights />
      <DiningAtmosphere />
      <DiningCTA />
    </main>
  );
}