/**
 * @description 차트 그리기 헬퍼 함수
 */

/**
 * @description 툴팁 그리기
 * @param chart react-chartjs-2 차트 객체
 */
export const createCustomTooltip = (chart: any) => {
  let tooltipEl = chart.canvas.parentNode.querySelector("div");

  if (!tooltipEl) {
    //"rgba(0, 0, 0, 0.7)"
    tooltipEl = document.createElement("div");
    tooltipEl.style.background = "#fff";
    tooltipEl.style.border = "1px solid #ededed";
    tooltipEl.style.boxShadow = "0 0px 4px 2px rgba(0, 0, 0, 0.1)";
    tooltipEl.style.borderRadius = "3px";
    tooltipEl.style.color = "#313131";
    tooltipEl.style.maxWidth = "200px";
    tooltipEl.style.display = "flex";
    tooltipEl.style.justifyContent = "flex-start";
    tooltipEl.style.textAlign = "left";
    tooltipEl.style.width = "100%";
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = "none";
    tooltipEl.style.position = "absolute";
    tooltipEl.style.transform = "translate(-50%, 0)";
    tooltipEl.style.transition = "all .1s ease";

    const table = document.createElement("table");
    table.style.margin = "0px";

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

/**
 * @description 도넛 차트 툴팁 커스텀
 * // HTML Tooltip
 * @param context chartjs-plugin-datalabels 플러그인 컨텍스트 객체
 */
export const customTooltipHandler = (context: any) => {
  const { chart, tooltip } = context;
  const tooltipEl = createCustomTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map((b: any) => b.lines);
    const tableHead = document.createElement("thead");

    titleLines.forEach((title: string) => {
      const tr = document.createElement("tr");
      tr.style.borderWidth = "0";

      const th = document.createElement("th");
      th.style.borderWidth = "0";
      th.innerHTML = title;
      tr.appendChild(th);
      tableHead.appendChild(tr);
    });

    const tableBody = document.createElement("tbody");
    bodyLines.forEach((body: any, i: number) => {
      const colors = tooltip.labelColors[i];

      const span = document.createElement("span");
      span.style.background = colors.backgroundColor;
      span.style.borderColor = colors.borderColor;
      span.style.borderWidth = "2px";
      span.style.marginRight = "10px";
      span.style.height = "10px";
      span.style.width = "10px";
      span.style.display = "inline-block";

      const tr = document.createElement("tr");
      tr.style.backgroundColor = "inherit";
      tr.style.borderWidth = "0";

      const td = document.createElement("td");
      td.style.borderWidth = "0";
      const text = document.createTextNode(Number.isInteger(+body[0]) ? `${body[0]}.0%` : `${body[0]}%`);
      td.appendChild(span);
      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector("table");

    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);
  }

  const chartRect = chart.canvas.getBoundingClientRect();
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left =
    chartRect.left + window.scrollX + tooltip.caretX + "px";
  tooltipEl.style.top = chartRect.top + window.scrollY + tooltip.caretY + "px";
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding =
    tooltip.options.padding + "px " + tooltip.options.padding + "px";
};
