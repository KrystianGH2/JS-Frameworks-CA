import Hero from "./(components)/Hero";
import HomeProducts from "./(components)/HomeProducts";
import { styles } from "./constants";
import Newsletter from "./(components)/Newsletter";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between mb-10">
      <div className="w-full justify-center flex-col bg-[#F2F0F1]">
        <div className={styles.flexCenter}>
          <div className=" w-full max-w-7xl">
            {" "}
            <Hero />
          </div>
        </div>
      </div>

      <section className="text-black w-full max-w-7xl flex flex-col pt-5">
        <HomeProducts />
      </section>
      <div className="flex w-full justify-center items-center  ">
        <div id="newsLetter" className="w-full  px-2">
          <Newsletter />
        </div>
      </div>
    </main>
  );
}
