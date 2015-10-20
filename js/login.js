$(document).ready(function(){
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    $("#mail").keyup(function(){
        if($("#mail").val().trim().length==0){
            $("#mail_reminder").text(" 邮箱不得为空！");
        }
        else{
                $("#mail_reminder").text("");
        }
    });
    $("#mail").blur(function(){
        if($("#mail").val().trim().length==0){
            $("#mail_reminder").text(" 邮箱不得为空！");
        }
        else{
            if(reg.test($("#mail").val())){
                $("#mail_reminder").text("");
            }else{
                $("#mail_reminder").text(" 邮箱格式不正确！");

            }
        }
    });
    $("#password").keyup(function(){
        if($("#password").val().trim().length==0){
            $("#password_reminder").text(" 密码不得为空！");
        }
        else{
            $("#password_reminder").text("");
        }
    });
    $("#password").blur(function(){
        if($("#password").val().trim().length==0){
            $("#password_reminder").text(" 密码不得为空！");
        }
        else{
            $("#password_reminder").text("");
        }
    });
});

$(function(){
    if ($.cookie("check") == "true") {
        $("#mail").val($.cookie("mail"));
        $("#password").val($.cookie("password"));
        $("#check").attr("checked", true);
    }
})

function login(){
    if($("#mail").val().trim().length>0 && $("#password").val().trim().length>0){
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        var mail=$("#mail").val();
        var password=$("#password").val();
        if(reg.test(mail)){
            if($("input[type=checkbox]").is( ":checked" )){
                $.cookie("check", "true", { expires: 7 });
                $.cookie('mail',mail);
                $.cookie("password", password, { expires: 7 });
            }else{
                $.cookie("check", "false", { expires: -1 });
                $.cookie("mail", "", { expires: -1 });
                $.cookie("password", "", { expires: -1 });
                alert("fail");
            }
            /*---------------------------------------*/
            //在这里写Ajax代码
            /*---------------------------------------*/
        }else{
            $("#mail_reminder").text("邮箱格式不正确！");
        }
        //对中文编码


    }else{
        if (($("#mail").val().trim().length <= 0)) {
            $("#mail_reminder").text("邮箱不得为空！");
        }
        if (($("#password").val().trim().length <= 0)) {
            $("#password_reminder").text("密码不得为空！");
        }
    }

    $("#mail_reminder").attr("value","");
    $("#password_reminder").attr("value","");

}