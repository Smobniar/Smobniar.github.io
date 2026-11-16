/* ————————————————————————————————————————————————
   u-Typography 主题（Gridea Pro 移植版）—— 首页脚本
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
let FenLei_ZhongWen = "h2, .contentMenuList";
let FenLei_BiaoDian = "h2 h-char.biaodian > h-inner, .contentMenuList h-char.biaodian > h-inner";

let ZhuTi_ZhongWen = "ul,h3";
let ZhuTi_XiWen = "section .listContainer .Latin";
let ZhuTi_BiaoDian = "section .listContainer h-char.biaodian > h-inner";

let FuTi_ZhongWen = ".subtitle";
let FuTi_XiWen = ".subtitle .Latin";
let FuTi_BiaoDian = ".subtitle h-char.biaodian > h-inner";

// 初始的字体选择高亮并设定西文字体
function changeTypeMenu_initialActive() {
	let initial = ['changeTypeMenu-ZhuTi-SONG', 'changeTypeMenu-FenLei-SONG', 'changeTypeMenu-FuTi-HEI'];
	for (let i = 0; i < initial.length; i++) {
		let el = document.getElementById(initial[i]);
		if (el) {
			el.style.cssText = "background-color: var(--colour-changeType-selected) !important; color:black;";
		}
	}
	HuanZiTi(ZhuTi_XiWen, "var(--font-serif)", "400", "1.05em");
	HuanZiTi(FuTi_XiWen, "var(--font-sans)", "400", "1.1em");
}

// 点击换字体按钮后改变按钮颜色
function changeTypeMenu_switchColour(active, inactive) {
	let a = document.querySelector(active);
	if (a) a.style.cssText = "background-color: var(--colour-changeType-selected) !important; color:black";
	let b = document.querySelector(inactive);
	if (b) b.style.cssText = "background-color: var(--colour-changeType-unselected); color:white";
}

function bindFontButton(id, handler) {
	let el = document.getElementById(id);
	if (el) el.onclick = handler;
}

//————————按钮的换字体功能————————

// 分类换宋体
bindFontButton('changeTypeMenu-FenLei-SONG', function changefont_FenLei_SONG() {
	HuanZiTi(FenLei_ZhongWen, "var(--font-song)", "700", "");
	HuanZiTi(FenLei_BiaoDian, "var(--font-song-biaodian)", "700", "");
	changeTypeMenu_switchColour("#changeTypeMenu-FenLei-SONG", "#changeTypeMenu-FenLei-HEI");
});
// 分类换黑体
bindFontButton('changeTypeMenu-FenLei-HEI', function changefont_FenLei_HEI() {
	HuanZiTi(FenLei_ZhongWen, "var(--font-hei)", "700", "");
	HuanZiTi(FenLei_BiaoDian, "var(--font-hei-biaodian)", "700", "");
	changeTypeMenu_switchColour("#changeTypeMenu-FenLei-HEI", "#changeTypeMenu-FenLei-SONG");
});

// 主题（文章标题）换宋体
bindFontButton('changeTypeMenu-ZhuTi-SONG', function changefont_ZhuTi_SONG() {
	HuanZiTi(ZhuTi_ZhongWen, "var(--font-song)", "600", "");
	HuanZiTi(ZhuTi_XiWen, "var(--font-serif)", "400", "1.05em");
	HuanZiTi(ZhuTi_BiaoDian, "var(--font-song-biaodian)", "600", "");
	changeTypeMenu_switchColour("#changeTypeMenu-ZhuTi-SONG", "#changeTypeMenu-ZhuTi-HEI");
});
// 主题（文章标题）换黑体
bindFontButton('changeTypeMenu-ZhuTi-HEI', function changefont_ZhuTi_HEI() {
	HuanZiTi(ZhuTi_ZhongWen, "var(--font-hei)", "400", "");
	HuanZiTi(ZhuTi_XiWen, "var(--font-sans)", "400", "1.1em");
	HuanZiTi(ZhuTi_BiaoDian, "var(--font-hei-biaodian)", "400", "");
	changeTypeMenu_switchColour("#changeTypeMenu-ZhuTi-HEI", "#changeTypeMenu-ZhuTi-SONG");
});

// 副题（摘要）换宋体
bindFontButton('changeTypeMenu-FuTi-SONG', function changefont_FuTi_SONG() {
	HuanZiTi(FuTi_ZhongWen, "var(--font-song)", "600", "");
	HuanZiTi(FuTi_XiWen, "var(--font-serif)", "400", "1.05em");
	HuanZiTi(FuTi_BiaoDian, "var(--font-song-biaodian)", "600", "");
	changeTypeMenu_switchColour("#changeTypeMenu-FuTi-SONG", "#changeTypeMenu-FuTi-HEI");
});
// 副题（摘要）换黑体
bindFontButton('changeTypeMenu-FuTi-HEI', function changefont_FuTi_HEI() {
	HuanZiTi(FuTi_ZhongWen, "var(--font-hei)", "400", "");
	HuanZiTi(FuTi_XiWen, "var(--font-sans)", "400", "1.1em");
	HuanZiTi(FuTi_BiaoDian, "var(--font-hei-biaodian)", "400", "");
	changeTypeMenu_switchColour("#changeTypeMenu-FuTi-HEI", "#changeTypeMenu-FuTi-SONG");
});

// 打开／关闭更换字体菜单
let typeButton = document.getElementById("changeTypeMenu-Button");
if (typeButton) {
	typeButton.onclick = function () {
		let menu = document.getElementById("changeTypeMenu");
		if (!menu) return;
		let menuVisibility = menu.style.visibility;
		if (menuVisibility == "hidden") {
			menu.style.visibility = "visible";
			menu.style.opacity = "1";
			menu.style.top = "70px";
		} else {
			menu.style.visibility = "hidden";
			menu.style.opacity = "0";
			menu.style.top = "60px";
		}
	};
}

// 打开／关闭分类目录菜单
let menuButton = document.getElementById("contentMenu-Button");
if (menuButton) {
	menuButton.onclick = function () {
		let menu = document.getElementById("contentMenu");
		if (!menu) return;
		let menuVisibility = menu.style.visibility;
		if (menuVisibility == "hidden") {
			menu.style.visibility = "visible";
			menu.style.opacity = "1";
			menu.style.top = "65px";
		} else {
			menu.style.visibility = "hidden";
			menu.style.opacity = "0";
			menu.style.top = "55px";
		}
	};
}

// 点击分类目录菜单项后自动关闭目录
window.addEventListener("click", closeMenuAfterClick, false);
function closeMenuAfterClick(e) {
	if (e.target.matches('#contentMenu a') || e.target.matches('#contentMenu span')) {
		let menu = document.getElementById("contentMenu");
		if (!menu) return;
		menu.style.visibility = "hidden";
		menu.style.opacity = "0";
		menu.style.top = "55px";
	}
}

// 在小尺寸下让行长等于字号的整数倍
function chineseGridLine() {
	let YeMian = document.getElementById("whole");
	if (!YeMian) return;
	let bodyWidth = document.body.offsetWidth;
	let ZiShu = Math.floor(bodyWidth / 22) - 1;
	let HangChang = ZiShu * 22;
	if (bodyWidth < 740) {
		YeMian.style.width = HangChang + "px";
	} else {
		YeMian.style.cssText = " ";
	}
}
window.visualViewport.addEventListener("resize", chineseGridLine);
chineseGridLine();
