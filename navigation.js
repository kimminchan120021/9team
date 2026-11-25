(() => {
  const panel = document.querySelector('#navigation');
  panel.innerHTML = `
    <h2>01 항해 중 탐지</h2>
    <p>가상 탐지 및 식별 절차</p>
    <button id="navDetect">가상 물체 발견</button>
    <button id="navIdentify" disabled>식별 결과 입력</button>
    <button id="navReset">초기화</button>
    <label>식별 결과
      <select id="navType">
        <option>미확인</option>
        <option>조류</option>
        <option>드론 추정</option>
      </select>
    </label>
    <output id="navStatus">일반 감시 중</output>
    <ol id="navLog"></ol>`;

  const get = id => document.getElementById(id);

  function log(message) {
    get('navStatus').textContent = message;
    const item = document.createElement('li');
    item.textContent = message;
    get('navLog').append(item);
  }

  get('navDetect').onclick = () => {
    log('S-1: 가상 물체 발견 — 식별 대기');
    get('navIdentify').disabled = false;
    get('navDetect').disabled = true;
  };

  get('navIdentify').onclick = () => {
    log('S-1-1 / S-2: 관측 기록 — ' + get('navType').value);
  };

  get('navReset').onclick = () => {
    get('navLog').replaceChildren();
    get('navStatus').textContent = '일반 감시 중';
    get('navIdentify').disabled = true;
    get('navDetect').disabled = false;
    get('navType').selectedIndex = 0;
  };
})();