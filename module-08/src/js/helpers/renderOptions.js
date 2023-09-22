export function renderOptions(arr, rootSelector) {
const markup = arr.map((item)=>{
    return `
    <option value="${item}">${item}</option>
    `
}).join("")

rootSelector.innerHTML = markup;

}
