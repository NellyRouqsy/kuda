import { MdOutlineArrowDropDown } from "react-icons/md";
import styled from "styled-components";
import HeaderLogo from '../assets/kuda-icon.png'
import NigIcon from '../assets/nigeria.png'
import { IoReorderTwoOutline } from "react-icons/io5";


const Header = ()=>{
    return(
        <Container>
            <LogoNav>
                <Logo>
                    <img src={HeaderLogo} alt="" />
                </Logo>
                <Navigations>
                    <nav>
                        <span>Personal</span>
                        <MdOutlineArrowDropDown size={20}/>
                    </nav>
                    <nav>
                        <span>Business</span>
                        <MdOutlineArrowDropDown size={20}/>
                    </nav>
                    <nav>
                        <span>Company</span>
                        <MdOutlineArrowDropDown size={20}/>
                    </nav>
                    <nav>
                        <span>Help</span>
                        <MdOutlineArrowDropDown size={20}/>
                    </nav>
                </Navigations>
            </LogoNav>
            <Buttons>
                <SignBtn>Sign In</SignBtn>
                <JoinBtn>Join Kuda</JoinBtn>
                <NaijaBtn>
                    <img src={NigIcon} alt="" />
                </NaijaBtn>
                <SideNav>
                    <IoReorderTwoOutline />
                </SideNav>
            </Buttons>
        </Container>
    );
};
export default Header


const Container = styled.div`
height:60px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
const LogoNav = styled.div`
display: flex;
align-items: center;
`
const Logo = styled.div`
margin: 0px 70px 0px 60px;
img{
    width: 70px;
    height: 15px;
}
`
const Navigations = styled.div`
display: flex;
margin-left: -10px;
nav{
    display: flex;
    align-items: center;
    margin: 0px 15px;
    color: rgb(64,25,109);
    cursor: pointer;
    span{
        font-size: 13px;
        font-weight: 600;
    }
}
@media (max-width: 800px) {
    display: none;
}
`
const Buttons = styled.div`
display: flex;
align-items: center;
@media (max-width: 800px) {
    margin-right: 30px;
}
`
const SignBtn = styled.button`
background-color: transparent;
cursor: pointer;
border: none;
outline: none;
font-weight: 600;
color: rgb(106,76,141);
@media (max-width: 800px) {
    display: none;
}
`
const JoinBtn = styled.button`
width: 110px;
height: 40px;
border-radius: 10px;
outline: none;
border: none;
color: white;
font-weight: 700;
background-color: rgb(64,25,109);
margin: 0px 25px;
cursor: pointer;
text-align: center;
transition-property: transform;
transition-duration: 350ms;
transition-timing-function: ease;
&:hover{
  transform: translateY(-5px);
};
@media (max-width: 800px) {
    display: none;
}
`
const NaijaBtn = styled.button`
background-color: rgb(178,219,202);
outline: none;
border: none;
height: 30px;
width: 30px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-right: 50px;
cursor: pointer;
img{
    width: 20px;
}
`
const SideNav = styled.div`
display: none;
font-size: 30px;
margin-left: -30px;

@media (max-width: 800px) {
    display: flex;
    align-items: center;
    cursor: pointer;
}
`
