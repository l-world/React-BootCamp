import React from 'react'
import './style.css'

export default function Tenzies() {

    const buttons = new Array(10).fill(0).map( (btn,index) => 
        <button className='button' >{index + 1}</button> )

    return (
        <div className='container-ten'>
            <div className='ten-game'>
                <main className='ten-game_main'>
                    <h1>Tenzies</h1>
                    <p className='ten-game_main_p'>
                        Roll until all dice are the same.Click each die to freeze it at its current value between rolls.
                    </p>
                    <section className='ten-game_section'>
                        <div className="ten-game_section_btns">
                            {buttons}
                        </div>
                        <div className="roll-btn">
                            <button className='btn'>roll</button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
