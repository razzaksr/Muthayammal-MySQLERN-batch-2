import { BrowserRouter, Route, Routes } from "react-router-dom"
import Appbar from "./Appbar"
import Publish from "./Publish"
import Available from "./Available"
import Filter from "./Filter"

const App=()=>{
    return(
        <>
            <BrowserRouter>
                <Appbar/>
                <Routes>
                    <Route path="/publish" Component={()=><Publish/>} />
                    <Route path="/available" Component={()=><Available/>} />
                    <Route path="/filter" Component={()=><Filter/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App