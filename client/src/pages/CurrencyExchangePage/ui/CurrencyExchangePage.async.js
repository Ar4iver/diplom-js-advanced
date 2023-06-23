import { lazy } from 'react'

export const CurrencyExchangePageAsync = lazy(() =>
    import('./CurrencyExchangePage')
)
