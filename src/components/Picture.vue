<template>
  <div class="picture__container">
    <h1 class="picture__title">Картины эпохи возрождения</h1>
    <div class="picture__card__list">
      <div
        v-for="item in pictureCardList"
        :key="item.id"
        :class="[!item.price && 'solded', 'picture__card']"
      >
        <img
          @click="setIsOpenModal(item.id, true)"
          :src="item.image"
          alt="picture_image"
        />
        <div class="picture__card__content">
          <h3 @click="setIsOpenModal(item.id, true)" class="picture__name">
            «{{ item.name }}»
          </h3>
          <h3 @click="setIsOpenModal(item.id, true)" class="picture__author">
            {{ item.author }}
          </h3>
          <div class="picture__price_info">
            <div class="picture__prices">
              <p class="picture__sale" v-if="item.sale">
                {{ item.sale.toLocaleString() }}$
              </p>
              <p class="picture__price" v-if="item.price">
                {{ item.price.toLocaleString() }}<span>$</span>
              </p>
              <p class="picture__solded" v-if="!item.price">
                Продана на аукционе
              </p>
            </div>
            <div
              v-if="item.price"
              :class="[
                item.status === 'preloader' && 'load',
                item.status === 'purchase' && 'purchase',
                'picture__button',
              ]"
            >
              <button @click="setButtonStatus(item.id)">
                <img v-if="item.status === 'preloader'" :src="icons.spinner" />
                <img v-if="item.status === 'purchase'" :src="icons.checked" />
                {{ statusList[item.status] }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Window -->
    <div v-if="isOpenModal">
      <ModalWindow :cardInfo="cardInfo" :setIsOpenModal="setIsOpenModal" />
    </div>
    <!--  -->
  </div>
</template>

<script>
import { BUTTON_STATUS } from "@/const/const";
import ModalWindow from "./ModalWindow.vue";
import spinner from "@/assets/spinner.gif";
import checked from "@/assets/checked.png";

export default {
  name: "Picture",
  components: { ModalWindow },
  props: [
    "pictureCardList",
    "setButtonStatus",
    "buttonStatus",
    "isOpenModal",
    "setIsOpenModal",
    "cardInfo",
  ],
  data() {
    return {
      statusList: BUTTON_STATUS,
      icons: {
        spinner,
        checked,
      },
    };
  },
};
</script>

<style lang="scss">
.picture {
  &__container {
    max-width: 1240px;
    margin: 0 auto;
  }
  &__title {
    font-size: 24px;
    color: var(--text-color);
    font-weight: bold;
    padding-top: 56px;
  }
  &__name,
  &__author {
    font-size: 18px;
    color: var(--text-color);
    font-weight: 400;
    cursor: pointer;
  }

  &__card__list {
    padding-top: 48px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
  &__card {
    border: 1px solid var(--border-color);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    img {
      cursor: pointer;
    }
  }
  &__card__content {
    display: flex;
    flex-direction: column;
    padding: 24px;
    height: auto;
    flex-grow: 1;
  }
  &__price_info {
    padding-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    span {
      padding-left: 3px;
    }
  }
  &__sale {
    color: #a0a0a0;
    text-decoration: line-through;
    font-size: var(--text-size);
  }
  &__price,
  &__solded {
    font-weight: bold;
    color: var(--text-color);
  }
  &__button {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      font-size: var(--text-size);
      background: var(--primory-background);
      color: var(--white-color);
      padding: 14px 33px;
      max-width: 120px;
      max-height: 48px;
      white-space: nowrap;
      cursor: pointer;
      border: none;
    }
    button:hover {
      transition: 0.3s;
      background: var(--primory-background-hover);
    }
  }
}
.load {
  button {
    opacity: 1;
    background: var(--disable-button);
    color: var(--white-color);
  }

  button img {
    opacity: 1;
  }

  button span,
  button p {
    opacity: 1;
  }
}
.purchase {
  button {
    background: var(--selected-background);
  }
}

.solded {
  opacity: 50%;
}




@media (max-width: 1220px) {
  .picture {
    &__card__list {
      grid-template-columns: repeat(2, 1fr);
    }
    &__title{
      text-align: center;
    }
  }
};

@media (max-width: 880px) {
  .picture {
    &__card__list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
};

</style>
