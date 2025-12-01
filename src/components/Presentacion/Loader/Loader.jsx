import { PuffLoader } from "react-spinners";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <PuffLoader className="loader" />
    </div>
  );
};

export default Loader;
