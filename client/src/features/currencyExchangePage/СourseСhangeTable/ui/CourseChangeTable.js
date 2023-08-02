import React, { useEffect, useState } from 'react'
import { changeSvg } from 'shared/utils/changeSvg'
import styles from './CourseChangeTable.module.scss'

const CourseChangeTable = () => {
    const [arrayExchange, setArrayExchange] = useState([])

    useEffect(() => {
        const websocket = new WebSocket('ws://localhost:3000/currency-feed')

        const socketData = {
            type: 'EXCHANGE_RATE_CHANGE',
            from: 'NZD',
            to: 'CHF',
            rate: 62.79,
            change: 1
        }

        websocket.onopen = () => {
            console.log('WebSocket connection established.')
            websocket.send(JSON.stringify(socketData))
        }

        websocket.onmessage = (event) => {
            const receivedData = JSON.parse(event.data)

            setArrayExchange(prevArray => [...prevArray, receivedData])
        }

        websocket.onclose = () => {
            console.log('WebSocket connection closed.')
        }

        return () => {
            websocket.close()
        }
    }, [])

    const limitedArrayExchange = arrayExchange.slice(-21).reverse()

    return (
        <div className={styles.container}>
            <h2>Изменение курсов в реальном времени</h2>
            <div className={styles.wrapperList}>
                <ul>
                    {limitedArrayExchange.map((item, index) => (
                        <li className={styles.param} key={index}>
                            <span className={styles.param__value}>{item.rate} {changeSvg(item.change)}</span>
                            <span className={styles.param__prop} style={item.change === 1 ? { color: 'green' } : { color: 'red' }}><span>{item.from}/{item.to}</span></span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CourseChangeTable
