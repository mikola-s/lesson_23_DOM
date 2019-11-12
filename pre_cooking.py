"""    из файла readme.md делает файлы с именем соответствующим номеру задания,
    расширением js и условием задания экранированным "//" для JS
"""


def find_in_list(list_from_file):
    """   в list_from_file ищет блок текста
    первая линия которого начинается на цифру
    последняя линия которого начинается на '------'

    передает в функцию place_into_file аргументы:
    file_name: из первой линии первые 6 символов + ".js"
    list_in_file: список строк блока с вставкой перед "// "

    :param list_from_file: список строк
    :return: none
    """

    num_of_line = 0
    while num_of_line < len(list_from_file):
        line = list_from_file[num_of_line]
        if line[0].isnumeric():
            file_name = line[:5].join('js')
            list_in_file = []
            while num_of_line < len(list_from_file) and line.find('------'):
                line = list_from_file[num_of_line]
                num_of_line += 1
                list_in_file.append('// '.join(line))
            place_into_file(file_name, list_in_file[:-1])
        else:
            num_of_line += 1


def place_into_file(file_name, list_in_file):
    """    записывает в текущую папку в файл с именем file_name список list_in_file
    """

    with open(file_name, 'w') as current_file:
        current_file.write(''.join(list_in_file))


with open('readme.md', 'r') as readme_md:
    readme_md_list = readme_md.readlines()
find_in_list(readme_md_list)
