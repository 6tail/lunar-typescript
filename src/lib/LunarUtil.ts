interface IndexValue {
    index: number;
    value: string;
}

export class LunarUtil {
    static BASE_MONTH_ZHI_INDEX: number = 2;
    static XUN: string[] = [
        '{jz.jiaZi}',
        '{jz.jiaXu}',
        '{jz.jiaShen}',
        '{jz.jiaWu}',
        '{jz.jiaChen}',
        '{jz.jiaYin}'
    ];
    static XUN_KONG: string[] = [
        '{dz.xu}{dz.hai}',
        '{dz.shen}{dz.you}',
        '{dz.wu}{dz.wei}',
        '{dz.chen}{dz.si}',
        '{dz.yin}{dz.mao}',
        '{dz.zi}{dz.chou}'
    ];
    static CHANG_SHENG: string[] = [
        '{ds.changSheng}',
        '{ds.muYu}',
        '{ds.guanDai}',
        '{ds.linGuan}',
        '{ds.diWang}',
        '{ds.shuai}',
        '{ds.bing}',
        '{ds.si}',
        '{ds.mu}',
        '{ds.jue}',
        '{ds.tai}',
        '{ds.yang}'
    ];
    static MONTH_ZHI: string[] = [
        '',
        '{dz.yin}',
        '{dz.mao}',
        '{dz.chen}',
        '{dz.si}',
        '{dz.wu}',
        '{dz.wei}',
        '{dz.shen}',
        '{dz.you}',
        '{dz.xu}',
        '{dz.hai}',
        '{dz.zi}',
        '{dz.chou}'
    ];
    static JIE_QI: string[] = [
        '{jq.dongZhi}',
        '{jq.xiaoHan}',
        '{jq.daHan}',
        '{jq.liChun}',
        '{jq.yuShui}',
        '{jq.jingZhe}',
        '{jq.chunFen}',
        '{jq.qingMing}',
        '{jq.guYu}',
        '{jq.liXia}',
        '{jq.xiaoMan}',
        '{jq.mangZhong}',
        '{jq.xiaZhi}',
        '{jq.xiaoShu}',
        '{jq.daShu}',
        '{jq.liQiu}',
        '{jq.chuShu}',
        '{jq.baiLu}',
        '{jq.qiuFen}',
        '{jq.hanLu}',
        '{jq.shuangJiang}',
        '{jq.liDong}',
        '{jq.xiaoXue}',
        '{jq.daXue}'
    ];
    static JIE_QI_IN_USE: string[] = [
        'DA_XUE',
        '{jq.dongZhi}',
        '{jq.xiaoHan}',
        '{jq.daHan}',
        '{jq.liChun}',
        '{jq.yuShui}',
        '{jq.jingZhe}',
        '{jq.chunFen}',
        '{jq.qingMing}',
        '{jq.guYu}',
        '{jq.liXia}',
        '{jq.xiaoMan}',
        '{jq.mangZhong}',
        '{jq.xiaZhi}',
        '{jq.xiaoShu}',
        '{jq.daShu}',
        '{jq.liQiu}',
        '{jq.chuShu}',
        '{jq.baiLu}',
        '{jq.qiuFen}',
        '{jq.hanLu}',
        '{jq.shuangJiang}',
        '{jq.liDong}',
        '{jq.xiaoXue}',
        '{jq.daXue}',
        'DONG_ZHI',
        'XIAO_HAN',
        'DA_HAN',
        'LI_CHUN',
        'YU_SHUI',
        'JING_ZHE'
    ];
    static LIU_YAO: string[] = [
        '{ly.xianSheng}',
        '{ly.youYin}',
        '{ly.xianFu}',
        '{ly.foMie}',
        '{ly.daAn}',
        '{ly.chiKou}'
    ];
    static HOU: string[] = [
        '{h.first}',
        '{h.second}',
        '{h.third}'
    ];
    static WU_HOU: string[] = [
        '{h.qiuYinJie}',
        '{h.miJiao}',
        '{h.shuiQuan}',
        '{h.yanBei}',
        '{h.queShi}',
        '{h.zhiShi}',
        '{h.jiShi}',
        '{h.zhengNiao}',
        '{h.shuiZe}',
        '{h.dongFeng}',
        '{h.zheChongShiZhen}',
        '{h.yuZhi}',
        '{h.taJi}',
        '{h.houYan}',
        '{h.caoMuMengDong}',
        '{h.taoShi}',
        '{h.cangGeng}',
        '{h.yingHua}',
        '{h.xuanNiaoZhi}',
        '{h.leiNai}',
        '{h.shiDian}',
        '{h.tongShi}',
        '{h.tianShu}',
        '{h.hongShi}',
        '{h.pingShi}',
        '{h.mingJiu}',
        '{h.daiSheng}',
        '{h.louGuo}',
        '{h.qiuYinChu}',
        '{h.wangGua}',
        '{h.kuCai}',
        '{h.miCao}',
        '{h.maiQiu}',
        '{h.tangLang}',
        '{h.juShi}',
        '{h.fanShe}',
        '{h.luJia}',
        '{h.tiaoShi}',
        '{h.banXia}',
        '{h.wenFeng}',
        '{h.xiShuai}',
        '{h.yingShi}',
        '{h.fuCao}',
        '{h.tuRun}',
        '{h.daYu}',
        '{h.liangFeng}',
        '{h.baiLu}',
        '{h.hanChan}',
        '{h.yingNai}',
        '{h.tianDi}',
        '{h.heNai}',
        '{h.hongYanLai}',
        '{h.xuanNiaoGui}',
        '{h.qunNiao}',
        '{h.leiShi}',
        '{h.zheChongPiHu}',
        '{h.shuiShiHe}',
        '{h.hongYanLaiBin}',
        '{h.queRu}',
        '{h.juYou}',
        '{h.caiNai}',
        '{h.caoMuHuangLuo}',
        '{h.zheChongXianFu}',
        '{h.shuiShiBing}',
        '{h.diShi}',
        '{h.zhiRu}',
        '{h.hongCang}',
        '{h.tianQi}',
        '{h.biSe}',
        '{h.heDan}',
        '{h.huShi}',
        '{h.liTing}'
    ];
    static GAN: string[] = ['', '{tg.jia}', '{tg.yi}', '{tg.bing}', '{tg.ding}', '{tg.wu}', '{tg.ji}', '{tg.geng}', '{tg.xin}', '{tg.ren}', '{tg.gui}'];
    static POSITION_XI: string[] = ['', '{bg.gen}', '{bg.qian}', '{bg.kun}', '{bg.li}', '{bg.xun}', '{bg.gen}', '{bg.qian}', '{bg.kun}', '{bg.li}', '{bg.xun}'];
    static POSITION_YANG_GUI: string[] = ['', '{bg.kun}', '{bg.kun}', '{bg.dui}', '{bg.qian}', '{bg.gen}', '{bg.kan}', '{bg.li}', '{bg.gen}', '{bg.zhen}', '{bg.xun}'];
    static POSITION_YIN_GUI: string[] = ['', '{bg.gen}', '{bg.kan}', '{bg.qian}', '{bg.dui}', '{bg.kun}', '{bg.kun}', '{bg.gen}', '{bg.li}', '{bg.xun}', '{bg.zhen}'];
    static POSITION_FU: string[] = ['', '{bg.xun}', '{bg.xun}', '{bg.zhen}', '{bg.zhen}', '{bg.kan}', '{bg.li}', '{bg.kun}', '{bg.kun}', '{bg.qian}', '{bg.dui}'];
    static POSITION_FU_2: string[] = ['', '{bg.kan}', '{bg.kun}', '{bg.qian}', '{bg.xun}', '{bg.gen}', '{bg.kan}', '{bg.kun}', '{bg.qian}', '{bg.xun}', '{bg.gen}'];
    static POSITION_CAI: string[] = ['', '{bg.gen}', '{bg.gen}', '{bg.kun}', '{bg.kun}', '{bg.kan}', '{bg.kan}', '{bg.zhen}', '{bg.zhen}', '{bg.li}', '{bg.li}'];
    static POSITION_TAI_SUI_YEAR: string[] = ['{bg.kan}', '{bg.gen}', '{bg.gen}', '{bg.zhen}', '{bg.xun}', '{bg.xun}', '{bg.li}', '{bg.kun}', '{bg.kun}', '{bg.dui}', '{bg.kan}', '{bg.kan}'];
    static POSITION_GAN: string[] = ['{bg.zhen}', '{bg.zhen}', '{bg.li}', '{bg.li}', '{ps.center}', '{ps.center}', '{bg.dui}', '{bg.dui}', '{bg.kan}', '{bg.kan}'];
    static POSITION_ZHI: string[] = ['{bg.kan}', '{ps.center}', '{bg.zhen}', '{bg.zhen}', '{ps.center}', '{bg.li}', '{bg.li}', '{ps.center}', '{bg.dui}', '{bg.dui}', '{ps.center}', '{bg.kan}'];
    static POSITION_TAI_DAY: string[] = [
        '{ts.zhan}{ts.men}{ts.dui} {ps.wai}{ps.dongNan}',
        '{ts.dui}{ts.mo}{ts.ce} {ps.wai}{ps.dongNan}',
        '{ts.chu}{ts.zao}{ts.lu} {ps.wai}{ps.zhengNan}',
        '{ts.cangKu}{ts.men} {ps.wai}{ps.zhengNan}',
        '{ts.fang}{ts.chuang}{ts.xi} {ps.wai}{ps.zhengNan}',
        '{ts.zhan}{ts.men}{ts.chuang} {ps.wai}{ps.zhengNan}',
        '{ts.zhan}{ts.dui}{ts.mo} {ps.wai}{ps.zhengNan}',
        '{ts.chu}{ts.zao}{ts.ce} {ps.wai}{ps.xiNan}',
        '{ts.cangKu}{ts.lu} {ps.wai}{ps.xiNan}',
        '{ts.fang}{ts.chuang}{ts.men} {ps.wai}{ps.xiNan}',
        '{ts.zhan}{ts.men}{ts.xi} {ps.wai}{ps.xiNan}',
        '{ts.dui}{ts.mo}{ts.chuang} {ps.wai}{ps.xiNan}',
        '{ts.chu}{ts.zao}{ts.dui} {ps.wai}{ps.xiNan}',
        '{ts.cangKu}{ts.ce} {ps.wai}{ps.zhengXi}',
        '{ts.fang}{ts.chuang}{ts.lu} {ps.wai}{ps.zhengXi}',
        '{ts.zhan}{ts.daMen} {ps.wai}{ps.zhengXi}',
        '{ts.dui}{ts.mo}{ts.xi} {ps.wai}{ps.zhengXi}',
        '{ts.chu}{ts.zao}{ts.chuang} {ps.wai}{ps.zhengXi}',
        '{ts.cangKu}{ts.dui} {ps.wai}{ps.xiBei}',
        '{ts.fang}{ts.chuang}{ts.ce} {ps.wai}{ps.xiBei}',
        '{ts.zhan}{ts.men}{ts.lu} {ps.wai}{ps.xiBei}',
        '{ts.dui}{ts.mo}{ts.men} {ps.wai}{ps.xiBei}',
        '{ts.chu}{ts.zao}{ts.xi} {ps.wai}{ps.xiBei}',
        '{ts.cangKu}{ts.chuang} {ps.wai}{ps.xiBei}',
        '{ts.fang}{ts.chuang}{ts.dui} {ps.wai}{ps.zhengBei}',
        '{ts.zhan}{ts.men}{ts.ce} {ps.wai}{ps.zhengBei}',
        '{ts.dui}{ts.mo}{ts.lu} {ps.wai}{ps.zhengBei}',
        '{ts.chu}{ts.zao}{ts.men} {ps.wai}{ps.zhengBei}',
        '{ts.cangKu}{ts.xi} {ps.wai}{ps.zhengBei}',
        '{ts.zhan}{ts.fang}{ts.chuang} {ps.fangNei}{ps.bei}',
        '{ts.zhan}{ts.men}{ts.dui} {ps.fangNei}{ps.bei}',
        '{ts.dui}{ts.mo}{ts.ce} {ps.fangNei}{ps.bei}',
        '{ts.chu}{ts.zao}{ts.lu} {ps.fangNei}{ps.bei}',
        '{ts.cangKu}{ts.men} {ps.fangNei}{ps.bei}',
        '{ts.fang}{ts.chuang}{ts.xi} {ps.fangNei}{ps.center}',
        '{ts.zhan}{ts.men}{ts.chuang} {ps.fangNei}{ps.center}',
        '{ts.zhan}{ts.dui}{ts.mo} {ps.fangNei}{ps.nan}',
        '{ts.chu}{ts.zao}{ts.ce} {ps.fangNei}{ps.nan}',
        '{ts.cangKu}{ts.lu} {ps.fangNei}{ps.nan}',
        '{ts.fang}{ts.chuang}{ts.men} {ps.fangNei}{ps.xi}',
        '{ts.zhan}{ts.men}{ts.xi} {ps.fangNei}{ps.dong}',
        '{ts.dui}{ts.mo}{ts.chuang} {ps.fangNei}{ps.dong}',
        '{ts.chu}{ts.zao}{ts.dui} {ps.fangNei}{ps.dong}',
        '{ts.cangKu}{ts.ce} {ps.fangNei}{ps.dong}',
        '{ts.fang}{ts.chuang}{ts.lu} {ps.fangNei}{ps.center}',
        '{ts.zhan}{ts.daMen} {ps.wai}{ps.dongBei}',
        '{ts.dui}{ts.mo}{ts.xi} {ps.wai}{ps.dongBei}',
        '{ts.chu}{ts.zao}{ts.chuang} {ps.wai}{ps.dongBei}',
        '{ts.cangKu}{ts.dui} {ps.wai}{ps.dongBei}',
        '{ts.fang}{ts.chuang}{ts.ce} {ps.wai}{ps.dongBei}',
        '{ts.zhan}{ts.men}{ts.lu} {ps.wai}{ps.dongBei}',
        '{ts.dui}{ts.mo}{ts.men} {ps.wai}{ps.zhengDong}',
        '{ts.chu}{ts.zao}{ts.xi} {ps.wai}{ps.zhengDong}',
        '{ts.cangKu}{ts.chuang} {ps.wai}{ps.zhengDong}',
        '{ts.fang}{ts.chuang}{ts.dui} {ps.wai}{ps.zhengDong}',
        '{ts.zhan}{ts.men}{ts.ce} {ps.wai}{ps.zhengDong}',
        '{ts.dui}{ts.mo}{ts.lu} {ps.wai}{ps.dongNan}',
        '{ts.chu}{ts.zao}{ts.men} {ps.wai}{ps.dongNan}',
        '{ts.cangKu}{ts.xi} {ps.wai}{ps.dongNan}',
        '{ts.zhan}{ts.fang}{ts.chuang} {ps.wai}{ps.dongNan}'
    ];
    static POSITION_TAI_MONTH: string[] = [
        '{ts.zhan}{ts.fang}{ts.chuang}',
        '{ts.zhan}{ts.hu}{ts.win}',
        '{ts.zhan}{ts.men}{ts.tang}',
        '{ts.zhan}{ts.chu}{ts.zao}',
        '{ts.zhan}{ts.fang}{ts.chuang}',
        '{ts.zhan}{ts.chuang}{ts.cang}',
        '{ts.zhan}{ts.dui}{ts.mo}',
        '{ts.zhan}{ts.ce}{ts.hu}',
        '{ts.zhan}{ts.men}{ts.fang}',
        '{ts.zhan}{ts.fang}{ts.chuang}',
        '{ts.zhan}{ts.zao}{ts.lu}',
        '{ts.zhan}{ts.fang}{ts.chuang}'
    ];
    static ZHI: string[] = ['', '{dz.zi}', '{dz.chou}', '{dz.yin}', '{dz.mao}', '{dz.chen}', '{dz.si}', '{dz.wu}', '{dz.wei}', '{dz.shen}', '{dz.you}', '{dz.xu}', '{dz.hai}'];
    static ZHI_XING: string[] = [
        '',
        '{zx.jian}',
        '{zx.chu}',
        '{zx.man}',
        '{zx.ping}',
        '{zx.ding}',
        '{zx.zhi}',
        '{zx.po}',
        '{zx.wei}',
        '{zx.cheng}',
        '{zx.shou}',
        '{zx.kai}',
        '{zx.bi}'
    ];
    static JIA_ZI: string[] = [
        '{jz.jiaZi}',
        '{jz.yiChou}',
        '{jz.bingYin}',
        '{jz.dingMao}',
        '{jz.wuChen}',
        '{jz.jiSi}',
        '{jz.gengWu}',
        '{jz.xinWei}',
        '{jz.renShen}',
        '{jz.guiYou}',
        '{jz.jiaXu}',
        '{jz.yiHai}',
        '{jz.bingZi}',
        '{jz.dingChou}',
        '{jz.wuYin}',
        '{jz.jiMao}',
        '{jz.gengChen}',
        '{jz.xinSi}',
        '{jz.renWu}',
        '{jz.guiWei}',
        '{jz.jiaShen}',
        '{jz.yiYou}',
        '{jz.bingXu}',
        '{jz.dingHai}',
        '{jz.wuZi}',
        '{jz.jiChou}',
        '{jz.gengYin}',
        '{jz.xinMao}',
        '{jz.renChen}',
        '{jz.guiSi}',
        '{jz.jiaWu}',
        '{jz.yiWei}',
        '{jz.bingShen}',
        '{jz.dingYou}',
        '{jz.wuXu}',
        '{jz.jiHai}',
        '{jz.gengZi}',
        '{jz.xinChou}',
        '{jz.renYin}',
        '{jz.guiMao}',
        '{jz.jiaChen}',
        '{jz.yiSi}',
        '{jz.bingWu}',
        '{jz.dingWei}',
        '{jz.wuShen}',
        '{jz.jiYou}',
        '{jz.gengXu}',
        '{jz.xinHai}',
        '{jz.renZi}',
        '{jz.guiChou}',
        '{jz.jiaYin}',
        '{jz.yiMao}',
        '{jz.bingChen}',
        '{jz.dingSi}',
        '{jz.wuWu}',
        '{jz.jiWei}',
        '{jz.gengShen}',
        '{jz.xinYou}',
        '{jz.renXu}',
        '{jz.guiHai}'
    ];
    static CHANG_SHENG_OFFSET: Record<string, number> = {
        '{tg.jia}': 1,
        '{tg.bing}': 10,
        '{tg.wu}': 10,
        '{tg.geng}': 7,
        '{tg.ren}': 4,
        '{tg.yi}': 6,
        '{tg.ding}': 9,
        '{tg.ji}': 9,
        '{tg.xin}': 0,
        '{tg.gui}': 3
    };
    static TIAN_SHEN: string[] = ['', '{sn.qingLong}', '{sn.mingTang}', '{sn.tianXing}', '{sn.zhuQue}', '{sn.jinKui}', '{sn.tianDe}', '{sn.baiHu}', '{sn.yuTang}', '{sn.tianLao}', '{sn.xuanWu}', '{sn.siMing}', '{sn.gouChen}'];
    static ZHI_TIAN_SHEN_OFFSET: Record<string, number> = {
        '{dz.zi}': 4,
        '{dz.chou}': 2,
        '{dz.yin}': 0,
        '{dz.mao}': 10,
        '{dz.chen}': 8,
        '{dz.si}': 6,
        '{dz.wu}': 4,
        '{dz.wei}': 2,
        '{dz.shen}': 0,
        '{dz.you}': 10,
        '{dz.xu}': 8,
        '{dz.hai}': 6
    };
    static TIAN_SHEN_TYPE: Record<string, string> = {
        '{sn.qingLong}': '{s.huangDao}',
        '{sn.mingTang}': '{s.huangDao}',
        '{sn.jinKui}': '{s.huangDao}',
        '{sn.tianDe}': '{s.huangDao}',
        '{sn.yuTang}': '{s.huangDao}',
        '{sn.siMing}': '{s.huangDao}',
        '{sn.tianXing}': '{s.heiDao}',
        '{sn.zhuQue}': '{s.heiDao}',
        '{sn.baiHu}': '{s.heiDao}',
        '{sn.tianLao}': '{s.heiDao}',
        '{sn.xuanWu}': '{s.heiDao}',
        '{sn.gouChen}': '{s.heiDao}'
    };
    static TIAN_SHEN_TYPE_LUCK: Record<string, string> = {
        '{s.huangDao}': '{s.goodLuck}',
        '{s.heiDao}': '{s.badLuck}'
    };
    static LU: Record<string, string> = {
        '{tg.jia}': '{dz.yin}',
        '{tg.yi}': '{dz.mao}',
        '{tg.bing}': '{dz.si}',
        '{tg.ding}': '{dz.wu}',
        '{tg.wu}': '{dz.si}',
        '{tg.ji}': '{dz.wu}',
        '{tg.geng}': '{dz.shen}',
        '{tg.xin}': '{dz.you}',
        '{tg.ren}': '{dz.hai}',
        '{tg.gui}': '{dz.zi}',
        '{dz.yin}': '{tg.jia}',
        '{dz.mao}': '{tg.yi}',
        '{dz.si}': '{tg.bing},{tg.wu}',
        '{dz.wu}': '{tg.ding},{tg.ji}',
        '{dz.shen}': '{tg.geng}',
        '{dz.you}': '{tg.xin}',
        '{dz.hai}': '{tg.ren}',
        '{dz.zi}': '{tg.gui}'
    };
    static PENGZU_GAN: string[] = ['', '{tg.jia}不开仓财物耗散', '{tg.yi}不栽植千株不长', '{tg.bing}不修灶必见灾殃', '{tg.ding}不剃头头必生疮', '{tg.wu}不受田田主不祥', '{tg.ji}不破券二比并亡', '{tg.geng}不经络织机虚张', '{tg.xin}不合酱主人不尝', '{tg.ren}不泱水更难提防', '{tg.gui}不词讼理弱敌强'];
    static PENGZU_ZHI: string[] = ['', '{dz.zi}不问卜自惹祸殃', '{dz.chou}不冠带主不还乡', '{dz.yin}不祭祀神鬼不尝', '{dz.mao}不穿井水泉不香', '{dz.chen}不哭泣必主重丧', '{dz.si}不远行财物伏藏', '{dz.wu}不苫盖屋主更张', '{dz.wei}不服药毒气入肠', '{dz.shen}不安床鬼祟入房', '{dz.you}不会客醉坐颠狂', '{dz.xu}不吃犬作怪上床', '{dz.hai}不嫁娶不利新郎'];
    static NUMBER: string[] = ['{n.zero}', '{n.one}', '{n.two}', '{n.three}', '{n.four}', '{n.five}', '{n.six}', '{n.seven}', '{n.eight}', '{n.nine}', '{n.ten}', '{n.eleven}', '{n.twelve}'];
    static MONTH: string[] = [
        '',
        '{m.one}',
        '{m.two}',
        '{m.three}',
        '{m.four}',
        '{m.five}',
        '{m.six}',
        '{m.seven}',
        '{m.eight}',
        '{m.nine}',
        '{m.ten}',
        '{m.eleven}',
        '{m.twelve}'
    ];
    static SEASON: string[] = [
        '',
        '{od.first}{sz.chun}',
        '{od.second}{sz.chun}',
        '{od.third}{sz.chun}',
        '{od.first}{sz.xia}',
        '{od.second}{sz.xia}',
        '{od.third}{sz.xia}',
        '{od.first}{sz.qiu}',
        '{od.second}{sz.qiu}',
        '{od.third}{sz.qiu}',
        '{od.first}{sz.dong}',
        '{od.second}{sz.dong}',
        '{od.third}{sz.dong}'
    ];
    static SHENGXIAO: string[] = ['', '{sx.rat}', '{sx.ox}', '{sx.tiger}', '{sx.rabbit}', '{sx.dragon}', '{sx.snake}', '{sx.horse}', '{sx.goat}', '{sx.monkey}', '{sx.rooster}', '{sx.dog}', '{sx.pig}'];
    static DAY: string[] = [
        '',
        '{d.one}',
        '{d.two}',
        '{d.three}',
        '{d.four}',
        '{d.five}',
        '{d.six}',
        '{d.seven}',
        '{d.eight}',
        '{d.nine}',
        '{d.ten}',
        '{d.eleven}',
        '{d.twelve}',
        '{d.thirteen}',
        '{d.fourteen}',
        '{d.fifteen}',
        '{d.sixteen}',
        '{d.seventeen}',
        '{d.eighteen}',
        '{d.nighteen}',
        '{d.twenty}',
        '{d.twentyOne}',
        '{d.twentyTwo}',
        '{d.twentyThree}',
        '{d.twentyFour}',
        '{d.twentyFive}',
        '{d.twentySix}',
        '{d.twentySeven}',
        '{d.twentyEight}',
        '{d.twentyNine}',
        '{d.thirty}'
    ];
    static YUE_XIANG: string[] = [
        '',
        '{yx.shuo}',
        '{yx.jiShuo}',
        '{yx.eMeiXin}',
        '{yx.eMeiXin}',
        '{yx.eMei}',
        '{yx.xi}',
        '{yx.shangXian}',
        '{yx.shangXian}',
        '{yx.jiuYe}',
        '{yx.night}',
        '{yx.night}',
        '{yx.night}',
        '{yx.jianYingTu}',
        '{yx.xiaoWang}',
        '{yx.wang}',
        '{yx.jiWang}',
        '{yx.liDai}',
        '{yx.juDai}',
        '{yx.qinDai}',
        '{yx.gengDai}',
        '{yx.jianKuiTu}',
        '{yx.xiaXian}',
        '{yx.xiaXian}',
        '{yx.youMing}',
        '{yx.youMing}',
        '{yx.eMeiCan}',
        '{yx.eMeiCan}',
        '{yx.can}',
        '{yx.xiao}',
        '{yx.hui}'
    ];
    static XIU: Record<string, string> = {
        '{dz.shen}1': '{xx.bi}',
        '{dz.shen}2': '{xx.yi}',
        '{dz.shen}3': '{xx.ji}',
        '{dz.shen}4': '{xx.kui}',
        '{dz.shen}5': '{xx.gui}',
        '{dz.shen}6': '{xx.di}',
        '{dz.shen}0': '{xx.xu}',
        '{dz.zi}1': '{xx.bi}',
        '{dz.zi}2': '{xx.yi}',
        '{dz.zi}3': '{xx.ji}',
        '{dz.zi}4': '{xx.kui}',
        '{dz.zi}5': '{xx.gui}',
        '{dz.zi}6': '{xx.di}',
        '{dz.zi}0': '{xx.xu}',
        '{dz.chen}1': '{xx.bi}',
        '{dz.chen}2': '{xx.yi}',
        '{dz.chen}3': '{xx.ji}',
        '{dz.chen}4': '{xx.kui}',
        '{dz.chen}5': '{xx.gui}',
        '{dz.chen}6': '{xx.di}',
        '{dz.chen}0': '{xx.xu}',
        '{dz.si}1': '{xx.wei}',
        '{dz.si}2': '{xx.zi}',
        '{dz.si}3': '{xx.zhen}',
        '{dz.si}4': '{xx.dou}',
        '{dz.si}5': '{xx.lou}',
        '{dz.si}6': '{xx.liu}',
        '{dz.si}0': '{xx.fang}',
        '{dz.you}1': '{xx.wei}',
        '{dz.you}2': '{xx.zi}',
        '{dz.you}3': '{xx.zhen}',
        '{dz.you}4': '{xx.dou}',
        '{dz.you}5': '{xx.lou}',
        '{dz.you}6': '{xx.liu}',
        '{dz.you}0': '{xx.fang}',
        '{dz.chou}1': '{xx.wei}',
        '{dz.chou}2': '{xx.zi}',
        '{dz.chou}3': '{xx.zhen}',
        '{dz.chou}4': '{xx.dou}',
        '{dz.chou}5': '{xx.lou}',
        '{dz.chou}6': '{xx.liu}',
        '{dz.chou}0': '{xx.fang}',
        '{dz.yin}1': '{xx.xin}',
        '{dz.yin}2': '{xx.shi}',
        '{dz.yin}3': '{xx.can}',
        '{dz.yin}4': '{xx.jiao}',
        '{dz.yin}5': '{xx.niu}',
        '{dz.yin}6': '{xx.vei}',
        '{dz.yin}0': '{xx.xing}',
        '{dz.wu}1': '{xx.xin}',
        '{dz.wu}2': '{xx.shi}',
        '{dz.wu}3': '{xx.can}',
        '{dz.wu}4': '{xx.jiao}',
        '{dz.wu}5': '{xx.niu}',
        '{dz.wu}6': '{xx.vei}',
        '{dz.wu}0': '{xx.xing}',
        '{dz.xu}1': '{xx.xin}',
        '{dz.xu}2': '{xx.shi}',
        '{dz.xu}3': '{xx.can}',
        '{dz.xu}4': '{xx.jiao}',
        '{dz.xu}5': '{xx.niu}',
        '{dz.xu}6': '{xx.vei}',
        '{dz.xu}0': '{xx.xing}',
        '{dz.hai}1': '{xx.zhang}',
        '{dz.hai}2': '{xx.tail}',
        '{dz.hai}3': '{xx.qiang}',
        '{dz.hai}4': '{xx.jing}',
        '{dz.hai}5': '{xx.kang}',
        '{dz.hai}6': '{xx.nv}',
        '{dz.hai}0': '{xx.mao}',
        '{dz.mao}1': '{xx.zhang}',
        '{dz.mao}2': '{xx.tail}',
        '{dz.mao}3': '{xx.qiang}',
        '{dz.mao}4': '{xx.jing}',
        '{dz.mao}5': '{xx.kang}',
        '{dz.mao}6': '{xx.nv}',
        '{dz.mao}0': '{xx.mao}',
        '{dz.wei}1': '{xx.zhang}',
        '{dz.wei}2': '{xx.tail}',
        '{dz.wei}3': '{xx.qiang}',
        '{dz.wei}4': '{xx.jing}',
        '{dz.wei}5': '{xx.kang}',
        '{dz.wei}6': '{xx.nv}',
        '{dz.wei}0': '{xx.mao}'
    };
    static XIU_LUCK: Record<string, string> = {
        '{xx.jiao}': '{s.goodLuck}',
        '{xx.kang}': '{s.badLuck}',
        '{xx.di}': '{s.badLuck}',
        '{xx.fang}': '{s.goodLuck}',
        '{xx.xin}': '{s.badLuck}',
        '{xx.tail}': '{s.goodLuck}',
        '{xx.ji}': '{s.goodLuck}',
        '{xx.dou}': '{s.goodLuck}',
        '{xx.niu}': '{s.badLuck}',
        '{xx.nv}': '{s.badLuck}',
        '{xx.xu}': '{s.badLuck}',
        '{xx.wei}': '{s.badLuck}',
        '{xx.shi}': '{s.goodLuck}',
        '{xx.qiang}': '{s.goodLuck}',
        '{xx.kui}': '{s.badLuck}',
        '{xx.lou}': '{s.goodLuck}',
        '{xx.vei}': '{s.goodLuck}',
        '{xx.mao}': '{s.badLuck}',
        '{xx.bi}': '{s.goodLuck}',
        '{xx.zi}': '{s.badLuck}',
        '{xx.can}': '{s.goodLuck}',
        '{xx.jing}': '{s.goodLuck}',
        '{xx.gui}': '{s.badLuck}',
        '{xx.liu}': '{s.badLuck}',
        '{xx.xing}': '{s.badLuck}',
        '{xx.zhang}': '{s.goodLuck}',
        '{xx.yi}': '{s.badLuck}',
        '{xx.zhen}': '{s.goodLuck}'
    };
    static XIU_SONG: Record<string, string> = {
        '{xx.jiao}': '角星造作主荣昌，外进田财及女郎，嫁娶婚姻出贵子，文人及第见君王，惟有埋葬不可用，三年之后主瘟疫，起工修筑坟基地，堂前立见主人凶。',
        '{xx.kang}': '亢星造作长房当，十日之中主有殃，田地消磨官失职，接运定是虎狼伤，嫁娶婚姻用此日，儿孙新妇守空房，埋葬若还用此日，当时害祸主重伤。',
        '{xx.di}': '氐星造作主灾凶，费尽田园仓库空，埋葬不可用此日，悬绳吊颈祸重重，若是婚姻离别散，夜招浪子入房中，行船必定遭沉没，更生聋哑子孙穷。',
        '{xx.fang}': '房星造作田园进，钱财牛马遍山岗，更招外处田庄宅，荣华富贵福禄康，埋葬若然用此日，高官进职拜君王，嫁娶嫦娥至月殿，三年抱子至朝堂。',
        '{xx.xin}': '心星造作大为凶，更遭刑讼狱囚中，忤逆官非宅产退，埋葬卒暴死相从，婚姻若是用此日，子死儿亡泪满胸，三年之内连遭祸，事事教君没始终。',
        '{xx.tail}': '尾星造作主天恩，富贵荣华福禄增，招财进宝兴家宅，和合婚姻贵子孙，埋葬若能依此日，男清女正子孙兴，开门放水招田宅，代代公侯远播名。',
        '{xx.ji}': '箕星造作主高强，岁岁年年大吉昌，埋葬修坟大吉利，田蚕牛马遍山岗，开门放水招田宅，箧满金银谷满仓，福荫高官加禄位，六亲丰禄乐安康。',
        '{xx.dou}': '斗星造作主招财，文武官员位鼎台，田宅家财千万进，坟堂修筑贵富来，开门放水招牛马，旺蚕男女主和谐，遇此吉宿来照护，时支福庆永无灾。',
        '{xx.niu}': '牛星造作主灾危，九横三灾不可推，家宅不安人口退，田蚕不利主人衰，嫁娶婚姻皆自损，金银财谷渐无之，若是开门并放水，牛猪羊马亦伤悲。',
        '{xx.nv}': '女星造作损婆娘，兄弟相嫌似虎狼，埋葬生灾逢鬼怪，颠邪疾病主瘟惶，为事遭官财失散，泻利留连不可当，开门放水用此日，全家财散主离乡。',
        '{xx.xu}': '虚星造作主灾殃，男女孤眠不一双，内乱风声无礼节，儿孙媳妇伴人床，开门放水遭灾祸，虎咬蛇伤又卒亡，三三五五连年病，家破人亡不可当。',
        '{xx.wei}': '危星不可造高楼，自遭刑吊见血光，三年孩子遭水厄，后生出外永不还，埋葬若还逢此日，周年百日取高堂，三年两载一悲伤，开门放水到官堂。',
        '{xx.shi}': '室星修造进田牛，儿孙代代近王侯，家贵荣华天上至，寿如彭祖八千秋，开门放水招财帛，和合婚姻生贵儿，埋葬若能依此日，门庭兴旺福无休。',
        '{xx.qiang}': '壁星造作主增财，丝蚕大熟福滔天，奴婢自来人口进，开门放水出英贤，埋葬招财官品进，家中诸事乐陶然，婚姻吉利主贵子，早播名誉著祖鞭。',
        '{xx.kui}': '奎星造作得祯祥，家内荣和大吉昌，若是埋葬阴卒死，当年定主两三伤，看看军令刑伤到，重重官事主瘟惶，开门放水遭灾祸，三年两次损儿郎。',
        '{xx.lou}': '娄星修造起门庭，财旺家和事事兴，外进钱财百日进，一家兄弟播高名，婚姻进益生贵子，玉帛金银箱满盈，放水开门皆吉利，男荣女贵寿康宁。',
        '{xx.vei}': '胃星造作事如何，家贵荣华喜气多，埋葬贵临官禄位，夫妇齐眉永保康，婚姻遇此家富贵，三灾九祸不逢他，从此门前多吉庆，儿孙代代拜金阶。',
        '{xx.mao}': '昴星造作进田牛，埋葬官灾不得休，重丧二日三人死，尽卖田园不记增，开门放水招灾祸，三岁孩儿白了头，婚姻不可逢此日，死别生离是可愁。',
        '{xx.bi}': '毕星造作主光前，买得田园有余钱，埋葬此日添官职，田蚕大熟永丰年，开门放水多吉庆，合家人口得安然，婚姻若得逢此日，生得孩儿福寿全。',
        '{xx.zi}': '觜星造作有徒刑，三年必定主伶丁，埋葬卒死多因此，取定寅年使杀人，三丧不止皆由此，一人药毒二人身，家门田地皆退败，仓库金银化作尘。',
        '{xx.can}': '参星造作旺人家，文星照耀大光华，只因造作田财旺，埋葬招疾哭黄沙，开门放水加官职，房房子孙见田加，婚姻许遁遭刑克，男女朝开幕落花。',
        '{xx.jing}': '井星造作旺蚕田，金榜题名第一光，埋葬须防惊卒死，狂颠风疾入黄泉，开门放水招财帛，牛马猪羊旺莫言，贵人田塘来入宅，儿孙兴旺有余钱。',
        '{xx.gui}': '鬼星起造卒人亡，堂前不见主人郎，埋葬此日官禄至，儿孙代代近君王，开门放水须伤死，嫁娶夫妻不久长，修土筑墙伤产女，手扶双女泪汪汪。',
        '{xx.liu}': '柳星造作主遭官，昼夜偷闭不暂安，埋葬瘟惶多疾病，田园退尽守冬寒，开门放水遭聋瞎，腰驼背曲似弓弯，更有棒刑宜谨慎，妇人随客走盘桓。',
        '{xx.xing}': '星宿日好造新房，进职加官近帝王，不可埋葬并放水，凶星临位女人亡，生离死别无心恋，要自归休别嫁郎，孔子九曲殊难度，放水开门天命伤。',
        '{xx.zhang}': '张星日好造龙轩，年年并见进庄田，埋葬不久升官职，代代为官近帝前，开门放水招财帛，婚姻和合福绵绵，田蚕人满仓库满，百般顺意自安然。',
        '{xx.yi}': '翼星不利架高堂，三年二载见瘟惶，埋葬若还逢此日，子孙必定走他乡，婚姻此日不宜利，归家定是不相当，开门放水家须破，少女恋花贪外郎。',
        '{xx.zhen}': '轸星临水造龙宫，代代为官受皇封，富贵荣华增寿禄，库满仓盈自昌隆，埋葬文昌来照助，宅舍安宁不见凶，更有为官沾帝宠，婚姻龙子入龙宫。'
    };
    static ZHENG: Record<string, string> = {
        '{xx.jiao}': '{wx.mu}',
        '{xx.jing}': '{wx.mu}',
        '{xx.kui}': '{wx.mu}',
        '{xx.dou}': '{wx.mu}',
        '{xx.kang}': '{wx.jin}',
        '{xx.gui}': '{wx.jin}',
        '{xx.lou}': '{wx.jin}',
        '{xx.niu}': '{wx.jin}',
        '{xx.di}': '{wx.tu}',
        '{xx.liu}': '{wx.tu}',
        '{xx.vei}': '{wx.tu}',
        '{xx.nv}': '{wx.tu}',
        '{xx.fang}': '{wx.ri}',
        '{xx.xing}': '{wx.ri}',
        '{xx.mao}': '{wx.ri}',
        '{xx.xu}': '{wx.ri}',
        '{xx.xin}': '{wx.yue}',
        '{xx.zhang}': '{wx.yue}',
        '{xx.bi}': '{wx.yue}',
        '{xx.wei}': '{wx.yue}',
        '{xx.tail}': '{wx.huo}',
        '{xx.yi}': '{wx.huo}',
        '{xx.zi}': '{wx.huo}',
        '{xx.shi}': '{wx.huo}',
        '{xx.ji}': '{wx.shui}',
        '{xx.zhen}': '{wx.shui}',
        '{xx.can}': '{wx.shui}',
        '{xx.qiang}': '{wx.shui}'
    };
    static ANIMAL: Record<string, string> = {
        '{xx.jiao}': '{dw.jiao}',
        '{xx.dou}': '{dw.xie}',
        '{xx.kui}': '{dw.lang}',
        '{xx.jing}': '{dw.han}',
        '{xx.kang}': '{dw.long}',
        '{xx.niu}': '{dw.niu}',
        '{xx.lou}': '{dw.gou}',
        '{xx.gui}': '{dw.yang}',
        '{xx.nv}': '{dw.fu}',
        '{xx.di}': '{dw.he}',
        '{xx.vei}': '{dw.zhi}',
        '{xx.liu}': '{dw.zhang}',
        '{xx.fang}': '{dw.tu}',
        '{xx.xu}': '{dw.shu}',
        '{xx.mao}': '{dw.ji}',
        '{xx.xing}': '{dw.ma}',
        '{xx.xin}': '{dw.huLi}',
        '{xx.wei}': '{dw.yan}',
        '{xx.bi}': '{dw.wu}',
        '{xx.zhang}': '{dw.lu}',
        '{xx.tail}': '{dw.hu}',
        '{xx.shi}': '{dw.zhu}',
        '{xx.zi}': '{dw.hou}',
        '{xx.yi}': '{dw.she}',
        '{xx.ji}': '{dw.bao}',
        '{xx.qiang}': '{dw.xu}',
        '{xx.can}': '{dw.yuan}',
        '{xx.zhen}': '{dw.yin}'
    };
    static GONG: Record<string, string> = {
        '{xx.jiao}': '{ps.dong}',
        '{xx.jing}': '{ps.nan}',
        '{xx.kui}': '{ps.xi}',
        '{xx.dou}': '{ps.bei}',
        '{xx.kang}': '{ps.dong}',
        '{xx.gui}': '{ps.nan}',
        '{xx.lou}': '{ps.xi}',
        '{xx.niu}': '{ps.bei}',
        '{xx.di}': '{ps.dong}',
        '{xx.liu}': '{ps.nan}',
        '{xx.vei}': '{ps.xi}',
        '{xx.nv}': '{ps.bei}',
        '{xx.fang}': '{ps.dong}',
        '{xx.xing}': '{ps.nan}',
        '{xx.mao}': '{ps.xi}',
        '{xx.xu}': '{ps.bei}',
        '{xx.xin}': '{ps.dong}',
        '{xx.zhang}': '{ps.nan}',
        '{xx.bi}': '{ps.xi}',
        '{xx.wei}': '{ps.bei}',
        '{xx.tail}': '{ps.dong}',
        '{xx.yi}': '{ps.nan}',
        '{xx.zi}': '{ps.xi}',
        '{xx.shi}': '{ps.bei}',
        '{xx.ji}': '{ps.dong}',
        '{xx.zhen}': '{ps.nan}',
        '{xx.can}': '{ps.xi}',
        '{xx.qiang}': '{ps.bei}'
    };
    static SHOU: Record<string, string> = {
        '{ps.dong}': '{sn.qingLong}',
        '{ps.nan}': '{sn.zhuQue}',
        '{ps.xi}': '{sn.baiHu}',
        '{ps.bei}': '{sn.xuanWu}'
    };
    static FESTIVAL: Record<string, string> = {
        '1-1': '{jr.chunJie}',
        '1-15': '{jr.yuanXiao}',
        '2-2': '{jr.longTou}',
        '5-5': '{jr.duanWu}',
        '7-7': '{jr.qiXi}',
        '8-15': '{jr.zhongQiu}',
        '9-9': '{jr.chongYang}',
        '12-8': '{jr.laBa}'
    };
    static OTHER_FESTIVAL: Record<string, string[]> = {
        '1-4': ['接神日'],
        '1-5': ['隔开日'],
        '1-7': ['人日'],
        '1-8': ['谷日', '顺星节'],
        '1-9': ['天日'],
        '1-10': ['地日'],
        '1-20': ['天穿节'],
        '1-25': ['填仓节'],
        '1-30': ['正月晦'],
        '2-1': ['中和节'],
        '2-2': ['社日节'],
        '3-3': ['上巳节'],
        '5-20': ['分龙节'],
        '5-25': ['会龙节'],
        '6-6': ['天贶节'],
        '6-24': ['观莲节'],
        '6-25': ['五谷母节'],
        '7-15': ['中元节'],
        '7-22': ['财神节'],
        '7-29': ['地藏节'],
        '8-1': ['天灸日'],
        '10-1': ['寒衣节'],
        '10-10': ['十成节'],
        '10-15': ['下元节'],
        '12-7': ['驱傩日'],
        '12-16': ['尾牙'],
        '12-24': ['祭灶日']
    };
    static CHONG: string[] = ['{dz.wu}', '{dz.wei}', '{dz.shen}', '{dz.you}', '{dz.xu}', '{dz.hai}', '{dz.zi}', '{dz.chou}', '{dz.yin}', '{dz.mao}', '{dz.chen}', '{dz.si}'];
    static CHONG_GAN: string[] = ['{tg.wu}', '{tg.ji}', '{tg.geng}', '{tg.xin}', '{tg.ren}', '{tg.gui}', '{tg.jia}', '{tg.yi}', '{tg.bing}', '{tg.ding}'];
    static CHONG_GAN_TIE: string[] = ['{tg.ji}', '{tg.wu}', '{tg.xin}', '{tg.geng}', '{tg.gui}', '{tg.ren}', '{tg.yi}', '{tg.jia}', '{tg.ding}', '{tg.bing}'];
    static CHONG_GAN_4: string[] = ['{tg.geng}', '{tg.xin}', '{tg.ren}', '{tg.gui}', '', '', '{tg.jia}', '{tg.yi}', '{tg.bing}', '{tg.ding}'];
    static HE_GAN_5: string[] = ['{tg.ji}', '{tg.geng}', '{tg.xin}', '{tg.ren}', '{tg.gui}', '{tg.jia}', '{tg.yi}', '{tg.bing}', '{tg.ding}', '{tg.wu}'];
    static HE_ZHI_6: string[] = ['{dz.chou}', '{dz.zi}', '{dz.hai}', '{dz.xu}', '{dz.you}', '{dz.shen}', '{dz.wei}', '{dz.wu}', '{dz.si}', '{dz.chen}', '{dz.mao}', '{dz.yin}'];
    static SHA: Record<string, string> = {
        '{dz.zi}': '{ps.nan}',
        '{dz.chou}': '{ps.dong}',
        '{dz.yin}': '{ps.bei}',
        '{dz.mao}': '{ps.xi}',
        '{dz.chen}': '{ps.nan}',
        '{dz.si}': '{ps.dong}',
        '{dz.wu}': '{ps.bei}',
        '{dz.wei}': '{ps.xi}',
        '{dz.shen}': '{ps.nan}',
        '{dz.you}': '{ps.dong}',
        '{dz.xu}': '{ps.bei}',
        '{dz.hai}': '{ps.xi}'
    };
    static POSITION_DESC: Record<string, string> = {
        '{bg.kan}': '{ps.zhengBei}',
        '{bg.gen}': '{ps.dongBei}',
        '{bg.zhen}': '{ps.zhengDong}',
        '{bg.xun}': '{ps.dongNan}',
        '{bg.li}': '{ps.zhengNan}',
        '{bg.kun}': '{ps.xiNan}',
        '{bg.dui}': '{ps.zhengXi}',
        '{bg.qian}': '{ps.xiBei}',
        '{ps.center}': '{ps.zhong}'
    };
    static NAYIN: Record<string, string> = {
        '{jz.jiaZi}': '{ny.haiZhong}{wx.jin}',
        '{jz.jiaWu}': '{ny.shaZhong}{wx.jin}',
        '{jz.bingYin}': '{ny.luZhong}{wx.huo}',
        '{jz.bingShen}': '{ny.shanXia}{wx.huo}',
        '{jz.wuChen}': '{ny.daLin}{wx.mu}',
        '{jz.wuXu}': '{ny.pingDi}{wx.mu}',
        '{jz.gengWu}': '{ny.luPang}{wx.tu}',
        '{jz.gengZi}': '{ny.biShang}{wx.tu}',
        '{jz.renShen}': '{ny.jianFeng}{wx.jin}',
        '{jz.renYin}': '{ny.jinBo}{wx.jin}',
        '{jz.jiaXu}': '{ny.shanTou}{wx.huo}',
        '{jz.jiaChen}': '{ny.fuDeng}{wx.huo}',
        '{jz.bingZi}': '{ny.jianXia}{wx.shui}',
        '{jz.bingWu}': '{ny.tianHe}{wx.shui}',
        '{jz.wuYin}': '{ny.chengTou}{wx.tu}',
        '{jz.wuShen}': '{ny.daYi}{wx.tu}',
        '{jz.gengChen}': '{ny.baiLa}{wx.jin}',
        '{jz.gengXu}': '{ny.chaiChuan}{wx.jin}',
        '{jz.renWu}': '{ny.yangLiu}{wx.mu}',
        '{jz.renZi}': '{ny.sangZhe}{wx.mu}',
        '{jz.jiaShen}': '{ny.quanZhong}{wx.shui}',
        '{jz.jiaYin}': '{ny.daXi}{wx.shui}',
        '{jz.bingXu}': '{ny.wuShang}{wx.tu}',
        '{jz.bingChen}': '{ny.shaZhong}{wx.tu}',
        '{jz.wuZi}': '{ny.piLi}{wx.huo}',
        '{jz.wuWu}': '{ny.tianShang}{wx.huo}',
        '{jz.gengYin}': '{ny.songBo}{wx.mu}',
        '{jz.gengShen}': '{ny.shiLiu}{wx.mu}',
        '{jz.renChen}': '{ny.changLiu}{wx.shui}',
        '{jz.renXu}': '{ny.daHai}{wx.shui}',
        '{jz.yiChou}': '{ny.haiZhong}{wx.jin}',
        '{jz.yiWei}': '{ny.shaZhong}{wx.jin}',
        '{jz.dingMao}': '{ny.luZhong}{wx.huo}',
        '{jz.dingYou}': '{ny.shanXia}{wx.huo}',
        '{jz.jiSi}': '{ny.daLin}{wx.mu}',
        '{jz.jiHai}': '{ny.pingDi}{wx.mu}',
        '{jz.xinWei}': '{ny.luPang}{wx.tu}',
        '{jz.xinChou}': '{ny.biShang}{wx.tu}',
        '{jz.guiYou}': '{ny.jianFeng}{wx.jin}',
        '{jz.guiMao}': '{ny.jinBo}{wx.jin}',
        '{jz.yiHai}': '{ny.shanTou}{wx.huo}',
        '{jz.yiSi}': '{ny.fuDeng}{wx.huo}',
        '{jz.dingChou}': '{ny.jianXia}{wx.shui}',
        '{jz.dingWei}': '{ny.tianHe}{wx.shui}',
        '{jz.jiMao}': '{ny.chengTou}{wx.tu}',
        '{jz.jiYou}': '{ny.daYi}{wx.tu}',
        '{jz.xinSi}': '{ny.baiLa}{wx.jin}',
        '{jz.xinHai}': '{ny.chaiChuan}{wx.jin}',
        '{jz.guiWei}': '{ny.yangLiu}{wx.mu}',
        '{jz.guiChou}': '{ny.sangZhe}{wx.mu}',
        '{jz.yiYou}': '{ny.quanZhong}{wx.shui}',
        '{jz.yiMao}': '{ny.daXi}{wx.shui}',
        '{jz.dingHai}': '{ny.wuShang}{wx.tu}',
        '{jz.dingSi}': '{ny.shaZhong}{wx.tu}',
        '{jz.jiChou}': '{ny.piLi}{wx.huo}',
        '{jz.jiWei}': '{ny.tianShang}{wx.huo}',
        '{jz.xinMao}': '{ny.songBo}{wx.mu}',
        '{jz.xinYou}': '{ny.shiLiu}{wx.mu}',
        '{jz.guiSi}': '{ny.changLiu}{wx.shui}',
        '{jz.guiHai}': '{ny.daHai}{wx.shui}'
    };
    static WU_XING_GAN: Record<string, string> = {
        '{tg.jia}': '{wx.mu}',
        '{tg.yi}': '{wx.mu}',
        '{tg.bing}': '{wx.huo}',
        '{tg.ding}': '{wx.huo}',
        '{tg.wu}': '{wx.tu}',
        '{tg.ji}': '{wx.tu}',
        '{tg.geng}': '{wx.jin}',
        '{tg.xin}': '{wx.jin}',
        '{tg.ren}': '{wx.shui}',
        '{tg.gui}': '{wx.shui}'
    };
    static WU_XING_ZHI: Record<string, string> = {
        '{dz.yin}': '{wx.mu}',
        '{dz.mao}': '{wx.mu}',
        '{dz.si}': '{wx.huo}',
        '{dz.wu}': '{wx.huo}',
        '{dz.chen}': '{wx.tu}',
        '{dz.chou}': '{wx.tu}',
        '{dz.xu}': '{wx.tu}',
        '{dz.wei}': '{wx.tu}',
        '{dz.shen}': '{wx.jin}',
        '{dz.you}': '{wx.jin}',
        '{dz.hai}': '{wx.shui}',
        '{dz.zi}': '{wx.shui}'
    };
    static SHI_SHEN: Record<string, string> = {
        '{tg.jia}{tg.jia}': '{ss.biJian}',
        '{tg.jia}{tg.yi}': '{ss.jieCai}',
        '{tg.jia}{tg.bing}': '{ss.shiShen}',
        '{tg.jia}{tg.ding}': '{ss.shangGuan}',
        '{tg.jia}{tg.wu}': '{ss.pianCai}',
        '{tg.jia}{tg.ji}': '{ss.zhengCai}',
        '{tg.jia}{tg.geng}': '{ss.qiSha}',
        '{tg.jia}{tg.xin}': '{ss.zhengGuan}',
        '{tg.jia}{tg.ren}': '{ss.pianYin}',
        '{tg.jia}{tg.gui}': '{ss.zhengYin}',
        '{tg.yi}{tg.yi}': '{ss.biJian}',
        '{tg.yi}{tg.jia}': '{ss.jieCai}',
        '{tg.yi}{tg.ding}': '{ss.shiShen}',
        '{tg.yi}{tg.bing}': '{ss.shangGuan}',
        '{tg.yi}{tg.ji}': '{ss.pianCai}',
        '{tg.yi}{tg.wu}': '{ss.zhengCai}',
        '{tg.yi}{tg.xin}': '{ss.qiSha}',
        '{tg.yi}{tg.geng}': '{ss.zhengGuan}',
        '{tg.yi}{tg.gui}': '{ss.pianYin}',
        '{tg.yi}{tg.ren}': '{ss.zhengYin}',
        '{tg.bing}{tg.bing}': '{ss.biJian}',
        '{tg.bing}{tg.ding}': '{ss.jieCai}',
        '{tg.bing}{tg.wu}': '{ss.shiShen}',
        '{tg.bing}{tg.ji}': '{ss.shangGuan}',
        '{tg.bing}{tg.geng}': '{ss.pianCai}',
        '{tg.bing}{tg.xin}': '{ss.zhengCai}',
        '{tg.bing}{tg.ren}': '{ss.qiSha}',
        '{tg.bing}{tg.gui}': '{ss.zhengGuan}',
        '{tg.bing}{tg.jia}': '{ss.pianYin}',
        '{tg.bing}{tg.yi}': '{ss.zhengYin}',
        '{tg.ding}{tg.ding}': '{ss.biJian}',
        '{tg.ding}{tg.bing}': '{ss.jieCai}',
        '{tg.ding}{tg.ji}': '{ss.shiShen}',
        '{tg.ding}{tg.wu}': '{ss.shangGuan}',
        '{tg.ding}{tg.xin}': '{ss.pianCai}',
        '{tg.ding}{tg.geng}': '{ss.zhengCai}',
        '{tg.ding}{tg.gui}': '{ss.qiSha}',
        '{tg.ding}{tg.ren}': '{ss.zhengGuan}',
        '{tg.ding}{tg.yi}': '{ss.pianYin}',
        '{tg.ding}{tg.jia}': '{ss.zhengYin}',
        '{tg.wu}{tg.wu}': '{ss.biJian}',
        '{tg.wu}{tg.ji}': '{ss.jieCai}',
        '{tg.wu}{tg.geng}': '{ss.shiShen}',
        '{tg.wu}{tg.xin}': '{ss.shangGuan}',
        '{tg.wu}{tg.ren}': '{ss.pianCai}',
        '{tg.wu}{tg.gui}': '{ss.zhengCai}',
        '{tg.wu}{tg.jia}': '{ss.qiSha}',
        '{tg.wu}{tg.yi}': '{ss.zhengGuan}',
        '{tg.wu}{tg.bing}': '{ss.pianYin}',
        '{tg.wu}{tg.ding}': '{ss.zhengYin}',
        '{tg.ji}{tg.ji}': '{ss.biJian}',
        '{tg.ji}{tg.wu}': '{ss.jieCai}',
        '{tg.ji}{tg.xin}': '{ss.shiShen}',
        '{tg.ji}{tg.geng}': '{ss.shangGuan}',
        '{tg.ji}{tg.gui}': '{ss.pianCai}',
        '{tg.ji}{tg.ren}': '{ss.zhengCai}',
        '{tg.ji}{tg.yi}': '{ss.qiSha}',
        '{tg.ji}{tg.jia}': '{ss.zhengGuan}',
        '{tg.ji}{tg.ding}': '{ss.pianYin}',
        '{tg.ji}{tg.bing}': '{ss.zhengYin}',
        '{tg.geng}{tg.geng}': '{ss.biJian}',
        '{tg.geng}{tg.xin}': '{ss.jieCai}',
        '{tg.geng}{tg.ren}': '{ss.shiShen}',
        '{tg.geng}{tg.gui}': '{ss.shangGuan}',
        '{tg.geng}{tg.jia}': '{ss.pianCai}',
        '{tg.geng}{tg.yi}': '{ss.zhengCai}',
        '{tg.geng}{tg.bing}': '{ss.qiSha}',
        '{tg.geng}{tg.ding}': '{ss.zhengGuan}',
        '{tg.geng}{tg.wu}': '{ss.pianYin}',
        '{tg.geng}{tg.ji}': '{ss.zhengYin}',
        '{tg.xin}{tg.xin}': '{ss.biJian}',
        '{tg.xin}{tg.geng}': '{ss.jieCai}',
        '{tg.xin}{tg.gui}': '{ss.shiShen}',
        '{tg.xin}{tg.ren}': '{ss.shangGuan}',
        '{tg.xin}{tg.yi}': '{ss.pianCai}',
        '{tg.xin}{tg.jia}': '{ss.zhengCai}',
        '{tg.xin}{tg.ding}': '{ss.qiSha}',
        '{tg.xin}{tg.bing}': '{ss.zhengGuan}',
        '{tg.xin}{tg.ji}': '{ss.pianYin}',
        '{tg.xin}{tg.wu}': '{ss.zhengYin}',
        '{tg.ren}{tg.ren}': '{ss.biJian}',
        '{tg.ren}{tg.gui}': '{ss.jieCai}',
        '{tg.ren}{tg.jia}': '{ss.shiShen}',
        '{tg.ren}{tg.yi}': '{ss.shangGuan}',
        '{tg.ren}{tg.bing}': '{ss.pianCai}',
        '{tg.ren}{tg.ding}': '{ss.zhengCai}',
        '{tg.ren}{tg.wu}': '{ss.qiSha}',
        '{tg.ren}{tg.ji}': '{ss.zhengGuan}',
        '{tg.ren}{tg.geng}': '{ss.pianYin}',
        '{tg.ren}{tg.xin}': '{ss.zhengYin}',
        '{tg.gui}{tg.gui}': '{ss.biJian}',
        '{tg.gui}{tg.ren}': '{ss.jieCai}',
        '{tg.gui}{tg.yi}': '{ss.shiShen}',
        '{tg.gui}{tg.jia}': '{ss.shangGuan}',
        '{tg.gui}{tg.ding}': '{ss.pianCai}',
        '{tg.gui}{tg.bing}': '{ss.zhengCai}',
        '{tg.gui}{tg.ji}': '{ss.qiSha}',
        '{tg.gui}{tg.wu}': '{ss.zhengGuan}',
        '{tg.gui}{tg.xin}': '{ss.pianYin}',
        '{tg.gui}{tg.geng}': '{ss.zhengYin}'
    };
    static ZHI_HIDE_GAN: Record<string, string[]> = {
        '{dz.zi}': ['{tg.gui}'],
        '{dz.chou}': ['{tg.ji}', '{tg.gui}', '{tg.xin}'],
        '{dz.yin}': ['{tg.jia}', '{tg.bing}', '{tg.wu}'],
        '{dz.mao}': ['{tg.yi}'],
        '{dz.chen}': ['{tg.wu}', '{tg.yi}', '{tg.gui}'],
        '{dz.si}': ['{tg.bing}', '{tg.geng}', '{tg.wu}'],
        '{dz.wu}': ['{tg.ding}', '{tg.ji}'],
        '{dz.wei}': ['{tg.ji}', '{tg.ding}', '{tg.yi}'],
        '{dz.shen}': ['{tg.geng}', '{tg.ren}', '{tg.wu}'],
        '{dz.you}': ['{tg.xin}'],
        '{dz.xu}': ['{tg.wu}', '{tg.xin}', '{tg.ding}'],
        '{dz.hai}': ['{tg.ren}', '{tg.jia}']
    };
    static YI_JI: string[] = [
        '{yj.jiSi}',
        '{yj.qiFu}',
        '{yj.qiuSi}',
        '{yj.kaiGuang}',
        '{yj.suHui}',
        '{yj.qiJiao}',
        '{yj.zhaiJiao}',
        '{yj.muYu}',
        '{yj.chouShen}',
        '{yj.zaoMiao}',
        '{yj.siZhao}',
        '{yj.fenXiang}',
        '{yj.xieTu}',
        '{yj.chuHuo}',
        '{yj.diaoKe}',
        '{yj.jiaQu}',
        '{yj.DingHun}',
        '{yj.naCai}',
        '{yj.wenMing}',
        '{yj.naXu}',
        '{yj.guiNing}',
        '{yj.anChuang}',
        '{yj.heZhang}',
        '{yj.guanJi}',
        '{yj.dingMeng}',
        '{yj.jinRenKou}',
        '{yj.caiYi}',
        '{yj.wanMian}',
        '{yj.kaiRong}',
        '{yj.xiuFen}',
        '{yj.qiZuan}',
        '{yj.poTu}',
        '{yj.anZang}',
        '{yj.liBei}',
        '{yj.chengFu}',
        '{yj.chuFu}',
        '{yj.kaiShengFen}',
        '{yj.heShouMu}',
        '{yj.ruLian}',
        '{yj.yiJiu}',
        '{yj.puDu}',
        '{yj.ruZhai}',
        '{yj.anXiang}',
        '{yj.anMen}',
        '{yj.xiuZao}',
        '{yj.qiJi}',
        '{yj.dongTu}',
        '{yj.shangLiang}',
        '{yj.shuZhu}',
        '{yj.kaiJing}',
        '{yj.zuoBei}',
        '{yj.chaiXie}',
        '{yj.poWu}',
        '{yj.huaiYuan}',
        '{yj.buYuan}',
        '{yj.faMuZuoLiang}',
        '{yj.zuoZhao}',
        '{yj.jieChu}',
        '{yj.kaiZhuYan}',
        '{yj.chuanPing}',
        '{yj.gaiWuHeJi}',
        '{yj.kaiCe}',
        '{yj.zaoCang}',
        '{yj.saiXue}',
        '{yj.pingZhi}',
        '{yj.zaoQiao}',
        '{yj.zuoCe}',
        '{yj.zhuDi}',
        '{yj.kaiChi}',
        '{yj.faMu}',
        '{yj.kaiQu}',
        '{yj.jueJing}',
        '{yj.saoShe}',
        '{yj.fangShui}',
        '{yj.zaoWu}',
        '{yj.heJi}',
        '{yj.zaoChuChou}',
        '{yj.xiuMen}',
        '{yj.dingSang}',
        '{yj.zuoLiang}',
        '{yj.xiuShi}',
        '{yj.jiaMa}',
        '{yj.kaiShi}',
        '{yj.guaBian}',
        '{yj.naChai}',
        '{yj.qiuCai}',
        '{yj.kaiCang}',
        '{yj.maiChe}',
        '{yj.zhiChan}',
        '{yj.guYong}',
        '{yj.chuHuoCai}',
        '{yj.anJiXie}',
        '{yj.zaoCheQi}',
        '{yj.jingLuo}',
        '{yj.yunNiang}',
        '{yj.zuoRan}',
        '{yj.guZhu}',
        '{yj.zaoChuan}',
        '{yj.geMi}',
        '{yj.zaiZhong}',
        '{yj.quYu}',
        '{yj.jieWang}',
        '{yj.muYang}',
        '{yj.anDuiWei}',
        '{yj.xiYi}',
        '{yj.ruXue}',
        '{yj.liFa}',
        '{yj.tanBing}',
        '{yj.jianGui}',
        '{yj.chengChuan}',
        '{yj.duShui}',
        '{yj.zhenJiu}',
        '{yj.chuXing}',
        '{yj.yiXi}',
        '{yj.fenJu}',
        '{yj.TiTou}',
        '{yj.zhengShou}',
        '{yj.naChu}',
        '{yj.buZhuo}',
        '{yj.tianLie}',
        '{yj.jiaoNiuMa}',
        '{yj.huiQinYou}',
        '{yj.fuRen}',
        '{yj.qiuYi}',
        '{yj.zhiBing}',
        '{yj.ciSong}',
        '{yj.qiJiDongTu}',
        '{yj.poWuHuaiYuan}',
        '{yj.gaiWu}',
        '{yj.zaoCangKu}',
        '{yj.liQuanJiaoYi}',
        '{yj.jiaoYi}',
        '{yj.liQuan}',
        '{yj.anJi}',
        '{yj.huiYou}',
        '{yj.qiuYiLiaoBing}',
        '{yj.zhuShi}',
        '{yj.yuShi}',
        '{yj.xingSang}',
        '{yj.duanYi}',
        '{yj.guiXiu}',
        '{s.none}'
    ];
    private static DAY_YI_JI: string = '30=192531010D:838454151A4C200C1E23221D212726,030F522E1F00=2430000C18:8319000776262322200C1E1D,06292C2E1F04=32020E1A26:7917155B0001025D,0F522E38201D=162E3A0A22:790F181113332C2E2D302F1554,7001203810=0E1A263202:79026A17657603,522E201F05=0D19250131:7911192C2E302F00030401060F1571292A75,707C20522F=0C18243000:4F2C2E2B383F443D433663,0F01478A20151D=0E1A320226:3840,0001202B892F=14202C3808:3807504089,8829=0E1A263202:383940,6370018A75202B454F6605=32020E1A26:38394089,0001202B22=16223A0A2E:384C,8A2020=2B3707131F:2C2E5B000739337C38802D44484C2425201F1E272621,5229701535=121E2A3606:2C2E2D2B156343364C,0F4729710D708A20036A1904=0D19250131:5040262789,0F7129033B=202C380814:5040000738,0F7D7C584F012063452B35=1A2632020E:50400089,8813=1A2632020E:69687011180F791966762627201E,0352292E8034=182430000C:291503000D332E53261F2075,0F5238584F450B=000C182430:297170192C2E2D2F2B3E363F4C,0F521563200103470B=131F2B3707:297115030102195283840D332C2E,0F1F5863201D8A02=222E3A0A16:261F1E20232289,52290058363F32=16222E3A0A:261F201E232289,8D39=0D19310125:262322271E201D21,52450F4F09=0D19253101:262322271E202189,1F4526=16222E3A0A:262322271F1E20,712906=0F1B273303:17262322274050,80387C6B2C=0915212D39:1707702C2E71291F20,0F52000106111D15=16222E3A0A:170007386A7448363F261F1E,030F79636F2026=030F1B2733:1784832C2E5B26201F,0F010D2913=182430000C:175447440D15838477656A49,2B2E1F8A202228=101C283404:70504C7889,8803=0D19250131:700F181126151E20001A7919,8D2F=0915212D39:705283845B0D2F71,0F202E4106=3606121E2A:70786289,06802E1F23=1824000C30:70076A363F,292017=202C380814:700718111A302F717566,0F2B2E2026=3B0B17232F:70545283842E71291A7933192A5D5A5040,090C384F45208A1D6B38=212D390915:7039170F45513A2C2E7129242526271F201D,00010352153A=15212D3909:703911170E2C2E2D2F4B15712952633D,092B8A2027=010D192531:702D155483840F63262720,53292F017D4F38442B2E1F4717=16222E3A0A:705C4C39171A4F0E7971295B5248,0F2E1F1D37=1A2632020E:2E260F27201F,523815292F1A22=0E1A260232:64262322271F2021,0F2F293822=2F3B0B1723:161A0F1526271F4C,586103473818=2430000C18:161A7889,292E1F0F386131=17232F3B0B:04795B3F651A5D,0F5201062016=14202C3808:04170F79195D1A637566363F76,01522E8A2039=132B37071F:0470170F191A134C8384662426232227201E,8D08=0D19253101:040370181123220F1326271E2021,29153B=0D19310125:040307177938494C,0F26207017=0E2632021A:0403010218111A17332C2E2D2B15713E6575,45382064291D=142C380820:04033918110F0D2C2E7129332D2B72528384547566,8D1C=1830000C24:040318111A17332C15290D200C7A,4745063835=0F2733031B:040318111A16175B795452848315302F6563395D,387029202E=14202C3808:04031975363F6366,0F5401202C5283842E2F1E=0E1A320226:0403080618111A16332E2F152A09537919702C5445490D75072B,8063203820=182430000C:04067033392C7161262322271E1D210C,8D2F=101C283404:3F4889,881C=2733030F1B:3F74397677658988,0F3847201D=293505111D:3F8B657789,0F2029702E7D35=111D293505:3F8B6589,1F200A=020E1A2632:3F656477,0F2B71292005=111D290535:3F6589,8810=0F1B273303:3F88,2B38200F1C=293505111D:0F83843D363F776424,15462F2C520329712A=0F1B273303:0F17795B54838458,52807C3811=121E2A3606:0F172C2E387129363F7566512D4E4461,01034752203A=172F3B0B23:0F171511793F76584C,0347200C1D20=2D39091521:0F175B3975660745514F2B4825201E211D,010352292E2E=0F1B273303:0F170070792C2E261F,040341232228=05111D2935:0F1700707129385C363F3D1F1E232226,80412B202F14=14202C3808:0F17000728705448757A,522E1F15562F05=30000C1824:0F17000102061979454F3A15477677,241F8A2021=2F3B0B1723:0F17000102060370392E52838453331F,452F2C266A79292B203810=0C18243000:0F170001020E032A70692C2E302F802D2B0D7129474C201F2322,5211183809615D34=1A2632020E:0F171170792F5B1566770001032C2B802D,29387C207134=14202C3808:0F0D33000103452E528384297115752620,63386F7014=15212D3909:0F7045332C2E71201F1D21,4701155229530327=101C283404:0F70161715232238838426271F20,7D035219=121E2A3606:0F705B0004037C5D15653F1F26,522B473809=131F2B0737:0F705215261E20,012E1F25=182430000C:0F707B7C00012F75,52201B=2531010D19:0F706A151E201D528384544466,47010C2E292F2C3820=14202C3808:0F707500261E20,382E1F05=3606121E2A:0F161A17452F0D33712C2E2B5443633F,150170208A0327=0E1A263202:0F150370002E0D3979528384532971331F1E20,477D0D=06121E2A36:0F5B8370000102060403161A494447,386A418A201A=17232F3B0B:0F03700D332C2E2971152F52838463,01004547380C26=101C283404:0F03700D33195284835329711563,01260038206B0E=131F2B3707:0F03706A4F0D332C528384532E29711563,4500750F=131F2B3707:0F0370010239332E2C19528384532971156375262720,8D18=17232F3B0B:0F0370390D332C192E2971637547202322,581528=0E1A263202:0F0302791566046F,29710D722A38528384202E4530=0E1A263202:0F030102392E15634447001F1E,293845200D707538=1E2A360612:0F0300017039712952542D2C302F80380D2A363F3349483E616320,1118150C1F2E20=33030F1B27:0F03000102700D29713963451F0C20,528338542F15806128=121E2A3606:0F030001027039452971150D332C2F6327,2052838403=2C38081420:0F030001022A0D3945297115528384637020,476A382E1F4426=010D192531:0F03390D332C1929711563261D2E2322,382000521118750C706B15=131F2B3707:0F033915666A52261E272048,382E2F6329712C0114=0D19253101:0F52838403700D332C29712E1F27201E2322,1545017505=131F2B3707:0F528400012E7129,092026=3707131F2B:0F528471295B795D2B155333565A446375661F201E272621,00016B0C4113=14202C3808:0F280001363F8B4326232220,2E1F47032F7D35=16222E3A0A:0F0211195465756679,2F384570202B6A10=15212D3909:0F0102700D332C2E2F0319528384531529716345261F2322,8D32=101C283404:0F0102037039330D5284832971152E1F0C,0026206B37=16222E3A0A:0F003854,20521D2106=020E1A2632:0F00175058,5D6B80382E16=1B2733030F:0F00701784831952712C2E1526271F,033806201F=2B3707131F:0F00701A17830E544C5C78,7129632E1F38208A452F16=15212D3909:0F00040370396A742E15444948,458A384F2021=16222E3A0A:0F005B261F20,2E2F1D=2531010D19:0F0003450D3329712C2E2F1575,528A63705A20587D7C12=17232F3B0B:0F00030D70332C2E3952838453542971156375,6B2019=1B2733030F:0F000301020D297115332E1F0C,165220262E=121E2A3606:0F00030102700D332E2C192971155383846375261F1E20,8D1F=33030F1B27:0F00030102700D19297115332C2B535448,2E45208A00=2632020E1A:0F00030102705283842E544779,2920454F754C3836=16222E3A0A:0F0052037029710D332C15,7545584F8A201D2121=121E2A3606:0F00074850,8A2036=0D25310119:0F00071A706A717677492923221E202726,80522E1F39=1E2A360612:0F006A385040740717,1F70631E=212D390915:0F006A1938271779,565A4575522F801F1E632B=121E2A3606:0F00010D0302703352838453297115632E,208A454F2B=0E1A263202:0F000170390D332E2971152F63751F1E20,52846A381F=14202C3808:0F000106387129,2E1F24=14202C3808:0F0001062E7129,522010=0814202C38:0F0001062871292E7C528384032C5C2A15767765,11185D8A206B08=131F2B0737:0F0001067C1F20,522900=202C380814:0F0001020D700339332C192A83842971152E1F0C20262322,065256386110=111D293505:0F000102700D332C2E297115383F631F20,0347562B=14202C3808:0F000102700D332C712E15261F201E,80036A61473831=0C18243000:0F000102700D335283845329711563,38048A7D45202A=14202C3808:0F000102702E15471F1E,294F2B452C2F268011=0D19253101:0F0001022E792D3E75663D19,472063703852292B39=222E3A0A16:0F0001022E154826271F1E203874362322,036312=0D19253101:0F000102032971152C2E19,4720637038522B15=111D293505:0F000102030D70332E3919528384532971152B2F201F0C,8D1B=232F3B0B17:0F000102030D7033528384534529711520,63475814=131F2B3707:0F000102030D332C2E195283845329716375261E2322,8D19=15212D3909:0F00010203700D332C2E1929711552838453637526202322,8D09=111D293505:0F00010203700D332E2F192971152B52838453631F20,8D33=1A2632020E:0F00010203700D332E2F1929711552838453261F201E2322,8D03=2E3A0A1622:0F0001020370332C2E2F1575261F,2971476A458352380C=111D293505:0F0001020370332E2F0D19297115637566302B2C3979,8D08=000C182430:0F000102037039297175261F1D21,454F2E1563410F=17232F3B0B:0F0001020370390D3319297115632E2C752620212322,8D07=3606121E2A:0F0001020370390D332C1929712E157563548384534C,20248A38=16222E3A0A:0F0001020370390D1952838453542971631F0C,152036=14202C3808:0F00010203703915632719792322,80262045297158750F=111D293505:0F00010203528384157033,752971206B452F2B262E05=3404101C28:0F00010206030D7129302F79802D7C2B5C4744,11701D2052843833=111D293505:0F00010206181139702E1F686F6A792D2C304E153375664923221D21,52296B0D800D=15212D3909:0F000102070D70332C2E19528384297115637526201E2322,8D05=2C38081420:0F0001021A175D2C19152E302F7183846379,8A20704F7545410A=131F2B3707:0F001A651707,565A58202E1F476320=121E36062A:0F11707B7C5271291E20,2E1F39=111D293505:0F11700001522E71291F20,2B07=131F2B0737:0F11700001397129,2E2002=111D293505:0F11707129,2E1F2002=131F37072B:0F1152702E2F71291F20,000103=131F37072B:0F1152702E2F71291F20,7A3A=111D293505:0F117B7C2C2E71291F20,520300=111D350529:0F110001702E2F71291F20,0621=101C280434:0F11000170717B,522E1F0A=06121E2A36:0F110001708471292E1F20,03388051561C=121E2A3606:0F1100017B7C702E7129,522B22=2D39091521:0F110039702C2E522F1574487B7C2D4E804B,098A204538612B=05111D2935:0F1118795B65170002195D,52382E8A201E=2531010D19:0F111829711500010370390D332E750C201F,4552832F382B8004=2A3606121E:0F1118175C000301027039450D29332C2E2F15631F,8A582020=31010D1925:0F1118032A0D545283841A802D2C2E2B71296366774744201F26232221,010900150C06=2C38081420:0F11180300706A2E1549466319,292F26806B382B20754506=2E3A0A1622:0F1118528384530001035C702971152B332C2E63201F1E23222621,6B75452D4F802E=111D293505:0F1118060300017B7C792E39767566261F20,7129805136=232F3B0B17:0F111800171A454F514E3A3871157765443D23221E262720,80612E1F1C=212D390915:0F11180003706A4F0D332C2E192971155363751F20262322,524746416128=3B0B17232F:0F111800037039450D2971332C632026,1F2E2B38528327=3B0B17232F:0F11180006032A0D70332E011954838471152C202322,58477D630C=0814202C38:0F1118000106287129705B032C2E302F802D4E2B201F,528458384108=380814202C:0F11180001027039302971542F7526201E,63472E151F583A=1E2A360612:0F1118000102030D70332C2E192971158384535426201E2322,471F1B=1F2B370713:0F1118000102030D70332C2E195283845329711563261F0C20,4745752522=3505111D29:0F1118000102030D70332E2C192971153953631F0C262720,5284612528=390915212D:0F111800010203700D332C2E192971152F4B49471F270C2322,52562B2029=390915212D:0F111800010203391929710D1552838453,2075708A456309410F=0A16222E3A:0F111800010206032A0D097170292D302F1575761320,521F47251D=1F2B370713:0F18000102111A1703154F2C2E382D2F807566,7163708A1F207D2A=05111D2935:0F111800017C5C2C2E7129,527015382021=2B3707131F:0F11185C0370332D152322528384636626271E,2F292C2E1F00010601=2430000C18:0F11185C0001092A0D7014692983847B7C2C2E302F802D2B,06454F208A2E=0D19253101:0F11181200171A7919547638,5215201D09=3A0A16222E:0F1A1716007015713F261F2720,5263587D2B470304=111D293505:0F1A0070153871291F20,7A7629=010D192531:0F181179005B712980152D4E2A0D533358,5270208A11=0814202C38:0F181138171A7975665B52845415,47701F8A2013=121E2A3606:0F181117795B5C007054292A0D690403332D2C2E66632B3D,8A454F3822=121E2A3606:0F1811705200012E71291F20,382A=16222E0A3A:0F1811705200012E71291F20,062B27=14202C0838:0F18117052000171291E20,2E1F27=16222E0A3A:0F18117000012E71291F20,527A06=111D290535:0F1811700001062E2F1F20,712912=14202C3808:0F181100062839707952542C2E302F03565A7566441F1E,0D29802B2029=1824300C00:0F181100012C2E7129,522025=121E2A0636:0F18110001261F20,03522E=0915212D39:0F18110001702C2E7129,6F454F098A2025=030F1B2733:0F18110001702C2E71291F0D2B152F2127,5283162014=16222E3A0A:0F18110001707B7C0D7129,52565A152B2034=17232F3B0B:0F1811000104037115454F7677657B7C392023222726210C,52092E1F27=3707131F2B:0F181100010603797B7C802D302F2B6743441F202322,2952477D2528=14202C0838:0F181100017B7C2E71291F20,036F33=0D19253101:0F18110001027939706954528384685D15565A75201E1D26,29032E11=182430000C:0F1811000102062A0D2C2D804B2B672E2F7129,70471F8A2030=17232F3B0B:0F5C707971292C2E0E032A0D6A804B2D8C2B3348634C,52110915462031=15212D3909:0F5C5B0001032A0D7052842C2E71291F20,1118517D462B=0F1B273303:0F5C111800015B712952841F20,756A251A=2733030F1B:1545332C2E2F84836375662620,0F0003700D71292B1C=0E1A320226:1516291211020056,06382007=000C182430:1551000403706A454F3A3D771F262322271E1D21,382B41522016=17232F3B0B:1500443626271F1E,29710F47380D19520337=182430000C:150001021745512E443D65262322,2B63387C18=192531010D:151A83842627202322,580F7003632E1F297C26=0E1A263202:15391A302F83845475662627201E,0F702E4629004708=3606121E2A:5B000102073911522C302F3A678C363F33490D482425200C1E2322,0F15382E1F6116=1E2A360612:5B71297000010611182A0D39792C2E332D4E80151F202621,52454F3804=2C38081420:5B11180001020328700D332C2E195283847115632F751F2720,290F476630=0C18243000:201E27262322,8902=3404101C28:2A0D11180F52848353037039156358332C2E,3820002628=010D192531:4089,030F565A61206B27=1824300C00:4089,8836=1C28340410:0370833F0F6A5215,010D582E1F202C2F2938=112935051D:03700F,79192C2E2D715275262322271F201D2136=112935051D:0370110F45510D3371290941614C522623222720,8D3B=152D390921:03047039171A533852443D363F,8D11=0F1B273303:030402111A16175B4F3A2B153E0079015D54528483696A51,7006200F05=0F1B270333:03041A174533302F56795B3E808339528454,700F292026=121E2A3606:037B7C2E2F261F20,0F14=1E2A360612:030270170F45513A2C71295283842A0D532D24252623222720,155A382E1F2F=1B2733030F:03027011170D332D2C2E2F716152838454,010F201F2C=121E2A3606:03027039450D332C2F2D2971528384636626202322,581535=212D390915:03020E0F18110D332C2E2D2F4971293E615244756653,8A202531=1B2733030F:030102703945802D2C512B7129092322270C7566,112E528325=2D39091521:030102062C2E543E3D636679,380D19462971001F=293505111D:03111A171538193E3F,0F632C2E70454F200C19=17232F3B0B:031A2B7915656A,0F177001204529710D632E2F02=32020E1A26:033945302F838475262720,297071000F2E1F3810=17232F3B0B:0339332C2E1575201E26,0F520D631F29712A72473826=390915212D:0339332C2E302B66201D1F27,0D2971010015520F6B0E=15212D3909:03392D2E332F211D201F1E27,0F7015380029710D195824=16223A0A2E:036F791E20,522E1F31=1D29350511:5283845B79037B7C802D2C2E4E302F2B38493D4463664C1F2021,0F0D712917=15212D3909:5283845303702971150D2F,388A6A6D0F2012=111D293505:528384530370331929272E2B2F631F1D20,0F156B380E=0D19253101:528384530339454F0D297115332E2F637520,0F00705802=2A3606121E:528384530339332E152C2F58631F20,380D000F2900=283404101C:528384530003010215392C20,1112180F29560D2E1F754511=15212D3909:5283845300031929150D332C2E63,0F217045208A717521=3505111D29:5283845300010670802D2C2E4E155B201F1E232221,380F71296A0E=17232F3B0B:5283845354037029711575262720,631F58000F2E38010D=111D293505:528384000103451915332C2E631F2720,29716A0D0F7019=1D29350511:5283840001032E1570637566302F391F,0F4729712030=16222E3A0A:5283845479036A2627201E,0F380D70297115012F1A=1F2B370713:528384542E03700F111869565A7566631F1E2021,297138000C31=121E2A3606:52838454443D65002C2E15495D1F,0F417D712B38630F=0D19253101:5283845444360F11756415,2C2F29016B472E2B20381D=212D390915:528384545363000103332E15,0F1F197029710D757D2032=121E2A3606:528384546315332C2E2F26201F2322,0F0D45002971756B17=192531010D:52838454754C2971150301022E,0F63206A0938268A4117=1B2733030F:52848353000103297115332E2F19,0F8A514F6A6620754526=1824300C00:528403395B2F1E20,0F012D=0B17232F3B:5254700001020612692D4E584647336375662E1F1E,71290D262037=131F2B3707:525400045B17791A565D754C7866,2E1F207C34=0F2733031B:483F89,8838=232F3B0B17:767779392623222789,152B1F1D200E=0A16222E3A:767789,528300292025=14202C3808:7665261F20,0F291A=222E3A0A16:7665262322271F201E21,0F0029807124=1824000C30:7889,292E1F24=101C283404:8D,8832=1D29350511:63767789,522E0006206B31=131F2B3707:7B7C343589,0F7038=2632020E1A:7B7C343589,520F20=0E1A260232:7B34,8812=1C28340410:02703918110F7919155283756626232227201E,012C2E1F0C29=121E2A3606:020F11161A17454F2C2E2D302F2B38434C,2070016328=1824300C00:02060418110D332C2E415B637566262322271F20,520F23=142038082C:07504089,0F010C=15212D3909:07262723221F40,0F7129523B=2430000C18:0717363F1A2C4F3A67433D8B,71290F0103471A=2531010D19:0704031118528384542D2E4E49201F1E1D2127,292B000C3B=283404101C:073F7765644889,012014=111D293505:074048261F202322,0F71454F1500018008=111D293505:07404826271F1E2089,882C=0D19253101:07565A5283845463756677261F20,010F15296120=2F3B0B1723:07487677393F89,0F2952151F1D30=111D293505:074889,06520F3808=17232F3B0B:074889,883B=131F2B3707:074889,8832=15212D3909:07762623221F1E20,000F1552296B2F2A=0D19253101:0776776A742623221F200C211D1E,11180F2F5206802B0B=04101C2834:0776776564,000F29382011=101C283404:0706397B7C794C636A48,520F7129472026=14202C3808:077C343589,880A=380814202C:076A79040363660F5D363F,52292E1F20382F15560123=16223A0A2E:076A696819,0F2918=222E3A0A16:076A171552847983546578,712970010F2D=182430000C:076A48,45752F29384C0F204F612B30=131F2B3707:076A7626271F1E20,0D0F29382F2E0E=0814202C38:07343589,065238=1C28340410:070039201F0C2789,06030F292F23=101C280434:076564,0F292002=0D19253101:073918111A17332C2E71292322271F1E20481D45548384,38002F702A=1824300C00:7C343589,8801=172F3B0B23:6A79363F65,0F292B7118=1B2733030F:6A170F19,5845754C201F4F382430=1B2733030F:6A170F1963766F,5452201F32=0C18243000:6A0339332C20528384531563,29713801000F0C47806B3B=2A3606121E:77766564000789,0F52201E8A01=202C380814:1F2027260076232289,0F29528339=0F1B330327:3435,8809=0F1B273303:34357B7C,8818=121E2A3606:34357B7C7789,0F291D=232F3B0B17:34357B7C89,0F2021=33030F1B27:34357B7C89,030F27=390915212D:34357B7C89,712917=1D29350511:3435073989,8802=2C38081420:34357C89,0111180F292006=30000C1824:34357C89,71291A=14202C3808:34357C89,8A2036=182430000C:3435000789,8835=232F3B0B17:34350089,0F2025=3707131F2B:34353989,0F2037=0D25310119:343589,0F52202D=0F1B273303:343589,0F7152290D=131F2B3707:343589,8830=121E2A3606:343589,881C=16222E3A0A:343589,8819=131F2B3707:343589,880F=15212D3909:343589,8832=14202C3808:343589,8813=0D19253101:343589,8811=17232F3B0B:343589,881E=142C380820:017018110F1A2E15495247838463462322271F,8D03=0F1B270333:0103040818111A155284262322271E20217A79708330,38472E631B=14202C3808:010670170F0E3A294152838454262322271F201E,2E1815442C=0F1B273303:01067071292C2E1F20,1103150F520A=17232F0B3B:010670181126271F202165,293816=182430000C:0106111839513A2C2E2D2F8C804B4723221F63,7152292037=0F2733031B:010203040618110F3315292A271D200C6339171A712C2E30491E21,7A21=0E1A260232:010206040318110F2E292A27200C70072C302F541F392B49,381512=1A2632020E:010206110F452C2E7129095B5226232227201F0C,58804B036B2B381C=142C380820:01023918112E2D493E52756624262322271F20,8D12=121E2A3606:008354,06462F2E1F27=030F1B2733:00797084831754,0F2E472D4E1F06=0D19250131:0079701811072C2E01060F33152627200C7A1A302F4576631F2B,8052382900=172F3B0B23:00790F072C2E0103047018111A262322271E7A302F5448637545,293815561E=101C340428:007952151E20,0F2E1F33=0F1B273303:007984831A160F1719,632E20471D6B01=152D390921:0079110F0304062A528423222627207A19701A2C2E2F5D83,294513=0F1B273303:0079181A165B332F2B262322271E2021030469702D4E49712930845D,454F05=152139092D:0079192E2F030417332D1552847A5D,4E201F=162E3A0A22:003826232277,632E20523A=0D19310125:0038262389,521513=1C28340410:00384089,0F202E157C07=04101C2834:00384089,152967631F=101C283404:00384740,0F2037=1C28340410:00387765504089,0F157C04=131F37072B:00385476,521F13=16222E3A0A:003854767789,2E1F522010=131F2B3707:003854637519,205D1D1F52151E210F=121E2A3606:003889,52201F1D4733=121E2A3606:003889,881F=212D390915:001D23221E2789,52290F2E1F202B=07131F2B37:002C7080305C784C62,2E1F472001=283404101C:004D64547589,0F292E=131F2B3707:005040,522E1F0F2C2004=3404101C28:005089,032C2E1F33=182430000C:005089,8815=192531010D:00261F23221E201D2189,8D12=131F2B3707:00261F2322271E200C89,8D1E=121E2A3606:0026271E20,2F2E1F33=16222E3A0A:002627241F1E20232289,8D33=14202C3808:002627651E20232289,881B=182430000C:00262789,292C2E1F2B2F2A=07131F2B37:00262322271F1E203F8B65,52290F038002=15212D3909:001779332D2322271E2007760304,38290F1C=1F2B370713:00173883546365756619,466115201F701D47522434=0D25310119:00170F79191A6540,712909387C2015=0E1A263202:00170F332C2E2D2F802952443F26232227201F,15637C383A=132B37071F:00170F7665776489,8D2A=390915212D:00177689,0F52804F2507=2E3A0A1622:00177179546A76,0F52443D1F2D=0915212D39:0070,0F292C2E791F13=131F2B3707:007083624C,0F38202E7D4F45471F7107=380814202C:00704F0D332C2E2D15363F261F20274C,0F2906036F4703=3404101C28:00702C2E164C157126271F1E202425363F,29386A032B0F=0F1B273303:00700F1715262720,472E386309=15212D0939:007022230726,2E17712952302F15=15212D3909:00704889,8834=1C28340410:0070784889,0345201F21=2D39091521:007007482089,2E1F58470B=0D19253101:0070071A010618110F5B52846775,6326202E=16222E3A0A:00701A17794C0F302F715475,2E454F8A20243A=0F1B330327:007018111A1617192E15382627201F656477,4F090A=0F1B273303:002E2F18110F5B3315292A26271F20210C7A70710102393E19,035A37=14202C3808:002E4344793F26271F20,03702C2F292B381A31=0E1A263202:00161A5D454F153826201E27,7D0D2904=152139092D:0004037039180F332D152952262322271F0C533A83,4117804735=1F2B370713:0004037B7C0F79494766754667,80293869208A1E=162E3A0A22:00040301067018111A0F332C15292A261E200C7A7919712F5D52838454,5617454F06=3404101C28:000403110F527079156523221E2027,0129802E1F6B1D=1830000C24:0004031A170F11332C2E302F1571292A657677451949,70201D5218=102834041C:0004031811171A5B332C2E155D52,0D29204504=17233B0B2F:00040318110F1519262322271E2021,52831F3825=3B0B17232F:00046A7966444C7765,010C202F38520F70292E31=14202C3808:003F261F202789,8836=131F2B3707:003F657789,7152290F032B3A=2632020E1A:003F651F0C2027232289,0F292B=16222E3A0A:003F89,8836=212D390915:000F76,032E1F522C292B22=2B3707131F:000F7765,2E1F7C4607=0F1B273303:000F01111A1615292A2627200C2C670279538384543E49,634512=0F1B273303:000F1320,6380382936=0F2733031B:000F1323222627,2E3829031535=0D25310119:00676589,0F200F=0C18243000:00401D232289,71290F47202B=101C283404:0040395089,8803=30000C1824:004023222089,0F291118470D=0A16222E3A:004089,0F5211=1A2632020E:004089,0F0147200B=3A0A16222E:00037039454F0D332971152C4C48,090F476341382E0A=111D293505:00037039041A26271F1E202322,0F2F2C335129452E0D3A3B=222E3A0A16:000370396A450D332F4B154C,0F208A7D41381F2E14=0F1B273303:00030401061A16170F332E71292627200C02696A45514F0D2C2D4E497A,2B0B=0F1B273303:000304111A33152D2E302F71292A5284530770022B,0F6345203B=0F1B330327:00030418111617332E2D2F292A52845407020D302B,090F452001=0F1B273303:000304080618110F1A2E2D0D3371292A2C302F7566010239454E802B,632039=2430000C18:00036A7415384878,45751F20240F522E834F2E=182430000C:000301394F2E154763751F27,0F707A802629710D192035=14202C3808:0003391983845475,2E1F0F6A702971722A0D04=0F1B270333:00483F,6338200F2A=3B0B17232F:00481F2023221E27262189,0F292C2E1B=122A36061E:0076645089,8819=202C380814:0076777566262322271F201E,0F111852290D=101C283404:00763989,0F2036=1E2A360612:00788B89,0671292E25=010D192531:00784C793989,0F29702E1F208A21=31010D1925:0006261F1E201D212322,0F2938111801=2A3606121E:00060403702C2E4C154947443D651F,0D2920=101C283404:0006522E261F20,0F712939=2632020E1A:00060724232227261F2025,520F157929382F22=31010D1925:0006547677,0F5229151F201B=0E1A320226:00061A161718110F292A0C26271F21797001022F49,470D=0814202C38:002876396577261F20,5283290F37=212D390915:0028397976771E232227,0F522E47442027=121E2A3606:006389,8822=101C280434:007B7C3989,881E=1830000C24:007B343589,8805=2E3A0A1622:00021719792B155D5466774962,010611180F292030=14202C3808:00020370454F0D3933192C2E2D156375261F202322,0F7123=0E1A260232:0002070818111A16175B153E445D5452848365647576,2038454F15=182430000C:0007385476771548,52061F2024=2D39091521:0007504089,0F29157030=15212D3909:0007504089,060F71702F2918=15212D3909:0007504089,880B=17232F0B3B:000770171989,0F2E20382F=0B17232F3B:00077089,522E1F8A202C=07131F2B37:000704036939487C4466,0F7011293821=1824000C30:000715547776,521F18=0E2632021A:0007030401021811171A0F2E2322271F1E706749528483,202F293800=0F1B330327:00077663,0F297138202C=0B17232F3B:000776776548,0F1118152E1F2017=121E2A3606:00077665776489,52830F208A14=1A2632020E:00077B7C4834353989,2952203B=2632020E1A:00076A386563,0F7D8A2066454F52754C15=1E2A360612:00076A0F3874485040,06707C2509=3606121E2A:00076A74504089,5229702C7D15=14202C3808:00076A74173926271F1E20,0F7029522B09=000C182430:00076A54196348767765,7920297115528A0D382B16=101C283404:000734357B7C3989,0F528329200C=06121E2A36:0007343589,290F7104=2E3A0A1622:0007343589,0F292F702012=182430000C:0007343589,0F71296B708003=15212D3909:0007343589,7129706300=0D19310125:0007010618111A332D302F15262322271E530270164C,560F712924=0E1A263202:000701020618111A1752848354230C7027,262038292C=111D293505:0007711F204840,010F29153814=17232F3B0B:00076527262322,1552835A201D0F382D=0D19253101:0007363F8B3989,09292C208A0F28=030F1B2733:000739483F66,0F208A2B0A=04101C2834:0007397B7C343589,0106522008=020E1A2632:0007396A48343589,0F203A=283404101C:00073934357B7C89,0F5223=3505111D29:000739343589,032010=0A16222E3A:000739343589,520F2F=111D293505:000739343589,8A200A=15212D0939:00077A7089,8817=17232F3B0B:000789,8D3B=172F3B0B23:000789,8815=1B2733030F:007C343589,881B=212D390915:007C343589,8812=15212D3909:006A79190F6F2627,6B46204538290B=380814202C:006A38075040,0F630141202B454F2D=121E2A3606:006A5040077448,702B2C0F2F292E=0B17232F3B:006A583F232227261F20,0F291547031C=232F3B0B17:006A6F391974,0F2E614447702C292F71201F38521F=31010D1925:0034353989,522E1F2B=0D19253101:00343589,060F5200=2A3606121E:00343589,7129565A01=131F2B3707:00343589,883B=111D350529:00343589,8800=152D390921:000150402627,0F292F2B1E=2733030F1B:00010F17505840,565A80385283846315=101C283404:000103020611187B7C2D4E616439201E0C26,522E474429=101C283404:0001030239450D297115332C2E4C,0F542070528438632C=101C283404:000103392E54837548,19700F58157A20381F=1830000C24:00010670175B71292A152322271E,03637C2B380F=0E1A263202:0001067052842E71291F20,030F38477533=131F2B3707:0001067011185B0D332C2E2D712909262322271F200C,0F5263250C=17232F0B3B:000106040318111A170F33292A26276A201D0C7A71077C1F1E74694F,520A=0D19253101:0001060403232226380F767754,568020152D=111D293505:000106025B75712904032D302F382B2A0D801E20,2E1F0F0C=0D19253101:00010607155B5C26271E2021165D83,38470F2920=16222E3A0A:000106073018110F3329271E0C7A0D75,3826201508=0F1B273303:00010618111A16332C2E2F2D27200C07483A450D,1552843825=0E1A263202:000102261E2027,03476F700F2971382E39=15212D3909:0001027007834878,2E388A201D17=131F2B3707:00010203450D3329152C2E2F5375,0F638A6A1D382D=0E1A263202:000102030D70332C2E29712F534426201F1E,0F38152F=121E2A3606:0001020370450D332C2E2D152971,0F52838A201D1B=1D29350511:0001020370528384631575712D2E4E3E581F1E1D,292C2B452620803A=222E3A0A16:0001020370392F2971152B54754C,458A1F0F20462C=14202C3808:0001020370392F80712B546675201E26,1F58472E152F=16222E3A0A:000102037039714515750D33,201D381F092E0F1103=32020E1A26:000102030F7039453319152E2D2F63751F0C1E20,71290D38472C=16222E3A0A:000102035270392E2D5863,0F381D2B2921201511=131F2B3707:0001020352666A,0F7020262938172F3A=2430000C18:00010203332C2E2F1558631F,0F1920707A2971264627=05111D2935:0001020311180F702E1F7952838468332D6749443E46630C1E1D21,292B2035=1C28340410:000102031118396375664819,1D4138702080291F=232F3B0B17:000102033945332C6375201D21,0F1929710D702D=101C283404:00010203390D3329152C2B751E20,2E1F54475352458316=111D293505:0001020339161745514F2C190F1A152E2D2F304979,8D13=17232F3B0B:00010203396A79637566201D211E,29387D71707A30=101C283404:000102033911170D3319152E2F0947442627201F,8D25=3505111D29:000102031811392E2D19528384543E4463751F20,152F1A290F0D=0E1A263202:0001020626232227201E,0F2E03801F0F=101C283404:0001020617385483,030F47202B6B1B=2733030F1B:000102060F17705283797823221E2027,2E712910=121E2A3606:000102062A397129797B7C2E1F2425,162F5D20262B=182430000C:0001020603691817452C2E2D498344,412B6A09633808=3A0A16222E:0001020603700F7B7C2E1F692D48302F565A586366240C21,2B151A292039=17232F3B0B:000102060717706A33392D2E4E674447482322271E210C,71292B4F2023=33030F1B27:0001020607036A5D397C2163664744,0F4E25208A08=04101C2834:000102060775261F20,71290F70150C=101C283404:00010206111803302F565A802D4E2B881F261E0C,0D0F521B=16222E3A0A:00010206090D5B7952838454685D7B7C443D77656366201F1E,030F47454F24=010D192531:000102071283542627201D210C4C78,29580F2E6352031F01=32020E1A26:00010275261E0C2322,6303706F0F292E1F19=0E2632021A:000102081A158483262322270C1E,700F292E1B=101C283404:00011A1615262322271F1E200C214C,472B0F1124=3707131F2B:00013974150726271F1E200C,0F06520D297170382B4507=17233B0B2F:000118111A16175B154C26271E200C232279302F5D528384547543,0F297C7A03=17232F3B0B:000118111A332C2E2D1571292A2627200C7A1979,387C02=172F3B0B23:000118111A332C2E2D1571292A23222627200C7A791970302F5D5283845456,387C454F1F=0E1A263202:0001081811171A160F1571292A26271E20396476452B0D,632E523813=15212D3909:00211D1E232289,8D16=0E2632021A:006526232227201F,8926=05111D2935:00657689,6B0F5225=16223A0A2E:00654C89,8D03=2A3606121E:006589,2970472008=15212D3909:001A170F5B332E2D7129261E203E5D,1503528306=152139092D:001A170F1379232227761926,71293833=1C28340410:001A1715838444363F261F1E200C2322,0F476B52036338=14202C3808:001A2B5448701938754C,152E20242510=0D19253101:0039504089,8D39=283404101C:003926271E20747677642322480C06,2E1F38=0F1B273303:0039262322271E201D210C0748766465776A,150F382939=202C380814:0039332C2E2D2F152B4644261F1E,0F7019382971637A31=192531010D:0039787989,1F2E2010=101C283404:0039787089,2E1F8A034F206B29=05111D2935:00398B7989,0F200C=131F2B3707:0039077426271F1E20,0F29713852832B632D=14202C3808:0039076A7426271F2048,0F79197029717A382C=0E1A263202:00397C343548,8929=3B0B17232F:003934357B7C89,0F2028=16222E0A3A:0039343589,8D34=16222E3A0A:0039343589,880B=111D293505:0039343589,8805=17233B0B2F:0039343589,882E=101C283404:0039343589,8806=17233B0B2F:00390103040618111A17332C2E262322271E157A7071302F45631F2075,807C2B=0915212D39:00396577647969271E2322,52012E1F2620612D=16222E3A0A:00391A6A15384C4943363F7448,0F0379472B6319=192531010D:00394C786F89,0F2E442035=182430000C:003989,882A=121E2A3606:003989,8816=13191F252B313701070D:003989,8801=0D19310125:003989,880D=0F1B273303:0018112C2E01040607332D292A09270C2322696870302F47023945,382052801C=101C340428:00190F153917701A48,472E1F200334=1F2B370713:00195475667689,5229152E2019=222E3A0A16:004C504089,0F5215470A=3A0A16222E:005C702C2F802B154C78,5A562E1F208A45466319=102834041C:0089,090F1538=131F2B3707:71297C790001062A0F802D,5215705D2F=0E1A263202:7100030170391959152E2D2F2B,0F201F4F75668A3824=030F1B2733:5483846376656419786A,298030201A=2430000C18:5452838479195D00012A0D7B7C2C2E3348156366242526201E,0F71292D=07131F2B37:54528384700001020339482D301571565A363F637566,06292B201F8A29=030F1B2733:54528384036F796A153E65,7129631D=2733030F1B:5452848303152F802C2D,2E1F208A7A700F29710C7D22=33030F1B27:118384155B20272E1F21,0F03380E=0E1A263202:1179302F842627201E,0071292E1F0E=06121E2A36:11177B7C52842C2E5B1F20,060071292F0F0E=101C283404:110F70528475660D7129,012E1F20262A=101C283404:110F03706A795215636626271E,0C012F38062C292B07=020E1A2632:110F0001702C2E7129201F,52060C=0E1A263202:110F00017052792E1F1E,71290D2B2020=293505111D:110F1A6A702C2E1952838453712F6375,45201500011D=101C340428:11037B7C2E2F7129,0F52200B=0E1A263202:11000170792C2E7129,0F52201F01=111D350529:110001527B7C2E75,0F2009=04101C2834:1100010206702D804E2B2620,0F52540D00=131F2B3707:110001392E1F20,0F712932=17232F3B0B:117154528384292C2E302D4E092A0D50407970443D,5680410023=2B3707131F:111879690001020370396A2E2D528384543E637566,0F380D58292000=222E3A0A16:111879076A1A171523221E272024,5229700F1D012E2B0C2F0B=06121E2A36:111817000106702C2E71292A0D33802D302F4E2B44,0F52252029=07131F2B37:11180F000704030D7C684580302F153867534775,70204119=2430000C18:11180F00012A0D70795D7B7C39332D2C2E4E4863664C,064F478A2037=1E2A360612:11180F000152548471702C2E2D4E303348492A156144474C63,8A201F38450618=202C380814:11180F000128032A0D7129302C2E2F2D802B09411F1E20,5284543824=2F3B0B1723:11180F0001020370391952845329712B632E7B7C792D2C8020,385D151E=293505111D:11180F0001020339700D29716375662E1F2620,3815568016=16222E3A0A:11180F000102587B7C5283847971302F804B2B497675,09612E1F201E=232F3B0B17:11180F00010E715229702E79692C2D2B15093954444C66,2F565A806132=131F2B3707:11180F71297052838454792A0D33802D153853201F1E212627,012F56476628=3707131F2B:11180F71297000010604032A0D793969302F33802D636675,201F52565A1E18=1D29350511:11180F5C000102030D332C2E195329711563261F202322,52843A=202C380814:11180370392A0D3329712C2F156375795B5D,450C8A00382E1F20010C=3A0A16222E:11185283847975661271393D692D15565A201E262322,292F060D0C02=30000C1824:111852838470795B302F404533802D152B39201E23221D212726,0F2E1F010D2923=2D39091521:111852838453546319297115030D332B2C,060F8A2E38201F38=0D19253101:111800020D041A796933483E5347446563751F1D212026,010F09150C17=2430000C18:1118000717161A2C2E3371292B56433D6375363F,0F010347208A09=020E1A2632:111800012A0D2C705271292E201F,1538617904=30000C1824:11180001032A0D70795B2C2E302F802D4E152B33714161201F26,520958470A=000C182430:11180001020439332C2E302F2B5844477515634C1F2721,0F520D19267A2971702037=232F3B0B17:111800010206037939695483845D2D2E4E446375661F262120,0F52290D7123=31010D1925:111800010206071979697C67474475664C,0F16298A2014=182430000C:11187129705B79000106032A0D397B6F7C802D2C2B61756627261E0C1D21,0F2E15414732=192531010D:111871545283842979397B7C69152B2A0D33485324251F1D1E26,6B00702F800C201E=1F2B370713:5D0007363F232227261E21,037C0F471F202E=0E1A263202:6526232227201F,880E=111D293505:653989,8806=131F2B3707:363F6526232227201E89,8832=1A2632020E:1A454F548384,881D=121E2A3606:1A38712975,0F201A=0E1A263202:1A162623227954,0001710F290C=0F1B273303:1A16170F13152654,3852204F32=0F1B273303:1A5D453A332C2E2F4B25262322271F201E1D21,000F704723=2F3B0B1723:3950177089,522E1F0F201A=1D29350511:39701117302F713819297566,004551152C2E201D1F34=121E2A3606:393589,881A=15212D3909:393589,882C=182430000C:393589,8825=101C283404:393589,881C=2531010D19:394089,71294709636F7C440D=0D19253101:3948007889,8D38=2430000C18:394889,8811=111D293505:394889,882A=0E1A263202:3907,8807=0D19253101:39343589,8831=101C283404:393489,8801=222E3A0A16:390050404C89,0F528329692018=131F2B3707:39006A26201F,0F520D38580629712B09=380814202C:390001022C2E302F1575804B2D261F20,0D0F0319707D5229717A15=17232F3B0B:3989,8D11=0A16222E3A:181179838454637566,0F5229012007=111D293505:18117915384C,52200E=0C18243000:1811795B032C2E302F802D4163754C27261E1D2120,010D0F29521F29=16222E0A3A:1811795B5466,01202F=192531010D:181179000607040D03302F5283844F3A45512B1533664C47,090F702E208A2B=0B17232F3B:18117900012C2E5B1F20,0F710D52291A=122A36061E:181179190E332C2E2D52637566262322271F20,8D02=0F1B273303:181117332C2E1526232227201F1E3E,38030F522922=142038082C:181170792C2F7129,52201F=121E36062A:18117001061579,71292023=121E2A3606:18117000012C2E7129,522024=3505111D29:18110F3900010203700D3329711563752E1F0C201D,38525D1A=101C283404:18110F197983842E230C271F1E7A70525463,2620291503=111D293505:1811002E1F8384,0F2022=1824000C30:181100012C2E2F1F,0F3821=142038082C:181100012C2E2F1F20,0F5229=14202C3808:181100015B3875,2E2034=15212D3909:181100012A0D2C2E2F2B2D304E447129841F,0F09416138200F=0814202C38:181100012A0D52842953411E20,2E1F0F47152F=131F2B3707:18110001032A0D845B7129302F791533536678,0F208A1F1D33=17232F3B0B:18115452840001712970802D2C2E302F2B2A0D78791F,0F204758610E=0F1B273303:18111A16175B3315262322271F1E201D215D838454433E363F754551,00030F290D=0C18243000:18115C0001702A2C2E2F5283847129795B6375802D154C,1F208A2407=15212D3909:88,262052830D=17232F3B0B:88,8D17=102834041C:88,8D0B=15212D0939:88,8D24=121E2A0636:88,8D09=17232F0B3B:88,8D13=111D293505:1979,3F2F2E45207D37=112935051D:1966583F6589,8831=16222E3A0A:4C4089,880C=0C18243000:4C78,297172380D2A2E0F47484112=16222E3A0A:5C0F1811790070528471291F20,2F0380512514=1C28340410:5C0001020652835B0E03804B2D4E2B752024210C,292E565A36=1A2632020E:5C11180001027170520D2984832B15200C,03802E386333=15212D3909:89,6B34=111D293505:89,8D';
    private static TIME_YI_JI: string = '0D28=,2C2E2128=,2C2E0110=,2C2E0C1F=,2C2E7A701B1C=,01022308=,01026D003026=,000106037A702D02=,000106037A702802=,000106037A703131=,000106037A70341B=,000106087A701F0E=,000106087A702E15=,000106087A702C2E0E39=,000106087A702C2E0D2B=,881727=,88032D=,88352F=,882B2F=,882125=,882A22=,880C1E=,880220=,88161A=,882018=,883422=,880113=,880B11=,883315=,882915=,881F17=,88150D=,88122E=,88302A=,88262A=,883A28=,880826=,881C2C=,881905=,882303=,880F09=,88050B=,883701=,882D01=,88060C=,882410=,881A12=,882E0E=,88380E=,881010=,883630=,881834=,880E38=,882232=,882C30=,88043A=,881E0A=,880006=,883208=,880A04=,881400=,882808=,883137=,883B35=,882737=,881D39=,88133B=,880933=,88251D=,882F1B=,881B1F=,88111D=,880719=,88391B=,88212D=,7A702C0B15=,7A70551515=,7A70552D00=,7A7D2C2E1334=382C,000106083528=382C,7A70000106080504=382C7A6C55700F197120,00010608223A=380006082C,01026D0D2C=380006082C,01027A70551D30=380006082C0F71295283,01027A703636=380006082C0F71295283,0102416D1226=380006082C7A706C550F297120,0102251C=380006082C7A6C55700F197120,01026D2300=3800010608,2C2E0324=3800010608,7A702C2E082E=3800010608,7A70552C2E3B34=38000106082C,2F8026330C=38000106082C,2F80267A701622=38000106082C7A70556C0F197120,1904=38000106082C7A6C55700F197120,1514=38000106087A70556C0F197120,2C2E3138=38000106087A70556C0F197120,2C2E0B10=38000106087A6C55700F197120,2C2E2B28=387A6C55700F197120,000106082C2E2E16=38082C,000106037A700E3A=38082C,000106037A703708=38082C6C550F197120,000106037A701B20=38082C6C550F197120,000106037A70111C=38082C6C550F197120,000106037A703A2D=2C38,000106082733=2C38,000106081015=2C38020F71295283,000106083817=2C2920,7A700F03=2C2920,616D1839=2C292070556C100F,00010608161B=2C2920020F7100010608,302B=2C2920556C0F1971,7A701E07=2C2920010F,1B1B=2C2920010670100F00,352B=2C292000010206100F70,082B=2C292000010206100F707A,0C21=2C292000010870556C100F7A,0617=2C29206C0F1971,7A70552807=2C29207A70556C0F197100010206,122F=2C29207A706C55100F1971,1017=2C29207A706C55100F1971,2731=2C20,616D0436=2C2070550F,7A7D01022E12=2C200F71295283,01021831=2C20556C0F1971,7A702912=2C20100F52,01026D1D33=2C807138152952,000106080E31=2C80713815295270556C100F,000106083201=2C80713815295270556C100F7A,000106080327=2C80713815295202100F,000106037A702B2B=2C80713815295202100F,000106037A702801=2C80713815295202100F,000106083639=2C80713815295202100F7A7055,00010608341D=2C807138152952556C100F,000106037A701B23=2C807138152952010F6C55,7A70302D=2C8071381529520102100F7A7055,2231=2C8071381529520102100F7A6C55,1F13=2C80713815295200010206100F20,7A70313B=2C8071381529526C550F,000106037A701A15=2C8071381529527A70550F,000106080219=2C8071381529527A70556C0F19,000106082E0D=2C80713815295208556C100F,000106037A70161F=2C80711529525670556C100F,000106083813=2C80711529525670556C100F,000106082D05=2C807115295256020F7A706C55,2237=2C80711529525602100F,000106081F0D=2C80711529525602100F55,000106037A702627=2C8071152952560102100F7A706C,2C33=2C8071152952560102100F7A706C,0939=2C80711529525601100F7A7055,416D021F=2C80711529525600010206100F70,0E37=2C80711529525600010870556C10,2129=2C8071152952566C550F,7A702519=2C8071152952566C550F19,7A702417=2C8071152952566C55100F19,000106037A70043B=2C8071152952566C55100F19,000106037A700C1B=2C8071152952566C55100F19,7A703B31=2C8071152952566C100F19,7A705500010603172D=2C8071152952567A70550F,416D3A2F=2C8071152952567A70556C100F,1901=2C8071152952567A706C55100F19,1119=2C8071152952567A6C55700F19,1C2B=2C80711529525608556C100F,000106037A701403=2C80711529525608556C100F,000106037A70071D=2C80711529525608100F55,000106037A701908=292C20,7A7D01026D2E0F=292C200102100F7A7055,032C=292C20000608,0102071C=292C206C550F1971,000106037A700E33=292C207A70556C000108,0503=2920550F,7A702C2E0721=2920556C100F,7A702C1225=2920000108556C100F,7A702C2E1F11=2900010870556C100F7A,032C201A11=297A70556C100F,032C200E35=297A70556C100F,032C20000A=70556C0F197120,7A7D3A29=70556C100F2C20,000106081C25=70556C100F2C20,000106082805=70556C100F2C20,000106082F20=70556C100F2C20,00010608150C=70556C100F29522002,7A7D000106033314=70556C100F,00010608032C20122A=70556C08,7A7D000106032415=70100F2C715220,000106081A0D=4B0F2C20,000106037A701902=4B0F2C20,000106080E3B=4B0F20,7A702C000106032E17=0F2C09382920,7A7000010603363B=0F2C093829206C55,000106037A70082C=0F29528320,7A2C71707D01026D0718=0F712952832C20,7A7D01021C26=0F712952832C20,7A7D01026D3918=0F712952832C2038000608,01027A70552126=0F712952832C2010,01021330=0F712952832C207A7055,01021118=0F712952832C207A7055,01023524=0F715220,7A70552C2E3419=20556C0F1971,7A702C2E1D31=2000010206100F,7A702C1E05=0270290F2C207A,00010608212C=0270550F,00010608032C200C23=0270550F,00010608032C203706=0270550F20,000106082C2E2520=0270550F20,7A7D000106032E13=0270550F202C807115295256,000106081620=020F29528320,000106087A2C71707D0112=020F2952832055,7A2C71707D000106030F08=020F20,7A7055000106032A23=020F712952832C20,2521=020F712952832C20,000106082F21=020F712952832C20,000106080003=020F712952832C20,7A700432=020F712952832C2038000106086C,7A701E03=020F712952832C2070556C10,000106081623=020F712952832C2001,2236=020F712952832C2001,000B=020F712952832C2001,7A70552C36=020F712952832C20013800,416D341E=020F712952832C20017055,7A7D0E32=020F712952832C200110,7A7D0329=020F712952832C2001107A706C55,262D=020F712952832C20017A7055,1229=020F712952832C2000010608,122D=020F712952832C2000010608,1011=020F712952832C2000010608,0A0B=020F712952832C2000010608,1F0F=020F712952832C2000010870556C,1A0E=020F712952832C206C55,7A703312=020F712952832C2010,000106037A70172A=020F712952832C2010,7A7055000106033B3B=020F712952832C2010,416D000106037A700B12=020F712952832C20106C55,000106037A700615=020F712952832C207A7055,3203=020F712952832C207A7055,201B=020F712952832C207A706C5510,2023=020F712952832C207A6C7055,2A1B=020F7129528320,000106087A702C2629=020F7129528320,7A702C2E3709=020F7129528320,7A702C000106083A24=020F7129528320,7A70552C2E341A=020F712952832038000106087A70,2C2E1C2D=020F712952832001,7A702C2E0611=020F712952832001,7A702C2E021A=020F712952832001,7A7D2C2E3815=020F71295283200100,7A702C2E3024=020F71295283200110,616D2C2E093B=020F71295283206C55,7A702C2E000106030505=020F71295283206C55,7A702C030C1A=020F71295283207A706C55,000106082C2E3705=020F712952837A706C55,032C201F0C=02550F20,000106037A700508=02550F20,000106037A703029=02550F20,000106087A702C2E3027=02550F202C807115295256,000106037A703526=02100F2C29528320,000106037A70150E=02100F2C29528320,00010608380F=02100F2C29528320,000106083527=02100F2C29528320,7A70000106031C27=02100F2C2955528320,000106081227=02100F2C29555283207A706C,00010608060F=02100F2C29555283207A706C,000106081D34=02100F7020,7A7D000106030F02=02100F7055528315,2F8026000106083920=02100F7055528315,2F802600010608212A=02100F7055528315,000106082A20=02100F7055528315,000106083A26=02100F7055528315,000106080439=02100F7055528315,000106080008=02100F7055528315,000106081B21=02100F7055528315,00010608071B=02100F7055528315,000106080D24=02100F7055528315,000106082C2E2C32=02100F7055528315,000106082C2E2B2C=02100F7055528315,00010608032C201402=02100F7055528315,00010608032C20391C=02100F7055528315,7A7D000106031F10=02100F705552831538,2F8026000106082D06=02100F70555283157A,2F802600010608290D=02100F20,7A702C000106032416=02100F20,616D000106037A702C34=02100F20292C,7A70000106031C2A=02100F528315,7A7055000106032234=02100F528315,7A7055000106032A21=02100F55528315,000106037A703313=02100F55528315,000106037A700509=02100F55528315,000106037A702D03=02100F55528315,000106037A700613=02100F55528315,000106037A702235=02100F55528315,000106037A70391D=02100F55528315,000106037A70100F=02100F55528315,000106087A702C111B=02100F55528315,000106087A702C2E2916=02100F55528315,7A2C71707D000106030430=02100F55528315,7A2C71707D000106033B32=02100F55528315,7A2C71707D000106081903=02100F55528315,7A702C2E000106033A27=02100F55528315,7A702C000106030931=02100F55528315,7A702C000106030C1C=02100F55528315,7A70000106032735=02100F555283152C8071,000106037A700B13=02100F555283152C807138,000106037A701517=02100F555283152C807138,000106037A702917=02100F555283156C,000106037A703136=550F522010,7A2C71707D01022A1E=550F715220,7A702C2E1333=550F715220,7A702C2E000106081405=556C,000106087A702C2E0433=556C,7A70000106083B38=556C0F197120,7A702C2E1E01=556C0F19712001,7A702C2E190B=556C000108,7A70230B=556C000108,7A702C2E1A0F=556C0001082C807115295256,7A701830=556C0008,7A2C71707D01023814=556C100F295220,7A2C71707D03082F=556C100F295220,7A702C0C1D=556C100F295220,7A702C2E00010603021D=556C100F295220,7A70000106031121=556C100F2952202C,7A701835=556C100F2952202C80713815,000106037A703B30=556C100F29522002,000106037A70290C=556C100F29522002,7A70000106030930=556C100F2952200238,000106037A702B27=556C100F2952200102,7A702C2E3812=556C08,000106037A701012=556C08,000106037A701621=556C08,7A702C2E000106033209=556C08,7A702C2E000106032021=556C082C807138152952,000106037A700009=556C082C807138152952,000106037A702A1D=807138152952000170100F,032C200A05=807138152952000170100F,032C20273B=8071381529527A706C550F,032C203423=80711529525600010870556C100F,032C201511=80711529525600010870556C100F,032C20183B=80711529525600010870556C100F,032C203311=010F2C80093829206C55,7A702B29=010F2C80093829206C55,7A70616D3A25=010F2C09382920,7A70550825=010F2C093829207A6C5570,201E=010F09382920,7A702C2E352E=010670100F2C71522000,1C28=010670100F7152207A6C55,2C2E2E11=0106100F7152,7A70032C203205=0106100F71526C,7A70032C202A19=0102290F20,7A702C2E2A1F=010270290F2C207A6C55,2413=010270290F2C207A6C55,0437=010270290F2C207A6C55,0935=010270550F,032C201B18=010270550F20,2B24=010270550F20,2F80261906=010270550F20,2C2E2732=010270550F20,2C2E071A=010270550F20,2C2E3700=010270550F20,7A7D1724=010270550F203800,2F80263921=010270550F202C29,416D290F=010270550F202C807138152952,1619=010270550F202C8071381529527A,3207=010270550F202C80711529525600,0829=010270550F2000,060D=010270550F2000,0001=010270550F2000,2736=010270550F207A,1B1E=010270550F207A,2C2E140B=010270550F207A6C,0114=010270550F7A6C,032C202C3B=010270550F7A6C,032C20201F=0102550F20,7A702C1A13=0102550F20,7A702C3637=0102550F20,7A702C280B=0102550F20,7A702C223B=0102550F20,7A702C032D04=0102100F2C29528320,7A701409=0102100F2C29528320,7A70552307=0102100F2C2952832000,0005=0102100F295283,032C207A700A00=0102100F2955528320,7A2C71707D082D=0102100F2955528320,7A702C2E2809=0102100F295552832000,7A702C2E2B2D=0102100F7055528315,021E=0102100F7055528315,0C20=0102100F7055528315,2F80263420=0102100F7055528315,2F80261510=0102100F7055528315,2F80262E10=0102100F7055528315,2F80262806=0102100F7055528315,2F80263134=0102100F7055528315,2F80261D38=0102100F7055528315,2F8026251A=0102100F7055528315,2F80263A2A=0102100F7055528315,2F80267A7D1120=0102100F7055528315,2F80267A7D0824=0102100F7055528315,2C2E1E00=0102100F7055528315,2C2E7A2F1D=0102100F7055528315,032C200A06=0102100F7055528315,7A7D2C2E1C2E=0102100F70555283153800,2F80261832=0102100F70555283153800,2C2E280A=0102100F70555283153800,2C2E320A=0102100F705552831538007A,2738=0102100F705552831538007A6C,2F80260720=0102100F705552831538007A6C,2F8026032B=0102100F70555283152C292000,1907=0102100F70555283152C292000,3703=0102100F70555283152C292000,2739=0102100F70555283152C29207A,251B=0102100F70555283152C29207A,2B25=0102100F70555283152C29207A6C,1331=0102100F70555283152C207A,0D29=0102100F70555283152C80717A,1B1D=0102100F70555283158071,032C200D2D=0102100F705552831500,1725=0102100F705552831500,352D=0102100F705552831500,0C19=0102100F705552831500,150F=0102100F705552831500,3025=0102100F705552831500,0F07=0102100F705552831500,1E09=0102100F705552831500,251F=0102100F705552831500,010C=0102100F705552831500,2F80261A10=0102100F705552831500,2F80261016=0102100F705552831500,2F80260934=0102100F705552831500,2F80262910=0102100F705552831500,2F80267A7D1A14=0102100F705552831500,2C2E2304=0102100F705552831500,7A7D3421=0102100F7055528315002C2920,212F=0102100F7055528315002C807138,111F=0102100F7055528315002C807138,3135=0102100F7055528315008071,032C200828=0102100F7055528315007A6C,2022=0102100F70555283156C,7A7D140A=0102100F70555283156C,7A7D2C2E2127=0102100F70555283157A,1618=0102100F70555283157A,0B0F=0102100F70555283157A,1836=0102100F70555283157A,172E=0102100F70555283157A,2F8026352A=0102100F70555283157A,2F80262B2E=0102100F70555283157A,2F8026082A=0102100F70555283157A,2F80262306=0102100F70555283157A,2F80263702=0102100F70555283157A,2F80262C38=0102100F70555283157A,2F80261E06=0102100F70555283157A,2F80261B1A=0102100F70555283157A,2F8026032A=0102100F70555283157A,2C2E1F14=0102100F70555283157A,2C2E3810=0102100F70555283157A,2C2E262C=0102100F70555283157A29,032C20201A=0102100F70555283157A00,2F80260A02=0102100F70555283157A00,2F80261838=0102100F70555283157A6C,2F80260E34=0102100F70555283157A6C,2F80260438=0102100F70555283157A6C,2C2E2F1A=0102100F70555283157A6C,2C2E2305=0102100F528315,7A70553525=0102100F5283152C8071,7A70550723=0102100F528315807138,7A7055032C200D2A=0102100F55528315,2F80267A2C71707D3316=0102100F55528315,2F80267A2C71707D1224=0102100F55528315,2F80267A2C71707D212E=0102100F55528315,2F80267A700616=0102100F55528315,2F80267A70380C=0102100F55528315,2F80267A700434=0102100F55528315,2F80267A702A18=0102100F55528315,7A2C71707D2628=0102100F55528315,7A2C71707D100C=0102100F55528315,7A2C71707D2F80261729=0102100F55528315,7A701F15=0102100F55528315,7A70240E=0102100F55528315,7A703632=0102100F55528315,7A701339=0102100F55528315,7A700115=0102100F55528315,7A702C2C37=0102100F55528315,7A702C320B=0102100F55528315,7A702C3206=0102100F55528315,7A702C2E2238=0102100F55528315,616D2F80267A2C71707D3816=0102100F555283153800,2F80267A701406=0102100F555283153800,2F80267A700111=0102100F555283152C8071,7A700501=0102100F555283152C8071,7A70370B=0102100F555283152C807138,7A703B37=0102100F555283152C80713800,7A701C2F=0102100F555283152920,7A702C240F=0102100F555283152920,7A702C0A03=0102100F555283152920,7A702C0221=0102100F55528315292000,7A702C2E3317=0102100F55528315292000,7A702C2E3634=0102100F5552831500,2F80267A2C71707D3028=0102100F5552831500,7A2C71707D111A=0102100F5552831500,7A2C71707D071E=0102100F5552831500,7A2C71707D2913=0102100F5552831500,7A702F19=0102100F5552831500,7A702301=0102100F5552831500,7A702C3919=0102100F5552831500,7A702C3B33=0102100F5552831500,7A702C2E0223=0102100F5552831500,7A702C03032F=0102100F55528315006C,7A702C2E262E=0102100F555283156C,2F80267A70032E=0102100F555283156C,7A2C71707D0F0B=0102100F555283156C,7A701D3B=0102100F555283156C,7A702C2E030116=01100F1571292C20,2F80267A703200=01100F1571292C20,7A7055370A=01100F1571292C2000,7A701B22=01100F1571292C2000,7A701E04=01100F1571292C2000,416D1336=01100F1571292C20007A70556C,391A=01100F1571292C20007A6C7055,1C24=01100F1571292C207A7055,2F80260D2E=01100F15712920,7A702C2E2D0A=01100F15712920,7A702C2E2800=01100F15712920027A7055,2C2E251E=01100F157129207A70556C,2C2E1228=01100F157129207A70556C,416D2C2E050A=01100F5220,7A70550000=01100F5220,616D2624=01100F5220,616D2F80267A702804=01100F5220006C,7A70550F06=01100F52207A70556C,2C2E2F1E=01100F52207A70556C,2C2E1014=01100F527A70556C,032C20161E=01100F712920,7A702C2E0A0A=01100F71522C2920,616D161C=0070100F292C20,01020F04=0006100F7020,7A7D01026D183A=0006100F7020,616D0102201C=0006100F20,7A2C71707D01026D1D37=000170100F292C20,2F18=000170100F292C802038,161D=00014B0F,032C201338=00014B0F2C2002,2F80261728=00014B0F20,2C2E0F0A=00014B0F20,7A2C71707D1833=00014B0F20,7A702C1407=00014B0F20,7A702C1401=0001060838,2C2E1123=0001060838,416D032C202019=000106082C38,2C31=000106082C38,391F=000106082C38,2523=000106082C38,7A70416D1C29=000106082C38020F71295283,3811=000106082C38020F71295283,7A700937=000106082C386C550F197120,7A700117=00010252100F29202C7A706C55,1337=00010206700F202C807138152952,3A2E=00010206100F7020,616D0610=00010206100F20,7A2C71707D0328=00010206100F20,7A700F01=00010206100F20,7A702C3310=00010206100F20,7A702C2E3139=0001100F298020,7A702C2625=00010870556C100F2C20,1909=00010870556C100F2C20,391E=00010870556C100F2C20,2124=00010870556C100F2C20,2F80267A7D0F00=00010870556C100F2C2038,2D09=00010870556C100F2C2002,0500=00010870556C100F2C207A,2C39=00010870556C100F2C207A,2518=00010870556C100F2C207A,0B0C=00010870556C100F2C207A,2F80262911=00010870556C100F7A,032C200007=000108556C100F2C2029,7A700A07=000108556C100F2C2029,7A701332=000108556C100F20,2C2E7A70100D=000108556C100F20,7A702C2E2239=000108556C100F20,7A702C2E0A01=000108556C100F20,7A702C2E380D=0001086C100F2C20,7A70551D36=0001086C100F2C20,7A70552F1F=000108100F70552920,010D=000108100F70552920,616D0507=000108100F705529202C80713815,0B0D=000108100F705529202C8071157A,3133=000108100F7055292002,2309=000108100F7055292002,416D0002=000108100F705529207A,2F80263202=000108100F705529207A,2F80263638=000108100F705529207A,2C2E2A1A=000108100F705529207A38,2F80262414=000108100F705529207A6C,2C2E2E14=000108100F552920,7A2C71707D1404=000108100F552920,7A2C71707D0B17=000108100F552920,7A70330D=000108100F552920,7A702C172F=000108100F552920,7A702C2E3707=000108100F5529206C,616D7A702C2E302E=6C55700F197120,2C2E7A7D0C22=6C55700F197120,7A7D01026D1E02=6C550F297120,000106037A703923=6C550F297120,7A702C2E03230A=6C550F1920,7A2C71707D240C=6C550F19200210,7A2C71707D000106031A16=6C550F197120,000106037A701513=6C550F197120,7A703A2B=6C550F197120,7A701837=6C550F197120,7A702F23=6C550F197120,7A702F22=6C550F197120,7A702D07=6C550F197120,7A702C2E3922=6C550F197120,7A700102093A=6C550F197120,7A70000106031B19=6C550F197120,616D7A70071F=6C550F197120,616D7A702C2E212B=6C550F197120,616D7A702C2E000106032734=6C550F197120292C,000106037A700325=6C550F1971200001020610,7A702C122B=6C550F19712008,000106037A702411=6C100F2952,7A7055032C20010E=100F2C29528320,01023704=100F2C29528320,0102363A=100F292C206C55,000106037A702B26=100F2920,7A2C71707D01026D302C=100F7055528315,01021E08=100F7055528315,01022730=100F7055528315,01021512=100F7055528315,010200352C=100F7055528315,7A7D01026D2F1C=100F7055528315,7A7D01026D0222=100F70555283153800,01026D2412=100F70555283157A,01022230=100F70555283157A,0102060E=100F70555283157A6C,01022C3A=100F70555283157A6C,01026D1F12=100F1571292C20,01026D3B36=100F1571292C20,01026D1516=100F1571292C20,000106037A702302=100F1571292C20,000106037A701D32=100F1571292C20,000106082F8026330E=100F1571292C20,000106086D2A1C=100F1571292C20,7A7001026D313A=100F1571292C20,7A7000010603341C=100F1571292C20,416D7A70000106032B2A=100F1571292C2002,000106037A700326=100F1571292C20556C,000106037A70273A=100F1571292C2000,01026D0722=100F1571292C2000,01026D2E0C=100F1571292C206C55,000106037A701408=100F1571292C207A706C55,01022020=100F1571292C207A706C55,000106081726=100F1571292C207A6C7055,0102290E=100F1571292C207A6C7055,000106080932=100F1571292C207A6C7055,000106080D26=100F52,00010608032C20100E=100F5283153800,01027A70550B16=100F5220,2F8026000106081122=100F5220,6D010200133A=100F5220,01026D1F16=100F5220,000106037A703132=100F5220,000106083B3A=100F5220,000106082522=100F5220,00010608190A=100F5220,000106082C2E021C=100F5220,7A70000106030936=100F52202C,01026D3A2C=100F52206C55,01027A701A0C=100F52206C55,000106037A700E30=100F52206C55,000106037A700A08=100F52207A706C55,000106083204=100F52207A6C5570,01026D0B0E=100F55528315,01027A2C71707D0004=100F55528315,7A2C71707D01026D1D3A=100F55528315,7A2C71707D01026D3418=100F5552831500,7A2C71707D0102201D=100F712920,7A702C2E00010608030E36=100F71522C2920,01023635=100F715229,00010608032C20021B=7A70550F2C715220,1900=7A70550F715220,2C2E0A09=7A70556C,00010608172C=7A70556C,00010608032C200B14=7A70556C,00010608032C202914=7A70556C0F197120,2C2E0938=7A70556C0F197120,000106082C2E111E=7A70556C000108,0502=7A70556C000108,2F80260D2F=7A70556C0001082C807138152952,2D0B=7A70556C0001082C807138152952,3633=7A70556C0001082C807115295256,0C18=7A70556C0008,01020218=7A70556C0008,0102302F=7A70556C100F295220,000106082C35=7A70556C100F295220,000106081E0B=7A70556C100F2952202C807115,3130=7A70556C100F29522002,000106080506=7A70556C100F29522001,2C2E330F=7A70556C100F29522001022C8071,010F=7A70556C100F295220010200,0435=7A70556C100F295280713815,032C200614=7A70556C100F295201,032C20122C=7A70556C100F29520102,032C203B39=7A706C550F297120,0F05=7A706C550F297102,032C200D25=7A706C550F19712001,616D2233=7A706C550F19712000010608,2626=7A6C70550F197120,01021A17=7A6C70550F197120,00010608262F=7A6C70550F1971202C29,000106083529=7A6C70550F19712002,616D000106082D08=7A6C70550F197120103800,0102341F=7A6C55700F197120,2C2E172B=082C38,7A7055000106030D27=082C38,7A70000106030827=08556C100F2C20,000106037A702803=08556C100F2C20,000106037A701013=08556C100F2C20,7A7000010603262B=08556C100F2C20,7A7000010603240D=08556C100F2C20,7A70000106033631=08556C100F2C20,7A70000106030431=08556C100F20,7A702C2E000106031D35=08100F552920,000106037A701335=08100F552920,000106037A700612=08100F55292038,000106037A70';
    static SHEN_SHA: string[] = [
        '{s.none}',
        '{sn.tianEn}',
        '{sn.mingFei}',
        '{sn.muCang}',
        '{sn.buJiang}',
        '{sn.siXiang}',
        '{sn.mingFeiDui}',
        '{sn.wuHe}',
        '{sn.sanHe}',
        '{sn.chuShen}',
        '{sn.yueDe}',
        '{sn.yueKong}',
        '{sn.yueDeHe}',
        '{sn.yueEn}',
        '{sn.shiYin}',
        '{sn.wuFu}',
        '{sn.shengQi}',
        '{sn.jinKui}',
        '{sn.xiangRi}',
        '{sn.yinDe}',
        '{sn.liuHe}',
        '{sn.yiHou}',
        '{sn.qingLong}',
        '{sn.xuShi}',
        '{sn.mingTang}',
        '{sn.wangRi}',
        '{sn.yaoAn}',
        '{sn.guanRi}',
        '{sn.jiQi}',
        '{sn.fuDe}',
        '{sn.liuYi}',
        '{sn.jinTang}',
        '{sn.baoGuang}',
        '{sn.minRi}',
        '{sn.linRi}',
        '{sn.tianMa}',
        '{sn.jingAn}',
        '{sn.puHu}',
        '{sn.yiMa}',
        '{sn.tianHou}',
        '{sn.yangDe}',
        '{sn.tianXi}',
        '{sn.tianYi}',
        '{sn.siMing}',
        '{sn.shengXin}',
        '{sn.yuYu}',
        '{sn.shouRi}',
        '{sn.shiDe}',
        '{sn.jieShen}',
        '{sn.shiYang}',
        '{sn.tianCang}',
        '{sn.tianWu}',
        '{sn.yuTang}',
        '{sn.fuSheng}',
        '{sn.tianDe}',
        '{sn.tianDeHe}',
        '{sn.tianYuan}',
        '{sn.tianShe}',
        '{sn.tianFu}',
        '{sn.yinShen}',
        '{sn.jieChu}',
        '{sn.wuXu}',
        '{sn.wuLi}',
        '{sn.chongRi}',
        '{sn.fuRi}',
        '{sn.xueZhi}',
        '{sn.tianZei}',
        '{sn.tuFu}',
        '{sn.youHuo}',
        '{sn.baiHu}',
        '{sn.xiaoHao}',
        '{sn.zhiSi}',
        '{sn.heKui}',
        '{sn.jieSha}',
        '{sn.yueSha}',
        '{sn.yueJian}',
        '{sn.wangWang}',
        '{sn.daShi}',
        '{sn.daBai}',
        '{sn.xianChi}',
        '{sn.yanDui}',
        '{sn.zhaoYao}',
        '{sn.jiuKan}',
        '{sn.jiuJiao}',
        '{sn.tianGang}',
        '{sn.siShen}',
        '{sn.yueHai}',
        '{sn.siQi}',
        '{sn.yuePo}',
        '{sn.daHao}',
        '{sn.tianLao}',
        '{sn.yuanWu}',
        '{sn.yueYan}',
        '{sn.yueXu}',
        '{sn.guiJi}',
        '{sn.xiaoShi}',
        '{sn.tianXing}',
        '{sn.zhuQue}',
        '{sn.jiuKong}',
        '{sn.tianLi}',
        '{sn.diHuo}',
        '{sn.fourHit}',
        '{sn.daSha}',
        '{sn.gouChen}',
        '{sn.baZhuan}',
        '{sn.zaiSha}',
        '{sn.tianHuo}',
        '{sn.xueJi}',
        '{sn.tuHu}',
        '{sn.yueXing}',
        '{sn.chuShuiLong}',
        '{sn.diNang}',
        '{sn.baFeng}',
        '{sn.siFei}',
        '{sn.siJi}',
        '{sn.siQiong}',
        '{sn.wuMu}',
        '{sn.yinCuo}',
        '{sn.siHao}',
        '{sn.yangCuo}',
        '{sn.guChen}',
        '{sn.xiaoHui}',
        '{sn.daHui}',
        '{sn.baLong}',
        '{sn.qiNiao}',
        '{sn.jiuHu}',
        '{sn.liuShe}',
        '{sn.tianGou}',
        '{sn.xingHen}',
        '{sn.liaoLi}',
        '{sn.suiBo}',
        '{sn.zhuZhen}',
        '{sn.sanSang}',
        '{sn.sanYin}',
        '{sn.yinDaoChongYang}',
        '{sn.yinWei}',
        '{sn.yinYangJiaoPo}',
        '{sn.yinYangJuCuo}',
        '{sn.yinYangJiChong}',
        '{sn.guiKu}',
        '{sn.danYin}',
        '{sn.jueYin}',
        '{sn.chunYang}',
        '{sn.yangCuoYinChong}',
        '{sn.qiFu}',
        '{sn.chengRi}',
        '{sn.guYang}',
        '{sn.jueYang}',
        '{sn.chunYin}',
        '{sn.daTui}',
        '{sn.siLi}',
        '{sn.yangPoYinChong}'
    ];
    private static DAY_SHEN_SHA: string[] = [
        ';000002300F14156869717A3F;01001617495C40413C425D6A;0209000C041831031906054A5E6B4B5F;033500041A1B032C06054C4D4E60;04002D321C1D1E104F50615152;05111F53546C55433C3E;062E200721220D01566E44;070B2333242F45;08360A2526242F080157583D59;091234080162463C3D5A;0A270728292A5B6364653F79;0B0237130E2B4748727A3E66;0C09020C04300F0314150568696D;0D3504031617495C40413C6F425D6A;0E38183119064A5E6B4B5F;0F001A1B032C064C4D4E60;10002D321C1D1E104F50615152;110B00111F53546C55433C3E;12360A002E200721220D015644;13002333456D;142526242F080157583F3D59;15001234080162463C3D5A;16090004270728292A5B636465;17350204130E032B47483E66;1802300F14156869;19031617495C40413C425D6A;1A1831031906054A5E6B4B5F;1B0B1A1B032C06054C4D4E;1C360A2D321C1D1E104F50615152;1D111F53546C55433C3E;1E2E200721220D01563F44;1F23334573;20090C042526242F080157583D;2135041234080162463C3D5A;22270728292A5B636465;2302130E032B47483E66;2402300F0314150568696E;250B031617495C40413C425D6A;26360A18311906054A5E6B4B5F;271A1B2C06054C4D4E60;282D321C1D1E104F506151523F;29111F53546C55433C3E;2A090C042E200721220D015644;2B350423334567;2C2526242F0857583D59;2D001234080162463C3D5A;2E00270728292A5B63646574;2F0B0002130E032B47483E66;30360A0002300F141505686975;31001617495C40413C425D6A676D;3218311906054A5E6B4B3F675F76;331A1B2C06054C4D4E60;34090C042D321C1D1E104F50615152;353504111F53546C55433C6F3E;362E200721220D5644;3723334567;382526242F08015758703D6759;390B123408016246703C3D5A84;3A360A270728292A5B636465;3B02130E2B47483E66;',
        ';00090002272A536C4C4D4E41717A;0100300F3103233C6151523F66;020004180E032406150543405D;03000C041A1D340617054A5E6B4F50;04002D1B555F;050B112526321C2B3C42654B3E60;060A2E2014100547546246;0712070D161F566A;0822192F0148453D44;092C083301575868695B633C3D;0A0937131E495C6459;0B020721282903727A3F3E5A;0C020427032A05536C4C4D4E416D;0D0C04300F03233C6F61515266;0E38180E24061543405D;0F0B001A1D3406174A5E6B4F5078;100A002D1B555F;1100112526321C2B3C42654B3E60;12002E2014100147546246;130012070D161F566A6D;140922192F080148453D44;152C083301575868695B633C3F3D44;160413031E495C6459;17020C0407212829033E5A;1802272A536C4C4D4E41;190B300F3103233C61515266;1A0A180E032406150543405D;1B1A1D340617014A5E6B4F50;1C2D1B555F;1D112526321C2B3C42654B3E60;1E092E2014100147546246;1F12070D161F56736E6A3F;200422192F080148453D44;210C042C083301575868695B633C3D;22131E495C6459;230B0207212829033E5A;240A0227032A05536C4C4D4E41;25300F31233C61515266;26180E2406150543405D;271A1D340617054A5E6B4F50;28092D1B555F;29112526321C2B3C42654B3F3E60;2A042E2014100147546246;2B0C0412070D161F566A67;2C22192F0848453D44;2D0B002C083301575868695B633C3D85;2E0A0013031E495C6459;2F0002072128293E5A;300002272A05536C4C4D4E4175;3100300F31233C6151526E676D66;3209180E2406150543405D;331A1D340617054A5E6B4F503F76;34042D1B555F;350C04112526321C2B3C6F42654B3E60;362E20141047546246;370B12070D161F566A67;380A22192F08014845703D6744;392C083301575868695B63703C3D74;3A131E495C6459;3B02072128293E5A;',
        ';00000207282931032B717A6E5D59;01000314473C5A;020A000427182526300F1D16062A054F506A;03360B00041A1906055562464066;04002D2C154A5E6B6C733F788B;0512111B0E1E17483C3E;060C2E20321C016869655F;0753544960;08350907210D230810015B63564B3D77;091324081F014C4D4E453C423D;0A2203342F57586461515244;0B02032C4341727A3E;0C0A020407282931032B055D6D59;0D360B040314473C6F5A;0E3827182526300F1D16062A4F506A3F;0F001A19065562464066;10000C2D2C154A5E6B6C86;110012111B0E1E17483C3E;123509002E20321C0168696E655F;13005354495C6D60;1407210D230810015B63564B3D7F;1537130324081F014C4D4E453C423D;160A042203342F57586461515244;17360B0204033343413E;1802072829312B5D3F59;190314473C5A;1A0C27182526300F1D16062A054F506A;1B1A1906055562464066;1C35092D2C154A5E6B6C;1D12111B0E1E17483C3E;1E2E20321C016869655F;1F5354495C60;200A0407210D230810015B63564B3D80;21360B04130324081F014C4D4E453C423D;2222342F5758646151523F44;2302033343413E;24020C072829312B055D59;2514473C5A;26120927182526300F1D16062A054F506A;271A1906055562464066;282D2C154A5E6B6C76;2912111B0E1E17483C3E;2A0A042E20321C016869655F;2B360B045354495C6760;2C07210D2308105B63564B3F3D77;2D00130324081F014C4D4E453C423D;2E000C22342F57586461515244;2F00023343413E;3035090002072829312B05755D59;310014473C676D5A;3227182526300F1D16062A054F506A67;331A1906055562464066;340A042D2C154A5E6B6C;35360B0412111B0E1E17483C6F3E;362E20321C6869653F5F;375354495C6760;380C07210D230810015B6356704B3D677774;391324081F014C4D4E45703C423D;3A350922342F57586461515244;3B023343413E;',
        ';000A00220362463C44;010B00072128291D334F50645D;02360002230605534855423F59;03000212300F24060568695A;0400042E27342A495C403C8C;050C04184A5E6B3E66788D76;06091A1B2B15014C4D4E;07352D321C14175B636151526577;0811130E16080147546C433C6A3D5F;0920070D190801563D60;0A0A032C2F104541;0B0B252631031E1F57584B3E;0C362203056246717B3C3F6D44;0D072128291D334F50645D;0E020423065348554259;0F00020C0412300F240668696E5A;1009002E12342A495C403C;113500184A5E6B3E66;12001A1B2B15014C4D4E;13002D321C14175B63615152656D77;140A11130E0316080147546C433C6F6A3D5F;150B20070D03190801563D60;1636032C2F104541733F;17252631031E1F5758727B4B3E;1804220362463C44;190C04072128291D334F50645D;1A09022306055348554259;1B3502120D0F24060568695A;1C2E27342A495C403C;1D184A5E6B3E66;1E0A381A1B2B15014C4D4E;1F0B2D321C14175B63615152657F;20363711130E0316080147546C433C6A3F3D5F;2120070D03190801563D60;2204032C2F104541;230C042526311E1F57584B3E;2409220562463C44;2535072128291D334F50645D;26022306055348554259;270212300F24060568695A;280A2E27342A495C403C6F;290B184A5E6B3E66;2A361A1B2B15014C4D4E3F81;2B2D321C14175B6361515265678074;2C0411130E03160847546C433C6A3D5F;2D000C0420070D190801566E3D60;2E09002C2F104541;2F35002526311E1F57584B3E;300022056246703C44;3100072128291D334F50645D676D;320A02230605534855426759;330B02120D0F2406056869755A;34362E27342A495C403C3F;35184A5E6B3E6676;36041A1B2B154C4D4E81;370C042D321C14175B6361515265677774;380911130E16080147546C433C6A3D675F;393520070D190801563D60;3A2C2F104541;3B2526311E1F5758704B3E87;',
        ';00001D2F10575868694F503C;0100122B1F495C5564;0209000207222829140605655D44;03000216063305474C4D4E51526A4B3F;04000C042E300F193C6159;0504182C43403E5A;06271A1E2A014A5E6B6C5B6342;070B2D1B1366;080A112526321C0815013C3D;0920032308170153546246413D;0A07210D310324565F;0B0E033448453E60;0C091D2F1005575868694F50717B3C6D;0D122B1F495C553F;0E020C04072228291406655D44;0F000204160633474C4D4E51526A4B;10002E300F193C6159;110B00182C43403E5A;120A00271A1E2A014A5E6B6C5B6342;13002D1B13036D66;14112526321C030815013C6F3D;1520032308170153546246413D;160907210D31032456735F;170E344845727B3F3E60;180C041D2F10575868694F503C;1904122B1F495C5564;1A0207222829140605655D44;1B0B0216063305474C4D4E51526A4B;1C0A2E300F193C6159;1D182C43403E5A;1E38271A1E2A014A5E6B6C5B6342;1F2D1B130366;2009112526321C030815013C3D;21202308170153546246413F3D;220C0407210D3103565F;23040E3448453E60;241D2F1005575868694F503C;250B122B1F495C5564;260A0207222829140605655D44;270216063305474C4D4E51526A4B;282E300F193C6F616E59;29182C43403E5A;2A09271A1E2A014A5E6B6C5B63427988;2B372D1B133F6766;2C0C04112526321C0308153C3D;2D0004202308170153546246413D;2E0007210D3124565F;2F0B000E3448453E60;300A001D2F1005575868694F50703C89;3100122B1F495C5564676D;320207222829140605655D6744;330216063305474C4D4E7551526A4B;34092E300F193C6159;35182C43403F3E5A;360904271A1E2A4A5E6B6C5B634278;37042D1B136766;38112526321C0815013C3D67;390B202308170153546246413D;3A0A07210D3124566E5F;3B0E03344845703E60;',
        ';003509001E2F554C4D4E453C51525D5F;010057586C646160;0200020E06100543;0300020721282923061F0565;0400042E2224533C7344;05360B04182526300F34335B633F3E74;060A1A13016246404B59;070C2D2B4A5E6B5A;0827111B0314082A0148413C3D;0920321C310316080148413C3D;0A35090319154754495C42;0B12070D1D2C174F50563E;0C1E2F05554C4D4E45717B3C51525D6D5F;0D57586C646160;0E02040E061043;0F360B0002040721282923061F653F;100A002E2224533C44;11000C182526300F34335B633E;12001A1303016246404B59;13002D032B4A5E6B6D5A;14350927111B0314082A0148413C6F3D;1520321C310316080168696A3D66;1619154754495C426E;1712070D1D2C174F5056727B3E;18041E2F554C4D4E453C51525D5F;19360B0457586C64613F60;1A0A020E06100543;1B020C0721282923061F0565;1C2E2224533C44;1D182526300F34335B633E;1E3509381A1303016246404B59;1F2D032B4A5E6B5A;2027111B14082A0148413C3D;2120321C3116080168696A3D66;22040319154754495C42;23360B0412070D1D2C174F50563F3E;240A1E2F05554C4D4E453C51525D5F;250C57586C646160;26020E06100543;27020721282923061F0565;2835092E2224533C6F44;29182526300F34335B633E;2A1A13016246404B5982;2B2D2B4A5E6B675A76;2C0427111B0314082A48413C3D;2D360B000420321C3116080168696A3F3D66;2E0A0019154754495C42;2F000C12070D1D2C174F50563E;30001E2F05554C4D4E45703C51525D5F;310057586C6461676D608E;323509020E0610054367;33020721282923061F057565;342E2224533C6E44;35182526300F34335B633E7974;3637041A13036246404B5982;37360B042D2B4A5E6B3F675A76;380A27111B14082A0148413C3D67;390C20321C3116080168696A3D66;3A0319154754495C42;3B12070D1D2C174F5056703E;',
        ';0000302007210D341556;01000217455D;020A0025262B2F060557586C5F;030B001406056246603C8F;0436000207282916105B6364656A;0537130E191F47483E;0622300F2C0168693F44;07021E33495C40413C;08090C04184A5E423D59;093504121A1B0308014C4D4E51524B3D5A;0A02272D321C1D232A4F507E61;0B1124535455433E66;0C0A2E2007210D341505566D;0D0B0217455D;0E3625262B2F0657586C;0F00140662463C4260;10000207282916105B6364656A3F79;1100130E191F47483E;1209350C0422300F032C01686944;1335000204031E33495C40413C6D;1418310308014A5E6B3D59;15121A1B0308014C4D4E51524B3D5A;160A02272D321C1D232A4F507E61;170B1124535455433C6F6E3E66;18362E2007210D341556;190217455D;1A25262B060557586C3F5F;1B14060562463C4260;1C09020C0407282916105B6364656A;1D3504130E03191F47483E;1E22300F032C01686944;1F02031E495C40413C;200A183108014A5E6B3D59;210B121A1B08014C4D4E51524B3D5A;223602272D321C1D232A4F507E61;231124535455433C3E66;242E2007210D34150556717C3F;25021745735D;26090C0425262B2F060557586C5F;27350414060562463C4260;280207282916105B6364656A74;29130E03191F47483E;2A0A22300F2C01686944;2B0B021E33495C40413C6F67;2C36381831034A5E6B3D59;2D00121A1B08014C4D4E51524B3D5A;2E0002272D321C1D232A4F507E613F;2F00112453545543727C3C3E66;3009000C042E2007210D34150556;313500020417455D676D;3225262B2F060557586C70675F;331406056246703C426084;340A0207282916105B6364656A;350B130E191F47486E3E;363622300F032C7544;37021E33495C40413C67;38183108014A5E6B3F3D675976;39121A1B08014C4D4E51524B3D5A;3A09020C04272D321C1D232A4F507E61;3B35041124535455433C3E66;',
        ';000A002E27202C2A475462464B;010B0002070D1E5666;02002F06150548456E5D;0300061705575868695B633C;040002130323495C645F;0507212829249060;0609341001534C4D4E415152;070212300F31031F3C61423F;080418220E032B080143403D44;090C041A1D14080833014A5E6B6C4F503D;0A0A022D1B16556A59;0B0B112526321C193C653E5A;0C2E27202C2A05475462464B6D;0D02070D1E5666;0E2F061548455D;0F000617575868695B633C85;10090002371323495C645F;11000721282903243F3E60;12000403341001534C4D4E415152;1300020C0412300F31031F3C61426D;140A18220E032B080143403D44;150B1A1D140833014A5E6B6C4F503D;16022D1B16556A59;17112526321C193C6F653E5A;182E27202C2A475462464B;1902070D1E5666;1A092F06150548455D;1B061705575868695B633C3F79;1C0204130323495C645F;1D0C040721282903243E60;1E0A03341001534C4D4E415152;1F0B0227300F311F3C6142;2018220E2B080143406E3D44;211A1D140833014A5E6B6C4F503D;22022D1B16556A59;23112526321C193C653E5A;24092E27202C2A0547546246717C4B;2502070D1E56733F66;26042F06150548455D;270C04061705575868695B633C;280A02130323495C645F;290B07212829243E60;2A341001534C4D4E415152;2B0212300F311F3C6F614267;2C3818220E032B0843403D44;2D001A1D140833014A5E6B5B4F503D78;2E0900022D1B16556A59;2F00112526321C19727C3C653F3E5A;3000042E27202C2A05475462464B;3100020C04070D1E56676D66;320A2F0615054845705D67;330B061705575868695B63703C74;34021323495C645F;3507212829243E60;36033410534C4D4E41755152;370212300F311F3C614267;380918220E2B080143403D6744;391A1D140833014A5E6B6C4F503F3D76;3A02042D1B16556A59;3B0C04112526321C193C653E5A;',
        ';00002E20391C246869655D59;010002345354495C5A;023509002707210D062A055B6356515277;0300132B06054C4D4E453C66;04000203142F1557586473614B3F;0512161743416A3E;060C072829310319015F;07360B02032C476C3C6E60;080A04182526300F1D1E0810014F503D;09041A081F01556246403D;0A022D224A5E6B4486;0B111B0E2333483C423E;0C35092E20321C24056869655D6D59;0D02345354495C5A;0E2707210D062A5B635651523F77;0F00132B064C4D4E453C66;1000020C03142F15575864614B;11360B001203161743416A3E;120A0004072829310319015F;13000204032C476C3C6D60;14182526300F1D1E0810014F503D;151A081F01556246403D;163509022D224A5E6B44;17111B0E2333483C6F423E;182E20321C246869655D3F59;1902345354495C5A;1A0C2707210D062A055B635651527F;1B360B3713032B06054C4D4E453C66;1C0A020403142F15575864614B;1D041203161743416A3E;1E0728293119015F;1F022C476C3C60;203509182526300F1D1E08104F503D;211A081F01556246403D;22022D224A5E6B3F447891;23111B0E2333483C423E;240C2E20321C24056869717C655D59;25360B021C5354495C6E5A;260A042707210D062A055B6356515280;270413032B06054C4D4E453C66;2802142F15575864614B;2912161743416A3E;2A35090728293119015F;2B022C476C3C6F6760;2C38182526300F1D1E08104F503F3D;2D001A081F01556246403D;2E0002092D224A5E6B4476;2F360B00111B0E233348727C3C423E;300A00042E20321C24056869655D59;31000204345354495C676D5A;322707210D062A055B6356705152677774;33132B06054C4D4E45703C66;34350902142F15575864614B;3512161743416A3E;36072829310319753F5F;37022C476C3C6760;380C182526300F1D1E0810014F503D67;39360B1A081F01556246403D;3A0A02042D224A5E6B44;3B04111B0E2333483C423E;',
        ';00090038041A221B194C4D4E44;0135000C042D321C2C335B6361655D77;02002E11130E1E06054754433C59;03001220070D0605565A;0400272F2A454142;050B252631032357583E66;06360A0324150162463C;07072128291D34174F50644B;080208015348553F3D5F;0902300F2B080168693D60;0A09041410495C403C6F;0B35090418161F4A5E6B6C5152403E;0C1A221B19054C4D4E6D44;0D2D321C2C335B6361655D77;0E2E11130E1E064754433C6E59;0F0B351220070D0306565A;10360A0027032F2A454142;1100252631032357583E66;12000324150162463C3F;1300072128291D34174F50644B6D;1409020408015348553D5F;1535020C04300F2B080168693D60;161410495C403C;1718161F4A5E6B6C51526A3E;181A221B194C4D4E4481;190B0A2E11130E031E06054754433C59;1A360A2E11130E031E06054754433C59;1B1220070D030605565A;1C27032F2A454173423F;1D252631032357583E66;1E090424150162463C;1F350C04072128291D34174F50644B;200208015348553D5F;2102300F2B080168693D60;221410495C403C92;230B18161F4A5E6B6C51526A3E7893;24360A1A221B19054C4D4E44;252D321C2C335B6361655D7F;26372E11130E031E06054754433C3F59;271220070D030605565A;280904272F2A454142;29350C042526312357583E66;2A2415016246703C;2B072128291D34174F50644B67;2C02085348556E3D5F;2D090002300F2B080168693D60;2E360A001410495C403C;2F0018161F4A5E6B6C51526A3E;30001A221B19054C4D4E717D3F4481;31002D321C2C335B6361655D676D8074;3209042E11130E1E06054754433C6F6759;33350C042720070D0605565A;34272F2A454142;35252631235758703E6687;36241562463C;370B072128291D34174F50644B67;38360A023A015348553D675F;3902300F2B08016869753D60;3A1410495C403C3F;3B18161F4A5E6B6C727D51526A3E76;',
        ';0000380C041A23104A5E6B5B63;010004122D1B13241F838A;020A002E11252622321C3406053C5D44;030B00200306330553544641;040007210D312B5659;050E031448453E5A;060E1D162F2A01575868694F503C6A;0719495C556466;0809020728292C081501515242653D;09021E081701474C4D4E3F3D;0A0C04300F3C6F614B5F;0B041843403E60;0C0A1A2310054A5E6B5B636D;0D0B122D1B1303241F838A94;0E2E11252622321C34063C5D44;0F002003063353546C624641;100007210D31032B5659;11000E031448453E5A;120900271D162F2A01575868694F503C6A;130019495C55643F6D66;14020C040728292C081501515242653D;1502041E081701474C4D4E3D;160A300F3C614B5F;170B1843403E60;181A23104A456B5B6378;19122D1B1303241F9583;1A2E11252622321C033406053C5D44;1B200306330553546C6246416E;1C0907210D31032B567359;1D0E1448453F3E5A;1E0C04271D163B2A01575868694F503C6A;1F0419495C556466;200A020728292C081501515242653D;210B021E081701474C4D4E3D;22300F3C614B5F;231843403E60;241A2310054A5E425B63;25122D1B1303241F;26092E11252622321C033406053C5D44;272006330553546C6246413F;280C0407210D312B5659;29040E1448453E5A;2A0A271D162F2A01575868694F50703C6A89;2B0B19495C55646766;2C020728292C0815515242653D;2D00021E081701474C4D4E3D;2E00300F3C614B5F;2F001843403E60;3009001A2310054A5E6B5B63717D7988;310037122D1B13241F3F676D;320C042E11252622321C3406053C6F5D6744;33042006330553546C624641;340A07210D312B5659;350B0E03144845703E5A;36271D162F2A575868694F503C6A;3719495C55646766;38020728292C081501515242653D67;39021E081701474C4D4E756E3D;3A09300F3C614B5F;3B184340727D3F3E60;',
        ';000A003837041A1316624640425D6A5F;01360B00042D194A5E6B4B60;020009111B032C06100548413C;030020321C310310061F056869;0400224754495C7344;05070D1D334F505651523F3E;063509232F01554C4D4E453C59;070C24575864615A;0802270E34082A01433D;09020721282908016E653D66;0A0A042B15536C3C6F;0B360B0412182526300F14175B633E;0C1A13031605624640425D6A6D5F;0D2D03194A5E6B4B60;0E2E111B33061048413C;0F0020321C31031E061F68693F;1035090022034754495C44;11000C070D1D334F505651523E;1200232F01554C4D4E453C59;130024575864616D5A;140A0204270E0F082A01433D;15360B0204072128290801653D66;162B15536C3C;17121825260D0F14175B633E;181A1316624640425D6A5F82;192D03194A5E6B4B3F60;1A35092E111B032C061048413C;1B0C20321C31031E061F056869;1C224754495C44;1D07121D334F505651523E;1E0A04232F01554C4D4E453C59;1F360B0424575864615A;2002270E34082A01433D;2102072128290801653D66;222B15536C3C;2312182526300F14175B633F3E;2435091A13031605624640425D6A5F;250C2D03194A5E6B4B60;262E111B2C06100548413C;2720321C311E061F056869;280A04224746495C44;29360B04070D1D334F505651523E;2A232F01554C4D4E45703C59;2B2457586461675A96;2C02270E34082A433D;2D0002072128290801653F3D66;2E3509002B15536C3C;2F000C12182526300F14175B633E;30001A1316624640717D425D6A5F82;31002D194A5E6B4B676D6076;320A042E111B2C06100548413C6F67;33360B0420321C311E061F0568696E;3422034754495C44;35070D1D334F50567051523E;36232F554C4D4E453C59;3724575864613F675A;38350902270E34082A01433D67;39020C07212829080175653D66;3A2B15536C3C;3B12182526300F14175B63727D3E7974;'
    ];

