//tabs
function openPage(evt, pageNumber) {
  var i, tabcontent;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(pageNumber).style.display = "block";
}



//p1
// gets modifiers for stats
function getStrMod() {
  let stat = document.getElementById('str').value;
  let statIWA = document.getElementById('strIWA').vlaue;
  let statExtra = document.getElementById('strBonus').value;
  let weaponStat = document.getElementById('weaponStr').value;
  let weaponStat2 = document.getElementById('weaponStr2').value;
  let weaponStat3 = document.getElementById('weaponStr3').value;
  let weaponStat4 = document.getElementById('weaponStr4').value;
  let weaponStat5 = document.getElementById('weaponStr5').value;
  let weaponStat6 = document.getElementById('weaponStr6').value;
  let weaponStat7 = document.getElementById('weaponStr7').value;
  let weaponStat8 = document.getElementById('weaponStr8').value;
  let weaponStat9 = document.getElementById('weaponStr9').value;
  let weaponStat10 = document.getElementById('weaponStr10').value;
  let totalWeaponStat = Math.floor(weaponStat) + Math.floor(weaponStat2) + Math.floor(weaponStat3) + Math.floor(weaponStat4) + Math.floor(weaponStat5) + Math.floor(weaponStat6) + Math.floor(weaponStat7) + Math.floor(weaponStat8) + Math.floor(weaponStat9) + Math.floor(weaponStat10);
  let armorStat = document.getElementById('armorStr').value;
  let armorStat2 = document.getElementById('armorStr2').value;
  let armorStat3 = document.getElementById('armorStr3').value;
  let armorStat4 = document.getElementById('armorStr4').value;
  let armorStat5 = document.getElementById('armorStr5').value;
  let armorStat6 = document.getElementById('armorStr6').value;
  let armorStat7 = document.getElementById('armorStr7').value;
  let armorStat8 = document.getElementById('armorStr8').value;
  let armorStat9 = document.getElementById('armorStr9').value;
  let armorStat10 = document.getElementById('armorStr10').value;
  let totalArmorStat = Math.floor(armorStat) + Math.floor(armorStat2) + Math.floor(armorStat3) + Math.floor(armorStat4) + Math.floor(armorStat5) + Math.floor(armorStat6) + Math.floor(armorStat7) + Math.floor(armorStat8) + Math.floor(armorStat9) + Math.floor(armorStat10);
  let shieldStat = document.getElementById('shieldStr').value;
  let shieldStat2 = document.getElementById('shieldStr2').value;
  let shieldStat3 = document.getElementById('shieldStr3').value;
  let shieldStat4 = document.getElementById('shieldStr4').value;
  let shieldStat5 = document.getElementById('shieldStr5').value;
  let shieldStat6 = document.getElementById('shieldStr6').value;
  let shieldStat7 = document.getElementById('shieldStr7').value;
  let shieldStat8 = document.getElementById('shieldStr8').value;
  let shieldStat9 = document.getElementById('shieldStr9').value;
  let shieldStat10 = document.getElementById('shieldStr10').value;
  let totalShieldStat = Math.floor(shieldStat) + Math.floor(shieldStat2) + Math.floor(shieldStat3) + Math.floor(shieldStat4) + Math.floor(shieldStat5) + Math.floor(shieldStat6) + Math.floor(shieldStat7) + Math.floor(shieldStat8) + Math.floor(shieldStat9) + Math.floor(shieldStat10);
  let itemStat = document.getElementById('itemStr').value;
  let itemStat2 = document.getElementById('itemStr2').value;
  let itemStat3 = document.getElementById('itemStr3').value;
  let itemStat4 = document.getElementById('itemStr4').value;
  let itemStat5 = document.getElementById('itemStr5').value;
  let itemStat6 = document.getElementById('itemStr6').value;
  let itemStat7 = document.getElementById('itemStr7').value;
  let itemStat8 = document.getElementById('itemStr8').value;
  let itemStat9 = document.getElementById('itemStr9').value;
  let itemStat10 = document.getElementById('itemStr10').value;
  let totalItemStat = Math.floor(itemStat) + Math.floor(itemStat2) + Math.floor(itemStat3) + Math.floor(itemStat4) + Math.floor(itemStat5) + Math.floor(itemStat6) + Math.floor(itemStat7) + Math.floor(itemStat8) + Math.floor(itemStat9) + Math.floor(itemStat10);
  let statModifier = Math.floor((stat / 2) + (totalWeaponStat / 2) + (totalArmorStat / 2) + (totalShieldStat / 2) + (totalItemStat / 2) + (statExtra / 2)) - 5;
  let statIWAVal = Math.floor(totalWeaponStat) + Math.floor(totalArmorStat) + Math.floor(totalShieldStat) + Math.floor(totalItemStat);

  document.getElementById('strIWA').innerHTML = 'Special Item/Weapon/Armor Bonus ' + statIWAVal; 
  document.getElementById('strModifier').innerHTML = statModifier;
}


