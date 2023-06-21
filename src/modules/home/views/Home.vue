<template>
  <div class="home">
    <div class="banner"><img src="../../../assets/home/banner.jpg" /></div>
    <RecentlyActivities></RecentlyActivities>
    <RecentlyNewspaper></RecentlyNewspaper>
    <OtherWebsite></OtherWebsite>
  </div>
</template>

<script>
import RecentlyActivities from "../components/RecentlyActivities";
import RecentlyNewspaper from "../components/RecentlyNewspaper";
import OtherWebsite from "../components/OtherWebsite";

export default {
  components: {
    OtherWebsite,
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
