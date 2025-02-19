<template>
    <div class="comment">
      <component
        v-if="isDark"
        :is="'script'"
        src="https://giscus.app/client.js"
        data-repo="lezinote/lezinote.github.io"
        data-repo-id="R_kgDON65SXw"
        data-category="Comments"
        data-category-id="DIC_kwDON65SX84CnGL1"
        data-mapping="pathname"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="dark"
        data-lang="zh-CN"
        crossorigin="anonymous"
        data-loading="lazy"
        async
      >
      </component>
      <component
        v-else
        :is="'script'"
        src="https://giscus.app/client.js"
        data-repo="lezinote/lezinote.github.io"
        data-repo-id="R_kgDON65SXw"
        data-category="Comments"
        data-category-id="DIC_kwDON65SX84CnGL1"
        data-mapping="pathname"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light"
        data-lang="zh-CN"
        crossorigin="anonymous"
        data-loading="lazy"
        async
      >
      </component>
    </div>
  </template>
  <script setup lang="ts">
    import { useData } from 'vitepress';
    const { isDark } = useData();
  </script>
  <style lang="scss" scoped>
    .comment {
      margin-top: 16px;
    }
  </style>