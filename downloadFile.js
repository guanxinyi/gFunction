/*
 * @Descripttion: 前端下载base64图片
 * @version:
 * @Author: guanxiaoxin
 * @Date: 2021-12-23 12:52:42
 * @LastEditors: guanxiaoxin
 * @LastEditTime: 2021-12-23 13:10:21
 * @FilePath: /guan_fun/downloadFile.js
 */
let downloadFile = (fileName, content) => {
  let aLink = document.createElement('a');
  let blob = base64ToBlob(content); //new Blob([content]);

  let evt = document.createEvent("HTMLEvents");
  evt.initEvent("click", true, true);//initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);

  // aLink.dispatchEvent(evt);
  aLink.click()
}
let base64ToBlob = (code) => {
  let parts = code.split(';base64,');
  let contentType = parts[0].split(':')[1];
  let raw = window.atob(parts[1]);
  let rawLength = raw.length;

  let uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: contentType });
}

