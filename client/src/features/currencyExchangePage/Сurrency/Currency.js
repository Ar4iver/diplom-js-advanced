import React from 'react'

const Currency = (props) => {
    const { currencies } = props

    console.log(Object.keys(currencies))

    return (
        <ul>
            {Object.keys(currencies).map(key => {
                const item = currencies[key]
                const formattedString = `${item.code}${item.amount}`
                return <li key={key}>{formattedString}</li>
            })}
        </ul>
    )
}

export default Currency
