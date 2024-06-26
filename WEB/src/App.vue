<template>
  <q-layout view="hHh Lpr fff" container style="height: 100vh">

    <Header/>

    <q-page-container >
      <q-page >
        <RouterView style="height: 88.9vh"/>
      </q-page>
    </q-page-container>

    <Footer />

  </q-layout>
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'

import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
</script>