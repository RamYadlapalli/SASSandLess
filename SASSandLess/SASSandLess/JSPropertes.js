var cat = {
    name:"Test",
    color:"White"
//    type:{type1:"teets",type2:"teezsts"}
}

//cat.name 
//cat["name"]

//console.log(Object.getOwnPropertyDescriptor(cat,'name'));   
Object.defineProperty(cat, 'name', { configurable: false });
Object.defineProperty(cat, 'name', { enumerable: false });
cat.name = 123;
/*for(var property in cat)
{
    console.log(cat[property]);
}*/
console.log(cat);
//enumarable 
//configurable
//cat.name = "test123";
//console.log(cat);   
