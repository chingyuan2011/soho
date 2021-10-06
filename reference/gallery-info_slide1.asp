
<% '704.水平捲動輪播 1	galleryDetailSlide1 	2018/08/03 %>

<style>
  .galleryDetailSlide1 {}
  @media only screen and (max-width : 767px){
	  
  }
</style>

<div class="nk-carousel-3 galleryArea" data-size="1">
  <div class="nk-carousel-inner nk-popup-gallery">
    <% If abrspCount > 0 Then
      For i = 1 To abrspCount
        ii = i Mod 3
        ii2 = i Mod 1
        
		ab_pic = abrsp("pic_b")
		ab_pic2 = abrsp("pic_s")
		ab_picName = dataRecover(abrsp("pic_name"))
		If apnCtrl = 1 Then
		  If abrsp("pic_text") <> "" Then ab_picText = Replace(dataRecover(abrsp("pic_text")),vbCrLf,"<br />") Else ab_picText = ""
		End If %>
        <div class="galleryDetailSlide1">
          <div>
            <a href="album/image/<%= ab_pic %>" title="<%= ab_picName %>" class="nk-gallery-item gabrItems_<%= i %>" data-size="1920x805">
              <img src="album/image/<%= ab_pic %>" alt="<%= ab_picName %>" title="<%= ab_picName %>" />
              <% If apnCtrl = 1 Then %><p class="pt-10"><%= ab_picText %></p><% End If %>
            </a>
          </div>
        </div>
        <% abrsp.MoveNext
        If abrsp.EOF Then Exit For
      Next
    End If %>
  </div>
</div>

<% If abrspCount > 0 Then
  abrsp.MoveFirst
  For i = 1 To abrspCount %>
    <script>
      (function($) {
        //設定大圖瀏覽顯示尺寸: 元素必須包含 href, data-size 屬性
          var $gabrItems_<%= i %> = $('.gabrItems_<%= i %>');
          var image_<%= i %> = new Image();	//使用 href 的內容來建立新圖片
          image_<%= i %>.src = $gabrItems_<%= i %>.attr('href');
          //alert(image_<%= i %>.src);
          image_<%= i %>.onload = function() {	//必須等新圖片載入完成才可繼續設定
            //alert('natural size: ' + image_<%= i %>.naturalWidth + 'x' + image_<%= i %>.naturalHeight);
            $gabrItems_<%= i %>.attr('data-size',image_<%= i %>.naturalWidth + 'x' + image_<%= i %>.naturalHeight);
          };
      })(jQuery);
    </script>
    <% abrsp.MoveNext
    If abrsp.EOF Then Exit For
  Next
End If
abrsp.Close
Set abrsp = Nothing %>            

<div class="clearfix"></div>
<div class="clearfixM"></div>
