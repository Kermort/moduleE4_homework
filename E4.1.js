function view_properties(obj) {
    for (let key in obj) {
        console.log(key)
    }
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(obj[key])
      }
    }
}

object = {a: 1, b: 20}

view_properties(object)