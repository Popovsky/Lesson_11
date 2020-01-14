const arrRows = [...document.querySelectorAll('body table tbody tr td:last-child')].map(el => +el.innerHTML);
const arrAllSex = [...document.querySelectorAll('body table tbody tr td:nth-child(6)')].map(el => el.innerHTML);
let sum = 0, maleSum = 0, femaleSum = 0, obj = new Object();

arrAllSex.map((el, index) => Array.isArray(obj[el]) 
    ? 
        obj[el].push(+document.querySelector(`body table tbody tr:nth-child(${index + 1}) td:last-child`).innerHTML) 
    : 
        obj[el] = [+document.querySelector(`body table tbody tr:nth-child(${index + 1}) td:last-child`).innerHTML]);

obj.Male.map(el => maleSum += el);
obj.Female.map(el => femaleSum += el);
arrRows.map(el => sum += el);

document.querySelector('body table tfoot tr:nth-child(1) td:last-child').innerHTML = femaleSum;
document.querySelector('body table tfoot tr:nth-child(2) td:last-child').innerHTML = Math.round(femaleSum / obj.Female.length);
document.querySelector('body table tfoot tr:nth-child(3) td:last-child').innerHTML = maleSum;
document.querySelector('body table tfoot tr:nth-child(4) td:last-child').innerHTML = Math.round(maleSum / obj.Male.length);
document.querySelector('body table tfoot tr:nth-child(5) td:last-child').innerHTML = sum;
document.querySelector('body table tfoot tr:nth-child(6) td:last-child').innerHTML = Math.round(sum / arrRows.length);
