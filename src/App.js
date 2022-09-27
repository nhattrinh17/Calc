import './app.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';

function App() {
    console.log('----render App-----');

    return (
        <div className="grid wide">
            <div className="App">
                <Header />
                <Container />
            </div>
        </div>
    );
}

export default App;
