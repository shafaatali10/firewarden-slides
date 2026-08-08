import { useState } from 'react'
import './03_Scenarios.css'

const scenarios = [
    {
        title: 'A smoky bin',
        text: 'Someone throws a cigarette into a bin. A thin trail of smoke starts to rise.',
        approach: 'Alert others nearby, Keep people away from the bin, Try to extinguish the fire',
    },
    {
        title: 'Visible fire',
        text: 'The fire in the bin is now visible. It is small, but growing.',
        approach: 'Raise the alarm, Turn off the AC, If trained and it is safe - use the correct extinguisher with a clear escape route behind you, Otherwise - evacuate.',
    },
    {
        title: 'Fire and noise',
        text: 'A room catches fire at some corner. You hear noise from people.',
        approach: 'Stop work, Warn anyone in immediate danger, Activate the alarm, And move toward the nearest safe exit.',
    },
    {
        title: 'You cannot see the room',
        text: 'You cannot see the affected room, but you hear the noise from people.',
        approach: 'Check the gaps of the door for any smoke, Use back of palm to feel the handle, Treat the situation as an emergency, Keep the door closed, Never enter to investigate if you sense definite fire.',
    },
    {
        title: 'Full-blown fire',
        text: 'The fire is now full-blown and spreading quickly through the area.',
        approach: 'Evacuate immediately using the planned route, Never fight a fire that is spreading or blocking your escape path.',
    },
    {
        title: 'Evacuation awareness',
        text: 'The evacuation alarm is active. Everyone needs to move to safety and account for their team.',
        approach: 'Dont leave the door open, Use the nearest safe exit, Do not use lifts, Go to the assembly point, Report missing people to the emergency team.',
    },
]

const initialParticipants = [
    'Amol', 'Suchayan', 'Keval', 'Omar', 'Venkatesh',
    'Justyna', 'Sumit', 'Nitha', 'Vasiliy'
]

export default function Scenarios() {
    const [flippedScenario, setFlippedScenario] = useState(null)
    const [dialogScenario, setDialogScenario] = useState(null)
    const [participants, setParticipants] = useState(initialParticipants)
    const [selectedParticipant, setSelectedParticipant] = useState(null)
    const [isSpinning, setIsSpinning] = useState(false)

    const chooseParticipant = () => {
        if (isSpinning || participants.length === 0) return

        setIsSpinning(true)
        window.setTimeout(() => {
            const choice = participants[Math.floor(Math.random() * participants.length)]
            setSelectedParticipant(choice)
            setIsSpinning(false)
        }, 850)
    }

    const finishTurn = () => {
        if (!selectedParticipant) return

        setParticipants((current) => current.filter((name) => name !== selectedParticipant))
        setSelectedParticipant(null)
    }

    return (
        <main className="scenarios-page">
            <header className="scenarios-heading">
                <div>
                    <p className="scenarios-kicker">Interactive discussion</p>
                    <h1>What would you do?</h1>
                    <p>Scenario based learning.</p>
                </div>
                <div className="scenario-count">06 <span>scenarios</span></div>
            </header>

            <div className="scenarios-layout">
                <section className="scenario-grid" aria-label="Fire response scenarios">
                    {scenarios.map((scenario, index) => (
                        <article
                            className={`scenario-card ${flippedScenario === index ? 'scenario-card--flipped' : ''}`}
                            key={scenario.title}
                            role="button"
                            tabIndex={0}
                            onClick={() => setFlippedScenario(flippedScenario === index ? null : index)}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter' || event.key === ' ') {
                                    event.preventDefault()
                                    setFlippedScenario(flippedScenario === index ? null : index)
                                }
                            }}
                            aria-label={`${flippedScenario === index ? 'Hide' : 'Show'} scenario ${index + 1}`}
                        >
                            <span className="scenario-card-inner">
                                <span className="scenario-card-face scenario-card-front">
                                    <span className="scenario-number">0{index + 1}</span>
                                    <strong>{scenario.title}</strong>
                                    <span className="flip-hint"> <span aria-hidden="true"></span></span>
                                </span>
                                <span className="scenario-card-face scenario-card-back">
                                    <span className="scenario-number">0{index + 1}</span>
                                    <strong>{scenario.title}</strong>
                                    <span className="scenario-text">{scenario.text}</span>
                                    <button
                                        className="ideal-approach-button"
                                        type="button"
                                        onClick={(event) => {
                                            event.stopPropagation()
                                            setDialogScenario(index)
                                        }}
                                    >
                                        Ideal Approach <span aria-hidden="true">→</span>
                                    </button>
                                </span>
                            </span>
                        </article>
                    ))}
                </section>

                <aside className="participant-panel">
                    <div className="participant-panel-heading">
                        <div>
                            <p className="scenarios-kicker">Your turn</p>
                            <h2>Who can answer?</h2>
                        </div>
                        <span className="participant-total">{participants.length}/9</span>
                    </div>
                    <div className={`participant-wheel ${isSpinning ? 'participant-wheel--spinning' : ''}`} aria-label="Participant selector">
                        <div className="wheel-center">
                            {selectedParticipant || (participants.length ? 'Ready?' : 'Done')}
                        </div>
                        {participants.map((name, index) => {
                            const angle = (360 / Math.max(participants.length, 1)) * index
                            return (
                                <span
                                    className="wheel-name"
                                    key={name}
                                    style={{ '--angle': `${angle}deg` }}
                                >
                                    {name}
                                </span>
                            )
                        })}
                    </div>
                    <p className="participant-instruction">
                        {selectedParticipant ? `${selectedParticipant}` : `Let's spin it!`}
                    </p>
                    <div className="participant-actions">
                        <button className="spin-button" type="button" onClick={chooseParticipant} disabled={isSpinning || participants.length === 0}>
                            {isSpinning ? 'Choosing…' : 'Choose participant'}
                        </button>
                        <button className="finish-button" type="button" onClick={finishTurn} disabled={!selectedParticipant}>
                            Finish turn
                        </button>
                    </div>
                </aside>
            </div>

            {dialogScenario !== null && (
                <div className="approach-backdrop" role="presentation" onClick={() => setDialogScenario(null)}>
                    <section className="approach-dialog" role="dialog" aria-modal="true" aria-labelledby="approach-title" onClick={(event) => event.stopPropagation()}>
                        <button className="dialog-close" type="button" aria-label="Close ideal approach" onClick={() => setDialogScenario(null)}>×</button>
                        <p className="scenarios-kicker">Ideal approach · 0{dialogScenario + 1}</p>
                        <h2 id="approach-title">{scenarios[dialogScenario].title}</h2>
                        <ul className="approach-list">
                            {scenarios[dialogScenario].approach
                                .split(',')
                                .map((step, index) => (
                                    <li key={index}>{step.trim()}</li>
                                ))}
                        </ul>
                        <button className="dialog-done" type="button" onClick={() => setDialogScenario(null)}>Got it</button>
                    </section>
                </div>
            )}
        </main>
    )
}
