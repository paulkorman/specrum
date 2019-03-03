# Spektrum



## JS плагины

 ######[JS responsive](https://jsresponsive.wezeo.com/documentation/)
Для респонсив вёрстки. 

###### [Slick Slider](http://kenwheeler.github.io/slick/)
Слайдер используется для отображения партнеров сайта. 

###### [jQuery Pagination plugin](http://josecebe.github.io/twbs-pagination/)
Плагин для отображения красивой пагинации. Имеет свой API. 

###### [fancybox](http://fancyapps.com/fancybox/3/)
Плагин для просмотра изображений. 


##CSS
* [Bootstrap v4.2.1](https://getbootstrap.com/)
* Основные стили вынесены в `css/main.css` 
* Стили для меню вынесены в `css/menu.css`

##Меню
Для отображения меню используется [Bootstrap Collapse](https://getbootstrap.com/docs/4.0/components/collapse/#example) 
Для отображения активного пункта меню нужно добавить класс `.active` к элементу. 


##Favicon 

Для генерации иконок под все устройства используйте сайт [Favicon Generator](https://www.favicon-generator.org/)
1. Все параметры оставить по умолчанию. 
2. Выбрать изображение favicon, в формате `.PNG`,  с минимальными размерами в `192x192px`
3. Загрузить на сайт. После генерации скачать архив и распаковать все изображения в папку `/manifest/`
4. На страницах сайта указаны следующие метатеги 
```html
    <link rel="apple-touch-icon" sizes="57x57" href="./manifest/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./manifest/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./manifest/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./manifest/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./manifest/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./manifest/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="./manifest/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./manifest/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./manifest/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="./manifest/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./manifest/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="./manifest/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./manifest/favicon-16x16.png">
    <link rel="manifest" href="./manifest/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="./manifest/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
```


##Компоненты сайта

Меню навигации (верхняя часть сайта) реализовано с помощью CSS. 

Сайдбар в каталоге использует стандартные классы и анимации Bootstrap.# specrum
