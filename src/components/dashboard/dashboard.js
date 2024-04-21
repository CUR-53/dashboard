import styles from './dashboard.module.css';
import DashboardHeader from './dashboardHeader/dashboardHeader';
import DashboardSidebar from './dashboardSidebar/dashboardSidebar';
import DashboardGallery from './dashboardGallery/dashboardGallery';

export default function Dashboard() {
  const header_title = 'Portfolio Dashboard';
  const sidebar_title = 'Portfolio Names';
  return (
    <div className={styles.container}>
      <DashboardHeader title={header_title} />
      <div className={styles.content}>
        <DashboardSidebar title={sidebar_title} />
        <DashboardGallery />
      </div>
    </div>
  );
}
