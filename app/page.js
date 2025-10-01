import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weights: "100 900",
});

export default function Home() {
  return (
    <main>
      <section className="grid md:grid-cols-2 grid-cols-1 h-[90vh] md:pt-0 pt-5">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`font-bold text-4xl text-center xl:text-[40px] ${poppins.className}`}>
            The best URL Shortener in the Market
          </p>
          <p className="lg:px-30 px-12 text-center xl:text-[17px] text-[15px]">
            We are the most straightforward URL shortener in the world, designed
            to make your life easier by simplifying the way you share links. No
            unnecessary features, no clutter, and no complicated steps-just a
            clean, fast, and reliable service that turns long, messy URLs into
            short, memorable ones in seconds.
          </p>
          <div className="flex gap-4">
            <Link href="/shorten">
              <button className="bg-purple-800 hover:bg-purple-600 text-white py-2 px-4 rounded-full font-bold shadow-md shadow-[rgba(0,0,0,0.5)] cursor-pointer">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-800 hover:bg-purple-600 text-white py-2 px-4 rounded-full font-bold shadow-md shadow-[rgba(0,0,0,0.5)] cursor-pointer">
                Github
              </button>
            </Link>
          </div>
        </div>
        <div className=" flex justify-center items-center ">
          <Image className=" " src="/team.png" alt="Team work" width={500} height={500} />
        </div>
      </section>
    </main>
  );
}
