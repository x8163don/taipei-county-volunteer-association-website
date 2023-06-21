<template>
  <footer>
    <div class="info">
      <p>社團法人新北市志願服務協會</p>
      <br />
      地址<br />
      220新北市板橋區大智街71巷5弄1號<br />
      <br />
      服務時間<br />
      週一至週五09:00-18:00 (週六、週日暨國定假日休館)<br />
      <br />
      聯絡資訊<br />
      電話：(02)8969-7736<br />
      傳真：(02)8969-7740<br />
      電子信箱：f2725082@ms65.hinet.net<br />
      <br />
      立案許可機關字號：北府社團換字第1011040783號<br />
      郵政劃撥帳號：19444971  戶名：社團法人新北市志願服務協會<br />
    </div>
    <div class="webmap">
      <ul>
        <p>網站地圖</p>
        <br />
        <li><a href="/about/introduce">最新消息</a></li>
        <li><a href="/about/booking">關於我們</a></li>
        <li><a href="/about/traffic">服務概況</a></li>
        <li><a href="/activity/exhibition">志工服務</a></li>
        <li><a href="/activity">聯絡我們</a></li>
        <li><a href="/gender">相關連結</a></li>
      </ul>
      <div class="img_icon">
        <a href="https://www.facebook.com/NTWSC/posts/1387567328310264"
          ><img src="../../../assets/footer/icon_fb.png"
        /></a>
        <a
          href="https://www.youtube.com/channel/UCMzQZyh84q_60M9Hu3YJAqg/videos"
          ><img src="../../../assets/footer/icon_youtube.png"
        /></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scope>
footer {
  width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex !important;
  position: relative;
}

.info {
  width: 50%;
  background-color: #FFEEED;
  padding: 40px;
  font-size: 14px;
}

.info > p,
.webmap > ul > p {
  font-weight: bold;
}

.webmap {
  width: 50%;
  background-color: #FFEEED;
  padding: 40px;
  font-size: 14px;
}

.webmap > ul {
  list-style: none;
}

.webmap > ul > li > a {
  text-decoration: none;
  color: #2d2d2d;
  line-height: 30px;
}

.img_icon {
  position: absolute;
  right: 40px;
  bottom: 40px;
}

.img_icon > a > img {
  width: 40px;
  height: 40px;
}

.img_icon > a {
  margin-right: 5px;
}
</style>