    static getTimeZhiIndex(hm: string): number {
        if (!hm) {
            return 0;
        }
        if (hm.length > 5) {
            hm = hm.substring(0, 5);
        }
        let x = 1;
        for (let i = 1; i < 22; i += 2) {
            if (hm >= ((i < 10 ? '0' : '') + i + ':00') && hm <= ((i + 1 < 10 ? '0' : '') + (i + 1) + ':59')) {
                return x;
            }
            x++;
        }
        return 0;
    }

    static convertTime(hm: string): string {
        return LunarUtil.ZHI[LunarUtil.getTimeZhiIndex(hm) + 1];
    }

    static getJiaZiIndex(ganZhi: string): number {
        return LunarUtil.index(ganZhi, LunarUtil.JIA_ZI, 0);
    }

    static hex(n: number): string {
        let hex = n.toString(16);
        if (hex.length < 2) {
            hex = '0' + hex;
        }
        return hex.toUpperCase();
    }

    static getDayYi(monthGanZhi: string, dayGanZhi: string): string[] {
        const l: string[] = [];
        const day = LunarUtil.hex(LunarUtil.getJiaZiIndex(dayGanZhi));
        const month = LunarUtil.hex(LunarUtil.getJiaZiIndex(monthGanZhi));
        let right = LunarUtil.DAY_YI_JI;
        let index = right.indexOf(day + '=');
        while (index > -1) {
            right = right.substring(index + 3);
            let left = right;
            if (left.indexOf('=') > -1) {
                left = left.substring(0, left.indexOf('=') - 2);
            }
            let matched = false;
            const months = left.substring(0, left.indexOf(':'));
            for (let i = 0, j = months.length; i < j; i += 2) {
                if (months.substring(i, i + 2) == month) {
                    matched = true;
                    break;
                }
            }
            if (matched) {
                let ys = left.substring(left.indexOf(':') + 1);
                ys = ys.substring(0, ys.indexOf(','));
                for (let i = 0, j = ys.length; i < j; i += 2) {
                    l.push(LunarUtil.YI_JI[parseInt(ys.substring(i, i + 2), 16)]);
                }
                break;
            }
            index = right.indexOf(day + '=');
        }
        if (l.length < 1) {
            l.push(LunarUtil.SHEN_SHA[0]);
        }
        return l;
    }

