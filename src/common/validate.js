/**
 * 进行数据验证的js文件
 */
 
/*
 * 判断字符串是否空
 */
export function isNull (v) {
  if (v === '' || v === null || v === 'null' || v === undefined) {
    return true
  } else {
    return false
  }
}
/*
 * 判断数组是否空
 */
export function isListNull (v) {
  if (v !== '' && v !== null && v !== 'null' && v !== undefined && v.length > 0) {
    return false
  } else {
    return true
  }
}
// 判断是否为手机号
export function isPoneAvailable (str) {
  var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  if (!myreg.test(str)) {
    return false
  } else {
    return true
  }
}
/**
 * 验证身份证号
 * @param {*} num
 */
export function isIdCard (num) {
  num = num.toUpperCase()
  // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
  if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
    // alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');
    return false
  }
  // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
  // 下面分别分析出生日期和校验位
  var len, re
  len = num.length
  if (len === 15) {
    re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/)
    var arrSplit = num.match(re)
    // 检查生日日期是否正确
    var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
    var bGoodDay
    bGoodDay = (dtmBirth.getYear() === Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) === Number(arrSplit[3])) && (dtmBirth.getDate() === Number(arrSplit[4]))
    if (!bGoodDay) {
      // alert('输入的身份证号里出生日期不对！')
      return false
    } else {
      // 将15位身份证转成18位
      // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
      var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
      var nTemp = 0
      var i
      num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6)
      for (i = 0; i < 17; i++) {
        nTemp += num.substr(i, 1) * arrInt[i]
      }
      num += arrCh[nTemp % 11]
      return true
    }
  }
  if (len === 18) {
    re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/)
    var arrSplit1 = num.match(re)
    // 检查生日日期是否正确
    var dtmBirth1 = new Date(arrSplit1[2] + '/' + arrSplit1[3] + '/' + arrSplit1[4])
    var bGoodDay1
    bGoodDay1 = (dtmBirth1.getFullYear() === Number(arrSplit1[2])) && ((dtmBirth1.getMonth() + 1) === Number(arrSplit1[3])) && (dtmBirth1.getDate() === Number(arrSplit1[4]))
    if (!bGoodDay1) {
      return false
    } else {
      // 检验18位身份证的校验码是否正确。
      // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
      var valnum
      var arrInt1 = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      var arrCh1 = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
      var nTemp1 = 0
      var j
      for (j = 0; j < 17; j++) {
        nTemp1 += num.substr(j, 1) * arrInt1[j]
      }
      valnum = arrCh1[nTemp1 % 11]
      if (valnum !== num.substr(17, 1)) {
        // alert('18位身份证的校验码不正确！应该为：' + valnum)
        return false
      }
      return true
    }
  }
  return false
}