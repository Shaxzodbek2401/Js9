var user_name = prompt('Введите своё имя: ');
while (isNaN(year_of_birth)) {
    var year_of_birth = +prompt('Введите свой год рождения: ');
}

while (isNaN(this_year)) {
    var this_year = +prompt('Введите нынешний год: ');
}

function info(user_name, year_of_birth, this_year) {
    let vozrast = this_year - year_of_birth;
    let text = user_name + ', ' + 'Ваш возраст ' + vozrast + '.'; 
    if (vozrast < 0) {
        text = user_name + ', ' + 'Вы ещё не родились🤣'
    }
    return text;
}


alert(info(user_name, year_of_birth, this_year));


