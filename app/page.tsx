import CuratedListing from "./_components/CuratedListing";
import HeroSection from "./_components/HeroSection";
import NavigationBar from "./_components/NavigationBar";
import NeighbourhoodShowcase from "./_components/NeighbourhoodShowcase";
import PrivateDesk from "./_components/PrivateDesk";
import SocialProof from "./_components/SocialProof";
import FeaturedAgents from "./_components/FeaturedAgents";
import MarketInsights from "./_components/MarketInsights";
import Footer from "./_components/Footer";
import FindYourPlaceInTheWorld from "./_components/FindYourPlaceInTheWorld";
import LuxuryPromise from "./_components/LuxuryPromise";
import UnderConstruction from "./_components/UnderConstruction";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <FindYourPlaceInTheWorld />
      <LuxuryPromise />
      <UnderConstruction />
      {/* <SocialProof />
      <CuratedListing />
      <NeighbourhoodShowcase />
      <PrivateDesk />
      <FeaturedAgents />
      <MarketInsights />
      <Footer /> */}
    </div>
  );
}