function getDexMod() {
  let stat = document.getElementById('dex').value;
  let statIWA = document.getElementById('dexIWA').vlaue;
  let statExtra = document.getElementById('dexBonus').value;
  let weaponStat = document.getElementById('weaponDex').value;
  let weaponStat2 = document.getElementById('weaponDex2').value;
  let weaponStat3 = document.getElementById('weaponDex3').value;
  let weaponStat4 = document.getElementById('weaponDex4').value;
  let weaponStat5 = document.getElementById('weaponDex5').value;
  let weaponStat6 = document.getElementById('weaponDex6').value;
  let weaponStat7 = document.getElementById('weaponDex7').value;
  let weaponStat8 = document.getElementById('weaponDex8').value;
  let weaponStat9 = document.getElementById('weaponDex9').value;
  let weaponStat10 = document.getElementById('weaponDex10').value;
  let totalWeaponStat = Math.floor(weaponStat) + Math.floor(weaponStat2) + Math.floor(weaponStat3) + Math.floor(weaponStat4) + Math.floor(weaponStat5) + Math.floor(weaponStat6) + Math.floor(weaponStat7) + Math.floor(weaponStat8) + Math.floor(weaponStat9) + Math.floor(weaponStat10);
  let armorStat = document.getElementById('armorDex').value;
  let armorStat2 = document.getElementById('armorDex2').value;
  let armorStat3 = document.getElementById('armorDex3').value;
  let armorStat4 = document.getElementById('armorDex4').value;
  let armorStat5 = document.getElementById('armorDex5').value;
  let armorStat6 = document.getElementById('armorDex6').value;
  let armorStat7 = document.getElementById('armorDex7').value;
  let armorStat8 = document.getElementById('armorDex8').value;
  let armorStat9 = document.getElementById('armorDex9').value;
  let armorStat10 = document.getElementById('armorDex10').value;
  let totalArmorStat = Math.floor(armorStat) + Math.floor(armorStat2) + Math.floor(armorStat3) + Math.floor(armorStat4) + Math.floor(armorStat5) + Math.floor(armorStat6) + Math.floor(armorStat7) + Math.floor(armorStat8) + Math.floor(armorStat9) + Math.floor(armorStat10);
  let shieldStat = document.getElementById('shieldDex').value;
  let shieldStat2 = document.getElementById('shieldDex2').value;
  let shieldStat3 = document.getElementById('shieldDex3').value;
  let shieldStat4 = document.getElementById('shieldDex4').value;
  let shieldStat5 = document.getElementById('shieldDex5').value;
  let shieldStat6 = document.getElementById('shieldDex6').value;
  let shieldStat7 = document.getElementById('shieldDex7').value;
  let shieldStat8 = document.getElementById('shieldDex8').value;
  let shieldStat9 = document.getElementById('shieldDex9').value;
  let shieldStat10 = document.getElementById('shieldDex10').value;
  let totalShieldStat = Math.floor(shieldStat) + Math.floor(shieldStat2) + Math.floor(shieldStat3) + Math.floor(shieldStat4) + Math.floor(shieldStat5) + Math.floor(shieldStat6) + Math.floor(shieldStat7) + Math.floor(shieldStat8) + Math.floor(shieldStat9) + Math.floor(shieldStat10);
  let itemStat = document.getElementById('itemDex').value;
  let itemStat2 = document.getElementById('itemDex2').value;
  let itemStat3 = document.getElementById('itemDex3').value;
  let itemStat4 = document.getElementById('itemDex4').value;
  let itemStat5 = document.getElementById('itemDex5').value;
  let itemStat6 = document.getElementById('itemDex6').value;
  let itemStat7 = document.getElementById('itemDex7').value;
  let itemStat8 = document.getElementById('itemDex8').value;
  let itemStat9 = document.getElementById('itemDex9').value;
  let itemStat10 = document.getElementById('itemDex10').value;
  let totalItemStat = Math.floor(itemStat) + Math.floor(itemStat2) + Math.floor(itemStat3) + Math.floor(itemStat4) + Math.floor(itemStat5) + Math.floor(itemStat6) + Math.floor(itemStat7) + Math.floor(itemStat8) + Math.floor(itemStat9) + Math.floor(itemStat10);
  let statModifier = Math.floor((stat / 2) + (totalWeaponStat / 2) + (totalArmorStat / 2) + (totalShieldStat / 2) + (totalItemStat / 2) + (statExtra / 2)) - 5;
  let statIWAVal = Math.floor(totalWeaponStat) + Math.floor(totalArmorStat) + Math.floor(totalShieldStat) + Math.floor(totalItemStat);
  //values used to get AC
  let armorArm = document.getElementById('armorArm').value;
  let armorArm2 = document.getElementById('armorArm2').value;
  let armorArm3 = document.getElementById('armorArm3').value;
  let armorArm4 = document.getElementById('armorArm4').value;
  let armorArm5 = document.getElementById('armorArm5').value;
  let armorArm6 = document.getElementById('armorArm6').value;
  let armorArm7 = document.getElementById('armorArm7').value;
  let armorArm8 = document.getElementById('armorArm8').value;
  let armorArm9 = document.getElementById('armorArm9').value;
  let armorArm10 = document.getElementById('armorArm10').value;
  let totalArmorArm = Math.floor(armorArm) + Math.floor(armorArm2) + Math.floor(armorArm3) + Math.floor(armorArm4) + Math.floor(armorArm5) + Math.floor(armorArm6) + Math.floor(armorArm7) + Math.floor(armorArm8) + Math.floor(armorArm9) + Math.floor(armorArm10);
  let shieldArm = document.getElementById('shieldArm').value;
  let shieldArm2 = document.getElementById('shieldArm2').value;
  let shieldArm3 = document.getElementById('shieldArm3').value;
  let shieldArm4 = document.getElementById('shieldArm4').value;
  let shieldArm5 = document.getElementById('shieldArm5').value;
  let shieldArm6 = document.getElementById('shieldArm6').value;
  let shieldArm7 = document.getElementById('shieldArm7').value;
  let shieldArm8 = document.getElementById('shieldArm8').value;
  let shieldArm9 = document.getElementById('shieldArm9').value;
  let shieldArm10 = document.getElementById('shieldArm10').value;
  let totalShieldArm = Math.floor(shieldArm) + Math.floor(shieldArm2) + Math.floor(shieldArm3) + Math.floor(shieldArm4) + Math.floor(shieldArm5) + Math.floor(shieldArm6) + Math.floor(shieldArm7) + Math.floor(shieldArm8) + Math.floor(shieldArm9) + Math.floor(shieldArm10);
  let weaponArm = document.getElementById('weaponArm').value;
  let weaponArm2 = document.getElementById('weaponArm2').value;
  let weaponArm3 = document.getElementById('weaponArm3').value;
  let weaponArm4 = document.getElementById('weaponArm4').value;
  let weaponArm5 = document.getElementById('weaponArm5').value;
  let weaponArm6 = document.getElementById('weaponArm6').value;
  let weaponArm7 = document.getElementById('weaponArm7').value;
  let weaponArm8 = document.getElementById('weaponArm8').value;
  let weaponArm9 = document.getElementById('weaponArm9').value;
  let weaponArm10 = document.getElementById('weaponArm10').value;
  let totalWeaponArm = Math.floor(weaponArm) + Math.floor(weaponArm2) + Math.floor(weaponArm3) + Math.floor(weaponArm4) + Math.floor(weaponArm5) + Math.floor(weaponArm6) + Math.floor(weaponArm7) + Math.floor(weaponArm8) + Math.floor(weaponArm9) + Math.floor(weaponArm10);
  let itemArm = document.getElementById('itemArm').value;
  let itemArm2 = document.getElementById('itemArm2').value;
  let itemArm3 = document.getElementById('itemArm3').value;
  let itemArm4 = document.getElementById('itemArm4').value;
  let itemArm5 = document.getElementById('itemArm5').value;
  let itemArm6 = document.getElementById('itemArm6').value;
  let itemArm7 = document.getElementById('itemArm7').value;
  let itemArm8 = document.getElementById('itemArm8').value;
  let itemArm9 = document.getElementById('itemArm9').value;
  let itemArm10 = document.getElementById('itemArm10').value;
  let totalItemArm = Math.floor(itemArm) + Math.floor(itemArm2) + Math.floor(itemArm3) + Math.floor(itemArm4) + Math.floor(itemArm5) + Math.floor(itemArm6) + Math.floor(itemArm7) + Math.floor(itemArm8) + Math.floor(itemArm9) + Math.floor(itemArm10);
  let totalWeIArm = Math.floor(totalWeaponArm) + Math.floor(totalItemArm);
  let miscArm = document.getElementById('miscArm').value;
  //gets total AC
  let totalArm = Math.floor(statModifier) + Math.floor(totalArmorArm) + Math.floor(totalShieldArm) + Math.floor(totalWeaponArm) + Math.floor(totalItemArm) + Math.floor(miscArm);

  document.getElementById('dexIWA').innerHTML = 'Special Item/Weapon/Armor Bonus ' + statIWAVal;
  document.getElementById('dexModifier').innerHTML = statModifier;
  //puts dex modifier AC in
  document.getElementById('acDex').innerHTML = statModifier;
  //puts armor AC in
  document.getElementById('acArm').innerHTML = totalArmorArm;
  //puts shield AC in
  document.getElementById('acShi').innerHTML = totalShieldArm;
  //puts weapon AC in
  document.getElementById('acWeI').innerHTML = totalWeIArm;
  //puts total AC in
  document.getElementById('ac').innerHTML = totalArm;
}

