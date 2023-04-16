import {LunarUtil} from './LunarUtil';
import {SolarUtil} from './SolarUtil';
import {TaoUtil} from './TaoUtil';
import {Dictionary} from './Dictionary';

export class I18n {
    private static _DEFAULT_LANG: string = 'chs';
    private static _LANG: string;
    private static _INIT: boolean = false;

    private static _MESSAGES: {[key: string]: {[key: string]: string}} = {
        'chs': {
            'tg.jia': '甲',
            'tg.yi': '乙',
            'tg.bing': '丙',
            'tg.ding': '丁',
            'tg.wu': '戊',
            'tg.ji': '己',
            'tg.geng': '庚',
            'tg.xin': '辛',
            'tg.ren': '壬',
            'tg.gui': '癸',
            'dz.zi': '子',
            'dz.chou': '丑',
            'dz.yin': '寅',
            'dz.mao': '卯',
            'dz.chen': '辰',
            'dz.si': '巳',
            'dz.wu': '午',
            'dz.wei': '未',
            'dz.shen': '申',
            'dz.you': '酉',
            'dz.xu': '戌',
            'dz.hai': '亥',
            'zx.jian': '建',
            'zx.chu': '除',
            'zx.man': '满',
            'zx.ping': '平',
            'zx.ding': '定',
            'zx.zhi': '执',
            'zx.po': '破',
            'zx.wei': '危',
            'zx.cheng': '成',
            'zx.shou': '收',
            'zx.kai': '开',
            'zx.bi': '闭',
            'jz.jiaZi': '甲子',
            'jz.yiChou': '乙丑',
            'jz.bingYin': '丙寅',
            'jz.dingMao': '丁卯',
            'jz.wuChen': '戊辰',
            'jz.jiSi': '己巳',
            'jz.gengWu': '庚午',
            'jz.xinWei': '辛未',
            'jz.renShen': '壬申',
            'jz.guiYou': '癸酉',
            'jz.jiaXu': '甲戌',
            'jz.yiHai': '乙亥',
            'jz.bingZi': '丙子',
            'jz.dingChou': '丁丑',
            'jz.wuYin': '戊寅',
            'jz.jiMao': '己卯',
            'jz.gengChen': '庚辰',
            'jz.xinSi': '辛巳',
            'jz.renWu': '壬午',
            'jz.guiWei': '癸未',
            'jz.jiaShen': '甲申',
            'jz.yiYou': '乙酉',
            'jz.bingXu': '丙戌',
            'jz.dingHai': '丁亥',
            'jz.wuZi': '戊子',
            'jz.jiChou': '己丑',
            'jz.gengYin': '庚寅',
            'jz.xinMao': '辛卯',
            'jz.renChen': '壬辰',
            'jz.guiSi': '癸巳',
            'jz.jiaWu': '甲午',
            'jz.yiWei': '乙未',
            'jz.bingShen': '丙申',
            'jz.dingYou': '丁酉',
            'jz.wuXu': '戊戌',
            'jz.jiHai': '己亥',
            'jz.gengZi': '庚子',
            'jz.xinChou': '辛丑',
            'jz.renYin': '壬寅',
            'jz.guiMao': '癸卯',
            'jz.jiaChen': '甲辰',
            'jz.yiSi': '乙巳',
            'jz.bingWu': '丙午',
            'jz.dingWei': '丁未',
            'jz.wuShen': '戊申',
            'jz.jiYou': '己酉',
            'jz.gengXu': '庚戌',
            'jz.xinHai': '辛亥',
            'jz.renZi': '壬子',
            'jz.guiChou': '癸丑',
            'jz.jiaYin': '甲寅',
            'jz.yiMao': '乙卯',
            'jz.bingChen': '丙辰',
            'jz.dingSi': '丁巳',
            'jz.wuWu': '戊午',
            'jz.jiWei': '己未',
            'jz.gengShen': '庚申',
            'jz.xinYou': '辛酉',
            'jz.renXu': '壬戌',
            'jz.guiHai': '癸亥',
            'sx.rat': '鼠',
            'sx.ox': '牛',
            'sx.tiger': '虎',
            'sx.rabbit': '兔',
            'sx.dragon': '龙',
            'sx.snake': '蛇',
            'sx.horse': '马',
            'sx.goat': '羊',
            'sx.monkey': '猴',
            'sx.rooster': '鸡',
            'sx.dog': '狗',
            'sx.pig': '猪',
            'dw.long': '龙',
            'dw.niu': '牛',
            'dw.gou': '狗',
            'dw.yang': '羊',
            'dw.tu': '兔',
            'dw.shu': '鼠',
            'dw.ji': '鸡',
            'dw.ma': '马',
            'dw.hu': '虎',
            'dw.zhu': '猪',
            'dw.hou': '猴',
            'dw.she': '蛇',
            'dw.huLi': '狐',
            'dw.yan': '燕',
            'dw.bao': '豹',
            'dw.yuan': '猿',
            'dw.yin': '蚓',
            'dw.lu': '鹿',
            'dw.wu': '乌',
            'dw.jiao': '蛟',
            'dw.lang': '狼',
            'dw.fu': '蝠',
            'dw.zhang': '獐',
            'dw.xu': '獝',
            'dw.xie': '獬',
            'dw.han': '犴',
            'dw.he': '貉',
            'dw.zhi': '彘',
            'wx.jin': '金',
            'wx.mu': '木',
            'wx.shui': '水',
            'wx.huo': '火',
            'wx.tu': '土',
            'wx.ri': '日',
            'wx.yue': '月',
            'n.zero': '〇',
            'n.one': '一',
            'n.two': '二',
            'n.three': '三',
            'n.four': '四',
            'n.five': '五',
            'n.six': '六',
            'n.seven': '七',
            'n.eight': '八',
            'n.nine': '九',
            'n.ten': '十',
            'n.eleven': '十一',
            'n.twelve': '十二',
            'w.sun': '日',
            'w.mon': '一',
            'w.tues': '二',
            'w.wed': '三',
            'w.thur': '四',
            'w.fri': '五',
            'w.sat': '六',
            'xz.aries': '白羊',
            'xz.taurus': '金牛',
            'xz.gemini': '双子',
            'xz.cancer': '巨蟹',
            'xz.leo': '狮子',
            'xz.virgo': '处女',
            'xz.libra': '天秤',
            'xz.scorpio': '天蝎',
            'xz.sagittarius': '射手',
            'xz.capricornus': '摩羯',
            'xz.aquarius': '水瓶',
            'xz.pisces': '双鱼',
            'bg.qian': '乾',
            'bg.kun': '坤',
            'bg.zhen': '震',
            'bg.xun': '巽',
            'bg.kan': '坎',
            'bg.li': '离',
            'bg.gen': '艮',
            'bg.dui': '兑',
            'ps.center': '中',
            'ps.dong': '东',
            'ps.nan': '南',
            'ps.xi': '西',
            'ps.bei': '北',
            'ps.zhong': '中宫',
            'ps.zhengDong': '正东',
            'ps.zhengNan': '正南',
            'ps.zhengXi': '正西',
            'ps.zhengBei': '正北',
            'ps.dongBei': '东北',
            'ps.dongNan': '东南',
            'ps.xiBei': '西北',
            'ps.xiNan': '西南',
            'ps.wai': '外',
            'ps.fangNei': '房内',
            'jq.dongZhi': '冬至',
            'jq.xiaoHan': '小寒',
            'jq.daHan': '大寒',
            'jq.liChun': '立春',
            'jq.yuShui': '雨水',
            'jq.jingZhe': '惊蛰',
            'jq.chunFen': '春分',
            'jq.qingMing': '清明',
            'jq.guYu': '谷雨',
            'jq.liXia': '立夏',
            'jq.xiaoMan': '小满',
            'jq.mangZhong': '芒种',
            'jq.xiaZhi': '夏至',
            'jq.xiaoShu': '小暑',
            'jq.daShu': '大暑',
            'jq.liQiu': '立秋',
            'jq.chuShu': '处暑',
            'jq.baiLu': '白露',
            'jq.qiuFen': '秋分',
            'jq.hanLu': '寒露',
            'jq.shuangJiang': '霜降',
            'jq.liDong': '立冬',
            'jq.xiaoXue': '小雪',
            'jq.daXue': '大雪',
            'sn.qingLong': '青龙',
            'sn.baiHu': '白虎',
            'sn.zhuQue': '朱雀',
            'sn.xuanWu': '玄武',
            'sn.mingTang': '明堂',
            'sn.tianXing': '天刑',
            'sn.tianDe': '天德',
            'sn.jinKui': '金匮',
            'sn.yuTang': '玉堂',
            'sn.siMing': '司命',
            'sn.tianLao': '天牢',
            'sn.gouChen': '勾陈',
            'ss.biJian': '比肩',
            'ss.jieCai': '劫财',
            'ss.shiShen': '食神',
            'ss.shangGuan': '伤官',
            'ss.pianCai': '偏财',
            'ss.zhengCai': '正财',
            'ss.qiSha': '七杀',
            'ss.zhengGuan': '正官',
            'ss.pianYin': '偏印',
            'ss.zhengYin': '正印',
            's.none': '无',
            's.huangDao': '黄道',
            's.heiDao': '黑道',
            's.goodLuck': '吉',
            's.badLuck': '凶',
            'jr.chuXi': '除夕',
            'jr.chunJie': '春节',
            'jr.yuanXiao': '元宵节',
            'jr.longTou': '龙头节',
            'jr.duanWu': '端午节',
            'jr.qiXi': '七夕节',
            'jr.zhongQiu': '中秋节',
            'jr.chongYang': '重阳节',
            'jr.laBa': '腊八节',
            'jr.yuanDan': '元旦节',
            'jr.qingRen': '情人节',
            'jr.fuNv': '妇女节',
            'jr.zhiShu': '植树节',
            'jr.xiaoFei': '消费者权益日',
            'jr.wuYi': '劳动节',
            'jr.qingNian': '青年节',
            'jr.erTong': '儿童节',
            'jr.yuRen': '愚人节',
            'jr.jianDang': '建党节',
            'jr.jianJun': '建军节',
            'jr.jiaoShi': '教师节',
            'jr.guoQing': '国庆节',
            'jr.wanShengYe': '万圣节前夜',
            'jr.wanSheng': '万圣节',
            'jr.pingAn': '平安夜',
            'jr.shengDan': '圣诞节',
            'ds.changSheng': '长生',
            'ds.muYu': '沐浴',
            'ds.guanDai': '冠带',
            'ds.linGuan': '临官',
            'ds.diWang': '帝旺',
            'ds.shuai': '衰',
            'ds.bing': '病',
            'ds.si': '死',
            'ds.mu': '墓',
            'ds.jue': '绝',
            'ds.tai': '胎',
            'ds.yang': '养',
            'h.first': '初候',
            'h.second': '二候',
            'h.third': '三候',
            'h.qiuYinJie': '蚯蚓结',
            'h.miJiao': '麋角解',
            'h.shuiQuan': '水泉动',
            'h.yanBei': '雁北乡',
            'h.queShi': '鹊始巢',
            'h.zhiShi': '雉始雊',
            'h.jiShi': '鸡始乳',
            'h.zhengNiao': '征鸟厉疾',
            'h.shuiZe': '水泽腹坚',
            'h.dongFeng': '东风解冻',
            'h.zheChongShiZhen': '蛰虫始振',
            'h.yuZhi': '鱼陟负冰',
            'h.taJi': '獭祭鱼',
            'h.houYan': '候雁北',
            'h.caoMuMengDong': '草木萌动',
            'h.taoShi': '桃始华',
            'h.cangGeng': '仓庚鸣',
            'h.yingHua': '鹰化为鸠',
            'h.xuanNiaoZhi': '玄鸟至',
            'h.leiNai': '雷乃发声',
            'h.shiDian': '始电',
            'h.tongShi': '桐始华',
            'h.tianShu': '田鼠化为鴽',
            'h.hongShi': '虹始见',
            'h.pingShi': '萍始生',
            'h.mingJiu': '鸣鸠拂奇羽',
            'h.daiSheng': '戴胜降于桑',
            'h.louGuo': '蝼蝈鸣',
            'h.qiuYinChu': '蚯蚓出',
            'h.wangGua': '王瓜生',
            'h.kuCai': '苦菜秀',
            'h.miCao': '靡草死',
            'h.maiQiu': '麦秋至',
            'h.tangLang': '螳螂生',
            'h.juShi': '鵙始鸣',
            'h.fanShe': '反舌无声',
            'h.luJia': '鹿角解',
            'h.tiaoShi': '蜩始鸣',
            'h.banXia': '半夏生',
            'h.wenFeng': '温风至',
            'h.xiShuai': '蟋蟀居壁',
            'h.yingShi': '鹰始挚',
            'h.fuCao': '腐草为萤',
            'h.tuRun': '土润溽暑',
            'h.daYu': '大雨行时',
            'h.liangFeng': '凉风至',
            'h.baiLu': '白露降',
            'h.hanChan': '寒蝉鸣',
            'h.yingNai': '鹰乃祭鸟',
            'h.tianDi': '天地始肃',
            'h.heNai': '禾乃登',
            'h.hongYanLai': '鸿雁来',
            'h.xuanNiaoGui': '玄鸟归',
            'h.qunNiao': '群鸟养羞',
            'h.leiShi': '雷始收声',
            'h.zheChongPiHu': '蛰虫坯户',
            'h.shuiShiHe': '水始涸',
            'h.hongYanLaiBin': '鸿雁来宾',
            'h.queRu': '雀入大水为蛤',
            'h.juYou': '菊有黄花',
            'h.caiNai': '豺乃祭兽',
            'h.caoMuHuangLuo': '草木黄落',
            'h.zheChongXianFu': '蛰虫咸俯',
            'h.shuiShiBing': '水始冰',
            'h.diShi': '地始冻',
            'h.zhiRu': '雉入大水为蜃',
            'h.hongCang': '虹藏不见',
            'h.tianQi': '天气上升地气下降',
            'h.biSe': '闭塞而成冬',
            'h.heDan': '鹖鴠不鸣',
            'h.huShi': '虎始交',
            'h.liTing': '荔挺出',
            'ts.zhan': '占',
            'ts.hu': '户',
            'ts.win': '窗',
            'ts.fang': '房',
            'ts.chuang': '床',
            'ts.lu': '炉',
            'ts.zao': '灶',
            'ts.dui': '碓',
            'ts.mo': '磨',
            'ts.xi': '栖',
            'ts.chu': '厨',
            'ts.ce': '厕',
            'ts.cang': '仓',
            'ts.cangKu': '仓库',
            'ts.daMen': '大门',
            'ts.men': '门',
            'ts.tang': '堂'
        },
        'en': {
            'sx.rat': 'Rat',
            'sx.ox': 'Ox',
            'sx.tiger': 'Tiger',
            'sx.rabbit': 'Rabbit',
            'sx.dragon': 'Dragon',
            'sx.snake': 'Snake',
            'sx.horse': 'Horse',
            'sx.goat': 'Goat',
            'sx.monkey': 'Monkey',
            'sx.rooster': 'Rooster',
            'sx.dog': 'Dog',
            'sx.pig': 'Pig',
            'dw.long': 'Dragon',
            'dw.niu': 'Ox',
            'dw.gou': 'Dog',
            'dw.yang': 'Goat',
            'dw.tu': 'Rabbit',
            'dw.shu': 'Rat',
            'dw.ji': 'Rooster',
            'dw.ma': 'Horse',
            'dw.hu': 'Tiger',
            'dw.zhu': 'Pig',
            'dw.hou': 'Monkey',
            'dw.she': 'Snake',
            'dw.huLi': 'Fox',
            'dw.yan': 'Swallow',
            'dw.bao': 'Leopard',
            'dw.yuan': 'Ape',
            'dw.yin': 'Earthworm',
            'dw.lu': 'Deer',
            'dw.wu': 'Crow',
            'dw.lang': 'Wolf',
            'dw.fu': 'Bat',
            'wx.jin': 'Metal',
            'wx.mu': 'Wood',
            'wx.shui': 'Water',
            'wx.huo': 'Fire',
            'wx.tu': 'Earth',
            'wx.ri': 'Sun',
            'wx.yue': 'Moon',
            'n.zero': '0',
            'n.one': '1',
            'n.two': '2',
            'n.three': '3',
            'n.four': '4',
            'n.five': '5',
            'n.six': '6',
            'n.seven': '7',
            'n.eight': '8',
            'n.nine': '9',
            'n.ten': '10',
            'n.eleven': '11',
            'n.twelve': '12',
            'w.sun': 'Sunday',
            'w.mon': 'Monday',
            'w.tues': 'Tuesday',
            'w.wed': 'Wednesday',
            'w.thur': 'Thursday',
            'w.fri': 'Friday',
            'w.sat': 'Saturday',
            'xz.aries': 'Aries',
            'xz.taurus': 'Taurus',
            'xz.gemini': 'Gemini',
            'xz.cancer': 'Cancer',
            'xz.leo': 'Leo',
            'xz.virgo': 'Virgo',
            'xz.libra': 'Libra',
            'xz.scorpio': 'Scorpio',
            'xz.sagittarius': 'Sagittarius',
            'xz.capricornus': 'Capricornus',
            'xz.aquarius': 'Aquarius',
            'xz.pisces': 'Pisces',
            'bg.qian': 'Qian',
            'bg.kun': 'Kun',
            'bg.zhen': 'Zhen',
            'bg.xun': 'Xun',
            'bg.kan': 'Kan',
            'bg.li': 'Li',
            'bg.gen': 'Gen',
            'bg.dui': 'Dui',
            'ps.center': 'Center',
            'ps.dong': 'East',
            'ps.nan': 'South',
            'ps.xi': 'West',
            'ps.bei': 'North',
            'ps.zhong': 'Center',
            'ps.zhengDong': 'East',
            'ps.zhengNan': 'South',
            'ps.zhengXi': 'West',
            'ps.zhengBei': 'North',
            'ps.dongBei': 'Northeast',
            'ps.dongNan': 'Southeast',
            'ps.xiBei': 'Northwest',
            'ps.xiNan': 'Southwest',
            'jq.dongZhi': 'Winter Solstice',
            'jq.xiaoHan': 'Lesser Cold',
            'jq.daHan': 'Great Cold',
            'jq.liChun': 'Spring Beginning',
            'jq.yuShui': 'Rain Water',
            'jq.jingZhe': 'Awakening from Hibernation',
            'jq.chunFen': 'Spring Equinox',
            'jq.qingMing': 'Fresh Green',
            'jq.guYu': 'Grain Rain',
            'jq.liXia': 'Beginning of Summer',
            'jq.xiaoMan': 'Lesser Fullness',
            'jq.mangZhong': 'Grain in Ear',
            'jq.xiaZhi': 'Summer Solstice',
            'jq.xiaoShu': 'Lesser Heat',
            'jq.daShu': 'Greater Heat',
            'jq.liQiu': 'Beginning of Autumn',
            'jq.chuShu': 'End of Heat',
            'jq.baiLu': 'White Dew',
            'jq.qiuFen': 'Autumnal Equinox',
            'jq.hanLu': 'Cold Dew',
            'jq.shuangJiang': 'First Frost',
            'jq.liDong': 'Beginning of Winter',
            'jq.xiaoXue': 'Light Snow',
            'jq.daXue': 'Heavy Snow',
            'sn.qingLong': 'Azure Dragon',
            'sn.baiHu': 'White Tiger',
            'sn.zhuQue': 'Rosefinch',
            'sn.xuanWu': 'Black Tortoise',
            's.none': 'None',
            's.goodLuck': 'Good luck',
            's.badLuck': 'Bad luck',
            'jr.chuXi': 'Chinese New Year\'s Eve',
            'jr.chunJie': 'Luna New Year',
            'jr.yuanXiao': 'Lantern Festival',
            'jr.duanWu': 'Dragon Boat Festival',
            'jr.qiXi': 'Begging Festival',
            'jr.zhongQiu': 'Mid-Autumn Festival',
            'jr.laBa': 'Laba Festival',
            'jr.yuanDan': 'New Year\'s Day',
            'jr.qingRen': 'Valentine\'s Day',
            'jr.fuNv': 'Women\'s Day',
            'jr.xiaoFei': 'Consumer Rights Day',
            'jr.zhiShu': 'Arbor Day',
            'jr.wuYi': 'International Worker\'s Day',
            'jr.erTong': 'Children\'s Day',
            'jr.qingNian': 'Youth Day',
            'jr.yuRen': 'April Fools\' Day',
            'jr.jianDang': 'Party\'s Day',
            'jr.jianJun': 'Army Day',
            'jr.jiaoShi': 'Teachers\' Day',
            'jr.guoQing': 'National Day',
            'jr.wanShengYe': 'All Saints\' Eve',
            'jr.wanSheng': 'All Saints\' Day',
            'jr.pingAn': 'Christmas Eve',
            'jr.shengDan': 'Christmas Day',
            'ts.win': 'Window',
            'ts.fang': 'Room',
            'ts.chuang': 'Bed',
            'ts.lu': 'Stove',
            'ts.mo': 'Mill',
            'ts.chu': 'Kitchen',
            'ts.ce': 'Toilet',
            'ts.cang': 'Depot',
            'ts.cangKu': 'Depot',
            'ts.daMen': 'Door',
            'ts.men': 'Door',
            'ts.tang': 'Hall'
        }
    };

