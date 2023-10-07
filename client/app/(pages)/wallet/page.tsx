import Link from 'next/link';
import './Wallet.scss';

export default function Wallet() {
  return(
    <div className='wallet-page'>
      <h2 className='wallet-page__title'>Sorry, this feature is not available at the moment.</h2>
      <Link className='wallet-page__home-link' href="/">Return Home</Link>
    </div>
  );
};