/*
function getAtkBonus() {
  let weaponAtk = document.getElementById('weaponAtk').value;
  let weaponAtk2 = document.getElementById('weaponAtk2').value;
  let weaponAtk3 = document.getElementById('weaponAtk3').value;
  let weaponAtk4 = document.getElementById('weaponAtk4').value;
  let weaponAtk5 = document.getElementById('weaponAtk5').value;
  let weaponAtk6 = document.getElementById('weaponAtk6').value;
  let weaponAtk7 = document.getElementById('weaponAtk7').value;
  let weaponAtk8 = document.getElementById('weaponAtk8').value;
  let weaponAtk9 = document.getElementById('weaponAtk9').value;
  let weaponAtk10 = document.getElementById('weaponAtk10').value;
  let totalWeaponAtk = Math.floor(weaponAtk10) + Math.floor(weaponAtk9) + Math.floor(weaponAtk8) + Math.floor(weaponAtk7) + Math.floor(weaponAtk6) + Math.floor(weaponAtk5) + Math.floor(weaponAtk4) + Math.floor(weaponAtk3) + Math.floor(weaponAtk2) + Math.floor(weaponAtk);
  let armorAtk = document.getElementById('armorAtk').value;
  let armorAtk2 = document.getElementById('armorAtk2').value;
  let armorAtk3 = document.getElementById('armorAtk3').value;
  let armorAtk4 = document.getElementById('armorAtk4').value;
  let armorAtk5 = document.getElementById('armorAtk5').value;
  let armorAtk6 = document.getElementById('armorAtk6').value;
  let armorAtk7 = document.getElementById('armorAtk7').value;
  let armorAtk8 = document.getElementById('armorAtk8').value;
  let armorAtk9 = document.getElementById('armorAtk9').value;
  let armorAtk10 = document.getElementById('armorAtk10').value;
  let totalArmorAtk = Math.floor(armorAtk10) + Math.floor(armorAtk9) + Math.floor(armorAtk8) + Math.floor(armorAtk7) + Math.floor(armorAtk6) + Math.floor(armorAtk5) + Math.floor(armorAtk4) + Math.floor(armorAtk3) + Math.floor(armorAtk2) + Math.floor(armorAtk);
  let shieldAtk = document.getElementById('shieldAtk').value;
  let shieldAtk2 = document.getElementById('shieldAtk2').value;
  let shieldAtk3 = document.getElementById('shieldAtk3').value;
  let shieldAtk4 = document.getElementById('shieldAtk4').value;
  let shieldAtk5 = document.getElementById('shieldAtk5').value;
  let shieldAtk6 = document.getElementById('shieldAtk6').value;
  let shieldAtk7 = document.getElementById('shieldAtk7').value;
  let shieldAtk8 = document.getElementById('shieldAtk8').value;
  let shieldAtk9 = document.getElementById('shieldAtk9').value;
  let shieldAtk10 = document.getElementById('shieldAtk10').value;
  let totalShieldAtk = Math.floor(shieldAtk10) + Math.floor(shieldAtk9) + Math.floor(shieldAtk8) + Math.floor(shieldAtk7) + Math.floor(shieldAtk6) + Math.floor(shieldAtk5) + Math.floor(shieldAtk4) + Math.floor(shieldAtk3) + Math.floor(shieldAtk2) + Math.floor(shieldAtk);
  let itemAtk = document.getElementById('itemAtk').value;
  let itemAtk2 = document.getElementById('itemAtk2').value;
  let itemAtk3 = document.getElementById('itemAtk3').value;
  let itemAtk4 = document.getElementById('itemAtk4').value;
  let itemAtk5 = document.getElementById('itemAtk5').value;
  let itemAtk6 = document.getElementById('itemAtk6').value;
  let itemAtk7 = document.getElementById('itemAtk7').value;
  let itemAtk8 = document.getElementById('itemAtk8').value;
  let itemAtk9 = document.getElementById('itemAtk9').value;
  let itemAtk10 = document.getElementById('itemAtk10').value;
  let totalItemAtk = Math.floor(itemAtk10) + Math.floor(itemAtk9) + Math.floor(itemAtk8) + Math.floor(itemAtk7) + Math.floor(itemAtk6) + Math.floor(itemAtk5) + Math.floor(itemAtk4) + Math.floor(itemAtk3) + Math.floor(itemAtk2) + Math.floor(itemAtk);
  let totalAtkBonus = Math.floor(totalWeaponAtk) + Math.floor(totalArmorAtk) + Math.floor(totalShieldAtk) + Math.floor(totalItemAtk);
  document.getElementById('atkBonus').innerHTML = totalAtkBonus;
}
*/


