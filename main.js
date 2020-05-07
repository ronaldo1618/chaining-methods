const int = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

document.getElementById("one-liner").innerHTML += `${int.sort((a, b) => b - a).filter(n => n < 19).map(n => n * 1.5 - 1).reduce((a, b) => a += b)}`