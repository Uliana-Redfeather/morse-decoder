const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morse = '';
    for (i=0;i<expr.length;i+=10){
        if (expr.substring(i,i+10)=='**********'){
            morse = morse + ' '
        } 
        else {
            let morseletter = ''
        for (j=0;j<10;j+=2){
            let tempstr = expr.substring(i+j,i+j+2)
            
            if (tempstr=="00"){

            } if (tempstr=="10"){
                morseletter = morseletter + "."
            } if (tempstr=="11")
            {
                morseletter = morseletter + "-"
            }
            
            }
            morse = morse + MORSE_TABLE[morseletter] 
        }
  
    
} 
return morse

}

module.exports = {
    decode
}

