import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import '../styles/global.css';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="product-card">
        <div className="image-container">
            <img
                src="/assets/footer-logo.png"
                alt="Photo"
                className="photo"
            />
        <div className="tag-container">
            <span className="tag">40%</span>
        </div>
        <div className="heart-container" onClick={handleLike}>
            {liked ? (
            <AiFillHeart className="heart-icon heart-liked" />
            ) : (
            <AiOutlineHeart className="heart-icon heart-outline" />
            )}
        </div>
      </div>
      <div className="content-container">
        <div className="brand-container">
            <h1>Brand Name</h1>
            <p>Helmet</p>
        </div>
        <div className="price-container">
            <h1>4200</h1>
            <p>6000</p>
        </div>
        <div className="size-container">
            <h1>Size :</h1>
            <p>L M S</p>
        </div>
        <div className="color-container">
            <h1>Colors</h1>
        </div>
        <div className="instock-container">
            <p>InStock 4 Units</p>
        </div>
        <div className="product-button-container">
            <button>Buy Now</button>
            <button>Add To Cart</button>
        </div>
        <div>
            {/*LOGOS*/}
        </div>
      </div>
    </div>
  );
}

export default LikeButton;
