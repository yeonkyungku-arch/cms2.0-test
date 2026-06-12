const mediaPinData = {
  gangnam: {
    name: "강남대로 DID 01",
    address: "서울 강남구 강남대로 396",
    setting: "운영설정① · 평일 09:00~18:00",
    cycle: "600초",
    guarantee: "54회",
    statusClass: "status-good",
    statusText: "여유",
    links: "프로덕트 12 · 스케줄 7"
  },
  coex: {
    name: "코엑스몰 LED Wall",
    address: "서울 강남구 영동대로 513",
    setting: "미적용",
    cycle: "-",
    guarantee: "-",
    statusClass: "status-warn",
    statusText: "운영 설정 필요",
    links: "-"
  },
  busan: {
    name: "부산역 게이트 03",
    address: "부산 동구 중앙대로 206",
    setting: "운영설정② · 매일 08:00~22:00",
    cycle: "450초",
    guarantee: "112회",
    statusClass: "status-danger",
    statusText: "등록 불가",
    links: "프로덕트 6 · 스케줄 3"
  },
  hongdae: {
    name: "홍대입구 미디어보드",
    address: "서울 마포구 양화로 160",
    setting: "운영설정③ · 매일 10:00~23:00",
    cycle: "720초",
    guarantee: "65회",
    statusClass: "status-near",
    statusText: "임박",
    links: "프로덕트 9 · 스케줄 5"
  },
  jamsil: {
    name: "잠실 롯데월드몰 2F",
    address: "서울 송파구 올림픽로 300",
    setting: "운영설정② · 매일 08:00~22:00",
    cycle: "450초",
    guarantee: "112회",
    statusClass: "status-good",
    statusText: "여유",
    links: "프로덕트 14 · 스케줄 8"
  },
  incheon: {
    name: "인천공항 T1 Gate A",
    address: "인천 중구 공항로 272",
    setting: "운영설정④ · 매일 00:00~24:00",
    cycle: "900초",
    guarantee: "96회",
    statusClass: "status-good",
    statusText: "여유",
    links: "프로덕트 22 · 스케줄 11"
  }
};

const weekdayCheckboxes = [
  "weekday-sun",
  "weekday-mon",
  "weekday-tue",
  "weekday-wed",
  "weekday-thu",
  "weekday-fri",
  "weekday-sat"
];

const presetDays = {
  "매일": [0, 1, 2, 3, 4, 5, 6],
  "평일": [1, 2, 3, 4, 5],
  "주말": [0, 6],
  "사용자 정의": []
};

const samplePhotos = [
  "assets/sample-media-site-01.svg",
  "assets/sample-media-site-02.svg",
  "assets/sample-media-site-03.svg"
];

const productPinData = {
  "gangnam-01": {
    name: "강남대로 DID 01",
    address: "서울 강남구 강남대로 396",
    setting: "운영설정①",
    remainingClass: "status-good",
    remainingText: "여유",
    product: "강남 프라임 패키지"
  },
  "hongdae-01": {
    name: "홍대입구 미디어보드",
    address: "서울 마포구 양화로 160",
    setting: "운영설정③",
    remainingClass: "status-near",
    remainingText: "임박",
    product: "강남 프라임 패키지"
  },
  "airport-01": {
    name: "인천공항 T1 Gate A",
    address: "인천 중구 공항로 272",
    setting: "운영설정④",
    remainingClass: "status-good",
    remainingText: "여유",
    product: "공항 프리미엄 네트워크"
  }
};

const scheduleProductOptions = {
  gangnam: {
    name: "강남 프라임 패키지",
    meta: "운영 미디어 3개 · 일반 / 조건 지원",
    desc: "강남대로 DID 01, 홍대입구 미디어보드, 잠실 롯데월드몰 2F를 포함합니다.",
    ads: "일반 광고 / 조건 광고",
    conditions: "타임 / 환경",
    playplans: "일반 광고 · 30초 / 조건 광고 · 20초",
    mediaDetails: [
      { name: "강남대로 DID 01",     op: "운영설정① · 평일 · 09:00~18:00 · 20초", slot: 20, minGuaranteed: 8 },
      { name: "홍대입구 미디어보드",  op: "운영설정② · 주말 · 08:00~22:00 · 15초", slot: 15, minGuaranteed: 12 },
      { name: "잠실 롯데월드몰 2F",  op: "운영설정③ · 월·화·수·목 · 10:00~23:00 · 20초", slot: 20, minGuaranteed: 8 }
    ],
    statusClass: "status-ok", statusText: "사용 가능"
  },
  airport: {
    name: "공항 프리미엄 네트워크",
    meta: "운영 미디어 2개 · 일반 광고 지원",
    desc: "인천공항 T1 Gate A와 T2 디지털 보드를 포함합니다.",
    ads: "일반 광고",
    conditions: "지원 안 함",
    playplans: "일반 광고 · 15초",
    mediaDetails: [
      { name: "인천공항 T1 Gate A", op: "운영설정① · 평일 · 06:00~22:00 · 15초", slot: 15 },
      { name: "T2 디지털 보드",     op: "운영설정② · 매일 · 05:00~23:00 · 15초", slot: 15 }
    ],
    statusClass: "status-ok", statusText: "사용 가능"
  }
};

// 콘텐츠 옵션 데이터
const contentOptions = {
  summer30: {
    name: "여름 캠페인 30초",
    meta: "30초 · 1920×1080 · MP4",
    duration: 30,
    label: "30s",
    resolution: "1920×1080",
    format: "MP4",
    orientation: "landscape",
    contentType: "상업광고"
  },
  brand15: {
    name: "브랜드 티저 15초",
    meta: "15초 · 1080×1920 · MP4",
    duration: 15,
    label: "15s",
    resolution: "1080×1920",
    format: "MP4",
    orientation: "portrait",
    contentType: "자사광고"
  },
  target20: {
    name: "타겟 반응형 소재 20초",
    meta: "20초 · 1920×1080 · MP4",
    duration: 20,
    label: "20s",
    resolution: "1920×1080",
    format: "MP4",
    orientation: "landscape",
    contentType: "공익광고"
  }
};

const selectedOperationMedia = new Map();
let playPlanSeq = 0;
const chartInstances = {};

function showGlobalToast(message) {
  const toast = document.createElement("div");
  toast.className = "global-toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.classList.add("is-visible"), 20);
  window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => toast.remove(), 240);
  }, 2200);
}

function formatRange(start, end) {
  return `${start || "00:00"}~${end || "00:00"}`;
}

function toSeconds(time) {
  const [hours, minutes] = (time || "00:00").split(":").map(Number);
  return (hours * 60 + minutes) * 60;
}

function updateOperationSummary() {
  const preset = document.querySelector('input[name="weekday-preset"]:checked')?.value || "사용자 정의";
  const start = document.getElementById("op-start-time")?.value || "09:00";
  const end = document.getElementById("op-end-time")?.value || "18:00";
  const duration = Math.max(1, Number(document.getElementById("op-slot-duration")?.value || 0));
  const count = Math.max(1, Number(document.getElementById("op-slot-count")?.value || 0));
  const cycle = duration * count;
  let operatingSeconds = toSeconds(end) - toSeconds(start);

  if (operatingSeconds <= 0) {
    operatingSeconds += 24 * 60 * 60;
  }

  const guarantee = cycle > 0 ? Math.floor(operatingSeconds / cycle) : 0;
  const name = `운영설정⑤ · ${preset} · ${formatRange(start, end)} · ${duration}초 × ${count}슬롯`;

  document.getElementById("op-summary-name").textContent = name;
  document.getElementById("op-summary-cycle").textContent = `${cycle.toLocaleString("ko-KR")}초`;
  document.getElementById("op-summary-guarantee").textContent = `${guarantee.toLocaleString("ko-KR")}회`;
}

function applyWeekdayPreset(value) {
  const selected = presetDays[value] || [];
  weekdayCheckboxes.forEach((id, index) => {
    const input = document.getElementById(id);
    if (input) input.checked = selected.includes(index);
  });
  updateOperationSummary();
}

function updatePinCard(id) {
  const data = mediaPinData[id];
  if (!data) return;

  document.querySelector('[data-pin-field="name"]').textContent = data.name;
  document.querySelector('[data-pin-field="address"]').textContent = data.address;
  document.querySelector('[data-pin-field="setting"]').textContent = data.setting;
  document.querySelector('[data-pin-field="cycle"]').textContent = data.cycle;
  document.querySelector('[data-pin-field="guarantee"]').textContent = data.guarantee;
  document.querySelector('[data-pin-field="links"]').textContent = data.links;
  document.querySelector('[data-pin-field="status"]').innerHTML = `<span class="status ${data.statusClass}">${data.statusText}</span>`;

  document.querySelectorAll(".pin").forEach((pin) => {
    pin.classList.toggle("is-selected", pin.dataset.mediaId === id);
  });
}

function updateProductPinCard(id) {
  const data = productPinData[id];
  if (!data) return;

  document.querySelector('[data-product-pin-field="name"]').textContent = data.name;
  document.querySelector('[data-product-pin-field="address"]').textContent = data.address;
  document.querySelector('[data-product-pin-field="setting"]').textContent = data.setting;
  document.querySelector('[data-product-pin-field="remaining"]').innerHTML = `<span class="status ${data.remainingClass}">${data.remainingText}</span>`;
  document.querySelector('[data-product-pin-field="product"]').textContent = data.product;
  document.querySelectorAll(".product-pin").forEach((pin) => {
    pin.classList.toggle("is-selected", pin.dataset.productPin === id);
  });
}

function ensureMediaEmptyRow() {
  const tbody = document.querySelector(".media-view-list tbody");
  if (!tbody || document.querySelector(".media-empty-row")) return;

  const row = document.createElement("tr");
  row.className = "media-empty-row";
  row.hidden = true;
  row.innerHTML = '<td colspan="12">선택한 현황에 해당하는 미디어가 없습니다.</td>';
  tbody.appendChild(row);
}

function filterMediaList(status) {
  ensureMediaEmptyRow();

  const rows = [...document.querySelectorAll(".media-view-list tbody tr[data-media-status]")];
  let visibleCount = 0;

  rows.forEach((row) => {
    const shouldShow = status === "all" || row.dataset.mediaStatus === status;
    row.hidden = !shouldShow;
    if (shouldShow) visibleCount += 1;
  });

  const emptyRow = document.querySelector(".media-empty-row");
  if (emptyRow) emptyRow.hidden = visibleCount > 0;

  document.querySelectorAll(".summary-strip button[data-status-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.statusFilter === status);
  });

  const listView = document.getElementById("view-list");
  if (listView) listView.checked = true;
}

document.querySelectorAll(".pin[data-media-id]").forEach((pin) => {
  pin.addEventListener("click", () => updatePinCard(pin.dataset.mediaId));
});

document.querySelectorAll(".product-pin[data-product-pin]").forEach((pin) => {
  pin.addEventListener("click", () => updateProductPinCard(pin.dataset.productPin));
});

document.getElementById("product-map-select")?.addEventListener("change", (event) => {
  const isAirport = event.target.value === "airport";
  document.querySelectorAll(".product-pin").forEach((pin) => {
    const shouldShow = isAirport ? pin.classList.contains("product-pin--airport") : !pin.classList.contains("product-pin--airport");
    pin.classList.toggle("product-pin--hidden", !shouldShow);
  });
  updateProductPinCard(isAirport ? "airport-01" : "gangnam-01");
});

document.querySelectorAll(".summary-strip button[data-status-filter]").forEach((button) => {
  button.addEventListener("click", () => filterMediaList(button.dataset.statusFilter));
});

document.querySelectorAll('[for="page-detail-no-operation"]').forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const page = document.getElementById("page-detail-no-operation");
    if (page) page.checked = true;
  });
});

document.querySelectorAll("[data-open-page]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const page = document.getElementById(trigger.dataset.openPage);
    if (page) page.checked = true;
  });
});

function updateSensorOptions() {
  const included = document.querySelector('input[name="sensor-included"]:checked')?.value === "included";
  document.querySelectorAll(".sensor-card").forEach((card) => {
    card.classList.toggle("sensor-card--disabled", !included);
    const input = card.querySelector("input");
    if (input) {
      input.disabled = !included;
      if (!included) input.checked = false;
    }
  });
}

document.querySelectorAll('input[name="sensor-included"]').forEach((radio) => {
  radio.addEventListener("change", updateSensorOptions);
});

document.getElementById("ad-conditional")?.addEventListener("change", (event) => {
  const options = document.querySelector(".product-register__condition-options");
  if (options) options.hidden = !event.target.checked;
  updatePlayPlanAdTypeOptions();
  updateProductSummary();
});

document.getElementById("ad-general")?.addEventListener("change", () => {
  updatePlayPlanAdTypeOptions();
  updateProductSummary();
});
document.querySelectorAll(".condition-option").forEach((input) => input.addEventListener("change", () => {
  updatePlayPlanAdTypeOptions();
  updateProductSummary();
}));

function getSelectableMediaCards() {
  return [...document.querySelectorAll(".operation-media-card[data-selectable-media][data-media-id]")];
}

function mediaPayloadFromCard(card) {
  return {
    id: card.dataset.mediaId,
    name: card.dataset.name || card.querySelector("strong")?.textContent || "",
    setting: card.dataset.setting || "",
    remaining: card.dataset.remaining || "",
    guarantee: Number(card.dataset.guarantee || 0),
    sensors: (card.dataset.sensors || "").split(",").filter(Boolean)
  };
}

function renderSelectedOperationMedia() {
  const list = document.querySelector("[data-selected-media-list]");
  const count = selectedOperationMedia.size;
  const countLabel = document.querySelector("[data-selected-media-count]");
  if (countLabel) countLabel.textContent = `${count}개`;
  if (!list) return;

  if (!count) {
    list.innerHTML = '<div class="selected-operation-media-empty">좌측 목록에서 운영 미디어를 선택해 주세요.</div>';
  } else {
    list.innerHTML = [...selectedOperationMedia.values()].map((media) => `
      <article class="selected-operation-media-card" data-selected-media-id="${media.id}">
        <button type="button" aria-label="${media.name} 선택 해제">×</button>
        <span><strong>${media.name}</strong><em>${media.setting}</em></span>
        <small class="status ${media.remaining === "임박" ? "status-near" : "status-good"}">${media.remaining}</small>
      </article>
    `).join("");
  }

  getSelectableMediaCards().forEach((card) => {
    card.classList.toggle("is-selected", selectedOperationMedia.has(card.dataset.mediaId));
    const input = card.querySelector(".operation-media-checkbox");
    if (input) input.checked = selectedOperationMedia.has(card.dataset.mediaId);
  });
  renderPlayPlanMediaTables();
  updateProductSummary();
}

function initialiseSelectedOperationMedia() {
  getSelectableMediaCards().forEach((card) => {
    if (card.querySelector(".operation-media-checkbox")?.checked || card.classList.contains("is-selected")) {
      const media = mediaPayloadFromCard(card);
      selectedOperationMedia.set(media.id, media);
    }
  });
  renderSelectedOperationMedia();
}

