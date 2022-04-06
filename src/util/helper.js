const curDate = new Date();

const printDate = function(){
    console.log('current Date is: ', curDate.getDate());
}
const printMonth = function(){
    console.log('current Month is:', curDate.getMonth()+1);
}
const getBatchInfo = function(){
    console.log('Uranium, Week3Day3, the topic covered today is node js, dependencies, module, npm pakages, git fetch etc..');
}


module.exports = {printDate, printMonth, getBatchInfo}