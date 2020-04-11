export default (time) => {
        // var date=new Date(parseInt(time));   //创建一个指定的日期对象
        // var year=date.getFullYear();  //取得4位数的年份
        // var month=(date.getMonth()+1+ '').padStart(2, '0');  //取得日期中的月份，其中0表示1月，11表示12月
        // var date=(date.getDate()+ '').padStart(2, '0');      //返回日期月份中的天数（1到31）
        // var hour=(date.getHours()+ '').padStart(2, '0');     //返回日期中的小时数（0到23）
        // var minute=(date.getMinutes()+ '').padStart(2, '0'); //返回日期中的分钟数（0到59）
        // var second=(date.getSeconds()+ '').padStart(2, '0'); //返回日期中的秒数（0到59）
        // return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
        let date = new Date(parseInt(time))
        let year = date.getFullYear()
        let month = (date.getMonth() + 1 + '').padStart(2, '0')
        let day = (date.getDate() + '').padStart(2, '0')
        let hour = (date.getHours()+ '').padStart(2, '0')
        var minute=(date.getMinutes()+ '').padStart(2, '0'); //返回日期中的分钟数（0到59）
        var second=(date.getSeconds()+ '').padStart(2, '0'); //返回日期中的秒数（0到59）
    return `${year}-${month}-${day} ${hour}:${minute}`
    // return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

