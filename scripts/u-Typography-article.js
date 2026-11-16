/* ————————————————————————————————————————————————
   u-Typography 主题（Gridea Pro 移植版）—— 文章页脚本
   原始脚本来自「字无字 ú–Typography」
   Copyright (c) [2023] [Zhang Qingtian (张擎天) | u-typography.blog]
   按木兰宽松许可证（第 2 版）授权，http://license.coscl.org.cn/MulanPSL2
   本文件为适配博客场景所做的修改版。
   ———————————————————————————————————————————————— */

// 换字体的函数
function HuanZiTi(pageElements, targetType, typeWeight, typeSize) {
	document.body.querySelectorAll(pageElements).forEach((e) => {
		e.style.fontFamily = targetType;
		e.style.fontWeight = typeWeight;
		e.style.fontSize = typeSize;
	});
}
let BiaoTi_ZhongWen = "h1,h2,h3,h6,#tableOfContent li";
let BiaoTi_XiWen = "h1 > .Latin, h2 > .Latin, h3 > .Latin, h6 .Latin,#tableOfContent li .Latin";
let BiaoTi_BiaoDian = "h1 h-char.biaodian > h-inner, h2 h-char.biaodian > h-inner, h3 h-char.biaodian > h-inner, h6 h-char.biaodian > h-inner, #tableOfContent h-char.biaodian > h-inner";

let ZhengWen_ZhongWen = "p,table";
let ZhengWen_ZhongWen_QiangDiao = "p > strong, p > em";
let ZhengWen_ZhongWen_BiaoGe_TiTou = "th";
let ZhengWen_XiWen = "p > .Latin, p > a .Latin, p > cite > .Latin, p > cite > a > .Latin, p > q > .Latin, p > .orderedListIndex .Latin, table .Latin";
let ZhengWen_BiaoDian = "article p > h-char.biaodian > h-inner, article p .orderedListIndex h-char.biaodian > h-inner";

let BianZhu_ZhongWen = ".sideNote, .TuTi, .TuZhu";
let BianZhu_XiWen = ".sideNote > .Latin, .TuTi .Latin, .TuZhu .Latin";
let BianZhu_BiaoDian = ".sideNote h-char.biaodian > h-inner, .TuTi h-char.biaodian > h-inner, .TuZhu h-char.biaodian > h-inner";

// 初始的字体选择高亮并设定西文字体
function changeTypeMenu_initialActive() {
	let initial = ['changeTypeMenu-BiaoTi-SONG', 'changeTypeMenu-ZhengWen-HEI', 'changeTypeMenu-BianZhu-HEI'];
	for (let i = 0; i < initial.length; i++) {
		let el = document.getElementById(initial[i]);
		if (el) {
			el.style.cssText = "background-color: var(--colour-changeType-selected) !important; color:black;";
		}
	}
	//下面是设定初始的西文字体
	HuanZiTi(BiaoTi_XiWen, "var(--font-serif)", "600", "1.05em");
	HuanZiTi(ZhengWen_XiWen, "var(--font-sans)", "400", "1.1em");
	HuanZiTi(BianZhu_XiWen, "var(--font-sans)", "400", "1.1em");
}

//点击换字体按钮后改变按钮颜色
function changeTypeMenu_switchColour(active, inactive) {
	let a = document.querySelector(active);
	if (a) a.style.cssText = "background-color: var(--colour-changeType-selected) !important; color:black";
	let b = document.querySelector(inactive);
	if (b) b.style.cssText = "background-color: var(--colour-changeType-unselected); color:white";
}

//————————按钮的换字体功能————————

function bindFontButton(id, handler) {
	let el = document.getElementById(id);
	if (el) el.onclick = handler;
}

