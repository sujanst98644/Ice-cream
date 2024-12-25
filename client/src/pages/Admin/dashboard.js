import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Admin Dashboard</h1>
            <div style={{ marginBottom: '20px', width: '80%', height: '300px' }}>
                <Line data={data} options={options} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, marginRight: '20px' }}>
                    <h2>Financial Report</h2>
                    <p>Details about the financial report...</p>
                </div>
                <div style={{ flex: 1 }}>
                    <h2>Product Details</h2>
                    <p>Details about the ice cream products...</p>
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h2>Sales Report</h2>
                <p>Details about the sales report...</p>
            </div>
        </div>
    );
};

export default Dashboard;