import pic1 from "../assets/bg-pic.png";
import "./Home.css";
import { Link } from "react-router";
import Header from "./header";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [show, setShow] = useState({
    title: true,
    p1: false,
    p2: false,
    btn: false
  });

  useEffect(() => {
    const handleShow = () => {
      setShow(prevShow => ({
        ...prevShow,
        p1: true
      }));
    };

    const handleShowP2 = () => {
      setShow(prevShow => ({
        ...prevShow,
        p2: true
      }));
    };

    const handleShowBtn = () => {
      setShow(prevShow => ({
        ...prevShow,
        btn: true
      }));
    };

    setTimeout(handleShow, 850);
    setTimeout(handleShowP2, 1700);
    setTimeout(handleShowBtn, 2550);
  }, []);


  return (
    <>
      <title>IY-Home</title>

      <div className="home">
        <img className="bg" src={pic1} alt="img" />

        <Header />
        <div className="content">
          <div className={`title ${show.title && "show-home"}`}>
            <h1>IY Sweets</h1>
          </div>
          <div className="text">
            <p className={`p1 ${show.p1 && "show-home"}`}>لمسة بيتية… مذاق لا يُنسى</p>
            <p className={`p2 ${show.p2 && "show-home"}`}>Fresh Handmade</p>
            <Link to="/menu" className={`${show.btn && "show-home"}`}>عرض المنتجات</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
