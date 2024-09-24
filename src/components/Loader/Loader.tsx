import { DNA } from "react-loader-spinner";
import { LoaderProps } from "../../App.types";

const Loader: React.FC<LoaderProps> = () => {
  return (
    <>
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </>
  );
};
export default Loader;