document.querySelector(".operation-media-select-panel")?.addEventListener("click", (event) => {
  const selectedRemove = event.target.closest(".selected-operation-media-card button");
  if (selectedRemove) {
    event.stopPropagation();
    const id = selectedRemove.closest(".selected-operation-media-card")?.dataset.selectedMediaId;
    if (id) selectedOperationMedia.delete(id);
    renderSelectedOperationMedia();
    return;
  }

  if (event.target.closest(".remaining-status, .btn")) return;
});

document.addEventListener("click", (event) => {
  const selectedRemove = event.target.closest(".selected-operation-media-card button");
  if (selectedRemove) {
    event.stopPropagation();
    const id = selectedRemove.closest(".selected-operation-media-card")?.dataset.selectedMediaId;
    if (id) selectedOperationMedia.delete(id);
    renderSelectedOperationMedia();
    return;
  }

  if (event.target.closest(".remaining-status, .btn")) return;
}, true);

document.addEventListener("change", (event) => {
  const checkbox = event.target.closest(".operation-media-checkbox");
  if (!checkbox) return;
  const card = checkbox.closest(".operation-media-card[data-selectable-media][data-media-id]");
  if (!card || card.classList.contains("operation-media-card--disabled")) return;
  const media = mediaPayloadFromCard(card);
  if (checkbox.checked) {
    selectedOperationMedia.set(media.id, media);
  } else {
    selectedOperationMedia.delete(media.id);
  }
  renderSelectedOperationMedia();
});

function updateProductSummary() {
  const productName = document.getElementById("product-name")?.value.trim() || "";
  const adTypes = [];
  if (document.getElementById("ad-general")?.checked) adTypes.push("일반");
  if (document.getElementById("ad-conditional")?.checked) adTypes.push("조건");
  const conditions = [...document.querySelectorAll(".condition-option:checked")].map((input) => input.value);
  const conditionalChecked = document.getElementById("ad-conditional")?.checked;
  const conditionMessage = document.querySelector("[data-condition-message]");
  const conditionValid = !conditionalChecked || conditions.length > 0;
  const registrationReady = !!productName && selectedOperationMedia.size > 0 && adTypes.length > 0 && conditionValid;

  const warnings = [];
  const priceInputs = [...document.querySelectorAll(".price-input-field")];
  const pricedCount = priceInputs.filter((input) => parseNumber(input.value) > 0).length;
  if (priceInputs.length && pricedCount < priceInputs.length) warnings.push(`가격 미설정 ${priceInputs.length - pricedCount}건`);
  if (!document.querySelectorAll(".play-plan-item").length) warnings.push("플레이플랜 없음");

  const media = [...selectedOperationMedia.values()];
  if (conditions.includes("환경") && media.some((item) => !item.sensors.includes("environment"))) {
    warnings.push("환경 조건 지원 센서 확인 필요");
  }
  if (conditions.includes("타겟") && media.some((item) => !item.sensors.includes("ir") && !item.sensors.includes("vision"))) {
    warnings.push("타겟 조건 지원 센서 확인 필요");
  }

  if (conditionMessage) {
    conditionMessage.textContent = conditionValid ? "조건 광고 옵션은 스케줄 등록 가능 유형을 제한합니다." : "조건 광고를 지원하려면 타임, 환경, 타겟 중 1개 이상 선택해 주세요.";
    conditionMessage.classList.toggle("form-warning", !conditionValid);
  }

  const statusHtml = registrationReady ? '<span class="status status-ok">등록 가능</span>' : '<span class="status status-warn">등록 불가</span>';
  const required = [];
  if (!productName) required.push("프로덕트명 입력");
  if (!selectedOperationMedia.size) required.push("운영 미디어 1개 이상");
  if (!adTypes.length) required.push("지원 광고 유형 1개 이상");
  if (!conditionValid) required.push("조건 광고 옵션 1개 이상");

  document.querySelector("[data-summary-media]").textContent = `${selectedOperationMedia.size}개`;
  document.querySelector("[data-summary-ad]").textContent = adTypes.length ? adTypes.join(" / ") : "미선택";
  document.querySelector("[data-summary-condition]").textContent = conditionalChecked ? (conditions.length ? conditions.join(" / ") : "미선택") : "-";
  document.querySelector("[data-summary-plan]").textContent = `${document.querySelectorAll(".play-plan-item").length}개`;
  document.querySelector("[data-summary-price]").textContent = `${pricedCount} / ${priceInputs.length}`;
  document.querySelector("[data-summary-check]").textContent = warnings.length ? warnings.join(" · ") : "없음";
  document.querySelector("[data-summary-required]").textContent = required.length ? required.join(" · ") : "필수 조건 충족";
  document.querySelector("[data-summary-warning]").textContent = warnings.length ? warnings.join(" · ") : "없음";
  document.querySelector("[data-summary-status]").innerHTML = statusHtml;
  document.querySelector("[data-sticky-status]").innerHTML = statusHtml;
}

document.getElementById("product-name")?.addEventListener("input", updateProductSummary);

function showDraftToast(message) {
  const toast = document.getElementById("draft-toast");
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
}

function saveProductDraft() {
  const payload = {
    name: document.getElementById("product-name")?.value || "",
    description: document.getElementById("product-description")?.value || "",
    cmsStatus: document.getElementById("product-cms-status")?.value || "임시 저장",
    general: !!document.getElementById("ad-general")?.checked,
    conditional: !!document.getElementById("ad-conditional")?.checked,
    conditions: [...document.querySelectorAll(".condition-option:checked")].map((input) => input.value)
  };
  localStorage.setItem("dooh-product-draft", JSON.stringify(payload));
  showDraftToast("프로덕트 등록 내용이 임시 저장되었습니다.");
}

document.getElementById("product-draft-save")?.addEventListener("click", saveProductDraft);
document.querySelectorAll("[data-draft-save]").forEach((button) => button.addEventListener("click", saveProductDraft));

document.getElementById("product-draft-load")?.addEventListener("click", () => {
  const raw = localStorage.getItem("dooh-product-draft");
  if (!raw) {
    showDraftToast("임시 저장된 프로덕트가 없습니다.");
    return;
  }
  const payload = JSON.parse(raw);
  document.getElementById("product-name").value = payload.name || "";
  document.getElementById("product-description").value = payload.description || "";
  document.getElementById("product-cms-status").value = payload.cmsStatus || "임시 저장";
  document.getElementById("ad-general").checked = !!payload.general;
  document.getElementById("ad-conditional").checked = !!payload.conditional;
  document.querySelectorAll(".condition-option").forEach((input) => {
    input.checked = (payload.conditions || []).includes(input.value);
  });
  document.querySelector(".product-register__condition-options").hidden = !payload.conditional;
  updateProductSummary();
  showDraftToast("임시 저장된 내용을 불러왔습니다.");
});

function submitProduct() {
  updateProductSummary();
  const ready = document.querySelector("[data-sticky-status] .status-ok");
  showDraftToast(ready ? "필수 조건을 만족하여 등록 가능한 상태입니다." : "필수 조건을 확인한 뒤 등록해 주세요.");
}

document.getElementById("product-submit")?.addEventListener("click", submitProduct);
document.querySelectorAll("[data-product-submit]").forEach((button) => button.addEventListener("click", submitProduct));

document.getElementById("show-no-operation-media")?.addEventListener("change", (event) => {
  document.querySelectorAll(".is-hidden-no-operation").forEach((card) => {
    card.style.display = event.target.checked ? "grid" : "";
  });
});

document.addEventListener("click", (event) => {
  const close = event.target.closest(".popover-close");
  if (close) {
    close.closest(".remaining-status-popover")?.classList.remove("remaining-status-popover--fixed");
    event.stopPropagation();
    return;
  }

  const trigger = event.target.closest(".remaining-popover-trigger, .remaining-status__badge");
  if (trigger) {
    const popover = trigger.closest(".remaining-status")?.querySelector(".remaining-status-popover");
    document.querySelectorAll(".remaining-status-popover--fixed").forEach((open) => {
      if (open !== popover) open.classList.remove("remaining-status-popover--fixed");
    });
    popover?.classList.toggle("remaining-status-popover--fixed");
    event.stopPropagation();
    return;
  }

  if (!event.target.closest(".remaining-status")) {
    document.querySelectorAll(".remaining-status-popover--fixed").forEach((open) => open.classList.remove("remaining-status-popover--fixed"));
  }
});

function formatKoreanAmount(value) {
  const amount = parseNumber(value);
  if (!amount) return "";
  if (amount >= 10000000) return `${Math.floor(amount / 10000000)}천만원`;
  if (amount >= 1000000) {
    const million = Math.floor(amount / 1000000);
    const rest = Math.floor((amount % 1000000) / 100000);
    return rest ? `${million}백${rest}십만원` : `${million}백만원`;
  }
  return `${amount.toLocaleString("ko-KR")}원`;
}

function parseNumber(value) {
  return Number(String(value || "").replace(/[^\d]/g, ""));
}

function formatPriceInput(input) {
  const amount = parseNumber(input.value);
  input.value = amount ? amount.toLocaleString("ko-KR") : "";
  const helper = input.closest("td, label")?.querySelector(".price-input__helper");
  if (helper) helper.textContent = amount ? formatKoreanAmount(amount) : "가격 미설정";
  updateProductSummary();
}

function bindPriceInputs(scope = document) {
  scope.querySelectorAll(".price-input-field").forEach((input) => {
    if (input.dataset.priceBound) return;
    input.dataset.priceBound = "true";
    input.addEventListener("input", () => {
      const helper = input.closest("td, label")?.querySelector(".price-input__helper");
      if (helper) helper.textContent = formatKoreanAmount(input.value) || "가격 미설정";
      updateProductSummary();
    });
    input.addEventListener("blur", () => formatPriceInput(input));
  });
}

document.querySelectorAll(".price-input-field").forEach((input) => {
  input.addEventListener("input", () => {
    const helper = input.parentElement.querySelector(".price-input__helper");
    if (helper) helper.textContent = formatKoreanAmount(input.value);
  });
});

function getSupportedAdTypes() {
  const types = [];
  if (document.getElementById("ad-general")?.checked) types.push("일반 광고");
  if (document.getElementById("ad-conditional")?.checked) types.push("조건 광고");
  return types;
}

function updatePlayPlanAdTypeOptions() {
  const types = getSupportedAdTypes();
  document.querySelectorAll(".play-plan-ad-type").forEach((select) => {
    const current = select.value;
    select.innerHTML = types.map((type) => `<option>${type}</option>`).join("");
    if (types.includes(current)) select.value = current;
  });
  validatePlayPlans();
}

function periodMultiplier(period) {
  if (period === "월") return 30;
  if (period === "년") return 365;
  return 1;
}

function createPlayPlanRow() {
  const types = getSupportedAdTypes();
  const message = document.querySelector("[data-play-plan-message]");
  if (!types.length) {
    if (message) message.textContent = "지원 광고 유형을 먼저 선택해 주세요.";
    return;
  }

  playPlanSeq += 1;
  const row = document.createElement("article");
  row.className = "play-plan-item";
  row.dataset.playPlanId = String(playPlanSeq);
  row.innerHTML = `
    <div class="play-plan-item__header">
      <strong>플레이플랜 ${playPlanSeq}</strong>
      <button class="btn btn-ghost btn-sm" type="button" data-remove-play-plan>삭제</button>
    </div>
    <div class="grid-3">
      <label>광고 유형<select class="play-plan-ad-type">${types.map((type) => `<option>${type}</option>`).join("")}</select></label>
      <label>재생 시간<span class="input-unit"><input class="play-plan-duration" type="number" min="1" placeholder="직접 입력"><span>초</span></span></label>
      <label>가격 기간 단위<select class="play-plan-period"><option>일</option><option selected>월</option><option>년</option></select></label>
    </div>
    <div class="duration-presets"><button type="button" data-duration="10">10초</button><button type="button" data-duration="15">15초</button><button type="button" data-duration="20">20초</button><button type="button" data-duration="30">30초</button><button type="button" data-duration-custom>직접 입력</button></div>
    <p class="helper muted play-plan-direct-helper" hidden>원하는 재생 시간을 초 단위로 직접 입력해 주세요.</p>
    <div class="play-plan-media-table-wrap"></div>
  `;
  document.querySelector("[data-play-plan-list]")?.appendChild(row);
  renderPlayPlanMediaTable(row);
  bindPriceInputs(row);
  updatePlayPlanEmptyState();
  validatePlayPlans();
  updateProductSummary();
}

function updatePlayPlanEmptyState() {
  const hasRows = !!document.querySelector(".play-plan-item");
  const empty = document.querySelector("[data-play-plan-empty]");
  if (empty) empty.hidden = hasRows;
}

function renderPlayPlanMediaTable(row) {
  const wrap = row.querySelector(".play-plan-media-table-wrap");
  if (!wrap) return;
  const period = row.querySelector(".play-plan-period")?.value || "월";
  const duration = Number(row.querySelector(".play-plan-duration")?.value || 0);
  const multiplier = periodMultiplier(period);
  const selected = [...selectedOperationMedia.values()];
  if (!selected.length) {
    wrap.innerHTML = '<div class="selected-operation-media-empty">운영 미디어를 선택하면 미디어별 보장/가격을 설정할 수 있습니다.</div>';
    return;
  }
  wrap.innerHTML = `
    <table class="media-price-table">
      <thead><tr><th>미디어명</th><th>재생 시간</th><th>보장 횟수</th><th>가격</th><th>단위</th></tr></thead>
      <tbody>
        ${selected.map((media) => {
          const guarantee = media.guarantee * multiplier;
          const preset = media.id === "gangnam" ? "1,000,000" : "";
          return `<tr data-plan-media-id="${media.id}"><td>${media.name}<br><small>${media.setting}</small></td><td>${duration || "-"}초</td><td>${guarantee.toLocaleString("ko-KR")}회 / ${period}</td><td><input class="price-input-field" inputmode="numeric" value="${preset}" placeholder="가격 미설정"><small class="price-input__helper">${preset ? formatKoreanAmount(preset) : "가격 미설정"}</small></td><td>원 / ${period}</td></tr>`;
        }).join("")}
      </tbody>
    </table>
  `;
  bindPriceInputs(row);
}

function renderPlayPlanMediaTables() {
  document.querySelectorAll(".play-plan-item").forEach(renderPlayPlanMediaTable);
}

function validatePlayPlans() {
  const message = document.querySelector("[data-play-plan-message]");
  const seen = new Set();
  let duplicate = false;
  document.querySelectorAll(".play-plan-item").forEach((row) => {
    const key = `${row.querySelector(".play-plan-ad-type")?.value || ""}-${row.querySelector(".play-plan-duration")?.value || ""}`;
    const isDuplicate = key.includes("-") && key.split("-")[1] && seen.has(key);
    row.classList.toggle("play-plan-item--invalid", isDuplicate);
    if (isDuplicate) duplicate = true;
    if (key.split("-")[1]) seen.add(key);
  });
  if (message) message.textContent = duplicate ? "동일한 광고 유형과 재생 시간의 플레이플랜이 이미 있습니다." : "";
}

