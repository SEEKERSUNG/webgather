/*
 * 站点数据
 * 新增网站时，在对应分类的 items 中追加 { name, url, desc } 即可。
 * desc 可留空。
 */
window.SITE_DATA = {
  title: "有用网站大推荐",
  tagline: "一份持续收集的实用网站清单",
  sections: [
    {
      id: "discover",
      name: "发现 · 参考",
      subsections: [
        {
          name: "",
          items: [
            { name: "ALLDATASHEETCN", url: "https://www.alldatasheetcn.com/", desc: "电子元件数据搜索" },
            { name: "观沧海", url: "https://www.ageeye.cn/", desc: "地图分享知识" },
            { name: "默沙东诊疗手册", url: "https://www.msdmanuals.cn/", desc: "自 1899 年备受信任的医学信息提供者" },
            { name: "APESK 心理测试", url: "http://www.apesk.com/xinliceshi/", desc: "经典心理测试题集" }
          ]
        }
      ]
    },
    {
      id: "geek",
      name: "极客",
      subsections: [
        {
          name: "学习交流",
          items: [
            { name: "OSCHINA", url: "https://www.oschina.net/", desc: "中文开源技术交流社区" },
            { name: "腾讯云开发者社区", url: "https://cloud.tencent.com/developer", desc: "云 + 社区" },
            { name: "菜鸟教程", url: "https://www.runoob.com/", desc: "学的不仅是技术，更是梦想！" },
            { name: "掘金", url: "https://juejin.cn/", desc: "代码不止，掘金不停" },
            { name: "CSDN 社区", url: "https://bbs.csdn.net/", desc: "开发者学习和交流的平台" },
            { name: "V2EX", url: "https://www.v2ex.com/", desc: "创意工作者们的社区" },
            { name: "SegmentFault 思否", url: "https://segmentfault.com/", desc: "开发者问答社区" },
            { name: "莫烦 Python", url: "https://mofanpy.com/", desc: "Python 学习网站" }
          ]
        },
        {
          name: "代码托管 · 开发平台",
          items: [
            { name: "GitHub", url: "https://github.com/", desc: "全球最大的代码托管与协作平台" },
            { name: "CODING", url: "https://coding.net/", desc: "一站式软件研发管理平台" },
            { name: "Gitee", url: "https://gitee.com/", desc: "基于 Git 的代码托管和研发协作平台" }
          ]
        },
        {
          name: "前端框架",
          items: [
            { name: "Foundation", url: "https://get.foundation/", desc: "先进的自适应前端框架" },
            { name: "Bootstrap 中文网", url: "https://www.bootcss.com/", desc: "Bootstrap 中文文档与资源" },
            { name: "FrozenUI", url: "http://frozenui.github.io/", desc: "专注于移动 Web 的 UI 框架，基于腾讯手机 QQ 规范" },
            { name: "WeUI", url: "https://weui.io/", desc: "微信官方设计团队打造的 UI 库" },
            { name: "MUI", url: "https://dev.dcloud.net.cn/mui/", desc: "最接近原生 APP 体验的高性能前端框架" },
            { name: "Semantic UI", url: "https://semantic-ui.com/", desc: "语义化的前端 UI 框架" },
            { name: "Pure", url: "https://purecss.io/", desc: "轻量级 CSS 框架" }
          ]
        },
        {
          name: "工具",
          items: [
            { name: "Devhints", url: "https://devhints.io/", desc: "框架代码、命令快速查询" },
            { name: "Can I use", url: "https://caniuse.com/", desc: "浏览器兼容性查询" },
            { name: "ProcessOn", url: "https://www.processon.com/", desc: "免费在线作图、思维导图、流程图，实时协作" },
            { name: "在线工具", url: "https://tool.lu/", desc: "程序员的工具箱" },
            { name: "useful-tools", url: "https://github.com/shenzekun/useful-tools", desc: "常用在线工具集合" }
          ]
        },
        {
          name: "人工智能",
          items: [
            { name: "A Neural Network Playground", url: "http://playground.tensorflow.org", desc: "学习体验人工智能" }
          ]
        }
      ]
    },
    {
      id: "design",
      name: "设计",
      subsections: [
        {
          name: "纹理 · 贴图 · 3D 素材",
          items: [
            { name: "Brusheezy!", url: "https://www.brusheezy.com/", desc: "免费笔刷纹理 PSD" },
            { name: "The Pattern Library", url: "http://thepatternlibrary.com/#jade", desc: "奇特的纹理网站" },
            { name: "Subtle Patterns", url: "https://www.toptal.com/designers/subtlepatterns/", desc: "很不错的纹理库" },
            { name: "Hero Patterns", url: "https://heropatterns.com/", desc: "可自定义纹理的网站" },
            { name: "动动三维", url: "https://www.ddd.online/material", desc: "免费和付费的贴图和 3D 模型" },
            { name: "集简空间", url: "http://www.jjkjnet.com/home/index/list2/cid/86.html", desc: "3D 贴图免费下载，每日更新" },
            { name: "Free3D", url: "https://free3d.com/", desc: "免费 3D 模型" },
            { name: "3D侠模型网", url: "https://www.3dxia.com/", desc: "3D 模型库免费下载" },
            { name: "Archive3D", url: "https://archive3d.net/", desc: "免费三维素材" }
          ]
        },
        {
          name: "Mockup 素材",
          items: [
            { name: "MockUPhone", url: "https://mockuphone.com/", desc: "免费，有多种 mockup 设备" },
            { name: "Dunnnk", url: "http://ww7.dunnnk.com/", desc: "免费，有多种 mockup 设备" }
          ]
        },
        {
          name: "图标素材",
          items: [
            { name: "Eva Icons", url: "https://akveo.github.io/eva-icons/#/", desc: "设计简约的开源 UI 图标" },
            { name: "Logopond", url: "https://logopond.com/", desc: "Logo 设计网站" },
            { name: "Noun Project", url: "https://thenounproject.com/", desc: "巨多的图标" },
            { name: "Flaticon", url: "https://www.flaticon.com/", desc: "图标 + 贴纸" },
            { name: "iconfont", url: "https://www.iconfont.cn/", desc: "阿里巴巴矢量图标库" }
          ]
        },
        {
          name: "字体素材",
          items: [
            { name: "Use & Modify", url: "http://usemodify.com/", desc: "免费字体" },
            { name: "Font Squirrel", url: "https://www.fontsquirrel.com/", desc: "免费字体" },
            { name: "Source Han Serif", url: "https://source.typekit.com/source-han-serif/", desc: "多语言字体" },
            { name: "MissTiina", url: "https://misstiina.com/fonts/go/freefonts/", desc: "英文字体" },
            { name: "Typotheque", url: "https://www.typotheque.com/", desc: "高质量字体" },
            { name: "Fonts In Use", url: "https://fontsinuse.com/", desc: "字体实际应用案例" }
          ]
        },
        {
          name: "UI 素材",
          items: [
            { name: "Screenlane", url: "https://screenlane.com/?ref=uimovement", desc: "Web 与移动端 UI 设计灵感" },
            { name: "UpLabs", url: "https://www.uplabs.com/", desc: "UI Kits、图标、模板、主题" },
            { name: "Best Website Gallery", url: "https://bestwebsite.gallery/", desc: "网页 UI 设计" },
            { name: "Niice", url: "https://niice.co/", desc: "设计灵感搜索" },
            { name: "One Page Love", url: "https://onepagelove.com/", desc: "网页 UI 设计" },
            { name: "Reeoo", url: "https://reeoo.com/", desc: "网页 UI 设计" },
            { name: "Good Web Design", url: "http://www.goodweb.design/", desc: "网页 UI 设计" },
            { name: "Wix", url: "https://zh.wix.com/", desc: "免费网站网页制作帮手" }
          ]
        },
        {
          name: "配色素材",
          items: [
            { name: "Coolors", url: "https://coolors.co/", desc: "超快的配色方案生成器" },
            { name: "Flat UI Colors", url: "https://www.flatuicolorpicker.com/", desc: "扁平化设计配色" },
            { name: "Colors by van Schneider", url: "https://vanschneider.com/colors", desc: "提供颜色搭配建议" },
            { name: "Material Palette", url: "https://www.materialpalette.com/", desc: "Material Design 配色生成器" },
            { name: "uiGradients", url: "https://uigradients.com/#Purplin", desc: "生成各种各样的渐变色" },
            { name: "Adobe Color", url: "https://color.adobe.com/zh/create/color-wheel", desc: "Adobe 自家配色网站" },
            { name: "Picular", url: "https://picular.co/", desc: "搜索颜色的引擎" },
            { name: "NIPPON COLORS", url: "https://nipponcolors.com/", desc: "日本传统色" },
            { name: "Color Hunt", url: "https://colorhunt.co/", desc: "设计师与艺术家的配色" }
          ]
        },
        {
          name: "软件工具",
          items: [
            { name: "PhotoMosh", url: "https://photomosh.com/", desc: "制作动态表情包，还有各种特效滤镜" },
            { name: "Silk", url: "http://weavesilk.com/", desc: "用鼠标制作艺术品" },
            { name: "Avataaars", url: "https://avataaars.com/", desc: "生成卡通头像" },
            { name: "Confetti", url: "https://sketchconfetti.com/", desc: "生成礼花图片的 Sketch 插件" },
            { name: "Humaaans", url: "https://www.humaaans.com/", desc: "免费可商用的 Sketch 插画场景库" },
            { name: "Blender", url: "https://www.blender.org/", desc: "开源 3D 设计软件" },
            { name: "墨刀", url: "https://modao.cc/", desc: "在线产品设计协作一体化平台" },
            { name: "MakeGirlsMoe", url: "https://make.girls.moe/#/", desc: "二次元女生头像生成器" },
            { name: "Crypko", url: "https://crypko.ai/", desc: "利用 GAN 自动生成高质量动漫立绘" },
            { name: "Screen Sizes", url: "https://screensiz.es/phone", desc: "查询各种设备屏幕尺寸分辨率" },
            { name: "The Bézier Game", url: "https://bezier.method.ac/", desc: "贝塞尔曲线练习游戏" }
          ]
        }
      ]
    },
    {
      id: "create",
      name: "创作",
      subsections: [
        {
          name: "视频 · 图片素材",
          items: [
            { name: "Wallpaper Abyss", url: "https://wall.alphacoders.com/?lang=Chinese", desc: "高清壁纸、桌面背景" },
            { name: "花瓣网", url: "https://huaban.com/", desc: "陪你做生活的设计师" },
            { name: "Pixabay", url: "https://pixabay.com/", desc: "免费的高清图片和矢量文件资源库" },
            { name: "Foter", url: "https://foter.com/", desc: "有很多图片的图片社区" },
            { name: "unDraw", url: "https://undraw.co/", desc: "卡通插画" },
            { name: "VisualHunt", url: "https://visualhunt.com/", desc: "免费图片搜索" },
            { name: "StockSnap", url: "https://stocksnap.io/", desc: "高清图片" },
            { name: "Streetwill", url: "http://streetwill.co/", desc: "简约风格的图片网站" },
            { name: "SplitShire", url: "https://www.splitshire.com/", desc: "美丽且独家免费库存照片" },
            { name: "Stock Up", url: "https://stockup.sitebuilderreport.com/", desc: "全网搜图" },
            { name: "ThemeIsle Stock Photos", url: "https://mystock.themeisle.com/", desc: "独特和免费库存图片" },
            { name: "Pexels", url: "https://www.pexels.com/zh-cn/", desc: "免费素材图片和视频" },
            { name: "Life of Vids", url: "https://www.lifeofvids.com/", desc: "免费视频、剪辑和循环" },
            { name: "Mazwai", url: "https://mazwai.com/#/grid", desc: "免费库存视频素材" },
            { name: "Mixkit", url: "https://mixkit.co/", desc: "下一个视频项目的免费资产" },
            { name: "Distill", url: "https://wedistill.io/", desc: "视频素材" },
            { name: "SOOGIF", url: "https://www.soogif.com/", desc: "GIF 制作、图片合成、动图搜索引擎" }
          ]
        },
        {
          name: "配乐素材",
          items: [
            { name: "Artlist", url: "https://artlist.io/", desc: "售卖版权音乐配乐的 BGM 网站" },
            { name: "Jamendo", url: "https://www.jamendo.com/", desc: "免费和付费的版权视频配乐 BGM 网站" },
            { name: "Musicbed", url: "https://www.musicbed.com/", desc: "为视频电影找到完美的歌曲配乐" },
            { name: "Musopen", url: "https://musopen.org/", desc: "免费视频配乐网站" },
            { name: "FreePD", url: "https://freepd.com/electronic.php", desc: "免费视频配乐网站" },
            { name: "Epidemic Sound", url: "https://www.epidemicsound.com/", desc: "售卖版权的视频音乐配乐 BGM 网站" },
            { name: "Amper Music", url: "https://www.ampermusic.com/", desc: "人工智能作曲", tags: ["AI"] },
            { name: "AIVA", url: "https://creators.aiva.ai/", desc: "人工智能作曲家", tags: ["AI"] }
          ]
        },
        {
          name: "音效素材",
          items: [
            { name: "Freesound", url: "https://freesound.org/", desc: "注册后免费的丰富音效库" },
            { name: "MusicRadar", url: "https://www.musicradar.com/", desc: "免费音频采样，适合电子乐" }
          ]
        },
        {
          name: "软件工具",
          items: [
            { name: "FL Studio", url: "https://www.image-line.com/", desc: "著名编曲宿主软件" },
            { name: "Bedroom Producers Blog", url: "https://bedroomproducersblog.com/", desc: "免费音效、插件、软件资讯网站" },
            { name: "KVR Audio", url: "https://www.kvraudio.com/", desc: "音乐制作软件插件发布交流平台" }
          ]
        }
      ]
    },
    {
      id: "assets",
      name: "素材库",
      subsections: [
        {
          name: "",
          items: [
            { name: "爱给网", url: "https://www.aigei.com/", desc: "音效配乐、3D 模型、视频素材、游戏素材免费下载" },
            { name: "The Stocks 2", url: "http://thestocks.im/", desc: "设计炫酷的全能素材网" },
            { name: "1001FreeDownloads", url: "https://www.1001freedownloads.com/", desc: "免费的纹理贴图图标字体样式俱全" },
            { name: "千图网", url: "https://www.58pic.com/", desc: "免费设计图片素材网站" }
          ]
        }
      ]
    },
    {
      id: "learning",
      name: "在线课程",
      subsections: [
        {
          name: "",
          items: [
            { name: "腾讯课堂", url: "https://ke.qq.com/", desc: "职业培训、考试提升在线教育平台" },
            { name: "网易云课堂", url: "https://study.163.com/", desc: "悄悄变强大" },
            { name: "doyoudo", url: "https://www.doyoudo.com/", desc: "视频创作、设计教程" },
            { name: "中国大学 MOOC", url: "https://www.icourse163.org/", desc: "国家精品课程在线学习平台" }
          ]
        }
      ]
    },
    {
      id: "toolbox",
      name: "实用工具",
      subsections: [
        {
          name: "资源搜索",
          items: [
            { name: "小纸条", url: "https://u.gitcafe.net/", desc: "开放纯粹的资源网站" },
            { name: "鸠摩搜索", url: "https://www.jiumodiary.com/", desc: "文档搜索引擎" },
            { name: "全国图书馆参考咨询联盟", url: "http://www.ucdrs.superlib.net/", desc: "文献传递与参考咨询" }
          ]
        },
        {
          name: "图片与文件处理",
          items: [
            { name: "压缩图", url: "https://www.yasuotu.com/", desc: "在线图片压缩工具（jpg、png、gif）无损压缩 50%" },
            { name: "TinyJPG", url: "https://tinyjpg.com/", desc: "智能压缩 WebP、PNG 和 JPEG 图片" },
            { name: "智图", url: "https://zhitu.isux.us/", desc: "图片压缩在线工具，在线制作 WebP" },
            { name: "iLoveIMG", url: "https://www.iloveimg.com/zh-cn", desc: "批量编辑图片" },
            { name: "CloudConvert", url: "https://cloudconvert.com/", desc: "万能转换" }
          ]
        },
        {
          name: "图床",
          items: [
            { name: "路过图床", url: "https://imgtu.com/", desc: "免费图片上传，专业图片外链" },
            { name: "Postimages", url: "https://postimages.org/", desc: "免费图片托管 / 图片上传" },
            { name: "ImgURL", url: "https://imgurl.org/", desc: "免费图床" },
            { name: "Z4A 图床", url: "https://www.z4a.net/", desc: "国内最良心的免费图床" },
            { name: "Pinbox", url: "https://withpinbox.com/explore/collection/332056", desc: "免费图床整理" }
          ]
        },
        {
          name: "效率工具",
          items: [
            { name: "网易见外工作台", url: "https://jianwai.youdao.com/index/0", desc: "音频转文字、视频自动生成字幕，还有翻译功能" },
            { name: "讯飞听见", url: "https://www.iflyrec.com/", desc: "智慧办公平台｜在线语音录音转文字软件" }
          ]
        }
      ]
    }
  ]
};
