<blockquote>
<h3>1.오버로딩이란?</h3>
<h5>
메서드도 변수와 마찬가지로 같은 클래스 내에서 서로 구별될 수 <br>
있어야 하기 때문에 각기 다른 다름을 가져야한다.<br>
그러나 자바에서는 한 클래스 내에 이미 사용하려는 이름과 같은<br>
이름을 가진 메서드가 있더라도 매개변수의 개수 또는 타입이 다르면,<br>
같은 이름을 사용해서 메서드를 정의할 수 있다.
</h5>
<br>
<h3>2.오버로딩의 조건</h3>
<h5>
1)메서드 이름이 같아야한다.<br>
2)매개변수의 개수 또는 타입이 달라야한다.<br>
+반환타입은 오버로딩을 구현하는데 아무런 영향을 주지 못한다.<br>
대표적인 ex. println()<br>
</h5>
</blockquote>

<details open>
  <summary> 
    <b>OverloadingTest,</b>
  </summary>
   <img src=https://github.com/luckyjek/TIL_/blob/main/Java/image/overloading.jpg>
  <h6>|참고| 리터럴의 접미사는 출력되지않는다 :( 6L -> 6 )</h6>
  </div>
</details>
<details open>

<h3>3.가변인자(varargs)와 로버로딩</h3>
<h5>가변인자는 '타입... 변수명'과 같은 형식으로 선언하며,<br> 
PrintStream클래스의 printf()가 대표적인 예이다.</h5>
<details open>
  <summary> 
    <b>가변인자 오버로딩할때 주의점</b>
  </summary>
   <img src=https://github.com/luckyjek/TIL_/blob/main/Java/image/varArgsEx.jpg>
  <h6>concatenate메서드는 매개변수로 입력된 문자열에 구분자를 사이에 포함시켜<br>
  결합해서 반환한다. 가변인자로 매개변수를 선언했기 때문에<br> 
  문자열을 개수의 제약없이 매개변수로 지정할 수 있다.<br>
  <br>
  |주의|<br>
  가변인자를 선언한 메서드를 오버로딩하면, 메서드를 호출했을 때 구별되지 못하는<br>
  경우가 발생하기 쉽기 때문에 주의해야한다.<br>
  가능하면 가변인자를 사용한 메서드는 오버로딩하지 않는것이 좋다.
  </h6>
  </div>
</details>
