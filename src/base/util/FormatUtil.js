export default class FormatUtil
{
    static isPhoneNumber(phone)
    {
        if (phone && phone.length === 11)
        {
            return _isNum(phone);
        }

        return false;
    }

    static isCodeNumber(phone)
    {
        if (phone.length === 6)
        {
            return _isNum(phone);
        }

        return false;
    }

    static isQQ(qq)
    {
        if (qq !== "")
        {
            return _isNum(qq);
        }

        return false;
    }

    static getCurrentTime()
    {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
        return currentdate;
    }

    static  parseQuery(str){
        if (str === "")
        {
            return false;
        }
        return str.split('&').reduce((memo, x) => {
            let qa = x.split('=');
            if(!qa[0]) return memo;
            return Object.assign(memo, {
              [qa[0]]: qa[1]?qa[1]:""
            })
        }, {})
    }

    static isValidEmail(sText)
    {
        const reEmail = /^(?:\w+\.?)*\w+@(?:\w+\.)+\w+$/;
        return reEmail.test(sText);
    }

    static isValidImage(file)
    {
        if(typeof FileReader != 'undefined')
        {
             if((file.type).indexOf("image/")==-1)
             {
                 return false;
             }
        }
        else
        {
            var fileName=file.name;
            var suffixIndex=fileName.lastIndexOf(".");
            var suffix=fileName.substring(suffixIndex+1).toUpperCase();
            if(suffix!="BMP"&&suffix!="JPG"&&suffix!="JPEG"&&suffix!="PNG"&&suffix!="GIF")
            {
                return false;
            }
        }

        return true;
    }

    static openNewTab(url){
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
        (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
        (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
        var temp=null;
        if(Sys.ie){//ie浏览器
            temp='about:newTab';
        }else{
            temp='_blank';
        }
        var winTemp = window.open("", temp);
        winTemp.location.href = url;
    }

    static isPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    static checkBower()
    {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
      var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
      var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
      var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
      var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
      var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

      if (isIE)
      {
          return false;
       }//isIE end

       if (isFF) {  return false;}
       if (isOpera) {  return false;}
       if (isSafari) {  return false;}
       if (isChrome) { return true;}
       if (isEdge) { return true;}
    }

    static NumberToChinese(num){
        var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
        var chnUnitSection = ["","万","亿","万亿","亿亿"];
        var chnUnitChar = ["","十","百","千"];

        var unitPos = 0;
        var strIns = '', chnStr = '';
        var needZero = false;
        var delFirst = false;

        if(num === 0){
        return chnNumChar[0];
        }
        if(num>9 && num<20){
            delFirst = true;
        }
        while(num > 0){
        var section = num % 10000;
        if(needZero){
          chnStr = chnNumChar[0] + chnStr;
        }
        strIns = SectionToChinese(section,chnNumChar,chnUnitChar);
        strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
        chnStr = strIns + chnStr;
        needZero = (section < 1000) && (section > 0);
        num = Math.floor(num / 10000);
        unitPos++;
        }
        if(delFirst){
            chnStr=chnStr.substring(1);
        }
        return chnStr;
    }
}

//判断是否为纯数字
function _isNum(s)
{
    if (s!=null && s!="")
    {
        return !isNaN(s);
    }
    return false;
}

function SectionToChinese(section,chnNum,chnUnit){
  var strIns = '', chnStr = '';
  var unitPos = 0;
  var zero = true;
  while(section > 0){
    var v = section % 10;
    if(v === 0){
      if(!zero){
        zero = true;
        chnStr = chnNum[v] + chnStr;
      }
    }else{
      zero = false;
      strIns = chnNum[v];
      strIns += chnUnit[unitPos];
      chnStr = strIns + chnStr;
    }
    unitPos++;
    section = Math.floor(section / 10);
  }
  return chnStr;
}
