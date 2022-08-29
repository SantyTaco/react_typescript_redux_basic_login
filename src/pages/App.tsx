import { Provider } from "react-redux";
import {store} from "../state";
import LoginPage from './Login';


const App = (): JSX.Element => {
    return <Provider store={store}>
        <div>
            <LoginPage/>
        </div>
    </Provider>
};

export default App;
