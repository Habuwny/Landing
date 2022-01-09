import { Button } from "../common/btn";
import "./btn-style.css";
export const Bottom = () => {
  return (
    <div className={"home__landing__bottom  flex justify-center items-center"}>
      <button className={'text-4xl w-96 bg-purple-900 hover:bg-purple-800 px-4 rounded-3xl font-bold w-fit'}>
        Automatically Check
      </button>
    </div>
  );
};
