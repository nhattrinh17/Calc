import './header.css';

const Header = function (props) {
    // console.log(props);
    // const value = props.numberOne + props.calculation;
    // if (props.numberTow > 0) value += props.numberTow;
    return (
        <div className="wrapper">
            <h2 className="content">{props.result}</h2>
        </div>
    );
};

export default Header;
