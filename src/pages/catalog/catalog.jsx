import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/cards/card";
import SideBarItem from "../../components/sideBarItem/sideBarItem";
import { CustomContext } from "../../utils/context";
import arrow from "../../assets/catalog/Arrow.svg";

const Catalog = () => {
  const { genre, getProducts, setPage, page,handleNextPage,handlePrevPage,endIndex,currentPage,setCurrentPage } = useContext(CustomContext);
  const [show, setShow] = useState(true);
  const { products } = useContext(CustomContext);

  useEffect(() => {
    getProducts();
  }, [genre]);

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__inner">
          <div className="catalog__sideBar">
            <div
              style={{ flexDirection: `${show ? "row" : "column-reverse"}` }}
              f={`${show ? "cool" : "un"}`}
              className="catalog__sideBar-title"
            >
              <h2 className={`${show ? "" : "jarno"}`}>Жанры</h2>
              {show ? (
                <p onClick={() => setShow(!show)}>
                  все
                  <img src={arrow} alt="arrow" />
                </p>
              ) : (
                <p onClick={() => setShow(!show)}>
                  <img
                    style={{
                      rotate: "177deg",
                      width: "12px",
                      height: "24px",
                      marginTop: "0.8px",
                    }}
                    src={arrow}
                    alt="arrow"
                  />
                  Назад
                </p>
              )}
            </div>
            <div className="catalog__sideBar-type">Тип</div>
            <div className="catalog__sideBar-checks">
              <SideBarItem value={"Манга"} text="Манга" />
              <SideBarItem value={"Манхва"} text="Манхва" />
              <SideBarItem value={"Западный комикс"} text="Комиксы" />
              <SideBarItem value={"Рукомикс"} text="Маньхуа" />
              {show === false && <SideBarItem value={"Манга"} text="Боевик" />}
              {show === false && (
                <SideBarItem value={"Манхва"} text="Боевые искуства" />
              )}
              {show === false && (
                <SideBarItem value={"Западный комикс"} text="Гарем" />
              )}
              {show === false && (
                <SideBarItem value={"Рукомикс"} text="Гендерная интрига" />
              )}
              {show === false && (
                <SideBarItem value={"Манга"} text="Героическое фентези" />
              )}
              {show === false && (
                <SideBarItem value={"Манхва"} text="Детектив" />
              )}
              {show === false && (
                <SideBarItem value={"Западный комикс"} text="Дзёсэй" />
              )}
              {show === false && (
                <SideBarItem value={"Рукомикс"} text="Додзинси" />
              )}
              {show === false && <SideBarItem value={"Манга"} text="Драмма" />}
              {show === false && <SideBarItem value={"Манхва"} text="Игра" />}
              {show === false && (
                <SideBarItem value={"Западный комикс"} text="История" />
              )}
              {show === false && (
                <SideBarItem value={"Рукомикс"} text="Киберпанк" />
              )}
              {show === false && <SideBarItem value={"Манга"} text="Кодомо" />}
            </div>
            <div className="catalog__sideBar-year">
              <input type="number" placeholder="От 0" name="" id="" />
              <span>—</span>
              <input type="number" placeholder="До 2023" name="" id="" />
            </div>
            <div className="catalog__sideBar-useBtn">
              <input
                onClick={() => setPage(page + 1)}
                type="button"
                value="Сбросить"
              />
              <input type="button" value="Применить" />
            </div>
          </div>
          <div className="catalog__inner-blocks">
            <Card products={products} />
          </div>
        </div>
        <div>
          <div className="pagination">
            <button onClick={() => setCurrentPage(1)}>{'<<'}</button>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Prev
            </button>
            <button
              onClick={handleNextPage}
              disabled={endIndex >= products.data.length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
