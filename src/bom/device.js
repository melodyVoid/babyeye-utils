export function isMobile() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i);
  var bIsIphoneOs = sUserAgent.match(/iphone os/i);
  var bIsMidp = sUserAgent.match(/midp/i);
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i);
  var bIsUc = sUserAgent.match(/ucweb/i);
  var bIsAndroid = sUserAgent.match(/android/i);
  var bIsCE = sUserAgent.match(/windows ce/i);
  var bIsWM = sUserAgent.match(/windows mobile/i);
  if (
    bIsIpad ||
    bIsIphoneOs ||
    bIsMidp ||
    bIsUc7 ||
    bIsUc ||
    bIsAndroid ||
    bIsCE ||
    bIsWM
  ) {
    return true;
  } else {
    return false;
  }
}
