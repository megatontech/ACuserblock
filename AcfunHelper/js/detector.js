
 function saveHideUserID(uid) {
        var storage = window.localStorage;
        storage["uid." + uid] = "hide";
	checkUserHiddenList();
        //保存屏蔽用户及原因
    }
 function exportList() {
        var storage = window.localStorage;
        //导出屏蔽列表
    }
    function importList() {
        var storage = window.localStorage;
        //导入屏蔽列表
    }
    function addHideButton() {
        $(".author-comment ").each(function() {
            if ($(this).find("a").hasClass("name")) {
                var uid = $(this).find("a").attr("data-uid");
                $(this).append("<a onclick='saveHideUserID(" + uid + ")' href='#' >'屏蔽这个大傻逼'</a>");
            }
        });
    }
    function checkUserHiddenList() {
        var storage = window.localStorage;
        //遍历并检查本地存储中是否有此用户，如果有则调用hideUser删评论
        $(".author-comment a ").each(
        function() {
            if ($(this).hasClass("name")) 
            {
              
                if (checkUserHidden($(this).attr("data-uid"))) {
console.log("hide:"+$(this).attr("data-uid"));
                    //调用方法隐藏此用户的评论
                    $(this).parent().parent().empty();
                    hideUser($(this).attr("data-uid"));
                }
            }
        }
        );
    }
    function checkUserHidden(uid) {
        var storage = window.localStorage;
        var isHidden = false;
        for (var i = 0; i < storage.length; i++) {
            if (storage.key(i) == "uid." + uid) {
                isHidden = true;
            } 
            else {}
        }
        return isHidden;
    }
    function hideUser(uid) {
    }
    function hideComment(contentNo) {
        var storage = window.localStorage;
        $("#c-" + contentNo).remove();
        //删除指定编号的评论
    }
    function checkCommentHidden() {
        var storage = window.localStorage;
        //遍历并检查所有评论
    }
   
    function saveHideUser(uid, reason) {
        var storage = window.localStorage;
        storage["uid." + uid] = "hide" + reason;
        //保存屏蔽用户及原因
    }
    function saveHideComment(content, fullContent) {
        var storage = window.localStorage;
        if (fullContent == true) {
            storage["content." + content] = "full";
        } 
        else {
            storage["content." + content] = "part";
        }
        //保存屏蔽内容和规则
    }
    setTimeout(addHideButton,10000);
    setTimeout(checkUserHiddenList,10000);
