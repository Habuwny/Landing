import { randomId } from "../../tools";

interface ButtonProps {
  name: string;
  type: string;
}

export const RoundedButton = ({ name, type }: ButtonProps) => {
  return (
    <button
      id={`${randomId()}`}
      className={`roundedButton roundedButton__${type}`}
    >
      {name}
    </button>
  );
};
