import css from "./orders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchOrders } from "../features/ordersSlice";

const orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(FetchOrders());
  }, [dispatch]);

  console.log(orders);

  return (
    <div className={css.orderTest}>
      <div className={css.ordersMain}>
        {orders.map((item, id) => {
          return (
            <div className={css.ordersList} key={id}>
              <div className={css.orderTitle}>Поездка в {item.wherever}</div>
              <div className={css.orderWere}>{item.where}</div>
              <div className={css.orderWerever}>{item.wherever}</div>
              <div className={css.orderPrice}>{item.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default orders;
