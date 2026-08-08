import intro from '../assets/FireIntro.mp4'
import './01_Intro.css'

export default function Intro() {
    return (
        <main className="intro-slide">
            <video
                className="intro-video"
                src={intro}
                autoPlay
                loop
                muted
                playsInline
            >
                Your browser does not support the video tag.
            </video>
            <div className="intro-overlay">
                <h1>Fire Safety Awareness</h1>
                <p>- Shafaat Khan</p>
            </div>
        </main>
    )
}
