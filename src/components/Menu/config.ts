import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://benswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'PCS DEX',
        href: 'https://exchange.benswap.finance/'
      },
      {
        label: 'BenSwap DEX',
        href: '/swap'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://benswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://benswap.finance/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://benswap.finance/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://benswap.finance/nft',
  },
  {
    label: 'Audits',
    icon: 'AuditIcon',
    items: [
      {
        label: "TechRate",
        href: "https://benswap.finance/files/TechrateAudit.pdf",
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'ListingIcon',
    items: [
      {
        label: "DappRadar",
        href: "https://dappradar.com/binance-smart-chain/exchanges/benswap",
      },
      {
        label: "LiveCoinWatch",
        href: "https://www.livecoinwatch.com/price/GoldenBen-GBEN",
      },
      {
        label: "vfat.tools",
        href: "https://vfat.tools/bsc/benswap/",
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/BenTokenFinance",
      },
      {
        label: "Docs",
        href: "https://docs.benswap.finance/",
      },
    ],
  },
  {
    label: 'Ben Token',
    icon: 'BenIcon',
    href: 'https://bentoken.finance/',
  },
  {
    label: 'Partnerships',
    icon: 'IfoIcon',
    href: 'https://forms.gle/3ACvNo7VrE54LesG6',
  },
]

export default config
