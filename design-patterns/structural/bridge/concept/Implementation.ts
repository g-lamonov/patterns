import { Abstraction } from "./Abstraction";

/**
 * EN: The Implementation defines the interface for all implementation classes.
 * It doesn't have to match the Abstraction's interface. In fact, the two
 * interfaces can be entirely different. Typically the Implementation interface
 * provides only primitive operations, while the Abstraction defines higher-
 * level operations based on those primitives.
 *
 * RU: Реализация устанавливает интерфейс для всех классов реализации. Он не
 * должен соответствовать интерфейсу Абстракции. На практике оба интерфейса
 * могут быть совершенно разными. Как правило, интерфейс Реализации
 * предоставляет только примитивные операции, в то время как Абстракция
 * определяет операции более высокого уровня, основанные на этих примитивах.
 */
export interface Implementation {
  operationImplementation(): string;
}

/**
 * EN: Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 *
 * RU: Каждая Конкретная Реализация соответствует определённой платформе и
 * реализует интерфейс Реализации с использованием API этой платформы.
 */
export class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
    return "ConcreteImplementationA: Here's the result on the platform A.";
  }
}

export class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
    return "ConcreteImplementationB: Here's the result on the platform B.";
  }
}

/**
 * EN: Except for the initialization phase, where an Abstraction object gets
 * linked with a specific Implementation object, the client code should only
 * depend on the Abstraction class. This way the client code can support any
 * abstraction-implementation combination.
 *
 * RU: За исключением этапа инициализации, когда объект Абстракции связывается с
 * определённым объектом Реализации, клиентский код должен зависеть только от
 * класса Абстракции. Таким образом, клиентский код может поддерживать любую
 * комбинацию абстракции и реализации.
 */
export const clientCode = (abstraction: Abstraction) => {
  // ..

  console.log(abstraction.operation());

  // ..
};
