const getTodayDate=()=>{
    const today =new Date();// 現在の日付と時刻を取得
    const year=today.getFullYear();//年
    //+1と書かないと1月ではなく0月スタートと解されるから
    const month=today.getMonth()+1;//月
    const day=today.getDate();//日
    console.log(year+'年'+month+'月'+day+'日');
}

getTodayDate(); 