    private static _OBJS: {[key: string]: LunarUtil | SolarUtil | TaoUtil} = {
        'LunarUtil': LunarUtil,
        'SolarUtil': SolarUtil,
        'TaoUtil': TaoUtil
    };

    private static _DICT_STRING: {[key: string]: {[key: string]: Dictionary<string>}} = {
        'LunarUtil': {
            'TIAN_SHEN_TYPE': new Dictionary<string>(),
            'TIAN_SHEN_TYPE_LUCK': new Dictionary<string>(),
            'XIU_LUCK': new Dictionary<string>(),
            'LU': new Dictionary<string>(),
            'XIU': new Dictionary<string>(),
            'SHA': new Dictionary<string>(),
            'POSITION_DESC': new Dictionary<string>(),
            'NAYIN': new Dictionary<string>(),
            'WU_XING_GAN': new Dictionary<string>(),
            'WU_XING_ZHI': new Dictionary<string>(),
            'SHOU': new Dictionary<string>(),
            'GONG': new Dictionary<string>(),
            'FESTIVAL': new Dictionary<string>(),
            'ZHENG': new Dictionary<string>(),
            'ANIMAL': new Dictionary<string>(),
            'SHI_SHEN_GAN': new Dictionary<string>(),
            'SHI_SHEN_ZHI': new Dictionary<string>()
        },
        'SolarUtil': {
            'FESTIVAL': new Dictionary<string>()
        },
        'TaoUtil': {
            'BA_HUI': new Dictionary<string>(),
            'BA_JIE': new Dictionary<string>()
        }
    };