function getConMod() {
  let stat = document.getElementById('con').value;
  let statIWA = document.getElementById('conIWA').vlaue;
  let statExtra = document.getElementById('conBonus').value;
  let weaponStat = document.getElementById('weaponCon').value;
  let weaponStat2 = document.getElementById('weaponCon2').value;
  let weaponStat3 = document.getElementById('weaponCon3').value;
  let weaponStat4 = document.getElementById('weaponCon4').value;
  let weaponStat5 = document.getElementById('weaponCon5').value;
  let weaponStat6 = document.getElementById('weaponCon6').value;
  let weaponStat7 = document.getElementById('weaponCon7').value;
  let weaponStat8 = document.getElementById('weaponCon8').value;
  let weaponStat9 = document.getElementById('weaponCon9').value;
  let weaponStat10 = document.getElementById('weaponCon10').value;
  let totalWeaponStat = Math.floor(weaponStat) + Math.floor(weaponStat2) + Math.floor(weaponStat3) + Math.floor(weaponStat4) + Math.floor(weaponStat5) + Math.floor(weaponStat6) + Math.floor(weaponStat7) + Math.floor(weaponStat8) + Math.floor(weaponStat9) + Math.floor(weaponStat10);
  let armorStat = document.getElementById('armorCon').value;
  let armorStat2 = document.getElementById('armorCon2').value;
  let armorStat3 = document.getElementById('armorCon3').value;
  let armorStat4 = document.getElementById('armorCon4').value;
  let armorStat5 = document.getElementById('armorCon5').value;
  let armorStat6 = document.getElementById('armorCon6').value;
  let armorStat7 = document.getElementById('armorCon7').value;
  let armorStat8 = document.getElementById('armorCon8').value;
  let armorStat9 = document.getElementById('armorCon9').value;
  let armorStat10 = document.getElementById('armorCon10').value;
  let totalArmorStat = Math.floor(armorStat) + Math.floor(armorStat2) + Math.floor(armorStat3) + Math.floor(armorStat4) + Math.floor(armorStat5) + Math.floor(armorStat6) + Math.floor(armorStat7) + Math.floor(armorStat8) + Math.floor(armorStat9) + Math.floor(armorStat10);
  let shieldStat = document.getElementById('shieldCon').value;
  let shieldStat2 = document.getElementById('shieldCon2').value;
  let shieldStat3 = document.getElementById('shieldCon3').value;
  let shieldStat4 = document.getElementById('shieldCon4').value;
  let shieldStat5 = document.getElementById('shieldCon5').value;
  let shieldStat6 = document.getElementById('shieldCon6').value;
  let shieldStat7 = document.getElementById('shieldCon7').value;
  let shieldStat8 = document.getElementById('shieldCon8').value;
  let shieldStat9 = document.getElementById('shieldCon9').value;
  let shieldStat10 = document.getElementById('shieldCon10').value;
  let totalShieldStat = Math.floor(shieldStat) + Math.floor(shieldStat2) + Math.floor(shieldStat3) + Math.floor(shieldStat4) + Math.floor(shieldStat5) + Math.floor(shieldStat6) + Math.floor(shieldStat7) + Math.floor(shieldStat8) + Math.floor(shieldStat9) + Math.floor(shieldStat10);
  let itemStat = document.getElementById('itemCon').value;
  let itemStat2 = document.getElementById('itemCon2').value;
  let itemStat3 = document.getElementById('itemCon3').value;
  let itemStat4 = document.getElementById('itemCon4').value;
  let itemStat5 = document.getElementById('itemCon5').value;
  let itemStat6 = document.getElementById('itemCon6').value;
  let itemStat7 = document.getElementById('itemCon7').value;
  let itemStat8 = document.getElementById('itemCon8').value;
  let itemStat9 = document.getElementById('itemCon9').value;
  let itemStat10 = document.getElementById('itemCon10').value;
  let totalItemStat = Math.floor(itemStat) + Math.floor(itemStat2) + Math.floor(itemStat3) + Math.floor(itemStat4) + Math.floor(itemStat5) + Math.floor(itemStat6) + Math.floor(itemStat7) + Math.floor(itemStat8) + Math.floor(itemStat9) + Math.floor(itemStat10);
  let statModifier = Math.floor((stat / 2) + (totalWeaponStat / 2) + (totalArmorStat / 2) + (totalShieldStat / 2) + (totalItemStat / 2) + (statExtra / 2)) - 5;
  let statIWAVal = Math.floor(totalWeaponStat) + Math.floor(totalArmorStat) + Math.floor(totalShieldStat) + Math.floor(totalItemStat);

  document.getElementById('conIWA').innerHTML = 'Special Item/Weapon/Armor Bonus ' + statIWAVal; 
  document.getElementById('conModifier').innerHTML = statModifier;
}


