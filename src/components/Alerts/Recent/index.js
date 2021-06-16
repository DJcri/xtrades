import styled from "styled-components";
import show from "../../../img/show.svg";

const Recent = () => {
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
          <label for="trending-sort">Sort by:</label>
          <select id="trending-sort">
            <option value="week">This week</option>
          </select>
          <img src={show} alt="show" />
        </div>
      </div>
    </Section>
  );
};

export default Recent;

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
        filter: drop-shadow(0 1px 0.03rem darkgray);
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
`;