document.getElementById("add-play-plan")?.addEventListener("click", createPlayPlanRow);
document.getElementById("add-play-plan-empty")?.addEventListener("click", createPlayPlanRow);

document.querySelector("[data-play-plan-list]")?.addEventListener("click", (event) => {
  const remove = event.target.closest("[data-remove-play-plan]");
  if (remove) {
    remove.closest(".play-plan-item")?.remove();
    updatePlayPlanEmptyState();
    validatePlayPlans();
    updateProductSummary();
    return;
  }
  const preset = event.target.closest("[data-duration]");
  if (preset) {
    const row = preset.closest(".play-plan-item");
    const input = row?.querySelector(".play-plan-duration");
    if (input) input.value = preset.dataset.duration;
    row.querySelector(".play-plan-direct-helper").hidden = true;
    renderPlayPlanMediaTable(row);
    validatePlayPlans();
    updateProductSummary();
    return;
  }
  const custom = event.target.closest("[data-duration-custom]");
  if (custom) {
    const row = custom.closest(".play-plan-item");
    const input = row?.querySelector(".play-plan-duration");
    row.querySelector(".play-plan-direct-helper").hidden = false;
    input?.focus();
  }
});

document.querySelector("[data-play-plan-list]")?.addEventListener("input", (event) => {
  const row = event.target.closest(".play-plan-item");
  if (!row) return;
  if (event.target.matches(".play-plan-duration")) renderPlayPlanMediaTable(row);
  validatePlayPlans();
  updateProductSummary();
});

document.querySelector("[data-play-plan-list]")?.addEventListener("change", (event) => {
  const row = event.target.closest(".play-plan-item");
  if (!row) return;
  if (event.target.matches(".play-plan-period")) renderPlayPlanMediaTable(row);
  validatePlayPlans();
  updateProductSummary();
});

document.getElementById("product-edit-impact")?.addEventListener("click", () => {
  alert("이 프로덕트에는 연결된 스케줄이 있습니다. 포함 운영 미디어 또는 플레이플랜 정보가 변경되면 기존 스케줄의 잔여 시간, 잔여 슬롯, 보장 횟수 계산 결과가 달라질 수 있습니다.");
});

document.body.classList.add("detail-info-mode");

function resetDetailTabs() {
  document.body.classList.remove("detail-analysis-mode");
  document.body.classList.add("detail-info-mode");
  document.querySelectorAll("[data-detail-tabs]").forEach((group) => {
    group.querySelectorAll("button").forEach((item) => {
      item.classList.toggle("is-active", item.dataset.detailTab === "info");
    });
  });
}

document.querySelectorAll("[data-detail-tabs] button").forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.closest("[data-detail-tabs]");
    group.querySelectorAll("button").forEach((item) => item.classList.toggle("is-active", item === button));
    const isAnalysis = button.dataset.detailTab === "analysis";
    document.body.classList.toggle("detail-analysis-mode", isAnalysis);
    document.body.classList.toggle("detail-info-mode", !isAnalysis);
  });
});

document.addEventListener("click", (event) => {
  const detailLink = event.target.closest('label[for="page-detail"], label[for="page-product"]');
  if (detailLink) resetDetailTabs();
});

document.querySelectorAll("[data-schedule-view]").forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.scheduleView;
    document.querySelectorAll("[data-schedule-view]").forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelector(".schedule-view-list")?.classList.toggle("is-active", view === "list");
    document.querySelector(".schedule-view-card")?.classList.toggle("is-active", view === "card");
  });
});

document.querySelector(".schedule-create-menu > button")?.addEventListener("click", (event) => {
  event.currentTarget.closest(".schedule-create-menu")?.classList.toggle("is-open");
});

document.addEventListener("click", (event) => {
  const menu = document.querySelector(".schedule-create-menu");
  if (menu && !event.target.closest(".schedule-create-menu")) menu.classList.remove("is-open");
});

function currentScheduleRegister(target) {
  return target.closest(".schedule-register") || document.querySelector(".schedule-register");
}

let _activeProductRegister = null;

document.querySelectorAll("[data-open-schedule-product]").forEach((button) => {
  button.addEventListener("click", () => {
    _activeProductRegister = currentScheduleRegister(button);
    const modal = document.getElementById("schedule-product-modal");
    if (modal) modal.checked = true;
  });
});

document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-open-schedule-content]");
  if (!button) return;
  if (button.disabled) {
    showGlobalToast("Product를 먼저 선택해 주세요.");
    return;
  }
  const modal = document.getElementById("schedule-content-modal");
  if (modal) modal.checked = true;
});

document.querySelectorAll("[data-pick-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const register = _activeProductRegister || document.querySelector(".schedule-register");
    const name = button.dataset.name || "";
    const meta = button.dataset.meta || "";
    const productKey = button.dataset.productKey || "";
    const option = scheduleProductOptions[productKey] || null;

    // 드롭존 숨기고 선택 카드 표시
    const dropZoneBtn = register.querySelector("[id^='product-drop']");
    const productCard = register.querySelector(".schedule-product-card");
    if (dropZoneBtn) dropZoneBtn.hidden = true;
    if (productCard) {
      productCard.hidden = false;
      const nameFilled = productCard.querySelector("[data-schedule-product-name-filled]");
      const metaFilled = productCard.querySelector("[data-schedule-product-meta-filled]");
      if (nameFilled) nameFilled.textContent = name;
      if (metaFilled) metaFilled.textContent = meta;

      // PlayPlan 참조 텍스트
      const playplanRef = productCard.querySelector("[data-playplan-ref]");
      if (playplanRef) playplanRef.textContent = option?.playplans || "—";

      // 소속 미디어 + 운영설정 리스트
      const mediaBriefList = productCard.querySelector("[data-schedule-media-brief-list]");
      if (mediaBriefList && option?.mediaDetails) {
        mediaBriefList.innerHTML = option.mediaDetails.map(m =>
          `<li>
            <span class="schedule-media-brief-list__name">${m.name}</span>
            <span class="schedule-media-brief-list__op">${m.op}</span>
          </li>`
        ).join("");
      }
    }

    // 콘텐츠 최대 재생시간 안내 표시
    if (option?.mediaDetails) {
      const minSlot = Math.min(...option.mediaDetails.map(m => m.slot));
      register.querySelectorAll("[data-content-limit-notice]").forEach((notice) => {
        notice.hidden = false;
        const label = notice.querySelector("[data-content-max-label]");
        if (label) label.textContent = `선택 가능한 콘텐츠 최대 ${minSlot}초`;
      });
    }

    // 하위 컨트롤 활성화
    register.querySelectorAll("[data-requires-product]").forEach((ctrl) => { ctrl.disabled = false; });
    register.querySelectorAll("[data-condition-builder]").forEach((box) => {
      box.classList.remove("is-disabled");
      box.querySelectorAll("input, select, button").forEach((ctrl) => {
        if (!ctrl.matches("[data-submit-schedule]")) ctrl.disabled = false;
      });
    });
    register.querySelectorAll("[data-condition-guide]").forEach((target) => {
      target.textContent = "지원 조건: 타임 / 환경. 타겟 조건은 카메라 센서가 포함된 Product에서만 사용할 수 있습니다.";
    });

    // 활성 Product key 저장 → 타임 조건 핸들러 초기화
    register.dataset.activeProductKey = productKey;
    register.querySelectorAll(".condition-rule").forEach((article) => {
      initTimeCycle(article, productKey);
    });
    register.querySelectorAll("[data-sync-copy]").forEach((target) => {
      target.textContent = "Product에 포함된 미디어에서 광고가 같은 시점에 송출되도록 제어합니다.";
    });
    register.querySelectorAll("[data-schedule-summary-product]").forEach((target) => { target.textContent = name; });

    // 콘텐츠 드롭존 meta 텍스트 갱신
    register.querySelectorAll("[data-schedule-content-meta]").forEach((el) => {
      el.textContent = "콘텐츠를 선택해 주세요.";
    });

    // 미디어-콘텐츠 맵 재생성 (선택된 Product의 미디어 목록으로 업데이트)
    const contentMap = register.querySelector(".media-content-map");
    if (contentMap && option?.mediaDetails) {
      contentMap.innerHTML = option.mediaDetails.map(m => `
        <article>
          <div class="media-content-map__header">
            <span class="media-content-map__name">${m.name}</span>
            <span class="media-content-map__op">${m.op}</span>
          </div>
          <button class="schedule-drop-zone schedule-drop-zone--empty" type="button" data-open-schedule-content>
            <span class="schedule-drop-zone__icon">+</span>
            <span class="schedule-drop-zone__title">콘텐츠를 선택해 주세요.</span>
          </button>
        </article>
      `).join("");
    }

    document.getElementById("schedule-product-modal").checked = false;
  });
});

document.querySelectorAll("[data-pick-content]").forEach((button) => {
  button.addEventListener("click", () => {
    const contentName = button.dataset.name || "";
    const contentMeta = button.dataset.meta || "";
    const duration = Number(button.dataset.duration || 0);
    const thumbLabel = button.dataset.duration ? `${button.dataset.duration}s` : "-";

    // 각 register의 콘텐츠 드롭존 → 카드 전환
    document.querySelectorAll(".schedule-register").forEach((register) => {
      const dropZone = register.querySelector("[id^='content-drop']");
      const contentCard = register.querySelector(".schedule-content-card");
      if (dropZone) dropZone.hidden = true;
      if (contentCard) {
        contentCard.hidden = false;
        const thumb = contentCard.querySelector("[data-content-thumb-label]");
        const nameFilled = contentCard.querySelector("[data-schedule-content-name-filled]");
        const metaFilled = contentCard.querySelector("[data-schedule-content-meta-filled]");
        if (thumb) thumb.textContent = thumbLabel;
        if (nameFilled) nameFilled.textContent = contentName;
        if (metaFilled) metaFilled.textContent = contentMeta;
      }
    });

    document.querySelectorAll("[data-schedule-summary-content]").forEach((target) => target.textContent = contentName);
    document.querySelectorAll("[data-duration-warning]").forEach((target) => {
      const selectedPlan = Number(document.querySelector('.schedule-playplan-select')?.value || 0);
      target.textContent = selectedPlan && selectedPlan !== duration ? `선택한 Playplan은 ${selectedPlan}초입니다. 선택한 콘텐츠는 ${duration}초입니다. 잔여 시간 검증은 실제 콘텐츠 재생 시간 기준으로 진행됩니다.` : "";
    });
    document.getElementById("schedule-content-modal").checked = false;
  });
});

document.querySelectorAll("[data-media-content-toggle]").forEach((input) => {
  input.addEventListener("change", () => {
    const register = currentScheduleRegister(input);

    // 미디어-콘텐츠 맵 표시/숨김
    const map = register.querySelector(".media-content-map");
    if (map) map.hidden = !input.checked;

    // 미디어별 선택 ON → Product 카드 내 미디어 리스트 숨김 (중복 방지)
    const mediaBriefList = register.querySelector("[data-schedule-media-brief-list]");
    if (mediaBriefList) mediaBriefList.hidden = input.checked;

    // 안내 텍스트 갱신
    const copy = register.querySelector("[data-media-content-copy]");
    if (copy) copy.textContent = input.checked
      ? "Product에 포함된 미디어별로 콘텐츠를 각각 선택합니다. 미디어별 콘텐츠 재생 시간이 다를 경우 시작 시점은 맞출 수 있지만 종료 시점은 달라질 수 있습니다."
      : "Product에 포함된 모든 미디어에 동일 콘텐츠를 송출합니다.";

    // 요약 매핑 방식 갱신 (null-safe)
    const mapSummary = register.querySelector("[data-schedule-summary-map]");
    if (mapSummary) mapSummary.textContent = input.checked ? "미디어별 콘텐츠" : "Product 1 : 콘텐츠 1";

    // 콘텐츠 컬럼 비활성화: 미디어별 선택 ON 이면 콘텐츠 공통 선택 영역(드롭존+카드) 잠금
    // toggle input 자체가 콘텐츠 mapping-col 안에 있으므로 closest로 해당 컬럼을 직접 참조
    const contentCol = input.closest(".mapping-col");
    if (contentCol) {
      // 헤더(step badge, 라벨, 체크박스)는 유지하고, 드롭존/카드 영역만 dim
      const dropZone = contentCol.querySelector("[id^='content-drop']");
      const contentCard = contentCol.querySelector(".schedule-content-card");
      if (input.checked) {
        if (dropZone) { dropZone.classList.add("mapping-col--inactive"); }
        if (contentCard) { contentCard.classList.add("mapping-col--inactive"); }
      } else {
        if (dropZone) { dropZone.classList.remove("mapping-col--inactive"); }
        if (contentCard) { contentCard.classList.remove("mapping-col--inactive"); }
      }
    }
  });
});

document.querySelectorAll("[data-sync-toggle]").forEach((input) => {
  input.addEventListener("change", () => {
    const copy = currentScheduleRegister(input).querySelector("[data-sync-copy]");
    if (!copy) return;
    copy.textContent = input.checked
      ? "싱크 송출 Product에 포함된 미디어에서 광고가 같은 시점에 송출되도록 제어합니다. 네트워크 및 Player 상태에 따라 실제 송출 시점에는 차이가 발생할 수 있습니다."
      : "싱크 송출 비활성화 시 미디어별 송출 시점은 운영 환경에 따라 달라질 수 있습니다.";
  });
});

// 등록 요약 — 스케줄명 실시간 반영
document.querySelectorAll(".schedule-register .schedule-name").forEach((input) => {
  const register = currentScheduleRegister(input);
  const updateName = () => {
    const v = input.value.trim();
    register.querySelectorAll("[data-schedule-summary-name]").forEach((el) => {
      el.textContent = v || "—";
    });
  };
  input.addEventListener("input", updateName);
  updateName();
});

// 등록 요약 — 광고 기간 실시간 반영
function formatDateShort(val) {
  if (!val) return "";
  const [y, m, d] = val.split("-");
  return `${y.slice(2)}.${m}.${d}`;
}
document.querySelectorAll(".schedule-register").forEach((register) => {
  const startEl = register.querySelector(".schedule-start-date");
  const endEl   = register.querySelector(".schedule-end-date");
  const updateDates = () => {
    const s = startEl?.value;
    const e = endEl?.value;
    const text = s && e ? `${formatDateShort(s)} ~ ${formatDateShort(e)}` : s ? `${formatDateShort(s)} ~` : "미설정";
    register.querySelectorAll("[data-schedule-summary-dates]").forEach((el) => {
      el.textContent = text;
    });
  };
  startEl?.addEventListener("change", updateDates);
  endEl?.addEventListener("change", updateDates);
  updateDates();
});

