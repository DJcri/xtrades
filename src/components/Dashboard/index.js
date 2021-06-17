import { useState } from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import alerts from "../../img/alerts.svg";
import leaderboard from "../../img/leaderboard.svg";
import xhub from "../../img/xhub.svg";
import expand from "../../img/expand.svg";
import collapse from "../../img/collapse.svg";
import Button from "../Button";

const Dashboard = ({ dashboardMini, setDashboardMini }) => {
  const [expanded, setExpanded] = useState(false);

  const Board = styled.div`
    width: ${dashboardMini ? "87px" : "250px"};
    position: fixed;
    background: #113365;
    min-height: 940px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 4;
    .logo {
      color: white;
      font-weight: bold;
      font-size: 23px;
      margin-top: 2rem;
      margin-left: ${dashboardMini ? "0" : "-3rem"};
      cursor: pointer;
    }
    a,
    .collapse {
      cursor: pointer;
      border-radius: 5px;
      display: flex;
      justify-content: ${dashboardMini ? "center" : "flex-start"};
      align-items: center;
      padding: ${dashboardMini ? "0" : "1rem"};
      box-sizing: border-box;
      width: 100%;
      height: 46px;
      color: rgba(255, 255, 255, 0.6);
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 15px;
      li {
        width: fit-content;
        height: fit-content;
        display: ${dashboardMini ? "none" : "block"};
      }
      .count {
        padding: 0.4rem;
        padding-left: 1rem;
        padding-right: 1rem;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 2rem;
        background: #596e8d;
      }
    }
    img {
      margin-right: ${dashboardMini ? "0" : "1rem"};
    }
    .links {
      list-style: none;
      margin-top: 2vh;
      padding: ${dashboardMini ? "0" : "1rem"};
      width: ${dashboardMini ? "60%" : "218px"};
      padding-bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .alerts {
        color: white;
        background: rgba(245, 248, 251, 0.1);
      }
    }
    .upgrade {
      background: rgba(245, 248, 251, 0.1);
      margin: 0 auto;
      margin-top: 2vh;
      width: 216px;
      max-height: 248px;
      min-height: 90px;
      height: 20vh;
      border-radius: 15px;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      .btn {
        margin-bottom: 1.5rem;
      }
    }
    .collapse,
    .expand {
      margin-top: 2vh;
      margin-left: ${dashboardMini ? "0" : "1rem"};
    }
  `;

  return (
    <Board>
      <div className="logo">
        <img src={logo} alt="xtrades" />
        {!dashboardMini && "Xtrades"}
      </div>
      <ul className="links">
        <a href="#" className="alerts">
          <img src={alerts} alt="alerts" />
          <li>Alerts</li>
          {!dashboardMini && <div className="count">32</div>}
        </a>
        <a href="#" className="leaderboard">
          <img src={leaderboard} alt="leaderboard" />
          <li>Leaderboard</li>
        </a>
        <a href="#" className="Xhub">
          <img src={xhub} alt="xhub" />
          <li>Xhub</li>
        </a>
      </ul>
      {!dashboardMini && (
        <div className="upgrade">
          <Button className="btn">Upgrade membership</Button>
        </div>
      )}
      <div
        onClick={() => {
          setDashboardMini(!dashboardMini);
        }}
        className="collapse"
      >
        {!dashboardMini ? (
          <img src={collapse} alt="collapse" />
        ) : (
          <img src={expand} alt="expand" />
        )}
        {!dashboardMini ? "Collapse" : ""}
      </div>
    </Board>
  );
};

export default Dashboard;
