import styled from "styled-components";
import Button from "../Button";
import add from "../../img/add.svg";
import search from "../../img/search.svg";
import bell from "../../img/bell.svg";
import messages from "../../img/messages.svg";
import settings from "../../img/settings.svg";
import pfp from "../../img/pfp.jpg";

const Header = () => {
  return (
    <Bar className="header">
      <h2>Alerts</h2>
      <div className="search-bar">
        <img src={search} alt="search" />
        <input
          placeholder="Search for ticker, user, or other information"
          name="search"
          type="text"
        />
      </div>
      <nav>
        <Button className="invite-btn">
          <img src={add} alt="add" /> Invite a friend
        </Button>
        <div className="bell-container">
          <img src={bell} alt="bell" />
          <div className="bell-indicator"></div>
        </div>
        <img src={messages} alt="messages" />
        <img src={settings} alt="settings" />
        <div className="pfp">
          <img src={pfp} alt="pfp" />
        </div>
      </nav>
    </Bar>
  );
};

export default Header;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px rgba(60, 60, 67, 0.08) solid;
  nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    img {
      width: 20px;
      cursor: pointer;
    }
    .bell-container {
      position: relative;
    }
    .bell-indicator {
      background: #00a5ea;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      position: absolute;
      right: -0.5rem;
      top: -0.5rem;
    }
  }
  .pfp {
    width: 40px;
    img {
      width: 100%;
    }
  }
  h2 {
    font-size: 28px;
    font-weight: bold;
    color: #435274;
  }
  .search-bar {
    display: flex;
    align-items: center;
    img {
      position: relative;
      left: 2rem;
    }
    input {
      background: #f5f8fb;
      width: 536px;
      height: fit-content;
      padding-left: 3rem;
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
      box-sizing: border-box;
      border-radius: 10px;
    }
  }
  .invite-btn {
    margin: 0;
  }
`;
