button.addEventListener('click', post);

function post (e) {
  e.preventDefault();
  var dataType = document.getElementById('form').value;
  document.getElementById('form').value = '';

  // var callback = function(data) {
  //   var arr = [];
  //   for (var key in data) {
  //     arr.push(data[key]);
  //   }
  //   var list = arr.join(', ');
  //   $('#list').append(`<li>${list}</li>`);
  // }

  var callback = function(data) {
    var arr = [];

    var recursion = function(person) {
      if (!person.children.length) {
        arr.push([person.firstName, person.lastName, person.county, person.city, person.role, person.sales]);
      } else {
        for (var i = 0; i < person.children.length; i++) {
          arr.push([person.firstName, person.lastName, person.county, person.city, person.role, person.sales]);
          recursion(person.children[i]);
        }
      }
    }
    recursion(data);
    arr.forEach(function(array, i) {
      $('#list').append(`<li>${array[0]}, ${array[1]}, ${array[2]}, ${array[3]}, ${array[4]}, ${array[5]}</li>`)
    });
  }


  $.ajax({
    url : '/',
    type: 'POST',
    data: dataType,
    contentType: 'application/json',
    dataType: 'json',
    success: (data) => {
      callback(data);
    },
    error: (err) => {
      console.error(err);
    }
  })
}


