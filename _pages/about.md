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

<!-- Hero -->
<section id="about-me">
<div class="hero-grid">
  <div class="hero-avatar">
    <img src="images/photo.jpeg" alt="Zikang Xu">
  </div>
  <div class="hero-content">
    <h1>Zikang Xu</h1>
    <p class="hero-subtitle">Specially Appointed Associate Researcher</p>
    <p class="hero-affiliation">Institute of Artificial Intelligence, Hefei Comprehensive National Science Center</p>
    <div class="hero-links">
      <a href="https://scholar.google.com/citations?user=TxjqAY0AAAAJ&hl=zh-CN" target="_blank"><span>📚</span> Google Scholar</a>
      <a href="https://github.com/XuZikang" target="_blank"><span>🐙</span> GitHub</a>
      <a href="https://x.com/xuzikang" target="_blank"><span>𝕏</span> Twitter</a>
      <a href="mailto:xuzikang@ustc.edu"><span>✉️</span> Email</a>
      <a href="https://orcid.org/0000-0001-6615-4510" target="_blank"><span>🔗</span> ORCID</a>
    </div>
    <div class="hero-description">
      <p>I am a <strong>Specially Appointed Associate Researcher</strong> (特任副研究员) at the <a href="https://iai.ustc.edu.cn/nsjsys.jhtml">Institute of Artificial Intelligence, Hefei Comprehensive National Science Center</a>, where I also serve as a postdoctoral researcher jointly supervised by Prof. <a href="https://wenchieh.github.io">Wenjie Feng</a> (School of AI and Data Science, USTC) and Prof. <a href="https://faculty.pku.edu.cn/gaojiahong/zh_CN/index/13498/list/index.htm">Jiahong Gao</a> (Peking University).</p>
      <p>I received my Ph.D. in 2025 from the School of Biomedical Engineering, <a href="http://bme.ustc.edu.cn/">USTC</a>, under the supervision of Prof. <a href="https://sz.ustc.edu.cn/en/en_research_show/42.html">S. Kevin Zhou</a>. Prior to that, I earned my B.Eng. and M.Eng. from <a href="https://www.seu.edu.cn">SEU</a> in 2018 and 2021, supervised by Prof. <a href="https://bme.seu.edu.cn/2011/1017/c463a12264/page.psp">Zhongze Gu</a>.</p>
      <p>My research interests lie at the intersection of <strong>algorithm fairness in medical image analysis</strong> and <strong>AI-driven analysis of major neurological disorders</strong>.</p>
    </div>
  </div>
</div>
</section>

<!-- News -->
<section id="news">
<div class="section-divider">
  <h2>News</h2>
</div>

<div class="timeline-section">

- <span class="news-date">2026.05</span> <span class="news-content">One paper accepted by MICCAI-26 <span style="color:#10b981;font-weight:510;">(Early Accepted)</span>.</span>
- <span class="news-date">2025.11</span> <span class="news-content">I am selected to join the first Young Editorial Board of <a href="https://www.sciencedirect.com/journal/engmedicine">EngMedicine</a>.</span>
- <span class="news-date">2025.11</span> <span class="news-content">One paper accepted by AAAI-26 <span style="color:#10b981;font-weight:510;">(Oral)</span>.</span>
- <span class="news-date">2025.10</span> <span class="news-content">One paper accepted by IEEE BIBM-25 <span style="color:#10b981;font-weight:510;">(Oral)</span>.</span>
- <span class="news-date">2025.07</span> <span class="news-content">I start my work as a specially appointed associate researcher and postdoc at IAI, Hefei Comprehensive National Science Center.</span>
- <span class="news-date">2025.05</span> <span class="news-content">The moment I've been working toward for years — I just aced my Ph.D. defense!</span>
- <span class="news-date">2025.04</span> <span class="news-content">One paper accepted by npj Digital Medicine.</span>
- <span class="news-date">2025.03</span> <span class="news-content">One paper accepted by MIDL-25 <span style="color:#10b981;font-weight:510;">(Oral)</span>.</span>
- <span class="news-date">2025.01</span> <span class="news-content">One paper accepted by Medical Image Analysis.</span>
- <span class="news-date">2024.10</span> <span class="news-content">One paper accepted by npj Digital Medicine.</span>
- <span class="news-date">2024.09</span> <span class="news-content">One paper accepted by NeurIPS-24.</span>
- <span class="news-date">2024.05</span> <span class="news-content">One paper accepted by MICCAI-24 <span style="color:#10b981;font-weight:510;">(Early Accepted)</span>.</span>
- <span class="news-date">2024.02</span> <span class="news-content">One paper accepted by MIDL-24 <span style="color:#10b981;font-weight:510;">(Oral)</span>.</span>
- <span class="news-date">2024.02</span> <span class="news-content">One paper accepted by MIDL-24.</span>
- <span class="news-date">2023.05</span> <span class="news-content">One paper accepted by MICCAI-23.</span>

