import React from 'react'
import Joke from './PropsStyling'
import JokeData from './JokeData'

function PropStyleApp() {
    const MemeComponents = JokeData.map(meme => {
        return <Joke key={meme.id} question={meme.question} punchLine={meme.punchLine} /> 
    })
    return (
        <div>
            {MemeComponents}
        </div>
    )

}

export default PropStyleApp