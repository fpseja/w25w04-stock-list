import React from 'react'

type TickerCardProps = {
    ticker: string
    name: string
    currentPrice: number
    previousClose: number
}

const TickerCard = ({ ticker, name, currentPrice, previousClose }: TickerCardProps) => {
    const priceChange = currentPrice - previousClose
    const isPositive = priceChange >= 0

    return (
        <div>
            <div>
                <h2>{name}</h2>
                <div>{ticker}</div>
            </div>
            <div></div>

            <div>
                ${currentPrice.toFixed(2)}
            </div>

            <div>
                {isPositive ? '▲' : '▼'} {priceChange.toFixed(2)}
            </div>

            <div>
                전일 종가: ${previousClose.toFixed(2)}
            </div>
        </div>
    )
}

export default TickerCard