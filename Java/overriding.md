<blockquote>
<h3>1.오버라이딩이란?</h3>
<h5>
조상 클래스로부터 상속받은 메서드의 내용을 변경하는 것을 오버라이딩이라고한다.<br>
상속받은 메서드를 그대로 사용하기도 하지만, 자손 클래스 자신에 맞게 변경해야하는 경우가 많다.<br>
이럴 때 조상의 메서드를 오버라이딩한다.<br>
<br>
<h6>|참고| 
<b>override의 사전적 의미는 '~위에 덮어쓰다(overwrite)'이다.<br> 
</h5>
</blockquote>

<h3><br> 
1.1 오버라이딩의 조건
</h3>
<details open>
  <summary> 
    <b>오버라이딩은 메서드의 내용만을 새로 작성하는 것이므로 메서드의 선언부는 조상의 것과 완전히 일치해야함.</b><br>
      <h6>1.선언부가 같아야한다.(이름, 매개변수, 리턴타입)<br>
          2.접근제어자를 좁은 범위로 변경 불가<br>
          3.조상클래스의 메서드보다 많은 수의 예외를 선언할 수 없다.
      </h6> 
  </summary>
  </div>
</details>
<br>

<h3><br> 
1.2 오버로딩 vs 오버라이딩
</h3>
<details open>
  <summary> 
    <b>오버로딩 : 기존에 없는 새로운 메서드를 정의하는 것(new)<br>
       오버라이딩 : 상속받은 메서드의 내용을 변경하는 것 (change, modify)
    </b> 
  </summary> 
  </div>
</details>
<br>

<h3><br>
1.3 super
</h3>
<details open>
  <summary> 
    <br>super는 자손 클래스에서 조상 클래스로부터 상속받은 멤버를 참조하는데 사용되는 참조변수이다.<br>
       멤버변수와 지역변수의 이름이 같을 때 this를 붙여서 구별했듯이 상속받은 멤버와 자신의 멤버와<br>
       자신의 멤버와 이름이 같을 때는 super를 붙여서 구별할 수 있다.
    </br>
      <h6>
        this  - 인스턴스 자신을 가리키는 참조변수. <br>
        super - this와같음. 조상의 멤버와 자신의 멤버를 구별하는 데 사용.
      </h6>

  </summary>
    <img src=https://github.com/luckyjek/TIL_/blob/main/Java/image/SuperTest.jpg>

  </div>
</details>
<br>
