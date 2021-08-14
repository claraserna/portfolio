import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Home extends Vue {
  msg!: string;

  mounted(): void {
    console.log("mounted sarasasd");
  }
}
