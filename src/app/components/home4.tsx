import Image from "next/image";

const Home4 = () => {
    return (
    <section className="hero4">
    <div className="container">
        <Image className="sofa" src="/image/sofa.png" alt="sofa" width={900} height={800}/>
        <div className="content">
        <p className="subheading">New Arrivals</p>
        <h1 className="heading">Asgaard sofa</h1>
        <button className="btn">Order Now</button>
        </div>
    </div></section>
    );
};

export default Home4;

