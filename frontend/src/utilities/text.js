export function capitalize(str){
    if(str === undefined || str === null  || str.length === 0) return "";
    return str[0].toUpperCase() + str.slice(1);
}