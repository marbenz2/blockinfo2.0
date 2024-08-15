import UserInfo from "./components/UserInfo/UserInfo";
import BlockTicker from "./components/BlockTicker";
import { Navigation } from "./components/Navigation";
import TransactionTicker from "./components/TransactionTicker";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative flex w-full min-h-screen justify-center">
      <div className="flex flex-col gap-4 w-full max-w-[2560px]">
        <img
          src="/01-LogoVerticale_VShape_Colori_RGB.webp"
          alt="hero"
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-auto lg:w-auto lg:h-screen object-cover opacity-20 dark:opacity-40 -z-10"
        />
        <Navigation />
        <div className="flex flex-col xl:flex-row w-full gap-4 px-2 sm:px-4">
          <div className="flex flex-col basis-full xl:basis-2/3 gap-4">
            <BlockTicker />
            <UserInfo />
          </div>
          <div className="flex flex-col basis-full xl:basis-1/3 gap-4">
            <TransactionTicker />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
