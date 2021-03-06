# Цепочка обязанностей / CoR, Chain of Command, Chain of Responsibility
[https://refactoring.guru/ru/design-patterns/chain-of-responsibility](https://refactoring.guru/ru/design-patterns/chain-of-responsibility)

## Суть:

Позволяет передавать запросы последовательно по цепочке обработчиков. Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи.

## Проблема:

Вы делаете систему приёма онлайн-заказов.

Вы хотите ограничить к ней доступ так, чтобы только авторизованные пользователи могли создавать заказы. 

Кроме того, определённые пользователи, владеющие правами администратора, должны иметь полный доступ к заказам.

С каждой новой «фичей» код проверок, выглядящий как большой клубок условных операторов, всё больше и больше раздувался.

При изменении одного правила приходилось трогать код всех проверок. А для того, чтобы применить проверки к другим ресурсам, пришлось продублировать их код в других классах.

Поддерживать такой код стало не только очень хлопотно, но и затратно. И вот в один прекрасный день вы получаете задачу рефакторинга...

## Решение:

Цепочка обязанностей базируется на том, чтобы превратить отдельные поведения в объекты.

В нашем случае каждая проверка переедет в отдельный класс с единственным методом выполнения.

Данные запроса, над которым происходит проверка, будут передаваться в метод как аргументы.

Паттерн предлагает связать объекты обработчиков в одну цепь.

Каждый из них будет иметь ссылку на следующий обработчик в цепи. Таким образом, при получении запроса обработчик сможет не только сам что-то с ним сделать, но и передать обработку следующему объекту в цепочке.

Передавая запросы в первый обработчик цепочки, вы можете быть уверены, что все объекты в цепи смогут его обработать. При этом длина цепочки не имеет никакого значения.

Обработчик не обязательно должен передавать запрос дальше, причём эта особенность может быть использована по-разному.