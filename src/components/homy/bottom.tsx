import { Button } from "../common/btn";
import "./btn-style.css";
export const Bottom = () => {
  return (
    <div className={"home__landing__bottom  flex justify-center items-center"}>
      <button
        className={
          "text-4xl w-96 px-4 rounded-3xl font-bold w-fit ring-4 ring-green-900 bg-byzantine-500 hover:bg-byzantine-900 duration-200"
        }
        // style={{ backgroundColor: "#b219ab" }}
      >
        Automatically Check
      </button>
    </div>
  );
};
// bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