function renderScheduleVerify(register) {
  const result = register.querySelector("[data-schedule-verify-result]");
  const start = register.querySelector(".schedule-start-date")?.value;
  const end = register.querySelector(".schedule-end-date")?.value;
  const hasName = !!register.querySelector(".schedule-name")?.value.trim();
  const hasProduct = !!register.querySelector(".schedule-product-card:not([hidden])");
  const hasContent = !!register.querySelector(".schedule-content-card:not([hidden])");
  if (!hasName || !start || !end || start > end || !hasProduct || !hasContent) {
    result.innerHTML = '<article><strong>검증 불가</strong><span class="status status-warn">필수값 확인</span><em>스케줄명, Product, 콘텐츠, 광고 기간을 입력해 주세요.</em></article>';
    register.querySelector("[data-schedule-summary-verify]").innerHTML = '<span class="status status-warn">검증 필요</span>';
    register.querySelector("[data-submit-schedule]").disabled = true;
    return;
  }
  result.innerHTML = `
    <p class="verify-summary-row verify-summary-row--ok">
      <strong>광고 기간 기준 등록 가능</strong>
      <span>${start}~${end} 기간의 운영일, 기준 슬롯, 싱크 옵션을 반영했습니다.</span>
    </p>
    <div class="verify-accordion">
      <details class="is-ok" open>
        <summary>
          <strong>강남대로 DID 01</strong>
          <span class="status status-ok">등록 가능</span>
          <em>평균 잔여 120s / 600s · 4슬롯</em>
        </summary>
        <div class="verify-date-bars">
          <div class="verify-date-row"><span class="verify-date-row__label">06/10</span><div class="verify-date-row__bar"><b style="width:78%"></b></div><em>잔여 120s</em></div>
          <div class="verify-date-row"><span class="verify-date-row__label">06/11</span><div class="verify-date-row__bar"><b style="width:82%"></b></div><em>잔여 108s</em></div>
          <div class="verify-date-row"><span class="verify-date-row__label">06/12</span><div class="verify-date-row__bar"><b style="width:71%"></b></div><em>잔여 145s</em></div>
          <div class="verify-date-row"><span class="verify-date-row__label">06/13</span><div class="verify-date-row__bar"><b style="width:75%"></b></div><em>잔여 130s</em></div>
          <div class="verify-date-row"><span class="verify-date-row__label">06/14</span><div class="verify-date-row__bar"><b style="width:69%"></b></div><em>잔여 155s</em></div>
        </div>
      </details>
      <details class="is-warn">
        <summary>
          <strong>홍대입구 미디어보드</strong>
          <span class="status status-warn">확인 필요</span>
          <em>일부 일자 운영일 아님</em>
        </summary>
        <div class="verify-date-bars">
          <div class="verify-date-row"><span class="verify-date-row__label">06/10</span><div class="verify-date-row__bar"><b style="width:55%"></b></div><em>잔여 90s</em></div>
          <div class="verify-date-row"><span class="verify-date-row__label">06/11</span><div class="verify-date-row__bar"><b style="width:60%"></b></div><em>잔여 80s</em></div>
          <div class="verify-date-row"><span class="verify-date-row__label">06/12</span><div class="verify-date-row__bar non-operating" style=""><b class="non-operating" style="width:100%"></b></div><em>운영일 아님</em></div>
          <div class="verify-date-row"><span class="verify-date-row__label">06/13</span><div class="verify-date-row__bar"><b class="near" style="width:24%"></b></div><em>잔여 456s (주의)</em></div>
          <div class="verify-date-row"><span class="verify-date-row__label">06/14</span><div class="verify-date-row__bar"><b style="width:52%"></b></div><em>잔여 95s</em></div>
        </div>
      </details>
      <details class="is-ok">
        <summary>
          <strong>잠실 롯데월드몰 2F</strong>
          <span class="status status-ok">등록 가능</span>
          <em>평균 잔여 384s / 600s · 12슬롯</em>
        </summary>
        <div class="verify-date-bars">
          <div class="verify-date-row"><span class="verify-date-row__label">06/10</span><div class="verify-date-row__bar"><b style="width:64%"></b></div><em>잔여 216s</em></div>
          <div class="verify-date-row"><span class="verify-date-row__label">06/11</span><div class="verify-date-row__bar"><b style="width:68%"></b></div><em>잔여 192s</em></div>
          <div class="verify-date-row"><span class="verify-date-row__label">06/12</span><div class="verify-date-row__bar"><b style="width:70%"></b></div><em>잔여 180s</em></div>
          <div class="verify-date-row"><span class="verify-date-row__label">06/13</span><div class="verify-date-row__bar"><b style="width:62%"></b></div><em>잔여 228s</em></div>
          <div class="verify-date-row"><span class="verify-date-row__label">06/14</span><div class="verify-date-row__bar"><b style="width:66%"></b></div><em>잔여 204s</em></div>
        </div>
      </details>
    </div>`;
  register.querySelector("[data-schedule-summary-verify]").innerHTML = '<span class="status status-ok">검증 완료</span>';
  register.querySelector("[data-submit-schedule]").disabled = false;
}

document.querySelectorAll("[data-run-schedule-verify]").forEach((button) => {
  button.addEventListener("click", () => renderScheduleVerify(currentScheduleRegister(button)));
});

document.querySelectorAll("[data-submit-schedule]").forEach((button) => {
  button.addEventListener("click", () => {
    const register = currentScheduleRegister(button);
    const toast = register.querySelector("[data-schedule-toast]");
    const complete = register.querySelector("[data-schedule-complete]");
    toast.textContent = "스케줄이 등록되었습니다. 다음 작업을 선택해 주세요.";
    toast.hidden = false;
    if (complete) complete.hidden = false;
  });
});

document.querySelectorAll("[data-add-condition]").forEach((button) => {
  button.addEventListener("click", () => {
    const register = currentScheduleRegister(button);
    const list = register.querySelector("[data-condition-list]");
    const count = list.querySelectorAll(".condition-rule").length;
    if (count >= 3) return;
    const next = count + 1;
    const rule = document.createElement("article");
    rule.className = "condition-rule";
    rule.dataset.conditionIndex = String(count);
    rule.innerHTML = `
      <header>
        <strong>조건 옵션 ${next}</strong>
        <button type="button" class="btn btn-ghost btn-sm" data-remove-condition>삭제</button>
      </header>
      <div class="env-condition-body">
        <div class="env-input-row">
          <label>조건 유형
            <select data-condition-type>
              <option value="time">타임</option>
              <option value="env">환경</option>
              <option value="target">타겟</option>
            </select>
          </label>
          <!-- 타임 파라미터: 송출 주기 선택 -->
          <div data-condition-body="time">
            <label>송출 주기
              <select data-time-cycle>
                <option value="continuous">지정 시간 내 계속</option>
                <option value="hourly">매 정각</option>
                <option value="half-hourly">30분 마다</option>
                <option value="custom">사용자 정의</option>
              </select>
            </label>
          </div>
          <!-- 환경 파라미터 -->
          <div data-condition-body="env" hidden>
            <label>날씨 유형
              <select data-weather-type>
                <option value="">전체</option>
                <option value="sunny">맑은 날</option>
                <option value="cloudy">흐린 날</option>
                <option value="snow">눈오는 날</option>
                <option value="rain">비오는 날</option>
              </select>
            </label>
            <label>환경 유형
              <select data-env-type>
                <option value="temp">온도 (°C)</option>
                <option value="humidity">습도 (%)</option>
                <option value="dust">미세먼지 (㎍/㎥)</option>
              </select>
            </label>
            <label>최솟값<input type="number" placeholder="예: 25"></label>
            <label>최댓값<input type="number" placeholder="예: 35"></label>
          </div>
          <!-- 타겟 파라미터 -->
          <div data-condition-body="target" hidden>
            <div class="target-gender-group">
              <span class="condition-field-label">성별</span>
              <div class="target-gender-row">
                <label class="field-check"><input type="checkbox" value="M"><span>남성</span></label>
                <label class="field-check"><input type="checkbox" value="F"><span>여성</span></label>
              </div>
            </div>
            <div class="target-age-group">
              <span class="condition-field-label">연령대</span>
              <div class="target-age-row">
                <label class="field-check"><input type="checkbox" value="u10"><span>10대 미만</span></label>
                <label class="field-check"><input type="checkbox" value="10-14"><span>10-14세</span></label>
                <label class="field-check"><input type="checkbox" value="15-19"><span>15-19세</span></label>
                <label class="field-check"><input type="checkbox" value="20-24"><span>20-24세</span></label>
                <label class="field-check"><input type="checkbox" value="25-29"><span>25-29세</span></label>
                <label class="field-check"><input type="checkbox" value="30s"><span>30대</span></label>
                <label class="field-check"><input type="checkbox" value="40s"><span>40대</span></label>
                <label class="field-check"><input type="checkbox" value="50s"><span>50대</span></label>
                <label class="field-check"><input type="checkbox" value="60plus"><span>60대 이상</span></label>
              </div>
            </div>
          </div>
        </div>
        <!-- 타겟 센서 경고 (env-input-row 밖) -->
        <p class="condition-sensor-warn" data-target-sensor-warn hidden>타겟 조건은 카메라 센서가 설치된 미디어에서만 동작합니다.</p>

        <!-- 타임: 송출 주기별 파라미터 -->
        <div class="condition-broadcast-section" data-time-cycle-params>
          <div data-cycle-body="continuous">
            <div class="cycle-inline-row">
              <label class="cycle-inline-label"><span>시작</span><input type="time" value="09:00" data-time-start></label>
              <span class="cycle-tilde">~</span>
              <label class="cycle-inline-label"><span>종료</span><input type="time" value="18:00" data-time-end></label>
              <span class="cycle-bar"></span>
              최대 <strong class="cycle-max-val" data-max-count>—</strong>회 가능
              <span class="time-max-info__sep">·</span>
              희망 <input type="number" class="trigger-count-input time-max-input" min="1" value="1" data-desired-count>회
            </div>
            <p class="time-broadcast-alert" data-broadcast-alert hidden>⚠ 최대 송출 횟수(<span data-alert-max></span>회)를 초과하였습니다.</p>
          </div>
          <div data-cycle-body="hourly" hidden>
            <div class="cycle-inline-row">
              <span class="trigger-unit">정각마다</span>
              <input type="number" class="trigger-count-input" min="1" max="99" value="1" data-hourly-count>
              <span class="trigger-unit">회 송출</span>
              <span class="cycle-hint">운영 시간 내 매 정각(XX:00) 자동 송출</span>
            </div>
          </div>
          <div data-cycle-body="half-hourly" hidden>
            <div class="cycle-inline-row">
              <span class="trigger-unit">30분 주기마다</span>
              <input type="number" class="trigger-count-input" min="1" max="99" value="1" data-half-hourly-count>
              <span class="trigger-unit">회 송출</span>
              <span class="cycle-hint">매 정각 및 30분(10:00, 10:30…) 자동 송출</span>
            </div>
          </div>
          <div data-cycle-body="custom" hidden>
            <div class="custom-time-slots" data-custom-slots></div>
            <div class="cycle-inline-row">
              <span class="trigger-unit">선택된 시간마다</span>
              <input type="number" class="trigger-count-input" min="1" max="99" value="1" data-custom-count>
              <span class="trigger-unit">회 송출</span>
            </div>
          </div>
        </div>

        <!-- 환경·타겟: 조건 발생 시 송출 횟수 -->
        <div class="condition-broadcast-section" data-trigger-count hidden>
          <p class="trigger-label">조건 발생 시 송출</p>
          <div class="trigger-input-row">
            <input type="number" class="trigger-count-input" min="1" max="99" value="1" placeholder="1">
            <span class="trigger-unit">회</span>
            <span class="helper muted">조건이 충족될 때마다 반복 송출합니다.</span>
          </div>
        </div>
      </div>`;

    // 이전 조건과의 AND/OR 연결자 삽입
    if (count >= 1) {
      const connector = document.createElement("div");
      connector.className = "condition-connector";
      connector.innerHTML = `<select aria-label="조건 연결">
        <option value="and">AND</option>
        <option value="or">OR</option>
      </select>`;
      list.appendChild(connector);
    }
    list.appendChild(rule);
    const productKey = register.dataset.activeProductKey;
    if (productKey) initTimeCycle(rule, productKey);
    const total = list.querySelectorAll(".condition-rule").length;
    const summaryEl = register.querySelector("[data-schedule-summary-condition]");
    if (summaryEl) summaryEl.textContent = `${total}개`;
    if (total >= 3) button.disabled = true;
  });
});

document.addEventListener("click", (event) => {
  const remove = event.target.closest("[data-remove-condition]");
  if (!remove) return;
  const register = currentScheduleRegister(remove);
  const list = register.querySelector("[data-condition-list]");
  if (list.querySelectorAll(".condition-rule").length <= 1) return;
  const article = remove.closest(".condition-rule");
  // 앞에 있는 connector도 함께 제거
  const prev = article.previousElementSibling;
  if (prev?.classList.contains("condition-connector")) prev.remove();
  article.remove();
  register.querySelector("[data-add-condition]").disabled = false;
  const total = list.querySelectorAll(".condition-rule").length;
  const summaryEl = register.querySelector("[data-schedule-summary-condition]");
  if (summaryEl) summaryEl.textContent = `${total}개`;
});

document.querySelectorAll("[data-preview-content]").forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById("schedule-preview-modal");
    if (modal) modal.checked = true;
    else showGlobalToast("콘텐츠 상세 화면은 추후 제공됩니다.");
  });
});

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", () => showGlobalToast(button.dataset.toast));
});

document.querySelectorAll("[data-reset-same-product], [data-reset-new-schedule]").forEach((button) => {
  button.addEventListener("click", () => {
    const register = currentScheduleRegister(button);
    register.querySelector("[data-schedule-complete]").hidden = true;
    register.querySelector("[data-schedule-toast]").hidden = true;
    register.querySelector("[data-schedule-verify-result]").innerHTML = "";
    register.querySelector("[data-schedule-summary-verify]").innerHTML = '<span class="status status-warn">검증 전</span>';
    register.querySelector("[data-submit-schedule]").disabled = true;
    if (button.matches("[data-reset-new-schedule]")) {
      // 콘텐츠 카드 → 드롭존 복원
      const contentCard = register.querySelector(".schedule-content-card");
      const contentDrop = register.querySelector("[id^='content-drop']");
      if (contentCard) contentCard.hidden = true;
      if (contentDrop) contentDrop.hidden = false;
      register.querySelectorAll("[data-schedule-summary-content]").forEach((target) => target.textContent = "미선택");
    }
  });
});

document.querySelectorAll("[data-schedule-detail-tabs] button").forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.scheduleDetailTab;
    document.querySelectorAll("[data-schedule-detail-tabs] button").forEach((item) => item.classList.toggle("is-active", item === button));
    document.querySelectorAll("[data-schedule-detail-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.scheduleDetailPanel !== tab;
    });
    window.setTimeout(() => {
      initCharts();
      if (typeof window._applyStatusFilter === 'function') window._applyStatusFilter();
    }, 50);
  });
});

