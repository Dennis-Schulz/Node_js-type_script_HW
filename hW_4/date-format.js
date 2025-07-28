const moment = require('moment');
const arrayDate = [`DD-MM-YYYY`, `MMM Do YY`, `dddd`];

const date = new Date();
arrayDate.forEach(element => {
    console.log(moment(date).format(element));
})
