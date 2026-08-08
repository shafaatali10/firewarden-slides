import { useState } from 'react'
import './06_Pass_Technique.css'

const steps = [
    {
        letter: 'P',
        word: 'Pull',
        description: 'Pull the pin to break the tamper seal and prepare the extinguisher.',
    },
    {
        letter: 'A',
        word: 'Aim',
        description: 'Aim the nozzle at the base of the fire, not at the top of the flames.',
    },
    {
        letter: 'S',
        word: 'Squeeze',
        description: 'Squeeze the handle to release the extinguishing agent.',
    },
    {
        letter: 'S',
        word: 'Sweep',
        description: 'Sweep the nozzle from side to side across the base until the fire is out.',
    },
]

export default function PassTechnique() {
    const [revealed, setRevealed] = useState(0)

    const revealNext = () => {
        if (revealed < steps.length) setRevealed(revealed + 1)
    }

    return (
        <main className="pass-page">
            <header className="pass-heading">
                <p className="pass-kicker">Using an extinguisher</p>
                <h1>Remember PASS</h1>
                <p>Four simple actions to help you operate an extinguisher safely.</p>
            </header>

            <section className="pass-sequence" aria-label="PASS technique steps">
                {steps.map((step, index) => (
                    <button
                        className={`pass-step ${revealed > index ? 'pass-step--revealed' : ''} ${revealed === index ? 'pass-step--current' : ''}`}
                        key={`${step.word}-${index}`}
                        type="button"
                        disabled={index !== revealed}
                        onClick={revealNext}
                    >
                        <span className="pass-step-letter">{step.letter}</span>
                        <span className="pass-step-copy">
                            <strong>{step.word}</strong>
                            <span>{revealed > index ? step.description : ''}</span>
                        </span>
                        <span className="pass-step-number">0{index + 1}</span>
                    </button>
                ))}
            </section>

            <div className="pass-footer" aria-live="polite">
                <span className="pass-progress">{revealed} / {steps.length} revealed</span>
                {revealed < steps.length ? (
                    <p>Click the highlighted step to continue.</p>
                ) : (
                    <p className="pass-ready">Only fight a fire if you are trained, it is small, and your escape route is clear.</p>
                )}
            </div>
        </main>
    )
}
