import Image from "next/image";

const Home3 = () => {
    return (
        <section className="hero3">
            <line>
            <h1 className="title3">Top Picks For You</h1>
            <h2 className="para">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h2>
            </line>
            <div className="img">

            <div className="one">
            <Image className="mask3" src="/image/Mask3.png" alt="mask3" width={287} height={287}/>
            <h1 className="title4">Trenton modular sofa_3</h1>
            <p className="p1">Rs. 25,000.00</p></div>

            <div className="two">
            <Image className="mask2" src="/image/Mask2.png" alt="mask2" width={287} height={287}/>
            <h1 className="title4">Granite dining table with dining chair</h1>
            <p className="p1">Rs. 25,000.00</p></div>

            <div className="three">
            <Image className="mask4" src="/image/Mask4.png" alt="mask4" width={287} height={287}/>
            <h1 className="title4">Outdoor bar table and stool</h1>
            <p className="p1">Rs. 25,000.00</p></div>

            <div className="four">
            <Image className="mask5" src="/image/Mask5.png" alt="mask5" width={287} height={287}/>
            <h1 className="title4">Plain console with teak mirror</h1>
            <p className="p1">Rs. 25,000.00</p></div>

            </div>
            <h1 className="title5">Veiw More</h1>
        </section>
    );
  };

  export default Home3;