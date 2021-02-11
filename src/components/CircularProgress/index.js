import React from "react";
import loader from "../../assets/images/caricon.png"

const CircularProgress = ({ className }) => <div className={`loader ${className}`} style={{ textAlign: "center" }}>
  <img src={loader} alt="loader" />
</div>;
export default CircularProgress;
