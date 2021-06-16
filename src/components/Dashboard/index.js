import { useState } from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import alerts from "../../img/alerts.svg";
import leaderboard from "../../img/leaderboard.svg";
import xhub from "../../img/xhub.svg";
import expand from "../../img/expand.svg";
import collapse from "../../img/collapse.svg";
import Button from "../Button";

const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Board>
      <div className="logo">
        <img src={logo} alt="xtrades" />
        Xtrades
      </div>
      <ul className="links">
        <a href="#" className="alerts">
          <img src={alerts} alt="alerts" />
          <li>Alerts</li>
          <div className="count">32</div>
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
      <div className="upgrade">
        <Button>Upgrade membership</Button>
      </div>
      <a href="#" className="collapse">
        <img src={collapse} alt="collapse" />
        Collapse
      </a>
    </Board>
  );
};

export default Dashboard;

const Board = styled.div`
  position: fixed;
  background: #113365;
  width: 250px;
  min-height: 940px;
  height: 100%;
  .logo {
    color: white;
    font-weight: bold;
    font-size: 23px;
    margin-top: 2rem;
    margin-left: 2rem;
    img {
      margin-right: 1rem;
    }
  }
  a {
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 1rem;
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
    margin-right: 1rem;
  }
  .links {
    list-style: none;
    margin-top: 4rem;
    padding: 1rem;
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
    margin: 4rem auto;
    width: 216px;
    height: 248px;
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
    margin-top: 5rem;
    margin-left: 1rem;
  }
`;
