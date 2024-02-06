import { BrowserRouter, Route, Routes } from "react-router-dom"
import EffectDemo from "./effectdemo"
import StateDemo from "./statedemo"
import MySkill from "./listing"
import Title, { Designation, MyImage } from "./mytitle"
import ParamsDemo from "./paramsdemo"
import ReactMenu from "./menu"

const App=()=>{
    return(
        <>
            <BrowserRouter>
                {/* <MyImage/>
                <StateDemo/> */}
                <ReactMenu/>
                <Routes>
                    <Route path="" Component={()=><h1>Routing example</h1>} />
                    <Route path="skill" Component={()=><MySkill/>} />
                    <Route path="who" Component={()=><Title/>} />
                    <Route path="role" Component={()=><Designation/>} />
                    <Route path="specific/:container" Component={()=><ParamsDemo/>} />
                </Routes>
            </BrowserRouter>
            {/* <StateDemo/>
            <EffectDemo/> */}
        </>
    )
}

export default App