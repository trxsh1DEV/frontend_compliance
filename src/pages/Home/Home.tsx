import { useEffect } from "preact/hooks";
import Cookie from "js-cookie";

export const Home = () => {
  useEffect(() => {
    console.log(Cookie.get("token"));
  }, []);
  return (
    <>
      <div>Home</div>
    </>
  );
};
