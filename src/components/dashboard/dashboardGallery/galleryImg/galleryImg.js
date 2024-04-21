import styles from './galleryImg.module.css';

export default function GalleryImg({ img_url, img_alt }) {
  return (
    <div className={styles.container}>
      <img src={img_url} alt={img_alt} />
    </div>
  );
}
