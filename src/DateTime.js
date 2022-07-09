import React from 'react'
import DateTimePretty from './Pretty.js'

function DateTime(props) {
    return (
        <p className="date">
            {props.text}
        </p>
    )
}

export default DateTimePretty(DateTime)