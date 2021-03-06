import styled from "styled-components";
import Header from "./Header";
import Trending from "./Trending/index";
import { Recent } from "./Recent/index";
import Modal from "./Modal";
import { useEffect, useState } from "react";

const Alerts = ({ dashboardMini }) => {
  const [alertDetails, setAlertDetails] = useState(null);

  useEffect(() => {
    console.log(dashboardMini);
  }, [dashboardMini]);

  return (
    <Page className={`${dashboardMini ? "fullsize" : ""}`}>
      <Header />
      <Trending />
      <Recent setAlertDetails={setAlertDetails} />
      <Modal alertDetails={alertDetails} setAlertDetails={setAlertDetails} />
    </Page>
  );
};

export default Alerts;

const Page = styled.div`
  margin-left: 250px;
  .hidden {
    visibility: hidden;
  }
  .sort {
    label {
      color: #647189;
      position: relative;
      left: 5rem;
    }
    img {
      position: relative;
      right: 2rem;
      pointer-events: none;
    }
    select {
      border: none;
      background: #f5f8fb;
      color: #a2b1c3;
      font-size: 14px;
      width: 197px;
      height: fit-content;
      padding-left: 5rem;
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
      box-sizing: border-box;
      border-radius: 10px;
      //remove default drop icon
      -webkit-appearance: none;
      -moz-appearance: none;
      text-indent: 1px;
      text-overflow: "";
      :focus {
        outline: none;
      }
    }
  }
`;
