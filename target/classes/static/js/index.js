layui.use('table', function(){
    var table = layui.table;

    //第一个实例
    table.render({
        elem: '#demo'
        ,height: 312
        ,url: 'list' //数据接口
        ,method: 'get'
        ,page: true //开启分页
        ,cols: [[ //表头
            {field: 'id', title: 'ID', width:200, sort: true, fixed: 'left', style: 'background-color:red'}
            ,{field: 'username', title: '用户名', width: 200 }
            ,{field: 'city', title: '城市', width: 200}
            ,{field: 'sign', title: '签名', width: 200}
        ]]
    });

});