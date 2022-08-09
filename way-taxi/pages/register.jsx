import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import styles from "../styles/Register.module.css";
import { registration } from "../features/userSlice";

const register = () => {
  // const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState('');
  const [active, setActive] = useState(false);
  const [driversLicense, setDriversLicense] = useState(null)

  const dispatch = useDispatch();

  const handleRegister = () => {
    console.log(name, surname, email, phone, password)
    dispatch(registration({ email, password, role, phone, name, surname, driversLicense }));
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setPhone("");
    setRole('');
    setDriversLicense(null)
  };

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

  const changeDriversLicense = (e) => {
    setDriversLicense(e.target.value)
  };

  const changeRole = (e) => {
    setActive(!active)
    if (active === true) {
      setRole('client')
    }else {
      setRole('driver')
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login_block}>
        <div className={styles.title}>
          <h1>Регистрация</h1>
        </div>
        <form className={styles.inputs}>
          <div className={styles.group}>
            <input
              required=""
              type="text"
              className={styles.input}
              value={name}
              onChange={(e) => changeName(e)}
            />
            <label>Name</label>
          </div>
          <div className={styles.group}>
            <input
              required=""
              type="text"
              className={styles.input}
              value={surname}
              onChange={(e) => changeSurname(e)}
            />
            <label>Surname</label>
          </div>
          <div className={styles.group}>
            <input
              required=""
              type="text"
              className={styles.input}
              value={email}
              onChange={(e) => changeEmail(e)}
            />
            <label>Email</label>
          </div>
          <div className={styles.group}>
            <input
              required=""
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => changePassword(e)}
            />
            <label>Password</label>
          </div>
          <div className={styles.group}>
            <input
              required=""
              type="text"
              className={styles.input}
              value={phone}
              onChange={(e) => changePhone(e)}
            />
            <label>Phone Number</label>
          </div>
          <div className={styles.group}>
            <input 
            type="checkbox" 
            className={styles.input} 
            onChange={() => changeRole()}
            />
            <label>Я водитель</label>
          </div>
          {
          active ? 
          <div>
            <input 
            type="text" 
            className={styles.input} 
            value={driversLicense} 
            onChange={(e) => changeDriversLicense(e)} 
            />
          </div> 
          :
          null}
        </form>
        <div className={styles.btn}>
          <button onClick={handleRegister} >Login</button>
        </div>
      </div>
    </div>
  );
};

export default register;
