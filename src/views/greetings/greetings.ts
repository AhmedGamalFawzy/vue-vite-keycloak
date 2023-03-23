import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Greetings extends Vue {
  message = 'Welcome to Your Vue.js + TypeScript App';
}
