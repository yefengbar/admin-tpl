import Ember from 'ember';

export default Ember.Component.extend({
	willRender() {
      let data = [{"gname":"\u5f39\u5f39\u5802\u2161","key":"ddt","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"7","siteurl":"http:\/\/web.7k7k.com\/games\/ddt\/"},{"gname":"\u50b2\u89c6\u5929\u5730","key":"astd","gametype":"\u6218\u4e89\u7b56\u7565","gid":"16","siteurl":"http:\/\/web.7k7k.com\/games\/astd"},{"gname":"\u94e0\u7532\u52c7\u58ebOL","key":"kjys","gametype":"RPG","gid":"29","siteurl":"http:\/\/www.7k7k.com\/special\/kjol\/"},{"gname":"\u6d2a\u8352\u795e\u8bdd","key":"hhsh","gametype":"ARPG","gid":"32","siteurl":"http:\/\/web.7k7k.com\/games\/hhsh\/"},{"gname":"\u82f1\u96c4\u8fdc\u5f81","key":"yxyz","gametype":"\u6b66\u4fa0ARPG","gid":"35","siteurl":"http:\/\/web.7k7k.com\/games\/yxyz\/"},{"gname":"\u8303\u7279\u897f\u7bee\u7403\u7ecf\u7406","key":"ftx","gametype":"\u8fd0\u52a8\u7ade\u6280","gid":"36","siteurl":"http:\/\/web.7k7k.com\/games\/ftx\/"},{"gname":"\u795e\u4ed9\u9053","key":"sxd","gametype":"\u6a2a\u7248\u4fee\u4ed9","gid":"39","siteurl":"http:\/\/web.7k7k.com\/games\/sxd\/"},{"gname":"\u76db\u4e16\u4e09\u56fd","key":"sssg","gametype":"\u4e09\u56fd\u6fc0\u60c5PK","gid":"46","siteurl":"http:\/\/web.7k7k.com\/games\/sssg\/"},{"gname":"\u7687\u724c\u6d77\u6218","key":"hphz","gametype":"","gid":"530","siteurl":"http:\/\/news.7k7k.com\/hphz"},{"gname":"\u9f99\u5c06","key":"lj","gametype":"\u6a2a\u7248RPG","gid":"54","siteurl":"http:\/\/web.7k7k.com\/games\/lj\/"},{"gname":"\u51e1\u4eba\u4fee\u771f2","key":"frxz2","gametype":"ARPG","gid":"56","siteurl":"http:\/\/web.7k7k.com\/games\/frxz2\/"},{"gname":"\u690d\u7269\u5927\u6218\u50f5\u5c38","key":"zwdzjs","gametype":"\u4f11\u95f2\u4e92\u52a8","gid":"61","siteurl":"http:\/\/web.7k7k.com\/games\/zwdzjs\/"},{"gname":"\u4e09\u56fd\u6740","key":"sgs","gametype":"","gid":"63","siteurl":"http:\/\/web.7k7k.com\/games\/sgs\/"},{"gname":"\u795e\u66f2","key":"sq","gametype":"\u9b54\u5e7bRPG","gid":"65","siteurl":"http:\/\/web.7k7k.com\/games\/sq\/"},{"gname":"\u68a6\u5e7b\u98de\u4ed9","key":"mhfx","gametype":"Q\u7248\u56de\u5408\u5236","gid":"69","siteurl":"http:\/\/web.7k7k.com\/games\/mhfx"},{"gname":"\u7f8e\u98df\u5927\u6218\u8001\u9f20","key":"msdzls","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"72","siteurl":"http:\/\/web.7k7k.com\/games\/msdzls\/"},{"gname":"\u795e\u9b54\u4ed9\u754c","key":"smxj","gametype":"ARPG","gid":"81","siteurl":"http:\/\/web.7k7k.com\/games\/smxj\/"},{"gname":"\u5c0f\u5c0f\u5192\u9669\u6751","key":"xxmxc","gametype":"\u6a21\u62df\u7ecf\u8425","gid":"481","siteurl":"http:\/\/web.7k7k.com\/games\/xxmxc\/"},{"gname":"\u591a\u514b\u591a\u6bd4","key":"doco","gametype":"","gid":"89","siteurl":"http:\/\/www.7k7k.com\/special\/doco\/"},{"gname":"\u753b\u76ae2","key":"hp2","gametype":"ARPG","gid":"115","siteurl":"http:\/\/web.7k7k.com\/games\/hp2"},{"gname":"\u9189\u897f\u6e38","key":"zxy","gametype":"ARPG","gid":"125","siteurl":"http:\/\/web.7k7k.com\/games\/zxy\/"},{"gname":"\u5927\u4fa0\u4f20","key":"dxz","gametype":"\u6b66\u4fa0RPG","gid":"139","siteurl":"http:\/\/web.7k7k.com\/games\/dxz"},{"gname":"\u70c8\u706b\u6218\u795e","key":"lhzs","gametype":"\u6fc0\u60c5PK ARPG","gid":"149","siteurl":"http:\/\/web.7k7k.com\/games\/lhzs\/"},{"gname":"\u5f00\u5929\u8f9f\u5730","key":"ktpd","gametype":"\u95ef\u5173RPG","gid":"147","siteurl":"http:\/\/web.7k7k.com\/games\/ktpd\/"},{"gname":"\u8303\u7279\u897f\u8db3\u7403\u7ecf\u74062","key":"ftxzqjl2","gametype":"","gid":"532","siteurl":"http:\/\/news.7k7k.com\/zqjl\/"},{"gname":"\u79e6\u7f8e\u4eba","key":"qmr","gametype":"\u56fd\u6218ARPG","gid":"151","siteurl":"http:\/\/web.7k7k.com\/games\/qmr\/"},{"gname":"\u5c06\u795e","key":"jiangshen","gametype":"\u6fc0\u60c5\u4e09\u56fd 3D\u7b56\u7565","gid":"155","siteurl":"http:\/\/web.7k7k.com\/games\/jiangshen\/"},{"gname":"\u7fa4\u4fa0\u4f20","key":"qxz","gametype":"\u6b66\u4fa0 RPG","gid":"157","siteurl":"http:\/\/web.7k7k.com\/games\/qxz\/"},{"gname":"\u795e\u5c06\u4e09\u56fd","key":"sjsg","gametype":"\u4e09\u56fdRPG","gid":"169","siteurl":"http:\/\/web.7k7k.com\/games\/sjsg\/"},{"gname":"\u8857\u673a\u4e09\u56fd","key":"jjsg","gametype":"\u6a2a\u7248ARPG","gid":"171","siteurl":"http:\/\/web.7k7k.com\/games\/jjsg\/"},{"gname":"\u4e09\u56fd\u6f14\u4e49","key":"sgyy","gametype":"\u4e09\u56fdRPG","gid":"173","siteurl":"http:\/\/web.7k7k.com\/games\/sgyy\/"},{"gname":"\u6267\u638c\u706b\u57df","key":"dpqk","gametype":"MMORPG","gid":"179","siteurl":"http:\/\/web.7k7k.com\/games\/dpqk\/"},{"gname":"\u521b\u4e16\u5175\u9b42","key":"csbh","gametype":"FPS","gid":"191","siteurl":"http:\/\/csbh.7k7k.com"},{"gname":"\u5251\u96e8\u6c5f\u6e56","key":"jyjh","gametype":"\u89d2\u8272\u626e\u6f14","gid":"463","siteurl":"http:\/\/web.7k7k.com\/games\/jyjh\/"},{"gname":"touch","key":"touch","gametype":"\u4f11\u95f2\u52b2\u821e","gid":"207","siteurl":"http:\/\/web.7k7k.com\/games\/touch\/"},{"gname":"\u84dd\u6708\u4f20\u5947","key":"lycq","gametype":"\u70ed\u8840\u4f20\u5947","gid":"479","siteurl":"http:\/\/web.7k7k.com\/games\/lycq\/"},{"gname":"\u795e\u6b66\u4e5d\u5929","key":"swjt","gametype":"\u53e4\u4ee3\u4fee\u4ed9","gid":"217","siteurl":"http:\/\/web.7k7k.com\/games\/swjt\/"},{"gname":"\u5973\u795e\u8054\u76df","key":"nslm","gametype":"\u9b54\u5e7bRPG","gid":"221","siteurl":"http:\/\/web.7k7k.com\/games\/nslm\/"},{"gname":"\u5fcd\u8005\u75be\u98ce\u4f20","key":"rzjfz","gametype":"RPG","gid":"235","siteurl":"http:\/\/web.7k7k.com\/games\/rzjfz\/"},{"gname":"\u653b\u57ce\u63a0\u5730","key":"gcld","gametype":"SLG","gid":"239","siteurl":"http:\/\/web.7k7k.com\/games\/gcld\/"},{"gname":"\u5927\u95f9\u5929\u5bab","key":"dntg","gametype":"","gid":"261","siteurl":"http:\/\/web.7k7k.com\/games\/dntg\/"},{"gname":"\u5168\u6c11\u5766\u514b\u5927\u6218","key":"tklm","gametype":"\u5766\u514b\u5bf9\u6218","gid":"273","siteurl":"http:\/\/tklm.7k7k.com\/"},{"gname":"\u70ae\u70ae\u5175\u56e2","key":"ttkp","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"283","siteurl":"http:\/\/web.7k7k.com\/games\/ttkp\/"},{"gname":"\u76ae\u5361\u5802","key":"pkt","gametype":"\u793e\u533a\u517b\u6210","gid":"285","siteurl":"http:\/\/www.7k7k.com\/special\/picatown\/"},{"gname":"3D\u5766\u514b","key":"3dtk","gametype":"\u5766\u514b\u5bf9\u6218","gid":"293","siteurl":"http:\/\/web.7k7k.com\/games\/3dtk"},{"gname":"\u7279\u6218\u82f1\u96c4","key":"tzyx","gametype":"FPS","gid":"430","siteurl":"http:\/\/news.7k7k.com\/tzyx\/"},{"gname":"\u6b66\u795e\u8d75\u5b50\u9f99","key":"wszzl","gametype":"ARPG","gid":"477","siteurl":"http:\/\/web.7k7k.com\/games\/wszzl\/"},{"gname":"\u4ed9\u4fa0\u9053","key":"xxd","gametype":"\u6b66\u4fa0\u4fee\u4ed9","gid":"305","siteurl":"http:\/\/web.7k7k.com\/games\/xxd\/"},{"gname":"\u4e03\u6740","key":"qs","gametype":"\u89d2\u8272\u626e\u6f14","gid":"307","siteurl":"http:\/\/web.7k7k.com\/games\/qs"},{"gname":"\u98ce\u4e91\u65e0\u53cc","key":"fyws","gametype":"ARPG","gid":"324","siteurl":"http:\/\/web.7k7k.com\/games\/fyws\/"},{"gname":"\u5f00\u5929\u8f9f\u57302","key":"ktpd2","gametype":"\u56de\u5408RPG","gid":"326","siteurl":"http:\/\/web.7k7k.com\/games\/ktpd2\/"},{"gname":"\u5929\u7a7a\u4e4b\u821e\u2161","key":"tkzw","gametype":"\u97f3\u4e50\u821e\u8e48","gid":"329","siteurl":"http:\/\/web.7k7k.com\/games\/tkzw\/"},{"gname":"\u8bf8\u795e\u9ec4\u660f","key":"zshh","gametype":"ARPG","gid":"432","siteurl":"http:\/\/web.7k7k.com\/games\/zshh\/"},{"gname":"\u5e7b\u57ce","key":"hc","gametype":"ARPG","gid":"505","siteurl":"http:\/\/web.7k7k.com\/games\/hc\/"},{"gname":"\u72ec\u6b65\u5929\u4e0b","key":"dbtx","gametype":"\u56de\u5408RPG","gid":"340","siteurl":"http:\/\/web.7k7k.com\/games\/dbtx\/"},{"gname":"\u65a9\u9f99\u4f20\u5947","key":"zlcq","gametype":"\u6fc0\u60c5\u4f20\u5947","gid":"363","siteurl":"http:\/\/web.7k7k.com\/games\/zlcq\/"},{"gname":"\u8303\u7279\u897f\u7bee\u7403\u7ecf\u74062","key":"ftxlqjl2","gametype":"\u8fd0\u52a8\u7ade\u6280","gid":"345","siteurl":"http:\/\/web.7k7k.com\/games\/ftxlqjl2\/"},{"gname":"\u9b54\u9f99\u8bc0","key":"mlj","gametype":"ARPG","gid":"348","siteurl":"http:\/\/web.7k7k.com\/games\/mlj\/"},{"gname":"\u767e\u6218\u5929\u4e0b","key":"bztx","gametype":"ARPG","gid":"361","siteurl":"http:\/\/web.7k7k.com\/games\/bztx\/"},{"gname":"\u51b0\u706b\u7834\u574f\u795e","key":"bhphs","gametype":"3D\u9b54\u517dRPG","gid":"362","siteurl":"http:\/\/web.7k7k.com\/games\/bhphs\/"},{"gname":"\u83bd\u8352\u7eaa","key":"mhj","gametype":"\u4fee\u4ed9","gid":"399","siteurl":"http:\/\/web.7k7k.com\/games\/mhj\/"},{"gname":"\u76db\u4e16\u4e09\u56fd2","key":"sssg2","gametype":"\u4e09\u56fd\u4e89\u9738","gid":"375","siteurl":"http:\/\/web.7k7k.com\/games\/sssg2\/"},{"gname":"\u4f20\u5947\u9738\u4e1a","key":"cqby","gametype":"\u70ed\u8840\u4f20\u5947","gid":"376","siteurl":"http:\/\/web.7k7k.com\/games\/cqby\/"},{"gname":"\u6469\u5361\u9a91\u58eb","key":"mkqs","gametype":"\u89d2\u8272\u626e\u6f14","gid":"380","siteurl":"http:\/\/web.7k7k.com\/games\/mkqs\/"},{"gname":"\u6218\u5929","key":"zt","gametype":"\u4f20\u5947\u7c7b","gid":"381","siteurl":"http:\/\/web.7k7k.com\/games\/zt"},{"gname":"\u690d\u7269\u5927\u6218\u50f5\u5c382","key":"zwdzjs2","gametype":"\u4f11\u95f2\u4e92\u52a8","gid":"382","siteurl":"http:\/\/web.7k7k.com\/games\/zwdzjs2\/"},{"gname":"\u500d\u513f\u723d\u4e09\u56fd","key":"bessg","gametype":"Q\u7248\u56de\u5408","gid":"386","siteurl":"http:\/\/web.7k7k.com\/games\/bessg\/"},{"gname":"\u6df7\u6c8c\u6218\u57df","key":"hdzy","gametype":"RPG","gid":"388","siteurl":"http:\/\/web.7k7k.com\/games\/hdzy\/"},{"gname":"\u5854\u9632\u8054\u76df","key":"tflm","gametype":"\u5854\u9632RPG","gid":"391","siteurl":"http:\/\/web.7k7k.com\/games\/tflm"},{"gname":"\u65e0\u4e0a\u795e\u5175","key":"wssb","gametype":"\u89d2\u8272\u626e\u6f14","gid":"394","siteurl":"http:\/\/web.7k7k.com\/games\/wssb\/"},{"gname":"\u5c0f\u5c0f\u7cbe\u7075","key":"xxjl","gametype":"\u53e3\u888b\u5996\u602a","gid":"398","siteurl":"http:\/\/web.7k7k.com\/games\/xxjl\/"},{"gname":"\u5929\u4e66\u4e16\u754c","key":"tssj","gametype":"\u4e09\u56fd\u6b66\u4fa0","gid":"401","siteurl":"http:\/\/web.7k7k.com\/games\/tssj"},{"gname":"\u5b8c\u7f8e\u6f02\u79fb","key":"wmpy","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"470","siteurl":"http:\/\/news.7k7k.com\/wmpy\/"},{"gname":"\u706b\u7ebf\u884c\u52a8","key":"hxxd","gametype":"FPS","gid":"402","siteurl":"http:\/\/web.7k7k.com\/games\/hxxd\/"},{"gname":"\u5168\u6c11\u5f39\u73e0","key":"qmdz","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"403","siteurl":"http:\/\/web.7k7k.com\/games\/qmdz\/"},{"gname":"\u5927\u5929\u4f7f\u4e4b\u5251","key":"dtszj","gametype":"ARPG","gid":"406","siteurl":"http:\/\/web.7k7k.com\/games\/dtszj"},{"gname":"\u6218\u68cb\u65f6\u4ee3","key":"zqsd","gametype":"\u6218\u68cb\u5927\u4e71\u6597","gid":"412","siteurl":"http:\/\/web.7k7k.com\/games\/zqsd\/"},{"gname":"\u7405\u740a\u699c","key":"lyb","gametype":"ARPG","gid":"413","siteurl":"http:\/\/web.7k7k.com\/games\/lyb\/"},{"gname":"\u4e03\u5251","key":"qj","gametype":"\u6b66\u4fa0ARPG","gid":"414","siteurl":"http:\/\/web.7k7k.com\/games\/qj"},{"gname":"\u53e4\u5251\u5947\u8c2d","key":"gjqt","gametype":"ARPG","gid":"418","siteurl":"http:\/\/web.7k7k.com\/games\/gjqt\/"},{"gname":"\u4f5b\u672c\u662f\u9053","key":"fbsd","gametype":"3D","gid":"419","siteurl":"http:\/\/web.7k7k.com\/games\/fbsd\/"},{"gname":"\u82b1\u5343\u9aa8","key":"hqg","gametype":"ARPG","gid":"421","siteurl":"http:\/\/web.7k7k.com\/games\/hqg\/"},{"gname":"\u840c\u5c06","key":"mj","gametype":"\u6a2a\u7248\u5854\u9632","gid":"423","siteurl":"http:\/\/web.7k7k.com\/games\/mj\/"},{"gname":"\u4f20\u5947\u76db\u4e16","key":"cqss","gametype":"\u70ed\u8840\u4f20\u5947","gid":"438","siteurl":"http:\/\/web.7k7k.com\/games\/cqss\/"},{"gname":"\u50cf\u7d20\u9a91\u58eb\u56e2","key":"xsqst","gametype":"\u653e\u7f6e\u6302\u673a","gid":"427","siteurl":"http:\/\/web.7k7k.com\/games\/xsqst"},{"gname":"\u8700\u5c71\u6218\u7eaa","key":"sszj","gametype":"\u4ed9\u4fa0ARPG","gid":"462","siteurl":"http:\/\/web.7k7k.com\/games\/sszj\/"},{"gname":"\u9b54\u6676\u5e7b\u60f3","key":"mjhx","gametype":"ARPG","gid":"489","siteurl":"http:\/\/web.7k7k.com\/games\/mjhx\/"},{"gname":"\u5927\u6218\u795e","key":"dzs","gametype":"\u89d2\u8272\u626e\u6f14","gid":"434","siteurl":"http:\/\/web.7k7k.com\/games\/dzs\/"},{"gname":"\u5192\u9669\u738b2","key":"mxwt","gametype":"\u6a2a\u7248\u8fc7\u5173","gid":"441","siteurl":"http:\/\/web.7k7k.com\/games\/mxwt\/"},{"gname":"\u70ed\u8840\u6218\u6b4c","key":"rxzg","gametype":"\u70ed\u8840\u4f20\u5947","gid":"478","siteurl":"http:\/\/web.7k7k.com\/games\/rxzg\/"},{"gname":"\u6218\u75d5\u5929\u4e0b","key":"zhtx","gametype":"\u89d2\u8272\u626e\u6f14","gid":"442","siteurl":"http:\/\/web.7k7k.com\/games\/zhtx\/"},{"gname":"\u70ed\u8840\u6c5f\u6e56\u4f20","key":"rxjhz","gametype":"\u89d2\u8272\u626e\u6f14","gid":"445","siteurl":"http:\/\/web.7k7k.com\/games\/rxjhz\/"},{"gname":"\u98ce\u66b4\u5927\u9646","key":"fbdl","gametype":"ARPG","gid":"446","siteurl":"http:\/\/web.7k7k.com\/games\/fbdl\/"},{"gname":"\u52c7\u8005\u76df\u7ea6","key":"yzmy","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"448","siteurl":"http:\/\/web.7k7k.com\/games\/yzmy\/"},{"gname":"\u6218\u56fd\u4e4b\u6012","key":"zgzn","gametype":"\u6218\u56fdARPG","gid":"447","siteurl":"http:\/\/web.7k7k.com\/games\/zgzn\/"},{"gname":"\u7687\u56fe","key":"ht","gametype":"\u89d2\u8272\u626e\u6f14","gid":"449","siteurl":"http:\/\/web.7k7k.com\/games\/ht\/"},{"gname":"NBA\u8303\u7279\u897f","key":"nbaftx","gametype":"\u7ecf\u8425\u517b\u6210","gid":"451","siteurl":"http:\/\/web.7k7k.com\/games\/nbaftx"},{"gname":"\u94c1\u8840\u7687\u57ce","key":"txhc","gametype":"\u70ed\u8840\u4f20\u5947","gid":"452","siteurl":"http:\/\/web.7k7k.com\/games\/txhc\/"},{"gname":"\u5929\u5c40","key":"tj7k","gametype":"\u4ed9\u4fa0ARPG","gid":"454","siteurl":"http:\/\/web.7k7k.com\/games\/tj7k\/"},{"gname":"\u8db3\u7403\u638c\u95e8","key":"zqzm","gametype":"\u8db3\u7403","gid":"455","siteurl":"http:\/\/web.7k7k.com\/games\/zqzm\/"},{"gname":"\u6751\u957f\u5f81\u6218\u56e2","key":"czdtx","gametype":"\u6a21\u62df\u7ecf\u8425SLG","gid":"457","siteurl":"http:\/\/web.7k7k.com\/games\/czdtx\/"},{"gname":"\u8f69\u8f95\u5251","key":"xyj1","gametype":"ARPG","gid":"459","siteurl":"http:\/\/web.7k7k.com\/games\/xyj1\/"},{"gname":"\u5200\u5251\u7269\u8bed","key":"djwy","gametype":"\u89d2\u8272\u626e\u6f14","gid":"461","siteurl":"http:\/\/web.7k7k.com\/games\/djwy\/"},{"gname":"\u6740\u624bOnline","key":"ssol","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"466","siteurl":"http:\/\/news.7k7k.com\/ssol\/"},{"gname":"SD\u6562\u8fbe\u5148\u9a71","key":"sdgd","gametype":"\u653e\u7f6e\u7c7b","gid":"467","siteurl":"http:\/\/web.7k7k.com\/games\/sdgd\/"},{"gname":"\u82f1\u9b42\u4e4b\u5203","key":"yhzr","gametype":"MOBA","gid":"468","siteurl":"http:\/\/news.7k7k.com\/yhzr\/"},{"gname":"\u521b\u60f3\u5175\u56e2","key":"cxbt","gametype":"TPS","gid":"469","siteurl":"http:\/\/news.7k7k.com\/asw\/"},{"gname":"\u91cd\u8fd4\u6218\u573a","key":"cfzc","gametype":"FPS","gid":"485","siteurl":"http:\/\/news.7k7k.com\/cfzc\/"},{"gname":"\u4e5d\u9634\u7edd\u5b66","key":"jyjx","gametype":"MMORPG","gid":"473","siteurl":"http:\/\/web.7k7k.com\/games\/jyjx"},{"gname":"\u9f99\u9a91\u58eb\u4f20","key":"lqsz","gametype":"\u9b54\u5e7bRPG","gid":"474","siteurl":"http:\/\/web.7k7k.com\/games\/lqsz\/"},{"gname":"\u68a6\u5e7b\u604b\u821e","key":"mhlw","gametype":"\u97f3\u4e50\u821e\u8e48","gid":"475","siteurl":"http:\/\/news.7k7k.com\/mhlw\/"},{"gname":"\u5e7b\u517d\u8d77\u6e90","key":"hsqy","gametype":"ARPG","gid":"476","siteurl":"http:\/\/web.7k7k.com\/games\/hsqy\/"},{"gname":"\u604b\u4e0aK\u6b4c","key":"lskg","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"480","siteurl":"http:\/\/news.7k7k.com\/lskg\/"},{"gname":"\u6df1\u6d77\u7f8e\u6218\u59ec","key":"shmzj","gametype":"\u5361\u724c","gid":"482","siteurl":"http:\/\/web.7k7k.com\/games\/shmzj"},{"gname":"\u8d64\u6708\u4f20\u8bf42","key":"cycs2","gametype":"\u70ed\u8840\u4f20\u5947","gid":"483","siteurl":"http:\/\/web.7k7k.com\/games\/cycs2\/"},{"gname":"\u4ed9\u4fa0\u90532","key":"xxd2","gametype":"\u6b66\u4fa0\u4fee\u4ed9","gid":"484","siteurl":"http:\/\/web.7k7k.com\/games\/xxd2\/"},{"gname":"\u51b3\u6218\u6b66\u6797","key":"jzwl","gametype":"\u89d2\u8272\u626e\u6f14","gid":"486","siteurl":"http:\/\/web.7k7k.com\/games\/jzwl\/"},{"gname":"\u9752\u4e91\u5fd7","key":"qyz","gametype":"ARPG","gid":"487","siteurl":"http:\/\/web.7k7k.com\/games\/qyz\/"},{"gname":"\u79c0\u4e3d\u6c5f\u5c71","key":"xljs","gametype":"ARPG","gid":"488","siteurl":"http:\/\/web.7k7k.com\/games\/xljs"},{"gname":"\u6355\u9c7c\u5927\u8d5b","key":"jcby","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"490","siteurl":"http:\/\/news.7k7k.com\/jcby"},{"gname":"\u5510\u95e8\u516d\u9053","key":"tmld","gametype":"ARPG","gid":"493","siteurl":"http:\/\/web.7k7k.com\/games\/tmld\/"},{"gname":"\u96c4\u9738\u968b\u5510","key":"xbst","gametype":"ARPG","gid":"495","siteurl":"http:\/\/web.7k7k.com\/games\/xbst\/"},{"gname":"\u76d7\u5893\u7b14\u8bb0","key":"dmbj","gametype":"\u89d2\u8272\u626e\u6f14","gid":"496","siteurl":"http:\/\/web.7k7k.com\/games\/dmbj\/"},{"gname":"\u67aa\u6797\u5f39\u96e8","key":"qldy","gametype":"FPS","gid":"497","siteurl":"http:\/\/news.7k7k.com\/qldy\/"},{"gname":"\u6d77\u6c34\u6765\u4e86","key":"hsll","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"499","siteurl":"http:\/\/news.7k7k.com\/hsll\/"},{"gname":"\u8054\u76df\u5b88\u536b\u519b","key":"lmswj","gametype":"\u5854\u9632","gid":"500","siteurl":"http:\/\/web.7k7k.com\/games\/lmswj"},{"gname":"\u8857\u673a\u4e4b\u738b","key":"jjzw","gametype":"\u6a2a\u7248\u8fc7\u5173","gid":"501","siteurl":"http:\/\/web.7k7k.com\/games\/jjzw"},{"gname":"\u563b\u563b\u6597\u5730\u4e3b","key":"xxddz","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"503","siteurl":"http:\/\/web.7k7k.com\/games\/xxddz"},{"gname":"\u4e50\u4e50\u5802\u5927\u4f5c\u6218","key":"lltdzz","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"504","siteurl":"http:\/\/news.7k7k.com\/llt\/"},{"gname":"\u5192\u9669\u4e16\u754c","key":"mxsj","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"506","siteurl":"http:\/\/news.7k7k.com\/mxsj"},{"gname":"\u83f2\u52a8\u5927\u4e3b\u5bb0","key":"fddzz","gametype":"\u70ed\u8840\u4f20\u5947","gid":"507","siteurl":"http:\/\/web.7k7k.com\/games\/fddzz\/"},{"gname":"\u8303\u4f1f\u6253\u5929\u4e0b","key":"fwdtx","gametype":"ARPG","gid":"509","siteurl":"http:\/\/web.7k7k.com\/games\/fwdtx\/"},{"gname":"\u4e09\u56fd\u9738\u738b\u5927\u9646","key":"sgbwdl","gametype":"","gid":"510","siteurl":"http:\/\/www.7k7k.com\/swf\/174433.htm"},{"gname":"\u70ed\u8840\u4e09\u56fd3","key":"rxsg3","gametype":"\u4e09\u56fdSLG","gid":"511","siteurl":"http:\/\/web.7k7k.com\/games\/rxsg3\/"},{"gname":"\u6211\u6b32\u5c01\u5929","key":"wyft","gametype":"ARPG","gid":"512","siteurl":"http:\/\/web.7k7k.com\/games\/wyft\/"},{"gname":"\u9b54\u6cd5\u738b\u5ea7","key":"mfwz","gametype":"MMORPG","gid":"513","siteurl":"http:\/\/web.7k7k.com\/games\/mfwz\/"},{"gname":"\u94c1\u9a91\u51b2\u950b","key":"tqcf","gametype":"SLG","gid":"514","siteurl":"http:\/\/web.7k7k.com\/games\/tqcf\/"},{"gname":"\u9f99\u4e4b\u9886\u4e3b","key":"lzlz","gametype":"\u56de\u5408RPG","gid":"515","siteurl":"http:\/\/web.7k7k.com\/games\/lzlz\/"},{"gname":"\u8d35\u65cf\u4f1a\u5458","key":"gzhy","gametype":"","gid":"516","siteurl":"http:\/\/web.7k7k.com\/games\/huodong\/gzhy\/"},{"gname":"\u751f\u6b7b\u7c3f","key":"ssb","gametype":"\u4e1c\u65b9\u9b54\u5e7b","gid":"517","siteurl":"http:\/\/web.7k7k.com\/games\/ssb\/"},{"gname":"\u6700\u4f73\u9635\u5bb9","key":"zjzr","gametype":"\u4f53\u80b2\u7ade\u6280","gid":"518","siteurl":"http:\/\/news.7k7k.com\/zjzr\/"},{"gname":"\u4e94\u9f20\u95f9\u4e1c\u4eac","key":"wsndj","gametype":"RPG","gid":"519","siteurl":"http:\/\/web.7k7k.com\/games\/wsndj\/"},{"gname":"\u5973\u795e\u8054\u76df2","key":"nslm2","gametype":"\u9b54\u5e7bRPG","gid":"520","siteurl":"http:\/\/web.7k7k.com\/games\/nslm2\/"},{"gname":"\u5251\u4fa0\u60c5\u7f182","key":"jxqy2","gametype":"ARPG","gid":"521","siteurl":"http:\/\/web.7k7k.com\/games\/jxqy2\/"},{"gname":"\u9526\u8863\u591c\u884c","key":"jyyx","gametype":"\u6b66\u4fa0ARPG","gid":"522","siteurl":"http:\/\/web.7k7k.com\/games\/jyyx\/"},{"gname":"\u5929\u5730\u8bf8\u795e","key":"tdzs","gametype":"\u70ed\u8840\u4f20\u5947","gid":"523","siteurl":"http:\/\/web.7k7k.com\/games\/tdzs\/"},{"gname":"\u9b54\u517d\u6218\u573a","key":"mszc","gametype":"MOBA\u5361\u724c","gid":"524","siteurl":"http:\/\/news.7k7k.com\/mszc\/"},{"gname":"\u795e\u9b54\u4f20\u8bf4","key":"smcs","gametype":"ARPG","gid":"526","siteurl":"http:\/\/web.7k7k.com\/games\/smcs\/"},{"gname":"\u5927\u86c7\u738b","key":"dsw","gametype":"\u4f11\u95f2\u7ade\u6280","gid":"528","siteurl":"http:\/\/news.7k7k.com\/dsw\/"},{"gname":"\u4fee\u5929\u51b3","key":"xtj","gametype":"ARPG","gid":"529","siteurl":"http:\/\/web.7k7k.com\/games\/xtj\/"}];
      this.set('gamelist', data);
  }
});