---
home: true
portfolio: true
icon: home
title: ""
shortTitle: 主页
avatar: /portfolio.avif
titles:
  - 阳光男孩
  - 世界探索者
  - 量子物理思考者
welcome: 👋 你好，我是
name: 尚  程

medias:
  - icon: envelope
    name: 东京大学邮箱
    link: mailto:c-shang@iis.u-tokyo.ac.jp

  - icon: envelope
    name: RIKEN 邮箱
    link: mailto:cheng.shang@riken.jp

  - icon: fab fa-orcid
    name: ORCID
    link: https://orcid.org/0000-0001-8393-2329

  - icon: fab fa-google-scholar
    name: 谷歌学术
    link: https://scholar.google.com/citations?user=HwEOkQEAAAAJ&hl=zh-CN

footer: false
---

## 个人信息

- **姓名**: 尚程

- **所属机构**: 东京大学物理系。

- **联系方式**:

  - 东京大学邮箱: <c-shang@iis.u-tokyo.ac.jp>
  - RIKEN 邮箱: <cheng.shang@riken.jp>

- **ORCID**: [0000-0001-8393-2329](https://orcid.org/0000-0001-8393-2329)

- **谷歌学术**: [尚程](https://scholar.google.com/citations?user=HwEOkQEAAAAJ&hl=zh-CN)

- **个人爱好**: 街舞（地板舞）、五子棋、音乐、跑步……

## 教育经历

<Experiences :items="experiences" />

## 新闻

- [2023 年量子物理与量子信息科学国际研讨会会议 (QPQIS-2023)](http://www.baqis.ac.cn/news/detail/?cid=1879)

## 代表荣誉及奖项

- 2023 年量子物理与量子信息科学国际研讨会会议最佳海报奖 (QPQIS-2023)。
- 2021 年日本政府 (MEXT) 博士奖学金。
- 2019 年中国研究生国家奖学金。

## 博士论文

开放量子系统的算子分析

## 硕士论文

基于调制光机械系统的不可逆传输。

## 发表内容

1. [Zhi-Guang Lu, Guo-Qing Tian, Xin-You Lü, Cheng Shang, Topological Quantum Batteries, arXiv preprint arXiv:2405.03675 (2024)](https://arxiv.org/abs/2405.03675)
1. [Cheng Shang and Hong-Chao Li, Resonance-dominant optomechanical entanglement in open quantum systems, Physical Review Applied 21 (4), 044048 (2024)](https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.21.044048)
1. [Cheng Shang, Hayato Kinkawa, and Tomotaka Kuwahara, Equivalence between operator spreading and information propagation, 日本物理学会講演概要集 79. 1, 753 (2024)](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=HwEOkQEAAAAJ&sortby=pubdate&citation_for_view=HwEOkQEAAAAJ:roLk4NBRz8UC)
1. [ZhiGuang Lu, Cheng Shang, Ying Wu, Xin-You Lü, Analytical approach to higher-order correlation functions in U(1) symmetric systems, Physical Review A 108, 053703 (2023)](https://journals.aps.org/pra/abstract/10.1103/PhysRevA.108.053703)
1. [Cheng Shang, Coupling enhancement and symmetrization of single-photon optomechanics in open quantum systems, arXiv preprint arXiv:2302.04897 (2023)](https://arxiv.org/abs/2302.04897)
1. [HY Sun, Cheng Shang, XX Luo, YH Zhou, Hong-Zhi Shen, Optical-assisted Photon Blockade in a Cavity System via Parametric Interactions, International Journal of Theoretical Physics 58, 3640-3650 (2019)](https://link.springer.com/article/10.1007/s10773-019-04229-x)
1. [Cheng Shang, Hong-Zhi Shen, Xue-Xi Yi, Nonreciprocity in a strongly coupled three-mode optomechanical circulatory system, Optics Express 27 (18), 25882-25901 (2019)](https://opg.optica.org/oe/fulltext.cfm?uri=oe-27-18-25882&id=417227)
1. [Hong-Zhi Shen, Cheng Shang, YH Zhou, Xue-Xi Yi, Unconventional single-photon blockade in non-Markovian systems, Physical Review A 98 (2), 023856 (2018)](https://journals.aps.org/pra/abstract/10.1103/PhysRevA.98.023856)

## 专利

1. [Cheng Shang, Hui Zhao, Xuan Zhang, Fu-De Li, and He Bai, 测灰度机械随机数生成器及其使用方法, CN Patent CN108,958,706 B (2023)](https://patents.google.com/patent/CN108958706B/zh)

<script setup lang="ts">
const experiences = [
  {
    type: 'study',
    place: "东京大学，日本",
    title: "博士",
    time: "2021 年 10 月 - 至今",
    content: "物理系<br>预计 2024 年 9 月毕业",
  },
  {
    type: 'study',
    place: "留日学生，中国",
    time: "2020 年 10 月 - 2021 年 8 月",
    content: "中国留日预校<br>MEXT 博士奖学金候选人",
  },
  {
    type: 'study',
    place: "东北师范大学，中国",
    time: "2017 年 9 月 - 2020 年 6 月",
    title: "理学硕士",
    description: "物理学院",
  },
    {
    type: 'work',
    place: "量子计算中心，分析量子复杂性 RIKEN Hakubi 研究团队",
    time: "2023 年 4 月 - 2024 年 9 月",
    title: "初级研究员",
  },
];
</script>
