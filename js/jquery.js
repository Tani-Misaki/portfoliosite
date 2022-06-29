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

  // トップへ戻るボタン
  //   let target = $("main").offset().top;
  //   $(window).on("scroll", function () {
  //     let viewh = $(window).scrollTop();
  //     if (viewh > target) {
  //       $(".bk").Hide();
  //     } else {
  //       $(".wt").Show();
  //     }
  //   });

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

  $(".slider_img ul").slick({
    autoplay: true,
    arrows: false,
    slidesToScroll: 1,
    speed: 2000,
    fade: true,
  });
});
