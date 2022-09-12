import React from "react"
import Main from "./components/Main"
import Navbar from "./components/Navbar"

function App() {
    return(
        <div>
            <div>
                <Navbar />
            </div>
            <div className="mainContent">
                <Main />
            </div>
        </div>
    )
}

export default App