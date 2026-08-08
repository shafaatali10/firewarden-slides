import { useState } from 'react'
import img from '../assets/fire_extinguishers.jpg'
import './05_Extinguishers.css'

const classes = ['A', 'B', 'C', 'D', 'E', 'F']

const extinguishers = [
    {
        name: 'Water',
        description: 'For ordinary combustibles',
        worksOn: ['A'],
        avoid: 'Never use on liquids, metals, or live electrical equipment.',
    },
    {
        name: 'Foam',
        description: 'For combustibles and flammable liquids',
        worksOn: ['A', 'B'],
        avoid: 'Do not use on live electrical equipment or cooking oils.',
    },
    {
        name: 'CO₂',
        description: 'For liquids and electrical equipment',
        worksOn: ['B', 'E'],
        avoid: 'Not suitable for deep-seated fires or outdoor use in wind.',
    },
    {
        name: 'Dry powder',
        description: 'For gases, liquids, and electrical equipment',
        worksOn: ['A', 'B', 'C', 'E'],
        avoid: 'Limited visibility and residue; not suitable for cooking oils or enclosed spaces.',
    },
    {
        name: 'Wet chemical',
        description: 'For cooking oils and fats',
        worksOn: ['A', 'F'],
        avoid: 'Designed mainly for kitchens; never use water on burning oil.',
    },
]

export default function Extinguishers() {
    const [showMatrix, setShowMatrix] = useState(false)
    const [selectedExtinguisher, setSelectedExtinguisher] = useState(null)

    return (
        <main className="extinguishers-page">
            <header className="extinguishers-heading">
                <div>
                    <p className="extinguishers-kicker">Choose the right tool</p>
                    <h1>Fire Extinguishers</h1>
                    <p>Match the extinguisher to the class of fuel before taking action.</p>
                </div>
                <div className="extinguishers-count">05 <span>types</span></div>
            </header>

            <section className="extinguisher-hero">
                <div className="extinguisher-hero-image">
                    <img src={img} alt="Water, foam, wet chemical, powder, and CO2 fire extinguishers" />
                </div>
                <div className="extinguisher-hero-note">
                    <p className="extinguishers-kicker">Before you use one</p>
                    <h2>Only fight a fire if it is small, you are trained, and your escape route is clear.</h2>
                    <p>If conditions change, leave immediately and raise the alarm.</p>
                    <button className="matrix-toggle" type="button" onClick={() => setShowMatrix((visible) => !visible)}>
                        {showMatrix ? 'Hide matrix' : 'When to use what'} <span aria-hidden="true">{showMatrix ? '↑' : '↓'}</span>
                    </button>
                </div>
            </section>

            {showMatrix && <section className="extinguisher-matrix" aria-label="Extinguisher suitability matrix">
                <div className="matrix-heading">
                    <div>
                        <p className="extinguishers-kicker">Quick reference</p>
                        <h2>Which one should you use?</h2>
                    </div>
                    <p className="matrix-legend"><span className="matrix-key matrix-key--yes">✓</span> Suitable <span className="matrix-key matrix-key--no">—</span> Not suitable</p>
                </div>

                <div className="matrix-scroll">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Extinguisher</th>
                                {classes.map((className) => <th scope="col" key={className}>Class {className}</th>)}
                                <th scope="col">Main use</th>
                            </tr>
                        </thead>
                        <tbody>
                            {extinguishers.map((extinguisher, index) => (
                                <tr
                                    className={selectedExtinguisher === index ? 'matrix-row--selected' : ''}
                                    key={extinguisher.name}
                                    onClick={() => setSelectedExtinguisher(selectedExtinguisher === index ? null : index)}
                                >
                                    <th scope="row">{extinguisher.name}</th>
                                    {classes.map((className) => (
                                        <td className={extinguisher.worksOn.includes(className) ? 'matrix-suitable' : 'matrix-unsuitable'} key={className}>
                                            {extinguisher.worksOn.includes(className) ? '✓' : '—'}
                                        </td>
                                    ))}
                                    <td className="matrix-use">{extinguisher.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {selectedExtinguisher !== null && (
                    <p className="matrix-note" aria-live="polite">
                        <strong>{extinguishers[selectedExtinguisher].name}:</strong> {extinguishers[selectedExtinguisher].avoid}
                    </p>
                )}
            </section>}
        </main>
    )
}
