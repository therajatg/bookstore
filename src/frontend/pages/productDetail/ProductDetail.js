import style from "./productDetail.module.css";
import { ProductCard } from "../../components/index";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function ProductDetail() {
  const { productId } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/products/${productId}`);
      setDetail(response.data.product);
    })();
  }, []);

  return (
    <div className={style.main}>
      <ProductCard product={detail} />
      <p className={style.text}>
        In her mesmerizing fourth work of fiction, Sue Monk Kidd takes an
        audacious approach to history and brings her acclaimed narrative gifts
        to imagine the story of a young woman named Ana. Raised in a wealthy
        family with ties to the ruler of Galilee, she is rebellious and
        ambitious, with a brilliant mind and a daring spirit. She engages in
        furtive scholarly pursuits and writes narratives about neglected and
        silenced women. Ana is expected to marry an older widower, a prospect
        that horrifies her. An encounter with 18-year-old Jesus changes
        everything. Their marriage evolves with love and conflict, humor and
        pathos in Nazareth, where Ana makes a home with Jesus, his brothers, and
        their mother, Mary. Ana’s pent-up longings intensify amid the turbulent
        resistance to Rome’s occupation of Israel, partially led by her brother,
        Judas. She is sustained by her fearless aunt Yaltha, who harbors a
        compelling secret. When Ana commits a brazen act that puts her in peril,
        she flees to Alexandria, where startling revelations and greater dangers
        unfold, and she finds refuge in unexpected surroundings. Ana determines
        her fate during a stunning convergence of events considered among the
        most impactful in human history. Grounded in meticulous research and
        written with a reverential approach to Jesus’s life that focuses on his
        humanity, The Book of Longings is an inspiring, unforgettable account of
        one woman’s bold struggle to realize the passion and potential inside
        her, while living in a time, place and culture devised to silence her.
        It is a triumph of storytelling both timely and timeless, from a
        masterful writer at the height of her powers.
      </p>
    </div>
  );
}
