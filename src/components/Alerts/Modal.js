import styled from "styled-components";
import close from "../../img/close.svg";
import { trades } from "./Recent/index";
import Trade from "./Recent/Trade";
import Button from "../Button";
import tip from "../../img/tip.svg";
import graph1 from "../../img/graph-1.svg";
import pfpMini from "../../img/pfp-1.png";
import emoji from "../../img/emoji.svg";
import attach from "../../img/attach.svg";

const strategies = [
  "Swing",
  "Lotto",
  "Risky",
  "Day",
  "Penny stocks",
  "Technical",
  "Buy & hold",
  "Momentum",
];

const Modal = ({ alertDetails, setAlertDetails }) => {
  return (
    <Box
      onClick={() => {
        setAlertDetails(null);
      }}
      className={alertDetails ? "" : "hidden"}
    >
      <div
        onClick={() => {
          setAlertDetails(null);
        }}
        className="close-btn"
      >
        <img src={close} alt="close" />
      </div>
      {alertDetails && (
        <div className="modal">
          <div className="user-details">
            <div className="modal-header">
              <div className="pfp">
                <img src={alertDetails.user.pfp} alt="pfp" />
              </div>
              <div className="count">{alertDetails.user.count}</div>
              <div className="names">
                <div className="name">{alertDetails.user.name}</div>
                <div className="at">{"@" + alertDetails.user.at}</div>
              </div>
              <div className="follow-btn">Follow</div>
            </div>
            <div className="stats">
              <div className="header">Trader's stats</div>
              <ul>
                <li>
                  <div className="stat">74</div>
                  <label>Rank</label>
                </li>
                <li>
                  <div className="stat">88%</div>
                  <label>Win rate</label>
                </li>
                <li>
                  <div className="stat">9%</div>
                  <label>Avg. gain</label>
                </li>
                <li>
                  <div className="stat">18 m</div>
                  <label>Avg. trade time</label>
                </li>
              </ul>
            </div>
            <div className="style">
              <div className="header">Trader's style</div>
              <div className="tags">
                {strategies.map((strategy, i) => {
                  return <div className="strat">{strategy}</div>;
                })}
              </div>
            </div>
            <div className="other">
              {trades.map((trade, i) => {
                if (trade.user.at === alertDetails.user.at && i < 4) {
                  return <Trade compressed={true} trade={trade} />;
                }
              })}
            </div>
          </div>
          <div className="trade-details">
            <div className="trade-header">
              <Trade trade={alertDetails} />
              <div className="tip">
                <Button className="tip-btn">
                  <img src={tip} alt="tip" />
                  Give a tip
                </Button>
              </div>
            </div>
            <div className="trade-body">
              <h2>SPY entry at old support</h2>
              <div className="tags">
                {strategies.map((strategy, i) => {
                  if (i < 3) {
                    return <div className="strat">{strategy}</div>;
                  }
                })}
              </div>
              <p>
                More of the same. Thursdays. Look at how we've been doing on
                Thursdays lately (chart below). We get a pullback then a rise.
                The one hour chart always gets to a bottom point and we rise
                from there. Let's see how the day goes from here. This SPY
                417.6ish line is old support and resistance, showing us how
                unstable we are at this point.
              </p>
              <p>
                On a possible rise we need to keep an eye on is EOG. 86.6 is the
                breakout point. However 85.5 is where it's currently struggling.
                It was upgraded this morning and increased PT.
              </p>
              <p>
                Please don't look at meme plays where they could have doubled
                your accounts if you'd only played them larger. They can also
                destroy your account in a flash. Play wisely. Know your limits.
                Trading is NOT a tool to make you rich overnight. It's a
                process. A mind set.
              </p>
              <div className="img-container">
                <img src={graph1} alt="graph" />
              </div>
              <img src={pfpMini} alt="pfp" className="pfp" />
              <img src={emoji} alt="emoji" className="emoji" />
              <img src={attach} alt="attach" className="attach" />
              <textarea placeholder="Write your message..." />
              <Button className="send-btn">Send</Button>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
};

export default Modal;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  p {
    margin-bottom: 2rem;
    color: #77869f;
  }
  textarea {
    background: #f5f8fb;
    border: 1px solid #e6e9ec;
    box-sizing: border-box;
    z-index: 10;
    width: 100%;
    height: 8rem;
    position: relative;
    bottom: 12rem;
    padding: 2rem;
    padding-left: 5rem;
    padding-right: 7rem;
    border-radius: 15px;
    overflow: hidden;
  }
  .card {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    list-style-type: none;
    font-size: 14px;
    color: #77869f;
    background: white;
    border-radius: 15px;
    .trade,
    .actions {
      flex: 3;
    }
    .profit {
      flex: 2;
    }
    .strategy,
    .trader,
    .open {
      display: none;
    }
    :hover {
      transform: scale(1);
    }
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    color: #a2b1c3;
    .strat {
      background: white;
      padding: 0.3rem;
      padding-left: 1rem;
      padding-right: 1rem;
      border-radius: 8px;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
  }
  .trade-details {
    .trade-header {
      border-bottom: rgba(60, 60, 67, 0.08) 1px solid;
      display: flex;
      align-items: center;
      .card {
        padding: 1rem;
        padding-left: 2rem;
        flex: 4;
        border-radius: 0;
        border: none;
        margin-bottom: 0;
        margin-right: 0;
        padding-right: 0;
        .messages {
          margin-right: 0;
        }
      }
      .tip {
        padding: 1rem;
        padding-left: 0;
        flex: 1;
        display: flex;
        align-items: center;
        z-index: 12;
      }
    }
    .trade-body {
      padding: 2rem;
      position: relative;
      .pfp,
      .emoji,
      .attach {
        width: 50px;
        position: absolute;
        bottom: 18rem;
        left: 3rem;
        z-index: 12;
      }
      .emoji,
      .attach {
        width: 15px;
        bottom: 15rem;
        cursor: pointer;
      }
      .attach {
        left: 5rem;
      }
      .send-btn {
        position: absolute;
        bottom: 15rem;
        right: 2.5rem;
        z-index: 12;
      }
      .img-container {
        overflow: hidden;
        img {
          position: relative;
          left: -2rem;
          width: 150%;
        }
      }
      .tags {
        .strat {
          background: #f5f8fb;
        }
      }
    }
  }
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 32px;
    height: 32px;
    background: darkgray;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
  .header,
  h2 {
    color: #4e5d78;
    font-weight: bold;
  }
  .header {
    font-size: 15px;
  }
  .modal {
    display: flex;
    background: white;
    width: 60%;
    min-width: 1000px;
    height: 816px;
    z-index: 6;
    border-radius: 15px;
    box-sizing: border-box;
    overflow: hidden;
    .trade-details {
      flex: 3;
    }
    .user-details {
      border-right: rgba(60, 60, 67, 0.08) 1px solid;
      flex: 2;
      .modal-header {
        display: flex;
        align-items: center;
        margin: 2rem;
        position: relative;
        height: 40px;
      }
      .stats,
      .style,
      .other {
        padding: 2rem;
        width: 100%;
        background: #f5f8fb;
        border-top: rgba(60, 60, 67, 0.08) 1px solid;
        box-sizing: border-box;
        color: #a2b1c3;
      }
      .stats {
        ul {
          display: flex;
          justify-content: space-between;
          list-style-type: none;
          margin-top: 1rem;
          label {
            color: #a2b1c3;
          }
          .stat {
            color: #4e5d78;
            font-weight: bold;
            font-size: 16px;
          }
        }
      }
      .style {
        padding-bottom: 1rem;
      }
      .other {
        height: 100%;
      }
      .name {
        color: #435274;
        font-weight: bold;
      }
      .follow-btn {
        width: 72px;
        height: 30px;
        background: rgba(71, 166, 229, 0.1);
        color: #47a6e5;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0rem;
        top: 0.8rem;
        cursor: pointer;
        border-radius: 100px;
      }
      .pfp,
      .logo {
        background: white;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        filter: drop-shadow(0 0 0.2rem lightgray);
        margin-right: 1rem;
        img {
          width: 40px;
        }
      }
      .logo {
        filter: none;
        img {
          width: 100%;
        }
      }
      .count {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #00a5ea;
        color: white;
        font-size: 10px;
        width: 15px;
        height: 15px;
        padding: 0.2rem;
        border-radius: 15px;
        position: absolute;
        top: -0.5rem;
        left: 2rem;
      }
    }
  }
`;
