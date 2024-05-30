import { Routes,Route } from "react-router-dom";
import Nav from '../components/nav/nav'
import Header from '../components/header/header'
import {Home,About,Menu,Service} from "../pages"
const Navigator=()=>{
return(<>
<Routes>
    <Route path="/" element={<><Nav/><Header/><Home/></>}/>
    <Route path="/About" element={<><Nav/><Header/><About/></>} />
    <Route path="/menu" element={<><Nav/><Header/><Menu/></>} />
    <Route path="/service" element={<><Nav/><Header/><Service/></>} />
  </Routes>
</>)

}
export default Navigator