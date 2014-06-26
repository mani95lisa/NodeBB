'use strict';

/* globals define */

define('share', function() {

	var module = {};

	module.addShareHandlers = function(name) {

		var baseUrl = window.location.protocol + '//' + window.location.host;

		function openShare(url, urlToPost, width, height) {
			window.open(url + encodeURIComponent(baseUrl + urlToPost), '_blank', 'width=' + width + ',height=' + height + ',scrollbars=no,status=no');
			return false;
		}

		addHandler('.post-link', function(e) {
			e.preventDefault();
			return false;
		});

        addHandler('.weibo-share', function () {
            var url = encodeURIComponent(baseUrl + getPostUrl($(this)));
            var element = $(this).parents('.post-row').find('[itemprop=name]');
            var title = element && element.text() ? element.text() : $(this).parents('.post-row').find('[itemprop=text]').text()
            if(!title){
                title = '分享最专业的Swift开发者社区 '+ $('.active').find('[itemprop=title]').text() +' 版块';
            }
            var share_url = 'http://service.weibo.com/share/share.php?url='+url+'&title='+title+'&type=button&language=zh_cn&appkey=2004330677&style=number&ralateUid=5172806724'
            window.open(share_url, '_blank','width=550,height=420,scrollbars=no,status=no');
        });
	};

	function addHandler(selector, callback) {
		$('#content').off('click', selector).on('click', selector, callback);
	}

	function getPostUrl(clickedElement) {
		var parts = window.location.pathname.split('/');
		var postIndex = parseInt(clickedElement.parents('.post-row').attr('data-index'), 10);
		return '/' + parts[1] + '/' + parts[2] + (parts[3] ? '/' + parts[3] : '') + (postIndex ? '/' + (postIndex + 1) : '');
	}

	return module;
});
