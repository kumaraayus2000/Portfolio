// function About() {
//     return (
//         <section id="about" className="section">
//             <h2>About Me</h2>
//             <p>I’m a passionate software developer with experience in full-stack web development, cloud technologies, and more. I love solving problems and building impactful projects.</p>
//         </section>
//     );
// }

// export default About;

import profilePhoto from './assets/Aayush_Image.png';

function About() {
    return (
        <section id="about" className="section about-section">
            <div className="about-content">
                <img src={profilePhoto} alt="Profile" className="profile-photo" />
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>I’m a passionate software developer with experience in full-stack web development, cloud technologies, and more. I love solving problems and building impactful projects.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
