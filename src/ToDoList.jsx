import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListCom from "./ListCom";


const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);
    const itemEvent = (event) => {
        setItem(event.target.value);
    };
    const ListOfItems = () => {

        setNewItem((prevValue) => {
            console.log(prevValue);
            return item === "" ?  [...prevValue] : [...prevValue,item];
        });
        setItem("");
    };

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDO List</h1>
                    <br />
                    <div className="flex_box">
                        <input type='text' placeholder="Add an items" onChange={itemEvent} value={item} />
                        <Button className="newbtn" onClick={ListOfItems} disabled={item=== "" ? true : false}>
                            <AddIcon className=""/>
                        </Button>
                    </div>
                    <ul>
                        {newitem.map((val, index) => {
                            return  <ListCom key={index} text={val}/> ;

                        })}
                    </ul>
                </div>
            </div>
        </>
    )
};

export default ToDoList;