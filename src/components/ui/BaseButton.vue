<template>
  <button :class="['btn', variant]">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
}>()
</script>

<style scoped>
.btn {
  height: 39px;
  padding: 0 12px;

  border-radius: 8px;
  border: none;

  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  line-height: 100%;

  cursor: pointer;
  transition: all 0.2s ease;
}

.primary {
  background: var(--color-primary, #019DFF);
  color: #fff;
}

.primary:hover {
border-radius: 10px;
 filter: brightness(1.05);
  background-position: 100% 50%;
    box-shadow:
    0 0 0 1px var(--color-hero-button-border) inset,
    0 24px 50px var(--color-hero-button-shadow-hover),
    0 0 60px var(--color-hero-button-glow-hover),
    0 0 120px var(--color-hero-button-glow-soft-hover);
}

.secondary {
  background: transparent;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
}
</style>