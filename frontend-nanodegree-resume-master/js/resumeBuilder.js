/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	name:"小丽",
	role:"Web前端",
	contacts:{
		mobile:"135****9051",
		email:"101****027@qq.com",
		github:"keer0",
		location:"北京"
	},
	welcomeMessage:"快乐每一天！",
	skills:["html","css","js","jQ"],
	//biopic:,
	display:function(){
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#header").prepend(formattedName);
		$("#header").prepend(formattedRole);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);
	}
};
bio.display();
//var education = {
//	schools:[
//		{
//			name:"中亚",
//			location:"北京",
//			degree:"初级",
//			majors:"网站建设",
//			dates:"2013-2014 ",
//			url:"http://www.zhongya.com.cn/"
//		}
//	],
//	onlineCourses:[
//		{
//			title:"Web前端",
//			school:"udacity",
//			dates:"Web前端",
//			dates:"2017",
//			url:"https://cn.udacity.com/"
//		}
//	],
//	display:function(){}
//};
//var work = {
//	jobs:[
//		{
//			employer:"香蕉广告",
//			title:"行政前台",
//			location:"北京",
//			dates:"2012-2014",
//			description:"负责公司接待客户，新员工入职，社保，办公用品、日常用品和礼品的购买，收发快递，开发票，统计报销、考勤、发票，照顾花草（爱好养花），被称为公司管家"
//		},
//		{
//			employer:"香蕉广告",
//			title:"网站工程师",
//			location:"北京",
//			dates:"2014-2017",
//			description:"负责静态网站（自适应PC、IPAD、手机）、微信分享页面（手机端）、动态网站前端部分，微信公众号管理，邮箱管理，域名备案，静态网站上传到服务器，做了一段时间的客户执行"
//		}
//	]
//	display:function(){}
//};
//var projects = {
//	projects:[
//		{
//			title:"独角兽",
//			dates:"2014",
//			description:"做了PC、手机两版页面。PC端可根据屏幕大小自适应，手机端也是。通过PHP判断解析需要哪一版的页面",
//			images:["images/dujiaoshou(PC).png","images/dujiaoshou(mobile).png"]
//		},
//		{
//			title:"信中利",
//			dates:"2015",
//			description:"动态网站，向下兼容到IE8以上",
//			images:["images/xinzhongli(index).png","images/xinzhongli(touzizuhe).png"]
//		},
//		{
//			title:"香蕉广告",
//			dates:"2016",
//			description:"静态网站，HTML5+CSS3自适应PC+mobile",
//			images:["images/xiangjiaoguanggao(PC).png","images/xiangjiaoguanggao(mobile).png"]
//		}
//	]
//}
