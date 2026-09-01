/* ── GNB 편성표 서브메뉴 / localStorage 연동 ── */
(function () {
  var STORAGE_KEY = 'dooh_schedule_last';

  /* 편성표 메인 링크 클릭 → 최근 방문 타입으로 분기 */
  window.goScheduleMain = function () {
    var last = localStorage.getItem(STORAGE_KEY);
    if (last === 'media') {
      location.href = 'schedule-media-month.html';
    } else if (last === 'product') {
      location.href = 'schedule-product-month.html';
    } else {
      /* 첫 진입: 프로덕트 월간으로 이동하면서 선택 오버레이 자동 표시 */
      location.href = 'schedule-product-month.html?select=1';
    }
  };

  /* 서브메뉴 항목 클릭 시 타입 저장 */
  window.setScheduleType = function (type) {
    localStorage.setItem(STORAGE_KEY, type);
  };

  document.addEventListener('DOMContentLoaded', function () {
    var path = location.pathname;

    /* 월간 편성표 페이지 진입 시 자동으로 타입 기록 */
    if (path.indexOf('schedule-media') !== -1) {
      localStorage.setItem(STORAGE_KEY, 'media');
    } else if (path.indexOf('schedule-product') !== -1) {
      localStorage.setItem(STORAGE_KEY, 'product');
    }

    /* ?select=1 파라미터: 첫 진입이므로 선택 오버레이 표시 */
    if (location.search.indexOf('select=1') !== -1 &&
        typeof openProductSelect === 'function') {
      openProductSelect();
    }

    /* active 서브메뉴 항목 표시 */
    var last = localStorage.getItem(STORAGE_KEY);
    document.querySelectorAll('.gnb-sub a[data-type]').forEach(function (el) {
      el.classList.toggle('sub-active', el.dataset.type === last);
    });
  });
})();
