export function uniqCategory(arr){
    return arr.map(({category})=> category)
    .filter((el,inx,array)=> array.indexOf(el) === inx);
}
