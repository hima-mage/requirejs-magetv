// console.log("hello from require")
define(function () {
    'use strict';

    return function (config, element){
        // console.log('AMD require Js' )
        console.log(config)
        console.log(element)
    }
})
