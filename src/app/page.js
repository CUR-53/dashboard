import styles from './page.module.css';
import Dashboard from '@/components/dashboard/dashboard';

export default async function Page() {
  // Henter gallerier fra vores serverside data.
  return (
    <main className={styles.page}>
      <Dashboard />
    </main>
  );
}
