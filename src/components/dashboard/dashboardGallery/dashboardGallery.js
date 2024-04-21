import styles from './dashboardGallery.module.css';
import GalleryImg from './galleryImg/galleryImg';

export default async function DashboardGallery() {
  const imginfo = [
    {
      img_url: 'https://via.placeholder.com/200',
      img_alt: 'placeholder',
    },
    {
      img_url: 'https://via.placeholder.com/200',
      img_alt: 'placeholder',
    },
    {
      img_url: 'https://via.placeholder.com/200',
      img_alt: 'placeholder',
    },
    {
      img_url: 'https://via.placeholder.com/200',
      img_alt: 'placeholder',
    },
    {
      img_url: 'https://via.placeholder.com/200',
      img_alt: 'placeholder',
    },
    {
      img_url: 'https://via.placeholder.com/200',
      img_alt: 'placeholder',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {imginfo.map((img, index) => (
          <GalleryImg img_url={img.img_url} img_alt={img.img_alt} key={index} />
        ))}
      </div>
    </div>
  );
}
