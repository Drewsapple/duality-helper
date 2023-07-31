import { optimism } from '@wagmi/chains';
import { useSoundEditionV1_2TokensOfOwner } from '../generated';
import { WalletInfo } from './6551Wallet';

export function PassNFTs({ nftHolder }: { nftHolder: `0x${string}` }) {
  const dualityPassAddress =
    '0xb81F8DdD169a429E8Bd8750752Ea7aD3cfD4eF8B' as const;

  const { data: tokenIds } = useSoundEditionV1_2TokensOfOwner({
    chainId: optimism.id,
    address: dualityPassAddress,
    args: [nftHolder],
  });

  return (
    <ul>
      {tokenIds && tokenIds.length > 0
        ? tokenIds.map((tokenId: bigint) => (
            <li key={tokenId.toString()}>
              <WalletInfo tokenAddress={dualityPassAddress} tokenId={tokenId} />
            </li>
          ))
        : 'No passes found in this wallet'}
    </ul>
  );
}
