<script setup lang="ts">
import { values } from '../data/resume'
</script>

<template>
  <section id="values" class="section">
    <div class="wide">
      <div class="section-head">
        <h2 class="section-title">我能為客戶做到什麼</h2>
        <p class="section-intro">{{ values.intro }}</p>
      </div>
      <ul class="bento">
        <li v-for="item in values.items" :key="item.title" v-reveal class="tile hoverable s3">
          <h3 class="tile-title">{{ item.title }}</h3>
          <p class="muted desc">{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.desc {
  font-size: 0.92rem;
  line-height: 1.65;
}
</style>