    private static _DICT_NUMBER: {[key: string]: {[key: string]: Dictionary<number>}} = {
        'LunarUtil': {
            'ZHI_TIAN_SHEN_OFFSET': new Dictionary<number>(),
            'CHANG_SHENG_OFFSET': new Dictionary<number>()
        }
    };

    private static _DICT_ARRAY: {[key: string]: {[key: string]: Dictionary<string[]>}} = {
        'LunarUtil': {
            'ZHI_HIDE_GAN': new Dictionary<string[]>()
        }
    };

    private static _ARRAYS: {[key: string]: {[key: string]: Array<string>}} = {
        'LunarUtil': {
            'GAN': [],
            'ZHI': [],
            'JIA_ZI': [],
            'ZHI_XING': [],
            'XUN': [],
            'XUN_KONG': [],
            'CHONG': [],
            'CHONG_GAN': [],
            'CHONG_GAN_TIE': [],
            'HE_GAN_5': [],
            'HE_ZHI_6': [],
            'SHENGXIAO': [],
            'NUMBER': [],
            'POSITION_XI': [],
            'POSITION_YANG_GUI': [],
            'POSITION_YIN_GUI': [],
            'POSITION_FU': [],
            'POSITION_FU_2': [],
            'POSITION_CAI': [],
            'POSITION_TAI_SUI_YEAR': [],
            'POSITION_GAN': [],
            'POSITION_ZHI': [],
            'JIE_QI': [],
            'JIE_QI_IN_USE': [],
            'TIAN_SHEN': [],
            'SHEN_SHA': [],
            'PENGZU_GAN': [],
            'PENGZU_ZHI': [],
            'MONTH_ZHI': [],
            'CHANG_SHENG': [],
            'HOU': [],
            'WU_HOU': [],
            'POSITION_TAI_DAY': [],
            'POSITION_TAI_MONTH': [],
            'YI_JI': []
        },
        'SolarUtil': {
            'WEEK': [],
            'XINGZUO': []
        },
        'TaoUtil': {
            'AN_WU': []
        }
    };

