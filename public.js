

var letters = "acdfgilmnoprstuw";
var reversedWord = [];


var newWord = [];

function hash(s)
{
    var hash = s;
    for(var i = 0; i < 8; i++)
    {
        var numberHash = parseInt(s);
        if ([i] == 0){

            var hash1 = (numberHash % 23);
            newWord.push(hash1);
        }
        else {

           hash = (hash) / 23;
            var arrayEntry= (parseInt(hash)) % 23;

            newWord.push( arrayEntry);




        }


    }


    for(var i = 0; i < newWord.length; i++) {
         var getNewWoldData  = newWord[i];
          var putIntoReversed = letters[getNewWoldData];
          reversedWord.unshift(putIntoReversed);


    }
    console.log(reversedWord)

}


hash("593846452632");