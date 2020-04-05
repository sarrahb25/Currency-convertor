import { 
    CHANGE_CURRENCY_FROM,
    CHANGE_CURRENCY_TO, REQUEST_CONVERSION, RECEIVE_CONVERSION, RECEIVE_HISTORY } from "./actions"



const initialState = {
    amount: 0,
    convertedCurrency: 0,
    isRequested: false,
    currencyFrom: 'USD',
    currencyTo: 'EUR'
}

export const conversion = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENCY_FROM: 
            return Object.assign({}, state, {
                currencyFrom: action.currency
            })

        case CHANGE_CURRENCY_TO:
            return Object.assign({}, state, {
                currencyTo: action.currency
            })
        
        case REQUEST_CONVERSION:
            return Object.assign({}, state, {
                amount: action.amount,
                isRequested: true,
            })

        case RECEIVE_CONVERSION:
            return Object.assign({}, state, {
                convertedCurrency: action.value,
                isRequested: false,
                lastUpdatedAt: action.convertedAt
            })

        default:
            return state
    }

}

const initialStateDisplay = {
    isDisplayed: false
}

export const display = (state = initialStateDisplay, action) => {
    switch (action.type) {
        case RECEIVE_CONVERSION:
            return Object.assign({}, state, {
                isDisplayed: true,
                amount: action.amount,
                value: action.value,
                from: action.from,
                to: action.to,
                lastUpdatedAt: action.convertedAt,
            })
            
        default:
            return state
    }
}

const initialStateHistory = {
    items: []
}

export const history = (state = initialStateHistory, action) => {
    switch (action.type) {
        case RECEIVE_HISTORY:
            return Object.assign({}, state, {
               items: action.items
            })
        default:
            return state
    }
}