import Image from "next/image";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ManPage from "./components/ManPage";
import WomanPage from "./components/WomanPage";
import EventMap from "./components/EventMap";
import FormAbsen from "./components/FormAbsen";
import OurGallery from "./components/OurGallery";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col">
        <Header />
        <section id="landing"><LandingPage /></section>
        <section id="man"><ManPage /></section>
        <section id="woman"><WomanPage /></section>
        <section id="event"><EventMap /></section>
        <section id="form"><FormAbsen /></section>
        <section id="gallery"><OurGallery /></section>
      </div>
    </div>
  );
}
