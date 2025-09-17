
import { useState } from 'react'
import './Flashcard.css'

function Flashcard({question, answer}) {
    const [isFlipped , setIsFlipped] = useState(false);

    function handleFlip(){
        setIsFlipped(!isFlipped)
    }
return(
    <div className='flashcard'>
        
        {isFlipped ?  <p>{answer}✅</p> :  <p>{question}    </p> }
        <button onClick={handleFlip} className='przycisk'>Odwróć kartę</button>
    </div>
)
}

export default Flashcard;
