export type BlockchainResult = {
  totalItems: number;
  totalPages: number;
  page: Array<{
    _id: string;
    contractAddress: string;
    tokenId: string;
    metadataUri: string;
    updatedAt: string;
  }>;
};

export type NftMetadata = {
  image: string;
  name: string;
};

export type NftXMetadata = {
  owner: string;
  level: string;
  isOnUpgrade: boolean;
  isOnAuction: boolean;
  lastTransferTime: number;
  createdAt: number;
  updatedAt: number;
};
