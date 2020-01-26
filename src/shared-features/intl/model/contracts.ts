import { union, Contract } from 'typed-contracts'
import { AvailableLocales } from 'types'

export const availableLocalesContract: Contract<AvailableLocales> = union(...Object.values(AvailableLocales))
