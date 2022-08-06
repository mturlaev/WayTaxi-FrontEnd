import React from "react";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import styles from '../styles/Register.module.css'


const register = () => {
  // const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")




    const [btnRef, setBtnRef] = useState(false)
    const handleReg = () => {
        setBtnRef(true)
    }

    const changeName = (e) => {
      setName(e.target.value)
    }

    const changeSurname = (e) => {
      setSurname(e.target.value)
    }

    const changeEmail = (e) => {
      setEmail(e.target.value)
    }

    const changePassword = (e) => {
      setPassword(e.target.value)
    }

    const changePhone = (e) => {
      setPhone(e.target.value)
    }


  return (
    <div className={styles.login}>
      <div className={styles.sign_in}>
        <h1>Регистрация</h1>
      </div>
      <form className={styles.register_info}>
        <h4>First Name:</h4>
        <input type="text" value={name} onChange={changeName}/>


        <h4>Last Name:</h4>
        <input type="text" value={surname} onChange={changeSurname}/>


        <h4>Phone Number:</h4>
        <input type="text" value={phone} onChange={changePhone} placeholder="+ 7 (..." />


        <h4>Your Email:</h4>
        <input type="email" value={email} onChange={changeEmail} placeholder="example@email" />


        <h4>Your Password:</h4>
        <input type="password" value={password} onChange={changePassword} placeholder="Вы видели этот бой?" />


        <button onClick={handleReg} className={styles.btn}>Зарегистрироваться</button>
      </form>
      {(btnRef) && <div>123</div>}
    </div>
  );
};

export default register;
