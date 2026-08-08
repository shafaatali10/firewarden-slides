import { useState } from 'react'
import img1 from '../assets/01_ignition.png'
import img2 from '../assets/02_growth.png'
import img3 from '../assets/03_full_blown.png'
import img4 from '../assets/04_decay.png'
import './04_Stages.css'

const stages = [
    {
        name: 'Ignition',
        image: img1,
        description: 'The fire has just started. The flame is small and has not yet spread beyond its first source of fuel.',
        action: 'Raise the alarm and keep people away. If you are trained, the fire is small, and you have a clear escape route, use the correct extinguisher.',
    },
    {
        name: 'Growth',
        image: img2,
        description: 'The fire is gaining heat and energy. Flames are growing, smoke is increasing, and nearby materials may begin to ignite.',
        action: 'Evacuate the immediate area, close doors behind you, and report the location. Do not take risks trying to contain a growing fire.',
    },
    {
        name: 'Fully blown',
        image: img3,
        description: 'The fire has reached its most intense stage. The room is filled with extreme heat, flames, and dangerous smoke.',
        action: 'Evacuate immediately using the nearest safe exit. Never enter the room or attempt to fight a fully developed fire.',
    },
    {
        name: 'Decay',
        image: img4,
        description: 'The flames are reducing because fuel or oxygen is running out, but hidden heat and embers can still reignite.',
        action: 'Stay out and wait for emergency responders to confirm it is safe. Watch for smoke, hot doors, and signs of re-ignition.',
    },
]

export default function Stages() {
    const [selectedStage, setSelectedStage] = useState(null)

    return (
        <main className="stages-page">
            <header className="stages-heading">
                <div>
                    <p className="stages-kicker">How fire develops</p>
                    <h1>Stages of Fire</h1>
                    <p>Click an image to explore what is happening and how to respond.</p>
                </div>
                <div className="stages-count">04 <span>stages</span></div>
            </header>

            <section className="stages-grid" aria-label="Stages of fire">
                {stages.map((stage, index) => (
                    <button
                        className={`stage-image-card ${selectedStage === index ? 'stage-image-card--selected' : ''}`}
                        type="button"
                        key={stage.name}
                        onClick={() => setSelectedStage(selectedStage === index ? null : index)}
                        aria-pressed={selectedStage === index}
                    >
                        <span className="stage-image-wrap">
                            <img src={stage.image} alt={`${stage.name} stage of a fire`} />
                            <span className="stage-number">0{index + 1}</span>
                            <span className="stage-view-label">{selectedStage === index ? 'Selected' : 'View stage'} <span aria-hidden="true">↗</span></span>
                        </span>
                        <span className="stage-card-name">{stage.name}</span>
                    </button>
                ))}
            </section>

            {selectedStage !== null ? (
                <section className="stage-details" aria-live="polite">
                    <div className="stage-details-heading">
                        <p className="stages-kicker">Stage 0{selectedStage + 1}</p>
                        <h2>{stages[selectedStage].name}</h2>
                    </div>
                    <p className="stage-description">{stages[selectedStage].description}</p>
                    <div className="stage-action-note">
                        <span className="action-icon" aria-hidden="true">!</span>
                        <div>
                            <p>What to do</p>
                            <span>{stages[selectedStage].action}</span>
                        </div>
                    </div>
                </section>
            ) : (
                <p className="stage-prompt">Select a stage above to reveal the response.</p>
            )}
        </main>
    )
}
