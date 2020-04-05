
export const CHANGE_CURRENCY_FROM = 'CHANGE_CURRENCY_FROM';
export const CHANGE_CURRENCY_TO = 'CHANGE_CURRENCY_TO';
export const REQUEST_CONVERSION = 'REQUEST_CONVERSION';
export const RECEIVE_CONVERSION = 'RECEIVE_CONVERSION';
export const RECEIVE_HISTORY = 'RECEIVE_HISTORY';

export const changeCurrencyFrom = (currency) => {
    return {
        type : CHANGE_CURRENCY_FROM,
        currency
    }
}


export const changeCurrencyTo = (currency) => {
    return {
        type : CHANGE_CURRENCY_TO,
        currency
    }
}


const requestConversion = (amount) => {
    return {
        type : REQUEST_CONVERSION,
        amount
    }
}

const receiveConversion = (amount, value, from, to) => {
    return {
        type : RECEIVE_CONVERSION,
        amount,
        value,
        from,
        to,
        convertedAt : Date.now()
    }
}

const receiveHistory = (json) => {
    return {
        type: RECEIVE_HISTORY,
        items: json.history
    }
}

export const convert = (amount) => {
    return async (dispatch, getState) => {
        dispatch(requestConversion(amount))

        const { currencyFrom, currencyTo } = getState().conversion

        let result = await fetch(`http://localhost:8000/api/convert.php`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: `amount=${amount}&from=${currencyFrom}&to=${currencyTo}`
        })
        
        let body = await result.json()
        console.log(body)

        let value = body.data.to.amount

        dispatch(receiveConversion(amount, value, currencyFrom, currencyTo))
    }
} 

export const history = () => {
    return async (dispatch) => {
        let result = await fetch(`http://localhost:8000/api/history.php`)
        let body = await result.json()

        console.log(body)

        dispatch(receiveHistory(body))
    }
} 




