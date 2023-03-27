import { Component, Vue } from 'vue-facing-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Greetings extends Vue {
  message = 'Welcome to Your Vue.js + TypeScript App';
}
