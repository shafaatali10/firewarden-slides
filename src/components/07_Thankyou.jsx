import { useState } from 'react'
import './07_Thankyou.css'

const quotes = [
    'Only fight when you can.',
    'Share the information.',
    'With great power comes great responsibility.',
    'Create with care by - Shafaat Khan.',
]

export default function Thankyou() {
    const [revealed, setRevealed] = useState(0)

    return (
        <main className="thankyou-page">
            <section className="thankyou-content">
                <p className="thankyou-kicker">Fire safety awareness</p>
                <h1>Thank you</h1>
                <p className="thankyou-intro">Things to carry with you.</p>

                <div className="thankyou-quotes" aria-live="polite">
                    {quotes.map((quote, index) => (
                        <button
                            className={`thankyou-quote ${revealed > index ? 'thankyou-quote--visible' : ''}`}
                            key={quote}
                            type="button"
                            disabled={index !== revealed}
                            onClick={() => setRevealed((current) => current + 1)}
                        >
                            <span className="quote-mark">“</span>
                            <span>{revealed > index ? quote : '?'}</span>
                            <span className="quote-number">0{index + 1}</span>
                        </button>
                    ))}
                </div>

                <p className="thankyou-footer">Stay alert. Stay safe.</p>
            </section>
        </main>
    )
}
