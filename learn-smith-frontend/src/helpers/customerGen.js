import { species } from 'fantastical';
import { goldincrement} from "../redux/resourceIncrimentors/goldreducer";
import {inventoryremove} from "../redux/inventoryreducer"
import { store } from "../redux/reduxStore"

const haveWeapon =(orderObj, custID )=> {
  const currentState = store.getState();
  const weaponList = currentState.inventory.list;
  for (let index = 0; index < weaponList.length; index++) {
    const weapon = weaponList[index];
    if(orderObj.name === weapon.name){
      store.dispatch(goldincrement(orderObj.goldVal))
      store.dispatch(inventoryremove(weapon.id))
      store.dispatch({type:"customer/remove",payload:custID})
      return true;
    } 
  }
 
  return false;
}

const createCustomer = (weaponObj) =>{
  const speciesArr = Object.keys(species);
  const ranSpeciesStr = speciesArr[Math.floor((Math.random() * speciesArr.length))];
  return {name : `${species[ranSpeciesStr]()} ${species[ranSpeciesStr]()}`,
          order : weaponObj,
          id : -1}
}

export {createCustomer, haveWeapon};