// const casual = require('casual');


// console.log("Asta Ilgaude");
// console.log(casual.city, casual.integer(1, 10));

// console.log("Asta Ilgaude", casual.firstname_suffix + casual.lastname_suffix);

const casual = require('casual');
const sex = ['male', 'female', 'other'];
const randomSex = sex[casual.integer((from = 0), (to = 2))];

casual.define('user', () => {
    return {
        name_prefix: casual.name_prefix,
        first_name: casual.first_name,
        last_name: casual.last_name,
        sex: randomSex,
        address: {
        treet: casual.street,
        city: casual.city,
        country: casual.country,
        },
        email: casual.email,
        password: casual.password,
        integer: casual.integer(from = 0, to = 99),
        month_name: casual.month_name,
        color_name: casual.color_name,
    };
});

console.log(casual.name_prefix, casual.first_name, casual.last_name, casual.address, casual.city, casual.country, 
    casual.email, casual.password, casual.integer(from = 0, to = 99), casual.month_name, casual.color_name);