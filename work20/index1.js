//获取按钮添加单击事件，获取第一个下路况中被选中的option添加到下拉框
$('#toRight').click(function () {  //右移
    $('#right>select').append($('#left>select>option:selected'));
});
$('#toLeft').click(function () {  //左移
    $('#left>select').append($('#right>select>option:selected'));
});
$('#toALLRight').click(function () {  //全部右移
    $('$right>select').append($('#left>select>option'));
});
$('#toAllLeft').click(function () {   //全部左移
    $('#left>select').append($('#right>select>option'));
});