import styles from './portfolioLinks.module.css';
import Link from 'next/link';

export default function PortfolioLinks({ portfoliolinks, portfolioname }) {
  return <Link href={portfoliolinks}>{portfolioname}</Link>;
}
