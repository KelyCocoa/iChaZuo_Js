
// 引入CZNAtive.js

// 通用方法
// 第一个参数名为要调用的函数名
// 第二个参数字典为调用的函数所需要的参数
chaZuoApp_invoked('navigateTo',{
    'title':'这是一个神奇的世界',
    'url':'http://www.chazuomba.com/files/hehe/webApp/getkey.html?v=1'
});

#pragma mark - 导航>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 函数名 navigateTo
//      参数                  类型       必填     说明
//      title                 String    是      导航标题
//      url                   String	是	    需要跳转的url
//      animation             Boolean   否      页面铁环时是否有动画过程(默认true)
//      navBarBackgroundColor String    否      导航条颜色(默认"#3573B3")
// 		navBarHidden          Boolean   否   	是否隐藏导航栏（默认false）
// 		bounces               Boolean   否  	    default YES. if YES, bounces past edge of content and back again
navigateTo({
    'title':'这是一个神奇的世界',
    'url':'http://www.chazuomba.com/files/hehe/webApp/getkey.html?v=1'
});


// 函数名 navigateBack
// 		delta	             Number	    否   	返回的页面数(默认返回一页)。
// 		animation            Boolean    否      页面铁环时是否有动画过程(默认true)
navigateBack({

});

#pragma mark - 设置导航>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 函数名 setNavigationBarTitle
/// 设置导航
// 参数	                 类型	      必填	  说明
// title	             String	      否	      页面标题
// navBarBackgroundColor String       否      导航条颜色(默认"#3573B3")
// navBarHidden          Boolean      否      是否隐藏导航栏（默认false）
// completionHandler     Function	  否	      参数 'success'/'fail' 告诉js设置导航成功或是失败
setNavigationBarTitle({
	'title':'新的标题为：这是一个新的标题',
	'navBarBackgroundColor':'#'
});

#pragma mark - 交互反馈>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 显示模态弹窗
// 函数名 showModal
//      参数                 类型       必填     说明
//		title             	String	 	是		提示的标题
// 		content	         	String	 	是		提示的内容
// 		showCancel	     	Boolean 	否	    是否显示取消按钮，默认为 true
// 		cancelText	     	String		否	    取消按钮的文字，默认为"取消"
// 		confirmText	     	String	 	否	    确定按钮的文字，默认为"确定"
// 		completionHandler 	Function	否	    函数返回值为cancelText 和 confirmText 表明用户选择结果
showModal({
    'title':'亲爱的同学',
    'content':'你还未开通会员，请抓紧',
    'completionHandler':function (argument) {
     if (argument=='确定') {
     	// 点击确定的逻辑...
     }
     else {
     	// 取消
     }
    }
});


// 浮出消息提示框
// 函数名 showToast
//      参数                 类型       必填     说明
// 		title	        	String	 	是		提示的内容
// 		duration	        Number	 	否	    提示的延迟时间，单位秒 默认2s
// 		completionHandler 	Function	否	    函数参数为空 调用时说明执行showToast成功
showToast({
	'title':'js从入门到懵逼',
});


// 函数名 showActionSheet
// 		title             	String	 	否		提示的标题
// 		content	         	String	 	否		提示的内容
// 		itemList	  String Array 		是		按钮的文字数组，数组长度最大为6个
// 		completionHandler 	Function	是  		函数返回值对应itemList中的值 表明用户选择了哪一项
	showActionSheet({
	'title':'选择你喜欢的颜色',
	'itemList':[
		'黑色'，
		'紫色',
		'蓝色',
		'红色'
	],
	'completionHandler':function (argument) {
		if (argument=='黑色') {
			// 黑色...
		}
		else if (argument=='紫色') {
			// 紫色...	
		}
		else if (argument=='蓝色') {
			// 蓝色...
		}
		else{
			// 红色...
		}
	}
});


