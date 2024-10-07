import "./Campus.css";

const campuses = [
    { name: 'Himachal', image: 'https://www.tusktravel.com/blog/wp-content/uploads/2023/02/Himachal-Pradesh-in-March-1.webp' },
    { name: 'Kishanganj', image: 'https://im.hunt.in/cg/Kishanganj/City-Guide/Cubb.jpg' },
    { name: 'Udaipur', image: 'https://www.thehosteller.com/_next/image?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fcover%20photo.jpg%2Fcover%20photo-1696914123916.jpg&w=2048&q=75' },
    { name: 'Dantewada', image: 'https://www.seawatersports.com/images/places/dantewada-in-chattisgarh.jpg' },
    { name: 'Raipur', image: 'https://i.ytimg.com/vi/rp9zus0vuV8/sddefault.jpg' },
    { name: 'Jashpur', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBu2lnOdwkXsViRRV15TJLOX8KAApfMoB2Bw&s' },
    { name: 'Dharmshala', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/74/f0/f6/nature-beauti-in-dharamshala.jpg?w=900&h=900&s=1' },
    { name: 'Sarjapur', image: 'https://www.sobha.com/blog/wp-content/uploads/2024/07/sarjapur-road-most-sought-after-residential-hub-of-bangalore.png' },
    { name: 'Bangalore', image: 'https://www.agoda.com/wp-content/uploads/2024/01/Featured-image-The-Vidhana-Soudha-in-Bangalore.jpg' },
    { name: 'Pune', image: 'https://static.toiimg.com/photo/65424341.cms' },
];

const Campuses = () => {
    return (
        <>
            <div className="campus">
                <h2 className="campus-heading">Our Campus</h2>
                <div className="campuses-container">
                    {campuses.map((campus) => (
                        <div className="campus-card" key={campus.name}>
                            <img src={campus.image} alt={`${campus.name} campus`} />
                            <p>{campus.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Campuses;
