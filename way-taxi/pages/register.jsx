import React from "react";
import {useState} from 'react'
import { useDispatch } from "react-redux";
import Image from 'next/image'
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
    <div className={styles.login_block}>
      <div className={styles.title}>
        <h1>Регистрация</h1>
      </div>
      <form className={styles.inputs}>
        <div className={styles.group}>
          <input required="" type="text" className={styles.input}/>
          <label>Name</label>
        </div>
        <div className={styles.group}>
          <input required="" type="text" className={styles.input}/>
          <label>Surname</label>
        </div>
        <div className={styles.group}>
          <input required="" type="text" className={styles.input}/>
          <label>Email</label>
        </div>
        <div className={styles.group}>
          <input required="" type="text" className={styles.input}/>
          <label>Password</label>
        </div>
        <div className={styles.group}>
          <input required="" type="text" className={styles.input}/>
          <label>Phone Number</label>
        </div>
      </form>
      <div className={styles.btn}>
        <button>Log in</button>
      </div>
    </div>
  </div>
  );
};

export default register;
