import Hero from "./(components)/Hero";
import { styles } from "./constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mb-10">
      <div className="w-full justify-center flex-col bg-[#F2F0F1]">
        <div className={styles.flexCenter}>
          <div className=" w-full max-w-7xl">
            {" "}
            <Hero />{" "}
          </div>
        </div>
      </div>
    </main>
  );
}
