import { BiLogoPlayStore } from "react-icons/bi"
import { FaApple } from "react-icons/fa"
import styled from "styled-components"
const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <TextBox>
                    <h1>The money app for Africans.</h1>
                    <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                    <Buttons>
                        <button> <FaApple /> <span>App store</span></button>
                        <button> <BiLogoPlayStore /> <span>Play store</span></button>
                    </Buttons>
                </TextBox>
                <ImageBox>
                    {/* <img src={HeroImage} alt="Hero" /> */}
                </ImageBox>
            </Wrapper>
        </Container>
    );
};

export default Hero;

const Container = styled.div`
    background-color: red;
`
const Wrapper = styled.div`

`
const TextBox = styled.div`

`
const ImageBox = styled.div`
    
`
const Buttons = styled.div`
    /* text-align: center; */
`