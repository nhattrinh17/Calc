import './button.css';

function Button(props) {
    return (
        <button
            className={`button col ${props.class}`}
            onClick={() => {
                props.handleClick(props.value);
            }}
        >
            {props.value}
        </button>
    );
}

export default Button;
