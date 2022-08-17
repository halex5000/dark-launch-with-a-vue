<script setup>
import { store } from "./store";
store.prependItem({
  color: "#405BFF",
  icon: "mdi-flag",
  title: "LaunchDarkly",
  image: "./blog-images/osmo.png",
  subtitle: "powering your features!",
});
</script>