// 标题换宋体
bindFontButton('changeTypeMenu-BiaoTi-SONG', function changefont_BiaoTi_SONG() {
	HuanZiTi(BiaoTi_ZhongWen, "var(--font-song)", "700", "");
	HuanZiTi(BiaoTi_XiWen, "var(--font-serif)", "600", "1.05em");
	HuanZiTi(BiaoTi_BiaoDian, "var(--font-song-biaodian)", "700", "");
	changeTypeMenu_switchColour("#changeTypeMenu-BiaoTi-SONG", "#changeTypeMenu-BiaoTi-HEI");
});
// 标题换黑体
bindFontButton('changeTypeMenu-BiaoTi-HEI', function changefont_BiaoTi_HEI() {
	HuanZiTi(BiaoTi_ZhongWen, "var(--font-hei)", "700");
	HuanZiTi(BiaoTi_XiWen, "var(--font-sans)", "600", "1.1em");
	HuanZiTi(BiaoTi_BiaoDian, "var(--font-hei-biaodian)", "700", "");
	changeTypeMenu_switchColour("#changeTypeMenu-BiaoTi-HEI", "#changeTypeMenu-BiaoTi-SONG");
});
// 正文换宋体
bindFontButton('changeTypeMenu-ZhengWen-SONG', function changefont_ZhengWen_SONG() {
	HuanZiTi(ZhengWen_ZhongWen, "var(--font-song)", "600", "");
	HuanZiTi(ZhengWen_ZhongWen_QiangDiao, "'TeShuBiaoDian', var(--font-song)", "600", "");
	HuanZiTi(ZhengWen_ZhongWen_BiaoGe_TiTou, "var(--font-song)", "700", "");
	HuanZiTi(ZhengWen_XiWen, "var(--font-serif)", "400", "1.05em");
	HuanZiTi(ZhengWen_BiaoDian, "var(--font-song-biaodian)", "600", "");
	document.body.querySelectorAll(".sideNoteMark h-inner").forEach((e) => {
		e.style.fontFamily = "var(--font-hei-biaodian)";
		e.style.fontWeight = "400";
	});//边注编号不换字体
	changeTypeMenu_switchColour("#changeTypeMenu-ZhengWen-SONG", "#changeTypeMenu-ZhengWen-HEI");
});
//正文换黑体
bindFontButton('changeTypeMenu-ZhengWen-HEI', function changefont_ZhengWen_HEI() {
	HuanZiTi(ZhengWen_ZhongWen, "var(--font-hei)", "400", "");
	HuanZiTi(ZhengWen_ZhongWen_QiangDiao, "'TeShuBiaoDian', var(--font-hei)", "400", "");
	HuanZiTi(ZhengWen_ZhongWen_BiaoGe_TiTou, "var(--font-hei)", "600", "");
	HuanZiTi(ZhengWen_XiWen, "var(--font-sans)", "400", "1.1em");
	HuanZiTi(ZhengWen_BiaoDian, "var(--font-hei-biaodian)", "400", "");
	changeTypeMenu_switchColour("#changeTypeMenu-ZhengWen-HEI", "#changeTypeMenu-ZhengWen-SONG");
});
//边注换宋体
bindFontButton('changeTypeMenu-BianZhu-SONG', function changefont_BianZhu_SONG() {
	HuanZiTi(BianZhu_ZhongWen, "var(--font-song)", "600", "");
	HuanZiTi(BianZhu_XiWen, "var(--font-serif)", "400", "1.05em");
	HuanZiTi(BianZhu_BiaoDian, "var(--font-song-biaodian)", "600", "");
	document.body.querySelectorAll(".tabulation h-inner").forEach((e) => {
		e.style.fontFamily = "var(--font-hei-biaodian)";
		e.style.fontWeight = "400";
	});//边注编号不换字体
	changeTypeMenu_switchColour("#changeTypeMenu-BianZhu-SONG", "#changeTypeMenu-BianZhu-HEI");
});
//边注换黑体
bindFontButton('changeTypeMenu-BianZhu-HEI', function changefont_BianZhu_HEI() {
	HuanZiTi(BianZhu_ZhongWen, "var(--font-hei)", "400", "");
	HuanZiTi(BianZhu_XiWen, "var(--font-sans)", "400", "1.1em");
	HuanZiTi(BianZhu_BiaoDian, "var(--font-hei-biaodian)", "400", "");
	changeTypeMenu_switchColour("#changeTypeMenu-BianZhu-HEI", "#changeTypeMenu-BianZhu-SONG");
});

// 打开／关闭更换字体菜单
let typeButton = document.getElementById("changeTypeMenu-Button");
if (typeButton) {
	typeButton.onclick = function () {
		let menu = document.getElementById("changeTypeMenu");
		let menuVisibility = menu.style.visibility;
		let windowWidth = window.innerWidth;
		if (windowWidth < 1040) {
			if (menuVisibility == "hidden") {
				menu.style.visibility = "visible";
				menu.style.opacity = "1";
				menu.style.top = "70px";
			} else {
				menu.style.visibility = "hidden";
				menu.style.opacity = "0";
				menu.style.top = "60px";
			}
		} else {
			if (menuVisibility == "hidden") {
				menu.style.visibility = "visible";
				menu.style.opacity = "1";
				menu.style.left = "70px";
			} else {
				menu.style.visibility = "hidden";
				menu.style.opacity = "0";
				menu.style.left = "60px";
			}
		}
	};
}

