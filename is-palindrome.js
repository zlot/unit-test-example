/*
 * See: https://www.reddit.com/r/javascript/comments/3rb88w/ten_questions_ive_been_asked_most_more_than_once/?utm_source=javascriptweekly&utm_medium=email
 * I applied for a js internship at hootsuite, the questions were write a function to detect a palindrome and to debug a slow jquery script (dom lookup was inside a loop)
 */


'use strict';

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
