// "use client"
// import React, { useState } from 'react';
// import './Supporters.css'; // Make sure to import your CSS

// const Supporters = () => {
//     const slides = [
//         {
//             id: 1,
//             image: 'image1.jpg',
//             caption: 'A degree is just the cherry on the cake',
//         },
//         {
//             id: 2,
//             image: 'image2.jpg',
//             caption: 'Delhi Skill university partners with non-profit to offer diploma in software programming to 100 women, transwomen',
//         },
//         {
//             id: 3,
//             image: 'image3.jpg',
//             caption: 'An NGO Which Provides Free Software Engineering Training To Underprivileged Students',
//         },
//     ];

//     const [currentSlide, setCurrentSlide] = useState(0);

//     const nextSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
//     };

//     return (
//         <section className="media-carousel">
//             <h2>In the Media</h2>
//             <div className="carousel">
//                 <div className="carousel-track-container">
//                     <ul className="carousel-track">
//                         {slides.map((slide, index) => (
//                             <li
//                                 key={slide.id}
//                                 className={`carousel-slide ${index === currentSlide ? 'current-slide' : ''}`}
//                             >
//                                 <img src={slide.image} alt={`Slide ${slide.id}`} />
//                                 <p>{slide.caption}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="carousel-nav">
//                     <button className="carousel-button left-button" onClick={prevSlide}>
//                         &lt;
//                     </button>
//                     <button className="carousel-button right-button" onClick={nextSlide}>
//                         &gt;
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Supporters;

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Supporters.css';

// const Supporters = () => {
//     const slides = [
//         {
//             id: 1,
//             image: 'image1.jpg',
//             caption: 'A degree is just the cherry on the cake',
//         },
//         {
//             id: 2,
//             image: 'image2.jpg',
//             caption: 'Delhi Skill university partners with non-profit to offer diploma in software programming to 100 women, transwomen',
//         },
//         {
//             id: 3,
//             image: 'image3.jpg',
//             caption: 'An NGO Which Provides Free Software Engineering Training To Underprivileged Students',
//         },
//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };

//     return (
//         <section className="media-carousel">
//             <h2>In the Media</h2>
//             <Slider {...settings}>
//                 {slides.map((slide) => (
//                     <div key={slide.id} className="carousel-slide">
//                         <img src={slide.image} alt={`Slide ${slide.id}`} />
//                         <p>{slide.caption}</p>
//                     </div>
//                 ))}
//             </Slider>
//         </section>
//     );
// };

// export default Supporters;
