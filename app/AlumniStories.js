import './AlumniStories.css'; 

const AlumniStorie = () => {
  return (
    <div>
      <h1>Alumni Stories</h1>
      <div className="video-container">
        {/* First video */}
        <iframe
          className="video"
          src="https://www.youtube.com/embed/DELF_PyG_E4" 
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Second video */}
        <iframe
          className="video"
          src="https://www.youtube.com/embed/XJ6hcfkSDkw" 
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Third video */}
        <iframe
          className="video"
          src="https://www.youtube.com/embed/o3mXHf7LWiw"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AlumniStorie;
