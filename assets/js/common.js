(function($){
	$(window).on('load', function() {
	  $('.js-stage-event-target').one('inview', function(event, isInView) {
	    if (isInView) {
	      $(this).removeClass('stage-out');
	      $(this).addClass('stage-in');
	    } else {
	      $(this).removeClass('stage-in');
	      $(this).addClass('stage-out');
	    }
	  });
	});
    $(document).ready(function() {
        // hover show menu
        var item = $('.sub-menu');
        if ($(window).width() > 1200) {
            $('.navbar > ul > li').hover(function (){
                $(this).find('.sub-menu').addClass('is-open');
            }, function() {
                $(this).find('.sub-menu').removeClass('is-open');
            });
        }

        // click show menu
        $('#navLine').click(function() {
            var text = $(this).find('small').text();
            $(this).toggleClass('active');
            $(this).closest('body').toggleClass('nav-open');
            $(this).find('small').text(text=='メニュー' ? '閉じる' : 'メニュー');
            $('.navbar').slideToggle('fast');
        });
        $('.icon-menu').click(function(){
            $(this).toggleClass('icon-open');
            $(this).next().slideToggle(100);
        });
        parallax();
    });
    function parallax() {
        var html = document.documentElement;
        var body = document.body;
        var $target = $('.ani-thumb');
        var windowHeight = html.clientHeight || body.clientHeight;
        var top,bottom;
      
        function main() {
            windowHeight = html.clientHeight || body.clientHeight;
            bottom = window.pageYOffset + windowHeight;
            top = window.pageYOffset;
            $target.each(function(index, element) {
                var layer = Number($(this).attr('data-ani-layer'))  || 1;
                var targetY = Math.round($(this).offset().top);
                var y = Math.round((top - targetY) / (layer * 12));
                if (layer < 0) {
                    y = y * 1.5;
                }
                if (top < 50) {
                    y = 0;
                }
                if (window.innerWidth > 950) {
                    $(this).velocity("stop");
                    $(this).velocity({
                        translateY: (0 - y) + 'px'
                    }, {
                        duration: 1500,
                        easing: 'easeOutCubic'
                    });
                }
            });
        };
      
        main();
        $(window).scroll( $.throttle( 50, main ) );
    };
})(jQuery);