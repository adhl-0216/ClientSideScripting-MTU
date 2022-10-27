// JavaScript Document
    'use strict'
    
    function moreThanAHunnid(num){
       return (num > 100)?"Greater than 100":"Less than 100";
    }
    
    let num;
    num = parseInt(window.prompt("Enter a number"));
    
    alert(moreThanAHunnid(num));
    