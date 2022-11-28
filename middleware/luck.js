export default function () {
  if (window.unluck) return;
  while (true) {
    let password = prompt("Please enter password");

    if (password == "pass") {
      window.unluck = true;
      return;
    }
  }
}
