//<div id="page_wall_posts" class="wall_posts own">
//  <div id="post-57354358_262949" class="_post post page_block all own" data-post-id="-57354358_262949" onclick="wall.postClick('-57354358_262949', event);">
//      <div id="post-57354358_263026"
//          <span class="post_like_count _count">7</span>
//$("#element1").before($("#element2"));

/*
for COMMENTS:
    <div class="replies_wrap" id="replies_wrap-57354358_263013" style="">
    !<div class="replies_list _replies_list" id="replies-57354358_263013">
    <a id="wrh-57354358_263013" class="wr_header" onclick="return wall.showReplies('-57354358_263013', false, false, event);" offs="3/10" href="/wall-57354358_263013?offset=last&amp;f=replies">Показать все 10 комментариев</a><input type="hidden" id="start_reply-57354358_263013" value="263051">
    <div id="post-57354358_263051" class="reply reply_dived clear  _post" data-post-id="-57354358_263051">
||    !<div class="wl_replies" id="replies-57354358_262975"><div id="post-57354358_262977" class="reply reply_dived clear  _post" data-post-id="-57354358_262977">
||    <div id="post-57354358_262977" class="reply reply_dived clear  _post" data-post-id="-57354358_262977">
||    <span class="like_count _count">33</span>
\/
*/

function sortById(id_container,class_block, class_likes) {
    var ids_likes = [];
    $(class_block).each(function () {
        if (ids_likes.indexOf($(this).attr('id')) == -1) {
            id = $(this).attr('id');
            var likes_text = $('#' + id + ' '+class_likes).text();
            if (likes_text == "")
                likes = 0;
            else likes = parseInt(likes_text);
            ids_likes.push({ id: id, likes: likes });
        }
    });
    ids_likes.sort(function (post1, post2) {
        return post1.likes - post2.likes;
    });
    for (var i = 0; i < ids_likes.length; i++) {
        $(id_container).prepend($("#" + ids_likes[i].id));
    }
}
function sortCommentsInPost(replies_id) {
    var ids_likes_ = [];
    $('#' + replies_id + ' ' + '.reply.reply_dived').each(function () {
        var id = $(this).attr('id');
        var likes_text = $('#' + id + ' ' + '.like_count._count').text();
        if (likes_text == "")
            likes = 0;
        else likes = parseInt(likes_text);
        ids_likes_.push({ id: id, likes: likes });
    });
    ids_likes_.sort(function (post1, post2) {
        return post2.likes - post1.likes;
    });
    for (var i = 0; i < ids_likes_.length; i++) {
        $('#'+replies_id).append($("#" + ids_likes_[i].id));
    }
}
//<div class="replies_list _replies_list" id="replies-57354358_263013">
sortById('#page_wall_posts', '._post.post.page_block', '.post_like_count._count');
$('.replies_list._replies_list').each(function(){
    sortCommentsInPost($(this).attr('id'));
});
$('.wl_replies').each(function(){
    sortCommentsInPost($(this).attr('id'));
});