function getIntMod() {
  let stat = document.getElementById('int').value;
  let statIWA = document.getElementById('intIWA').vlaue;
  let statExtra = document.getElementById('intBonus').value;
  let weaponStat = document.getElementById('weaponInt').value;
  let weaponStat2 = document.getElementById('weaponInt2').value;
  let weaponStat3 = document.getElementById('weaponInt3').value;
  let weaponStat4 = document.getElementById('weaponInt4').value;
  let weaponStat5 = document.getElementById('weaponInt5').value;
  let weaponStat6 = document.getElementById('weaponInt6').value;
  let weaponStat7 = document.getElementById('weaponInt7').value;
  let weaponStat8 = document.getElementById('weaponInt8').value;
  let weaponStat9 = document.getElementById('weaponInt9').value;
  let weaponStat10 = document.getElementById('weaponInt10').value;
  let totalWeaponStat = Math.floor(weaponStat) + Math.floor(weaponStat2) + Math.floor(weaponStat3) + Math.floor(weaponStat4) + Math.floor(weaponStat5) + Math.floor(weaponStat6) + Math.floor(weaponStat7) + Math.floor(weaponStat8) + Math.floor(weaponStat9) + Math.floor(weaponStat10);
  let armorStat = document.getElementById('armorInt').value;
  let armorStat2 = document.getElementById('armorInt2').value;
  let armorStat3 = document.getElementById('armorInt3').value;
  let armorStat4 = document.getElementById('armorInt4').value;
  let armorStat5 = document.getElementById('armorInt5').value;
  let armorStat6 = document.getElementById('armorInt6').value;
  let armorStat7 = document.getElementById('armorInt7').value;
  let armorStat8 = document.getElementById('armorInt8').value;
  let armorStat9 = document.getElementById('armorInt9').value;
  let armorStat10 = document.getElementById('armorInt10').value;
  let totalArmorStat = Math.floor(armorStat) + Math.floor(armorStat2) + Math.floor(armorStat3) + Math.floor(armorStat4) + Math.floor(armorStat5) + Math.floor(armorStat6) + Math.floor(armorStat7) + Math.floor(armorStat8) + Math.floor(armorStat9) + Math.floor(armorStat10);
  let shieldStat = document.getElementById('shieldInt').value;
  let shieldStat2 = document.getElementById('shieldInt2').value;
  let shieldStat3 = document.getElementById('shieldInt3').value;
  let shieldStat4 = document.getElementById('shieldInt4').value;
  let shieldStat5 = document.getElementById('shieldInt5').value;
  let shieldStat6 = document.getElementById('shieldInt6').value;
  let shieldStat7 = document.getElementById('shieldInt7').value;
  let shieldStat8 = document.getElementById('shieldInt8').value;
  let shieldStat9 = document.getElementById('shieldInt9').value;
  let shieldStat10 = document.getElementById('shieldInt10').value;
  let totalShieldStat = Math.floor(shieldStat) + Math.floor(shieldStat2) + Math.floor(shieldStat3) + Math.floor(shieldStat4) + Math.floor(shieldStat5) + Math.floor(shieldStat6) + Math.floor(shieldStat7) + Math.floor(shieldStat8) + Math.floor(shieldStat9) + Math.floor(shieldStat10);
  let itemStat = document.getElementById('itemInt').value;
  let itemStat2 = document.getElementById('itemInt2').value;
  let itemStat3 = document.getElementById('itemInt3').value;
  let itemStat4 = document.getElementById('itemInt4').value;
  let itemStat5 = document.getElementById('itemInt5').value;
  let itemStat6 = document.getElementById('itemInt6').value;
  let itemStat7 = document.getElementById('itemInt7').value;
  let itemStat8 = document.getElementById('itemInt8').value;
  let itemStat9 = document.getElementById('itemInt9').value;
  let itemStat10 = document.getElementById('itemInt10').value;
  let totalItemStat = Math.floor(itemStat) + Math.floor(itemStat2) + Math.floor(itemStat3) + Math.floor(itemStat4) + Math.floor(itemStat5) + Math.floor(itemStat6) + Math.floor(itemStat7) + Math.floor(itemStat8) + Math.floor(itemStat9) + Math.floor(itemStat10);
  let statModifier = Math.floor((stat / 2) + (totalWeaponStat / 2) + (totalArmorStat / 2) + (totalShieldStat / 2) + (totalItemStat / 2) + (statExtra / 2)) - 5;
  let statIWAVal = Math.floor(totalWeaponStat) + Math.floor(totalArmorStat) + Math.floor(totalShieldStat) + Math.floor(totalItemStat);

  document.getElementById('intIWA').innerHTML = 'Special Item/Weapon/Armor Bonus ' + statIWAVal; 
  document.getElementById('intModifier').innerHTML = statModifier;
}


function getWisMod() {
  let stat = document.getElementById('wis').value;
  let statIWA = document.getElementById('wisIWA').vlaue;
  let statExtra = document.getElementById('wisBonus').value;
  let weaponStat = document.getElementById('weaponWis').value;
  let weaponStat2 = document.getElementById('weaponWis2').value;
  let weaponStat3 = document.getElementById('weaponWis3').value;
  let weaponStat4 = document.getElementById('weaponWis4').value;
  let weaponStat5 = document.getElementById('weaponWis5').value;
  let weaponStat6 = document.getElementById('weaponWis6').value;
  let weaponStat7 = document.getElementById('weaponWis7').value;
  let weaponStat8 = document.getElementById('weaponWis8').value;
  let weaponStat9 = document.getElementById('weaponWis9').value;
  let weaponStat10 = document.getElementById('weaponWis10').value;
  let totalWeaponStat = Math.floor(weaponStat) + Math.floor(weaponStat2) + Math.floor(weaponStat3) + Math.floor(weaponStat4) + Math.floor(weaponStat5) + Math.floor(weaponStat6) + Math.floor(weaponStat7) + Math.floor(weaponStat8) + Math.floor(weaponStat9) + Math.floor(weaponStat10);
  let armorStat = document.getElementById('armorWis').value;
  let armorStat2 = document.getElementById('armorWis2').value;
  let armorStat3 = document.getElementById('armorWis3').value;
  let armorStat4 = document.getElementById('armorWis4').value;
  let armorStat5 = document.getElementById('armorWis5').value;
  let armorStat6 = document.getElementById('armorWis6').value;
  let armorStat7 = document.getElementById('armorWis7').value;
  let armorStat8 = document.getElementById('armorWis8').value;
  let armorStat9 = document.getElementById('armorWis9').value;
  let armorStat10 = document.getElementById('armorWis10').value;
  let totalArmorStat = Math.floor(armorStat) + Math.floor(armorStat2) + Math.floor(armorStat3) + Math.floor(armorStat4) + Math.floor(armorStat5) + Math.floor(armorStat6) + Math.floor(armorStat7) + Math.floor(armorStat8) + Math.floor(armorStat9) + Math.floor(armorStat10);
  let shieldStat = document.getElementById('shieldWis').value;
  let shieldStat2 = document.getElementById('shieldWis2').value;
  let shieldStat3 = document.getElementById('shieldWis3').value;
  let shieldStat4 = document.getElementById('shieldWis4').value;
  let shieldStat5 = document.getElementById('shieldWis5').value;
  let shieldStat6 = document.getElementById('shieldWis6').value;
  let shieldStat7 = document.getElementById('shieldWis7').value;
  let shieldStat8 = document.getElementById('shieldWis8').value;
  let shieldStat9 = document.getElementById('shieldWis9').value;
  let shieldStat10 = document.getElementById('shieldWis10').value;
  let totalShieldStat = Math.floor(shieldStat) + Math.floor(shieldStat2) + Math.floor(shieldStat3) + Math.floor(shieldStat4) + Math.floor(shieldStat5) + Math.floor(shieldStat6) + Math.floor(shieldStat7) + Math.floor(shieldStat8) + Math.floor(shieldStat9) + Math.floor(shieldStat10);
  let itemStat = document.getElementById('itemWis').value;
  let itemStat2 = document.getElementById('itemWis2').value;
  let itemStat3 = document.getElementById('itemWis3').value;
  let itemStat4 = document.getElementById('itemWis4').value;
  let itemStat5 = document.getElementById('itemWis5').value;
  let itemStat6 = document.getElementById('itemWis6').value;
  let itemStat7 = document.getElementById('itemWis7').value;
  let itemStat8 = document.getElementById('itemWis8').value;
  let itemStat9 = document.getElementById('itemWis9').value;
  let itemStat10 = document.getElementById('itemWis10').value;
  let totalItemStat = Math.floor(itemStat) + Math.floor(itemStat2) + Math.floor(itemStat3) + Math.floor(itemStat4) + Math.floor(itemStat5) + Math.floor(itemStat6) + Math.floor(itemStat7) + Math.floor(itemStat8) + Math.floor(itemStat9) + Math.floor(itemStat10);
  let statModifier = Math.floor((stat / 2) + (totalWeaponStat / 2) + (totalArmorStat / 2) + (totalShieldStat / 2) + (totalItemStat / 2) + (statExtra / 2)) - 5;
  let statIWAVal = Math.floor(totalWeaponStat) + Math.floor(totalArmorStat) + Math.floor(totalShieldStat) + Math.floor(totalItemStat);

  document.getElementById('wisIWA').innerHTML = 'Special Item/Weapon/Armor Bonus ' + statIWAVal; 
  document.getElementById('wisModifier').innerHTML = statModifier;
}


