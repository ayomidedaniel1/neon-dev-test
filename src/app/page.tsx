import { Footer, Hero, Navbar, News, Nft, Profit, Token, Vision } from "./components";

export default function Home() {
  return (
    <>
      <div className="relative w-screen h-screen z-50">
        <video src={require('./assets/main.mp4')} autoPlay muted loop />
        <Navbar />
        <Hero />
      </div>
      <Nft />
      <Profit />
      <Vision />
      <Token />
      <News />
      <Footer />
    </>
  );
}
