import styled, { StyledInterface } from "styled-components"

const keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 50px;
    width: 600px;
    justify-content: center;
`
const Button = styled.button<{ isInactive: boolean }>`
    opacity: ${p => p.isInactive ? 'null' : '0.3'};

    &:focus:disabled{
        outline: none;
        border-color: transparent;
        cursor: not-allowed;
    }

    &:focus-visible:disabled{
        outline: none;
        border-color: transparent;
        cursor: not-allowed;
    }
    &:hover:disabled{
        outline: none;
        border-color: transparent;
        cursor: not-allowed;
    }
`

interface KeyboardProps {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetters: (letter: string) => void
}
export default function Keyboard({ activeLetters, inactiveLetters, addGuessedLetters,disabled=false}: KeyboardProps) {
    return (
        <Wrapper>
            {keys.map((letter) => {
                const isActive = !activeLetters.includes(letter)
                const isInactive = !inactiveLetters.includes(letter)
                return (
                    <Button
                        onClick={() => addGuessedLetters(letter)}
                        isInactive={isActive && isInactive}
                        key={letter}
                        disabled={!(isActive && isInactive) || disabled}
                    >{letter.toLocaleUpperCase()}
                    </Button>
                )
            })}
        </Wrapper>
    )
}