// ── Product 모달: 리스트 클릭 → 상세 패널 업데이트 ──
document.querySelectorAll("[data-product-preview]").forEach((button) => {
  button.addEventListener("click", () => {
    const option = scheduleProductOptions[button.dataset.productPreview];
    if (!option) return;

    // 선택 상태 토글
    document.querySelectorAll("[data-product-preview]").forEach((item) =>
      item.classList.toggle("is-selected", item === button)
    );

    // 상세 패널 업데이트
    const nameEl      = document.getElementById("product-detail-name");
    const statusEl    = document.getElementById("product-detail-status");
    const descEl      = document.getElementById("product-detail-desc");
    const mediaList   = document.getElementById("product-detail-media");
    const adsEl       = document.getElementById("product-detail-ads");
    const condEl      = document.getElementById("product-detail-conditions");
    const playplanRef = document.getElementById("modal-playplan-ref");
    const applyBtn    = document.getElementById("product-apply-btn");

    if (nameEl)      nameEl.textContent      = option.name;
    if (descEl)      descEl.textContent      = option.desc;
    if (adsEl)       adsEl.textContent       = option.ads;
    if (condEl)      condEl.textContent      = option.conditions;
    if (playplanRef) playplanRef.textContent = option.playplans || "—";

    // 상태 배지
    if (statusEl) {
      statusEl.textContent = option.statusText || "사용 가능";
      statusEl.className   = `status ${option.statusClass || "status-ok"}`;
    }

    // ④ 포함 미디어 목록 (운영설정 포함) 렌더
    if (mediaList && option.mediaDetails) {
      mediaList.innerHTML = option.mediaDetails.map((m) =>
        `<div class="product-media-item">
          <span>${m.name}</span>
          <small class="product-media-item__op">${m.op}</small>
        </div>`
      ).join("");
    }

    // Apply 버튼 데이터 갱신
    if (applyBtn) {
      applyBtn.dataset.name       = option.name;
      applyBtn.dataset.meta       = option.meta;
      applyBtn.dataset.productKey = button.dataset.productPreview;
    }
  });
});

// ── Product 검색 ──
document.querySelectorAll("[data-product-search]").forEach((input) => {
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll("#product-select-list [data-search-name]").forEach((btn) => {
      const match = !q || btn.dataset.searchName.toLowerCase().includes(q);
      btn.style.display = match ? "" : "none";
    });
  });
});

// ── 콘텐츠 모달: 리스트 클릭 → 상세 패널 업데이트 ──
function updateContentCompat(duration) {
  const row      = document.getElementById("content-compat-row");
  const textEl   = document.getElementById("content-compat-text");
  if (!row || !textEl) return;

  const planDur = 0; // Playplan 선택 제거 — 슬롯 최소값 기준으로 콘텐츠 제한

  row.className = "content-compat-row";
  if (!planDur) {
    row.classList.add("content-compat-row--neutral");
    row.querySelector(".content-compat-row__icon").textContent = "—";
    textEl.textContent = "Playplan 미선택 · 콘텐츠 재생 시간 기준으로 검증합니다.";
  } else if (planDur === duration) {
    row.classList.add("content-compat-row--ok");
    row.querySelector(".content-compat-row__icon").textContent = "✓";
    textEl.textContent = `Playplan(${planDur}초)과 재생 시간이 일치합니다.`;
  } else {
    row.classList.add("content-compat-row--warn");
    row.querySelector(".content-compat-row__icon").textContent = "⚠";
    textEl.textContent = `Playplan(${planDur}초)과 재생 시간이 다릅니다(${duration}초). 검증 시 불일치가 표시됩니다.`;
  }
}

document.querySelectorAll("[data-content-preview]").forEach((button) => {
  button.addEventListener("click", () => {
    const key    = button.dataset.contentPreview;
    const option = contentOptions[key];
    if (!option) return;

    // 선택 상태 토글
    document.querySelectorAll("[data-content-preview]").forEach((item) =>
      item.classList.toggle("is-selected", item === button)
    );

    // ⑧ 상세 패널 썸네일
    const thumbEl  = document.getElementById("content-detail-thumb");
    const nameEl   = document.getElementById("content-detail-name");
    const chipsEl  = document.getElementById("content-detail-chips");
    const statusEl = document.getElementById("content-detail-status");
    const applyBtn = document.getElementById("content-apply-btn");

    if (thumbEl) {
      thumbEl.innerHTML = '<svg class="content-play-icon" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="28" cy="28" r="26" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/><path d="M22 18L42 28L22 38Z" fill="white"/></svg>';
      thumbEl.className = `content-detail-thumb content-detail-thumb--${option.orientation}`;
    }
    if (nameEl)  nameEl.textContent  = option.name;

    // ⑨ chip 갱신
    if (chipsEl) {
      chipsEl.innerHTML = [
        `<span class="meta-chip">${option.duration}초</span>`,
        `<span class="meta-chip">${option.resolution}</span>`,
        `<span class="meta-chip meta-chip--format">${option.format}</span>`
      ].join("");
    }

    // ⑩ 콘텐츠 유형 태그
    if (statusEl) {
      statusEl.textContent = option.contentType;
      statusEl.className   = 'content-type-tag';
    }

    // ⑪ Apply 버튼 데이터 갱신
    if (applyBtn) {
      applyBtn.dataset.name     = option.name;
      applyBtn.dataset.meta     = option.meta;
      applyBtn.dataset.duration = String(option.duration);
    }
  });
});

// ── 콘텐츠 검색 ──
document.querySelectorAll("[data-content-search]").forEach((input) => {
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll("#content-select-list [data-search-name]").forEach((btn) => {
      const match = !q || btn.dataset.searchName.toLowerCase().includes(q);
      btn.style.display = match ? "" : "none";
    });
  });
});

// ── 콘텐츠 모달 열릴 때 첫 번째 아이템 자동 활성화 ──
document.getElementById("schedule-content-modal")?.addEventListener("change", function () {
  if (!this.checked) return;
  const firstBtn = document.querySelector("#content-select-list [data-content-preview]");
  if (firstBtn && !document.querySelector("#content-select-list .is-selected")) {
    firstBtn.click();
  }
  // 호환성 재계산 (모달 열릴 때마다)
  // (Playplan 호환성 체크 제거됨)
});

function ensureCanvas(selector, id) {
  const container = document.querySelector(selector);
  if (!container) return null;
  let canvas = document.getElementById(id);
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = id;
    canvas.className = "chartjs-canvas";
    container.appendChild(canvas);
  }
  return canvas;
}

function makeChart(id, config) {
  const canvas = document.getElementById(id);
  if (!canvas || !window.Chart) return;
  if (chartInstances[id]) chartInstances[id].destroy();
  chartInstances[id] = new Chart(canvas, config);
}

// ── Chart helpers ──────────────────────────────────────────────────────
/** 데이터 배열에서 최댓값 인덱스에 full 색상, 나머지에 faded 색상 반환 */
function peakColors(data, full, faded) {
  const max = Math.max(...data);
  return data.map(v => (v === max ? full : faded));
}
/** 두 배열의 합산 기준 최댓값 인덱스로 각 배열의 색상 배열 반환 */
function peakColorsStacked(a, b, fullA, fadedA, fullB, fadedB) {
  const totals = a.map((v, i) => v + b[i]);
  const max = Math.max(...totals);
  return [
    totals.map(v => (v === max ? fullA : fadedA)),
    totals.map(v => (v === max ? fullB : fadedB))
  ];
}
/** 포인트별 반지름 배열: 최댓값 인덱스만 크게 */
function peakRadius(data, big = 8, small = 3) {
  const max = Math.max(...data);
  return data.map(v => (v === max ? big : small));
}

function chartOptions(stacked, xLabel = "", yLabel = "") {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { boxWidth: 12, padding: 14, font: { size: 11 } } },
      tooltip: { mode: "index", intersect: false }
    },
    scales: {
      x: {
        stacked,
        grid: { display: false },
        ticks: { font: { size: 11 } },
        title: xLabel ? { display: true, text: xLabel, color: "#8a9aa8", font: { size: 11 } } : { display: false }
      },
      y: {
        stacked,
        beginAtZero: true,
        grid: { color: "rgba(0,0,0,.05)" },
        ticks: { font: { size: 11 } },
        title: yLabel ? { display: true, text: yLabel, color: "#8a9aa8", font: { size: 11 } } : { display: false }
      }
    }
  };
}

function horizontalChartOptions(xLabel = "", yLabel = "") {
  return {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom", labels: { boxWidth: 12, padding: 14, font: { size: 11 } } },
      tooltip: { mode: "index", intersect: false }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { color: "rgba(0,0,0,.05)" },
        ticks: { font: { size: 11 } },
        title: xLabel ? { display: true, text: xLabel, color: "#8a9aa8", font: { size: 11 } } : { display: false }
      },
      y: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
        title: yLabel ? { display: true, text: yLabel, color: "#8a9aa8", font: { size: 11 } } : { display: false }
      }
    }
  };
}

function initCharts() {
  // 프로덕트·스케줄 차트는 ensureCanvas로 동적 생성 (기존 구조 유지)
  ensureCanvas(".product-detail__analytics .chart-card:nth-child(1)", "product-month-chart");
  ensureCanvas(".product-detail__analytics .chart-card:nth-child(2)", "product-weekday-chart");
  ensureCanvas(".product-detail__analytics .chart-card:nth-child(3)", "product-age-chart");
  if (!window.Chart) return;

  const C = {
    blue:       "#2d84ed",
    blueFaded:  "rgba(45,132,237,0.25)",
    green:      "#58C65D",
    greenFaded: "rgba(88,198,93,0.25)",
    gray:       "#dfe5eb",
    orange:     "#f59e0b"
  };

  // ── 1. 월별 유동인구 (stacked bar, 5월 강조) ──
  const monthMale   = [6800, 7600, 9000, 9900, 12600, 11800];
  const monthFemale = [5600, 6600, 7800, 8200, 10000,  9600];
  const [mcM, mcF]  = peakColorsStacked(monthMale, monthFemale, C.blue, C.blueFaded, C.green, C.greenFaded);
  makeChart("media-month-chart", {
    type: "bar",
    data: {
      labels: ["1월","2월","3월","4월","5월","6월"],
      datasets: [
        { label: "남성", data: monthMale,   backgroundColor: mcM, stack: "flow" },
        { label: "여성", data: monthFemale, backgroundColor: mcF, stack: "flow" }
      ]
    },
    options: chartOptions(true, "월", "유동인구 (명)")
  });

  // ── 2. 요일별 유동인구 (stacked bar, 수요일 강조) ──
  const wdMale   = [4100, 4300, 5200, 4700, 5100, 5000, 3900];
  const wdFemale = [4000, 4300, 5000, 4700, 4800, 4800, 3700];
  const [wcM, wcF] = peakColorsStacked(wdMale, wdFemale, C.blue, C.blueFaded, C.green, C.greenFaded);
  makeChart("media-weekday-chart", {
    type: "bar",
    data: {
      labels: ["월","화","수","목","금","토","일"],
      datasets: [
        { label: "남성", data: wdMale,   backgroundColor: wcM, stack: "flow" },
        { label: "여성", data: wdFemale, backgroundColor: wcF, stack: "flow" }
      ]
    },
    options: chartOptions(true, "요일", "유동인구 (명)")
  });

  // ── 3. 시간대별 유동인구 (line, 12시 피크 강조) ──
  const hrLabels = ["08","09","10","11","12","13","14","15","16","17","18","19","20","21"];
  const hrMale   = [1800, 2600, 3900, 5400, 7800, 7200, 5600, 5000, 5600, 6800, 6200, 3800, 2400, 1600];
  const hrFemale = [1400, 2000, 3100, 4400, 6400, 5800, 4400, 4000, 4400, 5400, 5000, 3000, 1900, 1200];
  makeChart("media-hour-chart", {
    type: "line",
    data: {
      labels: hrLabels,
      datasets: [
        {
          label: "남성",
          data: hrMale,
          borderColor: C.blue,
          backgroundColor: "rgba(45,132,237,0.08)",
          fill: true, tension: 0.4,
          pointRadius: peakRadius(hrMale, 8, 3),
          pointBackgroundColor: peakColors(hrMale, C.blue, "rgba(45,132,237,0.4)"),
          pointBorderColor: peakColors(hrMale, "#fff", "transparent"),
          pointBorderWidth: 2
        },
        {
          label: "여성",
          data: hrFemale,
          borderColor: C.green,
          backgroundColor: "rgba(88,198,93,0.06)",
          fill: true, tension: 0.4,
          pointRadius: peakRadius(hrFemale, 8, 3),
          pointBackgroundColor: peakColors(hrFemale, C.green, "rgba(88,198,93,0.4)"),
          pointBorderColor: peakColors(hrFemale, "#fff", "transparent"),
          pointBorderWidth: 2
        }
      ]
    },
    options: chartOptions(false, "시간대", "유동인구 (명)")
  });

  // ── 4. 연령·성별 분포 (가로 grouped bar, 30대 강조) ──
  const ageLabels = ["10대","20대","30대","40대","50대"];
  const ageMale   = [2400, 4200, 7600, 5800, 4000];
  const ageFemale = [2000, 3800, 6400, 5200, 3600];
  makeChart("media-age-chart", {
    type: "bar",
    data: {
      labels: ageLabels,
      datasets: [
        { label: "남성", data: ageMale,   backgroundColor: peakColors(ageMale,   C.blue,  C.blueFaded)  },
        { label: "여성", data: ageFemale, backgroundColor: peakColors(ageFemale, C.green, C.greenFaded) }
      ]
    },
    options: horizontalChartOptions("유동인구 (명)", "연령대")
  });

  // ── 5. 거주·근무지 분포 (가로 grouped bar, 강남구 강조) ──
  const lifeLabels = ["강남구","서초구","송파구","마포구","성동구"];
  const lifeResid  = [9800, 7900, 6500, 4200, 3600];
  const lifeWork   = [10400, 7300, 5900, 4800, 3900];
  makeChart("media-life-chart", {
    type: "bar",
    data: {
      labels: lifeLabels,
      datasets: [
        { label: "거주지", data: lifeResid, backgroundColor: peakColors(lifeResid, C.green, C.greenFaded) },
        { label: "근무지", data: lifeWork,  backgroundColor: peakColors(lifeWork,  C.blue,  C.blueFaded)  }
      ]
    },
    options: horizontalChartOptions("유동인구 (명)", "지역")
  });

  // ── 프로덕트 차트 ──
  const pmMale   = [31200,38100,42600,47400];
  const pmFemale = [30000,32000,40000,44000];
  const [pmcM, pmcF] = peakColorsStacked(pmMale, pmFemale, C.blue, C.blueFaded, C.green, C.greenFaded);
  makeChart("product-month-chart", {
    type: "bar",
    data: { labels: ["3월","4월","5월","6월"], datasets: [
      { label: "남성", data: pmMale,   backgroundColor: pmcM, stack: "flow" },
      { label: "여성", data: pmFemale, backgroundColor: pmcF, stack: "flow" }
    ]},
    options: chartOptions(true, "월", "유동인구 (명)")
  });
  const pwData = [28100,34200,39800,33400];
  makeChart("product-weekday-chart", {
    type: "bar",
    data: { labels: ["월","수","금","토"], datasets: [
      { label: "유동", data: pwData, backgroundColor: peakColors(pwData, C.green, C.greenFaded) }
    ]},
    options: chartOptions(false, "요일", "유동인구 (명)")
  });
  const paMale   = [44,82,66,38];
  const paFemale = [38,70,56,34];
  makeChart("product-age-chart", {
    type: "bar",
    data: { labels: ["20-24세","30대","40대","50대"], datasets: [
      { label: "남성", data: paMale,   backgroundColor: peakColors(paMale,   C.blue,  C.blueFaded)  },
      { label: "여성", data: paFemale, backgroundColor: peakColors(paFemale, C.green, C.greenFaded) }
    ]},
    options: horizontalChartOptions("유동인구 (명)", "연령대")
  });

  // ── 스케줄 차트 ──
  makeChart("schedule-daily-chart", {
    type: "bar",
    data: { labels: ["5/1","5/5","5/10","5/15","5/20","5/25","5/30","6/1"], datasets: [
      { type: "bar",  label: "보장",     data: [200,200,200,200,200,200,200,180], backgroundColor: C.gray },
      { type: "bar",  label: "실적",     data: [195,198,188,194,205,190,198,173], backgroundColor: C.green },
      { type: "line", label: "달성 추이", data: [198,201,188,195,207,192,200,176], borderColor: C.blue, tension: .32, pointRadius: 2 }
    ]},
    options: chartOptions(false)
  });
  makeChart("schedule-performance-chart", {
    type: "line",
    data: { labels: ["5/1","5/5","5/10","5/15","5/20","5/25","5/30","6/1"], datasets: [
      { label: "노출",     data: [181,196,172,190,204,198,190,174], borderColor: C.green,  backgroundColor: "rgba(88,198,93,.12)", fill: true, tension: .35, pointRadius: 3 },
      { label: "주목인구", data: [109,118,103,114,122,119,114,104], borderColor: C.orange, backgroundColor: "transparent",        fill: false, tension: .35, pointRadius: 3 },
      { label: "평균 (노출)", data: Array(8).fill(185), borderColor: "#b0bec5", backgroundColor: "transparent", fill: false, borderDash: [5,4], borderWidth: 1.5, pointRadius: 0, order: 10 }
    ]},
    options: chartOptions(false)
  });
}

