const trim = function (){
    let str = '     FunctionUp     ';
    console.log("trimmed the string white spaces: " + str.trim())
    console.log("changed the string to lower case: " + str.toLowerCase())
    console.log("changed the string to UPPER case: " + str.toUpperCase())
    return;
}

module.exports.trimming = trim;