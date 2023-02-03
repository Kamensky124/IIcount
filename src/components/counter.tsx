import React from 'react';
import s from './counter.module.css'

type PropsType = {
    value: number
    classes: string
}
export const Counter = (props: PropsType) => {

    const countColor = props.value === 5 ? "red" : "black";
    return (
        <div>
            <div style={{color:countColor}}>
                {props.value}
            </div>
        </div>
    );

}