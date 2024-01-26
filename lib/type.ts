export type DetailJson = {
  description: string
  content: string
  external_link: string
  image: string
  name: string,
  attributes: []
}


export type CollectionInfo = {
  id: string
  collectionOwner: string
  derivedCollectionAddr: string
  derivedRuleModule: string
  collectionId: string
  baseRoyalty: number
  mintLimit: number
  mintExpired: number
  mintPrice: number
  whiteListRootHash: string
  collInfoURI: string
  blockNumber: number | string
  blockTimestamp: number | string
  transactionHash: string
  items: number
  detailJson: DetailJson
}

export type StakeEthAmountForInitialCollection = {
  id: string
  timestamp: number
  prevMaxBaseRoyalty: number
  blockNumber: number
  blockTimestamp: number
  newMaxBaseRoyalty: bigint
}

export type NewNFTCreateds = {
  id: string
  tokenId: string
  collectionId: string
  derivedFrom: string
  creator: string
  nftInfoURI: string
  blockNumber: number | string
  blockTimestamp: number | string
  transactionHash: string
  detailJson: DetailJson
}

export type CollectionIdQueryRequest = {
  /** The collection id */
  collectionId: string
}

export type CollectionInfoProps = {
  collectionName: string,
  collectionDesc: string,
  creator: string,
  collectionId: number,
  category: number,
  logoImage: string,
  website: string,
  twitter: string,
  telegram: string,
  medium: string,
  discord: string,
  mintLimit: number,
  royalty: number,
  endTime: Date,
  bCharge: boolean,
  mintPrice: number,
  currency: string,
  receiptAddress: string,
  bWhitelist: boolean,
  whitelistRootHash: string,
}

export type NFTInfoProps = {
  nftName: string,
  belongToCollectionId: number,
  nftCreator: string,
  nftOwner: string,
  forkFrom: number,
  prompt: string,
  nagativePrompt: string,
  imageUrl: string,
  tokenId: number
}
declare global {
  interface Window {
   	timer: number;
  }
}