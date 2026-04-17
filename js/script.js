function mirrorText() {
  const input = document.getElementById("inputText").value;
  const reversed = input.split("").reverse().join("");
  document.getElementById("outputText").innerText = reversed;
}

console.log("Mirror site loaded");
