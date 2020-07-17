function feetToMile(n){
    if(n>=0)
    {
        return (n*(1/5280));
    }
    else{
        return "Feet can not be negative number";
    }  
}
var result=feetToMile(157);
console.log(result);




function woodCalcutator(chair,table,bedstead){
    if(chair<0 || table<0 || bedstead<0 || chair%1 != 0 || table%1 != 0 || bedstead%1 != 0){
        return "Plz insert valid number.";
    }
    else{
        return (1*chair+3*table+5*bedstead+" cubic feet");
    }  
}
var numOfChair=6;
var numOfTable=11;
var numOfBedstead=5;
var result=woodCalcutator(numOfChair,numOfTable,numOfBedstead);
console.log(result);



function brickCalcutor(floorNo){
    if(floorNo<=0 || floorNo%1 != 0){
        return "plz insert a valid floor number."
    }
    else if(floorNo<=10){
        return (15*floorNo)*1000;
    }
    else if(floorNo<=20){
      return (150+12*(floorNo-10))*1000;
  }
  else{
      return (150+120+10*(floorNo-20))*1000;
  }
}

var floorNo=26;
totalBrick=brickCalcutor(floorNo);
console.log(totalBrick);



function tinyFriend(nameList){
   
    if(nameList.length==0){                      //when array is empty.
        return "Plz fill up the araay first."
    }
    else{
        smallName=nameList[0];
        for(var i=0; i<nameList.length; i++){
              if(nameList[i].length<smallName.length){
                  smallName=nameList[i];
              } 
        }
        return smallName;
    }  
}
var nameList=['Sajib','Sana','Das','Samina','Ritu','Mim'];
shortestName=tinyFriend(nameList);
console.log(shortestName);
