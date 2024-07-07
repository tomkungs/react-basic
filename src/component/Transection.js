import Item from "./Item";
import './Transection.css';
import { v4 as uuidv4 } from 'uuid';
import DataContext from "../data/DataContext";
import { useContext } from "react";

const Transection = (props) =>{
    const {items} = props;
    return (
      <>
        <ul className="item-list">
          
          {items.map((item)=>{
            return <Item {...item} key={item.id}/>//การลดรูป
          })}
        </ul>
      </>
    )
  }

  export default Transection;