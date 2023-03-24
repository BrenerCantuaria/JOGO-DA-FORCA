import { useCallback, useEffect, useState } from 'react'
import './App.css'
import HangmanDrawing from './components/hangman-drawing'
import HangmanWord from './components/hangman-word'
import Keyboard from './components/keyboard'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
const HangmanPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 375px;
`
const words = ['arroz', 
'casa', 
'batata', 
'carro', 
'pirata', 
'time', 
'escola', 
'celular', 
'empresa', 
'arquivo', 
'retrato', 
'pesquisa', 
'palavra', 
'dente', 
'piloto', 
'adesivo', 
'bola', 
'escada', 
'moto', 
'acidente', 
'natal', 
'estrutura',
'estacionamento',
'estudante', 
'microfone', 
'cores', 
'professor', 
'caminhar', 
'floresta', 
'ambiente', 
'teclado',
'filme']
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuesseLetters] = useState<string[]>([]) // letra que digitamos
  const incorrectGuess = guessedLetters.filter((letters) => !wordToGuess.includes(letters))
  const correctGuess = guessedLetters.filter((letters) => wordToGuess.includes(letters))

  const isLoser = incorrectGuess.length >= 6
  const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter))

  const addGuessedLetters = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuesseLetters((guessedLetters) => [...guessedLetters, letter])
  }, [guessedLetters, isLoser, isWinner])


  useEffect(() => {


    const handler = ((e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()

      addGuessedLetters(key)
    }) as unknown as EventListener


    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }



  }, [guessedLetters])


  return (
    <div className="App">
      <Wrapper>
        <HangmanPart>
          {isLoser && 'Você perdeu, atualize a página para jogar novamente'}
          {isWinner && 'Parabéns você venceu atualize a página para jogar novamente'}
          <h2> Jogo da Forca</h2>
          <HangmanDrawing numberOfGuesses={incorrectGuess.length} />
          <HangmanWord guessedLetters={guessedLetters} word={wordToGuess} reveal={isLoser} />
        </HangmanPart>
        <Keyboard disabled={isLoser || isWinner} activeLetters={correctGuess} inactiveLetters={incorrectGuess} addGuessedLetters={addGuessedLetters} />
      </Wrapper>


    </div>
  )
}

export default App
