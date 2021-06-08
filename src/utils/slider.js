export default class Slider {
   constructor({elements, animationFunc, speed}) {
      this.elements = elements;
      this.animationFunc = animationFunc;
      this.index = 0;
      this.size = elements.length;
      this.speed = speed;
      this.prev = this.prev.bind(this);
      this.stop = this.stop.bind(this);
   }
   next() {
      this.index++;
      this.index >= this.size ? (this.index = 0) : this.index;
      this.animationFunc(this.elements[this.index]);
   }
   prev() {
      this.index--;
      this.index < 0 ? (this.index = this.size - 1) : this.index;
      this.animationFunc(this.elements[this.index]);
   }
   play() {
      this.interval = setInterval(this.prev, this.speed);
      console.log(this.prev);
   }
   stop() {
      clearInterval(this.interval);
   }
}

