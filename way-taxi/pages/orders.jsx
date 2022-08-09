
import css from "../styles/Orders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchOrders } from "../features/ordersSlice";

const orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(FetchOrders());
  }, [dispatch]);


  return (
    <div className={styles.orderTest}>
      <div className={styles.ordersMain}>
        {orders.map((item, id) => {
          return (
            <div className={styles.ordersList} key={id}>
              <div className={styles.orderTitle}>Поездка в {item.wherever}</div>
              <div className={styles.orderWere}>{item.where}</div>
              <div className={styles.orderWerever}>{item.wherever}</div>
              <div className={styles.orderPrice}>{item.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default orders;