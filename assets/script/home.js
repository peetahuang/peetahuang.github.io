function dmm_resize() {
    var vh = 0.425 * $(window).width();
    var overheight = -0.5 * vh;
    var top = $(window).height() - vh;
    $("#bgvid").css("margin-top", overheight + 'px');

    if (top > 70) {
        $("div#top").css("top", 0);
        $("div#top").css("height", $(window).height() / 2 + overheight + 'px');
        $("div#top h1").css("line-height", $(window).height() / 2 + overheight + 'px');
    } else if (top > 0 && top <= 70) {
        $("div#top").css("top", top / 2);
        $("div#top").css("height", "2em");
        $("div#top h1").css("line-height", "2em");
    } else {
        $("div#top").css("top", 0);
        $("div#top").css("height", "2em");
        $("div#top h1").css("line-height", "2em");
    }
}
(function () {
    dmm_resize();
    $(window).resize(function () {
        dmm_resize();
    });
})();