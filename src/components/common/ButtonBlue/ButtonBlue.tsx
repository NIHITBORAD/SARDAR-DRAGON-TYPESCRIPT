import { MouseEvent } from "react";
import styles from "./ButtonBlue.module.css";
// import { Link } from "react-router-dom";

interface Props {
  className?: string;
  text?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ButtonBlue = ({ className = null, text = "Payment Now", onClick }: Props) => {
  return (
    <>
   
    <button className={`${styles.buttonBlue} ${className}`} onClick={onClick}>
      {text}
    </button>
    </>
    
  );
};

export default ButtonBlue;
