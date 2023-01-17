import React from "react";
import MatchCard from "../MatchCard/MatchCard";
import "./Footer.css";

const Footer = ({ bottomRef }) => {
  return (
    <div className="footer">
      <h1>JOIN A MATCH</h1>
      <div className="matches" ref={bottomRef}>
        <MatchCard /> <MatchCard /> <MatchCard />
      </div>
    </div>
  );
};

export default Footer;
