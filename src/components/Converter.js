import './Converter.scss';
import converterStore from '../store/coverterStore';

const Converter = () => {
  const { usd, eur, setUsd, setEur } = converterStore();
  const exchangeRateEurUsd = 1.07;

  const handleUsdChange = (e) => {
    // Ограничение ввода только цифр и точек
    let valueUsd = e.target.value.replace(/[^0-9.]/g, '');

    // Ограничение ввода количества точек не более одной
    if ((valueUsd.match(/\./g) || []).length > 1) {
      valueUsd = valueUsd.slice(0, valueUsd.lastIndexOf('.'));
    }
    // Ограничение ввода количества десятичных знаков до двух
    if (valueUsd.includes('.')) {
      const valueUsdSplit = valueUsd.split('.');
      if (valueUsdSplit[1].length > 2) {
        valueUsd = `${valueUsdSplit[0]}.${valueUsdSplit[1].slice(0, 2)}`;
      }
    }

    setUsd(valueUsd);
    setEur((valueUsd * exchangeRateEurUsd).toFixed(2));
  };

  const handleEurChange = (e) => {
    // Ограничение ввода только цифр и точек
    let valueEur = e.target.value.replace(/[^0-9.]/g, '');

    // Ограничение ввода количества точек не более одной
    if ((valueEur.match(/\./g) || []).length > 1) {
      valueEur = valueEur.substring(0, valueEur.lastIndexOf('.'));
    }
    // Ограничение ввода количества десятичных знаков до двух
    if (valueEur.includes('.')) {
      const valueEurSplit = valueEur.split('.');
      if (valueEurSplit[1].length > 2) {
        valueEur = `${valueEurSplit[0]}.${valueEurSplit[1].substring(0, 2)}`;
      }
    }

    setEur(valueEur);
    setUsd((valueEur / exchangeRateEurUsd).toFixed(2));
  };

  return (
    <div className="currency-converter">
      <div className="input-currency-group">
        <label>USD</label>
        <input type="text" placeholder = "0.00" value={usd} onChange={handleUsdChange} />
      </div>
      <div className="input-currency-group">
        <label>EUR</label>
        <input type="text" placeholder = "0.00" value={eur} onChange={handleEurChange} />
      </div>
    </div>
  );
};

export default Converter;
