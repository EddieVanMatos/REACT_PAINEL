// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import './Monitoramento.css';

const Monitoramento = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Atendimentos Mensais',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: '#4a90e2',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div className="monitoramento">
      <h2>Monitoramento de Atendimentos</h2>
      <canvas ref={chartRef} id="monitoramentoChart" width="400" height="200"></canvas>
    </div>
  );
};

export default Monitoramento;
