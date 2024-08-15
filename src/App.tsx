import UserInfo from "./components/UserInfo/UserInfo";
import BlockTicker from "./components/BlockTicker";
import { Navigation } from "./components/Navigation";
import TransactionTicker from "./components/TransactionTicker";

function App() {
  console.log("trigger whole app");

  return (
    <main className="relative flex flex-col gap-4">
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
    </main>
  );
}

export default App;
