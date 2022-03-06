// Picture.js
import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="img" />
      </div>
      <div className="info">
        <a href={data.photographer_url} style={{ color: "SteelBlue" }}>
          Photographer: {data.photographer}&ensp;
        </a>
        <a target="_blank" href={data.src.large}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Picture;