function getChaMod() {
  let stat = document.getElementById('cha').value;
  let statIWA = document.getElementById('chaIWA').vlaue;
  let statExtra = document.getElementById('chaBonus').value;
  let weaponStat = document.getElementById('weaponCha').value;
  let weaponStat2 = document.getElementById('weaponCha2').value;
  let weaponStat3 = document.getElementById('weaponCha3').value;
  let weaponStat4 = document.getElementById('weaponCha4').value;
  let weaponStat5 = document.getElementById('weaponCha5').value;
  let weaponStat6 = document.getElementById('weaponCha6').value;
  let weaponStat7 = document.getElementById('weaponCha7').value;
  let weaponStat8 = document.getElementById('weaponCha8').value;
  let weaponStat9 = document.getElementById('weaponCha9').value;
  let weaponStat10 = document.getElementById('weaponCha10').value;
  let totalWeaponStat = Math.floor(weaponStat) + Math.floor(weaponStat2) + Math.floor(weaponStat3) + Math.floor(weaponStat4) + Math.floor(weaponStat5) + Math.floor(weaponStat6) + Math.floor(weaponStat7) + Math.floor(weaponStat8) + Math.floor(weaponStat9) + Math.floor(weaponStat10);
  let armorStat = document.getElementById('armorCha').value;
  let armorStat2 = document.getElementById('armorCha2').value;
  let armorStat3 = document.getElementById('armorCha3').value;
  let armorStat4 = document.getElementById('armorCha4').value;
  let armorStat5 = document.getElementById('armorCha5').value;
  let armorStat6 = document.getElementById('armorCha6').value;
  let armorStat7 = document.getElementById('armorCha7').value;
  let armorStat8 = document.getElementById('armorCha8').value;
  let armorStat9 = document.getElementById('armorCha9').value;
  let armorStat10 = document.getElementById('armorCha10').value;
  let totalArmorStat = Math.floor(armorStat) + Math.floor(armorStat2) + Math.floor(armorStat3) + Math.floor(armorStat4) + Math.floor(armorStat5) + Math.floor(armorStat6) + Math.floor(armorStat7) + Math.floor(armorStat8) + Math.floor(armorStat9) + Math.floor(armorStat10);
  let shieldStat = document.getElementById('shieldCha').value;
  let shieldStat2 = document.getElementById('shieldCha2').value;
  let shieldStat3 = document.getElementById('shieldCha3').value;
  let shieldStat4 = document.getElementById('shieldCha4').value;
  let shieldStat5 = document.getElementById('shieldCha5').value;
  let shieldStat6 = document.getElementById('shieldCha6').value;
  let shieldStat7 = document.getElementById('shieldCha7').value;
  let shieldStat8 = document.getElementById('shieldCha8').value;
  let shieldStat9 = document.getElementById('shieldCha9').value;
  let shieldStat10 = document.getElementById('shieldCha10').value;
  let totalShieldStat = Math.floor(shieldStat) + Math.floor(shieldStat2) + Math.floor(shieldStat3) + Math.floor(shieldStat4) + Math.floor(shieldStat5) + Math.floor(shieldStat6) + Math.floor(shieldStat7) + Math.floor(shieldStat8) + Math.floor(shieldStat9) + Math.floor(shieldStat10);
  let itemStat = document.getElementById('itemCha').value;
  let itemStat2 = document.getElementById('itemCha2').value;
  let itemStat3 = document.getElementById('itemCha3').value;
  let itemStat4 = document.getElementById('itemCha4').value;
  let itemStat5 = document.getElementById('itemCha5').value;
  let itemStat6 = document.getElementById('itemCha6').value;
  let itemStat7 = document.getElementById('itemCha7').value;
  let itemStat8 = document.getElementById('itemCha8').value;
  let itemStat9 = document.getElementById('itemCha9').value;
  let itemStat10 = document.getElementById('itemCha10').value;
  let totalItemStat = Math.floor(itemStat) + Math.floor(itemStat2) + Math.floor(itemStat3) + Math.floor(itemStat4) + Math.floor(itemStat5) + Math.floor(itemStat6) + Math.floor(itemStat7) + Math.floor(itemStat8) + Math.floor(itemStat9) + Math.floor(itemStat10);
  let statModifier = Math.floor((stat / 2) + (totalWeaponStat / 2) + (totalArmorStat / 2) + (totalShieldStat / 2) + (totalItemStat / 2) + (statExtra / 2)) - 5;
  let statIWAVal = Math.floor(totalWeaponStat) + Math.floor(totalArmorStat) + Math.floor(totalShieldStat) + Math.floor(totalItemStat);

  document.getElementById('chaIWA').innerHTML = 'Special Item/Weapon/Armor Bonus ' + statIWAVal; 
  document.getElementById('chaModifier').innerHTML = statModifier;
}



