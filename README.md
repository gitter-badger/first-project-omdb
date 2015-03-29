# first-project-omdb

Проект використовує відкрите АРІ http://www.omdbapi.com
Це база кінофільмів. 

Опис АРІ
---------------

Тут є пошук по назві та року:

```http
http://www.omdbapi.com/?s=dummy
```

І також детальніша інформація по фільму:

```
http://www.omdbapi.com/?t=2012&plot=full
```

За цими даними можна зробити сторінку пошуку з переглядом деталей по кліку. 
Задача досить типова і проста (лише виведення даних).

Initial setup
------------------

Для початку виконайте наступні команди в консолі ОС

```sh
# Клонування репозиторію
git clone https://github.com/learnjskiev/first-project-omdb.git
cd first-project-omdb

# Встановлення усіх залежностей
npm install

# Щоб використовувати команду `gulp`глобально
npm install -g gulp
```

Запуск проекту
-------------
У переважній більшості випадків для розробки потрібна лише перша команді - її й запускайте.

```sh
# Під час розробки запускайте команду (скрипти перезбиратимуться при кожній зміні файлу, після чого браузер автоматично оновлюватиме сторінку)
gulp watch

# Одноразова компіляція скриптів
gulp build
# Запуск простого веб-сервера
gulp serve
```

