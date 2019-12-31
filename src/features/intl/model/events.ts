import { createEvent } from 'effector'
import { AvailableLocales } from 'types'

export const changeLanguage = createEvent<AvailableLocales>()

export const getLocaleAndChangeLanguage = createEvent()
