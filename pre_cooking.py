import re
import os

""" в файле readme.md ищет строку по шаблону 

"""

the_file_name = 'readme.md'

with open('templates/template.html', 'r') as current_file:
    the_template_html = current_file.read()


def create_ex_list_name(file_data):
    """
    в file_data ищет номера заданий и создает список
    :return list = {
        'name': string, номер задания
        'start': number, позиция первого символа задания в file_data
    }
    """

    ex_find_name_res = re.finditer(r'\d\.\d+(?=\. )', file_data)  # obj Match номера задания
    ex_list = []
    for match_obj_ex in ex_find_name_res:
        ex_list.append({
            'name': match_obj_ex.group(),
            'start': match_obj_ex.start(),
        })
    return ex_list


def append_in_ex_list_end(file_data, ex_list_name):
    """
    в file_data ищет признак конца задания '------' и добавляет в список ex_list_name поля
    end и content
    :return list = {
        'name': string, номер задания
        'start': number, позиция первого символа задания в file_data
        'end': number, позиция последнего символа задания
        'content': string, текст задания из file_data от start до end
    }
    """
    dash_num_pos = re.finditer(r'------', file_data)  # obj Match конца задания
    i = 0
    for match_obj_tire in dash_num_pos:
        ex_list_name[i]['end'] = match_obj_tire.start()
        ex_list_name[i]['content'] = match_obj_tire.string[ex_list_name[i]['start']:ex_list_name[i]['end']]
        i += 1
    return ex_list_name


def collect_file_data(file_name):
    """ из данных файла создает список словарей с полями
    'name': string, номер задания
    'start': number, позиция первого символа задания в file_data
    'end': number, позиция последнего символа задания
    'content': string, текст задания из file_data от start до end}
    """

    with open(file_name, 'r') as readme_md:
        file_data = readme_md.read()
    return append_in_ex_list_end(file_data, create_ex_list_name(file_data))


# ======================================

def create_readme_md(f_data):
    """    создает в папке с именем name файл с именем readme.md и записывает в него данные из content """
    with open('{name}/readme.md'.format(**f_data), 'w') as current_file:
        current_file.write('> ' + f_data['content'])


def create_app_js(f_data):
    """    создает в папке с именем name файл с именем app.js и записывает
    в него данные из content
    """
    with open('{name}/app.js'.format(**f_data), 'w') as current_file:
        current_file.write(f_data['content'])


def create_htmls(template_html, html_data):
    """    создает в папке с именем name файл с именем name + '.html'
    записывает в него шаблон из папки template
    путь до предыдущего prev, следующего next заданий
    и данные из content
    """

    # """<button id = "prev" onclick = "window.location='../{prev}/{prev}.html'"> {prev} </button>""".fotmat()
    for counter in range(1, len(html_data) - 1):
        html_data[counter]['prev'] = html_data[counter - 1]['name']
        html_data[counter]['next'] = html_data[counter + 1]['name']
        with open('{name}/{name}.html'.format(**html_data[counter]), 'w') as html_file:
            html_file.write(template_html.format(**html_data[counter]))


def create_dir(name):
    """ создает файлы index.html, app.js, readme.md, в папке f_data['name']"""

    if not os.path.exists(name):  # создание папки если ее нет
        os.makedirs(name)


def create_files(f_data):
    create_readme_md(f_data)
    create_app_js(f_data)


def insert_link_in_index_html(files_data):
    """   вставляет в index.html ссылку на файл name/name.html """
    replace_text = ''
    for task in files_data:
        replace_text += '<a href="{name}/{name}.html">task {name}</a><br>\n'.format(**task)
    with open('index.html', 'r') as html:
        html_data = html.read()
    with open('index.html', 'w') as html:
        html.write(re.sub('(</body>)', (replace_text + '</body>'), html_data))


def insert_link_in_readme_md(files_data, file_name):
    """   вставляет в readme.md ссылку на файл задания после этого задания
    [html file](./name/name.html)
    """
    with open(file_name, 'r') as md_file:
        readme = md_file.read()

    for link_place in files_data[::-1]:
        link = "[папка с заданием {name}]({name}/)\n\n".format(**link_place)
        readme = readme[:link_place['end']:] + link + readme[link_place['end']::]

    with open(file_name, 'w') as md_file:
        md_file.write(readme)


the_file_data = collect_file_data(the_file_name)

# for task in the_file_data:
#     create_dir(task['name'])
#     create_files(task)
#
# create_htmls(the_template_html, the_file_data)

# insert_link_in_index_html(the_file_data)

insert_link_in_readme_md(the_file_data, the_file_name)