    static getDayJi(monthGanZhi: string, dayGanZhi: string): string[] {
        const l: string[] = [];
        const day = LunarUtil.hex(LunarUtil.getJiaZiIndex(dayGanZhi));
        const month = LunarUtil.hex(LunarUtil.getJiaZiIndex(monthGanZhi));
        let right = LunarUtil.DAY_YI_JI;
        let index = right.indexOf(day + '=');
        while (index > -1) {
            right = right.substring(index + 3);
            let left = right;
            if (left.indexOf('=') > -1) {
                left = left.substring(0, left.indexOf('=') - 2);
            }
            let matched = false;
            const months = left.substring(0, left.indexOf(':'));
            for (let i = 0, j = months.length; i < j; i += 2) {
                if (months.substring(i, i + 2) == month) {
                    matched = true;
                    break;
                }
            }
            if (matched) {
                const js = left.substring(left.indexOf(',') + 1);
                for (let i = 0, j = js.length; i < j; i += 2) {
                    l.push(LunarUtil.YI_JI[parseInt(js.substring(i, i + 2), 16)]);
                }
                break;
            }
            index = right.indexOf(day + '=');
        }
        if (l.length < 1) {
            l.push(LunarUtil.SHEN_SHA[0]);
        }
        return l;
    }

    static getDayJiShen(monthZhiIndex: number, dayGanZhi: string): string[] {
        const l: string[] = [];
        let m: number = monthZhiIndex - 2;
        if (m < 0) {
            m += 12;
        }
        let index: string = LunarUtil.getJiaZiIndex(dayGanZhi).toString(16).toUpperCase();
        if (index.length < 2) {
            index = '0' + index;
        }
        const matcher: RegExpExecArray | null = new RegExp(`;${index}(.[^;]*)`, 'g').exec(LunarUtil.DAY_SHEN_SHA[m]);
        if (matcher) {
            const data: string = matcher[1];
            for (let i: number = 0, j: number = data.length; i < j; i += 2) {
                const n: number = parseInt(data.substring(i, i + 2), 16);
                if (n < 60) {
                    l.push(LunarUtil.SHEN_SHA[n + 1]);
                }
            }
        }
        if (l.length < 1) {
            l.push(LunarUtil.SHEN_SHA[0]);
        }
        return l;
    }

