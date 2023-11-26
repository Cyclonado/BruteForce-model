
//function to generate characters//

function generateCharacters(){

    const chars = [];
    for (let i = 97; i <= 122; i++){
        chars.push(String.fromCharCode(i));
    }
    for (let i = 65; i <= 90; i++){
        chars.push(String.fromCharCode(i));
        
    }
    for (let i = 48; i <= 57; i++){
        chars.push(String.fromCharCode(i));
        
    }
    return chars;
}

function bruteForce(chars, password, readPassword){

    let attempt = 0;
    const comb = Array(readPassword).fill(chars[0]);

    while (true){

        const combine = comb.join(``);
        attempt++;

            if (attempt % 999999 === 0){
                console.log(` ${String(attempt).padStart(10)} ----> ${combine}`);
        }

            if (password === combine){
                return ` The password found is "${combine}", after ${attempt} attempts.`;
            }

        let i = readPassword - 1;

        while (i >= 0){
            if (comb[i] === chars[chars.length - 1]){
                comb [i] = chars[0]
                i--;
            } else{
                const charIndex = chars.indexOf(comb[i]);
                comb[i] = chars[charIndex + 1];
                break;
            }
        }
            if (i < 0){
                break; //all the possible combinations have been tested.
            }
    }

        return ` PASSWORD NOT FOUND `
    }

function recursiveBruteForce(chars, password, readPassword, combPrevious = ``){

    let attempt = 0;

    for (const letter of chars){
        const combine = combPrevious + letter;
        attempt++
        
        if(attempt % 999999 === 0){
            console.log(`${String(attempt).padStart(10)} --> ${combine}`)
        }

        if(password === combine){
            console.log(` The password found is "${combine}", after ${attempt} attempts.`);
            return;
        }

        if(readPassword !== 1){
            recursiveBruteForce(chars, password, readPassword - 1, combine);
        }
    }
}

const chars = generateCharacters();





const password = `cat`; //  <--- input the desired password here.


// in this method, the password length has to be specified beforehand
// putting numbers bigger than the password itself will break the program


console.log(bruteForce(chars, password, 3);

console.log(`*******************************`);

recursiveBruteForce(chars, password, password.length, ``);

console.log(`*******************************`);

recursiveBruteForce(chars, `duck`, 4, ``);

console.log(`*******************************`);

