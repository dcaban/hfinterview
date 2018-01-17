

// default hash value for tortilla
var ogHash = ("593846452632");

// simplified alphabet (I believe this is to minimize conflicts)
var letters = "acdfgilmnoprstuw";

// makes an array where a letter will placed into each time the array for loop in the hash function is run
var newWord = [];

//holds tha value of the array once it runs through the loop that reverses the array
var reversedWord = [];


// function takes in one parameter (s) and runs the function
function hash(s)
{

    //hash is initially set to 0
    var hash = s;

    // loop to get the value of each index
    for(var i = 0; i < 8; i++)
    {
        var numberHash = parseInt(s);

        // does not divide the initial hash when finding first index
        if ([i] == 0){

            var hash1 = (numberHash % 23);
            newWord.push(hash1);
        }
        //runs on each but the initial value
        else {
            // takes in the initial hash and divides it by 23 and assigns it back to hash
           hash = (hash) / 23;

            // takes the new hash and rounds it to the nearest integer and fins the remainder
            //    the remainder is then assigned to arrayEntry
            var arrayEntry= (parseInt(hash)) % 23;

            // the arrayEntry is put in the back of hte new wordArray defined above

            newWord.push( arrayEntry);




        }


    }

    //The newWord entry is flipped reversing the order of the word


    for(var i = 0; i < newWord.length; i++) {
         var getNewWoldData  = newWord[i];
          var putIntoReversed = letters[getNewWoldData];
          reversedWord.unshift(putIntoReversed);


    }

}

// calls the hashing function and puts in the original hash

hash(ogHash);

// makes it so that the original number and the unhashed values are displayed

$("#tortilla").append("The original number was: " + ogHash +"<br> The secret word is now: ");
$("#tortilla").append(reversedWord);


$(document).ready(function(){
    $('.parallax').parallax();
});
