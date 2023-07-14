async function selectionSort() {
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < bars.length; i++) {
    let minIndex = i;
    bars[i].style.background = "blue";

    for (let j = i + 1; j < bars.length; j++) {
      bars[j].style.background = "cyan";
      await waitforme(delay);

      if (parseFloat(bars[j].style.height) < parseFloat(bars[minIndex].style.height)) {
        if (minIndex !== i) {
          bars[minIndex].style.background = "red";
        }
        minIndex = j;
      } else {
        bars[j].style.background = "red";
      }

      playNote(300 + array[j] * 2);
      playNote(300 + array[j] * 2);
    }

    await waitforme(delay);
    swap(bars[minIndex], bars[i]);
    bars[minIndex].style.background = "red";
    bars[i].style.background = "green";
  }
}

const selectionSortBtn = document.querySelector(".selectionSort");
selectionSortBtn.addEventListener("click", async function () {
  let start = new Date().getTime();
  displayAlgo("Selection Sort");
  disableSort();
  disableSize();
  disableNewArray();
  await selectionSort();
  enableSort();
  enableSize();
  enableNewArray();
  let end = new Date().getTime();
  let time = (end - start) * 0.001;
  displayTime(time + " s", "O(n^2)");
});
