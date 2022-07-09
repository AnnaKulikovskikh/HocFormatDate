import React from 'react'

function pretty(datePub) {
    const publishDate = new Date (datePub)
    const dateNow = new Date()
    const milsec = dateNow - publishDate
    const hours = milsec / (1000 * 60 * 60)
    if (hours < 1) return "12 минут назад"
    if (hours < 24) return "5 часов назад"
    return `${parseInt(hours/24)} дней назад`
}

export default function DateTimePretty(component) {
    const C = component
    return function(props) {       
        return (
            <C text={pretty(props.date)} {...props}/>
        )
    }
}