/**
 *
 *  Integer to roman
 */

let map = new Map();
map.set(1, 'I');
map.set(4, 'IV');
map.set(5, 'V');
map.set(9, 'IX');
map.set(10, 'X');
map.set(40, 'XL');
map.set(50, 'L');
map.set(90, 'XC');
map.set(100, 'C');
map.set(400, 'CD');
map.set(500, 'D');
map.set(900, 'CM');
map.set(1000, 'M');
const numberArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

let mapChar = new Map();

mapChar.set('I', 1);
mapChar.set('IV', 4);
mapChar.set('V', 5);
mapChar.set('IX', 9);
mapChar.set('X', 10);
mapChar.set('XL', 40);
mapChar.set('L', 50);
mapChar.set('XC', 90);
mapChar.set('C', 100);
mapChar.set('CD', 400);
mapChar.set('D', 500);
mapChar.set('CM', 900);
mapChar.set('M', 1000);

function intToRoman(nums) {
  let anwers = '';
  for (let i = 0; i < numberArray.length; i++) {
    while (numberArray[i] <= nums) {
      anwers = anwers + map.get(numberArray[i]);
      nums = nums - numberArray[i];
    }
  }

  console.log(anwers);
}

intToRoman(93);
intToRoman(58);
// intToRoman(1994);

function RomanToArray(str) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let calculate = 0;

  for (let i = 0; i < str.length; i++) {
    const cur = sym[str[i]]; // X // 10
    const next = sym[str[i + 1]]; // C

    if (cur < next) {
      calculate += next - cur;
      i++;
    } else {
      calculate = calculate + cur;
    }
  }
  console.log(calculate);
}

RomanToArray('MCMXCIV');
