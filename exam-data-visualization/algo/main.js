
console.log('Hello')
function twoSum(array, target) {
    const numIndices = {};
    
    for (let i = 0; i < array.length; i++) {
        const complementaire = target - array[i]; 
        
        if (numIndices.hasOwnProperty(complementaire)) {
            return [numIndices[complementaire], i];
        }
        
        numIndices[array[i]] = i;
    }
    console.log("Aucune paire trouvée")
    return null;
}

const array = [2, 7, 11, 15];
const target = 9;
const result = twoSum(array, target);
console.log("Test 1 :", result); 

const array2 = [3, 2, 4];
const target2 = 6;
const result2 = twoSum(array2, target2);
console.log("Test 2 :", result2);

const array3 = [3, 3];
const target3 = 6;
const result3 = twoSum(array3, target3);
console.log("Test 3 :", result3);
