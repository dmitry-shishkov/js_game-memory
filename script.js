document.addEventListener("DOMContentLoaded", function (event) {
  // let btn = document.querySelector('.btn');
  // let field = document.querySelector('.field');
  // let startCells = 4;
  // let countCells = 4;
  // let valueCells = [];
  // random(countCells);
  // create(countCells);

  // btn.addEventListener('click', function () {
  //   btn.disabled = true;
  //   let value = 1;
  //   let cells = document.querySelectorAll('.cell');
  //   for (let elem of cells) {
  //     elem.classList.add('hide');
  //     elem.addEventListener('click', function () {
  //       if (elem.innerHTML == value) {
  //         elem.classList.remove('hide');
  //         value++;
  //       } else if (elem.innerHTML !== value) {
  //         countCells--;
  //         if (countCells < startCells) {
  //           countCells = startCells;
  //         }
  //         valueCells = [];
  //         cells.forEach(function (elem) {
  //           elem.remove();
  //         })
  //         random(countCells);
  //         create(countCells);
  //         btn.disabled = false;
  //       }
  //       if (value > countCells) {
  //         countCells++;
  //         valueCells = [];
  //         cells.forEach(function (elem) {
  //           elem.remove();
  //         })
  //         random(countCells);
  //         create(countCells);
  //         btn.disabled = false;
  //       }
  //     })
  //   }
  // })

  // function create(countCells) {
  //   for (let i = 0; i < countCells; i++) {
  //     let cell = document.createElement('div');
  //     cell.classList.add('cell');
  //     cell.innerHTML = valueCells[i];
  //     field.append(cell);
  //   }
  // }

  // function random(countCells) {
  //   for (let i = 1; i <= countCells; i++) {
  //     valueCells.push(i);
  //   }
  //   valueCells.sort(() => Math.random() - 0.5);
  // }
  const btn = document.querySelector('.game__btn');
  const field = document.querySelector('.game__field');
  let startCells = 4;
  let countCells = 4;
  let valueCells = [];
  random(countCells);
  createCells(countCells);

  btn.addEventListener('click', function() {
    btn.disabled = true;
    let value = 1;
    let cells = document.querySelectorAll('.cell');
    for (let elem of cells) {
      elem.classList.add('hide');
      elem.addEventListener('click', function() {
        if (elem.innerHTML == value) {
          elem.classList.remove('hide');
          value++;
        } else if (elem.innerHTML !== value) {
          countCells--;
          if (countCells < startCells) {
            countCells = startCells;
          }
            valueCells = [];
            deleteCells(cells);
            random(countCells);
            createCells(countCells);
            btn.disabled = false;
          }
        if (value > countCells) {
          countCells++;
          valueCells = [];
          deleteCells(cells);
          random(countCells);
          createCells(countCells);
          btn.disabled = false;
        }
      })
    }
  })

  function random(countCells) {
    for (let i = 1; i <= countCells; i++) {
      valueCells.push(i);
    }
    valueCells.sort(() => Math.random() - 0.5);
  }

  function createCells(countCells) {
    for (let i = 0; i < countCells; i++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.innerHTML = valueCells[i];
      field.append(cell);
    }
  }

  function deleteCells(cells) {
    cells.forEach(function(elem) {
      elem.remove();
    })
  }
});
