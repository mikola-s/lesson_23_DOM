// 1.02. Делаем функцию, которая принимает аргументом название тега
// и возварашает созданый тег.
// Потом Делаем функцию, которая принимает этот тег как аргумент и вставляет в body.
// PS. createEl..., append...

let name = prompt('Пользователь! \n введи название тега')

// вариант 1
{(name != '' && name != null) ? document.body.appendChild(document.createElement(name)) : none}


// вариант 2
function create_tag(name){
    return (name != '' && name != null) ? document.createElement(name) : false
}

function insert_tag(tag_name) {
    return tag_name ? document.body.append(tag_name): false
}

insert_tag(create_tag(name))