<blockquote>
<h3>1.상속이란?</h3>
<h5>
기존의 클래스를 재사용하여 새로운 클래스를 작성하는 것이다.<br>
상속을 통해서 클래스를 작성하면 보다 적은 양의 코드로 새로운 클래스를<br>
작성할 수 있고 코드를 공통적으로 관리 할 수 있기 때문에 코드의<br>
추가 및 변경이 매우 용이하다.<br>
 이러한 특징은 코드의 재사용성을 높이고 코드의 중복을 제거하여 <br>
프로그램의 생산성과 유지보수에 크게 기여한다. <br>
<br>
<h6>|참고| 
<b>조상클래스</b> 부모(parent)클래스, 상위(super)클래스, 기반(base)클래스<br> 
<b>자손클래스</b> 자식(child)클래스, 하위(sub )클래스, 파생된(derived)클래스<br>
</h5>
</blockquote>

<h3><br> 
1.클래스간의 상속관계
</h3>
<details open>
  <summary> 
    <b>클래스간의 상속관계를 적절히 맺어 주는것이 객체지향프로그래밍에서 가장 중요한 부분</b><br>
      <h6>클래스간의 상속관계를 맺어주면 자손 클래스들의 공통적인 부분은 조상클래스에서<br>
          관리하고 자손 클래스는 자신에 정의된 멤버들만 관리하면 되므로 각 클래스의 코드가<br>
          적어져서 관리가 편하다. (전체 프로그램을 구성하는 클래스들을 면밀히 분석 설계하기)
      </h6> 
  </summary>
   <img src=https://github.com/luckyjek/TIL_/blob/main/Java/image/inheritance.jpg>
    <h6>Tv클래스로부터 상속받고 기능을 추가하여 CaptionTv클래스를 작성했다.<br>
        멤버변수caption은 캡션기능의 상태를 저장하기 위한 boolean형 변수이고, displayCaption<br>(String text)은 매개변수로 넘겨받은 문자열(text)을 캡션이<br>
        켜져있는경우(caption의 값이 true인 경우)에만 화면에 출력한다.
    </h6>
  </div>
</details>
<br>

<h3><br> 
1.2클래스간의 포함관계
</h3>
<details open>
  <summary> 
    <b>상속이외에도 클래스를 재사용하는 또 다른 방법-클래스간의'포함(Composite)'관계를 맺어주는 것</b><br>
      <h6>클래스 간의 포함관계를 맺어 주는 것은 한 클래스의 멤버변수로 다른 클래스 타입의 <br>
          참조변수를 선언하는 것을 뜻한다.<br>
      </h6> 
  </summary> 
    <h6>class Car{<br>
        Engine e = new Engine();<br>
        Door[] d = new Door[4];<br>
        //....<br>
    }
    </h6>
  </div>
</details>
<br>
<h3><br> 
1.3클래스간의 관계 결정하기
</h3>
<details open>
  <summary> 
    <b>상속관계를 맺어 줄 것인지 포함관계를 맺어 줄 것인지 결정하는 것은 때때로 혼돈스러울 수 있다.</b><br>
      <h6>그럴때는?<br>
          '~은~이다(is-a)'와'~은~을 가지고있다(has-a)'를 넣어서 문장을 만들어보면 <br>
          클래스 간의 관계가보다 명확해진다.<br>
          |참고|<br>
          상속관계 : 원(Cicle)은 점(Point)이다. -Circle is a Point.<br>
          포함관계 : 원(Cicle)은 점(Point)을 가지고있다. -Circle has a Point.<br>
          원은 원점(Point)과 반지름으로 구성되므로 위의 두 문장을 비교해보면 첫 번째 문장보다<br>
          두 번째 문장이 더 옳다는 것을 알 수 있다.<br>
           이처럼 클래스를 가지고 문장을 만들었을때 '~은~이다(is-a)'라는 문장이 성립된다면,서로<br>
           상속관계를 맺어주고, '~은~을 가지고있다(has-a)'는 문장이 성립한다면 포함관계를 맺어주는것이 옳다. 
      </h6>

  </summary>
  </div>
</details>
<br>
