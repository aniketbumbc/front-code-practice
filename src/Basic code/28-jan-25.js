// const myMap = new Map(['A', 1], ['B', 2]);
// let entries = myMap.entries();
// for (let entry of entries) {
//   console.log(entry);
// }

function checkScore(input) {
  let score = parseInt(input);
  switch (score) {
    case 20:
      console.log('Yahooo');
      break;
    case 40:
      console.log('Admin');
      break;
    case 60:
      console.log('SE1');
      break;
    case 80:
      console.log('SE2');
      break;
    default:
      console.log('Big Bank Theory');
  }
}

checkScore(30);
checkScore(60);
checkScore(80);
checkScore(20);

function swithObj(input) {
  let score = parseInt(input);
  const tempObj = {
    20: 'Yahooo',
    40: 'Admin',
    60: 'SE1',
    80: 'SE2',
  };
  console.log(tempObj[score] || 'Big bank theory');
}

swithObj(30);
swithObj(60);
swithObj(80);
swithObj(20);
