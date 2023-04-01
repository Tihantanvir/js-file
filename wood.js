function woodCalculator(chairQuantity, tableQuantity, bedQuantity){

    const perChairwood = 3; 
    const perTableWood = 10;
    const perBedwood = 50;


    const chairWood = chairQuantity * perChairwood ;
    const tableWood = tableQuantity * perTableWood ;
    const bedWood = bedQuantity * perBedwood ;
    const totalWood = chairWood + tableWood + bedWood ;
    return totalWood;

}
const totalWood = woodCalculator(1, 1, 1);
console.log('total wood required ',totalWood);
