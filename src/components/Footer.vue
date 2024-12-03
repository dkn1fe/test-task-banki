<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__wrapper">
        <nav class="footer__navigation">
          <ul class="footer__navigation__list">
            <li v-for="item in navList" :key="item.id">
              <a :href="item.link">{{ item.title }}</a>
            </li>
          </ul>
        </nav>
        <div class="footer__right">
          <div class="footer__phone">
            <img :src="icons.phone" />
            <h5>+7 (812) 555-55-55</h5>
          </div>
          <div class="footer__geo">
            <img :src="icons.geo" />
            <h5>г. Санкт-Петербург, ул. Ефимова, 3</h5>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { NAVIGATION_LIST } from "@/const/const";
import phone from "@/assets/phone.png";
import geo from "@/assets/geo.png";

export default {
  name: "FooterComponent",
  data() {
    return {
      navList: NAVIGATION_LIST,
      icons: {
        phone,
        geo,
      },
    };
  },
};
</script>
<style lang="scss">
.footer {
  background: #eceaea;
  min-height: 96px;
  padding-top: 20px;
  &__container {
    max-width: 1360px;
    margin: 0 auto;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__navigation {
    padding-left: 160px;
    &__list {
      display: flex;
      align-items: center;
      gap: 48px;
      a {
        color: var(--footer-text-color);
      }
    }
  }
  &__right {
    display: flex;
    align-items: center;
    gap: 30px;
    color: var(--footer-text-color);
  }
  &__phone,
  &__geo {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
  }
}

@media (max-width: 1380px) {
  .footer {
    width: 100%;
    &__container {
      max-width: 1240px;
      margin: 0 auto;
    }
    &__navigation {
      padding-left: 10px;
    }
    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}

@media (max-width: 624px) {
  .footer {
    padding: 20px 10px;
    &__wrapper {
      grid-template-columns: repeat(1, 1fr);
      justify-content: space-between;
    }
    &__navigation__list {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      a {
        font-size: var(--text-size);
      }
    }
    &__right {
      flex-direction: column;
      gap: 0px;
    }
  }
}
</style>