// 按照窗口尺寸自动适配字体菜单的位置
function changeMenuPosition() {
	let menu = document.getElementById("changeTypeMenu");
	if (!menu) return;
	let menuVisibility = menu.style.visibility;
	let windowWidth = window.innerWidth;
	if (menuVisibility == "hidden") {
		if (windowWidth < 1040) {
			menu.style.bottom = "auto";
			menu.style.top = "60px";
			menu.style.left = "auto";
			menu.style.right = "15px";
		} else {
			menu.style.bottom = "15px";
			menu.style.top = "auto";
			menu.style.left = "60px";
			menu.style.right = "auto";
		}
	} else {
		if (windowWidth < 1040) {
			menu.style.bottom = "auto";
			menu.style.top = "70px";
			menu.style.left = "auto";
			menu.style.right = "15px";
		} else {
			menu.style.bottom = "15px";
			menu.style.top = "auto";
			menu.style.left = "70px";
			menu.style.right = "auto";
		}
	}
}
window.addEventListener("resize", changeMenuPosition);
changeMenuPosition();


// 打开／关闭文章目录
let toc = document.getElementById("toc-Container");
let switcher = document.getElementById("toc-Switcher");
let switcherOnOff = "off";
let arrow = document.getElementById("tocSwitcher-ButtonSVG");
if (switcher && arrow && toc) {
	switcher.onclick = function () {
		let windowWidth = window.innerWidth;
		if (switcherOnOff == "off") {
			if (windowWidth > 1400) {
				toc.style.opacity = "1";
				toc.style.top = "0";
				toc.style.left = "0";
				toc.style.width = "18rem";
				toc.style.height = "100px";
			} else if (windowWidth <= 1400 && windowWidth > 1040) {
				toc.style.opacity = "1";
				toc.style.top = "0";
				toc.style.left = "3rem";
				toc.style.width = "15rem";
				toc.style.height = "100%";
				arrow.style.transform = "rotateZ(-270deg)";
			} else {
				toc.style.opacity = "1";
				toc.style.top = "3rem";
				toc.style.left = "0";
				toc.style.width = "100%";
				toc.style.height = "calc(80% - 3rem)";
				arrow.style.transform = "rotateZ(180deg)";
			}
			switcherOnOff = "on";
		} else if (switcherOnOff == "on") {
			if (windowWidth > 1400) {
				toc.style.opacity = "1";
				toc.style.top = "0";
				toc.style.left = "0";
				toc.style.width = "18rem";
				toc.style.height = "100px";
			} else if (windowWidth <= 1400 && windowWidth > 1040) {
				toc.style.opacity = "0.1";
				toc.style.top = "0";
				toc.style.left = "-12rem";
				toc.style.width = "15rem";
				toc.style.height = "100%";
				arrow.style.transform = "rotateZ(-90deg)";
			} else {
				toc.style.opacity = "0.1";
				toc.style.top = "-90%";
				toc.style.left = "0";
				toc.style.width = "100%";
				toc.style.height = "calc(80% - 3rem)";
				arrow.style.transform = "rotateZ(0deg)";
			}
			switcherOnOff = "off";
		}
	};
}

// 按照窗口尺寸自动适配文章目录的位置
function changeTocPosition() {
	if (!toc) return;
	let windowWidth = window.innerWidth;
	if (arrow) {
		if (windowWidth > 1400) {
			toc.style.opacity = "1";
			toc.style.top = "0";
			toc.style.left = "0";
			toc.style.width = "18rem";
			toc.style.height = "100px";
		} else if (windowWidth <= 1400 && windowWidth > 1040) {
			if (switcherOnOff == "on") {
				toc.style.opacity = "1";
				toc.style.top = "0";
				toc.style.left = "3rem";
				toc.style.width = "15rem";
				toc.style.height = "100%";
				arrow.style.transform = "rotateZ(-270deg)";
			} else if (switcherOnOff == "off") {
				toc.style.opacity = "0.1";
				toc.style.top = "0";
				toc.style.left = "-12rem";
				toc.style.width = "15rem";
				toc.style.height = "100%";
				arrow.style.transform = "rotateZ(-90deg)";
			}
		} else if (windowWidth <= 1040) {
			if (switcherOnOff == "on") {
				toc.style.opacity = "1";
				toc.style.top = "3rem";
				toc.style.left = "0";
				toc.style.width = "100%";
				toc.style.height = "calc(80% - 3rem)";
				arrow.style.transform = "rotateZ(180deg)";
			} else if (switcherOnOff == "off") {
				toc.style.opacity = "0.1";
				toc.style.top = "-90%";
				toc.style.left = "0";
				toc.style.width = "100%";
				toc.style.height = "calc(80% - 3rem)";
				arrow.style.transform = "rotateZ(0deg)";
			}
		}
	}
}
window.addEventListener("resize", changeTocPosition);
changeTocPosition();

