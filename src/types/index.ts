import { z } from 'zod'
import { CurrencySchema, CryptoCurrencyResponseSchema } from '../schema/crypto-schema'

// Type de moneda normal (EUR, USD, MXN)
export type Currency = z.infer<typeof CurrencySchema>

// Type de criptomonedas
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>