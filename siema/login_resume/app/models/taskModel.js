TaskSqlSentence = {
    /*使用ES6*/
    /*测试*/
    taskList:function(){
        console.log('2222')
        return `SELECT * from bonus_points LIMIT 0,10`
    },
    readyToPayAndPaidSum: function (yesterday) {
        return `select sum(pr.amount) readyToPayAndPaidSum from business_order bo
             LEFT JOIN pay_record pr on bo.order_id = pr.order_id 
             WHERE
             DATE_FORMAT(bo.create_date, '%Y-%m-%d') = ${yesterday}`;
    },
    paraTest:function (mobile) {
        return `SELECT * from sys_user WHERE mobile=${mobile}`
    },
    rollBackTest:function (name) {
        return `INSERT INTO table1 (name) VALUES ('${name}')`
    },
    user:function(account,password){
        return `select count(0) from user where password="${password}" and account="${account}"`
    }
}
module.exports = TaskSqlSentence;