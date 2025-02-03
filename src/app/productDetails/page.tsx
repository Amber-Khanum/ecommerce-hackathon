import Image from "next/image";

const ProductDetails = () => {
  return (
    <section className="p-6 md:p-12 bg-[#FBEBB5]">
      <div className="max-w-screen-xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">Rocket Single Seater</h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            className="w-full md:w-1/2 max-w-xs md:max-w-md lg:max-w-lg"
            src="/image/Rocket single seater 1.png"
            alt="Rocket Seater"
            width={853}
            height={1}
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <p className="text-lg font-medium mb-4">A comfortable, single-seater rocket for your adventures!</p>
            <p className="text-xl font-bold text-gray-700">Price: $200</p>
            <button className="mt-4 text-lg font-bold border-b-2 border-black pb-1 hover:opacity-80 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
