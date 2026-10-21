
import formatCurrency, {
  add,
  capitalize,
  APP_VERSION
} from "./utils.js";

console.log("Addition:", add(10, 5));
console.log("Capitalized:", capitalize("javascript"));
console.log("App Version:", APP_VERSION);
console.log("Formatted Currency:", formatCurrency(45000));
