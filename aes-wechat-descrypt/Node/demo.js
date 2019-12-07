var WXBizDataCrypt = require('./WXBizDataCrypt')

var appId = 'wx4f4bc4dec97d474b'
var sessionKey = 'tiihtNczf5v6AKRyjwEUhQ=='
var encryptedData = 
	'CiyLU1Aw2KjvrjMdj8YKliAjtP4gsMZM'+
	'QmRzooG2xrDcvSnxIMXFufNstNGTyaGS'+
	'9uT5geRa0W4oTOb1WT7fJlAC+oNPdbB+'+
	'3hVbJSRgv+4lGOETKUQz6OYStslQ142d'+
	'NCuabNPGBzlooOmB231qMM85d2/fV6Ch'+
	'evvXvQP8Hkue1poOFtnEtpyxVLW1zAo6'+
	'/1Xx1COxFvrc2d7UL/lmHInNlxuacJXw'+
	'u0fjpXfz/YqYzBIBzD6WUfTIF9GRHpOn'+
	'/Hz7saL8xz+W//FRAUid1OksQaQx4CMs'+
	'8LOddcQhULW4ucetDf96JcR3g0gfRK4P'+
	'C7E/r7Z6xNrXd2UIeorGj5Ef7b1pJAYB'+
	'6Y5anaHqZ9J6nKEBvB4DnNLIVWSgARns'+
	'/8wR2SiRS7MNACwTyrGvt9ts8p12PKFd'+
	'lqYTopNHR1Vf7XjfhQlVsAJdNiKdYmYV'+
	'oKlaRv85IfVunYzO0IKXsyl7JCUjCpoG'+
	'20f0a04COwfneQAGGwd5oa+T8yO5hzuy'+
	'Db/XcxxmK01EpqOyuxINew=='
var iv = 'r7BXXKkLb8qrSNn05n0qiA=='


// appId = "wxe13cd789038ccaa2"

// encryptedData = "OtvJHN+2gsDyAVgoFaCYwGn1b+V5EgQAG/9Vy6D9iXDUaf5bqEJvhUpQMw9I2UQTD9yP+rFwrqIUCJJh9/uaU1zj+t92yEZRszoGV0CAYBVBTZ5NllkfbFG97NZousvmH5xUiYC68QQI2EvqoXjdulws4D+AUFX6SQ/gjTCDMY/0cGIu8aHDVpeMhfrfiQhxcVRrp2aJ8bfVmBepg+Y6lvCep6Tk103PfKFwO0yfREIoowU4gc8pgEZ6c18NShrumGzzVkL7IMm4TJYo05cG7SwoPBNik3JGdgk5IXrzCX8Yrm/JZ01X6uBgtLgeMxKuwyvLiYqC5yra2rQLj3GANvGP4ivNagkxBa0fGMz4p1+I2RN8yHqlLy38opA24qyY3ud6UkrNo03gxaRoY9jpnHdXSdUiCDmbDgN4sTWGom3IBUj9frmrCvllJ83WJmzFLG3aXa99wwp/M62gmpv3v/4N4bR3i6j3Nc0kCtuJasnxXEWYHzFsMBg/rSfHLkW4Xpz2v7PG07QVOppMuxFPLg=="
// iv = "J/oRuVMgDCskA51lX3xGOA=="
var pc = new WXBizDataCrypt(appId, sessionKey)

var data = pc.decryptData(encryptedData , iv)

console.log('解密后 data: ', data)
// 解密后的数据为
//
// data = {
//   "nickName": "Band",
//   "gender": 1,
//   "language": "zh_CN",
//   "city": "Guangzhou",
//   "province": "Guangdong",
//   "country": "CN",
//   "avatarUrl": "http://wx.qlogo.cn/mmopen/vi_32/aSKcBBPpibyKNicHNTMM0qJVh8Kjgiak2AHWr8MHM4WgMEm7GFhsf8OYrySdbvAMvTsw3mo8ibKicsnfN5pRjl1p8HQ/0",
//   "unionId": "ocMvos6NjeKLIBqg5Mr9QjxrP1FA",
//   "watermark": {
//     "timestamp": 1477314187,
//     "appid": "wx4f4bc4dec97d474b"
//   }
// }