// 点击目录项后自动关闭目录
window.addEventListener("click", closeMenuAfterClick, false);
function closeMenuAfterClick(e) {
	if (e.target.matches('.tocH2 a') || e.target.matches('.tocH3 a') || e.target.matches('.tocH2 a span') || e.target.matches('.tocH3 a span') || e.target.matches('.tocH2 .biaodian') || e.target.matches('.tocH3 .biaodian') || e.target.matches('.tocH2 h-inner') || e.target.matches('.tocH3 h-inner') || e.target.matches('#toc-backToMainTitle a') || e.target.matches('#toc-skipToFootnote a')) {
		let windowWidth = window.innerWidth;
		if (arrow && toc) {
			if (windowWidth > 1400) {
				toc.style.opacity = "1";
				toc.style.top = "0";
				toc.style.left = "0";
				toc.style.width = "18rem";
				toc.style.height = "100px";
			} else if (windowWidth < 1400 && windowWidth > 1040) {
				toc.style.opacity = "0.1";
				toc.style.top = "0";
				toc.style.left = "-12rem";
				toc.style.width = "15rem";
				toc.style.height = "100%";
				arrow.style.transform = "rotateZ(-90deg)";
			} else {
				toc.style.opacity = "0.1";
				toc.style.top = "-90%";
				toc.style.left = "0";
				toc.style.width = "100%";
				toc.style.height = "calc(80% - 3rem)";
				arrow.style.transform = "rotateZ(0deg)";
			}
			switcherOnOff = "off";
		}
	}
}

// 在小尺寸下让行长等于字号的整数倍
function chineseGridLine() {
	let YeMian = document.getElementById("whole");
	if (!YeMian) return;
	let bodyWidth = document.body.offsetWidth;
	let ZiShu = Math.floor(bodyWidth / 20) - 1;
	if (bodyWidth < 680) {
		YeMian.style.width = ZiShu + "em";
	} else {
		YeMian.style.cssText = " ";
	}
}
window.visualViewport.addEventListener("resize", chineseGridLine);
chineseGridLine();

// 对非折叠式目录调整它的高度
function tocHeight() {
	let MuLu = document.getElementById("tableOfContent");
	if (!MuLu) return;
	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;
	if (windowWidth >= 1380) {
		MuLu.style.height = windowHeight + "px";
	} else {
		MuLu.style.cssText = "";
	}
}
window.visualViewport.addEventListener("resize", tocHeight);
tocHeight();

// 点击放大的图片让它复原
window.addEventListener("click", resizeImage, false);
function resizeImage(e) {
	if (e.target.matches('figure img') || e.target.matches('#mainContent article img')) {
		let a = document.querySelector("article");
		if (!a) return;
		a.insertAdjacentHTML('beforeend', '<div id="fullScreenImageContainer"></div><img id="originalSizeImage" src="">');
		let container = document.querySelector('#fullScreenImageContainer');
		let image = document.getElementById("originalSizeImage");
		image.src = e.target.src;
		container.style.cssText = "display: block; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(245,244,242,0.95); z-index: 100; cursor: zoom-out;";
		image.style.cssText = "display: block; position: fixed; max-width: 90%; max-height: 90%; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(100%, 100%); z-index: 101; opacity: 1; transition: all 200ms ease-in-out; box-shadow: 0 0 20px rgba(50,50,50,0.3);";
		let removeImage = function () {
			image.style.opacity = "0";
			image.style.transform = "translate(-50%, -50%) scale(60%, 60%)";
			let doRemove = function () {
				image.remove();
				container.remove();
			};
			setTimeout(doRemove, 200);
		};
		container.onclick = removeImage;
		image.onclick = removeImage;
	}
}
