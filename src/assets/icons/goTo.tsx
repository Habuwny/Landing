interface GoToProps {
  width: any;
  height: any;
}
export const GoTo = ({ width, height }: GoToProps) => {
  return (
    <svg
      fill="none"
      height={height}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={width}
      xlinkTitle={"GOTO"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={"#fff"}
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      />
      <polyline stroke={"#fff"} points="15 3 21 3 21 9" />
      <line stroke={"#fff"} x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
};
