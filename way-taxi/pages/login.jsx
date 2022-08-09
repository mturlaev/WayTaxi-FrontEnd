import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logining } from "../features/userSlice";
import styles from "../styles/Login.module.css";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  const handleSigning = () => {
    dispatch(logining({ email, password })),
    setEmail(""),
    setPassword("")
  }

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeSurname = (e) => {
    setSurname(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  

  const changePhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_block}>
        <div className={styles.title}>
          <h1>Log in</h1>
        </div>
        <form className={styles.inputs}>
          <div className={styles.group}>
            <input required="" type="text" className={styles.input} value={email}/>
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label>Email</label>
          </div>
          <div className={styles.group}>
            <input required="" type="password" className={styles.input} value={password} />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label>Password</label>
          </div>
        </form>
        <div className={styles.btn}>
          <button onClick={handleSigning}>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default login;