</div>
</section>

<!-- Publications -->
<section id="publications">
<div class="section-divider">
  <h2>Publications</h2>
</div>

(Selected publications. `*` indicates equal contribution, ✉️ represents the corresponding author.)

<div class="publications-list">

<h3 style="font-size:1rem;font-weight:590;color:var(--text-primary);margin:0.5rem 0;">Algorithm Fairness</h3>

<div class="pub-item">
  <div class="pub-title"><a href="https://www.nature.com/articles/s41746-025-01641-y">Fair ultrasound diagnosis via adversarial protected attribute aware perturbations on latent embeddings</a></div>
  <div class="pub-authors"><strong>Zikang Xu</strong>, Fenghe Tang, Quan Quan, Qingsong Yao, Qingpeng Kong, Jianrui Ding, Chunping Ning, S. Kevin Zhou✉️</div>
  <div class="pub-venue"><em>npj Digit. Med.</em> 2025</div>
  <div class="pub-meta"><span class="pub-citations" data-pub-title="Fair ultrasound diagnosis via adversarial protected attribute aware perturbations on latent embeddings"></span></div>
  <div class="pub-tags">
    <a class="pub-tag highlight" href="https://github.com/XuZikang/APPLE">Code</a>
    <a class="pub-tag" href="https://www.nature.com/articles/s41746-025-01641-y">Nature</a>
  </div>
</div>

<div class="pub-item">
  <div class="pub-title"><a href="https://www.nature.com/articles/s41746-024-01276-5">Addressing Fairness Issues in Deep Learning-Based Medical Image Analysis: A Systematic Review</a></div>
  <div class="pub-authors"><strong>Zikang Xu</strong>, Jun Li, Qingsong Yao, Han Li, Mingyue Zhao, S. Kevin Zhou✉️</div>
  <div class="pub-venue"><em>npj Digit. Med.</em> 2024</div>
  <div class="pub-meta"><span class="pub-citations" data-pub-title="Addressing Fairness Issues in Deep Learning-Based Medical Image Analysis: A Systematic Review"></span></div>
  <div class="pub-tags">
    <a class="pub-tag highlight" href="https://github.com/XuZikang/Awesome-MedIA-Fairness">Code</a>
    <a class="pub-tag" href="https://www.nature.com/articles/s41746-024-01276-5">Nature</a>
  </div>
</div>

<div class="pub-item">
  <div class="pub-title"><a href="https://openreview.net/forum?id=CyrKKKN3fs">FairMedFM: Fairness Benchmarking for Medical Imaging Foundation Models</a></div>
  <div class="pub-authors">Ruinan Jin*, <strong>Zikang Xu*</strong>, Yuan Zhong*, Qingsong Yao, Qi Dou✉️, S. Kevin Zhou✉️, Xiaoxiao Li✉️</div>
  <div class="pub-venue"><em>NeurIPS</em> 2024</div>
  <div class="pub-meta"><span class="pub-citations" data-pub-title="FairMedFM: Fairness Benchmarking for Medical Imaging Foundation Models"></span></div>
  <div class="pub-tags">
    <a class="pub-tag highlight" href="https://github.com/FairMedFM/FairMedFM">Code</a>
    <a class="pub-tag" href="https://openreview.net/forum?id=CyrKKKN3fs">OpenReview</a>
  </div>
