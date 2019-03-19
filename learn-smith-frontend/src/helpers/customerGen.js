import { species } from 'fantastical';
import { goldincrement} from "../redux/resourceIncrimentors/goldreducer";

class Customer{
  constructor(nameStr, weaponObj) {
    this.name = nameStr;
    this.order = weaponObj;
  }
  compareWeapon(weaponObj) {
    if(weaponObj.name === this.order.name){
      goldincrement(this.order.goldVal);
      return true;
    } 
    return false;
  }
}

const createCustomer = (weaponObj) =>{
  const speciesArr = Object.keys(species);
  const ranSpeciesStr = speciesArr[Math.floor((Math.random() * speciesArr.length))];
  return new Customer(species[ranSpeciesStr](),weaponObj)
}

export {createCustomer};