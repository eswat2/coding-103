const app = new Vue({
  el: "#app",
  data: {
    file: null,
    image: '',
    invalid: false
  },
  methods: {
    onDrop: function(e) {
      const file = e.dataTransfer.files[0]
      this.invalid = false
      this.file = file
    },
    removeImage: function() {
      this.image = ''
      this.file = null
      this.invalid = false
    }
  },
  watch: {
    file: function(data) {
      if (data) {
        if (!data.type.match('image.*')) {
          this.removeImage()
          return
        }
        var reader = new FileReader()
        var vm = this

        reader.onload = function(e) {
          vm.image = e.target.result
        }
        reader.readAsDataURL(data)
      }
    }
  }
})