    static getDayXiongSha(monthZhiIndex: number, dayGanZhi: string): string[] {
        const l: string[] = [];
        let m: number = monthZhiIndex - 2;
        if (m < 0) {
            m += 12;
        }
        let index: string = LunarUtil.getJiaZiIndex(dayGanZhi).toString(16).toUpperCase();
        if (index.length < 2) {
            index = '0' + index;
        }
        const matcher: RegExpExecArray | null = new RegExp(`;${index}(.[^;]*)`, 'g').exec(LunarUtil.DAY_SHEN_SHA[m]);
        if (matcher) {
            const data: string = matcher[1];
            for (let i: number = 0, j: number = data.length; i < j; i += 2) {
                const n: number = parseInt(data.substring(i, i + 2), 16);
                if (n >= 60) {
                    l.push(LunarUtil.SHEN_SHA[n + 1]);
                }
            }
        }
        if (l.length < 1) {
            l.push(LunarUtil.SHEN_SHA[0]);
        }
        return l;
    }

    static getTimeYi(dayGanZhi: string, timeGanZhi: string): string[] {
        const l: string[] = [];
        const day = LunarUtil.hex(LunarUtil.getJiaZiIndex(dayGanZhi));
        const time = LunarUtil.hex(LunarUtil.getJiaZiIndex(timeGanZhi));
        const index = LunarUtil.TIME_YI_JI.indexOf(day + time + '=');
        if (index > -1) {
            let left = LunarUtil.TIME_YI_JI.substring(index + 5);
            if (left.indexOf('=') > -1) {
                left = left.substring(0, left.indexOf('=') - 4);
            }
            const ys = left.substring(0, left.indexOf(','));
            for (let i = 0, j = ys.length; i < j; i += 2) {
                l.push(LunarUtil.YI_JI[parseInt(ys.substring(i, i + 2), 16)]);
            }
        }
        if (l.length < 1) {
            l.push(LunarUtil.SHEN_SHA[0]);
        }
        return l;
    }

