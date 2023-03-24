import styled from "styled-components"

const Base = styled.div`
    height:10px;
    width:250px;
    background:black;
    margin-left: 100px;

`
const Vertical = styled.div`
    height:250px;
    width:10px;
    background:black;
    margin-left: 150px;

`
const HorizontalLine = styled.div`
    height:10px;
    width:170px;
    background:black;
    position: absolute;
    right: 50px;
    top: 0;

`

const VerticalSmall = styled.div`
    height:40px;
    width:10px;
    background:black;
    margin-left: 150px;
    position: absolute;
    right: 50px;
    top: 0px;

`
const Head = styled.div`
    height:30px;
    width:30px;
    border: 5px solid ;
    border-radius: 50%;
    background:black;
    margin-left: 150px;
    position: absolute;
    right: 35px;
    top: 30px;
`
const Body = styled.div`
    height:80px;
    width:10px;
    background:black;
    margin-left: 150px;
    position: absolute;
    right: 50px;
    top: 60px;
`
const LeftArm = styled.div`
    height:10px;
    width:50px;
    background:black;
    margin-left: 150px;
    position: absolute;
    right: 10px;
    top: 80px;
    rotate: 30deg;
`
const RightArm = styled.div`
    height:10px;
    width:50px;
    background:black;
    margin-left: 150px;
    position: absolute;
    right: 50px;
    top: 80px;
    rotate: -30deg;
`
const Rightleg = styled.div`
    height:10px;
    width:50px;
    background:black;
    margin-left: 150px;
    position: absolute;
    right: 14px;
    top: 145px;
    rotate: 50deg;
`
const Leftleg = styled.div`
    height:10px;
    width:50px;
    background:black;
    margin-left: 150px;
    position: absolute;
    right: 45px;
    top: 145px;
    rotate: -50deg;
`
const bodyParts = [Head,Body,RightArm,LeftArm,Rightleg,Leftleg]
interface HangmanDrawingProps{
    numberOfGuesses: number
}

export default function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps){
    return(
        <div style={{position:'relative'}}>
            {bodyParts.slice(0,numberOfGuesses).map((BodyPart,index) => {
                return <BodyPart key={index}/>
            })}
            <VerticalSmall/>
            <HorizontalLine/>
            <Vertical/>
            <Base/>
        </div>
    )
}