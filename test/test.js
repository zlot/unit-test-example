'use strict';

let chai = require('chai'); 
    
let expect = chai.expect;

let isPalindrome = require('../is-palindrome').isPalindrome;

describe('Detect a palindrome', function() {
    
    it('should return true when given a palindrome', function () {
        var result = isPalindrome('otto');
        expect(result).to.be.true;
        result = isPalindrome('aabbccddccbbaa');
        expect(result).to.be.true;
    });
    
    it('should return true when given a palindrome in mixed case', function() {
        var result = isPalindrome('HanNaH');
        expect(result).to.be.true;
    });

    it('should return true when given a palindrome that is a number', function() {
        var result = isPalindrome(11223344332211);
        expect(result).to.be.true;
    });
    
    it('should return false when given null or undefined', function() {
        var result = isPalindrome(null);
        expect(result).to.be.false;
        result = isPalindrome(undefined);
        expect(result).to.be.false;
    });

    it('should return false when given an empty string', function() {
        var result = isPalindrome('');
        expect(result).to.be.false;
    });
    
    
});
