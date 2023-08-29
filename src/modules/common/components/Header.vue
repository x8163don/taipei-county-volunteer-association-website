<template>
  <header>
    <div class="logo">
      <a href="./index.html"><img src="../../../assets/header/logo.png"/></a>
    </div>
    <nav>
      <a class="navitem" href="/about">關於我們</a>
      <a class="navitem" href="/activity">最新消息</a>
      <a class="navitem" href="/services">服務概況</a>
      <a class="navitem" href="/volunteer">志工服務</a>
      <a class="navitem" href="/contact">聯絡我們</a>
      <a class="navitem" href="/other">相關連結</a>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  padding: 0;
}

header {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.logo {
  align-self: flex-end;
  width: 366px;
  height: 66px;
}

nav {
  position: relative;
}

.navitem {
  display: inline-block;
  text-decoration: none;
  color: #2d2d2d;
  margin: 0 20px;
  font-size: 20px;
  line-height: 60px;
  font-weight: bold;
}

.navitem_list {
  display: none;
  list-style: none;
  position: absolute;
  z-index: 9999;
  background-color: white;
  left: 20px;
  font-size: 20px;
}

.navitem:hover > .navitem_secondlist {
  display: block;
}

.navitem_secondlist:hover {
  display: block;
}

.navitem:hover > .navitem_list {
  display: block;
}

.navitem_list:hover {
  display: block;
}

.navitem:hover::before {
  transform: rotate(90deg);
}

.navitem_secondlist {
  display: none;
  list-style: none;
  position: absolute;
  z-index: 9999;
  background-color: white;
  left: 170px;
}

.navitem > a,
.navitem a {
  font-size: 20px;
  text-decoration: none;
  color: #2d2d2d;
  font-weight: blod;
}

.navitem_list a,
.navitem_secondlist a {
  padding: 10px 20px;
}

.navitem-arrow::before {
  content: "";
  margin: 0 8px;
  display: inline-block;
  border-top: 6px solid transparent;
  border-left: 6px solid #2d2d2d;
  border-bottom: 6px solid transparent;
  border-right: 6px solid transparent;
}

.navitem-arrow:hover::before {
  transform: rotate(90deg);
}

.navitem:focus + .navitem_list {
  opacity: 1;
}

.navitem:focus + .navitem_secondlist {
  opacity: 1;
}

.navitem_list > li:hover,
.navitem_secondlist > li:hover {
  background-color: #f0f0f0;
}
</style>
