export const checkCharNum = (event:any) => {
    let key = event.key;
    let value = event.target.value;
    let new_value = Number(value + key);
    let max = Number(event.target.max);
    if(new_value > max){ 
        event.preventDefault(); 
    }
}