import { defineConfig } from '@wagmi/cli';
import { react, etherscan } from '@wagmi/cli/plugins';
import { erc721ABI } from 'wagmi';
import { optimism } from '@wagmi/chains';
import ERC6551Registry from './abis/ERC6551Registry';
import AccountProxy from './abis/AccountProxy';
import SoundEditionV1_2 from './abis/SoundEditionV1_2';

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'erc721',
      abi: erc721ABI,
    },
    {
      name: 'SoundEditionV1_2',
      abi: SoundEditionV1_2,
    },
    {
      name: 'TokenboundRegistry',
      address: {
        [optimism.id]: '0x02101dfB77FDE026414827Fdc604ddAF224F0921',
      },
      abi: ERC6551Registry,
    },
    {
      name: 'TokenboundAccount',
      address: {
        [optimism.id]: '0x2d25602551487c3f3354dd80d76d54383a243358',
      },
      abi: AccountProxy,
    },
  ],
  plugins: [react()],
});
