import { useRef, useState } from 'react';

import './app.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

function App() {
    const calculation = useRef(null);
    const numberCalcOne = useRef(0);
    const numberCalcTow = useRef(0);
    const [result, setResult] = useState(0);
    // const [msg, setMsg] = useState(null);

    // console.log(numberCalcOne.current, calculation.current, numberCalcTow.current);

    console.log('----render-----');

    const addNumber = (value) => {
        if (calculation.current === null) {
            const pre = numberCalcOne.current;
            let setData;
            if (value === '.' && pre.toString().indexOf('.') < 0) {
                setData = '';
                setData += pre + value;
            } else if (value !== '.' && pre.toString().indexOf('.') > 0) {
                setData = '';
                setData += pre + value;
            } else if (value === '.' && pre.toString().indexOf('.') > 0) {
                setData = pre;
                // setMsg('1 Số chỉ có 1 dấu phẩy');
            } else {
                setData = pre * 10 + +value;
            }
            numberCalcOne.current = setData;
            setResult(setData);
        } else {
            const pre = numberCalcTow.current;
            let setData;
            if (value === '.' && pre.toString().indexOf('.') < 0) {
                setData = '';
                setData += pre + value;
            } else if (value !== '.' && pre.toString().indexOf('.') > 0) {
                setData = '';
                setData += pre + value;
            } else if (value === '.' && pre.toString().indexOf('.') > 0) {
                setData = pre;
                // setMsg('1 Số chỉ có 1 dấu phẩy');
            } else {
                setData = pre * 10 + +value;
            }
            numberCalcTow.current = setData;
            setResult(setData);
        }
        // else if (calculation.current != null) {
        //     calcTowNumber();
        // }
    };

    const calcTowNumber = () => {
        let resultCalc = 0;
        switch (calculation.current) {
            case '+':
                resultCalc = +numberCalcOne.current + +numberCalcTow.current;
                break;
            case '-':
                resultCalc = numberCalcOne.current - numberCalcTow.current;
                break;
            case 'x':
                resultCalc = numberCalcOne.current * numberCalcTow.current;
                break;
            case '/':
                resultCalc = numberCalcOne.current / numberCalcTow.current;
                break;
            case '%':
                resultCalc = numberCalcOne.current % numberCalcTow.current;
                break;
            default:
                resultCalc = numberCalcOne.current;
        }
        resultCalc = resultCalc.toFixed(6);
        setResult(+resultCalc);
        numberCalcOne.current = +resultCalc;
        numberCalcTow.current = 0;
        calculation.current = null;
    };

    const addCalculation = (value) => {
        if (calculation.current === null) {
            // console.log('Ấn dấu');
            calculation.current = value;
        } else {
            if (numberCalcTow.current) {
                calcTowNumber();
                calculation.current = value;
            }
        }
    };

    const percentageData = () => {
        if ((calculation.current === 'x' || calculation.current === '/') && +numberCalcTow === 0) {
            // setMsg('Cú pháp không hợp lệ');
        } else if (calculation.current !== null) {
            calcTowNumber();
            numberCalcOne.current /= 100;
            setResult((pre) => pre / 100);
        } else {
            numberCalcOne.current /= 100;
            setResult((pre) => pre / 100);
        }
    };

    const resetData = () => {
        numberCalcOne.current = 0;
        numberCalcTow.current = 0;
        calculation.current = null;
        setResult(0);
    };

    const reverseSign = () => {
        if (calculation.current) {
            numberCalcTow.current *= -1;
            setResult((pre) => pre * -1);
        } else {
            numberCalcOne.current *= -1;
            setResult((pre) => pre * -1);
        }
    };

    return (
        <div className="grid wide">
            <div className="App">
                <Header result={result} />
                <div className="container row">
                    <div className="numbers-tools l-9 m-9 c-9">
                        <div className="tools row">
                            <Button class="l-4 m-4 c-4 tool" value="AC" handleClick={resetData} />
                            <Button class="l-4 m-4 c-4 tool" value="+/_" handleClick={reverseSign} />
                            <Button class="l-4 m-4 c-4 tool" value="%" handleClick={percentageData} />
                        </div>
                        <div className="numbers row">
                            <Button class="l-4 m-4 c-4" value="7" handleClick={addNumber} />
                            <Button class="l-4 m-4 c-4" value="8" handleClick={addNumber} />
                            <Button class="l-4 m-4 c-4" value="9" handleClick={addNumber} />
                            <Button class="l-4 m-4 c-4" value="4" handleClick={addNumber} />
                            <Button class="l-4 m-4 c-4" value="5" handleClick={addNumber} />
                            <Button class="l-4 m-4 c-4" value="6" handleClick={addNumber} />
                            <Button class="l-4 m-4 c-4" value="1" handleClick={addNumber} />
                            <Button class="l-4 m-4 c-4" value="2" handleClick={addNumber} />
                            <Button class="l-4 m-4 c-4" value="3" handleClick={addNumber} />
                            <Button class="l-8 m-8 c-8" value="0" handleClick={addNumber} />
                            <Button class="l-4 m-4 c-4" value="." handleClick={addNumber} />
                        </div>
                    </div>
                    <div className="calculations l-3 m-3 c-3 row">
                        <Button class="l-12 m-12 c-12" value="/" handleClick={addCalculation} />
                        <Button class="l-12 m-12 c-12" value="x" handleClick={addCalculation} />
                        <Button class="l-12 m-12 c-12" value="-" handleClick={addCalculation} />
                        <Button class="l-12 m-12 c-12" value="+" handleClick={addCalculation} />
                        <Button class="l-12 m-12 c-12" value="=" handleClick={calcTowNumber} />
                    </div>
                </div>
                {/* <h2 className="msg">{msg}</h2> */}
            </div>
        </div>
    );
}

export default App;
