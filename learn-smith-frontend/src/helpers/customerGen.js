import { species } from 'fantastical';
import { goldincrement} from "../redux/resourceIncrimentors/goldreducer";


const compareWeapon =(orderObj,weaponObj)=> {
  if(weaponObj.name === orderObj.name){
    goldincrement(orderObj.goldVal);
    return true;
  } 
  return false;
}

const createCustomer = (weaponObj) =>{
  const speciesArr = Object.keys(species);
  const ranSpeciesStr = speciesArr[Math.floor((Math.random() * speciesArr.length))];
  return {name : species[ranSpeciesStr](),
          order : weaponObj,
          id : -1}
}

export {createCustomer, compareWeapon};