import Image from "next/image";

const Home5= () => {
    return (
<section className="blog-section">
  <h2>Our Blogs</h2>
  <p>Find a bright idea to suit your taste with our great selection</p>
  <div className="blog-container">
    {/* <!-- Blog 1 --> */}
    <div className="blog-card">
      <Image src="/image/13.png" alt="Blog Image 1" width={300} height={300}/>
      <h3>Going all-in with millennial design</h3>
      <a href="#" className="read-more">Read More</a>
      <div className="blog-meta">
        <span>⏱️ 5 min</span>
        <span>📅 12th Oct 2022</span>
      </div>
    </div>
    {/* <!-- Blog 2 --> */}
    <div className="blog-card">
      <Image src="/image/14.png" alt="Blog Image 2" width={300} height={300}/>
      <h3>Going all-in with millennial design</h3>
      <a href="#" className="read-more">Read More</a>
      <div className="blog-meta">
        <span>⏱️ 5 min</span>
        <span>📅 12th Oct 2022</span>
      </div>
    </div>
    {/* <!-- Blog 3 --> */}
    <div className="blog-card">
      <Image src="/image/15.png" alt="Blog Image 3" width={300} height={300}/>
      <h3>Going all-in with millennial design</h3>
      <a href="#" className="read-more">Read More</a>
      <div className="blog-meta">
        <span>⏱️ 5 min</span>
        <span>📅 12th Oct 2022</span>
      </div>
    </div>
  </div>
  <a href="#" className="view-all">View All Posts</a>
</section>
    );
};

export default Home5;