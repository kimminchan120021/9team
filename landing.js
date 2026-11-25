(() => {
  const panel = document.querySelector('#landing');

  panel.innerHTML = `
    <h2>03 상황 및 안전관리</h2>
    <label>가상 시나리오
      <select id="landMode">
        <option>일반 병력투사</option>
        <option>OTH</option>
      </select>
    </label>

    <label>인원 안전 상태
      <select id="people">
        <option>미확인</option>
        <option>안전 확인</option>
        <option>안전 확인 필요</option>
      </select>
    </label>

    <label>장비 안전 상태
      <select id="equipment">
        <option>미확인</option>
        <option>안전 확인</option>
        <option>안전 확인 필요</option>
      </select>
    </label>

    <button id="landStart">상황 시작</button>
    <button id="landReport" disabled>상태 기록</button>
    <button id="landEnd" disabled>상황 종료</button>

    <output id="landStatus">대기 중</output>
    <ol id="landLog"></ol>`;

  const get = id => document.getElementById(id);

  function log(message) {
    get('landStatus').textContent = message;
    const item = document.createElement('li');
    item.textContent = message;
    get('landLog').append(item);
  }

  get('landStart').onclick = () => {
    get('landMode').disabled = true;
    get('landStart').disabled = true;
    get('landReport').disabled = false;
    get('landEnd').disabled = false;
    log(get('landMode').value + ' 가상 상황 시작');
  };

  get('landReport').onclick = () => {
    log('인원: ' + get('people').value
      + ' / 장비: ' + get('equipment').value);
  };

  get('landEnd').onclick = () => {
    log('모의 상황 종료 — 기록 검토 및 재확인');
    get('landMode').disabled = false;
    get('landStart').disabled = false;
    get('landReport').disabled = true;
    get('landEnd').disabled = true;
  };
})();