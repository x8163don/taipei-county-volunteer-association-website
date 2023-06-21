<template>
  <div>
    <div class="social_container">
      <div class="news_container">
        <h1 class="news_title">新聞專區</h1>
        <ul class="news_inner">
          <li v-for="item in recentlyNews" :key="item.url">
            <a :href="item.url" target="_blank">
              <pre>{{ item.startDate }} {{ item.name }}</pre>
            </a
            >
          </li>
        </ul>
      </div>
      <div class="fb_container">
        <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100091648120015&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=396438565601073"
            width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentlyNewspaper",
  computed: {
    recentlyNews() {
      return this.news.slice(0, 10);
    }
  },
  data() {
    return {
      news: [
        {
          startDate: "2020/12/18",
          name: "新北老人文康車深入偏區趴趴走 長者「哈酒」、「練武功」",
          url: "https://www.chinatimes.com/realtimenews/20201218006034-260405?chdtv"
        },
        {
          startDate: "2018/06/10",
          name: "新北志願服務協會包2萬顆素粽 分送弱勢",
          url: "https://news.ltn.com.tw/news/life/breakingnews/2453708"
        },
      ]
    };
  }
};
</script>

<style scoped>
.social_container {
  display: flex;
  margin-top: 150px;
  margin-bottom: 100px;
  position: relative;
}

.news_title {
  font-size: 24px;
  position: relative;
  margin-bottom: 20px;
}

.news_title::before {
  content: "";
  width: 60px;
  height: 20px;
  background: #F6A096;
  position: absolute;
  left: -20px;
  top: 4px;
  z-index: -1;
}

.news_title::after {
  content: "";
  width: 700px;
  height: 2px;
  background: #a7a7a7;
  position: absolute;
  bottom: -14px;
  left: 0;
}

.news_inner {
  list-style: none;
  font-size: 16px;
  line-height: 40px;
  text-decoration: none;
}

.news_inner > li > a {
  text-decoration: none;
  color: #2d2d2d;
}

.news_inner > li > a:hover {
  color: #ff4b2d;
}

.news_container {
  width: 700px;
}

/* FB粉專 */
.fb_container {
  width: 500px;
}

iframe {
  display: inline-block;
  margin-top: 38px;
}
</style>
