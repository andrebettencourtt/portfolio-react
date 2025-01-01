import styles from "./App.module.css";
import {
  LogoDefault,
  /*   ArrowDown,
   */ GitHubIcon,
  DribbleIcon,
  FigmaIcon,
  PhotoHero,
} from "./assets/image";
function App() {
  return (
    <div className={styles.portfolioContainer}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <img src={LogoDefault} alt="Imagem do portfolio logo" />
          <h1>André</h1>
        </div>
        <nav className={styles.nav}>
          <a href="">
            <p>
              <span>#</span> home
            </p>
          </a>
          <a href="">
            <p>
              <span>#</span> works
            </p>
          </a>
          <a href="">
            <p>
              <span>#</span> about-me
            </p>
          </a>
          <a href="">
            <p>
              <span>#</span> contacts
            </p>
          </a>
          <select className={styles.select}>
            <option value="">EN</option>
            <option value="">PT</option>
          </select>
        </nav>
      </header>
      <aside className={styles.asideMedia}>
        <div className={styles.line}></div>
        <a href="">
          <img src={GitHubIcon} alt="icone GitHub" />
        </a>
        <a href="">
          <img src={DribbleIcon} alt="icone Dribble" />
        </a>
        <a href="">
          <img src={FigmaIcon} alt="icone Figma" />
        </a>
      </aside>
      <main className={styles.mainContainer}>
        <section className={styles.hero}>
          <div className={styles.heroDescription}>
            <h1 className={styles.descriptionText}>
              André is a <span>web designer </span>and
              <span> front-end developer</span>
            </h1>
            <p>
              He crafts responsive websites where technologies meet creativity
            </p>
            <button className={styles.buttonHero}>Contact me !!</button>
          </div>

          <div className={styles.heroImage}>
            <img src={PhotoHero} alt="Imagem de homem no hero" />
            <div className={styles.subTextheroImage}>
              <div className={styles.squadHeroImage}></div>
              <p>
                Currently working on <span>Portfolio</span>{" "}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
