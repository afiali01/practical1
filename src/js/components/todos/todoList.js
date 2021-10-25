import makeElement from "../../utils/makeElement";
import todoItem from "./todoItem";
import editButton from "../buttons/editButton";
import deleteButton from "../buttons/deleteButton";
import dataFetcher from "../../utils/dataFetcher";
import keyGenerator from "../../utils/key";
import { createStore } from "../../redux/store";

const todoList = async () =>{
    //list div
    const list = document.createElement('div')
    list.classList.add('list-items')

    //get data
    const data = await dataFetcher()
    
    if(data[0].id ===undefined){
        data = [...keyGenerator(data)]
    }

    createStore(data)

    //append child into list
    for(let i=0; i<data.length;i++){
        list.appendChild(todoItem(data[i]))
    }

    return list
}

export default todoList