</div>

<div class="pub-item">
  <div class="pub-title"><a href="https://arxiv.org/pdf/2303.08325">FairAdaBN: Mitigating unfairness with adaptive batch normalization and its application to dermatological disease classification</a></div>
  <div class="pub-authors"><strong>Zikang Xu</strong>, Shang Zhao, Quan Quan, Qingsong Yao, S. Kevin Zhou✉️</div>
  <div class="pub-venue"><em>MICCAI</em> 2023</div>
  <div class="pub-meta"><span class="pub-citations" data-pub-title="FairAdaBN: Mitigating unfairness with adaptive batch normalization and its application to dermatological disease classification"></span></div>
  <div class="pub-tags">
    <a class="pub-tag highlight" href="https://github.com/XuZikang/FairAdaBN">Code</a>
    <a class="pub-tag" href="https://link.springer.com/chapter/10.1007/978-3-031-43895-0_29">Springer</a>
  </div>
</div>

<h3 style="font-size:1rem;font-weight:590;color:var(--text-primary);margin:0.5rem 0;">MEG Signal Analysis</h3>

<div class="pub-item">
  <div class="pub-title"><a href="https://ieeexplore.ieee.org/document/11356466">FAIR-ESI: Feature Adaptive Importance Refinement for Electrophysiological Source Imaging</a></div>
  <div class="pub-authors">Linyong Zou*, Liang Zhang*, Xiongfei Wang*, Jia-Hong Gao, Yi Sun, Shurong Sheng, Kuntao Xiao, Wanli Yang, Pengfei Teng, Guoming Luan✉️, Zhao Lv✉️, <strong>Zikang Xu</strong>✉️</div>
  <div class="pub-venue"><em>IEEE BIBM</em> 2025 <span style="color:#10b981;font-weight:510;">(Oral)</span></div>
  <div class="pub-meta"><span class="pub-citations" data-pub-title="FAIR-ESI: Feature Adaptive Importance Refinement for Electrophysiological Source Imaging"></span></div>
  <div class="pub-tags">
    <a class="pub-tag" href="https://arxiv.org/abs/2507.14928">arXiv</a>
    <a class="pub-tag" href="https://ieeexplore.ieee.org/document/11356466">IEEE</a>
  </div>
</div>

<h3 style="font-size:1rem;font-weight:590;color:var(--text-primary);margin:0.5rem 0;">Landmark Detection</h3>

<div class="pub-item">
  <div class="pub-title"><a href="https://link.springer.com/chapter/10.1007/978-3-031-72378-0_32">SIX-Net: Spatial-Context Information miX-up for Electrode Landmark Detection</a></div>
  <div class="pub-authors">Xinyi Wang, <strong>Zikang Xu</strong>, Heqin Zhu, Qingsong Yao, Yiyong Sun, S. Kevin Zhou✉️</div>
  <div class="pub-venue"><em>MICCAI</em> 2024 <span style="color:#10b981;font-weight:510;">(Early Accepted)</span></div>
  <div class="pub-meta"><span class="pub-citations" data-pub-title="SIX-Net: Spatial-Context Information miX-up for Electrode Landmark Detection"></span></div>
  <div class="pub-tags">
    <a class="pub-tag" href="https://link.springer.com/chapter/10.1007/978-3-031-72378-0_32">Springer</a>
  </div>
</div>

<div class="pub-item">
  <div class="pub-title"><a href="https://openreview.net/pdf?id=8245ExLB4I">OFELIA: Optical Flow-based Electrode LocalIzAtion</a></div>
  <div class="pub-authors">Xinyi Wang, <strong>Zikang Xu</strong>, Qingsong Yao, Yiyong Sun, S. Kevin Zhou✉️</div>
  <div class="pub-venue"><em>MIDL</em> 2024</div>
  <div class="pub-meta"><span class="pub-citations" data-pub-title="OFELIA: Optical Flow-based Electrode LocalIzAtion"></span></div>
  <div class="pub-tags">
    <a class="pub-tag" href="https://openreview.net/pdf?id=8245ExLB4I">OpenReview</a>
  </div>
