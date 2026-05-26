---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<div class="hero-section" data-aos="fade-up">
  <div class="hero-floating-shapes">
    <div class="hero-shape"></div>
    <div class="hero-shape"></div>
    <div class="hero-shape"></div>
    <div class="hero-shape"></div>
  </div>
  <h1 class="hero-name">Zikang Xu</h1>
  <p class="hero-subtitle">Specially Appointed Associate Researcher</p>
  <p class="hero-typing" id="hero-typing"></p>
</div>

<div class="stats-row" data-aos="fade-up" data-aos-delay="200">
  <div class="stat-item">
    <div class="stat-number" data-target="12">0</div>
    <div class="stat-label">Publications</div>
  </div>
  <div class="stat-item">
    <div class="stat-number" data-target="200">0</div>
    <div class="stat-label">Citations</div>
  </div>
  <div class="stat-item">
    <div class="stat-number" data-target="1500">0</div>
    <div class="stat-label">GitHub Stars</div>
  </div>
  <div class="stat-item">
    <div class="stat-number" data-target="30">0</div>
    <div class="stat-label">Conference Reviews</div>
  </div>
</div>

<span class='anchor' id='about-me'></span>

# About Me

<div data-aos="fade-up">

I am a **Specially Appointed Associate Researcher** (特任副研究员) at the [Institute of Artificial Intelligence, Hefei Comprehensive National Science Center](https://iai.ustc.edu.cn/nsjsys.jhtml), where I also serve as a postdoctoral researcher jointly supervised by Prof. [Wenjie Feng](https://wenchieh.github.io) (School of AI and Data Science, USTC) and Prof. [Jiahong Gao](https://faculty.pku.edu.cn/gaojiahong/zh_CN/index/13498/list/index.htm) (IAI, HFCNS).

I received my Ph.D. in 2025 from the School of Biomedical Engineering, [USTC](http://bme.ustc.edu.cn/), under the supervision of Prof. [S. Kevin Zhou](https://sz.ustc.edu.cn/en/en_research_show/42.html). Prior to that, I earned my B.Eng. and M.Eng. from [SEU](https://www.seu.edu.cn) in 2018 and 2021, supervised by Prof. [Zhongze Gu](https://bme.seu.edu.cn/2011/1017/c463a12264/page.psp).

My research interests lie at the intersection of **algorithm fairness in medical image analysis** and **AI-driven analysis of major neurological disorders**.

</div>

# News

<div data-aos="fade-up">

<div class="timeline-section">

- *2026.05*: &nbsp; One paper accepted by MICCAI-26 <span style="color:red;">(Early Accepted)</span>.
- *2025.11*: &nbsp; I am selected to join the first Young Editorial Board of [EngMedicine](https://www.sciencedirect.com/journal/engmedicine). 
- *2025.11*: &nbsp; One paper accepted by AAAI-26 <span style="color:red;">(Oral)</span>.
- *2025.10*: &nbsp; One paper accepted by IEEE BIBM-25 <span style="color:red;">(Oral)</span>.
- *2025.07*: &nbsp; I start my work as a specially appointed associate researcher and postdoc at IAI, Hefei Comprehensive National Science Center.
- *2025.05*: &nbsp; The moment I've been working toward for years — I just aced my Ph.D. defense!
- *2025.04*: &nbsp; One paper accepted by npj Digital Medicine. 
- *2025.03*: &nbsp; One paper accepted by MIDL-25 <span style="color:red;">(Oral)</span>.
- *2025.01*: &nbsp; One paper accepted by Medical Image Analysis.
- *2024.10*: &nbsp; One paper accepted by npj Digital Medicine.
- *2024.09*: &nbsp; One paper accepted by NeurIPS-24.
- *2024.05*: &nbsp; One paper accepted by MICCAI-24 <span style="color:red;">(Early Accepted)</span>.
- *2024.02*: &nbsp; One paper accepted by MIDL-24 <span style="color:red;">(Oral)</span>.
- *2024.02*: &nbsp; One paper accepted by MIDL-24.
- *2023.05*: &nbsp; One paper accepted by MICCAI-23.

</div>
</div>

# Publications

<div data-aos="fade-up">

(Selected publications. `*` indicates equal contribution, ✉️ represents the corresponding author.)

### Algorithm Fairness

- `npj Digit. Med. 2025` [Fair ultrasound diagnosis via adversarial protected attribute aware perturbations on latent embeddings](https://www.nature.com/articles/s41746-025-01641-y)\
**Zikang Xu**, Fenghe Tang, Quan Quan, Qingsong Yao, Qingpeng Kong, Jianrui Ding, Chunping Ning, S. Kevin Zhou✉️ &nbsp;&nbsp;[![](https://img.shields.io/github/stars/XuZikang/APPLE.svg?label=Stars&style=social)](https://github.com/XuZikang/APPLE)[[code](https://github.com/XuZikang/APPLE)][[Nature](https://www.nature.com/articles/s41746-025-01641-y)]

- `npj Digit. Med. 2024` [Addressing Fairness Issues in Deep Learning-Based Medical Image Analysis: A Systematic Review](https://www.nature.com/articles/s41746-024-01276-5)\
**Zikang Xu**, Jun Li, Qingsong Yao, Han Li, Mingyue Zhao, S. Kevin Zhou✉️ &nbsp;&nbsp;[![](https://img.shields.io/github/stars/XuZikang/FairAdaBN.svg?label=Stars&style=social)](https://github.com/XuZikang/Awesome-MedIA-Fairness)[[code](https://github.com/XuZikang/Awesome-MedIA-Fairness)][[Nature](https://www.nature.com/articles/s41746-024-01276-5)]

- `NeurIPS 2024` [FairMedFM: Fairness Benchmarking for Medical Imaging Foundation Models](https://openreview.net/forum?id=CyrKKKN3fs)\
Ruinan Jin\*, **Zikang Xu\***, Yuan Zhong\*, Qingsong Yao, Qi Dou✉️, S. Kevin Zhou✉️, Xiaoxiao Li✉️ &nbsp;&nbsp;[![](https://img.shields.io/github/stars/FairMedFM/FairMedFM.svg?label=Stars&style=social)](https://github.com/FairMedFM/FairMedFM)[[code](https://github.com/FairMedFM/FairMedFM)][[OpenReview](https://openreview.net/forum?id=CyrKKKN3fs)]

- `MICCAI 2023` [FairAdaBN: Mitigating unfairness with adaptive batch normalization and its application to dermatological disease classification](https://arxiv.org/pdf/2303.08325)\
**Zikang Xu**, Shang Zhao, Quan Quan, Qingsong Yao, S. Kevin Zhou✉️ &nbsp;&nbsp;[![](https://img.shields.io/github/stars/XuZikang/Awesome-MedIA-Fairness.svg?label=Stars&style=social)](https://github.com/XuZikang/FairAdaBN)[[code](https://github.com/XuZikang/FairAdaBN)][[Springer](https://link.springer.com/chapter/10.1007/978-3-031-43895-0_29)]

### MEG Signal Analysis

- `BIBM 2025` [FAIR-ESI: Feature Adaptive Importance Refinement for Electrophysiological Source Imaging](https://ieeexplore.ieee.org/document/11356466)\
Linyong Zou*, Liang Zhang*, Xiongfei Wang*, Jia-Hong Gao, Yi Sun, Shurong Sheng, Kuntao Xiao, Wanli Yang, Pengfei Teng, Guoming Luan✉️, Zhao Lv✉️, **Zikang Xu**✉️ [[ArXiv]](https://arxiv.org/abs/2507.14928)

### Landmark Detection

- `MICCAI 2024` [SIX-Net: Spatial-Context Information miX-up for Electrode Landmark Detection <span style="color:red;">(Early Accepted)</span>](https://link.springer.com/chapter/10.1007/978-3-031-72378-0_32)\
Xinyi Wang, **Zikang Xu**, Heqin Zhu, Qingsong Yao, Yiyong Sun, S. Kevin Zhou✉️ &nbsp;&nbsp;[[Springer](https://link.springer.com/chapter/10.1007/978-3-031-72378-0_32)]

- `MIDL 2024` [OFELIA: Optical Flow-based Electrode LocalIzAtion](https://openreview.net/pdf?id=8245ExLB4I)\
Xinyi Wang, **Zikang Xu**, Qingsong Yao, Yiyong Sun, S. Kevin Zhou✉️ &nbsp;&nbsp;[[OpenReview](https://openreview.net/pdf?id=8245ExLB4I)]

### Medical Image Segmentation

- `Med. Image Anal. 2025` [LACOSTE: Exploiting stereo and temporal contexts for surgical instrument segmentation](https://www.sciencedirect.com/science/article/abs/pii/S1361841524003128)\
Qiyuan Wang, Shang Zhao, **Zikang Xu**, S. Kevin Zhou✉️ &nbsp;&nbsp;[[ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S1361841524003128)]

- `MIDL 2024` [Slide-SAM: Medical SAM Meets Sliding Window <span style="color:red;">(Oral)</span>](https://openreview.net/forum?id=LNdU9RTv3L)\
Quan Quan\*, Fenghe Tang\*, **Zikang Xu**, Heqin Zhu, S. Kevin Zhou✉️ &nbsp;&nbsp;[![](https://img.shields.io/github/stars/Curli-quan/Slide-SAM.svg?label=Stars&style=social)](https://github.com/Curli-quan/Slide-SAM)[[code](https://github.com/Curli-quan/Slide-SAM)][[arXiv](https://arxiv.org/abs/2311.10121v3)]

### MISC

- `AAAI 2026` [Medatlas: Evaluating LLMs for Multi-Round, Multi-Task Medical Reasoning Across Diverse Imaging Modalities and Clinical Text](https://ojs.aaai.org/index.php/AAAI/article/view/41142)\
Ronghao Xu, Zhen Huang, Yangbo Wei, Xiaoqian Zhou, **Zikang Xu**, Ting Liu, Zihang Jiang, S. Kevin Zhou✉️ &nbsp;&nbsp;[[AAAI](https://ojs.aaai.org/index.php/AAAI/article/view/41142)]

- `MIDL 2025` [Style-Aligned Image Composition for Robust Detection of Abnormal Cells in Cytopathology <span style="color:red;">(Oral)</span>](https://openreview.net/pdf?id=VQrbxORlvv)\
Qiuyi Qi\*, Xin Li\*, Ming Kong, Zikang Xu, Bingdi Chen, Qiang Zhu✉️, S. Kevin Zhou✉️ &nbsp;&nbsp;[![](https://img.shields.io/github/stars/Joey-Qi/SAIC.svg?label=Stars&style=social)](https://github.com/Joey-Qi/SAIC)[[code](https://github.com/Joey-Qi/SAIC)][[OpenReview](https://openreview.net/pdf?id=VQrbxORlvv)]

</div>

# Honors and Awards

<div data-aos="fade-up">

- *2025*: Outstanding Graduate of Anhui Province
- *2025*: Outstanding Graduate of the University of Science and Technology of China (USTC)
- *2021, 2023, 2024*: Academic First Class Scholarship in USTC
- *2022*: Academic Second Class Scholarship in USTC
- *2021*: Suzhou Industrial Park Scholarship

</div>

# Education

<div data-aos="fade-up">

- *2021.09 – 2025.06*, Ph.D., Biomedical Engineering, University of Science and Technology of China ([USTC](http://bme.ustc.edu.cn/)), Suzhou, China
- *2018.09 – 2021.06*, M.Eng., Biological Science and Medical Engineering, Southeast University ([SEU](https://bme.seu.edu.cn)), Nanjing, China
- *2016.09 – 2018.06*, B.Eng., Biological Science and Medical Engineering, Southeast University ([SEU](https://bme.seu.edu.cn)), Nanjing, China
- *2014.09 – 2016.06*, Undergraduate, Chien-Shiung Wu College (honors college), Southeast University ([SEU](https://wjx.seu.edu.cn)), Nanjing, China

</div>

# Teaching

<div data-aos="fade-up">

- *2023 Fall*, USTC, Teaching Assistant — Medical Image Computing (BMED6208P.01)
- *2022 Fall*, USTC, Teaching Assistant — Medical Image Computing (BMED6208P.01)

</div>

# Professional Services

<div data-aos="fade-up">

**Journal Reviewer:**
- IEEE Transactions on Medical Imaging
- ACM Transactions on Computing for Healthcare
- Biomedical Signal Processing and Control
- Franklin Open
- ACM Computing Surveys

**Conference Reviewer:**
- AAAI Conference on Artificial Intelligence (AAAI 2026)
- International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI 2026, 2025, 2024)
- IEEE International Conference on Bioinformatics and Biomedicine (BIBM 2024)
- IEEE International Symposium on Biomedical Imaging (ISBI 2026, 2025)

</div>

# Invited Talks

<div data-aos="fade-up">

- *2024.10*, **Benchmarking Fairness in Medical Foundation Models.** IEEE International Conference on Universal Village (IEEE UV 2024)

</div>

# Internships

<div data-aos="fade-up">

<!--


-->

</div>