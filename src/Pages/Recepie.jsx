import { useParams } from "react-router-dom";
import { useGetRecepieQuery } from "./recepie.js";
import { useSelector } from "react-redux";

export default function Recepie() {
  const { posts } = useSelector((state) => state.postSlice);
  console.log(posts);


  return (
    <div>
    </div>
  );
}
