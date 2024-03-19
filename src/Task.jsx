import React, { useState } from 'react'

const array = [
    { id: 1, q: 'question 1', ans: 'answer 1' },
    { id: 2, q: 'question 2', ans: 'answer 2' },
    { id: 3, q: 'question 3', ans: 'answer 3' },
    { id: 4, q: 'question 4', ans: 'answer 4' },
]

function Task() {
    const [user, setUser] = useState(false)
    const [answer, setAnswer] = useState([]);
    const [getId, setId] = useState(null);


    const setting = (getAns) => {
        if (answer.includes(getAns)) {
            setAnswer(answer.filter((val) => val !== getAns));
        } else {
            setAnswer([...answer, getAns])
        }
    }

    return (
        <>
        
            <button onClick={() => setUser(!user)}>{!user ? `Get User Control` : `Remove User Control`} </button>
            {
                array.map((val) => (
                    <div key={val.id}>
                        <div className='q' 

                        onClick={() => 
                        user ? 
                        setting(val.ans) : 
                        setId(getId === val.id ? null : val.id) }>

                        {val.q}
                        </div>

                {
                   user ? 
                   (answer.includes(val.ans)) && <div className='an'>{val.ans}</div> 
                   : (val.id === getId) && <div className='an'>{val.ans}</div>
                }

                    </div>
                ))
            }
         <hr style={{width:'90vw'}}/>
        </>
    )
}

export default Task
