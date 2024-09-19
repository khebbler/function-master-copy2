//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // initiating storage array for values
    let arrayOfValues = [];
    // looping through input object
    for (var key in object) {
        // adding object's keys to arrayofValues
        arrayOfValues.push(object[key]);
    }
    // returning a new array of the object's values
    return arrayOfValues;

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // returning an array of object's keys and joining with a space
    return Object.keys(object).join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {

    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // checking if collection is an array
    if (Array.isArray(collection)) {
        // returning array
        return 'array';
    // checking if collection is an object    
    } else if (typeof collection === 'object') {
        // returning object
        return 'object';
    }

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // returning string with first letter capitalized
    return string.charAt(0).toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // 

    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // capitalizing the first letter in object's name property
    var name = object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase();
    // returning Welcome Name!
    return "Welcome " + name + "!"; 

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // capitalizing the first letter in object's name property
    var name = object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase();
    // capitalizing the first letter in object's species property
    var species = object.species.charAt(0).toUpperCase() + object.species.slice(1).toLowerCase();

    // returning Name is a Species
    return name + " is a " + species;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // checking if object has a noises array
    if (object.noises && Array.isArray(object.noises)) {
        // returning noises seperated by a space
        return object.noises.join(" ");
    // if there are no noises     
    } else {
        // return there are no noises
        return "there are no noises"
    }


}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // checking if word is in the string of words
    if (string.includes(word)) {
        // if yes return true
        return true;
    // otherwise    
    } else {
        // return false
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // adding name to object's friends array
    object.friends.push(name); 
    // returning object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // checking if object has friends property and includes name
    if (object.friends && object.friends.includes(name)) {
        // if yes, return true
        return true;
    // otherwise, return false    
    } else {
        return false;
    }

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // initializing storage array for non-friends
    var nonFriends = []
    // looping over array of people
    for (var i = 0; i < array.length; i++) {
        // initializing person varibale for clarity
        var person = array[i];
        // checking if person is not friends with name
        if (person.name !== name && (!person.friends || !person.friends.includes(name))) {
            // adding person's name to non-friends array
            nonFriends.push(person.name);
        }
    }
    // returning nonFriends array
    return nonFriends;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}