window.addEventListener("load", () => window.setTimeout(() => {
  initCharts();
  if (typeof window._applyStatusFilter === 'function') window._applyStatusFilter();
}, 200));

document.querySelectorAll('input[name="weekday-preset"]').forEach((radio) => {
  radio.addEventListener("change", () => applyWeekdayPreset(radio.value));
});

weekdayCheckboxes.forEach((id) => {
  document.getElementById(id)?.addEventListener("change", () => {
    const custom = document.querySelector('input[name="weekday-preset"][value="사용자 정의"]');
    if (custom) custom.checked = true;
    updateOperationSummary();
  });
});

["op-start-time", "op-end-time", "op-slot-duration", "op-slot-count"].forEach((id) => {
  document.getElementById(id)?.addEventListener("input", updateOperationSummary);
});

document.querySelector(".select-modal-footer-note label")?.addEventListener("click", () => {
  const selectModal = document.getElementById("operation-select-modal");
  if (selectModal) selectModal.checked = false;
});

function addPhotoThumb(src, index) {
  const preview = document.querySelector(".media-photo-upload__preview");
  if (!preview || preview.children.length >= 3) return;

  const figure = document.createElement("figure");
  figure.className = "media-photo-thumb";
  figure.innerHTML = `
    <img class="media-photo-thumb__image" src="${src}" alt="현장 설치 사진 ${index + 1}">
    <button type="button" class="media-photo-thumb__delete" aria-label="이미지 삭제">×</button>
  `;
  preview.appendChild(figure);
}

document.querySelector(".media-photo-upload__button")?.addEventListener("click", () => {
  const preview = document.querySelector(".media-photo-upload__preview");
  const nextIndex = preview ? preview.children.length : 0;
  if (nextIndex < 3) addPhotoThumb(samplePhotos[nextIndex], nextIndex);
});

document.querySelector(".media-photo-upload__preview")?.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".media-photo-thumb__delete");
  if (deleteButton) deleteButton.closest(".media-photo-thumb")?.remove();
});

document.querySelectorAll("[data-slider]").forEach((slider) => {
  const placeholder = slider.querySelector("[data-placeholder-index]");
  const total = 3;
  let current = 0;
  const container = slider.closest(".media-detail__photo");
  const counter = container?.querySelector(".media-photo-slider__counter");
  const dots = [...(container?.querySelectorAll(".media-photo-slider__dot") || [])];

  function renderPhoto(index) {
    current = ((index % total) + total) % total;
    if (placeholder) {
      placeholder.dataset.placeholderIndex = String(current);
      const label = placeholder.querySelector("span");
      if (label) label.textContent = `설치 사진 ${current + 1}`;
    }
    if (counter) counter.textContent = `${current + 1} / ${total}`;
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("media-photo-slider__dot--active", dotIndex === current);
    });
  }

  slider.querySelector(".media-photo-slider__nav--prev")?.addEventListener("click", () => renderPhoto(current - 1));
  slider.querySelector(".media-photo-slider__nav--next")?.addEventListener("click", () => renderPhoto(current + 1));
  dots.forEach((dot, dotIndex) => dot.addEventListener("click", () => renderPhoto(dotIndex)));
});

// ── 조건 타입 토글 ──
document.addEventListener("change", (event) => {
  const select = event.target.closest("[data-condition-type]");
  if (!select) return;
  const article = select.closest(".condition-rule");
  if (!article) return;
  const type = select.value;

  // 조건 파라미터 패널 전환
  article.querySelectorAll("[data-condition-body]").forEach((body) => {
    body.hidden = body.dataset.conditionBody !== type;
  });

  // 송출 설정 전환: 타임 → 주기, 환경·타겟 → 횟수
  const timeCycleParams = article.querySelector("[data-time-cycle-params]");
  const triggerCount    = article.querySelector("[data-trigger-count]");
  if (timeCycleParams) timeCycleParams.hidden = type !== "time";
  if (triggerCount)    triggerCount.hidden    = type === "time";

  // 타겟 센서 경고 표시
  const sensorWarn = article.querySelector("[data-target-sensor-warn]");
  if (sensorWarn) sensorWarn.hidden = type !== "target";
});

// ── 타임 조건: 송출 주기 핸들러 ─────────────────────────
function getProductOpMinutes(productKey) {
  const opt = scheduleProductOptions[productKey];
  if (!opt?.mediaDetails?.length) return { start: 9 * 60, end: 18 * 60 };
  const m = opt.mediaDetails[0].op.match(/(\d{2}):(\d{2})~(\d{2}):(\d{2})/);
  if (m) return { start: +m[1] * 60 + +m[2], end: +m[3] * 60 + +m[4] };
  return { start: 9 * 60, end: 18 * 60 };
}

function getProductMinGuaranteed(productKey) {
  const opt = scheduleProductOptions[productKey];
  if (!opt?.mediaDetails) return null;
  const vals = opt.mediaDetails.map(m => m.minGuaranteed).filter(Boolean);
  return vals.length ? Math.min(...vals) : null;
}

function genCustomSlots(article, productKey) {
  const container = article.querySelector("[data-custom-slots]");
  if (!container || container.childElementCount > 0) return;
  const { start, end } = getProductOpMinutes(productKey);
  const slots = [];
  for (let t = start; t < end; t += 30) {
    const h = String(Math.floor(t / 60)).padStart(2, "0");
    const min = String(t % 60).padStart(2, "0");
    slots.push(`${h}:${min}`);
  }
  container.innerHTML = slots.map(t =>
    `<button type="button" class="time-slot-btn" data-slot="${t}">${t}</button>`
  ).join("");
  container.addEventListener("click", e => {
    const btn = e.target.closest("[data-slot]");
    if (btn) btn.classList.toggle("is-selected");
  });
}

function updateMaxInfo(article, productKey) {
  const maxG = getProductMinGuaranteed(productKey);
  if (maxG === null) return;
  const maxEl = article.querySelector("[data-max-count]");
  const alertMaxEl = article.querySelector("[data-alert-max]");
  if (maxEl) maxEl.textContent = maxG;
  if (alertMaxEl) alertMaxEl.textContent = maxG;
}

function checkBroadcastAlert(article, productKey) {
  const maxG = getProductMinGuaranteed(productKey);
  if (maxG === null) return;
  const input = article.querySelector("[data-desired-count]");
  const alertEl = article.querySelector("[data-broadcast-alert]");
  if (!input || !alertEl) return;
  alertEl.hidden = (parseInt(input.value) || 0) <= maxG;
}

function initTimeCycle(article, productKey) {
  if (article.dataset.timeCycleReady) return;
  article.dataset.timeCycleReady = "1";

  const cycleSelect = article.querySelector("[data-time-cycle]");
  const cycleParams = article.querySelector("[data-time-cycle-params]");
  if (!cycleSelect || !cycleParams) return;

  const switchBody = (val) => {
    cycleParams.querySelectorAll("[data-cycle-body]").forEach(b => {
      b.hidden = b.dataset.cycleBody !== val;
    });
    if (val === "custom")     genCustomSlots(article, productKey);
    if (val === "continuous") updateMaxInfo(article, productKey);
  };

  switchBody(cycleSelect.value);

  cycleSelect.addEventListener("change", () => switchBody(cycleSelect.value));

  article.querySelector("[data-time-start]")?.addEventListener("change", () => {
    if (cycleSelect.value === "continuous") updateMaxInfo(article, productKey);
  });
  article.querySelector("[data-time-end]")?.addEventListener("change", () => {
    if (cycleSelect.value === "continuous") updateMaxInfo(article, productKey);
  });
  article.querySelector("[data-desired-count]")?.addEventListener("input", () => {
    checkBroadcastAlert(article, productKey);
  });
}

// ── 송출 로그 페이지네이션 ──
const broadcastLogData = [
  { time: "14:35:22", media: "강남대로 DID 01",    content: "여름 캠페인 30초", dur: "30s", ok: true  },
  { time: "14:05:10", media: "잠실 롯데월드몰 2F",  content: "여름 캠페인 30초", dur: "30s", ok: true  },
  { time: "13:35:44", media: "홍대입구 미디어보드", content: "여름 캠페인 30초", dur: "30s", ok: true  },
  { time: "13:05:01", media: "강남대로 DID 01",    content: "여름 캠페인 30초", dur: "30s", ok: true  },
  { time: "12:30:55", media: "홍대입구 미디어보드", content: "여름 캠페인 30초", dur: "30s", ok: false, reason: "네트워크 오류" },
  { time: "12:00:33", media: "잠실 롯데월드몰 2F",  content: "여름 캠페인 30초", dur: "30s", ok: true  },
  { time: "11:35:12", media: "강남대로 DID 01",    content: "여름 캠페인 30초", dur: "30s", ok: true  },
  { time: "11:05:08", media: "홍대입구 미디어보드", content: "여름 캠페인 30초", dur: "30s", ok: true  },
  { time: "10:35:22", media: "강남대로 DID 01",    content: "여름 캠페인 30초", dur: "30s", ok: true  },
  { time: "10:05:44", media: "잠실 롯데월드몰 2F",  content: "여름 캠페인 30초", dur: "30s", ok: true  },
  { time: "09:35:12", media: "홍대입구 미디어보드", content: "여름 캠페인 30초", dur: "30s", ok: true  },
  { time: "09:05:01", media: "강남대로 DID 01",    content: "여름 캠페인 30초", dur: "30s", ok: true  },
];
const LOG_PER_PAGE = 5;
let logCurrentPage = 1;

function renderBroadcastLog(page) {
  const tbody = document.getElementById("broadcast-log-tbody");
  const pagination = document.getElementById("log-pagination");
  if (!tbody || !pagination) return;

  const totalPages = Math.ceil(broadcastLogData.length / LOG_PER_PAGE);
  const start = (page - 1) * LOG_PER_PAGE;
  const rows = broadcastLogData.slice(start, start + LOG_PER_PAGE);

  tbody.innerHTML = rows.map(r => `
    <tr>
      <td>${r.time}</td>
      <td>${r.media}</td>
      <td>${r.content}</td>
      <td>${r.dur}</td>
      <td><span class="${r.ok ? "log-status-ok" : "log-status-fail"}">${r.ok ? "성공" : "실패 · " + r.reason}</span></td>
    </tr>`).join("");

  pagination.innerHTML = `
    <button class="log-pagination__btn" data-log-page="prev" ${page === 1 ? "disabled" : ""}>‹</button>
    ${Array.from({ length: totalPages }, (_, i) => i + 1).map(p =>
      `<button class="log-pagination__btn ${p === page ? "is-active" : ""}" data-log-page="${p}">${p}</button>`
    ).join("")}
    <button class="log-pagination__btn" data-log-page="next" ${page === totalPages ? "disabled" : ""}>›</button>
    <span class="log-pagination__info">${start + 1}–${Math.min(start + LOG_PER_PAGE, broadcastLogData.length)} / 총 ${broadcastLogData.length}건</span>
  `;
}

document.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-log-page]");
  if (!btn || btn.disabled) return;
  const val = btn.dataset.logPage;
  const totalPages = Math.ceil(broadcastLogData.length / LOG_PER_PAGE);
  if (val === "prev") logCurrentPage = Math.max(1, logCurrentPage - 1);
  else if (val === "next") logCurrentPage = Math.min(totalPages, logCurrentPage + 1);
  else logCurrentPage = Number(val);
  renderBroadcastLog(logCurrentPage);
});

renderBroadcastLog(logCurrentPage);

// ── Product/콘텐츠 매핑 케이스 토글 (공통 ↔ 미디어별 개별) ──
document.addEventListener("click", (event) => {
  const btn = event.target.closest("[data-content-map-toggle]");
  if (!btn) return;
  const card = btn.closest("[data-map-mode]");
  if (!card) return;
  const isCommon = card.dataset.mapMode === "common";
  card.dataset.mapMode = isCommon ? "per-media" : "common";
  btn.textContent = isCommon ? "공통 설정 보기" : "미디어별 개별 보기";
});

// ── 커스텀 아코디언 (잔여 슬롯 검증 결과 토글) ──
document.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-accordion-toggle]");
  if (!toggle) return;
  const body = toggle.nextElementSibling;
  if (!body) return;
  const isExpanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isExpanded));
  body.hidden = isExpanded;
});

// ── 운영 설정명 중복 검증 ──
const _existingOpNames = new Set([
  "강남 평일 09-18 기본 운영",
  "코엑스 매일 08-22 운영",
  "홍대 저녁 10-23 운영",
  "공항 24시간 전일 운영"
]);

