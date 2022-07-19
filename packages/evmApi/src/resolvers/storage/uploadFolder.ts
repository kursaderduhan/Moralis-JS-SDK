import { ApiResolver, BodyType } from '@moralisweb3/api';
import { BASE_URL } from '../../EvmApi';
import { operations } from '../../generated/types';

type operation = 'uploadFolder';
const method = 'post';
const bodyParams = ['abi'] as const;

export interface Params {
  // TODO: needs refinement, the key should not be abi
  abi: {
    path: string;
    content: string;
  }[];
}
type ApiResult = operations[operation]['responses']['200']['content']['application/json'];

export const uploadFolderResolver = new ApiResolver({
  name: 'uploadFolder',
  getUrl: () => `${BASE_URL}/ipfs/uploadFolder`,
  apiToResult: (data: ApiResult) => {
    return data;
  },
  resultToJson: (data) => data,
  parseParams: (params: Params) => ({
    ...params,
  }),
  method,
  bodyParams,
  bodyType: BodyType.BODY,
});
