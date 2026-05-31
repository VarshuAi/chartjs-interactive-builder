
            window.plotChart = function() {
                const c = document.getElementById('chart-container');
                const valStr = document.getElementById('chart-vals').value;
                c.innerHTML = '';
                valStr.split(',').forEach(v => {
                    const h = parseFloat(v.trim() || 0);
                    const bar = document.createElement('div');
                    bar.className = 'chart-bar';
                    bar.style.height = `${h}%`;
                    c.appendChild(bar);
                });
            }
            plotChart();
        