const objectForChaining = {
  value: 0,
  plus: function(num) {
    this.value += num;
    return this;
  },
  minus: function(num) {
    this.value -= num;
    return this;
  },
  show: function() {
    console.log(this.value);
  }
}

objectForChaining.plus(3)
objectForChaining.plus(12);
objectForChaining.minus(2);
objectForChaining.show();




obj.plus(2).plus(4).minus(12).show() // will work if every method returns this