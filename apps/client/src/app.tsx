import React from "react";
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages";
import {Navbar} from "./components";
import {RecoilRoot} from "recoil";

function App() {
    return (
        <RecoilRoot>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </RecoilRoot>
    );
}

export default App;
