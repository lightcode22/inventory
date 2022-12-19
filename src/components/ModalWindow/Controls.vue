<template>
  <div class="controls">
    <div v-if="isFormOpen" class="formBlock" :class="theme">
      <form @submit.prevent="removeItems">
        <input
          placeholder="Введите количество"
          autocomplete="off"
          v-model="formInput"
        />

        <div>
          <button
            type="button"
            class="cancel"
            @click="toggleForm"
            :class="theme"
          >
            Отмена</button
          ><button type="submit" class="confirm">Подтвердить</button>
        </div>
      </form>
    </div>
    <div v-else class="buttonBlock">
      <button @click="toggleForm">Удалить предмет</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "@vue/reactivity";
import { useInventoryStore } from "@/stores/inventory";
import useTheme from "../../composables/useTheme";

const props = defineProps({ itemId: String });

const inventoryStore = useInventoryStore();

const formInput = ref("");

const isFormOpen = ref(false);

const theme = computed(() => useTheme());

const toggleForm = () => {
  isFormOpen.value = !isFormOpen.value;
};

const removeItems = (e) => {
  const { value } = formInput;

  if (isNaN(Number(value))) {
    return;
  }

  inventoryStore.removeItems(props.itemId, value);

  formInput.value = "";
};
</script>

<style lang="scss" scoped>
.controls {
  min-height: 75px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 14px;
}

.formBlock {
  &.light {
    background-color: #fff;
    border-top: 1px solid #000;
  }

  &.dark {
    background-color: var(--dark-background);
    border-top: 1px solid var(--dark-border);
  }
}

form {
  padding: 20px;

  input {
    margin-bottom: 20px;
    width: 100%;

    padding: 12px;
    font-weight: 500;

    &.light {
      color: #000;
      border: 1px solid #fff;
    }

    &.dark {
      color: #fff;
      border: 1px solid var(--dark-border);
      background-color: var(--dark-background);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    border-radius: 8px;
    border: 0;

    &.cancel {
      color: #2d2d2d;
      background-color: #fff;
      padding: 8px 20px;

      &.light {
        border: 1px solid #000;
      }
    }

    &.confirm {
      background-color: #fa7272;
      color: #fff;
      padding: 8px 15px;
    }
  }
}

.buttonBlock {
  padding: 0 15px;

  & button {
    color: #fff;
    background-color: #fa7272;
    font-size: 14px;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 0;
  }
}
</style>
