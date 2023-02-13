import { addContractWithAddress } from './gotbit-tools/vue/utils/contracts/add'
import { addContract, defineConfig } from '@/gotbit-tools/vue/config'
import { universalRpc } from '@/gotbit-tools/vue/rpc'

export const IS_DEBUG = import.meta.env.VITE_DEBUG === 'true'

const CHAIN_ID = IS_DEBUG ? '56' : '56'
export const DEFAULT_CHAINID = '56'

export const config = defineConfig({
  DEBUG: import.meta.env.VITE_DEBUG === 'true',
  chainIds: ['56'],
  DEFAULT_CHAINID: CHAIN_ID,
  rpc: universalRpc(),
})

import { defineContracts } from '@/gotbit-tools/vue/config'
import type { Token, Presale } from '@/contracts/typechain'
export const contracts = defineContracts({
  anyToken: addContractWithAddress<Token>('BUSD'),
  token: addContract<Token>('BUSD'),
  presale: addContract<Presale>('Presale'),
  '56': {},
})

import { defineStoreSettings } from '@/gotbit-tools/vue/config'
export const storeSettings = defineStoreSettings(
  [
    import('@/store/contracts/token').then((_) => _.useToken),
    import('@/store/contracts/presale').then((_) => _.usePresale),
  ],
  {
    preserveConnection: true,
    updateOnChainChange: true,
    updateOnWalletChange: true,
    globalLoading: true,
  }
)
