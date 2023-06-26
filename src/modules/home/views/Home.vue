<template>
  <div class="home">
    <div class="banner"><img src="../../../assets/home/banner.png" /></div>
    <RecentlyActivities></RecentlyActivities>
    <RecentlyNewspaper></RecentlyNewspaper>
  </div>
</template>

<script>
import RecentlyActivities from "../components/RecentlyActivities";
import RecentlyNewspaper from "../components/RecentlyNewspaper";

export default {
  components: {
    RecentlyActivities,
    RecentlyNewspaper
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.home {
  width: 1200px;
  margin: 0 auto;
}
</style>
