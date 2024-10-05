import "./council.css";

function Council() {
    return (
        <div className="council-container">
            <div className="council-header">Council Post NavGurukul</div>
            <h2 className="context">Context</h2>
            <p className="context-p">In the NavGurukul Council, the posts are handled by students only.</p>

            <div className="post-intro">These are the council posts:</div>

           <div className="col1">
            <div className="post">1. TMP (Technical Manager Post)</div>
            <div className="post">2. Disco (Discipline Coordinator)</div>
            <div className="post">3. FC (Food Coordinator)</div>
            <div className="post">4. FM (Facility Manager)</div>
            <div className="post">5. HC (Health Coordinator)</div>
            <div className="post">6. TI (Information Technology)</div>
            <div className="post">7. English Coordinator</div>
            <div className="post">8. Outreach</div>
           </div>

           <div className="post-container">
            <div className="post-1">
                <img className="img-pic" src="devika.jpeg" alt="TMP"></img>
                <h1>TMP</h1>
                <p className="post-description">TMP is related to academics. In this, TMP manages students' academic activities, tracks their progress, and identifies where they need help. It manages student data related to their studies.</p>
            </div>

            <div className="post-2">
                <img className="img-pic" src="tanu.jpeg" alt="Disco"></img>
                <h1>Disco</h1>
                <p className="post-description">Disco refers to the Discipline Coordinator. The role of Disco is to manage and maintain discipline on campus.</p>
            </div>
           </div>
        </div>
    )
}

export default Council;