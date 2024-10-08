import './Carousel.css'; 

const Carousel = () => {
  return (
    <div className="container-fluid">
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-container" 
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="d-flex">
              <img
                src="https://nationalskillsnetwork.in/wp-content/uploads/2019/05/rsz_2navgurukul_transforms_the_lives_of_students_through_coding_skills_that_ensure_a_job.jpg"
                alt="First slide"
                className="carousel-image" 
              />
              <img
                src="https://thelogicalindian.com/h-upload/2020/01/27/149143-20170222182520.jpg"
                alt="Second slide"
                className="carousel-image"
              />
              <img
                src="https://media.licdn.com/dms/image/v2/D4D3DAQEUYmujqqWLWQ/image-scale_191_1128/image-scale_191_1128/0/1699601827672/navgurukul_cover?e=2147483647&v=beta&t=V_aAfWjQzyeGUuhoC3XYisN3PuL1l3tsKAfWMQo4R7o"
                alt="Third slide"
                className="carousel-image" 
              />
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <div className="d-flex">
              <img
                src="https://media.licdn.com/dms/image/v2/C5112AQGpT6kaHITOhQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1585308192539?e=2147483647&v=beta&t=ZuPRJ-B7sAkCueAkuZH9he_SJ4SIV-69xMPnNILv8Xg"
                alt="Fourth slide"
                className="carousel-image" 
              />
              <img
                src="https://www.navgurukul.org/static/media/img_1.f773d9b3.jpg"
                alt="Fifth slide"
                className="carousel-image"
              />
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQFMkvTGTUjtUQ/feedshare-shrink_800/feedshare-shrink_800/0/1696854260415?e=2147483647&v=beta&t=qObWh0rXYrgCdUBbpqwhlDZmc9iVgKPu-L0RXpEBFSM"
                alt="Sixth slide"
                className="carousel-image" 
              />
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <div className="d-flex">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLEHgBthM-Ar6S3r_gOSPhVC_bQ0uorZvTk4wv1Z9TWVdR9EF2b2pbzChuhl4mr79pGg&usqp=CAU"
                alt="Seventh slide"
                className="carousel-image" 
              />
              <img
                src="https://i.ytimg.com/vi/dLVT1fJeWHI/maxresdefault.jpg"
                alt="Eighth slide"
                className="carousel-image" 
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUpeTRRIti_9RS-Xc4x2mouDK69QT5XCSzg&s"
                alt="Nineth slide"
                className="carousel-image" 
              />
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
};

export default Carousel;
