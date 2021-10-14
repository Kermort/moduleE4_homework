function view_properties(obj, str) {
    if (str in obj) {
        return true
    } else {
        return false
    }
}

object = {a: 1, b: 20}

console.log(view_properties(object, "a"))