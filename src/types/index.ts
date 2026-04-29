import { z } from 'zod'
import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from '../schema/crypto-schema'

// Type de moneda normal (EUR, USD, MXN)
export type Currency = z.infer<typeof CurrencySchema>
// Type de criptomonedas
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>
// Type que define el state de moneda normal y criptomoneda
export type Pair = z.infer<typeof PairSchema>

export type CryptoPrice = z.infer<typeof CryptoPriceSchema>