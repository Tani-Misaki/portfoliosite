$(function () {
  // スクロール表示
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 150) {
      $(".scrolldown2").fadeOut();
    } else {
      $(".scrolldown2").fadeIn();
    }
  });

  // トップへ戻るボタン
  $(".top_btn").hide();
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".top_btn").fadeIn();
    } else {
      $(".top_btn").fadeOut();
    }
  });

  //スムーススクロールでページトップへ
  $(".top_btn").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // トップページのcontactへスムーススクロール
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 500, "swing");
    return false;
  });

  $(".btn_spnav, .sp_nav li a").click(function () {
    $(".sp_nav").fadeToggle();
    $(".btn_spnav").toggleClass("open");
  });

  // Worksページのフィルター
  var $btn = $(".cate_item [data-filter]"),
    $list = $(".works_items [data-category]");

  $btn.on("click", function (e) {
    e.preventDefault();

    var $btnTxt = $(this).attr("data-filter");

    if ($btnTxt == "all") {
      $list
        .fadeOut()
        .promise()
        .done(function () {
          $list.fadeIn();
        });
    } else {
      $list
        .fadeOut()
        .promise()
        .done(function () {
          $list.filter('[data-category = "' + $btnTxt + '"]').fadeIn();
        });
    }
  });

  // Worksページのフィルター下線部分
  $(".cate_item dd").click(function () {
    var index = $(".cate_item dd").index(this);
    $(".cate_item dd").removeClass("current");
    $(this).addClass("current");
    $(".cate_item dd").eq(index).addClass("current");
  });

  // ふわっと
  // $("section, .workitem").on("inview", function (event, isInView) {
  //   if (isInView) {
  //     $(this).stop().addClass("is-show");
  //   }
  // });

  $(".slider_img ul").slick({
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    speed: 2000,
    fade: true,
  });
});
