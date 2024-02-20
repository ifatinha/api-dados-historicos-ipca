const historicoIPCA = [
    { id: 1, ano: 2015, mes: 1, ipca: 1.24 },
    { id: 2, ano: 2015, mes: 2, ipca: 1.22 },
    { id: 3, ano: 2015, mes: 3, ipca: 1.32 },
    { id: 4, ano: 2015, mes: 4, ipca: 0.71 },
    { id: 5, ano: 2015, mes: 5, ipca: 0.74 },
    { id: 6, ano: 2015, mes: 6, ipca: 0.79 },
    { id: 7, ano: 2015, mes: 7, ipca: 0.62 },
    { id: 8, ano: 2015, mes: 8, ipca: 0.22 },
    { id: 9, ano: 2015, mes: 9, ipca: 0.54 },
    { id: 10, ano: 2015, mes: 10, ipca: 0.82 },
    { id: 11, ano: 2015, mes: 11, ipca: 1.01 },
    { id: 12, ano: 2015, mes: 12, ipca: 0.96 },
    { id: 1, ano: 2016, mes: 1, ipca: 1.27 },
    { id: 2, ano: 2016, mes: 2, ipca: 0.90 },
    { id: 3, ano: 2016, mes: 3, ipca: 0.43 },
    { id: 4, ano: 2016, mes: 4, ipca: 0.61 },
    { id: 5, ano: 2016, mes: 5, ipca: 0.78 },
    { id: 6, ano: 2016, mes: 6, ipca: 0.35 },
    { id: 7, ano: 2016, mes: 7, ipca: 0.52 },
    { id: 8, ano: 2016, mes: 8, ipca: 0.44 },
    { id: 9, ano: 2016, mes: 9, ipca: 0.08 },
    { id: 10, ano: 2016, mes: 10, ipca: 0.26 },
    { id: 11, ano: 2016, mes: 11, ipca: 1.18 },
    { id: 12, ano: 2016, mes: 12, ipca: 0.30 },
    { id: 1, ano: 2017, mes: 1, ipca: 0.32 },
    { id: 2, ano: 2017, mes: 2, ipca: 0.33 },
    { id: 3, ano: 2017, mes: 3, ipca: 0.25 },
    { id: 4, ano: 2017, mes: 4, ipca: 0.14 },
    { id: 5, ano: 2017, mes: 5, ipca: 0.31 },
    { id: 6, ano: 2017, mes: 6, ipca: -0.23 },
    { id: 7, ano: 2017, mes: 7, ipca: 0.24 },
    { id: 8, ano: 2017, mes: 8, ipca: 0.19 },
    { id: 9, ano: 2017, mes: 9, ipca: 0.16 },
    { id: 10, ano: 2017, mes: 10, ipca: 0.42 },
    { id: 11, ano: 2017, mes: 11, ipca: 0.28 },
    { id: 12, ano: 2017, mes: 12, ipca: 0 },
    { id: 1, ano: 2018, mes: 1, ipca: 0.29 },
    { id: 2, ano: 2018, mes: 2, ipca: 0.32 },
    { id: 3, ano: 2018, mes: 3, ipca: 0.09 },
    { id: 4, ano: 2018, mes: 4, ipca: 0.22 },
    { id: 5, ano: 2018, mes: 5, ipca: 0.40 },
    { id: 6, ano: 2018, mes: 6, ipca: 1.26 },
    { id: 7, ano: 2018, mes: 7, ipca: 0.33 },
    { id: 8, ano: 2018, mes: 8, ipca: -0.09 },
    { id: 9, ano: 2018, mes: 9, ipca: 0.48 },
    { id: 10, ano: 2018, mes: 10, ipca: 0.45 },
    { id: 11, ano: 2018, mes: 11, ipca: -0.21 },
    { id: 12, ano: 2018, mes: 12, ipca: 0.15 },
    { id: 1, ano: 2019, mes: 1, ipca: 0.32 },
    { id: 2, ano: 2019, mes: 2, ipca: 0.43 },
    { id: 3, ano: 2019, mes: 3, ipca: 0.75 },
    { id: 4, ano: 2019, mes: 4, ipca: 0.57 },
    { id: 5, ano: 2019, mes: 5, ipca: 0.13 },
    { id: 6, ano: 2019, mes: 6, ipca: 0.01 },
    { id: 7, ano: 2019, mes: 7, ipca: 0.19 },
    { id: 8, ano: 2019, mes: 8, ipca: 0.11 },
    { id: 9, ano: 2019, mes: 9, ipca: -0.04 },
    { id: 10, ano: 2019, mes: 10, ipca: 0.10 },
    { id: 11, ano: 2019, mes: 11, ipca: 1.51 },
    { id: 12, ano: 2019, mes: 12, ipca: 1.15 },
    { id: 1, ano: 2020, mes: 1, ipca: 0.21 },
    { id: 2, ano: 2020, mes: 2, ipca: 0.25 },
    { id: 3, ano: 2020, mes: 3, ipca: 0.07 },
    { id: 4, ano: 2020, mes: 4, ipca: -0.31 },
    { id: 5, ano: 2020, mes: 5, ipca: -0.38 },
    { id: 6, ano: 2020, mes: 6, ipca: 0.26 },
    { id: 7, ano: 2020, mes: 7, ipca: 0.36 },
    { id: 8, ano: 2020, mes: 8, ipca: 0.24 },
    { id: 9, ano: 2020, mes: 9, ipca: 0.64 },
    { id: 10, ano: 2020, mes: 10, ipca: 0.86 },
    { id: 11, ano: 2020, mes: 11, ipca: 0.89 },
    { id: 12, ano: 2020, mes: 12, ipca: 1.35 },
    { id: 1, ano: 2021, mes: 1, ipca: 0.25 },
    { id: 2, ano: 2021, mes: 2, ipca: 0.86 },
    { id: 3, ano: 2021, mes: 3, ipca: 0.93 },
    { id: 4, ano: 2021, mes: 4, ipca: 0.31 },
    { id: 5, ano: 2021, mes: 5, ipca: 0.83 },
    { id: 6, ano: 2021, mes: 6, ipca: 0.53 },
    { id: 7, ano: 2021, mes: 7, ipca: 0.96 },
    { id: 8, ano: 2021, mes: 8, ipca: 0.87 },
    { id: 9, ano: 2021, mes: 9, ipca: 1.16 },
    { id: 10, ano: 2021, mes: 10, ipca: 1.25 },
    { id: 11, ano: 2021, mes: 11, ipca: 0.95 },
    { id: 12, ano: 2021, mes: 12, ipca: 0.73 },
]