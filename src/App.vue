<!--
 * @Author: Resuragam 1791614500@qq.com
 * @Date: 2023-05-29 16:09:44
 * @LastEditors: Resuragam 1791614500@qq.com
 * @LastEditTime: 2023-05-29 17:42:09
 * @FilePath: \TickNet_job\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: '加入TickNet',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon.ico' : '/favicon.ico'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
