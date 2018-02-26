const app = new Vue({
  el: "#app",
  data: {
    file: null,
    image: '',
    invalid: false
  },
  methods: {
    onClick: function(e) {
      this.reset(false)
    },
    onDrop: function(e) {
      const file = e.dataTransfer.files[0]
      this.invalid = false
      this.file = file
    },
    reset: function(invalid) {
      this.invalid = invalid
      this.image = ''
      this.file = null
    }
  },
  watch: {
    file: function(data) {
      if (data) {
        if (!data.type.match('image.*')) {
          this.reset(true)
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