</div>

<h3 style="font-size:1rem;font-weight:590;color:var(--text-primary);margin:0.5rem 0;">Medical Image Segmentation</h3>

<div class="pub-item">
  <div class="pub-title"><a href="https://www.sciencedirect.com/science/article/abs/pii/S1361841524003128">LACOSTE: Exploiting stereo and temporal contexts for surgical instrument segmentation</a></div>
  <div class="pub-authors">Qiyuan Wang, Shang Zhao, <strong>Zikang Xu</strong>, S. Kevin Zhou✉️</div>
  <div class="pub-venue"><em>Medical Image Analysis</em> 2025</div>
  <div class="pub-meta"><span class="pub-citations" data-pub-title="LACOSTE: Exploiting stereo and temporal contexts for surgical instrument segmentation"></span></div>
  <div class="pub-tags">
    <a class="pub-tag" href="https://www.sciencedirect.com/science/article/abs/pii/S1361841524003128">ScienceDirect</a>
  </div>
</div>

<div class="pub-item">
  <div class="pub-title"><a href="https://openreview.net/forum?id=LNdU9RTv3L">Slide-SAM: Medical SAM Meets Sliding Window</a></div>
  <div class="pub-authors">Quan Quan*, Fenghe Tang*, <strong>Zikang Xu</strong>, Heqin Zhu, S. Kevin Zhou✉️</div>
  <div class="pub-venue"><em>MIDL</em> 2024 <span style="color:#10b981;font-weight:510;">(Oral)</span></div>
  <div class="pub-meta"><span class="pub-citations" data-pub-title="Slide-SAM: Medical SAM Meets Sliding Window"></span></div>
  <div class="pub-tags">
    <a class="pub-tag highlight" href="https://github.com/Curli-quan/Slide-SAM">Code</a>
    <a class="pub-tag" href="https://arxiv.org/abs/2311.10121v3">arXiv</a>
  </div>
</div>

<h3 style="font-size:1rem;font-weight:590;color:var(--text-primary);margin:0.5rem 0;">MISC</h3>

<div class="pub-item">
  <div class="pub-title"><a href="https://ojs.aaai.org/index.php/AAAI/article/view/41142">Medatlas: Evaluating LLMs for Multi-Round, Multi-Task Medical Reasoning Across Diverse Imaging Modalities and Clinical Text</a></div>
  <div class="pub-authors">Ronghao Xu, Zhen Huang, Yangbo Wei, Xiaoqian Zhou, <strong>Zikang Xu</strong>, Ting Liu, Zihang Jiang, S. Kevin Zhou✉️</div>
  <div class="pub-venue"><em>AAAI</em> 2026</div>
  <div class="pub-meta"><span class="pub-citations" data-pub-title="Medatlas: Evaluating LLMs for Multi-Round, Multi-Task Medical Reasoning Across Diverse Imaging Modalities and Clinical Text"></span></div>
  <div class="pub-tags">
    <a class="pub-tag" href="https://ojs.aaai.org/index.php/AAAI/article/view/41142">AAAI</a>
  </div>
</div>

<div class="pub-item">
  <div class="pub-title"><a href="https://openreview.net/pdf?id=VQrbxORlvv">Style-Aligned Image Composition for Robust Detection of Abnormal Cells in Cytopathology</a></div>
  <div class="pub-authors">Qiuyi Qi*, Xin Li*, Ming Kong, Zikang Xu, Bingdi Chen, Qiang Zhu✉️, S. Kevin Zhou✉️</div>
  <div class="pub-venue"><em>MIDL</em> 2025 <span style="color:#10b981;font-weight:510;">(Oral)</span></div>
  <div class="pub-meta"><span class="pub-citations" data-pub-title="Style-Aligned Image Composition for Robust Detection of Abnormal Cells in Cytopathology"></span></div>
  <div class="pub-tags">
    <a class="pub-tag highlight" href="https://github.com/Joey-Qi/SAIC">Code</a>
    <a class="pub-tag" href="https://openreview.net/pdf?id=VQrbxORlvv">OpenReview</a>
  </div>
</div>

