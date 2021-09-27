
<script src="assets/bower_components/gsap/src/minified/TweenMax.min.js"></script>
<script src="assets/bower_components/gsap/src/minified/plugins/ScrollToPlugin.min.js"></script>
<script src="assets/bower_components/tether/dist/js/tether.min.js"></script>
<script src="assets/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="assets/bower_components/sticky-kit/dist/sticky-kit.min.js"></script>
<script src="assets/bower_components/jarallax/dist/jarallax.min.js"></script>
<script src="assets/bower_components/jarallax/dist/jarallax-video.min.js"></script>
<script src="assets/bower_components/flickity/dist/flickity.pkgd.min.js"></script>
<script src="assets/bower_components/isotope/dist/isotope.pkgd.min.js"></script>
<script src="assets/bower_components/photoswipe/dist/photoswipe.min.js"></script>
<script src="assets/bower_components/photoswipe/dist/photoswipe-ui-default.min.js"></script>
<% If hptCtrl = 1 Or (a_bannerIndexText = "2" Or a_bannerPagesText = "2") Then	'置頂打字機 / 橫幅文字效果 %>
<script src="assets/bower_components/typed.js/dist/typed.min.js"></script>
<% End If %>
<script src="assets/bower_components/jquery-form/jquery.form.js"></script>
<script src="assets/bower_components/jquery-validation/dist/jquery.validate_<%= appLang %>.js"></script>
<script src="assets/bower_components/jquery-validation/dist/additional-methods_<%= appLang %>.js"></script>
<script src="assets/bower_components/hammer.js/hammer.min.js"></script>
<script src="assets/bower_components/keymaster/keymaster.js"></script>
<script src="assets/bower_components/prism/prism.js"></script>
<% If (banCtrl = 1 And PathNow = "index.asp") Or (bagCtrl = 1 And bgcCtrl = 1 And PathNow <> "index.asp") Then %>
<script src="assets/plugins/revolution/js/jquery.themepunch.tools.min.js"></script>
<script src="assets/plugins/revolution/js/jquery.themepunch.revolution.min.js"></script>
<% End If %>
<% If focCtrl = 1 Or fomCtrl = 1 Then %>
<script src="assets/js/mfb.js"></script>
<% End If %>
<script src="js/jquery.basic.toast.js"></script>
<script src="assets/js/sweetalert2.min.js"></script>
<script src="assets/js/khaki.js"></script>
<script src="assets/js/khaki-init.js"></script>

<script src="js/timeline/main.js"></script>

<% If loaCtrl = 1 Then	'換頁轉場效果 %>
<script src="assets/js/jquery.animsition.min.js"></script>
<script>
	(function($) {
		"use strict";
		$(document).ready(function() {
			$(".animsition").animsition({
				inClass: 'fade-in',
				outClass: 'fade-out',
				inDuration: 200,
				outDuration: 100,
				linkElement: '.animsition-link',
				// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
				loading: true,
				loadingParentElement: 'html', //animsition wrapper element
				loadingClass: 'animsition-loading',
				unSupportCss: ['animation-duration',
					'-webkit-animation-duration',
					'-o-animation-duration'
				],
				overlay: false,
				overlayClass: 'animsition-overlay-slide',
				overlayParentElement: 'html'
			});
		});
	})(jQuery);
</script>
<% End If %>

<!-- LazyLoad -->
<script src="assets/js/jquery.lazyload.js"></script>
<script>
	$('img.lazy, .lazyBlock img').lazyload({
		effect : "fadeIn"
	});
</script>

<!-- 滑動特效 -->
<script src="assets/js/scrollReveal.js"></script>
<script>
	$(window).load(function() {
		window.scrollReveal = new scrollReveal();
	});
</script>

<script>
  //收納效果
  function toggleBlocks(b) {
	var $toggleBtn = $('#toggleBtn_'+b);
	var $toggleBlock = $('#toggleBlock_'+b);
	$toggleBtn.toggleClass('toggleRotate180');
	$toggleBlock.toggleClass('toggleClosed');
  }
</script>

<!-- jQuery UI -->
<script src="js/jquery-ui.js"></script>
<script>
	$(function() {
	  $('input.jUI').checkboxradio({
		icon: false
	  });
	});
</script>
