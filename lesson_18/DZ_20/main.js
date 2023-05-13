// DZ 20.

var votingOptions = [
  { emoji: "😄", count: 0 },
  { emoji: "😊", count: 0 },
  { emoji: "😐", count: 0 },
  { emoji: "😕", count: 0 },
  { emoji: "😞", count: 0 },
];

function displayResults() {
  var resultsDiv = document.getElementById("voting-results");
  resultsDiv.innerHTML = "";

  for (var i = 0; i < votingOptions.length; i++) {
    var option = votingOptions[i];
    var emojiDiv = document.createElement("div");
    emojiDiv.textContent = option.emoji;
    emojiDiv.className = "emoji";
    emojiDiv.dataset.index = i;

    emojiDiv.addEventListener("click", function () {
      var index = parseInt(this.dataset.index);
      votingOptions[index].count++;
      displayResults();
    });

    var countDiv = document.createElement("div");
    countDiv.textContent = option.count;

    resultsDiv.appendChild(emojiDiv);
    resultsDiv.appendChild(countDiv);
  }
}

displayResults();
