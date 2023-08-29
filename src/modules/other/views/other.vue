<template>
  <div class="main_container">
    <div class="guid_content">
      <a href="https://www.facebook.com/groups/1176297966254796/"
      >新北市志願服務協會 Facebook</a
      >
    </div>
    <div class="guid_content">
      <a href="https://www.facebook.com/profile.php?id=100090387522993"
      >行動銀髮 Facebook</a
      >
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
  height: auto;
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
  margin-top: 40px;
  padding: 50px 50px 50px 50px;
  z-index: 1;
}

.area_map_container > div {
  cursor: pointer;
}
</style>
