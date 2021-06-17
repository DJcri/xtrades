import styled from "styled-components";
import show from "../../../img/show.svg";
import Trade from "./Trade";
import pfp1 from "../../../img/pfp-1.png";
import pfp2 from "../../../img/pfp-2.png";
import pfp3 from "../../../img/pfp-3.png";
import apple from "../../../img/apple.png";
import amazon from "../../../img/amazon.png";
import spy from "../../../img/spy.png";
import tesla from "../../../img/tesla.png";

const users = [
  { pfp: pfp3, count: 88, name: "CKadera", at: "ckadera" },
  { pfp: pfp2, count: 67, name: "Kevin (momentum)", at: "kevin" },
  { pfp: pfp1, count: 87, name: "CKadera", at: "ckadera" },
];

const trades = [
  {
    user: users[0],
    share: {
      logo: apple,
      short: "AAPL",
      action: "Bought",
      type: "",
      amount: "@ $210.22",
      date: "",
    },
    strategies: ["Momentum", "Lotto", "1", "2", "3", "4", "5", "6", "7"],
    open: "02/22/21",
    close: null,
    profit: { amount: 4, type: "Up" }, //percentage
    likes: { amount: 24, liked: false },
    bookmarks: { amount: 7, bookmarked: false },
    comments: 37,
  },
  {
    user: users[1],
    share: {
      logo: spy,
      short: "SPY",
      action: "Sold",
      type: "put",
      amount: "@ $210.22",
      date: "08/18/21",
    },
    strategies: ["Day", "Momentum", "1", "2"],
    open: "08/21/21",
    close: "8:13 AM",
    profit: { amount: 16, type: "Made" }, //percentage
    likes: { amount: 37, liked: true },
    bookmarks: { amount: 7, bookmarked: true },
    comments: 37,
  },
  {
    user: users[2],
    share: {
      logo: tesla,
      short: "TSLA",
      action: "Sold",
      type: "call",
      amount: "@ $210.22",
      date: "08/18/21",
    },
    strategies: ["Day", "Lotto", "1", "2", "3"],
    open: "Opened Yesterday",
    close: null,
    profit: { amount: 4, type: "Down" }, //percentage
    likes: { amount: 24, liked: false },
    bookmarks: { amount: 7, bookmarked: false },
    comments: 0,
  },
  {
    user: users[2],
    share: {
      logo: tesla,
      short: "Tesla",
      action: "",
      type: "iron condor",
      amount: "Credit $35",
      date: "08/18/21",
    },
    strategies: ["Day"],
    open: "02/22/21",
    close: null,
    profit: { amount: 4, type: "Up" }, //percentage
    likes: { amount: 24, liked: false },
    bookmarks: { amount: 7, bookmarked: false },
    comments: 37,
  },
  {
    user: users[1],
    share: {
      logo: spy,
      short: "Spy",
      action: "Sold",
      type: "put",
      amount: "@ $210.22",
      date: "08/18/21",
    },
    strategies: ["Day", "Vertical Spread", "1", "2"],
    open: "Opened Yesterday",
    close: "8:13 AM",
    profit: { amount: 16, type: "Made" }, //percentage
    likes: { amount: 37, liked: true },
    bookmarks: { amount: 7, bookmarked: true },
    comments: 37,
  },
  {
    user: users[2],
    share: {
      logo: tesla,
      short: "TSLA",
      action: "Sold",
      type: "call",
      amount: "@ 210.22",
      date: "08/18/21",
    },
    strategies: ["Long", "Diagonal put", "1", "2", "3", "4", "5", "6", "7"],
    open: "Opened Yesterday",
    close: "8:13 AM",
    profit: { amount: 4, type: "Lost" }, //percentage
    likes: { amount: 24, liked: false },
    bookmarks: { amount: 7, bookmarked: false },
    comments: 37,
  },
  {
    user: users[2],
    share: {
      logo: amazon,
      short: "AMZN",
      action: "",
      type: "iron condor",
      amount: "Debit $35",
      date: "08/18/21",
    },
    strategies: ["Swing"],
    open: "Opened Yesterday",
    close: null,
    profit: { amount: 4, type: "Up" }, //percentage
    likes: { amount: 24, liked: false },
    bookmarks: { amount: 7, bookmarked: false },
    comments: 37,
  },
  {
    user: users[1],
    share: {
      logo: spy,
      short: "SPY",
      action: "Sold",
      type: "put",
      amount: "@ $210.22",
      date: "08/18/21",
    },
    strategies: ["Day", "Momentum", "1", "2"],
    open: "Opened Yesterday",
    close: "8:13 AM",
    profit: { amount: 16, type: "Made" }, //percentage
    likes: { amount: 24, liked: false },
    bookmarks: { amount: 7, bookmarked: false },
    comments: 37,
  },
  {
    user: users[2],
    share: {
      logo: tesla,
      short: "TSLA",
      action: "Sold",
      type: "call",
      amount: "@ $210.22",
      date: "08/18/21",
    },
    strategies: ["Day", "Pennystocks"],
    open: "Opened Yesterday",
    close: null,
    profit: { amount: 4, type: "Up" }, //percentage
    likes: { amount: 24, liked: false },
    bookmarks: { amount: 7, bookmarked: false },
    comments: 37,
  },
];

