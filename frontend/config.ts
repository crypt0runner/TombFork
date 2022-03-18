// import { ChainId } from '@pancakeswap-libs/sdk';
import { ChainId } from '@traderjoe-xyz/sdk';
import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: ChainId.FUJI,
    networkName: 'Avalanche Fuji Testnet',
    ftmscanUrl: 'https://testnet.snowtrace.io',
    defaultProvider: 'https://api.avax-test.network/ext/bc/C/rpc',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WAVAX: ['0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18],
      USDC: ['0x028f4464B777CDa585A9a481CcE6b553786f16C6', 6], // This is actually usdc on testing not fusdt      
      WFTM: ['0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18],
      FUSDT: ['0x028f4464B777CDa585A9a481CcE6b553786f16C6', 6], // This is actually usdc on testing not fusdt
      BOO: ['0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18],
      ZOO: ['0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 0],
      SHIBA: ['0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 9],
      'USDT-FTM-LP': ['0xB9a77126FF61489F437950f836BFA902C4d702e3', 18],
      'Glamour-AVAX-LP': ['0xc5c7e67BfEb1B2c337282a0Bd978D6674768794F', 18],
      'GShare-AVAX-LP': ['0x6A2f478483fa2b7602885Ce7B08bcAF6878A6fB4', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
    ShareLaunchDate: new Date(Sharestart*1000),
    GenesisLaunchesAt: new Date(Genstart*1000),
    GenesisEndsAt: new Date(Genend*1000)
  },
  production: {
    chainId: ChainId.FUJI,
    networkName: 'Avalanche Fuji Testnet',
    ftmscanUrl: 'https://testnet.snowtrace.io',
    defaultProvider: 'https://api.avax-test.network/ext/bc/C/rpc',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WAVAX: ['0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18],
      USDC: ['0x028f4464B777CDa585A9a481CcE6b553786f16C6', 6], // This is actually usdc on testing not fusdt
      WFTM: ['0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18],
      FUSDT: ['0x028f4464B777CDa585A9a481CcE6b553786f16C6', 6], // This is actually usdc on testing not fusdt
      BOO: ['0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 18],
      ZOO: ['0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 0],
      SHIBA: ['0xd00ae08403B9bbb9124bB305C09058E32C39A48c', 9],
      'USDT-FTM-LP': ['0xB9a77126FF61489F437950f836BFA902C4d702e3', 18],
      'Glamour-AVAX-LP': ['0xc5c7e67BfEb1B2c337282a0Bd978D6674768794F', 18],
      'GShare-AVAX-LP': ['0x6A2f478483fa2b7602885Ce7B08bcAF6878A6fB4', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,

    ShareLaunchDate: new Date(Sharestart*1000),
    GenesisLaunchesAt: new Date(Genstart*1000),
    GenesisEndsAt: new Date(Genend*1000)
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding TOMB
        - 2 = LP asset staking rewarding TSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  AVAXGenesisRewardPool: {
    name: 'Earn Glamour by WAVAX',
    poolId: 0,
    sectionInUI: 0,
    contract: 'AVAXGenesisRewardPool',
    depositTokenName: 'WAVAX',
    earnTokenName: 'Glamour',
    buyLink: 'https://app.pangolin.exchange/#/swap?outputCurrency=0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    finished: false,
    sort: 8,
    closedForStaking: false,
  },
  USDCGenesisRewardPool: {
    name: 'Earn Glamour by USDC',
    poolId: 1,
    sectionInUI: 0,
    contract: 'USDCGenesisRewardPool',
    depositTokenName: 'USDC',
    earnTokenName: 'Glamour',
    buyLink: 'https://app.pangolin.exchange/#/swap?outputCurrency=0x028f4464B777CDa585A9a481CcE6b553786f16C6',
    finished: false,
    sort: 9,
    closedForStaking: false,
  },
  GlamourAvaxLPGShareRewardPool: {
    name: 'Earn GShare by Glamour-AVAX LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'GlamourAvaxLPGShareRewardPool',
    depositTokenName: 'Glamour-AVAX-LP',
    earnTokenName: 'GShare',
    buyLink: 'https://app.pangolin.exchange/#/add/AVAX/0x16ee2Cc3426069DC15D3dfC2Ac874C14AFd84058',
    finished: false,
    sort: 6,
    closedForStaking: false,
  },
  GShareAvaxLPGShareRewardPool: {
    name: 'Earn GShare by GShare-AVAX LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'GShareAvaxLPGShareRewardPool',
    depositTokenName: 'GShare-AVAX-LP',
    earnTokenName: 'GShare',
    buyLink: 'https://app.pangolin.exchange/#/add/AVAX/0xEa24d9E7b10fCb66e798657A6525C042f2731865',
    finished: false,
    sort: 7,
    closedForStaking: false,
  },
};

export default configurations[process.env.NODE_ENV || 'development'];
