import style from "./pageNotFound.module.css";

export function PageNotFound() {
  return (
    <div className={style.main}>
      <img
        src="https://res.cloudinary.com/therajatg/image/upload/v1658410100/social%20media/404_fkrgao.svg"
        alt="Page Not Found"
        className={style.image}
      />
    </div>
  );
}
