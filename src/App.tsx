import { useAccount } from 'wagmi';
import { Account, Connect, NetworkSwitcher, PassNFTs } from './components';

export function App() {
  const { isConnected, address } = useAccount();
  const dualityPassAddress =
    '0xb81F8DdD169a429E8Bd8750752Ea7aD3cfD4eF8B' as const;

  return (
    <>
      <h1>Duality</h1>

      <p>Connect to find your pass NFT</p>
      <Connect />

      {isConnected && (
        <>
          <br />
          <Account />
          <NetworkSwitcher />
          <br />
          {address && <PassNFTs nftHolder={address} />}
        </>
      )}
    </>
  );
}
