import { SectionProps } from "../../App.types";
import css from "./Section.module.css";

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
      </div>
    </section>
  );
};
export default Section;
