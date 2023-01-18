import { useRouteError } from "react-router-dom";
import notFound from "../assets/images/notFound.gif";
import { Link } from "react-router-dom";
const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="notFoundPageContainer">
      <div className="notFoundPage">
        <h1>
          Oops !!! {error?.status} : {error?.statusText}{" "}
        </h1>
        <img src={notFound} alt="Not Found" />
        <div>
          <Link to="/" className="goBackHome">
            Go back Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