//p2
//weapon stats
function showWeaponStatMods() {
  let statMods = document.getElementById('weaponStatMods');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function addWeapon () {
  let two = document.getElementById('wTwo');
  let three = document.getElementById('wThree');
  let four = document.getElementById('wFour');
  let five = document.getElementById('wFive');
  let six = document.getElementById('wSix');
  let seven = document.getElementById('wSeven');
  let eight = document.getElementById('wEight');
  let nine = document.getElementById('wNine');
  let ten = document.getElementById('wTen');

  if ((two.style.display !== 'block')) {
    two.style.display = 'block'; 
  } else  if ((three.style.display !== 'block')) {
    three.style.display = 'block';
  } else  if ((four.style.display !== 'block')) {
    four.style.display = 'block';
  } else  if ((five.style.display !== 'block')) {
    five.style.display = 'block';
  } else  if ((six.style.display !== 'block')) {
    six.style.display = 'block';
  } else  if ((seven.style.display !== 'block')) {
    seven.style.display = 'block';
  } else  if ((eight.style.display !== 'block')) {
    eight.style.display = 'block';
  } else  if ((nine.style.display !== 'block')) {
    nine.style.display = 'block';
  } else {
    ten.style.display = 'block';
  }
}



function addArmor() {
  let two = document.getElementById('aTwo');
  let three = document.getElementById('aThree');
  let four = document.getElementById('aFour');
  let five = document.getElementById('aFive');
  let six = document.getElementById('aSix');
  let seven = document.getElementById('aSeven');
  let eight = document.getElementById('aEight');
  let nine = document.getElementById('aNine');
  let ten = document.getElementById('aTen');

  if ((two.style.display !== 'block')) {
    two.style.display = 'block'; 
  } else  if ((three.style.display !== 'block')) {
    three.style.display = 'block';
  } else  if ((four.style.display !== 'block')) {
    four.style.display = 'block';
  } else  if ((five.style.display !== 'block')) {
    five.style.display = 'block';
  } else  if ((six.style.display !== 'block')) {
    six.style.display = 'block';
  } else  if ((seven.style.display !== 'block')) {
    seven.style.display = 'block';
  } else  if ((eight.style.display !== 'block')) {
    eight.style.display = 'block';
  } else  if ((nine.style.display !== 'block')) {
    nine.style.display = 'block';
  } else {
    ten.style.display = 'block';
  }
}

function addShield() {
  let two = document.getElementById('sTwo');
  let three = document.getElementById('sThree');
  let four = document.getElementById('sFour');
  let five = document.getElementById('sFive');
  let six = document.getElementById('sSix');
  let seven = document.getElementById('sSeven');
  let eight = document.getElementById('sEight');
  let nine = document.getElementById('sNine');
  let ten = document.getElementById('sTen');

  if ((two.style.display !== 'block')) {
    two.style.display = 'block'; 
  } else  if ((three.style.display !== 'block')) {
    three.style.display = 'block';
  } else  if ((four.style.display !== 'block')) {
    four.style.display = 'block';
  } else  if ((five.style.display !== 'block')) {
    five.style.display = 'block';
  } else  if ((six.style.display !== 'block')) {
    six.style.display = 'block';
  } else  if ((seven.style.display !== 'block')) {
    seven.style.display = 'block';
  } else  if ((eight.style.display !== 'block')) {
    eight.style.display = 'block';
  } else  if ((nine.style.display !== 'block')) {
    nine.style.display = 'block';
  } else {
    ten.style.display = 'block';
  }
}

function addItem() {
  let two = document.getElementById('iTwo');
  let three = document.getElementById('iThree');
  let four = document.getElementById('iFour');
  let five = document.getElementById('iFive');
  let six = document.getElementById('iSix');
  let seven = document.getElementById('iSeven');
  let eight = document.getElementById('iEight');
  let nine = document.getElementById('iNine');
  let ten = document.getElementById('iTen');

  if ((two.style.display !== 'block')) {
    two.style.display = 'block'; 
  } else  if ((three.style.display !== 'block')) {
    three.style.display = 'block';
  } else  if ((four.style.display !== 'block')) {
    four.style.display = 'block';
  } else  if ((five.style.display !== 'block')) {
    five.style.display = 'block';
  } else  if ((six.style.display !== 'block')) {
    six.style.display = 'block';
  } else  if ((seven.style.display !== 'block')) {
    seven.style.display = 'block';
  } else  if ((eight.style.display !== 'block')) {
    eight.style.display = 'block';
  } else  if ((nine.style.display !== 'block')) {
    nine.style.display = 'block';
  } else {
    ten.style.display = 'block';
  }
}




function showWeaponStatMods2() {
  let statMods = document.getElementById('weaponStatMods2');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showWeaponStatMods3() {
  let statMods = document.getElementById('weaponStatMods3');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showWeaponStatMods4() {
  let statMods = document.getElementById('weaponStatMods4');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showWeaponStatMods5() {
  let statMods = document.getElementById('weaponStatMods5');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showWeaponStatMods6() {
  let statMods = document.getElementById('weaponStatMods6');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showWeaponStatMods7() {
  let statMods = document.getElementById('weaponStatMods7');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showWeaponStatMods8() {
  let statMods = document.getElementById('weaponStatMods8');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showWeaponStatMods9() {
  let statMods = document.getElementById('weaponStatMods9');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showWeaponStatMods10() {
  let statMods = document.getElementById('weaponStatMods10');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}


//armor stats
function showArmorStatMods() {
  let statMods = document.getElementById('armorStatMods');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showArmorStatMods2() {
  let statMods = document.getElementById('armorStatMods2');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showArmorStatMods3() {
  let statMods = document.getElementById('armorStatMods3');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showArmorStatMods4() {
  let statMods = document.getElementById('armorStatMods4');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showArmorStatMods5() {
  let statMods = document.getElementById('armorStatMods5');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showArmorStatMods6() {
  let statMods = document.getElementById('armorStatMods6');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showArmorStatMods7() {
  let statMods = document.getElementById('armorStatMods7');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showArmorStatMods8() {
  let statMods = document.getElementById('armorStatMods8');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showArmorStatMods9() {
  let statMods = document.getElementById('armorStatMods9');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showArmorStatMods10() {
  let statMods = document.getElementById('armorStatMods10');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}



//shield stats
function showShieldStatMods() {
  let statMods = document.getElementById('shieldStatMods');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showShieldStatMods2() {
  let statMods = document.getElementById('shieldStatMods2');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showShieldStatMods3() {
  let statMods = document.getElementById('shieldStatMods3');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showShieldStatMods4() {
  let statMods = document.getElementById('shieldStatMods4');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showShieldStatMods5() {
  let statMods = document.getElementById('shieldStatMods5');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showShieldStatMods6() {
  let statMods = document.getElementById('shieldStatMods6');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showShieldStatMods7() {
  let statMods = document.getElementById('shieldStatMods7');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showShieldStatMods8() {
  let statMods = document.getElementById('shieldStatMods8');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showShieldStatMods9() {
  let statMods = document.getElementById('shieldStatMods9');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showShieldStatMods10() {
  let statMods = document.getElementById('shieldStatMods10');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}



//item stats
function showItemStatMods() {
  let statMods = document.getElementById('itemStatMods');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showItemStatMods2() {
  let statMods = document.getElementById('itemStatMods2');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showItemStatMods3() {
  let statMods = document.getElementById('itemStatMods3');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showItemStatMods4() {
  let statMods = document.getElementById('itemStatMods4');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showItemStatMods5() {
  let statMods = document.getElementById('itemStatMods5');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showItemStatMods6() {
  let statMods = document.getElementById('itemStatMods6');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showItemStatMods7() {
  let statMods = document.getElementById('itemStatMods7');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showItemStatMods8() {
  let statMods = document.getElementById('itemStatMods8');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showItemStatMods9() {
  let statMods = document.getElementById('itemStatMods9');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}

function showItemStatMods10() {
  let statMods = document.getElementById('itemStatMods10');

  if (statMods.style.display === 'block') {
    statMods.style.display = 'none';
  } else {
    statMods.style.display = 'block';
  }
}


//gets Atk bonus
function getAtkBonus() {
  let weaponAtk = document.getElementById('weaponAtk').value;
  let weaponAtk2 = document.getElementById('weaponAtk2').value;
  let weaponAtk3 = document.getElementById('weaponAtk3').value;
  let weaponAtk4 = document.getElementById('weaponAtk4').value;
  let weaponAtk5 = document.getElementById('weaponAtk5').value;
  let weaponAtk6 = document.getElementById('weaponAtk6').value;
  let weaponAtk7 = document.getElementById('weaponAtk7').value;
  let weaponAtk8 = document.getElementById('weaponAtk8').value;
  let weaponAtk9 = document.getElementById('weaponAtk9').value;
  let weaponAtk10 = document.getElementById('weaponAtk10').value;
  let totalWeaponAtk = Math.floor(weaponAtk10) + Math.floor(weaponAtk9) + Math.floor(weaponAtk8) + Math.floor(weaponAtk7) + Math.floor(weaponAtk6) + Math.floor(weaponAtk5) + Math.floor(weaponAtk4) + Math.floor(weaponAtk3) + Math.floor(weaponAtk2) + Math.floor(weaponAtk);
  let armorAtk = document.getElementById('armorAtk').value;
  let armorAtk2 = document.getElementById('armorAtk2').value;
  let armorAtk3 = document.getElementById('armorAtk3').value;
  let armorAtk4 = document.getElementById('armorAtk4').value;
  let armorAtk5 = document.getElementById('armorAtk5').value;
  let armorAtk6 = document.getElementById('armorAtk6').value;
  let armorAtk7 = document.getElementById('armorAtk7').value;
  let armorAtk8 = document.getElementById('armorAtk8').value;
  let armorAtk9 = document.getElementById('armorAtk9').value;
  let armorAtk10 = document.getElementById('armorAtk10').value;
  let totalArmorAtk = Math.floor(armorAtk10) + Math.floor(armorAtk9) + Math.floor(armorAtk8) + Math.floor(armorAtk7) + Math.floor(armorAtk6) + Math.floor(armorAtk5) + Math.floor(armorAtk4) + Math.floor(armorAtk3) + Math.floor(armorAtk2) + Math.floor(armorAtk);
  let shieldAtk = document.getElementById('shieldAtk').value;
  let shieldAtk2 = document.getElementById('shieldAtk2').value;
  let shieldAtk3 = document.getElementById('shieldAtk3').value;
  let shieldAtk4 = document.getElementById('shieldAtk4').value;
  let shieldAtk5 = document.getElementById('shieldAtk5').value;
  let shieldAtk6 = document.getElementById('shieldAtk6').value;
  let shieldAtk7 = document.getElementById('shieldAtk7').value;
  let shieldAtk8 = document.getElementById('shieldAtk8').value;
  let shieldAtk9 = document.getElementById('shieldAtk9').value;
  let shieldAtk10 = document.getElementById('shieldAtk10').value;
  let totalShieldAtk = Math.floor(shieldAtk10) + Math.floor(shieldAtk9) + Math.floor(shieldAtk8) + Math.floor(shieldAtk7) + Math.floor(shieldAtk6) + Math.floor(shieldAtk5) + Math.floor(shieldAtk4) + Math.floor(shieldAtk3) + Math.floor(shieldAtk2) + Math.floor(shieldAtk);
  let itemAtk = document.getElementById('itemAtk').value;
  let itemAtk2 = document.getElementById('itemAtk2').value;
  let itemAtk3 = document.getElementById('itemAtk3').value;
  let itemAtk4 = document.getElementById('itemAtk4').value;
  let itemAtk5 = document.getElementById('itemAtk5').value;
  let itemAtk6 = document.getElementById('itemAtk6').value;
  let itemAtk7 = document.getElementById('itemAtk7').value;
  let itemAtk8 = document.getElementById('itemAtk8').value;
  let itemAtk9 = document.getElementById('itemAtk9').value;
  let itemAtk10 = document.getElementById('itemAtk10').value;
  let totalItemAtk = Math.floor(itemAtk10) + Math.floor(itemAtk9) + Math.floor(itemAtk8) + Math.floor(itemAtk7) + Math.floor(itemAtk6) + Math.floor(itemAtk5) + Math.floor(itemAtk4) + Math.floor(itemAtk3) + Math.floor(itemAtk2) + Math.floor(itemAtk);
  let totalAtkBonus = Math.floor(totalWeaponAtk) + Math.floor(totalArmorAtk) + Math.floor(totalShieldAtk) + Math.floor(totalItemAtk);
  document.getElementById('atkBonus').innerHTML = totalAtkBonus;
}



//p3



//p4
//adds feat when button clicked
function addFeat(feats , textarea , featBox) {
  let fts = document.getElementById('feats');
  let newElement = document.createElement('textarea');
  newElement.setAttribute('class' , 'featBox');
  fts.appendChild(newElement);
}

function removeFeat() {
  let ftB = document.getElementsByClassName('featBox');
  let x = ftB.length;

  ftB[x-1].parentNode.removeChild(ftB[x-1]);
}

//adds feature when button clicked
function addFeature(features , textarea , featureBox) {
  let ftrs = document.getElementById('features');
  let newElement = document.createElement('textarea');
  newElement.setAttribute('class' , 'featureBox');
  ftrs.appendChild(newElement);
}

function removeFeature() {
  let ftrB = document.getElementsByClassName('featureBox');
  let x = ftrB.length;

  ftrB[x-1].parentNode.removeChild(ftrB[x-1]);
}



//p5
function addNote(notes , textarea , noteBox) {
  let nts = document.getElementById('notes');
  let newElement = document.createElement('textarea');
  newElement.setAttribute('class' , 'noteBox');
  nts.appendChild(newElement);
}

function removeNote() {
  let ntB = document.getElementsByClassName('noteBox');
  let x = ntB.length;

  ntB[x-1].parentNode.removeChild(ntB[x-1]);
}