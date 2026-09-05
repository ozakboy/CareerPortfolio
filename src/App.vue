<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SummarySection from './components/SummarySection.vue'
import ValueSection from './components/ValueSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import OpenSourceSection from './components/OpenSourceSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <SummarySection />
    <ValueSection />
    <SkillsSection />
    <OpenSourceSection />
    <TechStackSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
