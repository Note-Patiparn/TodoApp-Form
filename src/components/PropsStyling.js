import React from 'react'

function Joke (props) {

    return (
        <div className='jokes'>
                            {/* this is saying that is this props.joke.question truthy if it is display: block 
                            if not display : none */}
            <h2 style={{display: props.question ? 'block' : 'none'}} className ='question'>Question: {props.question}</h2>
            <h2 style={{fontSize: props.question ? '1rem' : '1.25rem'}} className ='punchline'>Punchline: {props.punchLine}</h2>
        </div>
    )
}


export default Joke


// One LAST time in this course, set up a React app from scratch
// Render an <App /> component
  // App should be in its own file
// App should render 5 <Joke /> components
  // Each Joke should receive a "question" prop and a "punchLine" prop
  // and render those however you'd like
  
// EXTRA CREDIT:

// Some jokes are only a punch line with no question:

  // E.g.: "It’s hard to explain puns to kleptomaniacs because they always take things literally."

// If you don't pass in a "question" prop, how might you make it only show the punchline instead?

// Spend time practicing the style of your Joke component
