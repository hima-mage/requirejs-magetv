// console.log("hello from require")
define(['jquery'] , function ($) {
    'use strict';

    return function (config, element){
        console.log(config.base_url)
        $.getJSON("https://magento.test/rest/V1/directory/currency" , function (result) {
            element.innerText = JSON.stringify(result, null , 2)
        })
    }
});
