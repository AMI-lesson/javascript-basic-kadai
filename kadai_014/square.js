// 関数を定義する、square関数＝引数として与えられた数値を二乗してその結果を返す
function square(num) {
    const result = num ** 2;//num** 2は「numを二乗する」
    return result;//result「結果を格納するための変数名」
}

//  関数を呼び出して結果をコンソールに出力する、output「出力」や「処理の結果」を格納するための変数
const output = square(10); // 引数として10を渡す
console.log(output); // コンソールに結果を出力