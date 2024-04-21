import styles from './navLinks.module.css';
import Link from 'next/link';

export default function NavLinks({ NavLink, NavName }) {
  return <Link href={NavLink}>{NavName}</Link>;
}
