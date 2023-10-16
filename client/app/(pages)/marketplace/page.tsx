import './Marketplace.scss';
import { MarketplaceList } from './MarketplaceList';

export default function Marketplace() {
  return(
    <main className='marketplace'>
      <section className="container marketplace__header">
        <h1 className="marketplace__header-title">Browse Marketplace</h1>
        <p className="marketplace__header-sub-title">
        Browse through more than 50k NFTs on the NFT Marketplace.
        </p>
      </section>
      <section className='marketplace__nft-list'>
        <div className='container'>
          <MarketplaceList/>
        </div>
        </section>
    </main>
  );
};