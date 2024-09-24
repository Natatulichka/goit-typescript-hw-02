import { LoadMoreBtnProps } from "../../App.types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button className={css.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default LoadMoreBtn;
