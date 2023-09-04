<template>
  <div>
    <div class="chart_container">
      <div class="info_container">
        <div class="info_title">
          <img src="../../../assets/volunteer/raisHhand.png"/>志工隊服務理念
        </div>
        <div class="info_content">
          配合政府社會福利政策之推行，結合民間團體力量與社會資源，培育優秀志願服務人員。
          <br/>
          促進或協助各志願服務團體的成立，培訓志工幹部，落實志願服務工作，促使志願服務工作全民化，鼓勵「人人做好人，大家做好事」。
        </div>
      </div>
      <img src="../../../assets/volunteer/chart.png"/>
    </div>

    <div class="time_container">
      <img src="../../../assets/volunteer/serviceTime.png"/>
      <div class="title">
        <a href="https://drive.google.com/file/d/1eDXUVdOChghpaZNN6pcU6EqOtoxCjGhV/view?usp=sharing">
          志工招幕<img src="../../../assets/volunteer/hand.png"/>
        </a>
      </div>
    </div>
    <div class="service_container">
      <img src="../../../assets/volunteer/left_lineImg.png"/>
      <img src="../../../assets/volunteer/service.png"/>
    </div>
    <div class="service_container">
      <img src="../../../assets/volunteer/contact.png"/>
      <img src="../../../assets/volunteer/right_lineImg.png"/>
    </div>
  </div>
</template>

<style scoped>
.chart_container,
.time_container,
.service_container,
.medals_container {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  margin-top: 150px;
}

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
