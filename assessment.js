(() => {
  const panel = document.querySelector('#classification');

  panel.innerHTML = `
    <h2>02 드론 정보 분류</h2>
    <form id="droneForm">
      <label>거리 (m)
        <input name="distance" type="number" min="0" required>
      </label>
      <label>속도 (m/s)
        <input name="speed" type="number" min="0" step="any" required>
      </label>
      <label>고도 (m)
        <input name="altitude" type="number" min="0" required>
      </label>
      <label>개체 수
        <input name="count" type="number" min="1" required>
      </label>
      <label>제어 유형 (가상 입력)
        <select name="type">
          <option>미확인</option>
          <option>광섬유</option>
          <option>무선조종</option>
          <option>자율비행</option>
        </select>
      </label>
      <button type="submit">관측 정보 기록</button>
      <button type="reset">초기화</button>
    </form>
    <output id="droneResult">입력 대기</output>`;

  const form = document.getElementById('droneForm');
  const result = document.getElementById('droneResult');

  form.onsubmit = event => {
    event.preventDefault();
    const data = new FormData(form);

    result.textContent = `가상 관측 정보 (TI)
거리: ${data.get('distance')} m
속도: ${data.get('speed')} m/s
고도: ${data.get('altitude')} m
개체 수: ${data.get('count')}
제어 유형: ${data.get('type')}`;
  };

  form.onreset = () => {
    result.textContent = '입력 대기';
  };
})();
