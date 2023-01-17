import { priceListData } from "../data/priceListData";
import "../style/pricelist.scss";

const PriceList = () => {
  return (
    <div className="priceList-wrapper">
      {priceListData.map((item) => {
        if (item.id <= 4)
          return (
            <div key={item.id} className={item.className}>
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          );
        else if (item.id > 4 && item.id <= 12)
          return (
            <div className={item.className} key={item.id}>
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          );
        else if (item.id > 12 && item.id <= 18)
          return (
            <div key={item.id} className={item.className}>
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          );
        else if (item.id > 18 && item.id <= 33)
          return (
            <div key={item.id} className={item.className}>
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          );
        else if (item.id > 33 && item.id <= 37)
          return (
            <div key={item.id} className={item.className}>
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          );
        else if (item.id > 37 && item.id <= 41)
          return (
            <div key={item.id} className={item.className}>
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          );
        else if (item.id > 41 && item.id <= 44)
          return (
            <div key={item.id} className={item.className}>
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          );
        else if (item.id > 44 && item.id <= 48)
          return (
            <div key={item.id} className={item.className}>
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          );
        else if (item.id > 48 && item.id <= 58)
          return (
            <div key={item.id} className={item.className}>
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          );
        else if (item.id > 58 && item.id <= 70)
          return (
            <div key={item.id} className={item.className}>
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          );
        else if (item.id > 70 && item.id <= 74)
          return (
            <div key={item.id} className={item.className}>
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          );
        else if (item.id === 75)
          return (
            <div key={item.id} className={item.className}>
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          );
        return null;
      })}
    </div>
  );
};

export default PriceList;
