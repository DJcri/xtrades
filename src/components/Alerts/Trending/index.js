import styled from "styled-components";
import show from "../../../img/show.svg";
import Ticker from "./Ticker";
import apple from "../../../img/apple.png";
import tesla from "../../../img/tesla.png";
import spy from "../../../img/spy.png";
import amazon from "../../../img/amazon.png";
import graph1 from "../../../img/graph-1.svg";
import graph2 from "../../../img/graph-2.svg";

const companies = [
  {
    name: "Apple Inc",
    short: "AAPL",
    logo: apple,
    graph: graph2,
    percentage: 64,
    sentiment: "bullish",
    alerts: 15,
  },
  {
    name: "Amazon.com",
    short: "AMZN",
    logo: amazon,
    graph: graph2,
    percentage: 55,
    sentiment: "bullish",
    alerts: 17,
  },
  {
    name: "S&P 500 Index",
    short: "SPY",
    logo: spy,
    graph: graph1,
    percentage: -64,
    sentiment: "bearish",
    alerts: 7,
  },
  {
    name: "Tesla, Inc",
    short: "TSLA",
    logo: tesla,
    graph: graph2,
    percentage: 55,
    sentiment: "bullish",
    alerts: 12,
  },
  {
    name: "Apple Inc",
    short: "AAPL",
    logo: apple,
    graph: graph2,
    percentage: 64,
    sentiment: "bullish",
    alerts: 15,
  },
  {
    name: "Amazon.com",
    short: "AMZN",
    logo: amazon,
    graph: graph2,
    percentage: 55,
    sentiment: "bullish",
    alerts: 17,
  },
  {
    name: "S&P 500 Index",
    short: "SPY",
    logo: spy,
    graph: graph1,
    percentage: -64,
    sentiment: "bearish",
    alerts: 7,
  },
  {
    name: "Tesla, Inc",
    short: "TSLA",
    logo: tesla,
    graph: graph2,
    percentage: 55,
    sentiment: "bullish",
    alerts: 12,
  },
];

const Trending = () => {
  return (
    <Section>
      <div className="section-header">
        <div className="header-title">
          <h3>Trending tickers</h3>
          <img src={show} alt="hide" />
        </div>
        <div className="sort">
          <label for="trending-sort">Sort by:</label>
          <select id="trending-sort">
            <option value="week">This week</option>
          </select>
          <img src={show} alt="show" />
        </div>
      </div>
      <div className="flex-container">
        {companies.map((company) => {
          return <Ticker company={company} />;
        })}
      </div>
    </Section>
  );
};

export default Trending;

const Section = styled.div`
  padding: 2rem;
  h3 {
    font-size: 20px;
    color: #435274;
    margin-right: 1rem;
  }
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-title {
      display: flex;
    }
  }
  .flex-container {
    background: #f5f8fb;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 2rem;
    margin-top: 2rem;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      width: 1em;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      visibility: hidden;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #c0cddd;
      outline: none;
    }
  }
`;
