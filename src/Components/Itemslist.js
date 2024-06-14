import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetItems } from "../redux/action";
import ItemCard from "./Itemscard";

const ItemList = () => {
  const { items } = useSelector((state) => state);
  // console.log(items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetItems());
  }, []);

  return (
    <div className="list">
      {React.Children.toArray(items.map((el) => <ItemCard item={el} />))}
    </div>
  );
};

export default ItemList;