<blockquote>
<h3>재귀함수의 사용 이유</h3>
<h5>
1. 동적프로그램이나 병합정렬, 그래프탐색알고리즘 등의 특정한 부분의 개발에 유리하다.<br>
2. 가독성이 높다.<br>
3. 변수의 사용을 줄여준다.
</h5>
</blockquote>

<h5>
반복문대신 재귀호출을 사용할 때는 ?<br>
코드가 간결하고, 이해하기 쉬워지기때문이다.<br>
프로그램 작성 완료 후, 속도가 개선 되어야 할 부분을 골라서<br>
따로 성능 향상을 지키는 방식으로 처리한다.<br>
<br>
반복문은 while문이나 for문의 사용을 통해 익숙하지만,<br>
재귀함수는 비슷한 기능임에도 조금 낯설다.<br>
<br>
factorial -> 5팩토리얼 -> 5x4x3x2x1 =120결과를 얻는다.<br>

</h5>

<details open>
  <summary> 
    <b>1. for(반복)문을 이용한 Factorial구하기</b>
  </summary>
   <img src=https://github.com/luckyjek/TIL_/blob/main/Java/image/forF.jpg>
  </div>
</details>

<details open>
  
  <summary> 
    <b>2. 재귀함수를 이용하여 Factorial구하기</b>
  </summary>
  <div>
   <h5>재귀함수는 자기자신을 다시 호출하여 사용.<br>
       어떤 작업을 반복적으로 처리해야된다면 , <br>
       먼저 반복문으로 작성해보고 너무 복잡하면 재귀호출로 간단히<br> 
       할 수 없는지 고민해볼 필요가 있다. <br>
       재귀호출은 비효율적이므로 재귀호출에 드는 비용보다 재귀호출의<br> 간결함이 주는 이득이 충분히 큰 경우에만 사용해야 한다는것도 잊지말자!<br> 
       즉, 반복분 대신 재귀호출을 사용하는 것은 코드가 간결,<br> 논리적으로 이해하기 쉬워진다. 요즘은 하드웨어성능이 좋아져서<br> 속도와 효율보다는 코드의 관계가 중요한 요소가 되었다.</h5><br>
   <img src=https://github.com/luckyjek/TIL_/blob/main/Java/image/jeg_F.jpg>
  </div>
</details>
<br>
<br>
<details open>
  
  <summary> 
    <b>3. [중요]스택오버플로우 에러 처리->'매개변수의 유효성검사'</b>
  </summary>
  <div>
   <h5><br>
       매개변수 n의 값이 0인 경우에는...?<br>
       if문의 조건식이 절대 참이 될 수 없기 때문에 계속해서 재귀호출만 일어날 뿐<br>
       메서드가 종료되지 않으므로 스택에 계속 데이터가 쌓여만간다. <br>
       어느 시점에 이르러서는 결국 스택의 저장한계를 넘게되고, 
       '스택오버플로우 에러'가 발생한다.<br> (+ 매개변수 n의 값이 100,000과 같이 큰 경우에도 마찬가지)<br>
       274pg 메서드를 작성할때,<br>
       '호출하는 사람이 당연히 알아서 적절한 값을 인자로 주겠지.'<br> 
       라는 막연한 믿음은 절대 금물이다. <br>
       어떤 값이 들어와도 에러없이 처리되는 견고한 코드를 작성해야된다.<br> 그래서 '매개변수의 유효성 검사'가 중요한것이다.<br> 
       </h5>
   <img src=https://github.com/luckyjek/TIL_/blob/main/Java/image/stackover.jpg>
   <h6>매개변수의 유효성을 검사하는 코드를 추가해서<> 
   메서드 factorial의 매개변수 n이 음수거나 20보다크면-1을 반환하도록하였다. </h6>
  </div>
</details>
<br>
<br>
<h6>
참고자료 :<br>
https://hanhyx.tistory.com/32<br>
자바의정석 3판<br>
https://kldp.org/node/134556<br>
</h6>
