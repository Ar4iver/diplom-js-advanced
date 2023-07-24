import React from 'react'

export const changeSvg = (change) => {
    switch (change) {
    case 1:
    case 0:
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path d="M20 10L10 0L0 10L20 10Z" fill="#76CA66"/>
            </svg>
        )
    case -1:
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path d="M0 0L10 10L20 0H0Z" fill="#FD4E5D"/>
            </svg>
        )
    default:
        return null
    }
}