import html2canvas from 'html2canvas';

const downloadFile = (href: string, fileName = 'icon-') => {
  const downloadElement = document.createElement('a');
  downloadElement.href = href;
  downloadElement.download = `${fileName}.png`;
  document.body.appendChild(downloadElement);
  downloadElement.click();
  document.body.removeChild(downloadElement);
  window.URL.revokeObjectURL(href);
};

// dom元素转为图片
export const handleDomToImg = async (element: string, width: number, height: number) => {
  // 创建canvas元素
  const canvasdom = document.createElement('canvas');

  // 获取dom元素
  const graphImg = document.getElementById(element) || canvasdom;

  // 获取dom宽高
  const w = parseInt(window.getComputedStyle(graphImg).width, 10);
  const h = parseInt(window.getComputedStyle(graphImg).height, 10);

  // 设定 canvas 元素属性宽高为 DOM 节点宽高 * 像素比
  // const scaleBy = 2;
  // canvasdom.width = width * scaleBy;
  // canvasdom.height = height * scaleBy;

  canvasdom.width = width;
  canvasdom.height = height;

  // 设定 canvas css宽高为 DOM 节点宽高
  canvasdom.style.width = `${w}px`;
  canvasdom.style.height = `${h}px`;


  //scale:2 按比例增加分辨率，将绘制内容放大对应比例
  const canvas = await html2canvas(graphImg, { canvas: canvasdom, scale: 1  });

  //将canvas转为base64
  const url = canvas.toDataURL();

  //配置下载的文件名
  const fileName = `icon-${new Date().valueOf()}`;
  downloadFile(url, fileName);
};
