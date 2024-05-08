import { Footer, Hero, Navbar, News, Nft, Profit, Token, Vision } from "./components";

export default function Home() {
  return (
    <>
      <div className="relative">
        <video src={require('../../public/assets/main.mp4')} autoPlay muted />
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