    private static updateArray(c: string) {
        const v = I18n._ARRAYS[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const arr = v[k];
            for (let i = 0, j = arr.length; i < j; i++) {
                o[k][i] = arr[i].replace(/{(.[^}]*)}/g, ($0: string, $1: string) => {
                    return I18n.getMessage($1);
                });
            }
        }
    }

    private static updateStringDictionary(c: string) {
        const v = I18n._DICT_STRING[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const dict: Dictionary<string> = v[k];
            dict.keys().forEach(key => {
                const i = key.replace(/{(.[^}]*)}/g, ($0: string, $1: string) => {
                    return I18n.getMessage($1);
                });
                const j = dict.get(key).replace(/{(.[^}]*)}/g, ($0: string, $1: string) => {
                    return I18n.getMessage($1);
                });
                o[k].set(i, j);
            });
        }
    }

    private static updateNumberDictionary(c: string) {
        const v = I18n._DICT_NUMBER[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const dict: Dictionary<number> = v[k];
            dict.keys().forEach(key => {
                const i = key.replace(/{(.[^}]*)}/g, ($0: string, $1: string) => {
                    return I18n.getMessage($1);
                });
                o[k].set(i, dict.get(key));
            });
        }
    }

    private static updateArrayDictionary(c: string) {
        const v = I18n._DICT_ARRAY[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const dict: Dictionary<string[]> = v[k];
            dict.keys().forEach(key => {
                const x = key.replace(/{(.[^}]*)}/g, ($0: string, $1: string) => {
                    return I18n.getMessage($1);
                });
                const arr = dict.get(key);
                for (let i = 0, j = arr.length; i < j; i++) {
                    arr[i] = arr[i].replace(/{(.[^}]*)}/g, ($0: string, $1: string) => {
                        return I18n.getMessage($1);
                    });
                }
                o[k].set(x, arr);
            });
        }
    }

    private static update() {
        for (let c in I18n._ARRAYS) {
            I18n.updateArray(c);
        }
        for (let c in I18n._DICT_STRING) {
            I18n.updateStringDictionary(c);
        }
        for (let c in I18n._DICT_NUMBER) {
            I18n.updateNumberDictionary(c);
        }
        for (let c in I18n._DICT_ARRAY) {
            I18n.updateArrayDictionary(c);
        }
    }

    static setMessages(lang: string, messages: {[key: string]: string}) {
        if (!messages) {
            return;
        }
        if (!I18n._MESSAGES[lang]) {
            I18n._MESSAGES[lang] = {};
        }
        for (const key in messages) {
            I18n._MESSAGES[lang][key] = messages[key];
        }
        I18n.update();
    }

    static getMessage(key: string): string {
        let s = I18n._MESSAGES[I18n._LANG][key];
        if (!s) {
            s = I18n._MESSAGES[I18n._DEFAULT_LANG][key];
        }
        if (!s) {
            s = key;
        }
        return s;
    }

    static setLanguage(lang: string) {
        if (I18n._MESSAGES[lang]) {
            I18n._LANG = lang;
            I18n.update();
        }
    }

    static getLanguage(): string {
        return I18n._LANG;
    }

    private static initArray(c: string) {
        const v = I18n._ARRAYS[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            v[k].length = 0;
            const arr = o[k];
            for (let i = 0, j = arr.length; i < j; i++) {
                v[k].push(arr[i]);
            }
        }
    }

    private static initArrayDictionary(c: string) {
        const v = I18n._DICT_ARRAY[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const dict: Dictionary<string[]> = o[k];
            dict.keys().forEach(key => {
                v[k].set(key, dict.get(key));
            });
        }
    }

    private static initStringDictionary(c: string) {
        const v = I18n._DICT_STRING[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const dict: Dictionary<string> = o[k];
            dict.keys().forEach(key => {
                v[k].set(key, dict.get(key));
            });
        }
    }

    private static initNumberDictionary(c: string) {
        const v = I18n._DICT_NUMBER[c];
        const o = I18n._OBJS[c];
        for (let k in v) {
            const dict: Dictionary<number> = o[k];
            dict.keys().forEach(key => {
                v[k].set(key, dict.get(key));
            });
        }
    }

    static init() {
        if (I18n._INIT) {
            return;
        }
        I18n._INIT = true;
        for (let c in I18n._ARRAYS) {
            I18n.initArray(c);
        }
        for (let c in I18n._DICT_STRING) {
            I18n.initStringDictionary(c);
        }
        for (let c in I18n._DICT_NUMBER) {
            I18n.initNumberDictionary(c);
        }
        for (let c in I18n._DICT_ARRAY) {
            I18n.initArrayDictionary(c);
        }
        I18n.setLanguage(I18n._DEFAULT_LANG);
    }

}
