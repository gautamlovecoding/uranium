let playersLists = function (req, res) {
    let data= req.body.name
    let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": ["swimming"]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": ["soccer"]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": ["soccer"]
       },
   ]
   let count = 0;
   for(i=0; i<players.length; i++){
        if(data === players[i].name){
           break;
        }else{
            count++
        }
   }
   if(count==players.length){
       players.push(req.body)
   }
   res.send({data : players})

}

module.exports.playersLists = playersLists;