const _opNameInput = document.getElementById("op-name");
const _opNameError = document.getElementById("op-name-error");
const _opNameOk = document.getElementById("op-name-ok");

if (_opNameInput) {
  function _validateOpName() {
    const val = _opNameInput.value.trim();
    if (!val) {
      _opNameError.hidden = true;
      _opNameOk.hidden = true;
      return;
    }
    if (_existingOpNames.has(val)) {
      _opNameError.hidden = false;
      _opNameOk.hidden = true;
    } else {
      _opNameError.hidden = true;
      _opNameOk.hidden = false;
    }
  }
  _opNameInput.addEventListener("input", _validateOpName);
  _opNameInput.addEventListener("blur", _validateOpName);
}

// Display type (LCD / LED) panel switching
function updateDisplayPanel() {
  const type = document.querySelector('input[name="display-type"]:checked')?.value || "lcd";
  const lcd = document.querySelector(".display-lcd");
  const led = document.querySelector(".display-led");
  if (lcd) lcd.style.display = type === "lcd" ? "block" : "none";
  if (led) led.style.display = type === "led" ? "block" : "none";
}
updateDisplayPanel();
document.querySelectorAll('input[name="display-type"]').forEach((r) =>
  r.addEventListener("change", updateDisplayPanel)
);

updateOperationSummary();
filterMediaList("all");
updateSensorOptions();
initialiseSelectedOperationMedia();
bindPriceInputs();
updatePlayPlanEmptyState();
updateProductSummary();

/* ═══════════════════════════════════════════════════════════
   N개 미디어 일괄 운영설정 적용
   ─────────────────────────────────────────────────────────── */

// ── Media data for slide panel ──────────────────────────────
const PANEL_MEDIA_DATA = [
  { id: "gangnam",  name: "강남대로 DID 01",     stb: "STB001", addr: "서울 강남구 강남대로 396",      assigned: ["op1"] },
  { id: "coex",     name: "코엑스 아트리움",      stb: "STB002", addr: "서울 강남구 봉은사로 524",      assigned: [] },
  { id: "busan",    name: "부산역 게이트 03",      stb: "STB003", addr: "부산 동구 중앙대로 206",        assigned: ["op2"] },
  { id: "euljiro",  name: "을지로 패널 12",        stb: "STB004", addr: "서울 중구 을지로 100",          assigned: ["op1"] },
  { id: "hongdae",  name: "홍대입구 미디어보드",   stb: "STB005", addr: "서울 마포구 양화로 160",        assigned: ["op3"] },
  { id: "jamsil",   name: "잠실 롯데월드몰 2F",    stb: "STB006", addr: "서울 송파구 올림픽로 300",      assigned: ["op2"] },
  { id: "daejeon",  name: "대전 갤러리아 타임월드", stb: "STB007", addr: "대전 서구 둔산대로 121",        assigned: [] },
  { id: "incheon",  name: "인천공항 T1 면세구역",  stb: "STB008", addr: "인천 중구 공항로 272",          assigned: [] },
];

// ── Checkbox — media tab ─────────────────────────────────────
const bulkBar   = document.getElementById("bulk-action-bar");
const bulkCount = document.getElementById("bulk-count");

function getCheckedMediaIds() {
  return [...document.querySelectorAll(".media-row-check:checked")].map(cb => cb.dataset.mediaId);
}

function updateBulkBar() {
  const checked = getCheckedMediaIds();
  if (checked.length > 0) {
    bulkCount.textContent = checked.length;
    bulkBar.hidden = false;
  } else {
    bulkBar.hidden = true;
  }
}

document.addEventListener("change", (e) => {
  const cb = e.target.closest(".media-row-check");
  if (cb) { updateBulkBar(); return; }

  const checkAll = e.target.closest("[data-check-all]");
  if (checkAll) {
    document.querySelectorAll(".media-row-check").forEach(c => { c.checked = checkAll.checked; });
    updateBulkBar();
  }
});

document.getElementById("bulk-clear")?.addEventListener("click", () => {
  document.querySelectorAll(".media-row-check, [data-check-all]").forEach(c => { c.checked = false; });
  updateBulkBar();
});

// ── Bulk op dropdown toggle ──────────────────────────────────
const bulkOpDropdown = document.getElementById("bulk-op-dropdown");

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-bulk-op-toggle]")) {
    bulkOpDropdown.hidden = !bulkOpDropdown.hidden;
    return;
  }
  if (!e.target.closest(".bulk-op-wrap")) {
    bulkOpDropdown.hidden = true;
  }
});

// ── Bulk op apply ────────────────────────────────────────────
document.addEventListener("click", (e) => {
  const opBtn = e.target.closest(".bulk-op-dropdown button[data-op-name]");
  if (!opBtn) return;
  const opName = opBtn.dataset.opName;
  const selectedIds = getCheckedMediaIds();
  bulkOpDropdown.hidden = true;
  showToast(`${selectedIds.length}개 미디어에 ${opName} 적용 완료`);
  document.querySelectorAll(".media-row-check, [data-check-all]").forEach(c => { c.checked = false; });
  updateBulkBar();
});

// ── Slide panel state ────────────────────────────────────────
const slideBackdrop = document.getElementById("slide-panel-backdrop");
const panelTitle    = document.getElementById("slide-panel-title");
const panelList     = document.getElementById("panel-media-list");
const panelSearch   = document.getElementById("panel-search");
const panelSelCount = document.getElementById("panel-sel-count");

let activePanelOpId   = null;
let activePanelOpName = null;
let panelSelected     = new Set();

function renderPanelList(filter = "") {
  const q = filter.toLowerCase();
  panelList.innerHTML = "";
  PANEL_MEDIA_DATA.forEach(media => {
    if (q && !media.name.toLowerCase().includes(q) && !media.addr.toLowerCase().includes(q)) return;

    const isAssigned = media.assigned.includes(activePanelOpId);
    const isChecked  = panelSelected.has(media.id);

    const li = document.createElement("li");
    li.className = "panel-media-item" + (isAssigned ? " panel-media-item--disabled" : "");

    const badgeText  = isAssigned ? "이미 적용됨" : (media.assigned.length ? "다른 설정 적용됨" : "미적용");
    const badgeClass = isAssigned ? "panel-media-item__badge--assigned" : "";

    li.innerHTML = `
      <input type="checkbox" id="panel-cb-${media.id}" ${isChecked ? "checked" : ""} ${isAssigned ? "disabled" : ""}>
      <label class="panel-media-item__info" for="panel-cb-${media.id}" style="cursor:pointer">
        <div class="panel-media-item__name">${media.name}</div>
        <div class="panel-media-item__meta">${media.stb} · ${media.addr}</div>
      </label>
      <span class="panel-media-item__badge ${badgeClass}">${badgeText}</span>`;

    li.querySelector("input").addEventListener("change", (ev) => {
      if (ev.target.checked) panelSelected.add(media.id);
      else panelSelected.delete(media.id);
      panelSelCount.textContent = panelSelected.size;
    });
    panelList.appendChild(li);
  });
}

function openSlidePanel(opId, opName) {
  activePanelOpId   = opId;
  activePanelOpName = opName;
  panelSelected.clear();
  panelSearch.value = "";
  panelTitle.textContent = `${opName}에 미디어 추가`;
  panelSelCount.textContent = "0";
  renderPanelList();
  slideBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeSlidePanel() {
  slideBackdrop.hidden = true;
  document.body.style.overflow = "";
}

// Open via + 미디어 추가 button
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-open-panel]");
  if (!btn) return;
  openSlidePanel(btn.dataset.openPanel, btn.dataset.opName);
});

// Close via close button, cancel button, or clicking the backdrop scrim (not the modal itself)
document.getElementById("slide-panel-close")?.addEventListener("click", closeSlidePanel);
document.getElementById("slide-panel-cancel")?.addEventListener("click", closeSlidePanel);
slideBackdrop?.addEventListener("click", (e) => {
  if (e.target === slideBackdrop) closeSlidePanel();
});

// Search filter
panelSearch?.addEventListener("input", (e) => {
  renderPanelList(e.target.value);
});

// Apply button
document.getElementById("slide-panel-apply")?.addEventListener("click", () => {
  if (panelSelected.size === 0) {
    showToast("추가할 미디어를 선택해주세요.");
    return;
  }
  showToast(`${panelSelected.size}개 미디어가 ${activePanelOpName}에 추가되었습니다.`);
  closeSlidePanel();
});

// ── Toast helper (reuse or create) ──────────────────────────
function showToast(msg) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.style.cssText =
      "position:fixed;bottom:32px;left:50%;transform:translateX(-50%);" +
      "background:var(--shell-800);color:#fff;font-size:13px;padding:10px 18px;" +
      "border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,.3);z-index:9999;" +
      "opacity:0;transition:opacity .2s;pointer-events:none;white-space:nowrap;";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = "1";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity = "0"; }, 2500);
}

/* ═══════════════════════════════════════════════════════════
   미디어 등록 — Location 지도 핀 드래그 & GPS 업데이트
   ─────────────────────────────────────────────────────────── */
(function () {
  const BASE_LAT = 37.49793;
  const BASE_LNG = 127.02762;
  // 1 pixel ≈ 0.000045도 (약 5m)
  const LAT_PER_PX = 0.000045;
  const LNG_PER_PX = 0.000065;

  const map  = document.getElementById("reg-location-map");
  const pin  = document.getElementById("reg-map-pin");
  const latEl = document.getElementById("gps-lat");
  const lngEl = document.getElementById("gps-lng");

  if (!map || !pin || !latEl || !lngEl) return;

  let pinX = null, pinY = null;

  function mapW() { return map.offsetWidth; }
  function mapH() { return map.offsetHeight; }

  function setPin(x, y) {
    const w = mapW(), h = mapH();
    pinX = Math.max(4, Math.min(w - 4, x));
    pinY = Math.max(16, Math.min(h - 4, y));
    pin.style.left = pinX + "px";
    pin.style.top  = pinY + "px";
    const offsetX = pinX - w / 2;
    const offsetY = pinY - h / 2;
    const lat = (BASE_LAT - offsetY * LAT_PER_PX).toFixed(5);
    const lng = (BASE_LNG + offsetX * LNG_PER_PX).toFixed(5);
    latEl.value = lat;
    lngEl.value = lng;
  }

  // Init to center after layout settles
  requestAnimationFrame(() => setPin(mapW() / 2, mapH() / 2));

  let dragging = false;
  let startX, startY, startPinX, startPinY;

  pin.addEventListener("mousedown", (e) => {
    dragging = true;
    startX = e.clientX;
    startY = e.clientY;
    startPinX = pinX;
    startPinY = pinY;
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const rect = map.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPin(x, y);
  });

  document.addEventListener("mouseup", () => { dragging = false; });

  // Touch support
  pin.addEventListener("touchstart", (e) => {
    dragging = true;
    e.preventDefault();
  }, { passive: false });

  document.addEventListener("touchmove", (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    const rect = map.getBoundingClientRect();
    setPin(touch.clientX - rect.left, touch.clientY - rect.top);
    e.preventDefault();
  }, { passive: false });

  document.addEventListener("touchend", () => { dragging = false; });

  // Also allow clicking directly on the map to move pin
  map.addEventListener("click", (e) => {
    if (e.target === pin || pin.contains(e.target)) return;
    const rect = map.getBoundingClientRect();
    setPin(e.clientX - rect.left, e.clientY - rect.top);
  });

  // Sync manual GPS input → pin position
  function gpsToPin() {
    const lat = parseFloat(latEl.value);
    const lng = parseFloat(lngEl.value);
    if (isNaN(lat) || isNaN(lng)) return;
    const offsetY = (BASE_LAT - lat) / LAT_PER_PX;
    const offsetX = (lng - BASE_LNG) / LNG_PER_PX;
    setPin(mapW() / 2 + offsetX, mapH() / 2 + offsetY);
  }
  latEl.addEventListener("change", gpsToPin);
  lngEl.addEventListener("change", gpsToPin);
})();

// ── 광고물 유형 동적 옵션 (설치 장소 연동) ──────────────
(function () {
  const AD_TYPE_OPTIONS = {
    indoor: [
      { value: "", label: "유형을 선택하세요" },
      { value: "subway",      label: "지하철 역사 내" },
      { value: "airport",     label: "공항" },
      { value: "department",  label: "백화점 / 쇼핑몰" },
      { value: "hospital",    label: "병원 / 의료시설" },
      { value: "office",      label: "오피스 빌딩" },
      { value: "gym",         label: "헬스장 / 스포츠시설" },
      { value: "convenience", label: "편의점" },
      { value: "restaurant",  label: "식음료 매장" },
    ],
    outdoor: [
      { value: "", label: "유형을 선택하세요" },
      { value: "billboard",   label: "전광판 (빌보드)" },
      { value: "building",    label: "건물 외벽" },
      { value: "bus-stop",    label: "버스 정류장" },
      { value: "street",      label: "가로변 / 도로변" },
      { value: "park",        label: "공원 / 광장" },
      { value: "stadium",     label: "경기장 / 공연장" },
    ],
    "transit-in": [
      { value: "", label: "유형을 선택하세요" },
      { value: "subway-car",  label: "지하철 차내" },
      { value: "bus-in",      label: "버스 차내" },
      { value: "taxi",        label: "택시 내부" },
      { value: "ferry",       label: "선박 / 페리 내부" },
      { value: "airplane",    label: "항공기 내부" },
    ],
    "transit-out": [
      { value: "", label: "유형을 선택하세요" },
      { value: "bus-wrap",    label: "버스 외부 래핑" },
      { value: "taxi-top",    label: "택시 루프탑" },
      { value: "train-out",   label: "기차 외부" },
    ],
  };

  const adTypeSelect = document.getElementById("ad-type");
  if (!adTypeSelect) return;

  function updateAdTypeOptions(place) {
    const opts = AD_TYPE_OPTIONS[place] || AD_TYPE_OPTIONS.indoor;
    adTypeSelect.innerHTML = opts
      .map(o => `<option value="${o.value}">${o.label}</option>`)
      .join("");
  }

  document.querySelectorAll('input[name="loc-place"]').forEach(radio => {
    radio.addEventListener("change", () => updateAdTypeOptions(radio.value));
  });
})();