</div>
</section>

<!-- Honors -->
<section id="honors">
<div class="section-divider">
  <h2>Honors and Awards</h2>
</div>

<ul class="honors-list">
  <li><span class="honor-year">2025</span><span class="honor-text">Outstanding Graduate of Anhui Province</span></li>
  <li><span class="honor-year">2025</span><span class="honor-text">Outstanding Graduate of the University of Science and Technology of China (USTC)</span></li>
  <li><span class="honor-year">2021, 2023, 2024</span><span class="honor-text">Academic First Class Scholarship in USTC</span></li>
  <li><span class="honor-year">2022</span><span class="honor-text">Academic Second Class Scholarship in USTC</span></li>
  <li><span class="honor-year">2021</span><span class="honor-text">Suzhou Industrial Park Scholarship</span></li>
</ul>
</section>

<!-- Education -->
<section id="education">
<div class="section-divider">
  <h2>Education</h2>
</div>

<div class="education-grid">

<div class="edu-item">
  <h3>Ph.D. in Biomedical Engineering</h3>
  <div class="edu-meta">University of Science and Technology of China (USTC) · 2021.09 – 2025.06 · Suzhou, China</div>
</div>

<div class="edu-item">
  <h3>M.Eng. in Biological Science and Medical Engineering</h3>
  <div class="edu-meta">Southeast University (SEU) · 2018.09 – 2021.06 · Nanjing, China</div>
</div>

<div class="edu-item">
  <h3>B.Eng. in Biological Science and Medical Engineering</h3>
  <div class="edu-meta">Southeast University (SEU) · 2016.09 – 2018.06 · Nanjing, China</div>
</div>

<div class="edu-item">
  <h3>Undergraduate, Chien-Shiung Wu College (Honors College)</h3>
  <div class="edu-meta">Southeast University (SEU) · 2014.09 – 2016.06 · Nanjing, China</div>
</div>

</div>
</section>

<!-- Teaching -->
<section id="teaching">
<div class="section-divider">
  <h2>Teaching</h2>
</div>

<ul class="teaching-list">
  <li><span class="teaching-role">TA</span><span>Medical Image Computing (BMED6208P.01) — USTC, 2023 Fall</span></li>
  <li><span class="teaching-role">TA</span><span>Medical Image Computing (BMED6208P.01) — USTC, 2022 Fall</span></li>
</ul>
</section>

<!-- Professional Services -->
<section id="services">
<div class="section-divider">
  <h2>Professional Services</h2>
</div>

<ul class="services-list">
  <li><span class="service-role">Journal Reviewer</span><span>IEEE Transactions on Medical Imaging</span></li>
  <li><span class="service-role">Journal Reviewer</span><span>ACM Transactions on Computing for Healthcare</span></li>
  <li><span class="service-role">Journal Reviewer</span><span>Biomedical Signal Processing and Control</span></li>
  <li><span class="service-role">Journal Reviewer</span><span>Franklin Open</span></li>
  <li><span class="service-role">Journal Reviewer</span><span>ACM Computing Surveys</span></li>
  <li><span class="service-role">Conference Reviewer</span><span>AAAI Conference on Artificial Intelligence (AAAI 2026)</span></li>
  <li><span class="service-role">Conference Reviewer</span><span>MICCAI (2026, 2025, 2024)</span></li>
  <li><span class="service-role">Conference Reviewer</span><span>IEEE BIBM (2024)</span></li>
  <li><span class="service-role">Conference Reviewer</span><span>IEEE ISBI (2026, 2025)</span></li>
</ul>
</section>

<!-- Invited Talks -->
<section>
<div class="section-divider">
  <h2>Invited Talks</h2>
</div>

<ul class="talks-list">
  <li><span class="talk-venue">IEEE UV 2024</span><span>Benchmarking Fairness in Medical Foundation Models. IEEE International Conference on Universal Village, 2024.10</span></li>
</ul>
</section>

<!-- Internships -->
<section>
<div class="section-divider">
  <h2>Internships</h2>
</div>

<p style="color:var(--text-tertiary);font-size:0.875rem;">Coming soon...</p>
</section>

