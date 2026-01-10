import React from 'react'

export default function About(props) {
    return (
        <>
            <div className="container">
                <h3 className={`my-3 ${props.mode === 'dark' ? 'text-light' : ''}`}>About Page</h3>
                <div className={`accordion ${props.mode === 'dark' ? 'bg-dark text-light' : ''}`} id="accordionExample">
                    <div className={`accordion-item ${props.mode === 'dark' ? 'bg-dark text-light' : ''}`}>
                        <h2 className="accordion-header">
                            <button className={`accordion-button ${props.mode === 'dark' ? 'bg-dark text-light' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Features of TextUtils</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils provides multiple features such as text transformation, live preview, word and character counter, and dark/light mode support, which makes the user experience smooth, clean, and comfortable.
                            </div>
                        </div>
                    </div>
                    <div className={`accordion-item ${props.mode === 'dark' ? 'bg-dark text-light' : ''}`}>
                        <h2 className="accordion-header">
                            <button className={`accordion-button collapsed ${props.mode === 'dark' ? 'bg-dark text-light' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Why use TextUtils?</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils is useful for students, writers, and developers. It provides instant word and character counts along with estimated reading time, making it helpful for assignments, articles, and content preparation.
                            </div>
                        </div>
                    </div>
                    <div className={`accordion-item ${props.mode === 'dark' ? 'bg-dark text-light' : ''}`}>
                        <h2 className="accordion-header">
                            <button className={`accordion-button collapsed ${props.mode === 'dark' ? 'bg-dark text-light' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>What is TextUtils?</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils is a simple and powerful text utility tool that helps you modify and analyze your text easily. You can convert text to uppercase or lowercase, clear content, and preview changes in real time for better control.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
