/*
This is empty on purpose! Your code to build the resume will go here.
 */
'use strict'
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
	biopic:"images/fry.jpg",
	display:function(){
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		var formattedBiopic = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		
		$("#header").prepend(formattedName,formattedRole);
		$("#header").append(formattedBiopic,formattedMsg);
		$("#topContacts,#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);	
		if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			for(var i = 0; i < bio.skills.length; i++){
				var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};
bio.display();

var work = {
	jobs:[
		{
			employer:"香蕉广告",
			title:"行政前台",
			location:"北京",
			dates:"2012-2014",
			description:"负责公司接待客户，新员工入职，社保，办公用品、日常用品和礼品的购买，收发快递，开发票，统计报销、考勤、发票，照顾花草（爱好养花），被称为公司管家"
		},
		{
			employer:"香蕉广告",
			title:"网站工程师",
			location:"北京",
			dates:"2014-2017",
			description:"负责静态网站（自适应PC、IPAD、手机）、微信分享页面（手机端）、动态网站前端部分，微信公众号管理，邮箱管理，域名备案，静态网站上传到服务器，做了一段时间的客户执行"
		}
	],
	display:function(){
		work.jobs.forEach(function(job){
			$("#workExperience").append(HTMLworkStart);
			var iobEmloyer = HTMLworkEmployer.replace("%data%",job.employer);
			var jobTitle = HTMLworkTitle.replace("%data%",job.title);
			var formattedName = iobEmloyer + jobTitle;
			var formattedLocation = HTMLworkLocation.replace("%data%",job.location);
			var formattedDates = HTMLworkDates.replace("%data%",job.dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",job.description);
			$(".work-entry:last").append(formattedName,formattedLocation,formattedDates,formattedDescription);
		})
	}
};
work.display();
var projects = {
	projects:[
		{
			title:"独角兽",
			dates:"2014",
			description:"做了PC、手机两版页面。PC端可根据屏幕大小自适应，手机端也是。通过PHP判断解析需要哪一版的页面",
			images:["images/dujiaoshou(PC).png","images/dujiaoshou(mobile).png"]
		},
		{
			title:"信中利",
			dates:"2015",
			description:"动态网站，向下兼容到IE8以上",
			images:["images/xinzhongli(index).png","images/xinzhongli(touzizuhe).png"]
		},
		{
			title:"香蕉广告",
			dates:"2016",
			description:"静态网站，HTML5+CSS3自适应PC+mobile",
			images:["images/xiangjiaoguanggao(PC).png","images/xiangjiaoguanggao(mobile).png"]
		}
	],
	display:function(){
		projects.projects.forEach(function(project){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
			var formattedDaes = HTMLprojectDates.replace("%data%",project.dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
			$(".project-entry:last").append(formattedTitle,formattedDaes,formattedDescription);
			if(project.images.length > 0){
				for(var i = 0; i < project.images.length; i++){
					var formattedImg = HTMLprojectImage.replace("%data%",project.images[i]);
					$(".project-entry:last").append(formattedImg);
				}
			}
		})
	}
};
projects.display();
var education = {
	schools:[
		{
			name:"中亚",
			location:"北京",
			degree:"初级",
			majors:["网站建设","网站建设"],
			dates:"2013-2014 ",
			url:"http://www.zhongya.com.cn/"
		}
	],
	onlineCourses:[
		{
			title:"Web前端",
			school:"udacity",
			dates:"2017",
			url:"https://cn.udacity.com/"
		}
	],
	display:function(){
		education.schools.forEach(function(school){
			$("#education").append(HTMLschoolStart);
			var schoolUrl = HTMLschoolName.replace("#",school.url);
			var schoolName = schoolUrl.replace("%data%",school.name);
			var schoolDegre = HTMLschoolDegree.replace("%data%",school.degree);
			var formattedName = schoolName + schoolDegre;
			var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
			
			var formattedDates= HTMLschoolDates.replace("%data%",school.dates);
			var formattedUrl = HTMLonlineURL.replace("%data%",school.url);
			
			$(".education-entry:last").append(formattedName,formattedLocation,formattedDates);
			if(school.majors.length > 0){
				school.majors.forEach(function(major){
					var formattedMajors = HTMLschoolMajor.replace("%data%",major);
					$(".education-entry:last").append(formattedMajors);
				})
			}
			$(".education-entry:last").append(formattedUrl);
			
		});	
		education.onlineCourses.forEach(function(online){
			$("#education").append(HTMLonlineClasses,HTMLschoolStart);
			var onlineUrl = HTMLonlineTitle.replace("#",online.url);
			var onlineTitle = onlineUrl.replace("%data%",online.title);
			var onlineSchool = HTMLonlineSchool.replace("%data%",online.school);
			var formattedName = onlineTitle + onlineSchool;
			var formattedDates= HTMLonlineDates.replace("%data%",online.dates);
			var formattedUrl = HTMLonlineURL.replace("%data%",online.url);			
			$(".education-entry:last").append(formattedName,formattedDates,formattedUrl);
		});
	}
};
education.display();
$("#mapDiv").append(googleMap);
