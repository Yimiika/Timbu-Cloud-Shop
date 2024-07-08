import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          voluptatem voluptas ducimus accusantium dolore delectus nisi porro
          omnis, saepe vitae, nihil in doloribus rem autem repellat adipisci
          nesciunt dolorum ad.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          quisquam adipisci fuga accusamus sed. Blanditiis, nostrum quae aut
          aliquid ex voluptatem qui accusantium quas, perferendis esse
          voluptatibus, tempora nam provident?
        </p>
      </div>
    </div>
  );
};
