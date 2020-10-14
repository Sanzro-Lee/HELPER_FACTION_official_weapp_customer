import Dialog from "vant-weapp/dist/dialog/dialog.js";
// qqmap-wx-jsdk.js 已修改源码的导出方式，详情可去该文件最底部查看
import QQMapWX from "./qqmap-wx-jssdk.js";
let qqmapsdk = new QQMapWX({
  key: "7CZBZ-4VMR6-QY5SN-M3IJA-HSY3Z-RRFNG"
})

// 授权页的 授权检测
function authorCheck(val) {
  wx.getSetting({
    success: (res) => {
      // 查看是否授权
      if (res.authSetting["scope.userInfo"]) {
        // 已经授权，可以直接调用 getUserInfo 获取用户信息
        wx.getUserInfo({
          success: (res) => {
						wx.getLocation({
							type: "gcj02",
							success(res) {
								// 获取的信息后，设置首页用户所在的区域
								qqmapsdk.reverseGeocoder({
									location: {
										latitude: res.latitude,
										longitude: res.longitude
									},
									sig: "AY2W9KYUZtqHzoiEzLRs70lnqVrA3IWl",
									success: (res) => {
										val.addressText = res.result.address
          					val.district = res.result.address_component.district
									},
								})
							},
						});
						val.loginShow = false
						val.usernameText = res.userInfo.nickName
						val.userThumb = res.userInfo.avatarUrl
          },
          fail: (error) => {
						console.log("用户拒绝开放用户信息");
          },
        });
      } else {
        // wx.authorize({});
				// 或者跳转至授权页使用button的open-type进行授权
      }
    },
  });
}

// index 需要此方法获取用户所在区域
function getUserDistrict(val) {
  // 获取地理位置，精确到区
  wx.getLocation({
    type: "gcj02",
    success(res) {
      // 获取的信息后，设置首页用户所在的区域
      qqmapsdk.reverseGeocoder({
        location: {
          latitude: res.latitude,
          longitude: res.longitude
        },
        sig: "AY2W9KYUZtqHzoiEzLRs70lnqVrA3IWl",
        success: (res) => {
          let myDistrict = res.result.address_component.district
          val.district = myDistrict
        },
        fail: (error) => {
          // console.log(error)
        }
      })
    },
    fail: (error) => {
      console.log("用户已拒绝");
      Dialog.alert({
        message: "你已拒绝开放定位功能。请点击右上角 三个点的图标 - 设置 - 位置信息 以开放定位功能，并下拉刷新此小程序，我们将更好地服务你！",
        theme: "round-button",
      }).then(() => {
        // on confirm
      });
    },
  });
}

export {
  authorCheck,
  getUserDistrict
}
