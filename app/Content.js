import "./Content.css"; 
import Link from "next/link";

const Content = () => {
  return (
    <>
    <div className="bca-header">
        <img className="image-1" src="https://www.navgurukul.org/static/media/Eternal_university-removebg-preview%201.a42b9881.svg"></img>
        <img className="image-2" src="https://www.navgurukul.org/static/media/Sri%20badrika%20asharam.d13afbd1.svg"></img>
        <h2>Eternal University’s Fully-Funded BCA Program for Aspiring<br>
        </br> Young Women 2024-27</h2>
        <button className="apply-button" >Apply by 11th September 2024</button>
    </div>

    {/* text for navgurukul */}
    <div className="content">
      <h1 className="title">
        The <span className="highlight">Gurukul</span> for the{" "}
        <span className="bg-highlight">New Age India</span> and
        <br className="hidden sm:inline" /> its New Generation
      </h1>
      <h4 className="description">
        We are a non-profit dedicated to bringing affordable tech education to
        underprivileged girls in India.
      </h4>
    </div>

    {/* video of youtube */}
    <div className="video-container">
      <iframe
        className="video"
        width="100%"
        height="auto" 
        src="https://www.youtube.com/embed/NC2ymm6Sots" 
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    
    <div className="percentage">
        <h1>890+</h1>
        <h1>₹2.8 LPA</h1>
        <h1>95%</h1>
        <h1>₹23+ Crore</h1>

        <h3>students placed across various industries in tech</h3>
        <h3>avg. salary secured by students, the highest being 8 LPA</h3>
        <h3>of our student strength consists of girls from marginalized communities</h3>
        <h3>collectively earned annually by our Alumni</h3>
    </div>

    <div className="councils">
        <Link href="/Councils" passHref>
          <button>Councils</button>
        </Link>
        <Link href="/CouncilsGallery" passHref>
          <button className="Councils-gallery">Councils Gallery</button>
        </Link>
    </div>

    </>
  );
};

export default Content;
