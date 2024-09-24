import { ImageCardProps } from "../../App.types";
import css from "./ImageCard.module.css";

const ImageCard: React.FC<ImageCardProps> = ({
  urls,
  alt_description,
  openModal,
}) => {
  return (
    <div className={css.box}>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => openModal(urls.regular, alt_description)}
      />
    </div>
  );
};
export default ImageCard;
