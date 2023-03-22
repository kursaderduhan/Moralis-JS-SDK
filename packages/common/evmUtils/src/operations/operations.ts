import { getNativeBalanceOperation, getNativeBalancesForAddressesOperation } from './balance';
import { getBlockOperation, getDateToBlockOperation } from './block';
import { getPairAddressOperation, getPairReservesOperation } from './defi';
import { getContractEventsOperation, getContractLogsOperation } from './events';
import { uploadFolderOperation } from './ipfs';
import {
  getContractNFTsOperation,
  getMultipleNFTsOperation,
  getNFTContractMetadataOperation,
  getNFTContractTransfersOperation,
  getNFTLowestPriceOperation,
  getNFTMetadataOperation,
  getNFTOwnersOperation,
  getNFTTokenIdOwnersOperation,
  getNFTTradesOperation,
  getNFTTransfersByBlockOperation,
  getNFTTransfersFromToBlockOperation,
  getNFTTransfersOperation,
  getWalletNFTCollectionsOperation,
  getWalletNFTsOperation,
  getWalletNFTTransfersOperation,
  reSyncMetadataOperation,
  searchNFTsOperation,
  syncNFTContractOperation,
} from './nft';
import { resolveAddressOperation, resolveDomainOperation } from './resolve';
import {
  getTokenAllowanceOperation,
  getTokenMetadataBySymbolOperation,
  getTokenMetadataOperation,
  getTokenPriceOperation,
  getTokenTransfersOperation,
  getWalletTokenBalancesOperation,
  getErc20TransfersOperation,
  getErc20MintsOperation,
  getErc20BurnsOperation,
} from './token';
import { getWalletTokenTransfersOperation } from './token/getWalletTokenTransfersOperation';
import {
  getTransactionOperation,
  getWalletTransactionsOperation,
  getWalletTransactionsVerboseOperation,
} from './transaction';
import { endpointWeightsOperation, web3ApiVersionOperation } from './utils';
import { runContractFunctionOperation } from './utils/runContractFunctionOperation';

export const operations = [
  endpointWeightsOperation,
  getBlockOperation,
  getContractEventsOperation,
  getContractLogsOperation,
  getContractNFTsOperation,
  getDateToBlockOperation,
  getErc20BurnsOperation,
  getErc20TransfersOperation,
  getErc20MintsOperation,
  getMultipleNFTsOperation,
  getNativeBalanceOperation,
  getNativeBalancesForAddressesOperation,
  getNFTContractMetadataOperation,
  getNFTContractTransfersOperation,
  getNFTLowestPriceOperation,
  getNFTMetadataOperation,
  getNFTOwnersOperation,
  getNFTTokenIdOwnersOperation,
  getNFTTradesOperation,
  getNFTTransfersByBlockOperation,
  getNFTTransfersFromToBlockOperation,
  getNFTTransfersOperation,
  getPairAddressOperation,
  getPairReservesOperation,
  getTokenAllowanceOperation,
  getTokenMetadataBySymbolOperation,
  getTokenMetadataOperation,
  getTokenPriceOperation,
  getTokenTransfersOperation,
  getTransactionOperation,
  getWalletNFTCollectionsOperation,
  getWalletNFTsOperation,
  getWalletNFTTransfersOperation,
  getWalletTokenBalancesOperation,
  getWalletTokenTransfersOperation,
  getWalletTransactionsOperation,
  getWalletTransactionsVerboseOperation,
  resolveAddressOperation,
  resolveDomainOperation,
  reSyncMetadataOperation,
  runContractFunctionOperation,
  searchNFTsOperation,
  syncNFTContractOperation,
  uploadFolderOperation,
  web3ApiVersionOperation,
];
