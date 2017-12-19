var dir = "/images/Wildlife";
var fileextension =".jpg";

$.ajax({
    url : dir,
    success: function (data) {
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
            $("#gallery-grid").append($("<div><img class='image item' src=" + dir  + filename + "></img></div>"));
        });
    }
});