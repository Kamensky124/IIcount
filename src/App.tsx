import React, {useState} from 'react';
import s from './App.module.css'
import {Counter} from "./components/counter";
import {Button} from "./components/button";

export default function App() {


    const maxValue = 5;
    const minValue = 0;
    let [count, setCount] = useState(0);

    const incrementCounter = () => {
        count !== maxValue ? setCount(count => count + 1) : setCount(maxValue)

    };

    const resetCounter = () => {
        setCount(minValue)
    };

    const incDisabled = count === maxValue;
    const resDisabled = count === minValue;

    const countMax = `${count === maxValue ? "s.countMax" : "s.count"}`

    return (
        <div className={s.item}>
            <Counter value={count} classes={countMax}/>
            <div className={s.button}>
                <Button
                    name={'inc'}
                    disabled={incDisabled}
                    callBack={() => incrementCounter()}/>
                <div>
                    <Button
                        disabled={resDisabled}
                        name={'reset'}
                        callBack={() => resetCounter()}/>
                </div>
            </div>
        </div>
    );
}

