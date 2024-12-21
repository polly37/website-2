const articles = [
  {
      title: "泪目的拥抱亲人AI视频怎么做？详细教程分享",
      description: "暂无简介",
      image: "images/640.png",
      link: "https://mp.weixin.qq.com/s/WV_31jbjb10IMqYzL1T9Pw"
  },
  {
      title: "这个工具厉害到我不想推荐，它真的不是在做屎上雕花的事情",
      description: "暂无简介",
      image: "images/sousuo.png",
      link: "https://mp.weixin.qq.com/s/yDTvdOrg2WLL8Mv8WDbU1Q"
  },
  {
      title: "AI味几乎为 0，无脑写作的 AI 工具：kimi",
      description: "暂无简介",
      image: "images/kimi.png",
      link: "https://mp.weixin.qq.com/s/_vMNYLHx__Q012AzEGnwWQ"
  },
  {
    title: "投喂100个10万+爆款标题，AI总结出11条法则",
    description: "暂无简介",
    image: "images/tishici.png",
    link: "https://mp.weixin.qq.com/s/LLNa58j2X9kD8Y6F56RY0A"
  },
  {
    title: "5个头部AI剪辑工具怎么选，一键成大片",
    description: "暂无简介",
    image: "images/jianji.png",
    link: "https://mp.weixin.qq.com/s/r_PbZQKsCa5tSSBt78oKzg"
  },
  // 你可以在这里添加更多文章数据
];

const articleContainer = document.getElementById('article-container');
articles.forEach(article => {
    const articleCard = document.createElement('article');
    articleCard.className = 'article-card';
    articleCard.innerHTML = `
        <div class="author-info">
            <img src="images/touxiang.jpg" alt="Author" class="author-avatar">
            <div class="publication">
                <strong>鸣姐</strong>
            </div>
        </div>
        <div class="article-content">
            <div class="article-main">
                <h2 class="article-title"><a href="${article.link}" target="_blank">${article.title}</a></h2>
                <p class="article-description">${article.description}</p>
            </div>
            <img src="${article.image}" alt="Article image" class="article-image">
        </div>
    `;
    articleContainer.appendChild(articleCard);
});