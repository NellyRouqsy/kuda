// import styled from "styled-components";
// import { MdAddToHomeScreen } from "react-icons/md"
import Header from "./static/header";
import Personal from "./pages/personal"
import Footer from "./static/footer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Business from "./pages/business";
import Companies from "./pages/companies";

const App = ()=>{
  return(
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Personal/>}/>
          <Route path="/business" element={<Business/>}/>
          <Route path="/companies" element={<Companies/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App

// const Container = styled.div`
// background-color: yellow;
// font-size: 30px;
// color: pink;
// `