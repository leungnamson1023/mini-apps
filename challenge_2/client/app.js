button.addEventListener('click', post);

function post (e) {
  e.preventDefault();
  var dataType = document.getElementById('form').value;
  document.getElementById('form').value = '';

  var callback = function(data) {
    var arr = [];
    for (var key in data) {
      arr.push(data[key]);
    }
    var list = arr.join(', ');
    $('#list').append(`<li>${list}</li>`);
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


