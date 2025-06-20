import Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import Tiger from "./Tiger";
import TigerAdapter from "./TigerAdapter";

const list = Array<Animal>();

list.push(new Dog("사랑이"));
list.push(new Cat("냥냥이"));
list.push(new Cat("나비"));

// const tiger = new Tiger();
// tiger.name ="타이온";
// list.push(tiger)

list.push(new TigerAdapter("타이온"));

list.forEach((animal) => {
  animal.sound();
});
