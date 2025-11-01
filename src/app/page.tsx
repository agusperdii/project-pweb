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
        <LandingPage />
        <ManPage />
        <WomanPage />
        <EventMap />
        <FormAbsen />
        <OurGallery />
        <Image
          src="/next.svg"
          alt="Logo"
          width={128}
          height={128}
          className="mx-auto mb-8"
        />
        <h1 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Welcome to Our Next.js App
        </h1>
        <p className="text-zinc-700 dark:text-zinc-300">
          This is a simple starter template using Next.js with Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
