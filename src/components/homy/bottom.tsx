import { Button } from "../common/btn";
import "./btn-style.css";
export const Bottom = () => {
  return (
    <div className={"home__landing__bottom"}>
      {/*<Button*/}
      {/*  classes={"home__landing__bottom-btn"}*/}
      {/*  border={"none"}*/}
      {/*  color={"blue"}*/}
      {/*  radius={"1.6rem"}*/}
      {/*  children={"Check Automatically"}*/}
      {/*/>*/}
      <button>
        <svg
          width="232"
          height="64"
          viewBox="0 0 232 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="btn-path"
            d="M32 1.5H200C216.845 1.5 230.5 15.1553 230.5 32C230.5 48.8447 216.845 62.5 200 62.5H32C15.1553 62.5 1.5 48.8447 1.5 32C1.5 15.1553 15.1553 1.5 32 1.5Z"
            fill="#7257FA"
            stroke="#352970"
            stroke-width="3"
          />
        </svg>
        Hover me! 💛
      </button>
    </div>
  );
};
