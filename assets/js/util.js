
// 格式化播放量
export function formatCount(count) {
    return count > 10000 ? (count / 10000).toFixed(2) + '万' : count
}

// 去除字符串前后空格
export function myTrim(str) {
    return str.replace(/^\s+|\s+$/gm,'');
}

/**
 * 将数组按参数分割
 * @param {arr} 要分割的数组
 * @param {n} 每个数组分割的个数
 */
export function spliceArray(arr, n) {
    let res = []
    let page = Math.ceil(arr.length / n)

    for (let i = 0; i < page; i ++) {
        let _arr = arr.slice(i * n, (i + 1) * n)
        
        res.push(_arr)
    }

    return res
}

// 得到范围随机数
export function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}