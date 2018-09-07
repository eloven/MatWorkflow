import { Component, ReflectiveInjector, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
    // 创建一个对象实现依赖性注入  ReflectiveInjector.resolveAndCreate() 方法实现工厂方法
    const injector = ReflectiveInjector.resolveAndCreate ([
      { provide: Person, useClass: Person },
      { provide: Number, useValue: 1},
      { provide: String, useValue: 'jack'},
      { provide: Address, useFactory: () => {
        return new Address('hubei', 'wuhan', 'jianghan', '118');
      }}
    ]);
    // 实例化一个person
    const person = injector.get(Person);
    // 父子依赖注入
    const childInjector = injector.resolveAndCreateChild([Person]);
    const childFromPerson = childInjector.get(Person);
    // console.log(person);
    // console.log(childFromPerson);
    // console.log(childFromPerson === person);  //  false
  }
}
class Address {
  constructor(province, city, district, street) {}
}
class Person {
  id: number;
  name: string;
  address: Address;
  constructor (
    @Inject(Address) address: Address,
    @Inject(Number)id: number,
    @Inject(String)name?: string,
    ) {
      this.id = id;
      this.name = name;
      // 直接构造不方便修改
      // this.address = new Address('hubei', 'wuhan', 'jianghan', '118');
      this.address = address;
  }
}
