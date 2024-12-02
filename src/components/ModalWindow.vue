<template>
  <div class="overlay" @click="setIsOpenModal(null, false)">
    <div class="modal" @click.stop>
      <div class="modal__close">
        <span @click="setIsOpenModal(null, false)">X</span>
      </div>
      <div class="modal__content">
        <Flicking ref="flicking" class="slider">
          <div
            :key="index"
            class="slider__item"
            v-for="(image, index) in cardInfo.images"
          >
            <img :src="image" />
          </div>
        </Flicking>
        <button @click="buttonPrev" class="slider__prev_button"><</button>
        <button @click="buttonNext" class="slider__next_button">></button>
        <div class="modal__bio">
          <h3>«{{ cardInfo.name }}»</h3>
          <h3>«{{ cardInfo.author }}»</h3>
        </div>
        <div class="modal__description">
          <p>{{ cardInfo.description }}</p>
        </div>
        <div class="modal__price_info">
          <p class="modal__sale" v-if="cardInfo.sale">
            {{ cardInfo.sale.toLocaleString() }}$
          </p>
          <p class="modal__price" v-if="cardInfo.price">
            {{ cardInfo.price.toLocaleString() }}<span>$</span>
          </p>
          <p class="modal__solded" v-if="!cardInfo.price">
                Продана на аукционе
              </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";

export default {
  name: "ModalWindow",
  components: { Flicking },
  props: ["setIsOpenModal", "cardInfo"],
  methods: {
    buttonNext() {
      this.$refs.flicking.next();
    },
    buttonPrev() {
      this.$refs.flicking.prev();
    },
  },
};
</script>

<style lang="scss">
@import "~@egjs/vue-flicking/dist/flicking.css";

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  overflow-y: none;
}

.modal {
  background-color: white;
  width: 500px;
  height: 500px;
  padding: 10px 20px;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;

  &__bio {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    h3 {
      font-size: 18px;
      font-weight: 400;
      color: var(--text-color);
    }
  }

  &__price_info {
    padding-top: 5px;
    text-align: center;
  }
  &__sale {
    color: #a0a0a0;
    text-decoration: line-through;
    font-size: var(--text-size);
  }

  &__price {
    font-weight: bold;
    color: var(--text-color);
  }
  &__solded{
    padding-top:10px;
  }

  &__description {
    p {
      font-size: var(--text-size);
      color: var(--footer-text-color);
    }
  }

  &__close {
    display: flex;
    justify-content: flex-end;
    span {
      font-size: 18px;
      font-weight: bold;
      width: 10px;
      cursor: pointer;
    }
  }
}
.slider {
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;

  &__item {
    min-width: 100%;
    img {
      width: 450px;
      height: 200px;
      object-fit: cover;
      border-radius: 6px;
    }
  }

  &__next_button,
  &__prev_button {
    position: absolute;
    z-index: 1001;
    top: 25%;
    border-radius: 50%;
    padding: 2px 11px;
    border: none;
    cursor: pointer;
    background: var(--white-color);
    font-weight: bold;
    font-size: 24px;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background: rgb(163, 162, 162);
    }

    &:focus {
      outline: none;
    }
  }

  &__next_button {
    right: 20px;
  }

  &__prev_button {
    left: 15px;
  }
}
</style>
