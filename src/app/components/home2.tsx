import Image from "next/image";

const Home2 = () => {
  return (
    <section className="hero2">
    <div>
      <Image
        className="mask"
        src="/image/Mask.png"
        alt="mask"
        width={605}
        height={562}
      />
      <h1 className="title2">Side Table <br/>
      <button className="button">Veiw More</button>
      </h1>
      </div>
      <div>
        <Image
        className="mask1"
        src="/image/Mask1.png"
        alt="mask1"
        width={605}
        height={562}
        />
      <h1 className="title2">Side Table <br/>
      <button className="button">Veiw More</button>
      </h1>
      </div>
    </section>

  );
};

export default Home2;