import { createI18n } from 'vue-i18n'

const numberFormats = {
    'en-US': {
        currency: {
            style: 'currency',
            currency: 'USD'
        }
    },
    'id-ID': {
        currency: {
            style: 'currency',
            currency: 'IDR',
            currencyDisplay: 'symbol'
        }
    }
}

export default new createI18n({
    numberFormats,
})
