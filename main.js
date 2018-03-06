let arr = [
  { question: "This is the first question", answer: "this is an answer" },
  { question: "This is the second question", answer: "this is an answer" },
  { question: "This is the third question", answer: "this is an answer" },
  { question: "This is the fourth question", answer: "this is an answer" },
  { question: "This is the fifth question", answer: "this is an answer" },
];



const div = (apple, zebra) =>
  `<div class='col s12 m6 l6'>
      <div class="card">
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Question<i class="material-icons right">more_vert</i></span>
          <p id='question'>${apple}</p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Answer<i class="material-icons right">close</i></span>
          <p id='answer'>${zebra}</p>
        </div>
      </div>
    </div>`;

const cards = (someArr) => {
  someArr.map( (item, i) => {
    let box = div(item.question, item.answer)
    $('#gridMofo').append(box)

  })
}

$(document).ready( function() {
  cards(arr)
})
