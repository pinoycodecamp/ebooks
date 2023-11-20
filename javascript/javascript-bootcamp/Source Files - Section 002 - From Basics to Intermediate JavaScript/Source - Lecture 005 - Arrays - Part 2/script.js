// Lecture: Arrays - Part 2

var colors = ['white', 'black', 'red'];

colors[1] = 'green';

colors.push('blue');

colors.pop();

colors.shift();

colors.unshift('purple');

console.log(colors.indexOf('brown'));

if(colors.indexOf('blue') === -1) {

    colors.push('blue');

    console.log(colors);

}





















