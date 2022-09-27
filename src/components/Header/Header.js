import { useSelector } from 'react-redux';
import './header.css';

const Header = function () {
    console.log('----render Header-----');

    const result = useSelector((state) => state.calc.result);

    return (
        <div className="wrapper">
            <h2 className="content">{result}</h2>
        </div>
    );
};

export default Header;
