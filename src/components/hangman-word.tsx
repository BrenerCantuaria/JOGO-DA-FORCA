import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 6rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: monospace;
`

interface HangmanWordProps {
    reveal: boolean
    word: string
    guessedLetters : string[]
}

export default function HangmanWord({ reveal, word, guessedLetters}: HangmanWordProps) {
    return (
        <Wrapper>{word.split("").map((letter, index) => (
            <span style={{ borderBottom: " 0.1rem solid black" }}
                key={index}
            >
                <span style={{
                    visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden', color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black'
                }}
                >
                    {letter}
                </span>
            </span>
        ))}</Wrapper>
    )
}