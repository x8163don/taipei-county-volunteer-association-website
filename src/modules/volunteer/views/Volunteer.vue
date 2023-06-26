<template>
  <div>
    <div class="chart_container">
      <div class="info_container">
        <div class="info_title">
          <img src="../../../assets/volunteer/raisHhand.png" />志工隊服務理念
        </div>
        <div class="info_content">
          以服務精神協助中心推動性別平等工作，推動性平相關業務，並發展不同之多元技能志工。<br />
          <br />
          本中心加強志工隊志願服務品質，組成青年志工、家庭志工、女性居家水電修繕小組志工等，發展極具特色志願服務團隊。
        </div>
      </div>
      <img src="../../../assets/volunteer/chart.png" />
    </div>

    <div class="time_container">
      <img src="../../../assets/volunteer/serviceTime.png" />
      <div class="title">
        志工招幕<img src="../../../assets/volunteer/hand.png" />
      </div>
    </div>
    <div class="service_container">
      <img src="../../../assets/volunteer/left_lineImg.png" />
      <img src="../../../assets/volunteer/service.png" />
    </div>
    <div class="service_container">
      <img src="../../../assets/volunteer/contact.png" />
      <img src="../../../assets/volunteer/right_lineImg.png" />
    </div>
  </div>
</template>

<style scoped>
.chart_container,
.time_container,
.service_container,

.info_container {
  width: 60%;
  padding: 0 140px;
}

.info_title {
  font-size: 24px;
  font-weight: bold;
  text-align: right;
}

.info_content {
  margin-top: 20px;
}

.time_container {
  display: flex;
  justify-content: space-between;
  padding: 0 150px;
}

.title {
  position: relative;
  font-size: 24px;
  font-weight: bold;
}

.title > img {
  position: absolute;
  right: -30px;
  top: 40px;
}

.service_container {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 150px;
}

.service_container > img {
  object-fit: none;
}

.medals_container {
  display: block;
}

.medalsImg {
}

.medals_content {
  display: flex;
  justify-content: space-around;
  padding: 30px;
  border-radius: 10px;
}

.medals_title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}

.medals_info_content {
  width: 300px;
  height: 80px;
}

.image {
  width: 260px;
  height: 367px;
}
</style>
