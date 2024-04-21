import styles from './dashboardSidebar.module.css';
import PortfolioLinks from './portfolioLinks/portfolioLinks';

export default function DashboardSidebar({ title }) {
  const portfolio = [
    { portfoliolink: '/dashboard', portfolioname: 'Portfolio 1' },
    { portfoliolink: '/dashboard', portfolioname: 'Portfolio 2' },
    { portfoliolink: '/dashboard', portfolioname: 'Portfolio 3' },
    { portfoliolink: '/dashboard', portfolioname: 'Portfolio 4' },
    { portfoliolink: '/dashboard', portfolioname: 'Portfolio 5' },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.content}>
        {portfolio.map((link, index) => (
          <PortfolioLinks portfoliolinks={link.portfoliolink} portfolioname={link.portfolioname} key={index} />
        ))}
      </div>
    </div>
  );
}
