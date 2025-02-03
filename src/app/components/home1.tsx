import Image from "next/image";
import Link from "next/link";

const Home1 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-[#FBEBB5]">
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Rocket single <br />
          seater
        </h1>
        <Link href="/productDetails">
          <button className="mt-4 text-lg font-bold border-b-2 border-black pb-1 hover:opacity-80 transition">
            Shop Now
          </button>
        </Link>

      </div>

      <Image
        className="w-full md:w-1/2 max-w-xs md:max-w-md lg:max-w-lg"
        src="/image/Rocket single seater 1.png"
        alt="Seater"
        width={853}
        height={1}
      />
    </section>
  );
};

export default Home1;
