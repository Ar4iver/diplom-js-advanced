import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import styles from './AccountDetailPage.module.scss'
import AppLink from 'shared/ui/AppLink/AppLink'
import { fetchAccountDetails } from 'features/accounts/api/fetchAccountDetails'
import { formatCurrency } from 'shared/utils/formatCurrency'
import { TransferForm } from 'features/accountsPage/components/TransferForm/TransferForm'
import { BalanceChart } from 'features/accountsPage/components/BalanceChart/BalanceChart'
import Arrow from 'shared/assets/svg/arrow.svg'
import { TransactionHistory } from 'features/accountsPage/components/TransactionHistory/TransactionHistory'

export const AccountDetailPage = () => {
    const { accountNumber } = useParams()
    const [accountDetails, setAccountDetails] = useState(null)
    console.log(accountDetails)

    useEffect(() => {
        const getAccountDetails = async () => {
            const data = await fetchAccountDetails(accountNumber)
            setAccountDetails(data)
        }
        getAccountDetails()
    }, [accountNumber])

    const [components, setComponents] = useState([
        {
            id: '1',
            component: <TransferForm accountNumber={accountNumber} />
        },
        {
            id: '2',
            component: <BalanceChart accountData={accountDetails} period={6} showTransactionsRatio={false} title={'Динамика баланса'} />
        }
    ])

    if (!accountDetails) {
        return <div>Loading...</div>
    }

    const handleDragEnd = (result) => {
        if (!result.destination) {
            return
        }

        const items = Array.from(components)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setComponents(items)
    }

    return (
        <div className={styles.detailPageContainer}>
            <div className={styles.top}>
                <div className={styles.topContentLeft}>
                    <h2 className={styles.headerDetailPage}>Просмотр счёта</h2>
                    <span className={styles.number}>№ {accountNumber}</span>
                </div>
                <div className={styles.topContentRight}>
                    <AppLink to={'/accounts'} className={styles.link}><span className={styles.arrowSvg}><img src={Arrow} alt="Arrow" /></span>Вернуться назад</AppLink>
                    <span className={styles.accountBalance}>Баланс:<span className={styles.countBalance}> {formatCurrency(accountDetails.balance)}</span></span>
                </div>
            </div>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div className={styles.middle} {...provided.droppableProps} ref={provided.innerRef}>
                            {components.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            {item.component}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <div className={styles.historyTransaction}><AppLink to={`/accounts/${accountNumber}/history-details`}><TransactionHistory accountNumber={accountNumber} transactions={accountDetails.transactions} /></AppLink></div>
        </div>
    )
}
