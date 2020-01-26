import { createStore, forward } from 'effector'
import getLocale from 'browser-locale'
import { ValidationError } from 'typed-contracts'
import { createLoadDataStore } from 'utils/factory/load-data'
import { IntlModel } from 'models/intl'
import { changeLanguage, getLocaleAndChangeLanguage } from './events'
import { availableLocalesContract } from './contracts'
import { AvailableLocales } from 'types'

/** Stores */

const {
  $data: $intlData,
  $dataStore: $intl,
  loadData: loadDictionary
} = createLoadDataStore({
  loadDataHandler: IntlModel.getDictionary,
  initialData: {}
})

const $language = createStore<AvailableLocales | null>(null)

$language
  .on(changeLanguage, (_, payload) => payload)

/** End of stores */

/** Side-effects */

forward({
  from: changeLanguage,
  to: loadDictionary
})

forward({
  from: getLocaleAndChangeLanguage,
  to: changeLanguage.prepend(() => {
    const browserLng = getLocale()
    const value = availableLocalesContract('browser language', browserLng)

    if (value instanceof ValidationError) {
      return AvailableLocales.en_US
    }

    return value
  })
})

/** End of side-effects */

export {
  $intl,
  $intlData,
  $language,
  loadDictionary,
  changeLanguage,
  getLocaleAndChangeLanguage
}
