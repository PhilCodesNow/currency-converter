import React from 'react';


export default function currencyRow(props) {
    const {
        currencyOptions
    } = props
    return (
        <div>
            <input type="number" className="input"/>
            <select>
                {currencyOptions.map(option => (
                    <option value={option} key={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
