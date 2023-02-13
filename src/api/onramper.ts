import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://onramper.tech/gateways/',
  headers: {
    Authorization: 'Basic pk_test_lDuGL6X15hAN7Bqi04rxTj9gNdnJ9TY0vOD0uMG_Kzg0',
  },
})

export const getGateways = async () => {
  return instance.get<GateWays>('/?includeIcons=true').then((res) => res.data)
}

export type Currencies = {
  code: string
  precision: number
}[]

export type GateWays = {
  gateways: {
    identifier: string
    paymentMethods: string[]
    fiatCurrencies: {
      code: string
      precision: number
    }[]
    cryptoCurrencies: {
      code: string
      precision: number
    }[]
  }[]
  localization: {
    country: string
    state: null
    currency: string
  }
  icons: Record<string, FiatIcon>
}

export interface FiatIcon {
  name: string
  icon: string
  symbol?: string
}
