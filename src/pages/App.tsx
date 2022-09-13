import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "../state";
import Landing from "./Landing";
import LoginPage from './Login';


const App = (): JSX.Element => {
    return (<Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}>
                    
                </Route>
                <Route path="/landingPage" element={<Landing/>}/>
            </Routes>

        </BrowserRouter>
    </Provider>)
};

export default App;
