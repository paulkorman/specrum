$(document).ready(function () {

    //Modals
    $('#measurer-submit').click(function () {
        $('#measurer').modal('hide');
        $('#measurer-submit-dialog').modal('show');
    });

    // https://jsresponsive.wezeo.com/documentation/
    JS.Responsive.init()
        .addHorizontalBreakPoint('xs', 100)
        .addHorizontalBreakPoint('sm', 576)
        .addHorizontalBreakPoint('md', 768)
        .addHorizontalBreakPoint('lg', 992)
        .addHorizontalBreakPoint('xl', 1200);// Наследует контрольные точки Bootstrap


    let BreakPoint = JS.Responsive.getActualHorizontalBreakPoint();

    let itemOnPage = 3; // Количество ссылок в пагинации
    if (BreakPoint == 'xl') {
        itemOnPage = 7;
    }
    else if (BreakPoint == 'lg') {
        itemOnPage = 6;
    }
    else if (BreakPoint == 'md') {
        itemOnPage = 5;
    }
    else if (BreakPoint == 'sm') {
        itemOnPage = 4;
    }
    else if (BreakPoint == 'xs') {
        itemOnPage = 3;
    }


    // Анимация сетки категорий (Ховер)
    $(".сatalog-grid.style-1").mouseenter(function () {
        $(this).find('.caption').animate({height: '100%'}, 200)
    }).mouseleave(function () {
        $(this).find('.caption').animate({height: '50px'}, 200);
    });


    // Слайдер для партнеров
    $("#partners").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        //variableWidth: true,
        nextArrow: "<div class='slick-next'><img src='./images/icons/slider-right.png' alt=''></div>",
        prevArrow: "<div class='slick-prev'><img src='./images/icons/slider-left.png' alt=''></div>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });


    // Пагинация страниц
    // Плагин и его параметры - http://josecebe.github.io/twbs-pagination/#options-and-events
    $('.pagination').twbsPagination({
        totalPages: $('.pagination').children().length | 10,
        visiblePages: itemOnPage,
        currentPage: 1,
        cssStyle: '',
        first: '<span></span>',
        prev: '<span></span>',
        next: '<span></span>',
        last: '<span></span>',
        onPageClick: function (page, evt) {
            console.log("Текущая страница " + evt);
        }
    });

    //https://igorescobar.github.io/jQuery-Mask-Plugin/docs.html
    $('.phone-mask').mask('(000) 000-00-00');

});