import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {FiChevronDown} from 'react-icons/fi'
import {AiOutlineRight} from 'react-icons/ai'
import client from '../public/png/client.png'

const Header = () => {
    return (
        <nav className={styles.header}>
            <div className={styles.logo}>
                <h2>Way<span style={{color: "orange"}}>Taxi</span></h2>
            </div>
                <ul className={styles.links}>
                    <li>
                        <Link href="#">
                            <a>Пользователям</a>
                        </Link>
                        <FiChevronDown className={styles.icon}/>
                        <ul className={styles.sub_menu_links}>
                            <li>
                                <Link href="#">
                                     <a>История заказов</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Написать в поддержку</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Узнать о безопасности</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Полезные советы</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Вы видели этот бой?</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Водителям</a>
                        </Link>
                        <FiChevronDown className={styles.icon}/>
                        <ul className={styles.sub_menu_links}>
                            <li>
                                <Link href="#">
                                     <a>История заказов</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Написать в поддержку</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Узнать о безопасности</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Полезные советы</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Вы видели этот бой?</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Бизнесу</a>
                        </Link>
                        <FiChevronDown className={styles.icon}/>
                        <ul className={styles.sub_menu_links}>
                            <li>
                                <Link href="#">
                                     <a>История заказов</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Написать в поддержку</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Узнать о безопасности</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Полезные советы</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Вы видели этот бой?</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Партнерам</a>
                        </Link>
                        <FiChevronDown className={styles.icon}/>
                        <ul className={styles.sub_menu_links}>
                            <li>
                                <Link href="#">
                                     <a>История заказов</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Написать в поддержку</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Узнать о безопасности</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Полезные советы</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Вы видели этот бой?</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className={styles.registration}>
                    <li>
                        <Image src={client} width='40' height='40'style={{cursor: 'pointer'}}/>
                        <ul className={styles.sub_menu2_links}>
                            <li>
                                <Link href="#">
                                     <a>Войти</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="/register">
                                     <a>Регистрация</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Узнать о безопасности</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                            <li>
                                <Link href="#">
                                     <a>Поддержка</a>
                                </Link>
                                <AiOutlineRight fontSize={'12'}/>
                            </li>
                        </ul>
                    </li>
                </ul>
        </nav>
    );
};

export default Header;