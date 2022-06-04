import React, { useState } from "react";

const ProductImages = (props) => {
  const { images = [] } = props;
  const [main, setMainImage] = useState(images[0]);

  return (
    <div className="product__container-images ">
      <figure className="main-image">
        <img src={main?.url}></img>
      </figure>
      <div className="gallery ">
        {images.map((img, index) => {
          return (
            <div className="img-box" key={index}>
              <img
                src={img.url}
                alt={img.filename}
                onClick={() => setMainImage(images[index])}
                className={`${main.url === img.url ? "active" : ""}`}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
