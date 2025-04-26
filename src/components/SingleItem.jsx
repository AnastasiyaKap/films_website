import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles/SingleSeries.module.css";

const SingleItem = ({ items }) => {
  const params = useParams();
  const navigate = useNavigate();

  const result = items.find((item) => item.slug === params.slug);

  console.log(result);
};

export default SingleItem;