// ── Date Range Picker ─────────────────────────────────────────────────
(function () {
  const KR_M = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];

  const toYMD = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const fromYMD = s => { if (!s) return null; const [y,m,d] = s.split('-').map(Number); return new Date(y,m-1,d); };
  const fmtKR = d => d ? `${d.getFullYear()}. ${d.getMonth()+1}. ${d.getDate()}.` : '';
  const addM = (y, m, n) => {
    let nm = m + n, ny = y;
    while (nm > 11) { nm -= 12; ny++; }
    while (nm < 0)  { nm += 12; ny--; }
    return [ny, nm];
  };

  document.querySelectorAll('[data-drp]').forEach(root => {
    const inS = root.querySelector('.schedule-start-date');
    const inE = root.querySelector('.schedule-end-date');
    let sDate = fromYMD(inS?.value);
    let eDate = fromYMD(inE?.value);
    let hDate = null;
    // phase: 'start' | 'end' | 'done'
    let phase = (sDate && eDate) ? 'done' : sDate ? 'end' : 'start';
    const today = new Date(); today.setHours(0,0,0,0);
    let bY = sDate?.getFullYear() ?? today.getFullYear();
    let bM = sDate?.getMonth()    ?? today.getMonth();

    const startLbl = root.querySelector('[data-drp-start-label]');
    const endLbl   = root.querySelector('[data-drp-end-label]');
    const countEl  = root.querySelector('[data-drp-count]');

    function sync() {
      if (inS) { inS.value = sDate ? toYMD(sDate) : ''; inS.dispatchEvent(new Event('change')); }
      if (inE) { inE.value = eDate ? toYMD(eDate) : ''; inE.dispatchEvent(new Event('change')); }
    }

    function renderSummary() {
      if (startLbl) {
        startLbl.textContent = sDate ? fmtKR(sDate) : '날짜 선택';
        startLbl.classList.toggle('drp-summary__val--ph', !sDate);
      }
      if (endLbl) {
        endLbl.textContent = eDate ? fmtKR(eDate) : '날짜 선택';
        endLbl.classList.toggle('drp-summary__val--ph', !eDate);
      }
      if (countEl) {
        countEl.textContent = (sDate && eDate) ? `${Math.round((eDate - sDate) / 864e5)}일` : '';
      }
    }

    function renderGrid(idx, y, m) {
      const titleEl = root.querySelector(`[data-drp-title="${idx}"]`);
      const gridEl  = root.querySelector(`[data-drp-grid="${idx}"]`);
      if (!titleEl || !gridEl) return;
      titleEl.textContent = `${y}년 ${KR_M[m]}`;

      const firstDow = new Date(y, m, 1).getDay();
      const lastDay  = new Date(y, m+1, 0).getDate();

      const s = sDate ? sDate.getTime() : null;
      const effEnd = (phase === 'end' && hDate && sDate && hDate >= sDate) ? hDate : eDate;
      const e = effEnd ? effEnd.getTime() : null;

      let html = '';
      for (let i = 0; i < firstDow; i++) {
        html += '<span class="drp-day drp-day--empty"></span>';
      }
      for (let d = 1; d <= lastDay; d++) {
        const date = new Date(y, m, d);
        const t = date.getTime();
        const dow = date.getDay();
        const cls = ['drp-day'];
        if (dow === 0) cls.push('drp-day--sun');
        if (t === today.getTime()) cls.push('drp-day--today');
        if (s && t === s) cls.push('drp-day--start');
        if (e && t === e) cls.push('drp-day--end');
        if (s && e && t > s && t < e) {
          cls.push((phase === 'end' && !eDate) ? 'drp-day--hover-range' : 'drp-day--in-range');
        }
        html += `<button type="button" class="${cls.join(' ')}" data-date="${toYMD(date)}"><span class="drp-day__num">${d}</span></button>`;
      }
      gridEl.innerHTML = html;
    }

    function renderAll() {
      renderSummary();
      renderGrid(0, bY, bM);
      const [nY, nM] = addM(bY, bM, 1);
      renderGrid(1, nY, nM);
    }

    root.querySelectorAll('[data-drp-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        [bY, bM] = addM(bY, bM, Number(btn.dataset.drpNav));
        renderAll();
      });
    });

    root.addEventListener('click', e => {
      const btn = e.target.closest('[data-date]');
      if (!btn) return;
      const date = fromYMD(btn.dataset.date);
      if (!date) return;

      if (phase === 'start' || phase === 'done') {
        sDate = date; eDate = null; hDate = null; phase = 'end';
      } else {
        if (date.getTime() === sDate.getTime()) {
          sDate = null; eDate = null; phase = 'start';
          sync(); renderAll(); return;
        } else if (date < sDate) {
          eDate = sDate; sDate = date;
        } else {
          eDate = date;
        }
        hDate = null; phase = 'done';
      }
      sync();
      renderAll();
    });

    root.addEventListener('mouseover', e => {
      if (phase !== 'end') return;
      const btn = e.target.closest('[data-date]');
      if (!btn) return;
      const d = fromYMD(btn.dataset.date);
      if (!d) return;
      if (hDate && d.getTime() === hDate.getTime()) return; // skip redundant re-render
      hDate = d;
      renderGrid(0, bY, bM);
      const [nY, nM] = addM(bY, bM, 1);
      renderGrid(1, nY, nM);
    });

    root.addEventListener('mouseleave', () => {
      if (phase !== 'end') return;
      hDate = null;
      renderGrid(0, bY, bM);
      const [nY, nM] = addM(bY, bM, 1);
      renderGrid(1, nY, nM);
    });

    const resetBtn = root.querySelector('[data-drp-reset]');
    if (resetBtn) {
      resetBtn.addEventListener('click', e => {
        e.stopPropagation();
        sDate = null; eDate = null; hDate = null; phase = 'start';
        sync(); renderAll();
      });
    }

    // Start time toggle
    const timeToggle = root.querySelector('[data-drp-time-toggle]');
    const timePicker = root.querySelector('.drp-time-picker');
    if (timeToggle && timePicker) {
      // Populate hour options
      const hourSel = timePicker.querySelector('.drp-time-hour');
      const minSel  = timePicker.querySelector('.drp-time-min');
      if (hourSel) {
        for (let h = 0; h < 24; h++) {
          const opt = document.createElement('option');
          opt.value = opt.textContent = String(h).padStart(2, '0');
          if (h === 9) opt.selected = true;
          hourSel.appendChild(opt);
        }
      }
      if (minSel) {
        ['00', '15', '30', '45'].forEach((m, i) => {
          const opt = document.createElement('option');
          opt.value = opt.textContent = m;
          if (i === 0) opt.selected = true;
          minSel.appendChild(opt);
        });
      }
      timeToggle.addEventListener('change', () => {
        timePicker.hidden = !timeToggle.checked;
      });
    }

    renderAll();
    // Re-render after layout settles (handles cases where container has no width yet)
    requestAnimationFrame(() => renderAll());
  });

  // ── 송출 현황 글로벌 필터 ──────────────────────────────────────

  const _statusMediaData = {
    '강남대로 DID 01':    { total: 1990, target: 2100, lastAt: '06.12 14:35', warn: false },
    '홍대입구 미디어보드': { total: 1740, target: 2000, lastAt: '06.12 13:50', warn: true  },
    '잠실 롯데월드몰 2F': { total: 1860, target: 2050, lastAt: '06.12 14:20', warn: false },
  };

  const _statusDailyData = {
    '전체': {
      labels:   ['6/1','6/2','6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12'],
      보장:     [720,720,720,720,720,720,720,720,720,720,720,720],
      실적:     [705,712,688,700,723,686,712,655,686,720,712,583],
      달성:     [705,712,688,700,723,686,712,655,686,720,712,583],
      노출:     [682,692,666,678,702,664,690,634,664,700,692,562],
      주목인구: [409,415,400,407,421,398,414,380,398,420,415,337],
    },
    '강남대로 DID 01': {
      labels:   ['6/1','6/2','6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12'],
      보장:     [200,200,200,200,200,200,200,200,200,200,200,200],
      실적:     [195,198,188,194,205,190,198,173,190,200,198,161],
      달성:     [195,198,188,194,205,190,198,173,190,200,198,161],
      노출:     [188,192,182,188,200,184,192,168,185,195,192,155],
      주목인구: [113,115,109,113,120,110,115,101,111,117,115, 93],
    },
    '홍대입구 미디어보드': {
      labels:   ['6/1','6/2','6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12'],
      보장:     [200,200,200,200,200,200,200,200,200,200,200,200],
      실적:     [188,196,176,188,210,180,196,146,180,200,196,174],
      달성:     [188,196,176,188,210,180,196,146,180,200,196,174],
      노출:     [180,190,170,182,205,174,190,142,174,196,190,168],
      주목인구: [108,114,102,109,123,104,114, 85,104,118,114,101],
    },
    '잠실 롯데월드몰 2F': {
      labels:   ['6/1','6/2','6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12'],
      보장:     [180,180,180,180,180,180,180,180,180,180,180,180],
      실적:     [180,180,180,180,180,180,180,180,180,180,180,180],
      달성:     [180,180,180,180,180,180,180,180,180,180,180,180],
      노출:     [174,178,176,176,178,176,178,174,176,176,178,176],
      주목인구: [104,107,106,106,107,106,107,104,106,106,107,106],
    },
  };

  let _statusFilter = { media: '전체', dateFrom: '2026-06-01', dateTo: '2026-06-12' };

  function _filterByDate(data, from, to) {
    const fromDt = new Date(from);
    const toDt   = new Date(to);
    const out = { labels: [], 보장: [], 실적: [], 달성: [], 노출: [], 주목인구: [] };
    data.labels.forEach((lbl, i) => {
      const [m, d] = lbl.split('/').map(Number);
      const dt = new Date(2026, m - 1, d);
      if (dt >= fromDt && dt <= toDt) {
        out.labels.push(lbl);
        ['보장','실적','달성','노출','주목인구'].forEach(k => { if (data[k]) out[k].push(data[k][i]); });
      }
    });
    return out;
  }

  function applyStatusFilter() {
    const { media, dateFrom, dateTo } = _statusFilter;
    const mediaKeys = media === '전체'
      ? Object.keys(_statusMediaData)
      : [media];

    // ① KPI strip
    const totalActual = mediaKeys.reduce((s, k) => s + _statusMediaData[k].total, 0);
    const totalTarget = mediaKeys.reduce((s, k) => s + _statusMediaData[k].target, 0);
    const overallPct  = Math.round(totalActual / totalTarget * 100);
    const kpiTotalEl = document.querySelector('[data-kpi="total"]');
    const kpiPctEl   = document.querySelector('[data-kpi="pct"]');
    if (kpiTotalEl) kpiTotalEl.textContent = totalActual.toLocaleString();
    if (kpiPctEl)   kpiPctEl.textContent   = overallPct;

    // ② 보장 달성률 bars — 날짜 범위 표시
    const barsEl = document.querySelector('.guarantee-bars');
    const dateEl = document.querySelector('.guarantee-chart-card__date');
    if (dateEl) {
      const fmt = s => s.replace('2026-', '').replace('-', '/');
      dateEl.textContent = `(${fmt(dateFrom)} ~ ${fmt(dateTo)})`;
    }
    if (barsEl) {
      const rows = mediaKeys.map(k => {
        const d   = _statusMediaData[k];
        const pct = Math.round(d.total / d.target * 100);
        const warnFill   = d.warn ? ' guarantee-bar__fill--warn' : '';
        const warnRemain = d.warn ? ' guarantee-bar__remain--warn' : '';
        return `<div class="guarantee-bar-row">
          <span class="guarantee-bar__name">${k}</span>
          <div class="guarantee-bar__track"><div class="guarantee-bar__fill${warnFill}" style="width:${pct}%"></div></div>
          <span class="guarantee-bar__meta">${d.total.toLocaleString()} / ${d.target.toLocaleString()}회</span>
          <span class="guarantee-bar__remain${warnRemain}">${pct}% · <em>${(d.target - d.total).toLocaleString()}회 남음</em></span>
        </div>`;
      });
      if (media === '전체') {
        rows.push(`<div class="guarantee-bar-row guarantee-bar-row--total">
          <span class="guarantee-bar__name">합계</span>
          <div class="guarantee-bar__track"><div class="guarantee-bar__fill" style="width:${overallPct}%"></div></div>
          <span class="guarantee-bar__meta">${totalActual.toLocaleString()} / ${totalTarget.toLocaleString()}회</span>
          <span class="guarantee-bar__remain">${overallPct}% · <em>${(totalTarget - totalActual).toLocaleString()}회 남음</em></span>
        </div>`);
      }
      barsEl.innerHTML = rows.join('');
    }

    // ③ 일일 송출량 차트
    const dailyChart = chartInstances['schedule-daily-chart'];
    if (dailyChart) {
      const raw      = _statusDailyData[media] || _statusDailyData['전체'];
      const filtered = _filterByDate(raw, dateFrom, dateTo);
      dailyChart.data.labels           = filtered.labels;
      dailyChart.data.datasets[0].data = filtered.보장;
      dailyChart.data.datasets[1].data = filtered.실적;
      if (dailyChart.data.datasets[2]) dailyChart.data.datasets[2].data = filtered.달성;
      dailyChart.update();
    }

    // ④ 성과 데이터 차트
    const perfChart = chartInstances['schedule-performance-chart'];
    if (perfChart) {
      const raw      = _statusDailyData[media] || _statusDailyData['전체'];
      const filtered = _filterByDate(raw, dateFrom, dateTo);
      const avg노출  = filtered.노출.length
        ? Math.round(filtered.노출.reduce((a, b) => a + b, 0) / filtered.노출.length)
        : 0;
      perfChart.data.labels           = filtered.labels;
      perfChart.data.datasets[0].data = filtered.노출;
      perfChart.data.datasets[1].data = filtered.주목인구;
      perfChart.data.datasets[2].data = filtered.labels.map(() => avg노출);
      perfChart.data.datasets[2].label = `평균 노출 (${avg노출}회)`;
      perfChart.update();
    }

    // ⑤ 미디어별 송출 현황 테이블
    const statTbody = document.querySelector('.media-stat-table tbody');
    if (statTbody) {
      statTbody.innerHTML = mediaKeys.map(k => {
        const d   = _statusMediaData[k];
        const cls = d.warn ? 'status-warn' : 'status-good';
        const txt = d.warn ? '확인 필요'   : '정상';
        return `<tr>
          <td>${k}</td>
          <td>${d.target.toLocaleString()}회</td>
          <td>${d.total.toLocaleString()}회</td>
          <td><span class="status ${cls}">${txt}</span></td>
          <td>${d.lastAt}</td>
        </tr>`;
      }).join('');
    }

    // ⑥ 송출 로그 미디어 셀렉트 동기화
    const logMediaSel = document.querySelector('[aria-label="미디어 필터"]');
    if (logMediaSel) {
      logMediaSel.value = media === '전체' ? '전체 미디어' : media;
      logMediaSel.dispatchEvent(new Event('change'));
    }
  }

  window._applyStatusFilter = applyStatusFilter;

  // 미디어 chip 클릭
  document.addEventListener('click', e => {
    const chip = e.target.closest('[data-status-media]');
    if (!chip) return;
    document.querySelectorAll('[data-status-media]').forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    _statusFilter.media = chip.dataset.statusMedia;
    applyStatusFilter();
  });

  // 날짜 변경
  document.addEventListener('change', e => {
    if (e.target.matches('[data-status-date-from]')) {
      _statusFilter.dateFrom = e.target.value;
      applyStatusFilter();
    } else if (e.target.matches('[data-status-date-to]')) {
      _statusFilter.dateTo = e.target.value;
      applyStatusFilter();
    }
  });

})();
