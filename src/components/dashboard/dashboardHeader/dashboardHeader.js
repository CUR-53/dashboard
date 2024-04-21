import styles from './dashboardHeader.module.css';
import NavLinks from './navLinks/navLinks';

export default function DashboardHeader({ title }) {
  const navLinks = [
    { navlink: '/dashboard', navname: 'Dashboard' },
    { navlink: '/dashboard', navname: 'Settings' },
    { navlink: '/dashboard', navname: 'Delete' },
    { navlink: '/dashboard', navname: 'Add' },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>{title}</h1>
      </div>
      <nav className={styles.nav}>
        {navLinks.map((link, index) => (
          <NavLinks NavLink={link.navlink} NavName={link.navname} key={index} />
        ))}
      </nav>
    </div>
  );
}
