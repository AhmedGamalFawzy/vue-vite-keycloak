import { Component, Vue } from "vue-facing-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Greetings extends Vue {
  message = 'Welcome to Your Vue.js + TypeScript App';
}
