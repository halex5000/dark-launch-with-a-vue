<script setup>
import { store } from "./store";
store.prependItem({
  color: "#405BFF",
  icon: "mdi-trophy",
  title: "Congratulations!",
  subtitle: "quest completed!",
});
store.prependItem({
  color: "#FF386B",
  icon: "mdi-star",
  title: "New user experience enabled!",
  subtitle: "targeting a user!",
});
</script>
