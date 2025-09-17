
import { useState } from 'react'
import './Flashcard.css'

function Flashcard({question, answer}) {
    const [isFlipped , setIsFlipped] = useState(false);
      const [flipCount, setFlipCount] = useState(0);

    function handleFlip(){
        setIsFlipped(!isFlipped)
          setFlipCount(flipCount + 1)
    }
return(
    <div className='flashcard'>
         <p className="flip-count">
        Otworzono fiszkę {flipCount} {flipCount === 1 ? 'raz' : 'razy'}
      </p>
    
        {isFlipped ?  <p>{answer}</p> :  <p>{question}    </p> }
        <button onClick={handleFlip} className='przycisk'>Odwróć kartę</button>
        
    </div>
)
}

export default Flashcard;
