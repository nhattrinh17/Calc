import { useState } from 'react';

import './app.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';

function App() {
    const [calculation, setCalculation] = useState('');
    const [numberCalcOne, setNumberCalcOne] = useState(0);
    const [numberCalcTow, setNumberCalcTow] = useState(0);
    const [result, setResult] = useState(0);
    const [msg, setMsg] = useState(null);

    const addNumber = (value) => {
        if (!calculation) {
            setNumberCalcOne((pre) => {
                setMsg(null);
                let setData;
                if (value === '.' && pre.toString().indexOf('.') < 0) {
                    setData = '';
                    setData += pre + value;
                    setResult(setData);
                } else if (value !== '.' && pre.toString().indexOf('.') > 0) {
                    setData = '';
                    setData += pre + value;
                    setResult(setData);
                } else if (value === '.' && pre.toString().indexOf('.') > 0) {
                    setData = pre;
                    setResult(setData);
                    setMsg('1 Số chỉ có 1 dấu phẩy');
                } else {
                    setData = pre * 10 + +value;
                    setResult(+setData);
                }
                return setData;
            });
        } else if (calculation.length === 1) {
            setNumberCalcTow((pre) => {
                setMsg(null);
                let setData;
                if (value === '.' && pre.toString().indexOf('.') < 0) {
                    setData = '';
                    setData += pre + value;
                } else if (value !== '.' && pre.toString().indexOf('.') > 0) {
                    setData = '';
                    setData += pre + value;
                } else if (value === '.' && pre.toString().indexOf('.') > 0) {
                    setData = pre;
                    setMsg('1 Số chỉ có 1 dấu phẩy');
                } else {
                    setData = pre * 10 + +value;
                }
                return setData;
            });
        } else if (calculation.length === 2) {
            calcTowNumber();
        }
    };

    const calcTowNumber = () => {
        let resultCalc = 0;
        switch (calculation) {
            case '+':
                resultCalc = +numberCalcOne + +numberCalcTow;
                break;
            case '-':
                resultCalc = numberCalcOne - numberCalcTow;
                break;
            case 'x':
                resultCalc = numberCalcOne * numberCalcTow;
                break;
            case '/':
                resultCalc = numberCalcOne / numberCalcTow;
                break;
            case '%':
                resultCalc = numberCalcOne % numberCalcTow;
                break;
            default:
                resultCalc = numberCalcOne;
        }
        setResult(+resultCalc);
        setNumberCalcOne(+resultCalc);
        setNumberCalcTow(0);
        setCalculation('');
    };

    const addCalculation = (value) => {
        setMsg(null);
        if (!calculation) {
            setCalculation(value);
        } else {
            setCalculation((pre) => {
                if (
                    (pre === '/' && value === '/' && !numberCalcTow) ||
                    (pre === 'x' && value === 'x' && !numberCalcTow) ||
                    (pre === '/' && value === 'x' && !numberCalcTow) ||
                    (pre === 'x' && value === '/' && !numberCalcTow)
                ) {
                    setCalculation(pre);
                    setMsg('Cú pháp không hợp lệ');
                } else {
                    calcTowNumber();
                    setCalculation(value);
                }
            });
        }
    };

    const percentageData = () => {
        if ((calculation === 'x' || calculation === '/') && +numberCalcTow === 0) {
            setMsg('Cú pháp không hợp lệ');
        } else if (calculation) {
            calcTowNumber();
            setNumberCalcOne((pre) => pre / 100);
            setResult((pre) => pre / 100);
        } else {
            setNumberCalcOne((pre) => pre / 100);
            setResult((pre) => pre / 100);
        }
    };

    const resetData = () => {
        setNumberCalcOne(0);
        setNumberCalcTow(0);
        setCalculation('');
        setResult(0);
    };

    return (
        <div className="grid wide">
            <div className="App">
                <Header result={result} />
                <div className="container row">
                    <div className="numbers-tools l-9 m-9 c-9">
                        <div className="tools row">
                            <Button class="l-4 m-4 c-4 tool" value="AC" handleClick={resetData} />
                            <Button class="l-4 m-4 c-4 tool" value="+/_" />
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
                <h2 className="msg">{msg}</h2>
            </div>
        </div>
    );
}

export default App;
