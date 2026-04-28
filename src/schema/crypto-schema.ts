import { z } from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

// Schema singular, se refiere a la forma de un objeto
export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo : z.object({
        FullName: z.string(),
        Name: z.string()
    })
})

// Schema plural, ya que es un array que contendra muchos objetos
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)