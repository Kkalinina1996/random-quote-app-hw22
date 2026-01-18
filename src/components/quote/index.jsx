import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { fetchRandomQuote } from '../../redux/slices/quoteSlice'
import styles from "./quote.module.css";

const Quote = () => {
  const dispatch = useDispatch();
  const { text, author, status, error } = useSelector(
    (state) => state.quote
  );

  // Загрузка цитаты при первом рендере
  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);

  return (
    <div className={styles.quote}>
      {status === "loading" && <p>Загрузка...</p>}
      {status === "failed" && <p>{error}</p>}

      {status === "succeeded" && (
        <>
          <p className={styles.text}>"{text}"</p>
          <p className={styles.author}>— {author}</p>
        </>
      )}

      <button
        className={styles.button}
        onClick={() => dispatch(fetchRandomQuote())}
      >
        Новая цитата
      </button>
    </div>
  );
};

export default Quote;
