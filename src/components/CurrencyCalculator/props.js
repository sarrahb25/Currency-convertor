import { changeCurrencyFrom, changeCurrencyTo, convert, history } from "../../store/actions"


export const mapStateConversionToProps = state => ({
    currencyFrom: state.conversion.currencyFrom,
    currencyTo: state.conversion.currencyTo,
})

export const mapDispatchToProps = dispatch => ({
    onChangeFrom: value => {
        console.log(dispatch)
        dispatch(changeCurrencyFrom(value))
    },
    onChangeTo: value => {
        dispatch(changeCurrencyTo(value))
    },
    onConvert: value => {
        dispatch(convert(value))
        dispatch(history())
    }
})


export const mapStateDisplayToProps = state => ({
    amount : state.display.amount,
    value: state.display.value,
    from: state.display.from,
    to: state.display.to,
    lastUpdatedAt: state.display.lastUpdatedAt,
    isDisplayed: state.display.isDisplayed
})

export const mapStateHistoryToProps = state => ({
    items: state.history.items
})