# first-project-omdb

[![Join the chat at https://gitter.im/learnjskiev/first-project-omdb](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/learnjskiev/first-project-omdb?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Проект використовує відкрите АРІ http://www.omdbapi.com
Це база кінофільмів. 

Шаблон сторінки після запуску проекту можна знайти тут http://localhost:3000/mockup/index.html

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

# Встановлення залежностей інфрастуктури розроби
npm install

# Щоб використовувати команди `gulp` та `bower` глобально
npm install -g gulp
npm install -g bower

# Встановлення бібліотек для браузера
bower install
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

