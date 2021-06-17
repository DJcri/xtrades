import styled from "styled-components";
import like from "../../../img/like.svg";
import liked from "../../../img/liked.svg";
import bookmark from "../../../img/bookmark.svg";
import bookmarked from "../../../img/bookmarked.svg";
import comment from "../../../img/comment.svg";

const Trade = ({ trade, setAlertDetails, compressed }) => {
  const {
    user,
    share,
    strategies,
    open,
    close,
    profit,
    likes,
    bookmarks,
    comments,
  } = trade;

  return (
    <Card
      onClick={() => {
        if (setAlertDetails) {
          setAlertDetails(trade);
        }
      }}
      className={`card ${close && "closed"}`}
    >
      {!compressed && (
        <li className="trader">
          <div className="pfp">
            <img src={user.pfp} alt="pfp" />
            <div className="count">{user.count}</div>
          </div>
          <div className="names">
            <div className="name">{user.name}</div>
            <div className="at">{"@" + user.at}</div>
          </div>
        </li>
      )}
      <li className="trade">
        <div className="logo">
          <img src={share.logo} alt="logo" />
        </div>
        <div className="names">
          <div className="name">
            {`${share.action} ${share.short} ${share.type} ${share.date}`}
          </div>
          <div className="amount">{share.amount}</div>
        </div>
      </li>
      {!compressed && (
        <li className="strategy">
          {strategies.map((strategy, i) => {
            if (i < 2 && strategies.length > 3) {
              return <div className="strat">{strategy}</div>;
            } else if (i < 2) {
              return <div className="strat">{strategy}</div>;
            }
          })}
          {strategies.length > 3 && (
            <div className="strat">{`+ ${strategies.length - 2}`}</div>
          )}
        </li>
      )}
      {!compressed && (
        <li className="open">
          <div className="date">{open}</div>
          {close && <div className="date close">{close}</div>}
        </li>
      )}
      {!compressed && (
        <li className="profit">
          <label
            className={profit.type}
          >{`${profit.type} ${profit.amount}%`}</label>
        </li>
      )}
      {!compressed && (
        <li className="actions">
          <div className="likes">
            {!likes.liked && <img src={like} alt="like" />}
            {likes.liked && <img src={liked} alt="liked" />}
            <div className="count">{likes.amount}</div>
          </div>
          <div className="bookmarks">
            {!bookmarks.bookmarked && <img src={bookmark} alt="bookmark" />}
            {bookmarks.bookmarked && <img src={bookmarked} alt="bookmarked" />}
            <div className="count">{bookmarks.amount}</div>
          </div>
          <div className="comments">
            <img src={comment} alt="comment" />
            <div className="count">{comments}</div>
          </div>
        </li>
      )}
    </Card>
  );
};

export default Trade;

const Card = styled.ul`
  border: 1px solid #e6edf4;
  min-width: 320px;
  min-height: 72px;
  border-radius: 15px;
  margin-bottom: 0.6rem;
  position: relative;
  background: white;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  transition: 0.5s;
  :hover {
    transform: scale(1.01);
  }
  .trader,
  .trade {
    display: flex;
    align-items: center;
    .name {
      color: #435274;
      font-weight: bold;
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
      top: -0.2rem;
      left: 2.2rem;
    }
  }
  .strategy {
    display: flex;
    flex-wrap: wrap;
    .strat {
      padding: 0.3rem;
      padding-left: 0.7rem;
      padding-right: 0.7rem;
      border-radius: 8px;
      margin-right: 0.3rem;
    }
  }
  .close {
    color: #435274;
  }
  .profit {
    label {
      margin: 0 auto;
      padding: 0.3rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      border-radius: 8px;
    }
  }
  .Up {
    color: #40c8b7;
    background: #e6f9f5;
  }
  .Made {
    color: white;
    background: #55cebf;
  }
  .Down {
    color: #fd5b5d;
    background: rgba(253, 91, 93, 0.1);
  }
  .Lost {
    color: white;
    background: #fd5b5d;
  }
  .actions {
    display: flex;
    align-items: center;
    position: relative;
    right: 1rem;
    cursor: pointer;
    div {
      padding: 0;
      display: flex;
      margin-right: 0.4rem;
      img {
        margin-right: 0.4rem;
      }
    }
  }
  .at,
  .amount,
  .close {
    margin-top: 0.4rem;
  }
`;
