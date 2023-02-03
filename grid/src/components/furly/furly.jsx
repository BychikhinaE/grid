import { data } from "./data";
import logo from "../../images/furly/logo.svg";
import like from "../../images/furly/heart.svg";
import styles from "./furly.module.css";
import exit from "../../images/furly/exit.svg";
import shop from "../../images/furly/shopcart.svg";
import * as icon from "../../images/social";
import right from "../../images/furly/right.svg";

export default function Furly() {
  return (
    <>
      <header className={styles.container}>
        <nav className={styles.header}>
          <a className={styles.link} href="#">
            <img src={logo} alt="logo" className={styles.logo} />
          </a>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a className={styles.link} href="#">
                Новинки
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                Бестселлеры
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                Одежда
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                Обувь
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                Аксессуары
              </a>
            </li>
          </ul>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="#">
                <img src={exit} alt="личный кабинет" className={styles.icon} />
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                <img src={like} alt="избранное" className={styles.icon} />
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                <img src={shop} alt="корзина" className={styles.icon} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={`${styles.container} ${styles.main}`}>
        <h1 className={styles.title}>Женская одежда</h1>

        <ul className={styles.filter}>
          <li className={styles.filterItem}>
            <label htmlFor="1" className={styles.filterLabel}>
              Категория
            </label>
            <select name="category" id="1" className={styles.filterSelect}>
              <option value="all" className={styles.filterOption}>
                Все
              </option>
            </select>
          </li>
          <li className={styles.filterItem}>
            <label htmlFor="2" className={styles.filterLabel}>
              Бренд
            </label>
            <select name="category" id="2" className={styles.filterSelect}>
              <option value="all" className={styles.filterOption}>
                Все
              </option>
            </select>
          </li>
          <li className={styles.filterItem}>
            <label htmlFor="3" className={styles.filterLabel}>
              Коллекция
            </label>
            <select name="category" id="3" className={styles.filterSelect}>
              <option value="all" className={styles.filterOption}>
                Все
              </option>
            </select>
          </li>
          <li className={styles.filterItem}>
            <label htmlFor="4" className={styles.filterLabel}>
              Сортировать по:
            </label>
            <select name="category" id="4" className={styles.filterSelect}>
              <option value="all" className={styles.filterOption}>
                Все
              </option>
            </select>
          </li>
        </ul>

        <ul className={styles.gallery}>
          {data.map((item, index) => {
            return (
              <li key={index} className={styles.galleryItem}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={styles.galleryImg}
                />
                <div className={styles.galleryTitle}>
                  <h2>{item.name}</h2>
                  <img src={like} />
                </div>
                <p className={styles.galleryPrice}>{item.price} ₽</p>
              </li>
            );
          })}
        </ul>

        <button className={styles.galleryButton}>Загрузить еще</button>
      </main>
      <footer className={`${styles.container} ${styles.footer}`}>
        <div className={styles.copyright}>
          <img src={logo} alt="logo" />
          <p>Furly © 2021 Все права защищены</p>
          <a className={styles.link} href="#">
            Политика конфиденциальности
          </a>
        </div>
        <div>
          <p className={styles.footerText}>534-958-5555</p>
          <p className={styles.footerText}>info@furly.com</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="#">
                <img alt="facebook-экстремисты" src={icon.facebook} />
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                <img alt="twitter-заблочен" src={icon.twitter} />
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                <img alt="instagram-заблочен" src={icon.inst} />
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                <img alt="pinterest" src={icon.pinterest} />
              </a>
            </li>
          </ul>
        </div>
        <nav>
          <ul className={styles.nav}>
            <li className={styles.footerText}>
              <a className={styles.link} href="#">
                Оплата и доставка
              </a>
            </li>
            <li className={styles.footerText}>
              <a className={styles.link} href="#">
                Возврат
              </a>
            </li>
            <li>
              <a className={styles.link} href="#">
                Отследить заказ
              </a>
            </li>
          </ul>
        </nav>
   
          <form className={styles.form}>
            <label className={styles.footerText} htmlFor="input">
              Подпишитесь на нашу рассылку
            </label>
            <input
              placeholder="example@email.com"
              className={styles.input}
              id="input"
            ></input>

            <button className={styles.submit}>
              <img src={right} alt="подписаться на рассылку" />
            </button>
          </form>
 
      </footer>
    </>
  );
}
