import { productsURL } from "../lib";

const prefix = '🐉 ';

type ProductType ={
  id:number,
  name:string,
  icon?:string
}

export default async function updateOutput(id: string){
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if(output  && html){
    output.innerHTML = html;
  }

}

function layoutProducts(products: ProductType[]) {
  const items = products.map(({ id, name, icon }) => {
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
    `;
    const cardHtml = `
    <li>
        <div class="card">
            <div class="card-content">
                <div class="content">
                ${productHtml}
                </div>
            </div>
        </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}

async function getProducts():Promise<ProductType[]>{
  const response: Response = await fetch(productsURL);
  const products: ProductType[] = await response.json();
  return products;
}

// run our samples
runTheLearningSamples();

function runTheLearningSamples(){ 
  //hoisted
  function displayProductInfo(id: number, name:string){
  console.log(`${prefix} types paramets`)
  console.log(`product id = ${id} and name=${name}`)
}

displayProductInfo(10 , "Pizza John")

console.log(`${prefix}  function decleration`)
console.log(addNumbersDeclaration(7,11));

function addNumbersDeclaration(x: number, y:number){
  const sum = x+ y;
  return sum;
}

const addNumbersExpression = function(x: number, y:number){
  const sum = x+ y;
  return sum;
}
console.log(`${prefix}  function decleration`)
console.log(addNumbersExpression(6,10));

const samlpleProducts = [{
  id: 10,
  name: 'Pizza slice',
  icon: 'fas fa-pizza-slice',
},
{
  id: 20,
  name: 'Ice cream',
  icon: 'fas fa-ice-cream'
},
{
  id: 15,
  name: 'Cheese',
  icon: 'fas fa-cheese'
}]

function getProductNames():string[]{
  return samlpleProducts.map((p)=>p.name)
}
console.log(`${prefix}  function decleration`)
console.log(getProductNames());



function getProductById(id: number):ProductType | 
 undefined{ 
  return samlpleProducts.find(p =>id== p.id)
}
console.log(`${prefix}  function decleration`)
console.log(getProductById(101));



function displayProducts(products: ProductType[])
:void{
 const productNames = products.map(p =>{
  const name = p.name.toLocaleLowerCase();
  return name;
 });
 const msg = `Sample products include : ${productNames.join(', ')}`;
 console.log(`${prefix}  return void`);
 console.log(msg);
}
displayProducts(samlpleProducts);

const getRandomInt = (max: number = 10) => Math.floor(Math.random()*max)

function createProduct(name: string, icon?:string):ProductType{
  const id = getRandomInt(1000);
  return {
    id,name,icon 
  }

}
console.log(`${prefix}  Optional parametrs`);
let pineapple = createProduct('pineapple', 'pine-apple.jpg');
let mongo = createProduct('mongo');
console.log(pineapple, mongo);

function createProductWithDefault(name: string, icon:string = "generic-fruit.jpg"):ProductType{
  const id = getRandomInt();
  return {
    id,name,icon 
  }

}
console.log(`${prefix}  Default parametrs`);
pineapple = createProductWithDefault('pineapple', 'pine-apple.jpg');
mongo = createProductWithDefault('mongo');
console.log(pineapple, mongo);

function buildAddress(street: string , city: string, ...restOfAddress: string[]){
  console.table(restOfAddress)
  const address = `${street} ${city} ${restOfAddress.join('-')}`;
  return address;
}

const someAddress = buildAddress('141 davisville Ave', 'Toronto', '412 apt', 'M4S1G7');
console.log(someAddress);


// Parametr Destructuring
function displayProduct({id, name}: ProductType):void{
  console.log(`${prefix} Destructuring parametrs`);
  console.log(`Product id =  ${id} and name = ${name}`)
}

const prod = getProductById(10);
if(prod){
  displayProduct(prod)
}
}