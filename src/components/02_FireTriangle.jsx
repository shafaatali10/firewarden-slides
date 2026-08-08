import { useState } from 'react'
import img from '../assets/tirangle.jpg'
import './02_FireTriangle.css'

const elements = [
    {
        name: 'Fuel',
        description: 'Anything that can burn (e.g., wood, paper, gasoline). It provides the material for combustion.',
        position: 'fuel',
    },
    {
        name: 'Heat',
        description: 'The energy needed to ignite the fuel (e.g., a match, spark, or flame). It raises the temperature to the fuel\'s ignition point.',
        position: 'heat',
    },
    {
        name: 'Oxygen',
        description: 'Typically from the air we breathe. Oxygen supports the chemical reaction of combustion.',
        position: 'oxygen',
    },
]

export default function Triangle() {
    const [revealed, setRevealed] = useState(0)

    const revealNext = (index) => {
        if (index === revealed) {
            setRevealed(index + 1)
        }
    }

    return (
        <main className="fire-triangle-page">
            <div className="fire-triangle-heading">
                <p className="fire-triangle-kicker">The three essentials</p>
                <h1>Fire Triangle</h1>
                <p>Explore each element that makes fire possible.</p>
            </div>

            <div className="fire-triangle-content">
                <div className="triangle-visual">
                    <img src={img} alt="Fire triangle showing fuel, heat, and oxygen" />

                    {elements.map((element, index) => (
                        <button
                            className={`glowing-dot glowing-dot--${element.position}`}
                            key={element.name}
                            type="button"
                            aria-label={`Reveal ${element.name}`}
                            aria-pressed={revealed > index}
                            hidden={index > revealed}
                            onClick={() => revealNext(index)}
                        >
                            <span />
                        </button>
                    ))}
                </div>

                <section className="element-details" aria-live="polite">
                    <p className="details-step">{revealed} / 3</p>
                    <h2>What does fire need?</h2>
                    <div className="details-list">
                        {elements.map((element, index) => (
                            <article
                                className={`element-card ${revealed > index ? 'element-card--visible' : ''}`}
                                key={element.name}
                            >
                                <span className="element-number">0{index + 1}</span>
                                <div>
                                    <h3>{element.name}</h3>
                                    <p>{element.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    {revealed < elements.length && (
                        <p className="details-prompt">
                            Click the glowing dot to reveal {elements[revealed].name}.
                        </p>
                    )}
                </section>
            </div>
        </main>
    )
}
