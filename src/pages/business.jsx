import {useState} from "react"
import { VscVariableGroup } from "react-icons/vsc"
import styled from "styled-components"

const Business = ()=>{
    const [myNum , setMyNum] = useState(1)

    const increaseNum = () =>{
        setMyNum(myNum + 1)
    }
    const decreaseNum = () =>{
        setMyNum(myNum - 1)
    }

    return(
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>This is the business</h1>
            <br />
            <Holder>
            <button onClick={increaseNum}>Add</button>
            <h1> {myNum} </h1>
            <button onClick={decreaseNum}>Subtract</button>
            </Holder>
        </div>
    )
}
export default Business
const Holder = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
button{
    height: 150px;
    width: 200px;
}
`