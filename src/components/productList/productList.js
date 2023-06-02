import React from "react";
import ProductItem from "../productItem/productItem";
import "./styles.scss";

export default function ProductList() {
  const productItems = [
    {
        id: 0,
        img: "https://lumiere-a.akamaihd.net/v1/images/1_8c2f8c8a.jpeg",
        title: "Mickey Mouse - Walt Disney",
    },
    {
        id: 1,
        img: "https://cartoonresearch.com/wp-content/uploads/2022/02/Mickey-Model-sheet-1930.jpg",
        title: "Mickey Mouse - Walt Disney",
    },
    {
        id: 2,
        img: "https://dyn1.heritagestatic.com/lf?set=path%5B1%2F1%2F5%2F2%2F8%2F11528693%5D&call=url%5Bfile%3Aproduct.chain%5D",
        title: "Mickey Mouse - Walt Disney",
    },
    {
        id: 3,
        img: "https://cdn.shopify.com/s/files/1/0063/7779/9733/products/WPKHHRTMGNT100.png?v=1653408640",
        title: "Heart Magnet Wallpaper, YP x Keith Haring",
    },
    {
        id: 4,
        img: "https://i.etsystatic.com/19371166/r/il/15129d/2132158959/il_fullxfull.2132158959_6n74.jpg",
        title: "KEITH HARING red Heart Original Vintage Poster",
    },
    {
        id: 5,
        img: "https://cdn.shopify.com/s/files/1/1979/0029/products/magnet1_530x@2x.jpg?v=1678366587",
        title: "Heart Magnet Wallpaper by Keith Haring",
    },
  ];

  const MickeyArray = productItems.filter((el) => el.title.includes("Mickey"));

  console.log(MickeyArray);
  return (
    <>
      <h2 className="pl-20">REGULAR RENDER</h2>
      <div className="product-list">
        <ProductItem
          img="https://cdn.shopify.com/s/files/1/0063/7779/9733/products/WPKHHRTMGNT100.png?v=1653408640"
          title="Heart Magnet Wallpaper, YP x Keith Haring"
        />
        <ProductItem
          img="https://i.etsystatic.com/19371166/r/il/15129d/2132158959/il_fullxfull.2132158959_6n74.jpg"
          title="KEITH HARING red Heart Original Vintage Poster"
        />
        <ProductItem
          img="https://cdn.shopify.com/s/files/1/1979/0029/products/magnet1_530x@2x.jpg?v=1678366587"
          title="Heart Magnet Wallpaper by Keith Haring"
        />
      </div>
      <h2 className="pl-20">RENDER LIST WITH MAP</h2>
      <div className="product-list" id="product-list">
        {productItems.map((el, i) => {
          return <ProductItem key={el.id} img={el.img} title={el.title} />;
        })}
      </div>
      <h2 className="pl-20">RENDER LIST WITH FILTERED ARRAY</h2>
      <div className="product-list" id="product-list">
        {MickeyArray.map((el, i) => {
          return <ProductItem key={el.id} img={el.img} title={el.title} />;
        })}
      </div>
    </>
  );
}
