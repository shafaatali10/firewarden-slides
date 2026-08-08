import { useState } from 'react'
import imgA from '../assets/class_a.png'
import imgB from '../assets/class_b.png'
import imgC from '../assets/class_c.png'
import imgD from '../assets/class_d.png'
import imgE from '../assets/class_e.png'
import imgF from '../assets/class_f.png'
import './04_Classes.css'

const fuelClasses = [
    {
        name: 'Class A',
        label: 'Ordinary combustibles',
        image: imgA,
        description: 'Fires involving solid materials such as wood, paper, cardboard, cloth, and many plastics.',
    },
    {
        name: 'Class B',
        label: 'Flammable liquids',
        image: imgB,
        description: 'Fires involving liquids such as petrol, diesel, paint, solvents, and other flammable chemicals.',
    },
    {
        name: 'Class C',
        label: 'Flammable gases',
        image: imgC,
        description: 'Fires involving flammable gases such as propane, butane, methane, or natural gas.',
    },
    {
        name: 'Class D',
        label: 'Combustible metals',
        image: imgD,
        description: 'Fires involving combustible metals such as magnesium, sodium, potassium, or aluminium powder.',
    },
    {
        name: 'Class E',
        label: 'Electrical equipment',
        image: imgE,
        description: 'Fires involving energised electrical equipment, appliances, wiring, or electrical installations.',
    },
    {
        name: 'Class F',
        label: 'Cooking oils and fats',
        image: imgF,
        description: 'Fires involving high-temperature cooking oils and fats, typically in commercial or domestic kitchens.',
    },
]

export default function Classes() {
    const [selectedClass, setSelectedClass] = useState(null)

    return (
        <main className="classes-page">
            <header className="classes-heading">
                <div>
                    <p className="classes-kicker">Know your fire</p>
                    <h1>Classes of Fuel</h1>
                    <p>Different fuels need different responses. Select a class to learn more.</p>
                </div>
                <div className="classes-count">06 <span>classes</span></div>
            </header>

            <section className="classes-grid" aria-label="Classes of fuel">
                {fuelClasses.map((fuelClass, index) => (
                    <button
                        className={`class-card ${selectedClass === index ? 'class-card--selected' : ''}`}
                        key={fuelClass.name}
                        type="button"
                        aria-pressed={selectedClass === index}
                        onClick={() => setSelectedClass(selectedClass === index ? null : index)}
                    >
                        <span className="class-card-image">
                            <img src={fuelClass.image} alt={`${fuelClass.name}: ${fuelClass.label}`} />
                            <span className="class-card-number">0{index + 1}</span>
                        </span>
                        <span className="class-card-copy">
                            <strong>{fuelClass.name}</strong>
                            <span>{fuelClass.label}</span>
                        </span>
                        <span className="class-card-link">{selectedClass === index ? 'Selected' : 'View class'} <span aria-hidden="true">↗</span></span>
                    </button>
                ))}
            </section>

            {selectedClass !== null ? (
                <section className="class-details" aria-live="polite">
                    <div className="class-details-heading">
                        <p className="classes-kicker">{fuelClasses[selectedClass].name}</p>
                        <h2>{fuelClasses[selectedClass].label}</h2>
                    </div>
                    <p className="class-description">{fuelClasses[selectedClass].description}</p>
                </section>
            ) : (
                <p className="class-prompt">Select a class above to reveal its description and response.</p>
            )}
        </main>
    )
}
