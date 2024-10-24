// import styled from "styled-components";
// import { MdAddToHomeScreen } from "react-icons/md"
import Header from "./static/header";
import Home from "./pages/home"
import Footer from "./static/footer";

const App = ()=>{
  return(
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
};

export default App

// const Container = styled.div`
// background-color: yellow;
// font-size: 30px;
// color: pink;
// `