    static getTimeJi(dayGanZhi: string, timeGanZhi: string): string[] {
        const l: string[] = [];
        const day = LunarUtil.hex(LunarUtil.getJiaZiIndex(dayGanZhi));
        const time = LunarUtil.hex(LunarUtil.getJiaZiIndex(timeGanZhi));
        const index = LunarUtil.TIME_YI_JI.indexOf(day + time + '=');
        if (index > -1) {
            let left = LunarUtil.TIME_YI_JI.substring(index + 5);
            if (left.indexOf('=') > -1) {
                left = left.substring(0, left.indexOf('=') - 4);
            }
            const js = left.substring(left.indexOf(',') + 1);
            for (let i = 0, j = js.length; i < j; i += 2) {
                l.push(LunarUtil.YI_JI[parseInt(js.substring(i, i + 2), 16)]);
            }
        }
        if (l.length < 1) {
            l.push(LunarUtil.SHEN_SHA[0]);
        }
        return l;
    }

    static getXunIndex(ganZhi: string): number {
        const gan = LunarUtil.find(ganZhi, LunarUtil.GAN)!;
        const zhi = LunarUtil.find(ganZhi, LunarUtil.ZHI)!;
        let diff = gan.index - zhi.index;
        if (diff < 0) {
            diff += 12;
        }
        return Math.floor(diff / 2);
    }

    static getXun(ganZhi: string): string {
        return LunarUtil.XUN[LunarUtil.getXunIndex(ganZhi)];
    }

    static getXunKong(ganZhi: string): string {
        return LunarUtil.XUN_KONG[LunarUtil.getXunIndex(ganZhi)];
    }

    static find(s: string, arr: Array<string>): IndexValue | null {
        for (let i = 0, j = arr.length; i < j; i++) {
            const v = arr[i];
            if (v.length < 1) {
                continue;
            }
            if (s.indexOf(v) > -1) {
                return {
                    index: i,
                    value: v
                }
            }
        }
        return null;
    }

    static index(name: string, names: Array<string>, offset: number): number {
        for (let i = 0, j = names.length; i < j; i++) {
            if (names[i] === name) {
                return i + offset;
            }
        }
        return -1;
    }

}
