"use strict";

let user = {
  id: /[0-9]+/.exec(document.querySelectorAll('#ct > div > div.bm.bw0 > div > div.bm_c.u_profile > div:nth-child(1) > h2 > span')[0].innerText.trim())[0]
};
user.name = document.querySelectorAll('#uhd > div.h.cl > h2')[0].innerText.trim();
user.avatar = document.querySelector('#uhd > div.h.cl > div > a > img').getAttribute('src').replace('size=small', 'size=big');

for (let i of document.querySelectorAll('div.pbm.mbm.bbda.cl > ul > li')) {
  switch (i.querySelector('em').innerText.trim()) {
    case '邮箱状态':
      i.removeChild(i.querySelector('em'));
      user.mailState = i.innerText.trim();
      break;

    case '视频认证':
      i.removeChild(i.querySelector('em'));
      user.videoProve = i.innerText.trim();
      break;

    case '自定义头衔':
      i.removeChild(i.querySelector('em'));
      user.rank = i.innerText.trim();
      break;

    case '个人签名':
      i.removeChild(i.querySelector('em'));
      user.signature = i.innerHTML;
      break;
    // case '统计信息':

    case '星座':
      i.removeChild(i.querySelector('em'));
      user.starSign = i.innerText.trim();
      break;

    case '个人主页':
      i.removeChild(i.querySelector('em'));
      user.homePage = i.innerText.trim();
      break;

    case 'Java版ID':
      i.removeChild(i.querySelector('em'));
      user.javaVersionID = i.innerText.trim();
      break;

    case '基岩版ID':
      i.removeChild(i.querySelector('em'));
      user.bedrockVersionID = i.innerText.trim();
      break;
    // case '管理组':
    // case '用户组':
    // case '扩展用户组':

    case '在线时间':
      i.removeChild(i.querySelector('em'));
      user.onlineTimeCount = i.innerText.trim();
      break;

    case '注册时间':
      i.removeChild(i.querySelector('em'));
      user.registerTime = i.innerText.trim();
      break;

    case '最后访问':
    case '上次活动时间':
      i.removeChild(i.querySelector('em'));
      user.latestOnlineTime = i.innerText.trim();
      break;

    case '上次发表时间':
      i.removeChild(i.querySelector('em'));
      user.latestReplyTime = i.innerText.trim();
      break;

    case '所在时区':
      i.removeChild(i.querySelector('em'));
      user.timeZone = i.innerText.trim();
      break;
  }
}