<template>
  <q-header elevated class="bg-dark">
    <q-toolbar>
      <q-btn
        flat
        round
        dense
        icon="menu"
        class="q-mr-sm"
        @click="drawer = !drawer"
      />
      <!--      <q-avatar>-->
      <!--        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">-->
      <!--      </q-avatar>-->

      <q-toolbar-title class="text-h4 text-bold">TheBesta</q-toolbar-title>

      <q-btn flat round dense icon="translate" />
    </q-toolbar>
  </q-header>

  <q-drawer
    v-model="drawer"
    show-if-above
    :width="200"
    :breakpoint="500"
    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
    bordered
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
  >
    <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
      <q-list padding>
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> Home </q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/about">
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>
          <q-item-section> About </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
const miniState = ref(false);
</script>
