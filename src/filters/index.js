/**
 * Created by DELL on 2017/6/6.
 */

export let textToHtml = (input) => {
    if (!input) {
        return '';
    }
    return input.replace(/\n/g, '<br>');
};
let add0 = (input) => {
    if (!input) {
        return '00';
    }
    input = input + '00';
    return input.substring(0, 2);
};
export let currencyFormat = (input) => {
    if (!input) {
        return '0.00';
    }
    let ouputs = input.toString();
    ouputs = ouputs.split('.');
    return ouputs[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,') + '.' + add0(ouputs[1]);
};
export let mobileFormat = (input) => {
    if (!input) {
        return '';
    }
    return input.substr(0, 3) + '****' + input.substr(7, 11);
};