#pragma mark - 数据缓存>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 设置缓存
// 函数名 setStorage
//      参数                 类型       必填     说明
// 		key                 String		是		本地缓存中的指定的 key
// 		data                id		    是		需要存储的内容
// 		completionHandler 	Function    否	    Native调用Js函数告知Js缓存数据的结果 函数参数为key值
setStorage({
	'key':'student_info',
	'data':{
		'name':'小明',
		'age':'16'
	}
});

// 读取缓存
// 函数名 getStorage
// 		key                 String		是	    本地缓存中的指定的 key
// 	    completionHandler 	Function	是	    参数为返回的数据 
getStorage({
	'key':'student_info',
	'completionHandler':function function_name(argment) {
		// argment为返回的数据
	}
});


函数参数为{key:该key值下的data}

// 移除某一部分缓存
// 函数名 removeStorage
// 		key					String		是		本地缓存中的指定的 key
//	    completionHandler 	Function	否	    参数为已移除的key值
removeStorage({
	'key':'student_info'
});

// 清空缓存
// 函数名 clearStorage
// 		completionHandler 	Function	否	    参数为空 调用函数时说明缓存数据清空成功
clearStorage({

});

// 函数名 dictionaryRepresentation
// 功能 获取所有缓存数据 字典形式呈现
//	     completionHandler 	Function	是	    查询所有缓存 结果以字典形式返回
dictionaryRepresentation({
	'completionHandler' : function (argument) {
		// 所有缓存数据的字典
	}
});


#pragma mark - 设备信息>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 获取系统信息
// 函数名 getSystemInfo
// 参数                  类型      必填         说明
// completionHandl      Function   否	      
// completionHandl  回调参数说明：
// platform         客户端平台
// system           操作系统版本
// version          app版本号
// windowWidth      窗口宽度
// windowHeight     窗口高度
// model            手机型号
// ip               获取设备ip
getSystemInfo({
	'completionHandler':function (res) {
		// 客户端平台
		var platform     = res['platform'];
		// 操作系统版本号
		var system       = res['system'];
		// app 版本号
		var version      = res['version'];
		// 窗口宽度
		var windowWidth  = res['windowWidth'];
		// 窗口高度
		var windowHeight = res['windowHeight'];
		// 手机型号
		var model        = res['model'];
		/// ip地址
		var ip 			 = res['ip'];
	}
});

// 获取网络类型。
// 函数名 getNetworkType
// 参数                  类型       必填        说明
// completionHandler 	Function	否	      返回networkType
getNetworkType({
	'completionHandler':function (networkType) {
		// 网络环境类型 "无网络","Wifi","蜂窝网络","2G","3G","4G","未知网络"
	}
});

// 拨打电话
// 函数名 makePhoneCall
// phoneNumber          String      是        电话号码
// completionHandler 	String      否        拨打电话成功时调用 返回拨打的电话号码
makePhoneCall({
	'phoneNumber':'13241100717'
});

#pragma mark - 窗口>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 函数名 setWindowColor
// windowColor       	String	是	    本地缓存中的指定的 key
// completionHandler 	String	否	    设置成功 返回当前设置的window的颜色值
setWindowColor({
	'windowColor':'#3573B3'
})

// 函数名 removeAllWebsiteDataTypes
// dateFromStr         String   否      清空从某个日期开始的web缓存(默认清空全部)
// completionHandler 	String	否	    清空成功之后的回调
removeAllWebsiteDataTypes({

})

#pragma mark - 支付>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 函数名 toPa
// 参数名                参数类型 是否必需参数 参数含义
// targetType       	String	是	     课程类型(1：年费/月度会员 2：课程包 3:公开课)
// price                String	是	     价格
// paymentId            String	是	     支付方式(1：微信 2：支付宝 3：内购)
// targetId             String	是	     课程包 id 年费会员填0 副参
// completionHandler 	function否        @{"status":""200,"data":@{"ifBusiness":1}} status:200(正常) 201:取消支付 404:无网络(支付已成功)
toPay({
	'targetType':'3',
	'price':'200'
	'paymentId':'1',
	'targetId':'256'
	'completionHandler':function (argument) {
     	if (argument['status']==200) {
     		// 成功
     	} else {
     		// 失败
     	}
    }
});

