<template>
  <footer class="footer">
    <div class="container footer__inner">
      
      <div class="footer__top">
        
        <!-- BRAND -->
        <div class="footer__brand">
          <img class="footer__logo" :src="logo" alt="IDMX" />

          <p class="footer__description">
            {{ t.footer.description }}
          </p>
        </div>

        <!-- NAV -->
        <nav class="footer__nav">
          <NavLink href="#solution">{{ t.nav.solution }}</NavLink>
          <NavLink href="#how">{{ t.nav.how }}</NavLink>
          <NavLink href="#modules">{{ t.nav.modules }}</NavLink>
          <NavLink href="#integrations">{{ t.nav.integrations }}</NavLink>
          <NavLink href="#scenarios">{{ t.nav.scenarios }}</NavLink>
          <NavLink href="#faq">{{ t.nav.faq }}</NavLink>
        </nav>

        <!-- CONTACTS -->
        <div class="footer__contacts">
          
          <a class="footer__contact" :href="`mailto:${t.footer.email}`">
            <span class="footer__contact-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 7L12 13L20 7" stroke="currentColor" stroke-width="1.6"/>
                <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.6"/>
              </svg>
            </span>
            <span>{{ t.footer.email }}</span>
          </a>

          <a class="footer__contact" :href="`tel:${phoneHref}`">
            <span class="footer__contact-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7.8 4H5.6C4.72 4 4 4.72 4 5.6C4 13.55 10.45 20 18.4 20C19.28 20 20 19.28 20 18.4V16.2C20 15.55 19.61 14.96 19 14.72L16.55 13.74C16 13.52 15.37 13.66 14.96 14.08L13.88 15.16C11.92 14.16 9.84 12.08 8.84 10.12L9.92 9.04C10.34 8.63 10.48 8 10.26 7.45L9.28 5C9.04 4.39 8.45 4 7.8 4Z"
                  stroke="currentColor" stroke-width="1.6"/>
              </svg>
            </span>
            <span>{{ t.footer.phone }}</span>
          </a>

          <div class="footer__actions">
            <button class="footer__button" @click="emit('open-demo')">
              {{ t.footer.primaryCta.label }}
            </button>

            <button
              class="footer__button footer__button--secondary"
              @click="emit('open-demo')"
            >
              {{ t.footer.secondaryCta.label }}
            </button>
          </div>

        </div>
      </div>

      <!-- BOTTOM -->
      <div class="footer__bottom">
        <div class="footer__copyright">
          © {{ new Date().getFullYear() }}{{ t.footer.copyright }}
        </div>

        <div class="footer__legal">
          <a
            v-for="link in t.footer.legal"
            :key="link.label"
            :href="link.href"
            class="footer__legal-link"
          >
            {{ link.label }}
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '../../composables/useLocale'
import NavLink from '../ui/NavLink.vue'
import logo from '../../assets/hero/idmx_white.svg'

const { t } = useLocale()
const emit = defineEmits(['open-demo'])

const phoneHref = computed(() => {
  return t.value.footer.phone.replace(/[^\d+]/g, '')
})
</script>

<style scoped>
.footer {
  background: var(--background-dark);
  border-top: 1px solid #019dff;
  color: rgba(255, 255, 255, 0.92);
}

.footer__inner {
  padding: 56px 0 32px;
}

.footer__top {
  display: grid;
  grid-template-columns: 220px 1fr 260px;
  gap: 40px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.footer__brand {
  transform: translateX(-6px);
}

.footer__logo {
  width: 130px;
  margin-bottom: 16px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.footer__logo:hover {
  transform: scale(1.04);
  opacity: 0.9;
}

.footer__description {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(220, 236, 255, 0.7);
}

/* NAV */
.footer__nav {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 12px 32px;
  justify-content: start;
}

.footer__nav :deep(a) {
  width: fit-content;
  font-size: 15px;
  font-weight: 500;
}

.footer__nav :deep(a:hover) {
  color: var(--white);
}

/* CONTACTS */
.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer__contact {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.82);
  text-decoration: none;
  font-size: 14px;
  line-height: 1.4;
  transition: color 0.25s ease;
}

.footer__contact:hover {
  color: var(--white);
}

.footer__contact-icon {
  width: 16px;
  height: 16px;
  opacity: 0.8;
  color: var(--color-primary);
  flex-shrink: 0;
}

.footer__contact-icon svg {
  width: 100%;
  height: 100%;
}

.footer__actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.footer__button {
  width: 100%;
  height: 42px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.02);
  color: #fff;
  cursor: pointer;
  transition:
    border-color 0.25s ease,
    background 0.25s ease;
}

.footer__button:hover {
  border-color: rgba(1, 157, 255, 0.6);
  background: rgba(1, 157, 255, 0.08);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding-top: 22px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
}

.footer__legal {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.footer__legal-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.25s ease;
}

.footer__legal-link:hover {
  color: var(--white);
}

@media (max-width: 1180px) {
  .footer__top {
    grid-template-columns: 1fr;
  }

  .footer__brand {
    transform: none;
  }
}

@media (max-width: 768px) {
  .footer__inner {
    padding: 42px 0 28px;
  }

  .footer__nav {
    grid-template-columns: 1fr;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>