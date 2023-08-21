import React from 'react'
import styles from './Pagination.module.scss'

const Pagination = ({ current, total, onChange }) => {
    const neighbors = 2
    const boundaryPages = 2

    const generatePages = () => {
        const pages = []

        for (let i = 1; i <= Math.min(boundaryPages, total); i++) {
            pages.push(i)
        }

        const startMiddle = Math.max(boundaryPages + 1, current - neighbors)
        const endMiddle = Math.min(total - boundaryPages, current + neighbors)
        if (startMiddle > boundaryPages + 1) pages.push('...')
        for (let i = startMiddle; i <= endMiddle; i++) {
            pages.push(i)
        }
        if (endMiddle < total - boundaryPages) pages.push('...')

        for (let i = Math.max(total - boundaryPages + 1, endMiddle + 1); i <= total; i++) {
            pages.push(i)
        }

        return pages
    }

    const handlePageClick = (pageNumber) => {
        if (pageNumber !== current) {
            onChange(pageNumber)
        }
    }

    const pagesToShow = generatePages()

    return (
        <div className={styles.paginationContainer}>
            {pagesToShow.map((page, index) => (
                <span
                    key={index}
                    className={`${styles.pageNumber} ${page === current ? styles.active : ''}`}
                    onClick={() => typeof page === 'number' && handlePageClick(page)}
                >
                    {page}
                </span>
            ))}
        </div>
    )
}

export default Pagination
