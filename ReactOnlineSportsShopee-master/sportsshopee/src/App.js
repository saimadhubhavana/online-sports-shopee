import { Provider } from 'react-redux';
import store from './store/store'
import HomeRouter from './routers/HomeRouter';

function App() {

    return (
        <div>
            <Provider store={store()}>
                <HomeRouter />
            </Provider>
        </div>

    );


}

export default App;