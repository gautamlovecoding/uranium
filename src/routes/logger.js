let endpoint = "https://www.google.com"

let log = function(){
    console.log(module);
    console.log('I am inside log function');
}

module.exports.url = endpoint;  //to make public.
module.exports.logging = log  //to make public of function named function