const Recent = ({ setAlertDetails }) => {
  return (
    <Section>
      <div className="section-header">
        <div className="header-title">
          <h3>Recent Alerts</h3>
        </div>
      </div>
      <div className="flex-container">
        <ul className="categories">
          <li>
            <div className="btn">All</div>
          </li>
          <li>
            <div className="btn">Top alerts</div>
          </li>
          <li>
            <div className="btn">Following</div>
          </li>
        </ul>
        <div className="sort">
          <label for="recent-sort">Sort by:</label>
          <select id="recent-sort">
            <option value="week">All</option>
          </select>
          <img src={show} alt="show" />
        </div>
      </div>
      <ul className="info-headers">
        <li className="trader">
          Trader
          <img src={show} alt="show" />
        </li>
        <li className="trade">
          Trade
          <img src={show} alt="show" />
        </li>
        <li className="strategy">
          Strategy type
          <img src={show} alt="show" />
        </li>
        <li className="open">
          Open/close
          <img src={show} alt="show" />
        </li>
        <li className="profit">
          Profit/loss
          <img src={show} alt="show" />
        </li>
        <li className="actions">
          Actions
          <img src={show} alt="show" />
        </li>
      </ul>
      <div className="trades">
        {trades.map((trade) => {
          console.log(trade.user);
          return <Trade setAlertDetails={setAlertDetails} trade={trade} />;
        })}
      </div>
    </Section>
  );
};

export { Recent, trades };

const Section = styled.div`
  padding: 2rem;
  h3 {
    font-size: 20px;
    color: #435274;
    margin-right: 1rem;
  }
  .flex-container {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .trades {
    margin-right: 1rem;
  }
  .info-headers,
  .card {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    list-style-type: none;
    font-size: 14px;
    color: #77869f;
    background: #f5f8fb;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 15px;
    li {
      padding-left: 1rem;
    }
    img {
      margin-left: 1rem;
    }
    .pfp,
    .logo {
      img {
        margin: 0;
      }
    }
    .trader,
    .trade,
    .strategy,
    .actions {
      flex: 3;
    }
    .open,
    .profit {
      flex: 2;
    }
  }
  .card {
    background: white;
    color: #a2b1c3;
    .strat {
      background: #f5f8fb;
    }
  }
  .closed {
    background: #f5f8fb;
    border: none;
    .strat {
      background: white;
    }
  }
  .categories {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style-type: none;
    width: 312px;
    height: 40px;
    background: #f5f8fb;
    border-radius: 15px;
    li {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      border-right: 1px solid #e6edf4;
      color: #a2b1c3;
      font-weight: bold;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        height: 32px;
        width: 83px;
        border-radius: 10px;
      }
    }
    li:nth-child(3) {
      border-right: none;
    }
    li:nth-child(1) {
      .btn {
        color: #435274;
        background: white;
        filter: drop-shadow(0 1px 0.03rem lightgray);
      }
    }
  }
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-title {
      display: flex;
    }
  }
  @media (max-width: 1400px) {
    .section-header,
    .flex-container {
      justify-content: center;
    }
    .info-headers {
      display: none;
    }
    .card {
      flex-direction: column;
      gap: 1rem;
      height: fit-content;
      padding: 1rem;
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
