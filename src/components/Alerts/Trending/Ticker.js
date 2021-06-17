import styled from "styled-components";
import options from "../../../img/options.svg";

const Ticker = ({ company }) => {
  const { name, short, logo, graph, percentage, sentiment, alerts } = company;
  return (
    <Card>
      <img src={options} alt="options" className="options" />
      <div className="graph">
        <img src={graph} alt="graph" />
      </div>
      <div className="logo">
        <img src={logo} alt={name} />
        <div className="names">
          <div className="short">{short}</div>
          <div className="name">{name}</div>
        </div>
      </div>
      <div className="alerts">{alerts + " alerts"}</div>
      <div
        className="percentage"
        style={{ color: percentage > 0 ? "#40C8B7" : "#FD5B5D" }}
      >
        {percentage + "%"}
        <div className="sentiment">{sentiment}</div>
      </div>
    </Card>
  );
};

export default Ticker;

const Card = styled.div`
  min-width: 280px;
  width: 280px;
  height: 173px;
  background: black;
  border-radius: 15px;
  margin-right: 2rem;
  background: white;
  position: relative;
  overflow: hidden;
  color: #a2b1c3;
  transition: 0.5s;
  :hover {
    transform: scale(1.1);
  }
  .percentage {
    display: flex;
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    .sentiment {
      margin-left: 0.3rem;
      color: #a2b1c3;
    }
  }
  .options {
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
  }
  .graph {
    display: flex;
    height: 50px;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    top: 5rem;
    margin: 0 auto;
    bottom: 0;
    width: 80%;
    overflow: hidden;
    img {
      width: 280px;
    }
  }
  .logo {
    position: absolute;
    left: 2rem;
    top: 2rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      z-index: 2;
    }
    .names {
      position: absolute;
      left: 3rem;
      font-size: 14px;
      white-space: nowrap;
    }
  }
  .alerts {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    font-size: 20px;
  }
  .short,
  .alerts {
    color: #435274;
    font-weight: bold;
  }
`;
