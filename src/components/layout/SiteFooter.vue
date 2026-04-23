<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <img
            class="footer__logo"
            :src="logo"
            alt="IDMX"
          />

          <p class="footer__description">
            {{ t.footer.description }}
          </p>
        </div>

        <div class="footer__nav-columns">
          <nav class="footer__nav" aria-label="Footer navigation">
  <a
    v-for="link in t.footer.linksLeft"
    :key="link.label"
    class="footer__link"
    :href="link.href"
  >
    {{ link.label }}
  </a>
</nav>

<nav class="footer__nav" aria-label="Footer secondary navigation">
  <a
    v-for="link in t.footer.linksRight"
    :key="link.label"
    class="footer__link"
    :href="link.href"
  >
    {{ link.label }}
  </a>
</nav>
        </div>

        <div class="footer__contacts">
          <a class="footer__contact" :href="`mailto:${t.footer.email}`">
            <span class="footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7L12 13L20 7"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="3"
                  stroke="currentColor"
                  stroke-width="1.8"
                />
              </svg>
            </span>
            <span>{{ t.footer.email }}</span>
          </a>

          <a class="footer__contact" :href="`tel:${phoneHref}`">
            <span class="footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M7.8 4H5.6C4.72 4 4 4.72 4 5.6C4 13.55 10.45 20 18.4 20C19.28 20 20 19.28 20 18.4V16.2C20 15.55 19.61 14.96 19 14.72L16.55 13.74C16 13.52 15.37 13.66 14.96 14.08L13.88 15.16C11.92 14.16 9.84 12.08 8.84 10.12L9.92 9.04C10.34 8.63 10.48 8 10.26 7.45L9.28 5C9.04 4.39 8.45 4 7.8 4Z"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>{{ t.footer.phone }}</span>
          </a>

          <div class="footer__actions">
            <button
                type="button"
                class="footer__button"
                @click="emit('open-demo')"
                >
                {{ t.footer.primaryCta.label }}
            </button>

            <button
                type="button"
                class="footer__button footer__button--secondary"
                @click="emit('open-demo')"
                >
                    {{ t.footer.secondaryCta.label }}
            </button>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__copyright">
          {{ t.footer.copyright }}
        </div>

        <div class="footer__legal">
          <a
            v-for="link in t.footer.legal"
            :key="link.label"
            class="footer__legal-link"
            :href="link.href"
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
import logo from '../../assets/hero/idmx_white.svg'

const { t } = useLocale()
const emit = defineEmits(['open-demo'])

const phoneHref = computed(() => {
  return t.value.footer.phone.replace(/[^\d+]/g, '')
})
</script>

<style scoped>
.footer {
  position: relative;
  background:
    linear-gradient(180deg, #111722 0%, #0f1520 100%);
  border-top: 4px solid #019dff;
  color: rgba(255, 255, 255, 0.92);
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 10% 10%, rgba(1, 157, 255, 0.08), transparent 28%),
    radial-gradient(circle at 90% 0%, rgba(54, 177, 255, 0.06), transparent 24%);
  pointer-events: none;
}

.footer__inner {
  position: relative;
  z-index: 1;
  padding: 56px 0 34px;
}

.footer__top {
  display: grid;
  grid-template-columns: 260px 1fr 280px;
  gap: 48px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer__logo {
  width: 110px;
  height: auto;
  display: block;
  
}

.footer__description {
  margin: 0;
  max-width: 220px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  line-height: 1.45;
}

.footer__nav-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(160px, 1fr));
  gap: 24px 48px;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.footer__link {
  color: rgba(255, 255, 255, 0.88);
  font-size: 14px;
  line-height: 1.35;
  text-decoration: none;
  transition: color 0.22s ease, transform 0.22s ease;
}

.footer__link:hover {
  color: #ffffff;
  transform: translateX(2px);
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.footer__contact {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 14px;
  line-height: 1.35;
  transition: color 0.22s ease;
}

.footer__contact:hover {
  color: #ffffff;
}

.footer__contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: #019dff;
  flex-shrink: 0;
}

.footer__contact-icon svg {
  width: 18px;
  height: 18px;
}

.footer__actions {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  margin-top: 6px;
}

.footer__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  cursor: pointer;
  width: 100%;
  padding: 0 20px;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 12px;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.02);
  transition:
    border-color 0.24s ease,
    background 0.24s ease,
    transform 0.24s ease;
}

.footer__button:hover {
  border-color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-1px);
}

.footer__button--secondary {
  color: rgba(255, 255, 255, 0.92);
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 28px;
}

.footer__copyright {
  color: rgba(255, 255, 255, 0.58);
  font-size: 13px;
  line-height: 1.4;
}

.footer__legal {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
}

.footer__legal-link {
  color: rgba(255, 255, 255, 0.58);
  font-size: 12px;
  line-height: 1.4;
  text-decoration: none;
  transition: color 0.22s ease;
}

.footer__legal-link:hover {
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 1180px) {
  .footer__top {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .footer__description {
    max-width: 360px;
  }

  .footer__contacts {
    max-width: 360px;
  }
}

@media (max-width: 768px) {
  .footer__inner {
    padding: 42px 0 26px;
  }

  .footer__top {
    gap: 30px;
    padding-bottom: 24px;
  }

  .footer__nav-columns {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .footer__nav {
    gap: 14px;
  }

  .footer__description {
    font-size: 16px;
  }

  .footer__link,
  .footer__contact,
  .footer__button {
    font-size: 15px;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    padding-top: 22px;
  }

  .footer__legal {
    gap: 18px;
  }
}
</style>