import Landing from "../../assets/Landing.png";
import "tw-elements";

export const Header = ({ data }: any) => {
  console.log(data);
  // <div className={"h-3/5 relative"}>
  //   <img className={"h-full w-full"} src={Landing} />
  return (
    <div className={"flex justify-center items-center h-full"}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide relative  w-4/5 "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators  absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner  relative w-full overflow-hidden">
          <div className=" carousel-item  active float-left w-full">
            <img
              src={data.img[0]}
              className="h-220  block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src={data.img[1]}
              className="h-220 block w-full"
              alt="Camera"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src={data.img[2]}
              className="block h-220 w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-2/4 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="w-24 h-24 carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-2/4 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className=" w-24 h-24 carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    // <div
    //   className={
    //     "flex flex-col  sm:flex-row md:flex-row lg:flex-row justify-center items-center space-x-2"
    //   }
    // >
    //   <div
    //     className={"bg-green-200 w-3/4 sm:w-10/12  md:w-2/5 lg:w-1/4  h-150"}
    //   >
    //     <img className={"h-full w-full "} src={data.img} />
    //   </div>
    //   <div
    //     className={
    //       "bg-gray-600  w-3/4 sm:w-10/12  md:w-2/5 lg:w-1/4  h-150"
    //     }
    //   >
    //     <div className={"text-center text-white text-4xl mt-5"}>Tools Used</div>
    //
    //     <div className={"flex flex-col space-y-4 justify-center items-center "}>
    //       {data.tools.map((e: string) => (
    //         <span
    //           className={" text-3xl text-white py-2 px-4 bg-gray-800"}
    //         >
    //           {e}
    //         </span>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};
