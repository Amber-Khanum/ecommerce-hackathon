import Header from "./components/header";
import Home1 from "./components/home1";
import Home2 from "./components/home2";
import Home3 from "./components/home3";
import Home4 from "./components/home4";
import Home5 from "./components/home5";
import Home6 from "./components/home6";
import Footer from "./components/footer";
import ProductCards from "./components/products";

export default function Home() {
  return (
    <div>
      <Header/>
      <Home1/>
      {/* <Home2/> */}
      <ProductCards/>
      <Home3/>
      <Home4/>
      <Home5/>
      {/* <Home6/> */}
      <Footer/>
    </div>
  );
}
