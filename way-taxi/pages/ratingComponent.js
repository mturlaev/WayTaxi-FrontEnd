import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import css from "../styles/RatingComponent.module.css";
import { ratingPost } from "../features/ratingAndComment";
import { FetchOrders } from "../features/ordersSlice";

const ratingComponent = () => {
  const [star, setStar] = useState(1);
  const [comment, setComment] = useState("")
  const dispatch = useDispatch()

  const orders = useSelector(state => state.orders.orders);
  const rating = useSelector(state => state.raitAndCom.rating);


    const handleAddRating = () => {
        const taxi = orders[orders.length - 1]
        dispatch(ratingPost({taxi, star}))
        
    }


    useEffect(() => {
        dispatch(FetchOrders())
    }, [dispatch])

    console.log(rating)



    const handleComments = (e) => {
      setComment(e.target.value)
    }

  const starsConfig = {
    size: 40,
    count: 5,
    isHalf: false,
    color: "lightGray",
    value: star,
    activeColor: "orange",
    onChange: (newValue) => {
      setStar(newValue);
    },
  };
  return (
    <div className={css.ratingMain}>
      {star}
      <h4>Full stars rating only, a11y and other colors</h4>
      <ReactStars {...starsConfig} />
      <button className={css.btnRating} onClick={handleAddRating}>
        отправить
      </button>
      <div className={css.reviewsMain}>
        <form>
          <input className={css.inputComment} onChange={(e) => handleComments} value={comment}/>
        </form>
      </div>
    </div>
  );
};
export default ratingComponent;
