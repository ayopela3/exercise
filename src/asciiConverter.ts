const converter = (words:string) => {
    let codes = [];
    for(let i = 0; i < words.length; i += 1){
        let code = words.charCodeAt(i);
        codes.push(code);
    }
    return codes.toString();
}
export default converter;