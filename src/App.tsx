import "./App.css";
import { useState } from "react";
import { RouterContext } from "./Router";
import Link from "./components/Link";

import Item from "./components/Item";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import HomePage from "./components/HomePage";
import TimeAttackPage from "./components/TimeAttackPage";

export default function App() {
  const [page, setPage] = useState("");

  return (
    <>
      <RouterContext.Provider value={{ page, setPage }}>
        <nav className="menu">
          <Link path="/">Главная</Link>
          <Link path="/drift">Дрифт-такси</Link>
          <Link path="/timeattack">Time Attack</Link>
          <Link path="/forza">Forza Karting</Link>
        </nav>

        <Item currPage={page} needPage={"/"}>
          <HomePage />
        </Item>
        <Item currPage={page} needPage={"/drift"}>
          <DriftPage />
        </Item>
        <Item currPage={page} needPage={"/timeattack"}>
          <TimeAttackPage />
        </Item>
        <Item currPage={page} needPage={"/forza"}>
          <ForzaPage />
        </Item>
      </RouterContext.Provider>
    </>
  );
}
