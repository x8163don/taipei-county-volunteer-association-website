<template>
  <div class="main_container">
    <div class="guid_content">
      <h1>關於協會</h1>
      <br />
      <p>設立宗旨－</p>
      <br />
      <p>
        配合政府社會福利政策之推行，結合民間團體力量與社會資源，培育優秀志願服務人員。
      </p>
      <p>
        促進或協助各志願服務團體的成立，培訓志工幹部，落實志願服務工作，促使志願服務工作全民化，鼓勵「人人做好人，大家做好事」。
      </p>
      <br />
      <p>
        新北市最早期志願服務工作都是各做各的，並未有完整的組織，直到民國七十一年，為因應政府部門不斷開創新的服務方案所帶來的龐大服務需要，各鄉鎮的志工伙伴才相繼組團。
        面對日益龐大的社政工作，新北市政府認為有必要成立專責機構來培訓團務幹部，協助政府推動社會服務。八十二年二月底，社會局召開志願服務策進委員會擴大會報中，經與會學者一致反應，為使志願服務人員訓練與研究發展有完整的規畫，本市民間社團力量得以統合，並使社會資源不致重疊或浪費，乃決議成立協會，由社會局邱局長汝娜指示志願服務社工人員協助籌備，而於民國八十二年十月三日成立本會。
      </p>
      <br />
      <img src="../../../assets/about/oc.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 24px;
}

.main_container {
  width: 1200px;
  height: 1700px;
  margin: 0 auto;
  position: relative;
}

.breadcrumb_list > li {
  display: inline-block;
  color: gray;
  font-size: 1rem;
}

.breadcrumb_list > li > a {
  text-decoration: none;
  display: inline-block;
  color: #2d2d2d;
}

.breadcrumb_list > li::before {
  content: "/";
  font-size: 18px;
  color: #f0f0f0;
  margin: 0 10px;
}

.breadcrumb_list > li:first-child::before {
  display: none;
}

.guid_content {
  border: 8px solid #f0f0f0;
  background: white;
  border-radius: 40px;
  width: 90%;
  padding: 50px 50px 50px 50px;
  position: absolute;
  top: 50px;
  z-index: 1;
}

.area_map_container > div {
  cursor: pointer;
}
</style>
