import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.scss";
import { useSelector } from "react-redux";
import { getData } from "./Redux/Data/data_reducer";
import { useAppDispatch } from "./Redux/Store";
import { ArcLoader } from "./GlobalComponents/Loader/ArcLoader";
import { MainPage } from "./Components/MainPage/MainPage";
import { BackGround } from "./GlobalComponents/BackGround/BackGround";
import { Route, Routes } from "react-router-dom";
import { About } from "./Components/About/About";
import { Services } from "./Components/Services/Sevices";
import { Prices } from "./Components/Prices/Prices";
import { Contacts } from "./Components/Contacts/Contacts";
import { Container } from "react-bootstrap";
import { IState } from "./types";

function App() {
  const dispatch = useAppDispatch();
  const isDataLoad = useSelector((state: IState) => state.data.isDataLoad);

  useEffect(() => {
    if(!isDataLoad) {
    dispatch(getData());
    }
  }, []);

  return (
    <Container fluid className={styles.app}>
      <BackGround />
      {!isDataLoad ? (
        <ArcLoader />
      ) : (
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/prices" element={<Prices />}/>
          <Route path="/manufacture" element={<MainPage />}/>
          <Route path="/terms" element={<MainPage />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
      )}
    </Container>
  );
}

export default App;
