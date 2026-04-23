<template>
  <a
    :href="href"
    class="nav-link"
    :class="{ 'nav-link--active': active }"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  active?: boolean
}>()
</script>

<style scoped>
.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  text-decoration: none;

  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  font-weight: 400;
  line-height: 134%;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.1s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  transform: translateY(-1px);
}

.nav-link--active {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}
</style>