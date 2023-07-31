import { optimism } from '@wagmi/chains';
import {
  tokenboundAccountAddress,
  useTokenboundRegistryAccount,
} from '../generated';

export function WalletInfo({
  accountImplementation = tokenboundAccountAddress[optimism.id],
  tokenAddress,
  tokenId,
  salt = 0n,
}: {
  accountImplementation?: `0x${string}`;
  tokenAddress: `0x${string}`;
  tokenId: bigint;
  salt?: bigint;
}) {
  const { data: accountAddress } = useTokenboundRegistryAccount({
    chainId: optimism.id,
    args: [
      accountImplementation, // implementation
      BigInt(optimism.id), // chainid
      tokenAddress, // tokenContract
      tokenId, // tokenId
      salt, // salt
    ],
  });

  return (
    <p>
      TokenId {tokenId.toString()} has account: {accountAddress}
      <br />
      <a
        href={
          optimism.blockExplorers.default.url + `/address/${accountAddress}`
        }
      >
        View on Etherscan
      </a>
    </p>
  );
}
