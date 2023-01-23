import Head from "next/head";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
} from "@/components/section";
import { useHome } from "@/pages/home/hooks/useHome";

export const HomePage = () => {
  const { showSidebar, setShowSidebar } = useHome();
  return (
    <>
      <Head>
        <title>Spotify - Web Player</title>
        <meta name="description" content="Spotify - Web Player" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/800px-Spotify_logo_without_text.svg.png"
        />
      </Head>
      <div className="bg-main-gray min-h-screen text-gray-300">
        <Header setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main>
          <div className="pt-28 md:pl-72 p-8">
            <FirstSection title="Spotify Playlists" />
            <SecondSection title="Sleep" />
            <ThirdSection title="Focus" />
            <FourthSection title="Mood" />
            <FifthSection title="Popular new releases" />
          </div>
        </main>
      </div>
    </>
  );
};
