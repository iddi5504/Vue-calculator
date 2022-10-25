import Vue from 'vue'
import App from './App.vue'
module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      { from: './index/html', to: 'relative/path/to/dest/' }
    ])
  ]
}
new Vue({
  el: '#app',
  render: h => h(App)
})
