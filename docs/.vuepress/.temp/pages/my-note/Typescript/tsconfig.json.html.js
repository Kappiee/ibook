import comp from "/Users/kappie/Project/project/MyProject/ibooks/docs/.vuepress/.temp/pages/my-note/typescript/tsconfig.json.html.vue"
const data = JSON.parse("{\"path\":\"/my-note/typescript/tsconfig.json.html\",\"title\":\"tsconfig.json\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"my-note/typescript/tsconfig.json.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
