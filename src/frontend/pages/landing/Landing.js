import styles from "./landing.module.css";
import { allCategories } from "../../constants/categories";
import { useFilter } from "../../contexts/filterContext";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/index";
import { createElement } from "react";

function Landing() {
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.paddingTop}>
        <ul className={styles.ul}>
          <h1 className={`font-size-xl ${styles.h1}`}>
            Go where the stories take you
          </h1>
          {allCategories.map((item) => (
            <li
              class="stacked-list-item font-size-m"
              key={item}
              onClick={() => {
                filterDispatch({
                  type: "CATEGORIES",
                  payload: item,
                });
                navigate("/home");
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <img
          src="http://res.cloudinary.com/therajatg/image/upload/books/cover_xby8kh.svg"
          alt="hero-image"
        />
      </div>
      <Footer />
    </div>
  );
}

export { Landing };
