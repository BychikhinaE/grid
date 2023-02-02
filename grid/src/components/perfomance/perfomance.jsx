import styles from "./perfomance.module.css";
import logo from "../../images/Logotype.svg";
import both from "../../images/1.png";
import author from "../../images/2.png";
import both2 from "../../images/3.png";
import both3 from "../../images/4.png";
import woman from "../../images/5.jpg";
import woman2 from "../../images/6.png";
import both4 from "../../images/7.png";

function Performance() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img className={styles.logo} alt="Logo" src={logo} />
        <nav className={styles.nav}>
          <ul className={styles.nav__items}>
            <li className={styles.nav__item}>
              <a href="#" className={styles.nav__link}>
                Премьеры
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#" className={styles.nav__link}>
                Интервью
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#" className={styles.nav__link}>
                Новости
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#" className={styles.nav__link}>
                Дискуссии
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#" className={styles.nav__link}>
                Рекомендации
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Премьера вызывающе красивого спектакля от&nbsp;режиссера
          Жана&nbsp;Портье
        </h1>
        <div className={styles.description}>
          <p>20.02.2020</p>
          <p>Автор статьи: Кристина Петровна</p>
          <p>Фотограф: Пьер Буше</p>
        </div>
        <img alt="Both" src={both} className={styles.img_big} />
        <p className={styles.text}>
          Лидер молодой французской режиссуры, создатель и руководитель
          независимого театра Emigre выпустил премьеру в театре Эберто 12
          февраля. Жан Портье предлагает зрителю физически ощутить ход времени и
          поиграть с культурными кодами: окунуться в таинственную атмосферу
          начала XIX века и разгадать мистическую, но в то же время
          романтическую загадку. «В прошлом году в Монпелье» — вызывающе
          красивый, изящный спектакль. Постановка сильно отличается от других,
          минималистичных, работ Портье. Здесь же можно увидеть совсем иную
          атмосферу, изысканную и дорогую. Двухчасовой спектакль в основе
          которого старинная мистическая история, где правду невозможно отличить
          от вымысла.
        </p>
        <img alt="author" src={author} className={styles.img_small} />
        <p className={styles.text_small}>
          На фото: режиссер Жан Портье на репетиции спектакля «В прошлом году в
          Монпелье» Фотограф: Пьер Буше
        </p>
        <p className={styles.text}>
          В дорогом отеле мужчина уверяет женщину, что они уже встречались год
          назад в Монпелье. Женщина считает, что этого не было, либо она просто
          не хочет этого вспоминать. Еще один герой — муж или спутник женщины,
          седой, взрослый пятидесятилетний мужчина, богатый, молчаливый и,
          вероятно, делающий возможным ее красивую праздную жизнь. Отношения
          троицы не определены, причинно-следственные связи нарушены,
          запутанность сюжета вначале кажется абсурдной. Все подчеркивает, как
          странно устроен этот мир, давая возможность бесконечного множества
          трактовок, включая интерпретацию с помощью мифа об Орфее и Эвридике,
          представление об отеле как о чистилище.{" "}
        </p>

        <figure className={styles.cellTwice}>
          <img alt="both2" src={both2} className={styles.img_middle} />
          <figcaption className={styles.text_small}>
            На фото: главные актеры спектакля Обен Шарль и Мари Брюней Фотограф:
            Пьер Буше
          </figcaption>
        </figure>

        <figure className={styles.cellTwice}>
          <img alt="both3" src={both3} className={styles.img_middle} />
          <figcaption className={styles.text_small}>
            На фото: главные актеры спектакля Обен Шарль и Мари Брюней Фотограф:
            Пьер Буше
          </figcaption>
        </figure>

        <figure className={styles.cellOne}>
          <img alt="woman" src={woman} className={styles.img_small} />
          <figcaption className={styles.text_small}>
            На фото: главная актриса Мари Брюней Фотограф: Пьер Буше
          </figcaption>
        </figure>

        <p className={styles.text}>
          Жан Портье предлагает два варианта взаимодействия со спектаклем: «Или
          зритель постарается реконструировать некую схему, самую линейную из
          всех ему доступных, выстроить связи, пытаться понять логически
          построение сюжета и поведение героев – и тогда он найдет эту
          постановку трудной, если не вовсе недоступной пониманию, абсурдной.
          Или же, напротив, позволит увлечь себя необычными образами, возникшими
          перед ним силою голосов актеров, различным шумами, музыкой, ритмом или
          страстностью героев. Такому зрителю спектакль покажется самым легким
          из всех увиденных, адресованным лишь его чувствам — способности
          видеть, слышать, ощущать, чувствовать и волноваться».
        </p>

        <figure  className={styles.cellOne}>
          <img alt="woman2" src={woman2} className={styles.img_small} />
          <figcaption className={styles.text_small}>
            На фото: главная актриса Мари Брюней Фотограф: Пьер Буше
          </figcaption>
        </figure>

        <figure  className={styles.cellOne}>
          <img alt="both4" src={both4} className={styles.img_small} />
          <figcaption className={styles.text_small}>
            На фото: Мари Брюней и Обен Шарль Фотограф: Пьер Буше
          </figcaption>
        </figure>
      </main>
      <footer className={styles.footer}>
        <img className={styles.logo} alt="Logo" src={logo} />
        <p className={styles.copyright}>© 2021 Все права защищены</p>
      </footer>
    </div>
  );
}

export default Performance;
