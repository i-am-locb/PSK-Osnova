import { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import { Entry } from "./Entry/Entry";
import { Navigation } from "../../GlobalComponents/Navigation/Navigation";
import { Species } from "./Species/Species";
import { Stages } from "./Stages/Stages";
import { Consultation } from "./Сonsultation/Сonsultation";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollable, setScrollable] = useState(true);
  const pageScroll = (nextPage: number) => {
    setCurrentPage(nextPage);
  };
  return (
    <>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <ReactPageScroller
        blockScrollDown={!scrollable}
        blockScrollUp={!scrollable}
        renderAllPagesOnFirstRender={true}
        onBeforePageScroll={(e) => pageScroll(e)}
        customPageNumber={currentPage}
      >
        <Entry />
        <Species scrollable={scrollable} setScrollable={setScrollable} />
        <Stages />
        <Consultation />
      </ReactPageScroller>
    </>
  );
};
