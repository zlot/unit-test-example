module.exports = {
    isPalindrome: isPalindrome
};

/*
 * Will return true if given value is a palindrome.
 */
function isPalindrome(val) {
    
    if(typeof val === 'undefined' || val === null || val === '') {
        return false;
    }
    
    if(typeof val === 'number') {
        val = val.toString();
    }
    
    val = val.toLowerCase();

    return val.split('').reverse().join('') === val;
}
