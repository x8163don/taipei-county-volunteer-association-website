<template>
  <div class="main_container">
    <div class="guid_content">
      <h1>聯絡我們</h1>
      <br />
      <p>會 址：220新北市板橋區大智街71巷5弄1號</p>
      <p>聯絡電話：(02)8969-7736</p>
      <p>傳 真：(02)8969-7740</p>
      <p>電子信箱：f2725082@ms65.hinet.net</p>
      <br />
      <p>立案許可機關字號：北府社團換字第1011040783號</p>
      <p>郵政劃撥帳號：19444971 戶名：社團法人新北市志願服務協會</p>
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
  height: 800px;
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
  border: 8px solid #ffe4ca;
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
