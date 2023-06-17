import { useState } from "react"

interface QuizProps {
    readonly quizAnswer: string
}

export function Quiz(){

    const [value, setValue] = useState('')

    function handleOnChange(target:string){
        setValue(target)
    }
   
    return (
        <>
            <p>Quiz App</p>
            <form>
                <input value={value} onChange={(e)=>handleOnChange(e.target.value)}></input>
                <button disabled={value === ''}>Submit</button>
            </form>
        </>
    )
}