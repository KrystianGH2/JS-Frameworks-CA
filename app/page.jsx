import Hero from "./(components)/Hero";
import HomeProducts from "./(components)/HomeProducts";
import { styles } from "./constants";
import Newsletter from "./(components)/Newsletter";
import AboutCards from "./(components)/AboutCards";

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
      <div className="flex w-full justify-center items-center pb-8 ">
        <div id="reviews" className="w-full justify-center max-w-7xl  px-2">
          <div className=" flex justify-start w-full pb-8">
            <h2 className="mt-4 font-semibold text-xl text-black ">Customer Reviews</h2>
          </div>
          <AboutCards />
        </div>
      </div>

      <div className="flex w-full justify-center items-center  pt-20">
        <div id="newsLetter" className="w-full  px-2">
          <Newsletter />
        </div>
      </div>
    </main>
  );
}
