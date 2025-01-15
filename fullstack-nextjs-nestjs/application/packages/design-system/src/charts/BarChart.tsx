import React, { ReactElement, useCallback, useMemo } from "react";
import Chart from "react-apexcharts";
import { ResultChartInfo } from "@unisurvey/interfaces/base";
import styled from "styled-components";
import { ChartUnit } from "@unisurvey/interfaces/enums";
import { ApexOptions } from "apexcharts";

const Container = styled.div`
  color: #666666;

  .apexcharts-tooltip {
    background: #ffffff;
  }
`;

export interface BarChartProps
  extends Pick<
    ResultChartInfo,
    "questionId" | "categories" | "values" | "colors" | "percents"
  > {
  chartUnit?: ChartUnit;
}

const options: ApexOptions = {
  chart: {
    id: "horizontal-bar",
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
    fontFamily: "NanumSquare",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      distributed: true,
      dataLabels: {
        position: "top",
      },
      horizontal: true,
    },
  },
  xaxis: {
    max: 100,
    categories: [],
    labels: {
      show: true,
      style: {
        colors: ["#999999"],
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: ["#333333"],
        fontWeight: "bold",
        fontSize: "12px",
      },
    },
  },
  tooltip: {
    theme: "light", // 'light' 또는 'dark'로 설정
    enabled: true,
    style: {
      fontSize: "12px",
      fontFamily: "NanumSquare",
    },
    x: {
      show: true,
    },
    y: {
      formatter: (val: number) => `${val}`, // formatter가 undefined가 아닌 함수로 정의
      title: {
        formatter: (seriesName: string) => "",
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#90A4AE",
    strokeDashArray: 1.5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  legend: {
    show: true,
    horizontalAlign: "left",
  },
  dataLabels: {
    offsetY: 0,
    offsetX: 30,
    style: {
      fontSize: "14px",
      fontWeight: "bold",
      colors: ["#666666"],
    },
  },
};

type CustomTooltipProps = {
  series: number[][];
  seriesIndex: number;
  dataPointIndex: number;
  w: any; // ApexCharts의 전체 객체를 포함합니다
};

const containsHtml = (str: string) => /<\/?[a-z][\s\S]*>/i.test(str);

const BarChart = React.memo((props: BarChartProps): ReactElement => {
  const { categories, percents, values, colors, chartUnit } = props;

  const textCategories = useMemo(() => {
    return categories.map((category) => {
      const cleanedCategory = category.replace(/\[TEXT_\d+\]/g, "");
      if (containsHtml(cleanedCategory)) {
        const div = document.createElement("div");
        div.innerHTML = cleanedCategory;
        return div.textContent || div.innerText || "";
      } else {
        return cleanedCategory;
      }
    });
  }, [categories]);

  const dataLabelsFormatter = useCallback(
    (val: string | number, opts: any) => {
      let label = val;
      if (Number.isInteger(+val)) label = `${label}.0`;
      switch (chartUnit) {
        case ChartUnit.PERCENT: {
          return `${label}%`;
        }
        case ChartUnit.NUMBER: {
          return `${values[opts.dataPointIndex]}명`;
        }
        case ChartUnit.BOTH: {
          return `${label}% (${values[opts.dataPointIndex]}명)`;
        }
        default: {
          return label;
        }
      }
    },
    [chartUnit, values],
  );

  const getOffsetX = useCallback(() => {
    for (let percent of percents) {
      if (chartUnit === ChartUnit.BOTH && !Number.isInteger(percent)) return 65;
      if (chartUnit === ChartUnit.NUMBER && !Number.isInteger(percent))
        return 35;
      if (!Number.isInteger(percent)) return 47;
    }
    if (chartUnit === ChartUnit.BOTH) return 50;
    return 30;
  }, [chartUnit, percents]);

  const chartOptions = useMemo(
    () => ({
      ...options,
      colors,
      xaxis: { ...options.xaxis, categories: textCategories },
      dataLabels: {
        ...options.dataLabels,
        offsetX: getOffsetX(),
        formatter: dataLabelsFormatter,
      },
      tooltip: {
        custom: ({
          series,
          seriesIndex,
          dataPointIndex,
          w,
        }: CustomTooltipProps) => {
          const category = categories[dataPointIndex] ?? "-";
          const value = series?.[seriesIndex]?.[dataPointIndex] ?? 0;
          return `
            <div style="
              padding: 0.8em; 
              width: 240px; 
              white-space: normal; 
              word-wrap: break-word; 
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              border-radius: 5px;
              background-color: #ffffff;
              border: 1px solid #e0e0e0;
            ">
              ${category}
              <p style="margin-top: 8px; font-weight: bold;">${Number.isInteger(value) ? `${value}.0` : value}%</p>
            </div>`;
        },
      },
    }),
    [colors, categories, dataLabelsFormatter, getOffsetX],
  );
  return (
    <>
      <Container>
        <Chart
          key={chartUnit}
          type="bar"
          width="100%"
          options={chartOptions}
          series={[{ data: percents }]}
        />
      </Container>
    </>
  );
});

export default BarChart;
