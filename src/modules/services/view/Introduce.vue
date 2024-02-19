<template>
  <div class="main_container">
    <div class="guid_content">
      <h1>服務概況</h1>
      <br />
      <h2>主要服務</h2>
      <br />
      <h4>
        志願服務推廣
      </h4>
      <p>• 志工招募：應本會多元服務方案之需求，招募有志之士積極參與</p>
      <p>
        •
        志工教育訓練與志願服務推廣：辦理志工召募、教育訓練課程、配合政府宣導政令及推動各項社會福利政策。
      </p>
      <p>
        •
        各項活動：協助政府辦理各項表揚活動、社會福利服務、其他各項社會福利綜合政策。
      </p>
      <br />
      <h4>街友街頭關懷－愛點亮街頭</h4>
      <p>
        結合各街友人數較密集之鄉鎮市在地之志願服務團隊，運用在地志工人力服務社區之街友，透過每周固定的志工街頭訪視，持續對街友傳遞關懷，並將街友需求即時回傳予新北市街友外展服務中心。
        因應志工可提供服務時間，分成兩個組別 ：
      </p>
      <p>
        1.街友關懷訪視組：夜間街頭巡訪、協助街友資料建檔、協助發放熱食、衣物及其他物資。
      </p>
      <p>
        2.定點支援服務組：食物銀行募集、分送食物、支援夜訪組準備需發放之物資及食物、。
      </p>
      <br />
      <h4>行動銀髮俱樂部巡迴服務</h4>
      <p>
        以巡迴關懷專車深入新北市二十九區，使偏遠地區因資訊不足、交通不便的長者瞭解政府所提供的福利服務，
        並辦理各項福利政策宣導、福利服務諮詢、基本健康服務、衛教保健推廣、休閒文康育樂及團體認知活動、節慶活動辦理與生活照顧等，並提供社區長者、家屬有關環境適應、人際關係等方面諮詢服務，以利長者就近接受服務，帶動長者對社區環境關懷的熱忱及促進社會參與。
      </p>
      <br />
      <h4>溫心天使</h4>
      <p>
        積極投入「弱勢家庭整合型安全網」，結合在地人力及物力資源，使社區有需求的家庭及時進入服務系統，持續關懷，使弱勢家庭所面臨的困難及危機得以獲得舒緩
        。讓社區鄰里間主動將有需求的家庭能夠「及時發現、及時通報、及時服務」。
      </p>
      <br />
      <h4>食物銀行</h4>
      <p>
        為了使資源不浪費，因此結合麵包店將其尚未兜售完成之麵包，經本會志工前去募集，分發給所需的弱勢團體，像是街友、弱勢家庭等，讓資源獲得最有效的分配與使用。
      </p>
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
  color: #ffe4ca;
  margin: 0 10px;
}

.breadcrumb_list > li:first-child::before {
  display: none;
}

.guid_content {
  margin: 0 auto;
  border: 8px solid #ffe4ca;
  background: white;
  border-radius: 40px;
  width: 90%;
  padding: 50px 50px 50px 50px;
  top: 50px;
  z-index: 1;
}

.area_map_container > div {
  cursor: pointer;
}
</style>
