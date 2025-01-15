import { ReactElement } from "react";
import { ResultChartInfo } from "@unisurvey/interfaces/base";
import { FlexBox } from "@pmi/ui/boxes";
import classNames from "classnames";
import { Typography } from "@pmi/ui/text";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Context } from "chartjs-plugin-datalabels";
import { ChartUnit } from "@unisurvey/interfaces/enums";
import { customTooltipHandler } from "./drawHelper";

export interface DoughnutChartProps
  extends Pick<
    ResultChartInfo,
    "categories" | "values" | "colors" | "percents"
  > {
  chartId: string;
  chartUnit?: ChartUnit;
}

const LegendLayout = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 0 16px;

  .legend-item {
    display: flex;
    width: fit-content;
    gap: 4px;
    align-items: center;
    justify-content: center;
  }

  img {
    display: block;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const LegendMarker = styled.div<{ $backgroundColor?: string }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const DoughnutChart = (props: DoughnutChartProps): ReactElement => {
  const { chartId, categories, values, percents, colors, chartUnit } = props;
  const options: any = {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        anchor: "center",
        // borderColor: "#3f3f3f",
        // textStrokeColor: "#3f3f3f",
        // textStrokeWidth: 2,
        color: "#ffffff",
        align: "end",
        font: (context: Context) => {
          const { dataIndex: i, dataset } = context;
          const dataArray = dataset.data as number[];
          const font = { family: "NanumSquare", weight: 700 };
          let size = 13;
          if (!dataArray[i]) {
            return {
              ...font,
              size: chartUnit === ChartUnit.BOTH ? 11 : size,
            };
          }
          const newArray = [...dataArray];
          newArray.sort((a: number, b: number) => b - a);
          const sortedArray = Array.from(new Set(newArray));
          const rank = sortedArray.indexOf(dataArray[i]) + 1;
          switch (rank) {
            case 1: {
              size += 3;
              break;
            }
            case 2:
            case 3: {
              size += 2;
              break;
            }
            default: {
              size += 1;
            }
          }
          return {
            ...font,
            size: chartUnit === ChartUnit.BOTH ? 11 : size,
          };
        },
        formatter: (value: any, context: Context) => {
          let label = value;
          if (Number.isInteger(+value)) label = `${label}.0`;
          switch (chartUnit) {
            case ChartUnit.PERCENT:
              return `${label}%`;
            case ChartUnit.NUMBER:
              return `${values[context.dataIndex]}명`;
            case ChartUnit.BOTH:
              return `${label}% (${values[context.dataIndex]}명)`;
            default:
              return label;
          }
        },
        offset: (context: Context) => {
          const { dataIndex: i, dataset } = context;
          const dataArray = dataset.data as number[];
          const newData = dataArray.filter((item: number) => item) as number[];
          const isLong = 7 < newData.length;
          const isBoth = chartUnit === ChartUnit.BOTH;
          if (!dataArray[i]) return isLong ? 0 : -10;
          return isLong ? (isBoth ? -14 : -18) : isBoth ? -32 : -28;
        },
      },
      legend: {
        position: "bottom",
        display: false,
        labels: {
          font: {
            family: "NanumSquare",
          },
          boxWidth: 14,
          boxHeight: 22,
          padding: 10,
        },
      },
      tooltip: {
        enabled: false,
        position: "nearest",
        external: customTooltipHandler,
      },
    },
  };

  const data = {
    labels: categories,
    datasets: [
      {
        data: percents,
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const removeEtcText = (category: string): string => {
    return category.replace(/\[TEXT_\d+\]/g, "");
  };

  return (
    <>
      <FlexBox className={classNames("pt-40", "pb-45")}>
        <Doughnut height="322" width="322" data={data} options={options} />
      </FlexBox>
      <LegendLayout>
        {categories.map((category: any, i: number) => (
          <div
            className={"legend-item"}
            key={`${chartId}-${category}_${crypto.randomUUID()}`}
          >
            <LegendMarker $backgroundColor={colors[i]} />
            <Typography
              $fontSize="12"
              key={category}
              $fontType="nanumSquare"
              dangerouslySetInnerHTML={{ __html: removeEtcText(category) }}
              style={{
                display: "flex",
                gap: "4px",
                alignItems: "center",
                flexDirection: "column",
              }}
            />
          </div>
        ))}
      </LegendLayout>
    </>
  );
};

export default DoughnutChart;
