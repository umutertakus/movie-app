import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

function Detail() {
  const imdbID = useParams();
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios(
      `http://www.omdbapi.com/?apikey=2ccecf61&i=${imdbID.imdbID}&type=movie&`
    )
      .then((res) => res.data)
      .then((data) => setDetails([data]))
      .finally(() => setIsLoading(false));
  }, []);

  console.log(details);

  return (
    <>
      {
        isLoading !== true ? details.map((item) => (
          <div key={item.imdbID} className="detail-box">
            <div className="detail-i white">
              <p>
                <b>Name:</b> {item.Title}
              </p>
              <p>
                <b>Year:</b> {item.Released}
              </p>
              <p>
                <b>Genre:</b> {item.Genre}
              </p>
              <p>
                <b>Director:</b> {item.Director}
              </p>
              <p>
                <b>Writer:</b> {item.Writer}
              </p>
              <p>
                <b>Actors:</b> {item.Actors}
              </p>
              <p>
                <b>Runtime:</b> {item.Runtime}
              </p>
              <p>
                <b>Awards:</b> {item.Awards}
              </p>
            </div>
            <img src={item.Poster} alt="" />
          </div>
        )) : <Loading />
      }
    </>
  );
}

export default Detail;
